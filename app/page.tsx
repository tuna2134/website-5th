"use client";
import Header from "@/components/ui/Header";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { VscGithubAlt } from "react-icons/vsc";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

const socialMedia = [
    {
        url: "https://github.com/tuna2134",
        icon: VscGithubAlt,
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
                                <social.icon size={32} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <main className="mx-auto max-w-5xl">
                <div>
                    <p>hello</p>
                </div>
            </main>
        </AnimatePresence>
    );
}
