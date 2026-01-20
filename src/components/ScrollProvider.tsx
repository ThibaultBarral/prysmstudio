'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import type LocomotiveScroll from 'locomotive-scroll';

interface ScrollProviderProps {
    children: React.ReactNode;
}

// Extend Window interface to include locomotive property
declare global {
    interface Window {
        locomotive?: LocomotiveScroll;
    }
}

export default function ScrollProvider({ children }: ScrollProviderProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        if (!scrollRef.current) return;

        let scroll: LocomotiveScroll | null = null;
        let handleResize: (() => void) | null = null;

        // Import dynamique de locomotive-scroll uniquement côté client
        const initScroll = async () => {
            const LocomotiveScrollModule = await import('locomotive-scroll');
            const LocomotiveScroll = LocomotiveScrollModule.default;

            if (scrollRef.current) {
                scroll = new LocomotiveScroll({
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
                handleResize = () => {
                    scroll?.update();
                };
                window.addEventListener('resize', handleResize);
            }
        };

        initScroll();

        // Cleanup
        return () => {
            if (scroll) {
                scroll.destroy();
                window.locomotive = undefined;
            }
            if (handleResize) {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, [pathname]); // Réinitialiser le scroll quand le chemin change

    return (
        <main ref={scrollRef} data-scroll-container className="relative">
            {children}
        </main>
    );
} 