export enum Hand {
	None = 0,
	Rock = 1,
	Paper = 2,
	Scissors = 3,
}

export enum GameStatus {
	WaitingForPlayer = 0,
	WaitingForHandReveal = 1,
	Finished = 2,
}

export enum GameEndReason {
	NotEnded = 0,
	NormalEnd = 1,
	Cancelled = 2,
	RevealTimedOut = 3,
}

export type GameData = {
	id: string;
	bet: bigint;
	status: number;
	createTime: bigint;
	startTime: bigint;
	endTime: bigint;
	winner: `0x${string}`;
	player1: `0x${string}`;
	player2: `0x${string}`;
	player1Commit: `0x${string}`;
	player1Hand: number;
	player2Hand: number;
	endReason: number;
};
