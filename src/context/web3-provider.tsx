"use client";
import { walletConnectProvider } from "@web3modal/wagmi";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { ReactNode } from "react";
import { defineChain } from "viem";
import { goerli } from "viem/chains";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { infuraProvider } from "wagmi/providers/infura";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;
const infuraApiKey = process.env.NEXT_PUBLIC_INFURA_API_KEY!;
const blastApiKey = process.env.NEXT_PUBLIC_BLAST_API_KEY!;

export const blastSepolia = /*#__PURE__*/ defineChain({
	id: 168_587_773,
	name: "Blast Sepolia",
	network: "blastSepolia",
	nativeCurrency: {
		name: "Ether",
		symbol: "ETH",
		decimals: 18,
	},
	rpcUrls: {
		default: {
			http: [`https://rpc.ankr.com/blast_testnet_sepolia/${blastApiKey}`],
		},
		public: {
			http: ["https://sepolia.blast.io"],
		},
	},
	blockExplorers: {
		default: {
			name: "Blastscan",
			url: "https://testnet.blastscan.io",
		},
	},
	testnet: true,
});

const { chains, publicClient } = configureChains(
	[blastSepolia],
	[infuraProvider({ apiKey: infuraApiKey }), walletConnectProvider({ projectId })]
);

const metadata = {
	name: "RockPaperScissorsr",
	description: "RockPaperScissorsr App",
	url: "https://ropascis.online",
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
