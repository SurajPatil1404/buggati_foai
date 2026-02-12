"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface ExperienceProps {
    scrollYProgress: MotionValue<number>;
}

export default function Experience({ scrollYProgress }: ExperienceProps) {
    // Phase 1: Hero (0% - 33%)
    const heroOpacity = useTransform(scrollYProgress, [0, 0.25, 0.3], [1, 1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

    // Phase 2: Design (33% - 66%)
    const designOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.6, 0.7], [0, 1, 1, 0]);
    const designX = useTransform(scrollYProgress, [0.3, 0.4], [-50, 0]);

    // Phase 3: Engine (66% - 100%)
    const engineOpacity = useTransform(scrollYProgress, [0.65, 0.75, 1], [0, 1, 1]);
    const engineX = useTransform(scrollYProgress, [0.65, 0.75], [50, 0]);

    return (
        <div className="fixed top-0 left-0 w-full h-screen z-10 pointer-events-none flex flex-col justify-center">

            {/* PHASE 1: HERO */}
            <motion.div
                style={{ opacity: heroOpacity, y: heroY }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            >
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-amber-500 text-sm md:text-base font-bold tracking-[0.3em] font-rajdhani mb-4"
                >
                    THE PINNACLE OF HYPERCAR ENGINEERING
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-6xl md:text-9xl font-bold text-white font-orbitron tracking-tighter"
                >
                    BUGATTI <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">CHIRON</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-6 text-2xl text-amber-500 font-rajdhani"
                >
                    €3,000,000
                </motion.p>
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="mt-12 px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-amber-400 transition-colors duration-300 pointer-events-auto"
                >
                    Inquire Now
                </motion.button>
            </motion.div>

            {/* PHASE 2: DESIGN */}
            <motion.div
                style={{ opacity: designOpacity, x: designX }}
                className="absolute left-8 md:left-24 max-w-xl top-1/2 -translate-y-1/2"
            >
                <div className="border-l-2 border-amber-500 pl-6 bg-black/50 backdrop-blur-md p-8 rounded-r-xl">
                    <h2 className="text-4xl md:text-6xl font-bold text-white font-orbitron mb-6">DESIGN</h2>
                    <p className="text-gray-300 text-lg md:text-xl font-rajdhani leading-relaxed">
                        Sculpted carbon-fiber bodywork, signature C-line silhouette, active aerodynamics and handcrafted luxury interior.
                        Every surface engineered for speed and elegance.
                    </p>
                </div>
            </motion.div>

            {/* PHASE 3: POWERTRAIN */}
            <motion.div
                style={{ opacity: engineOpacity, x: engineX }}
                className="absolute right-8 md:right-24 max-w-xl top-1/2 -translate-y-1/2 text-right"
            >
                <div className="border-r-2 border-amber-500 pr-6 bg-black/50 backdrop-blur-md p-8 rounded-l-xl">
                    <h2 className="text-4xl md:text-6xl font-bold text-white font-orbitron mb-8">POWERTRAIN</h2>
                    <div className="space-y-6 font-rajdhani">
                        <div>
                            <p className="text-gray-400 text-sm tracking-widest uppercase">Engine</p>
                            <p className="text-2xl md:text-3xl text-white font-bold">8.0L Quad-Turbo W16</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm tracking-widest uppercase">Power</p>
                            <p className="text-2xl md:text-3xl text-amber-500 font-bold">1500 HP</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm tracking-widest uppercase">Top Speed</p>
                            <p className="text-2xl md:text-3xl text-white font-bold">420 km/h</p>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm tracking-widest uppercase">0–100 km/h</p>
                            <p className="text-2xl md:text-3xl text-amber-500 font-bold">2.4s</p>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    );
}
