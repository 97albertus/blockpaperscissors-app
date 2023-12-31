import LogoVector from "@/components/vectors/logo";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-between pt-20 max-sm:pt-0 divide-y-2 divide-black">
			<div className="flex max-sm:flex-col md:flex-cols w-full md:divide-x-2 divide-black divide-y-2">
				<div className="max-sm:w-full md:w-1/2 aspect-square bg-whitesmoke flex flex-col justify-center items-start p-8 lg:px-20 gap-12">
					<div className="flex flex-cols space-x-4 w-full">
						<div className="rounded-full bg-whitesmoke border-black border overflow-hidden aspect-square w-1/4 md:w-1/6 flex justify-center items-center animate-spin-slow p-2">
							<LogoVector color="#000000" />
						</div>
					</div>
					<div className="flex-col space-y-4">
						<p className="break-words text-3xl lg:text-5xl font-medium">
							Play Fair, Play on the Blockchain
						</p>
						<p className="xl:text-xl text-black tracking-wide break-work">
							Block. Paper. Scissors. is an on-chain implementation of one of
							the oldest games in the book - Rock, Paper, Scissors, now
							utilising the commit-reveal scheme
						</p>
					</div>
					<Link href="/games" className="w-1/3 max-sm:w-full">
						<div
							className="
							w-full
							text-black 
							items-center shadow shadow-softie-600 
							text-lg font-semibold inline-flex px-6 
							focus:outline-none justify-center text-center 
							bg-softie-300 
							focus:bg-softie-600 
							border-softie-600 
							duration-300 outline-none focus:shadow-none border-2 sm:w-auto py-3 rounded-lg h-16 tracking-wide focus:translate-y-1
							hover:bg-softie-500
						"
						>
							Play Now
						</div>
					</Link>
				</div>
				<div className="max-sm:w-full md:w-1/2 aspect-square bg-softie-500 flex justify-center items-center">
					<div className="rounded-full bg-whitesmoke border-black border-4 overflow-hidden aspect-square w-1/3 flex justify-center items-center">
						<img
							src="https://64.media.tumblr.com/ebad78ee9aaaf6d245086b8e286e49b7/tumblr_n544xviC0U1svwlszo1_500.gif"
							alt="A cool gif"
							className="w-full"
						/>
					</div>
				</div>
			</div>
			<div className="flex max-sm:flex-col md:flex-cols w-full md:divide-x-2 divide-black">
				<div className="relative p-8 lg:p-20 items-center gap-12 h-full bg-mellow-300">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:text-center lg:grid-cols-3 gap-6 lg:gap-12">
						<div>
							<h2 className="text-3xl  text-black font-medium">
								Blockchain Transparency
							</h2>
							<p className="text-lg tracking-wide text-black mt-4">
								Every move, every victory is recorded in the immutable Blast L2
								blockchain, ensuring maximum fairness and eliminating
								manipulation
							</p>
						</div>
						<div>
							<h2 className="text-3xl  text-black font-medium">
								Cryptographic Fairness Guarantee
							</h2>
							<p className="text-lg tracking-wide text-black mt-4">
								Player&apos;s hand is stored on the blockchain as a Keccak256
								hash, ensuring that the the actual hand is not revealed until
								the reveal phase
							</p>
						</div>
						<div>
							<h2 className="text-3xl  text-black font-medium">
								Bets in Blast ETH
							</h2>
							<p className="text-lg tracking-wide text-black mt-4">
								Participate in the game by placing bets using native ETH tokens,
								seamlessly executing transactions thanks to our smart contract
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex max-sm:flex-col md:flex-cols w-full md:divide-x-2 divide-black">
				<div className="mx-auto 2xl:max-w-7xl lg:flex 2xl:border-x-2 border-black border-b-2">
					<div className="lg:w-1/2 p-8 lg:px-20 bg-green-500">
						<div className="lg:sticker lg:sticky py-16  top-20">
							<div>
								<h2 className="text-3xl xl:text-6xl tracking-tight font-medium text-black">
									How it Works
								</h2>
								<p className="max-w-md mt-4 tracking-wide xl:text-xl text-lg text-black">
									The playthrough is very straightforward, but you have to pay
									attention to the details
								</p>
								<div className="flex-col flex gap-3 mt-10 sm:flex-row">
									<Link
										className="text-black items-center shadow shadow-black text-lg font-semibold inline-flex px-6 focus:outline-none justify-center text-center bg-white border-black ease-in-out transform transition-all focus:ring-lila-700 focus:shadow-none border-2 duration-100 focus:bg-black focus:text-white sm:w-auto py-3 rounded-lg h-16 tracking-wide focus:translate-y-1 w-full hover:text-lila-800"
										href="/games"
									>
										Let&apos;s Go
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="lg:w-1/2 bg-green-500 lg:border-l-2 border-black">
						<ul
							className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-0.5 bg-black list-none"
							role="list"
						>
							<li className="bg-white p-8 lg:p-12">
								<div>
									<div className="flex h-10 w-10 items-center justify-center border-2 border-black shadow-tiny duration-300 shadow-black rounded-full bg-green-500 font-semibold">
										1
									</div>
									<p className="text-xl mt-8 text-black font-medium">
										Start a Game
									</p>
								</div>
								<div className="max-w-xl mt-4 text-base tracking-wide text-black">
									Choose a bet and pick you Hand, then start a Game on the smart
									contract. You can cancel the game at any time before the
									reveal phase.
								</div>
							</li>
							<li className="bg-white p-8 lg:p-12">
								<div>
									<div className="flex h-10 w-10 items-center justify-center border-2 border-black shadow-tiny duration-300 shadow-black rounded-full bg-green-500 font-semibold">
										2
									</div>
									<p className="text-xl mt-8 text-black font-medium">
										Get an Opponent
									</p>
								</div>
								<div className="max-w-xl mt-4 text-base tracking-wide text-black">
									Wait for another player to join your game, or join an existing
									game.
								</div>
							</li>
							<li className="bg-white p-8 lg:p-12">
								<div>
									<div className="flex h-10 w-10 items-center justify-center border-2 border-black shadow-tiny duration-300 shadow-black rounded-full bg-green-500 font-semibold">
										3
									</div>
									<p className="text-xl mt-8 text-black font-medium">
										Reveal your Hand
									</p>
								</div>
								<div className="max-w-xl mt-4 text-base tracking-wide text-black">
									After both players have joined the game, reveal your hand to
									see who won. The reveal window is just 10 minutes, so be quick
									or you&apos;ll lose your bet.
								</div>
							</li>
							<li className="bg-white p-8 lg:p-12">
								<div>
									<div className="flex h-10 w-10 items-center justify-center border-2 border-black shadow-tiny duration-300 shadow-black rounded-full bg-green-500 font-semibold">
										4
									</div>
									<p className="text-xl mt-8 text-black font-medium">
										See how it went
									</p>
								</div>
								<div className="max-w-xl mt-4 text-base tracking-wide text-black">
									See the results of the game and claim your winnings.
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}
