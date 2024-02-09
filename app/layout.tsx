import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import {
	GoogleAuthProvider,
	ReactQueryProvider,
	RecoilProvider,
} from "@/components/providers";

export const metadata: Metadata = {
	title: "Codage",
	description: "An app perfect for your coding interview needs!!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${GeistSans.variable} ${GeistMono.variable}`}>
				<ReactQueryProvider>
					<RecoilProvider>
						<GoogleAuthProvider>{children}</GoogleAuthProvider>
					</RecoilProvider>
				</ReactQueryProvider>
			</body>
		</html>
	);
}
