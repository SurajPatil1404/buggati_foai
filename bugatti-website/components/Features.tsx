export default function Features() {
    return (
        <section className="py-24 px-8 bg-black relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-900/50 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white font-orbitron mb-8 leading-tight">
                            FORM FOLLOWS <br /><span className="text-amber-500">PERFORMANCE</span>
                        </h2>
                        <p className="text-zinc-400 text-lg font-rajdhani leading-relaxed mb-8">
                            The content of the Bugatti Chiron serves one single purpose: to facilitate the engine’s needs.
                            Every inlet, every curve, and every angle has been designed to maximize cooling and aerodynamics.
                        </p>
                        <button className="text-amber-500 uppercase tracking-widest text-sm font-bold border-b border-amber-500 pb-1 hover:text-white hover:border-white transition-colors">
                            Discover Philosophy
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <div className="bg-zinc-900 aspect-[4/5] relative rounded overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <h3 className="text-white font-bold font-orbitron">AERODYNAMICS</h3>
                                </div>
                            </div>
                            <div className="bg-zinc-800 aspect-square relative rounded overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <h3 className="text-white font-bold font-orbitron">INTERIOR</h3>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4 mt-8">
                            <div className="bg-zinc-800 aspect-square relative rounded overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <h3 className="text-white font-bold font-orbitron">CHASSIS</h3>
                                </div>
                            </div>
                            <div className="bg-zinc-900 aspect-[4/5] relative rounded overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <h3 className="text-white font-bold font-orbitron">LIGHTING</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
