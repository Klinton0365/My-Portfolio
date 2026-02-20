"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            smoothTouch: false,
            anchors: {
                offset: -100,
            },
        });

        // Expose globally so modals can stop/start scroll
        window.lenis = lenis;

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            window.lenis = undefined;
        };
    }, []);

    return null;
}