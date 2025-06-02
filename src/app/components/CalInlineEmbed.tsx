import { useEffect } from "react";

export default function CalInlineEmbed() {
    useEffect(() => {
        // Injecte le script Cal.com seulement côté client
        const script = document.createElement("script");
        script.src = "https://app.cal.com/embed/embed.js";
        script.async = true;
        script.onload = () => {
            if (window.Cal) {
                window.Cal("init", "creation-site-web", { origin: "https://cal.com" });
                window.Cal.ns["creation-site-web"]("inline", {
                    elementOrSelector: "#my-cal-inline",
                    config: { layout: "month_view" },
                    calLink: "pryzm.agency/creation-site-web",
                });
                window.Cal.ns["creation-site-web"]("ui", {
                    hideEventTypeDetails: false,
                    layout: "month_view",
                });
            }
        };
        document.body.appendChild(script);
        return () => {
            // Optionally, cleanup
            const el = document.getElementById("my-cal-inline");
            if (el) el.innerHTML = "";
        };
    }, []);

    return (
        <div
            id="my-cal-inline"
            style={{ width: "100%", height: 700, overflow: "scroll", borderRadius: 16, background: "white" }}
        />
    );
} 