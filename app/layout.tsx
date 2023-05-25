"use client";

import Head from "next/head";
import "./globals.css";
import { GradientBackgroundCon } from "@/components/quoteGenerator/QuoteGenerator";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<html lang="en">
				<Head>
					<title>Quote Generator</title>
					<meta name="description" content="A Quote Generator Projects" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<body>{children}</body>
				<GradientBackgroundCon></GradientBackgroundCon>
			</html>
		</>
	);
}
