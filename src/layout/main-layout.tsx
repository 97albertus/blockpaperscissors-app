// import { Toaster } from "@/components/ui/sonner";
// import Fab from "@/components/custom/fab";
import MobileHeader from "@/components/custom/mobile-header";
// import Navbar from "@/components/custom/navbar";
import { Toaster } from "sonner";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/custom/navbar"), { ssr: false });
const Fab = dynamic(() => import("@/components/custom/fab"), { ssr: false });

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>	
			<Navbar />
			<MobileHeader />
			<main className="min-h-screen flex justify-start items-start p-36 max-sm:p-8 max-sm:pb-16 border-black border-1 w-full overflow-auto">
				{children}
			</main>
			<Fab />
			<Toaster
				offset={48}
				toastOptions={{
					className: "w-full",
					duration: 60 * 1000,
				}}
				position="bottom-right"
				className='max-sm:hidden'
			/>
			<Toaster
				offset={12}
				toastOptions={{
					className: "w-full",
					duration: 60 * 1000,
				}}
				position="top-center"
				className='md:hidden'
			/>
		</>
	);
}
