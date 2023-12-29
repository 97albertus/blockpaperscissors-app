export const RPS_ABI = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "string",
				name: "gameId",
				type: "string",
			},
		],
		name: "GameCancelled",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "string",
				name: "gameId",
				type: "string",
			},
			{
				indexed: true,
				internalType: "address",
				name: "player1",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "bet",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "bytes32",
				name: "player1Commit",
				type: "bytes32",
			},
		],
		name: "GameCreated",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "string",
				name: "gameId",
				type: "string",
			},
			{
				indexed: true,
				internalType: "address",
				name: "winner",
				type: "address",
			},
			{
				indexed: false,
				internalType: "enum RockPaperScissors.GameEndReason",
				name: "endReason",
				type: "uint8",
			},
			{
				indexed: false,
				internalType: "enum RockPaperScissors.Hand",
				name: "player1Hand",
				type: "uint8",
			},
		],
		name: "GameFinished",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "string",
				name: "gameId",
				type: "string",
			},
			{
				indexed: true,
				internalType: "address",
				name: "player2",
				type: "address",
			},
			{
				indexed: false,
				internalType: "enum RockPaperScissors.Hand",
				name: "player2Hand",
				type: "uint8",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "startTime",
				type: "uint256",
			},
		],
		name: "GameJoined",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "string",
				name: "gameId",
				type: "string",
			},
		],
		name: "RevealTimedOut",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "gameId",
				type: "string",
			},
		],
		name: "cancelGame",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "gameId",
				type: "string",
			},
		],
		name: "claimTimeout",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "gameIdCounter",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		name: "gameIds",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "gameIdsArray",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		name: "games",
		outputs: [
			{
				internalType: "string",
				name: "id",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "bet",
				type: "uint256",
			},
			{
				internalType: "enum RockPaperScissors.GameStatus",
				name: "status",
				type: "uint8",
			},
			{
				internalType: "uint256",
				name: "createTime",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "startTime",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "endTime",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "winner",
				type: "address",
			},
			{
				internalType: "address",
				name: "player1",
				type: "address",
			},
			{
				internalType: "address",
				name: "player2",
				type: "address",
			},
			{
				internalType: "bytes32",
				name: "player1Commit",
				type: "bytes32",
			},
			{
				internalType: "enum RockPaperScissors.Hand",
				name: "player1Hand",
				type: "uint8",
			},
			{
				internalType: "enum RockPaperScissors.Hand",
				name: "player2Hand",
				type: "uint8",
			},
			{
				internalType: "enum RockPaperScissors.GameEndReason",
				name: "endReason",
				type: "uint8",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getAllGames",
		outputs: [
			{
				components: [
					{
						internalType: "string",
						name: "id",
						type: "string",
					},
					{
						internalType: "uint256",
						name: "bet",
						type: "uint256",
					},
					{
						internalType: "enum RockPaperScissors.GameStatus",
						name: "status",
						type: "uint8",
					},
					{
						internalType: "uint256",
						name: "createTime",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "startTime",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "endTime",
						type: "uint256",
					},
					{
						internalType: "address",
						name: "winner",
						type: "address",
					},
					{
						internalType: "address",
						name: "player1",
						type: "address",
					},
					{
						internalType: "address",
						name: "player2",
						type: "address",
					},
					{
						internalType: "bytes32",
						name: "player1Commit",
						type: "bytes32",
					},
					{
						internalType: "enum RockPaperScissors.Hand",
						name: "player1Hand",
						type: "uint8",
					},
					{
						internalType: "enum RockPaperScissors.Hand",
						name: "player2Hand",
						type: "uint8",
					},
					{
						internalType: "enum RockPaperScissors.GameEndReason",
						name: "endReason",
						type: "uint8",
					},
				],
				internalType: "struct RockPaperScissors.Game[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "gameId",
				type: "string",
			},
		],
		name: "getGame",
		outputs: [
			{
				components: [
					{
						internalType: "string",
						name: "id",
						type: "string",
					},
					{
						internalType: "uint256",
						name: "bet",
						type: "uint256",
					},
					{
						internalType: "enum RockPaperScissors.GameStatus",
						name: "status",
						type: "uint8",
					},
					{
						internalType: "uint256",
						name: "createTime",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "startTime",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "endTime",
						type: "uint256",
					},
					{
						internalType: "address",
						name: "winner",
						type: "address",
					},
					{
						internalType: "address",
						name: "player1",
						type: "address",
					},
					{
						internalType: "address",
						name: "player2",
						type: "address",
					},
					{
						internalType: "bytes32",
						name: "player1Commit",
						type: "bytes32",
					},
					{
						internalType: "enum RockPaperScissors.Hand",
						name: "player1Hand",
						type: "uint8",
					},
					{
						internalType: "enum RockPaperScissors.Hand",
						name: "player2Hand",
						type: "uint8",
					},
					{
						internalType: "enum RockPaperScissors.GameEndReason",
						name: "endReason",
						type: "uint8",
					},
				],
				internalType: "struct RockPaperScissors.Game",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getGamesCount",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getHandStats",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getJoinableGames",
		outputs: [
			{
				components: [
					{
						internalType: "string",
						name: "id",
						type: "string",
					},
					{
						internalType: "uint256",
						name: "bet",
						type: "uint256",
					},
					{
						internalType: "enum RockPaperScissors.GameStatus",
						name: "status",
						type: "uint8",
					},
					{
						internalType: "uint256",
						name: "createTime",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "startTime",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "endTime",
						type: "uint256",
					},
					{
						internalType: "address",
						name: "winner",
						type: "address",
					},
					{
						internalType: "address",
						name: "player1",
						type: "address",
					},
					{
						internalType: "address",
						name: "player2",
						type: "address",
					},
					{
						internalType: "bytes32",
						name: "player1Commit",
						type: "bytes32",
					},
					{
						internalType: "enum RockPaperScissors.Hand",
						name: "player1Hand",
						type: "uint8",
					},
					{
						internalType: "enum RockPaperScissors.Hand",
						name: "player2Hand",
						type: "uint8",
					},
					{
						internalType: "enum RockPaperScissors.GameEndReason",
						name: "endReason",
						type: "uint8",
					},
				],
				internalType: "struct RockPaperScissors.Game[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "player",
				type: "address",
			},
		],
		name: "getPlayerStats",
		outputs: [
			{
				internalType: "uint256",
				name: "gamesPlayed",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "gamesWon",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "gamesLost",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "enum RockPaperScissors.Hand",
				name: "",
				type: "uint8",
			},
		],
		name: "handCounts",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "gameId",
				type: "string",
			},
			{
				internalType: "enum RockPaperScissors.Hand",
				name: "player2Hand",
				type: "uint8",
			},
		],
		name: "joinGame",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "gameId",
				type: "string",
			},
			{
				internalType: "enum RockPaperScissors.Hand",
				name: "player1Hand",
				type: "uint8",
			},
			{
				internalType: "string",
				name: "secret",
				type: "string",
			},
		],
		name: "revealHand",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "gameId",
				type: "string",
			},
			{
				internalType: "bytes32",
				name: "player1Commit",
				type: "bytes32",
			},
			{
				internalType: "uint256",
				name: "bet",
				type: "uint256",
			},
		],
		name: "startGame",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
] as const;
