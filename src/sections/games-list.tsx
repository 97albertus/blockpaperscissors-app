"use client";
import GameCard from "@/components/custom/game-card";
import { RPS_ABI } from "@/lib/abi";
import { GameData, GameEndReason, GameStatus, Hand } from "@/lib/types";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useContractEvent, useContractRead, useAccount } from "wagmi";

const CreateGame = dynamic(() => import("@/components/custom/create-game"), {
	ssr: false,
});
export default function GamesList({ userGames }: { userGames?:boolean }) {
	const [games, setGames] = useState<GameData[]>([]);
	const [logs, setLogs] = useState<any[]>([]);
	const { address, isConnecting, isDisconnected } = useAccount();
	const { data, isError, isLoading, status, refetch } = useContractRead({
		address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS! as `0x${string}`,
		abi: RPS_ABI,
		functionName: "getAllGames",
		onSuccess(data) {
			setGames(data as GameData[]);
		},
		onError(error) {
			console.log("Error", error);
		},
	});

	function processGameCreated(log: any[]) {
		try {
			console.log("GameCreated event received", log);
			const eventData = log[0].args;

			const newGame: GameData = {
				id: eventData.gameId!,
				bet: eventData.bet!,
				player1: eventData.player1!,
				player1Commit: eventData.player1Commit!,
				status: GameStatus.WaitingForPlayer,
				createTime: BigInt(Math.floor(Date.now() / 1000)),
				startTime: BigInt(0),
				endTime: BigInt(0),
				winner: "0x0000000000000000000000000000000000000000",
				player2: "0x0000000000000000000000000000000000000000",
				player1Hand: Hand.None,
				player2Hand: Hand.None,
				endReason: GameEndReason.NotEnded,
			};

			setGames((prevGames) => [...prevGames, newGame]);
		} catch (error) {
			console.error("Error in GameCreated event listener:", error);
		}
	}

	function processGameCanceled(log: any[]) {
		try {
			console.log("GameCancelled event received", log);
			const eventData = log[0].args;
			const gameId = eventData.gameId;

			console.log("updating state");
			setGames((prevGames) => {
				return prevGames.map((game) => {
					if (game.id === gameId) {
						console.log("updating game ", gameId);
						return {
							...game,
							status: GameStatus.Finished,
							endReason: GameEndReason.Cancelled,
						};
					} else {
						return game;
					}
				});
			});
			console.log("state updated");
		} catch (error) {
			console.error("Error in GameCancelled event listener:", error);
		}
	}

	function processGameFinished(log: any[]) {
		try {
			console.log("GameFinished event received", log);
			const eventData = log[0].args;
			const gameId = eventData.gameId;

			setGames((prevGames) => {
				return prevGames.map((game) => {
					if (game.id === gameId) {
						return {
							...game,
							status: GameStatus.Finished,
							winner: eventData.winner!,
							endReason: eventData.endReason!,
							player1Hand: eventData.player1Hand!,
						};
					} else {
						return game;
					}
				});
			});
		} catch (error) {
			console.error("Error in GameFinished event listener:", error);
		}
	}

	function processGameJoined(log: any[]) {
		try {
			console.log("GameJoined event received", log);
			const eventData = log[0].args;
			const gameId = eventData.gameId;

			setGames((prevGames) => {
				return prevGames.map((game) => {
					if (game.id === gameId) {
						return {
							...game,
							status: GameStatus.WaitingForHandReveal,
							player2: eventData.player2!,
							player2Hand: eventData.player2Hand!,
							startTime: eventData.startTime!,
						};
					} else {
						return game;
					}
				});
			});
		} catch (error) {
			console.error("Error in GameJoined event listener:", error);
		}
	}

	useContractEvent({
		address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS! as `0x${string}`,
		abi: RPS_ABI,
		eventName: "GameCreated",
		listener(log) {
			processGameCreated(log);
		},
	});
	useContractEvent({
		address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS! as `0x${string}`,
		abi: RPS_ABI,
		eventName: "GameJoined",
		listener(log) {
			processGameJoined(log);
		},
	});
	useContractEvent({
		address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS! as `0x${string}`,
		abi: RPS_ABI,
		eventName: "GameFinished",
		listener(log) {
			processGameFinished(log);
		},
	});
	useContractEvent({
		address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS! as `0x${string}`,
		abi: RPS_ABI,
		eventName: "GameCancelled",
		listener(log) {
			processGameCanceled(log);
		},
	});

	return (
		<div className="w-full flex flex-col items-center space-y-4">
			{games ? (
				games
					.filter((game) => {
						if (userGames) {
							return game.player1 === address || game.player2 === address;
						} else {
							return true
					}})
					.sort((a, b) => {
						if (userGames) {
							// If userGames is true, sort by status 1 first, then 0, then 2
							if (a.status === 1) return -1;
							if (b.status === 1) return 1;
							if (a.status === 0) return -1;
							if (b.status === 0) return 1;
							return 0;
						} else {
							// If userGames is false or undefined, sort by status from lowest to highest
							return a.status - b.status;
						}
					})
					.sort((a, b) => Number(b.createTime) - Number(a.createTime))
					.map((game, index) => (
						<GameCard game={game} id={game.id} key={index} />
					))
			) : (
				<p>no data</p>
			)}
		</div>
	);
}
