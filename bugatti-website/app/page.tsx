"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import Navbar from "@/components/Navbar";
import ScrollCanvas from "@/components/ScrollCanvas";
import Experience from "@/components/Experience";
import SpecsGrid from "@/components/SpecsGrid";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="relative bg-black">
      <Navbar />

      {/* 
        Master Scroll Container
        Height = 600vh total
        - 100vh for the initial view
        - 500vh of scrollable distance for the sequence 
      */}
      <div ref={containerRef} className="h-[600vh] relative z-10">
        <ScrollCanvas scrollYProgress={scrollYProgress} />
        <Experience scrollYProgress={scrollYProgress} />
      </div>

      {/* Content after the sequence */}
      <div className="relative z-20 bg-black">
        <SpecsGrid />
        <Features />
        <Footer />
      </div>
    </main>
  );
}
