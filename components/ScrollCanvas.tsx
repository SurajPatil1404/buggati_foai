"use client";

import { useEffect, useRef, useState } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 145;
const IMAGES_BASE_PATH = "/images/frames_final/output_";

interface ScrollCanvasProps {
    scrollYProgress: MotionValue<number>;
}

export default function ScrollCanvas({ scrollYProgress }: ScrollCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgs: HTMLImageElement[] = [];

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            img.src = `${IMAGES_BASE_PATH}${i}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setIsLoaded(true);
                }
            };
            imgs.push(img);
        }
        setImages(imgs);
    }, []);

    // Draw frame
    const drawFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const img = images[index];

        if (!canvas || !ctx || !img) return;

        // Handle high DPI
        const dpr = window.devicePixelRatio || 1;

        // Set canvas size if not set (or on resize)
        // We want the canvas to fill the screen but maintain aspect ratio or cover
        // For this specific showcase, "contain" is usually better to see the whole car
        // but the user requested "video-like", so maybe cover?
        // Promp said: "object-fit contain"

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate scaling
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // Initial draw
    useEffect(() => {
        if (isLoaded) {
            // Handle resize
            const handleResize = () => {
                const canvas = canvasRef.current;
                if (canvas) {
                    canvas.width = window.innerWidth * window.devicePixelRatio;
                    canvas.height = window.innerHeight * window.devicePixelRatio;
                    // draw current frame again
                    const currentProgress = scrollYProgress.get();
                    const frameIndex = Math.min(
                        FRAME_COUNT - 1,
                        Math.ceil(currentProgress * (FRAME_COUNT - 1))
                    );
                    drawFrame(frameIndex);
                }
            };

            window.addEventListener("resize", handleResize);
            handleResize(); // sets initial size

            return () => window.removeEventListener("resize", handleResize);
        }
    }, [isLoaded, scrollYProgress]);

    // Update on scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded) return;
        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.ceil(latest * (FRAME_COUNT - 1))
        );
        drawFrame(frameIndex);
    });

    return (
        <div className="fixed top-0 left-0 w-full h-screen z-0 bg-black">
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center text-amber-500 font-rajdhani animate-pulse">
                    LOADING EXPERIENCE...
                </div>
            )}
            <canvas
                ref={canvasRef}
                className="w-full h-full block object-contain"
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
}
