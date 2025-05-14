export const BackgroundPattern = () => {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
                className="absolute left-[50%] top-0 h-[1000px] w-[1000px] -translate-x-1/2 stroke-[var(--foreground)]/10"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="hero-pattern"
                        width="100"
                        height="100"
                        x="50%"
                        y="-1"
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M0 0h100v100H0z" fill="none" />
                        {/* <path d="M0 0l100 100M100 0L0 100" strokeWidth="0.5" /> */}
                        <path d="M50 0v100M0 50h100" strokeWidth="0.5" />
                        <circle cx="50" cy="50" r="2" fill="currentColor" fillOpacity="0.1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth="0" fill="url(#hero-pattern)" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-transparent to-[var(--background)]" />
        </div>
    );
}; 