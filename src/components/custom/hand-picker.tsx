import { RPS_ABI } from "@/lib/abi";
import { GameData } from "@/lib/types";
import { useContractWrite } from "wagmi";
import { Button } from "../ui/button";
import PlayerHand from "./user-hand";
import { Notification, TransactionNotification } from "@/components/custom/notifications";
import { toast } from "sonner";

export default function HandPicker({ game, gameId }: { game: GameData; gameId: string }) {
	const { data, isLoading, isSuccess, write } = useContractWrite({
		address: process.env.NEXT_PUBLIC_CONTRACT_ADDRESS! as `0x${string}`,
		abi: RPS_ABI,
		functionName: "joinGame",
		chainId: 168_587_773,
		onSuccess(data) {
			toast.custom((t) => <TransactionNotification id={t} txid={data.hash} />);
		},
		onError(error) {
			toast.custom((t) => <Notification id={t} title="Game creation failed" subtitle={error.message} />);
		},
	});

	function joinGame(hand: number) {
		write({
			value: game.bet,
			args: [gameId, hand],
		});
	}

	return (
		<div className="flex flex-cols justify-center space-x-4 w-full px-8">
			<Button variant="ghost" onClick={() => joinGame(1)} className="w-24 h-24">
				<PlayerHand hand={1} />
			</Button>
			<Button variant="ghost" onClick={() => joinGame(2)} className="w-24 h-24">
				<PlayerHand hand={2} />
			</Button>
			<Button variant="ghost" onClick={() => joinGame(3)} className="w-24 h-24">
				<PlayerHand hand={3} />
			</Button>
		</div>
	);
}
