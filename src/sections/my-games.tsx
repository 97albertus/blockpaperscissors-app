// import CreateGame from "@/components/custom/create-game";
import dynamic from "next/dynamic";
const CreateGame = dynamic(() => import("@/components/custom/create-game"), {
	ssr: false,
});
import GamesList from "./games-list";

export default function MyGames() {
	return (
		<div className="w-full flex flex-col jusitfy-center items-center space-y-4">
			<CreateGame />
			<GamesList userGames />
		</div>
	);
}
