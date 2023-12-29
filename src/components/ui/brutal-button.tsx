interface GameButtonProps {
	color?: "primary" | "secondary" | "info" | "warning" | "success" | "danger";
	children: React.ReactNode;
	fullWidth?: boolean;
	disabled?: boolean;
	variant?: "ghost" | "solid";
	toggle?: boolean;
}

export default function Button({
	color = "primary",
	children,
	fullWidth,
	disabled,
	variant,
	toggle,
}: GameButtonProps) {
	const pseudoClass = toggle ? "focus" : "active";
	const commonClasses = `${
		disabled
			? "cursor-not-allowed opacity-50"
			: `cursor-pointer ${pseudoClass}:translate-y-1 ${pseudoClass}:outline-none ${pseudoClass}:shadow-none ${
					toggle ? "" : `transition-all duration-200`
				}`
	} items-center shadow text-lg font-semibold inline-flex px-6 ${
		fullWidth ? "justify-between" : "justify-center"
	}  text-center ${
		fullWidth ? "" : "sm:w-auto"
	} py-3 rounded-lg h-16 tracking-wide w-full gap-3 align-items-center`;

	switch (color) {
		case "primary": {
			return (
				<button
					type="button"
					className={
						variant !== "ghost"
							? `${commonClasses} text-black shadow-lila-600 bg-lila-300 ${
									disabled ? "" : `${pseudoClass}:bg-lila-600`
								} border-lila-600 duration-300 outline-none border-2 hover:bg-lila-500`
							: `text-lila-800 hover:text-black duraton-300`
					}
				>
					{children}
				</button>
			);
		}
		case "secondary": {
			return (
				<button
					type="button"
					className={
						variant !== "ghost"
							? `${commonClasses} text-black shadow-black bg-white border-black ease-in-out transform transition-all ${
									disabled
										? ""
										: `${pseudoClass}:ring-lila-700 ${pseudoClass}:bg-black ${pseudoClass}:text-white`
								}   border-2 duration-100  hover:text-lila-800 `
							: `text-black hover:text-lila-800 duration-300`
					}
				>
					{children}
				</button>
			);
		}
		case "info": {
			return (
				<button
					type="button"
					className={
						variant !== "ghost"
							? `${commonClasses} text-info-950 shadow-info-500 bg-info-300 ${
									disabled
										? ""
										: `${pseudoClass}:bg-info-500 ${pseudoClass}:text-white`
								}  border-info-500 ease-in-out duration-300 outline-none hover:bg-info-400 hover:text-white   border-2`
							: `text-info-500 hover:text-black duraton-300`
					}
				>
					{children}
				</button>
			);
		}
		case "success": {
			return (
				<button
					type="button"
					className={
						variant !== "ghost"
							? `${commonClasses} text-success-950 shadow-success-500 bg-success-300 ${
									disabled
										? ""
										: `${pseudoClass}:bg-success-500 ${pseudoClass}:text-white`
								}  border-success-500 ease-in-out duration-300 outline-none hover:bg-success-400 hover:text-white   border-2`
							: `text-success-500 hover:text-black duraton-300`
					}
				>
					{children}
				</button>
			);
		}
		case "warning": {
			return (
				<button
					type="button"
					className={
						variant !== "ghost"
							? `${commonClasses} text-warning-950 shadow-warning-500 bg-warning-300 ${
									disabled
										? ""
										: `${pseudoClass}:bg-warning-500 ${pseudoClass}:text-white`
								}  border-warning-500 ease-in-out duration-300 outline-none hover:bg-warning-400 hover:text-white   border-2`
							: `text-warning-400 hover:text-black duraton-300`
					}
				>
					{children}
				</button>
			);
		}
		case "danger": {
			return (
				<button
					type="button"
					className={
						variant !== "ghost"
							? `${commonClasses} text-danger-950 shadow-danger-500 bg-danger-300 ${
									disabled
										? ""
										: `${pseudoClass}:bg-danger-500 ${pseudoClass}:text-white`
								}  border-danger-500 ease-in-out duration-300 outline-none hover:bg-danger-400 hover:text-white   border-2`
							: `text-danger-600 hover:text-black duraton-300`
					}
				>
					{children}
				</button>
			);
		}
	}
}
