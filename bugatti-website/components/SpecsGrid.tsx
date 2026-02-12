export default function SpecsGrid() {
    const specs = [
        { label: "Engine", value: "8.0L W16" },
        { label: "Horsepower", value: "1500 HP" },
        { label: "Torque", value: "1600 Nm" },
        { label: "Top Speed", value: "420 km/h" },
        { label: "0-100 km/h", value: "2.4 s" },
        { label: "0-200 km/h", value: "6.1 s" },
        { label: "0-300 km/h", value: "13.1 s" },
        { label: "0-400 km/h", value: "32.6 s" },
        { label: "Weight", value: "1996 kg" },
        { label: "Length", value: "4544 mm" },
        { label: "Width", value: "2038 mm" },
        { label: "Height", value: "1212 mm" },
    ];

    return (
        <section className="py-24 px-8 bg-zinc-950 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white font-orbitron mb-16 text-center">
                    TECHNICAL <span className="text-amber-500">SPECIFICATIONS</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden">
                    {specs.map((spec, index) => (
                        <div key={index} className="bg-zinc-950 p-8 hover:bg-white/5 transition-colors duration-300 group">
                            <p className="text-zinc-500 text-xs font-bold tracking-widest uppercase mb-2 group-hover:text-amber-500 transition-colors">
                                {spec.label}
                            </p>
                            <p className="text-2xl md:text-3xl font-bold text-white font-rajdhani">
                                {spec.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
