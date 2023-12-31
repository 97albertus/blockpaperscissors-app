"use client";
import { walletConnectProvider } from "@web3modal/wagmi";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { ReactNode } from "react";
import { goerli } from "viem/chains";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { infuraProvider } from "wagmi/providers/infura";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;
const infuraApiKey = process.env.NEXT_PUBLIC_INFURA_API_KEY!;

const { chains, publicClient } = configureChains(
	[goerli],
	[
		infuraProvider({ apiKey: infuraApiKey }),
		walletConnectProvider({ projectId }),
	],
);

const metadata = {
	name: "RockPaperScissorsr",
	description: "RockPaperScissorsr App",
	url: "http://185.244.180.18:3038",
	icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors: [
		new WalletConnectConnector({
			chains,
			options: { projectId, showQrModal: false, metadata },
		}),
		new InjectedConnector({ chains, options: { shimDisconnect: true } }),
		new CoinbaseWalletConnector({
			chains,
			options: { appName: metadata.name },
		}),
	],
	publicClient,
});

// 3. Create modal
createWeb3Modal({
	wagmiConfig,
	projectId,
	chains,
	themeMode: "light",
	themeVariables: {
		"--w3m-border-radius-master": "24px",
		"--w3m-font-family": "Bricolage Grotesque, sans-serif",
	},
});

export function Web3Modal({ children }: { children: ReactNode }) {
	return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
