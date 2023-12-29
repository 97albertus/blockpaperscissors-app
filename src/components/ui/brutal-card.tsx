export function CardHeader({ children }: { children: React.ReactNode }) {}

export default function Card({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			className={`bg-white border-2 border-black rounded-3xl shadow h-full ${className}`}
		>
			{children}
		</div>
	);
}

{
	/* <div className="bg-white border-2 border-black p-8 rounded-3xl shadow h-full">
    <div className="inline-flex items-center justify-between w-full font-semibold">
        <h2 className="text-3xl justify-between tracking-tight">Starter</h2> 
    </div>
    <div className="text-3xl mt-8">
        <span x-text="annual ? '99/ year' : '15.00/ month'">15.00/ month</span>
    </div>
    <p className="lg:text-base text-sm tracking-wide mt-8">
        Get started with our basic plan, ideal newcomers to the crypto world.
    </p>
</div> */
}
