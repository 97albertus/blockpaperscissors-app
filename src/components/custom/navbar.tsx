"use client";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTelegram } from "react-icons/fa6";
import { GiScissors } from "react-icons/gi";
import { SiGithub } from "react-icons/si";
import { SiGitbook } from "react-icons/si";
import { useAccount } from "wagmi";
import { truncateAddress } from "./players-section";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
	const pathname = usePathname();
	const { open } = useWeb3Modal();
	const { address } = useAccount();

	return (
		<div className="z-50 fixed h-20 left-0 right-0 flex flex-cols min-w-screen items-center justify-between transition-all duration-100 max-sm:hidden">
			<div className="w-1/4 h-20 bg-lila-500 flex flex-cols items-center overflow-hidden shadow shadow-black border-y-2 border-black border-r-2">
				<div className="flex justify-end flex-col">
					<p className="font-semibold text-xl tracking-tighter leading-none text-right align-text-bottom">BLOCK.</p>
					<p className="font-semibold text-xl tracking-tighter leading-none text-right align-text-top">PAPER.</p>
				</div>
				<p className="font-semibold text-5xl tracking-tight leading-tight">SCISSORS.</p>
				<div className="flex justify-end flex-cols w-full -mr-2">
					<GiScissors className="text-7xl rotate-180" />
				</div>
			</div>
			<div className="w-3/4 flex flex-cols h-20 bg-black">
				<div className="w-1/2 flex flex-cols justify-start h-full max-sm:hidden">
					<Link href="/" className="w-1/3 max-sm:hidden">
						<button
							className={`
                                h-full w-full
                                border-r border-y-2 border-black 
                                shadow shadow-black 
                                bg-lila-500
                                focus:translate-y-1
                                focus:outline-none
                                focus:shadow-top
                                focus:ring-0
                                transition-all 
                                duration-100
                                ${pathname === "/" ? "translate-y-1 outline-none shadow-top ring-0" : ""}
                            `}
						>
							<p className="text-xl font-semibold">Home</p>
						</button>
					</Link>
					<Link href="/games" className="w-1/3 max-sm:hidden">
						<button
							className={`
                                h-full w-full
                                border-x border-y-2 border-black 
                                shadow shadow-black 
                                bg-lila-500
                                focus:translate-y-1
                                focus:outline-none
                                focus:shadow-top
                                focus:ring-0
                                transition-all 
                                duration-100
                                ${pathname === "/games" ? "translate-y-1 outline-none shadow-top ring-0" : ""}
                            `}
						>
							<p className="text-xl font-semibold">Play</p>
						</button>
					</Link>
					<Link href="/my-games" className="w-1/3 max-sm:hidden">
						<button
							className={`
                                h-full w-full
                                border-x border-y-2 border-black
                                shadow shadow-black 
                                bg-lila-500
                                focus:translate-y-1
                                focus:outline-none
                                focus:shadow-top
                                focus:ring-0
                                transition-all 
                                duration-100
                                ${pathname === "/my-games" ? "translate-y-1 outline-none shadow-top ring-0" : ""}
                            `}
						>
							<p className="text-xl font-semibold">My Games</p>
						</button>
					</Link>
				</div>
				<div className="w-1/2 flex flex-cols justify-end h-full max-sm:hidden">
					<div className="w-4/6 flex flex-cols justify-end h-full max-sm:hidden bg-lila-500">
						<div
							className={`
                                h-full w-1/4
                                border-y-2 border-black border-l
                                shadow shadow-black 
                            `}
						></div>
						<Link
							href="https://www.youtube.com/watch?v=Z8rNXIYzsys"
							className={`
									h-full w-1/4
									border-y-2 border-black 
									shadow shadow-black 
									flex
									justify-center items-center
								`}
						>
							<FaYoutube size="2em" />
						</Link>
						<Link
							href="https://twitter.com/ropascis"
							className={`
									h-full w-1/4
									border-y-2 border-black 
									shadow shadow-black 
									flex
									justify-center items-center
								`}
						>
							<FaXTwitter size="2em" />
						</Link>
						<Link
							href="https://ropasci.gitbook.io/"
							className={`
									h-full w-1/4
									border-y-2 border-black border-r
									shadow shadow-black 
									flex
									justify-center items-center
								`}
						>
							<SiGitbook size="2em" />
						</Link>
					</div>
					<div className="w-2/6 flex flex-cols justify-center items-center h-full max-sm:hidden">
						{/* <w3m-button /> */}
						<button
							onClick={() => open()}
							className={`
                                h-full w-full
                                border-y-2 border-black border-l
                                shadow shadow-black 
                                bg-black
                               
                                transition-all 
                                duration-100
                            `}
						>
							<p className="text-xl font-medium text-white">{address ? truncateAddress(address) : "Connect"}</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
