"use client";
import Link from "next/link";
import { tv } from "tailwind-variants";
import { motion } from "framer-motion";
import React from "react";

const links = [
    {
        name: "works",
        href: "/works",
    },
    {
        name: "articles",
        href: "/articles",
    },
];

const headerVariant = tv({
    base: "w-full h-20 flex items-center bg-white",
});

interface HeaderProps {
    className?: string;
    animate?: boolean;
}

const HeaderComponent: React.FC<{
    children: React.ReactNode;
    className: string;
    animate: boolean;
}> = ({ animate, children, className }) => {
    if (animate) {
        return (
            <motion.header
                className={className}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                exit={{ y: -100 }}
            >
                {children}
            </motion.header>
        );
    }
    return <header className={className}>{children}</header>;
};

const Header: React.FC<HeaderProps> = ({ className = "", animate = false }) => {
    const headerClass = headerVariant({ className });
    return (
        <HeaderComponent className={headerClass} animate={animate}>
            <div className="mx-auto w-full max-w-6xl px-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl">tuna2134</h1>
                    <nav className="flex items-center space-x-6 rounded-full bg-indigo-600 px-6 py-2 text-white">
                        {links.map((link, key) => (
                            <Link key={key} href={link.href}>
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </HeaderComponent>
    );
};

export default Header;
