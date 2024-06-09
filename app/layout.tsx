import type { Metadata } from "next";
import { Lato, Zen_Maru_Gothic } from "next/font/google";
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
            <body className={`${lato.className} ${zenMaruGothic.className}`}>
                {children}
            </body>
        </html>
    );
}
