import Jdenticon from "react-jdenticon";
import Link from "next/link";
import { useAccount } from "wagmi";

export function truncateAddress(address: string) {
	return `${address.slice(0, 6)}...${address.slice(-3)}`;
}

export default function PlayersSection({
	player1,
	player2,
}: {
	player1: string;
	player2: string;
}) {
	const { address, isConnecting, isDisconnected } = useAccount();
	const validPlayer2 = player2 !== "0x0000000000000000000000000000000000000000";

	function Identicon(address: string) {
		return <Jdenticon size="40" value={address} />;
	}

	return (
		<div className="flex flex-cols divide-x-2 divide-solid w-full border-b-2 border-black divide-black items-stretch bg-lila-300 h-full">
			<div className="w-1/2 flex flex-cols justify-center items-center h-full">
				{/* {Identicon(player1)} */}
				<p>{address === player1 ? "You" : truncateAddress(player1)}</p>
			</div>
			<div className="w-1/2 flex flex-cols justify-center items-center h-stretch">
				{/* {
                    
                    validPlayer2 
                    ? (
                        <>
                        {Identicon(player2)}
                        </>
                    ) 
                    : (null)
                } */}
				<p className={`${validPlayer2 ? "" : "text-transparent"}`}>
					{address === player2 ? "You" : truncateAddress(player2)}
				</p>
			</div>
		</div>
	);
}
