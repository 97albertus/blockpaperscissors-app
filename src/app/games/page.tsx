import AllGames from "@/sections/all-games";

export default function Page() {
	return (
		<div className="flex justify-start items-start p-36 md:pt-28 max-sm:p-8 max-sm:pb-16 border-black border-1 w-full overflow-auto">
			<AllGames />
		</div>
	);
}
