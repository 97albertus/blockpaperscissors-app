"use client";
import { useState, useEffect } from "react";

export default function useCountdown(endTime: number) {
	const [timeLeft, setTimeLeft] = useState("");

	useEffect(() => {
		const intervalId = setInterval(() => {
			const now = Date.now();
			const distance = endTime * 1000 - now;

			const hours = Math.floor(distance / (1000 * 60 * 60));
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setTimeLeft(`${hours}:${minutes}:${seconds}`);
		}, 1000);

		return () => clearInterval(intervalId);
	}, [endTime]);

	return timeLeft;
}
