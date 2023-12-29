import { Hand } from "@/lib/types";
import { Icon } from "@iconify/react";
import Button from "../ui/brutal-button";
import { GiRock } from "react-icons/gi";
import { GiPaper } from "react-icons/gi";
import { GiScissors } from "react-icons/gi";
import { RxQuestionMark } from "react-icons/rx";

export default function PlayerHand({ hand }: { hand: Hand }) {
	const hand_emoji = {
		0: <RxQuestionMark size="3em" />,
		1: <GiRock size="3em" className="-rotate-90" />,
		2: <GiPaper size="3em" className="-rotate-90" />,
		3: <GiScissors size="3em" className="-rotate-90" />,
	};

	function truncateAddress(address: string) {
		return `${address.slice(0, 6)}...${address.slice(-3)}`;
	}

	return (
		<div className="w-24 h-24 flex items-center justify-center">
			{hand_emoji[hand]}
		</div>
	);
}
