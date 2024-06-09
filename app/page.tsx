"use client";
import Header from "@/components/ui/Header";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";

const socialMedia = [
    {
        url: "https://github.com/tuna2134",
        icon: FiGithub,
    },
    {
        url: "https://twitter.com/fdc_tuna2134",
        icon: FaXTwitter,
    },
    {
        url: "https://discord.gg/7Z9rZ4X",
        icon: FaDiscord,
    },
];

const avatarURL =
    "https://cdn.discordapp.com/avatars/739702692393517076/689da5236709ab59a0371b7abcac7bda.png?size=1024";

export default function Home() {
    const [hidden, setHidden] = useState(true);
    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY !== 0) {
                setHidden(false);
            } else {
                setHidden(true);
            }
        };
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);
    return (
        <AnimatePresence>
            {!hidden && (
                <Header
                    className="fixed top-0 border-b shadow"
                    animate={true}
                />
            )}
            <div className="flex h-screen w-full items-center justify-center">
                <div>
                    <Image
                        className="mb-2 rounded-full"
                        alt="avatar.url"
                        src={avatarURL}
                        width={156}
                        height={156}
                    />
                    <p className="text-center text-2xl font-bold">tuna2134</p>
                    <div className="mt-4 flex justify-center space-x-4">
                        {socialMedia.map((social, key) => (
                            <a key={key} href={social.url}>
                                <social.icon
                                    className="text-black/50"
                                    size={32}
                                />
                            </a>
                        ))}
                    </div>
                    <div className="mt-8 flex justify-center">
                        <a
                            href="/#about"
                            className="rounded-full bg-indigo-600 px-6 py-2 text-sm tracking-wider text-white"
                        >
                            Go down
                        </a>
                    </div>
                </div>
            </div>
            <main className="mx-auto max-w-3xl px-4">
                <h2 className="text-4xl font-bold" id="about">
                    about
                </h2>
                <div className="mb-24 mt-16 space-y-8">
                    <div>
                        <p className="mb-2 text-2xl font-bold">挨拶</p>
                        <p>
                            こんにちはtuna2134です。よわよわです。アニメを見たり小説を読んだりして一日をだらだら過ごしています。
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-2xl font-bold">スキル</p>
                        <p>
                            JavaScript, TypeScript, Rust, Python,
                            Kubernetesなどなど。これらのツールを利用してサイトを作ったりとかインフラを管理したりして遊んでいます。
                        </p>
                    </div>
                    <div>
                        <p className="mb-2 text-2xl font-bold">所属組織</p>
                        <p>
                            neodylandとかKuronekoServerに所属しており、ボットの開発やインフラの管理などをしています。
                        </p>
                    </div>
                </div>
            </main>
        </AnimatePresence>
    );
}
