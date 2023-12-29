import Card from "../ui/brutal-card";
import { toast } from "sonner";
import { IoCloseOutline } from "react-icons/io5";
import { CgClose } from "react-icons/cg";
import { useWaitForTransaction } from "wagmi";
import Link from "next/link";

interface TransactionNotificationProps {
	id?: string | number;
	onResolve?: () => void;
	txid: string;
}

function getExplorerLink(txid: string) {
	return `https://goerli.etherscan.io/tx/${txid}`;
}

export function TransactionNotification({
	id,
	onResolve,
	txid,
}: TransactionNotificationProps) {
	const { data, isError, isLoading } = useWaitForTransaction({
		hash: txid as `0x${string}`,
		// onSuccess(data) {() => onResolve()},
	});

	return (
		<div className="pointer-events-auto w-full overflow-hidden ring-2 ring-inset ring-black text-black bg-white shadow-small rounded-xl p-8">
			<div className="flex items-start w-full">
				<div className="flex-1">
					<h3 className="text-lg lg:text-xl font-medium">
						{isLoading
							? "Transaction pending..."
							: isError
								? "Transaction failed"
								: "Success"}
					</h3>
					<Link href={getExplorerLink(txid)}>
						<p className="mt-2 text-base lg:text-lg">{txid}</p>
					</Link>
				</div>
				<div className="ml-4 flex flex-shrink-0">
					<button
						onClick={() => toast.dismiss(id)}
						className="underline bg-white ring-2 ring-black text-black focus:bg-black focus:text-white hover:bg-white hover:text-lila-500 rounded-full p-0.5"
					>
						<CgClose size="1.5em" />
					</button>
				</div>
			</div>
		</div>
	);
}

interface NotificationProps {
	title: string;
	subtitle: string;
	children?: React.ReactNode;
	id?: string | number;
	onResolve?: () => void;
}

export function Notification({
	title,
	subtitle,
	children,
	id,
}: NotificationProps) {
	return (
		// <div
		// 	className={`w-full bg-white border-2 border-black rounded-3xl shadow h-24 ${className}`}
		// >
		// 	{children}
		// </div>
		<div className="pointer-events-auto w-full overflow-hidden ring-2 ring-inset ring-black text-black bg-white shadow-small rounded-xl p-8">
			<div className="flex items-start w-full">
				<div className="flex-1">
					<h3 className="text-lg lg:text-xl font-medium">{title}</h3>
					<p className="mt-2 text-base lg:text-lg">{subtitle}</p>
				</div>
				<div className="ml-4 flex flex-shrink-0">
					<button
						onClick={() => toast.dismiss(id)}
						className="underline bg-white ring-2 ring-black text-black focus:bg-black focus:text-white hover:bg-white hover:text-lila-500 rounded-full p-0.5"
					>
						<CgClose size="1.5em" />
					</button>
				</div>
			</div>
		</div>
	);
}
