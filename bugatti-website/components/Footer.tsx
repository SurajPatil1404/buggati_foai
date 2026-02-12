export default function Footer() {
    return (
        <footer className="bg-zinc-950 py-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="font-orbitron font-bold text-2xl tracking-widest text-white">
                    BUGATTI
                </div>

                <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-500 font-rajdhani">
                    <a href="#" className="hover:text-white transition-colors">Press</a>
                    <a href="#" className="hover:text-white transition-colors">Careers</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                </div>

                <div className="text-zinc-600 text-xs font-rajdhani">
                    © 2026 BUGATTI AUTOMOBILES S.A.S.
                </div>
            </div>
        </footer>
    );
}
