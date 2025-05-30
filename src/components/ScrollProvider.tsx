'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface ScrollProviderProps {
    children: React.ReactNode;
}

export default function ScrollProvider({ children }: ScrollProviderProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        if (!scrollRef.current) return;

        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            multiplier: 0.9,
            lerp: 0.2,
            reloadOnContextChange: true,
            initPosition: { x: 0, y: 0 }
        });

        // Expose LocomotiveScroll instance globally
        window.locomotive = scroll;

        // Mettre à jour le scroll quand la fenêtre est redimensionnée
        const handleResize = () => {
            scroll.update();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            scroll.destroy();
            window.locomotive = undefined;
            window.removeEventListener('resize', handleResize);
        };
    }, [pathname]); // Réinitialiser le scroll quand le chemin change

    return (
        <main ref={scrollRef} data-scroll-container className="relative">
            {children}
        </main>
    );
} 