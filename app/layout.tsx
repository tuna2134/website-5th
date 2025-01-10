import type { Metadata } from "next";
import { Lato, Zen_Maru_Gothic } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const lato = Lato({
    weight: "400",
    subsets: ["latin"],
});
const zenMaruGothic = Zen_Maru_Gothic({
    weight: "400",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "tuna2134",
    description: "tuna2134の謎のサイト",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body
                className={`${lato.className} ${zenMaruGothic.className} scroll-smooth`}
            >
                {children}
            </body>
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8715826596324259"
                crossOrigin="anonymous"
            />
        </html>
    );
}
