"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-black/10 border-b border-white/10"
        >
            <div className="flex items-center gap-4">
                {/* Bugatti Logo Placeholder / Text */}
                <h1 className="text-2xl font-bold tracking-widest text-white font-orbitron">
                    BUGATTI
                </h1>
            </div>

            <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest text-gray-300 uppercase font-rajdhani">
                <Link href="#" className="hover:text-amber-400 transition-colors duration-300">Models</Link>
                <Link href="#" className="hover:text-amber-400 transition-colors duration-300">Brand</Link>
                <Link href="#" className="hover:text-amber-400 transition-colors duration-300">Ownership</Link>
            </div>

            <button className="px-6 py-2 border border-amber-500/50 text-amber-400 text-xs font-bold uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all duration-300 backdrop-blur-sm">
                Configure
            </button>
        </motion.nav>
    );
}
