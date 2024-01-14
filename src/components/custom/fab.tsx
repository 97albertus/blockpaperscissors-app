"use client";
import React from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { usePathname } from "next/navigation";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { SiGitbook, SiWalletconnect } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Blockies from "react-blockies";
import Link from "next/link";

export default function Fab() {
	const pathname = usePathname();
	const { open } = useWeb3Modal();
	const { address } = useAccount();

	function truncateAddress(address: string) {
		return `${address.slice(0, 8)}...${address.slice(-8)}`;
	}

	const UserCard = () => {
		return (
			<div className="w-full h-14 flex justify-start items-center border-black">
				<div className="w-14 h-14 flex-none border-y-2 border-black border-r">
					<div className="w-full h-full flex justify-center items-center overflow-hidden">
						{address ? (
							<Blockies seed={address} size={14} scale={4} className="w-full h-full" />
						) : (
							<SiWalletconnect size={32} />
						)}
					</div>
				</div>
				<button
					className="w-full h-full flex justify-center items-center border-y-2 border-black border-l"
					onClick={() => open()}
				>
					<p className="font-semibold text-xl">{address ? truncateAddress(address) : "Connect"}</p>
				</button>
			</div>
		);
	};

	return (
		<div className="md:hidden">
			<Drawer>
				<DrawerTrigger>
					<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 pb-8">
						<button
							className="
                        bg-info-500 text-white 
                        w-14 h-14 
                        rounded-full 
                        shadow-small shadow-black 
                        border-2 border-black
                        active:translate-y-1
                        active:outline-none
                        active:shadow-none
                        active:ring-0
                        transition-all 
                        duration-100
                    "
						>
							+
						</button>
					</div>
				</DrawerTrigger>
				<DrawerContent>
					<UserCard />
					<Link href="/games" className="w-full h-14">
						<div
							className={`
                        h-full w-full
                        border-b-2 border-black 
                        shadow shadow-black 
                        bg-info-300
                        flex justify-center items-center
                        transition-all 
                        duration-100
                        ${pathname === "/games" ? "bg-info-500" : ""}
                    `}
						>
							<p className="text-xl font-semibold">Play</p>
						</div>
					</Link>
					<Link href="/my-games" className="w-full h-14">
						<div
							className={`
							h-full w-full
							border-b-2 border-black
							shadow shadow-black 
							bg-info-300
							flex justify-center items-center
							transition-all 
							duration-100
							${pathname === "/my-games" ? "bg-info-500" : ""}
							`}
						>
							<p className="text-xl font-semibold">My Games</p>
						</div>
					</Link>
					<div className="w-full h-14 flex flex-cols justify-start items-center bg-white divide-x-2 divide-black">
						<Link href="/" className="w-1/2 h-14">
							<div className="w-full h-14 flex flex-cols justify-center items-center gap-x-4">Home</div>
						</Link>
						<div className="w-1/2 h-14 divide-x-2 divide-black flex flex-cols justify-center items-center">
							<Link className="w-1/3 h-full flex items-center justify-center" href="https://ropasci.gitbook.io/">
								<SiGitbook size={32} />
							</Link>
							<Link className="w-1/3 h-full flex items-center justify-center" href="">
								<FaXTwitter size={32} />
							</Link>
							<Link className="w-1/3 h-full flex items-center justify-center" href="https://t.me/ropasci">
								<FaTelegramPlane size={32} />
							</Link>
						</div>
					</div>
				</DrawerContent>
			</Drawer>
		</div>
	);
}
