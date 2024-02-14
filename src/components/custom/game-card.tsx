import useCountdown from "@/hooks/use-countdown";
import { RPS_ABI } from "@/lib/abi";
import { GameData } from "@/lib/types";
import { useLocalStorage } from "@uidotdev/usehooks";
import { toast } from "sonner";
import { useAccount, useContractWrite } from "wagmi";
import GameResult from "./game-result";
import HandPicker from "./hand-picker";
import { Notification, TransactionNotification } from "./notifications";
import PlayersSection from "./players-section";
import PlayerHand from "./user-hand";

export default function GameCard({ game, id }: { game: GameData; id: string }) {
	const { address, isConnecting, isDisconnected } = useAccount();

	const [gameHand, saveGameHand] = useLocalStorage<number>(`${address}-${id}-hand`);
	const [password, savePassword] = useLocalStorage<string>(`${address}-pwd`);
	const endTime = Number(game.startTime) + 10 * 60; // 1 hour from now
	const timeLeft = useCountdown(endTime);

	const {
		data: cancelData,
		isLoading: cancelIsLoading,
		isSuccess: cancelIsSuccess,
		write: cancelGame,
	} = useContractWrite({
		address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS! as `0x${string}`,
		abi: RPS_ABI,
		functionName: "cancelGame",
		args: [id],
		chainId: 168_587_773,
		onSuccess(data) {
			toast.custom((t) => (
				<TransactionNotification
					id={t}
					// onResolve={refetch}
					txid={data.hash}
				/>
			));
		},
		onError(error) {
			toast.custom((t) => <Notification id={t} title="Failed to cancel game" subtitle={error.message} />);
		},
	});
	const {
		data: revealData,
		isLoading: revealIsLoading,
		isSuccess: revealIsSuccess,
		write: revealHand,
	} = useContractWrite({
		address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS! as `0x${string}`,
		abi: RPS_ABI,
		functionName: "revealHand",
		args: [id, gameHand, password],
		chainId: 168_587_773,
		onSuccess(data) {
			toast.custom((t) => (
				<TransactionNotification
					id={t}
					// onResolve={refetch}
					txid={data.hash}
				/>
			));
		},
		onError(error) {
			toast.custom((t) => <Notification id={t} title="Reveal failed" subtitle={error.message} />);
		},
	});
	const {
		data: timeoutData,
		isLoading: timeoutIsLoading,
		isSuccess: timeoutIsSuccess,
		write: claimTimeout,
	} = useContractWrite({
		address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS! as `0x${string}`,
		abi: RPS_ABI,
		functionName: "claimTimeout",
		args: [id],
		chainId: 168_587_773,
		onSuccess(data) {
			toast.custom((t) => (
				<TransactionNotification
					id={t}
					// onResolve={refetch}
					txid={data.hash}
				/>
			));
		},
		onError(error) {
			toast.custom((t) => <Notification id={t} title="Claim failed" subtitle={error.message} />);
		},
	});

	const isPlayer1 = game.player1 === address;
	const isPlayer2 = game.player2 === address;

	const CardContent = () => {
		switch (game.status) {
			case 0: {
				return (
					<>
						{isPlayer1 ? (
							<>
								<div className="flex flex-cols justify-center items-center w-full">
									<div className="bg-white border-black flex flex-cols items-center justify-center space-x-4 w-full px-8 border-x-2">
										<PlayerHand hand={gameHand} />
										<p>vs</p>
										<PlayerHand hand={game.player2Hand} />
									</div>
								</div>
								<div className="flex flex-cols justify-center items-center w-full">
									<button
										onClick={() => cancelGame!()}
										className={`
										w-full h-10
										flex
										justify-center
										items-center
										border-2 
										rounded-b-3xl
										border-black 
										shadow 
										active:translate-y-1
										active:outline-none
										active:shadow-top
										active:ring-0
										transition-all 
										duration-100
										bg-warning-300
										${cancelIsLoading ? "translate-y-1 outline-none shadow-top" : ""}
									`}
									>
										Cancel
									</button>
								</div>
							</>
						) : (
							<div className="bg-white border-black flex flex-cols items-center justify-center space-x-4 w-full px-8 border-2 shadow shadow-black border-t-0 rounded-b-3xl">
								<HandPicker game={game} gameId={id} />
							</div>
						)}
					</>
				);
			}
			case 1: {
				const isTimedOut = Date.now() > endTime * 1000;

				return (
					<>
						<div className="flex flex-cols justify-center items-center">
							<div className="flex flex-cols items-center justify-center space-x-4 w-full px-8 bg-white border-x-2 border-black">
								<PlayerHand hand={isPlayer1 ? gameHand : game.player1Hand} />
								<p>vs</p>
								<PlayerHand hand={game.player2Hand} />
							</div>
						</div>
						<div className="flex flex-cols justify-center items-center w-full">
							<div
								className={`
							flex justify-center items-center 
							bg-white
							h-10
							border-black border-2 shadow shadow-black rounded-b-3xl
							${(isPlayer1 && !isTimedOut) || (isTimedOut && isPlayer2) ? "w-1/3 rounded-br-none" : "w-full"}
						`}
							>
								<p>{isTimedOut ? "00:00:00" : timeLeft}</p>
							</div>
							{isPlayer1 && !isTimedOut ? (
								<>
									<button
										onClick={() => revealHand!()}
										className={`
											w-2/3 h-10
											flex
											justify-center
											items-center
											border-2 
											border-l-0
											rounded-br-3xl
											hover:bg-info-400 
											hover:text-white
											border-black 
											shadow 
											shadow-black
											active:shadow-top
											active:shadow-black
											active:translate-y-1
											active:outline-none
											active:ring-0
											transition-all 
											duration-100
											bg-info-300
											${revealIsLoading ? "translate-y-1 outline-none shadow-top" : ""}
										`}
									>
										Reveal
									</button>
								</>
							) : isPlayer2 && isTimedOut ? (
								<>
									<button
										onClick={() => claimTimeout!()}
										className={`
											w-2/3 h-10
											flex
											justify-center
											items-center
											border-2 
											border-l-0
											rounded-br-3xl
											border-black 
											hover:bg-warning-400
									 		hover:text-white
											transition-all 
											duration-100
											bg-warning-300
										  	shadow 
											shadow-black
											active:shadow-top
											active:shadow-black
											active:translate-y-1
											active:outline-none
											active:ring-0
											${timeoutIsLoading ? "translate-y-1 outline-none shadow-top" : ""}
										`}
									>
										Claim
									</button>
								</>
							) : null}
						</div>
					</>
				);
			}
			case 2: {
				return (
					<>
						<div className="flex flex-cols justify-center items-center w-full">
							<div className="bg-white border-black flex flex-cols items-center justify-center space-x-4 w-full px-8 border-x-2">
								<PlayerHand hand={isPlayer1 ? gameHand : game.player1Hand} />
								<p>vs</p>
								<PlayerHand hand={game.player2Hand} />
							</div>
						</div>
						<div className="flex flex-cols justify-center items-center w-full">
							<GameResult
								player1={game.player1}
								player2={game.player2}
								winner={game.winner}
								endReason={game.endReason}
							/>
						</div>
					</>
				);
			}
		}
	};

	return (
		<div className="w-1/3 max-sm:w-full">
			<div className="bg-white border-2 border-black rounded-3xl rounded-b-none border-b-0 h-full w-full">
				<div className="w-full border-b-2 border-black px-4 flex flex-cols justify-between">
					<p className="text-xl font-semibold">{id}</p>
					<p className="text-xl font-semibold">{Number(game.bet) / 10 ** 18} ETH</p>
				</div>
				<PlayersSection player1={game.player1} player2={game.player2} />
			</div>
			<CardContent />
		</div>
	);
}
