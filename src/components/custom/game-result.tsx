import Jdenticon from "react-jdenticon";
import Link from "next/link";
import { useAccount } from "wagmi";
import { GameEndReason } from "@/lib/types";

export default function GameResult({
	player1,
	player2,
	winner,
	endReason,
}: {
	player1: string;
	player2: string;
	winner: string;
	endReason: GameEndReason;
}) {
	const { address, isConnecting, isDisconnected } = useAccount();

	function truncateAddress(address: string) {
		return `${address.slice(0, 6)}...${address.slice(-3)}`;
	}

	const isPlayer1 = player1 === address;
	const isPlayer2 = player2 === address;

	const Player1 = isPlayer1 ? "You" : truncateAddress(player1);
	const Player2 = isPlayer2 ? "You" : truncateAddress(player2);
	const isWinner = winner === address;

	const isPlayer1Winner = winner === player1;
	const isPlayer2Winner = winner === player2;
	const isDraw = winner === "0x0000000000000000000000000000000000000000";

	let color = "lila";
	let status_string = "";
	switch (endReason) {
		case GameEndReason.NormalEnd:
			status_string = isDraw
				? "Draw!"
				: `${isPlayer1Winner ? Player1 : Player2} won!`;
			color = isDraw
				? "lila"
				: isPlayer1 || isPlayer2
					? isWinner
						? "success"
						: "danger"
					: "lila";
			break;
		case GameEndReason.Cancelled:
			status_string = "Cancelled";
			break;
		case GameEndReason.RevealTimedOut:
			status_string = `${Player2} won!`;
			color =
				isPlayer1 || isPlayer2 ? (isWinner ? "success" : "danger") : "lila";
			break;
	}

	return (
		<div
			className={`flex flex-cols divide-x-2 divide-solid w-full border-2 border-black divide-black items-stretch bg-${color}-300 h-full shadow shadow-black rounded-b-3xl`}
		>
			<div className="w-full flex flex-cols justify-center items-center h-full">
				{/* {Identicon(player1)} */}
				<p>{status_string}</p>
			</div>
		</div>
	);
}
