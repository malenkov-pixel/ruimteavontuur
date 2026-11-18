(() => {
    "use strict";

    const W_KEY = "siteWinterTheme";
    const H_KEY = "siteHalloweenTheme";

    const W_TEXT = {
        ru: { off: "❄️ Зима холода одинокие дома", on: "❄️ Зима холода одинокие дома: ВКЛ" },
        kk: { off: "❄️ Аяз, суық, жалғыз үйлер", on: "❄️ Аяз, суық, жалғыз үйлер: ҚОСУЛЫ" },
        cs: { off: "❄️ Zima, mrazy, osamělé domy", on: "❄️ Zima, mrazy, osamělé domy: ZAP" },
        en: { off: "❄️ Winter, frost, lonely houses", on: "❄️ Winter, frost, lonely houses: ON" },
        de: { off: "❄️ Winter, Kälte, einsame Häuser", on: "❄️ Winter, Kälte, einsame Häuser: AN" },
        fr: { off: "❄️ Hiver, froid, maisons solitaires", on: "❄️ Hiver, froid, maisons solitaires : ACTIVÉ" },
        es: { off: "❄️ Invierno, frío, casas solitarias", on: "❄️ Invierno, frío, casas solitarias: SÍ" },
        it: { off: "❄️ Inverno, freddo, case solitarie", on: "❄️ Inverno, freddo, case solitarie: ON" },
        pl: { off: "❄️ Zima, mrozy, samotne domy", on: "❄️ Zima, mrozy, samotne domy: WŁ." },
        nl: { off: "❄️ Winter, kou, eenzame huizen", on: "❄️ Winter, kou, eenzame huizen: AAN" }
    };

    const OLD_IDS = [
        "realSnowCanvas",
        "snowNoFadeCanvas",
        "persistentSnowLayer",
        "persistentDrift",
        "winterSnowFullLayer",
        "winterFullSnowdrift",
        "winterSnow"
    ];

    function cleanupOld() {
        OLD_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (el && el.id !== "cleanSnowCanvas") el.remove();
        });
    }

    function wIsHome() {
        return Boolean(document.getElementById("halloweenThemeButton") || document.getElementById("winterThemeButton")) ||
            window.location.pathname.endsWith("index.html") ||
            window.location.pathname === "/";
    }

    function wIsCharlie() {
        const raw = `${document.title || ""} ${window.location.pathname || ""} ${document.body ? document.body.textContent.slice(0, 600) : ""}`.toLowerCase();
        return Boolean(document.querySelector(".constellation-card, #constellationTitle, .constellation-list, .constellation-header")) ||
            raw.includes("чарли") ||
            raw.includes("charlie") ||
            raw.includes("морнингстар");
    }

    function wIsDave() {
        const raw = `${document.title || ""} ${window.location.pathname || ""} ${document.body ? document.body.textContent.slice(0, 600) : ""}`.toLowerCase();
        return Boolean(document.querySelector(".garden-board, .lab-header, .space-grid, .zombie-zone")) ||
            raw.includes("дэйв") ||
            raw.includes("dave");
    }

    function wLang() {
        try {
            if (typeof window.currentLanguage === "string" && W_TEXT[window.currentLanguage]) {
                return window.currentLanguage;
            }
        } catch (_) {}
        try {
            const s = localStorage.getItem("siteLanguage");
            if (s && W_TEXT[s]) return s;
        } catch (_) {}
        return "ru";
    }

    function wHatSvg() {
        const ns = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(ns, "svg");
        svg.setAttribute("viewBox", "0 0 64 48");
        svg.classList.add("w-hat-svg");
        svg.innerHTML = `
            <path d="M12 34 C16 14, 34 6, 52 16 C45 21, 41 27, 44 34 Z" fill="#e11d48"/>
            <rect x="8" y="32" width="40" height="9" rx="4.5" fill="#f8fafc"/>
            <circle cx="54" cy="16" r="5.5" fill="#ffffff"/>
        `;
        return svg;
    }

    function wIsBigTarget(img, parent) {
        const info = [
            img.alt || "",
            img.src || "",
            parent ? parent.className : "",
            parent && parent.parentElement ? parent.parentElement.textContent : ""
        ].join(" ").toLowerCase();

        return ["jupiter", "юпитер", "saturn", "сатурн", "moon", "moons", "satellite", "спутник", "спутники", "луна", "луны"].some((w) => info.includes(w));
    }

    function wAddHats() {
        if (wIsCharlie() || wIsDave()) return;
        document.querySelectorAll(".planet-card img, .moon-card img, .satellite-card img, .dwarf-planet-card img").forEach((img) => {
            const parent = img.parentElement;
            if (!parent || img.closest(".w-hat-box")) return;
            const box = document.createElement("span");
            box.className = "w-hat-box";
            if (wIsBigTarget(img, parent)) box.classList.add("w-hat-box--big");
            parent.insertBefore(box, img);
            box.appendChild(img);
            box.appendChild(wHatSvg());
        });
    }

    const BASE_DRIFT = 30;
    const MAX_DRIFT = 96;
    const FLAKE_COUNT = 280;

    let canvas = null;
    let ctx = null;
    let w = window.innerWidth;
    let h = window.innerHeight;
    let driftHeight = BASE_DRIFT;
    const flakes = [];

    function ensureCanvas() {
        if (!document.body) return null;
        if (!document.getElementById("cleanSnowCanvasStyle")) {
            const st = document.createElement("style");
            st.id = "cleanSnowCanvasStyle";
            st.textContent = `
                #cleanSnowCanvas {
                    position: fixed !important;
                    inset: 0 !important;
                    width: 100vw !important;
                    height: 100vh !important;
                    pointer-events: none !important;
                    z-index: 2147483647 !important;
                }
                #winterSanta {
                    position: fixed !important;
                    top: 72px !important;
                    left: -300px !important;
                    width: 240px !important;
                    height: 84px !important;
                    pointer-events: none !important;
                    z-index: 2147483646 !important;
                    display: none;
                    animation: winterSantaFly 18s linear infinite !important;
                }
                body.winter-mode #winterSanta {
                    display: block !important;
                }
                @keyframes winterSantaFly {
                    0% {
                        transform: translate3d(-40px, 0, 0) rotate(-2deg);
                    }
                    50% {
                        transform: translate3d(calc(50vw), -14px, 0) rotate(2deg);
                    }
                    100% {
                        transform: translate3d(calc(100vw + 340px), 4px, 0) rotate(-1deg);
                    }
                }
            `;
            (document.head || document.documentElement).appendChild(st);
        }
        if (!canvas) {
            canvas = document.getElementById("cleanSnowCanvas") || document.createElement("canvas");
            canvas.id = "cleanSnowCanvas";
            if (!canvas.parentNode) document.body.appendChild(canvas);
            ctx = canvas.getContext("2d");
            resizeCanvas();
        }
        return canvas;
    }

    function resizeCanvas() {
        w = window.innerWidth;
        h = window.innerHeight;
        if (canvas) {
            canvas.width = w;
            canvas.height = h;
        }
        driftHeight = Math.min(driftHeight, Math.max(BASE_DRIFT, h * 0.14));
    }

    function makeFlake(randomY = false) {
        const topLimit = Math.max(20, h - driftHeight - 10);
        return {
            x: Math.random() * w,
            y: randomY ? Math.random() * topLimit : -12 - Math.random() * 100,
            r: 2.4 + Math.random() * 3.8,
            vy: 1.35 + Math.random() * 2.1,
            vx: (Math.random() - 0.5) * 0.85,
            phase: Math.random() * Math.PI * 2,
            speed: 0.015 + Math.random() * 0.025,
            amp: 0.5 + Math.random() * 1.15
        };
    }

    function resetFlakes(randomY = true) {
        flakes.length = 0;
        for (let i = 0; i < FLAKE_COUNT; i++) {
            flakes.push(makeFlake(randomY));
        }
    }

    function drawDrift() {
        const topY = h - driftHeight;
        ctx.save();
        ctx.globalAlpha = 0.96;
        ctx.beginPath();
        ctx.moveTo(0, h);
        const segs = 40;
        for (let i = 0; i <= segs; i++) {
            const x = (w / segs) * i;
            const wave = Math.sin(i * 0.55) * 6.5 + Math.cos(i * 1.2) * 3;
            ctx.lineTo(x, Math.min(h, topY + wave));
        }
        ctx.lineTo(w, h);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, topY - 10, 0, h);
        grad.addColorStop(0, "#ffffff");
        grad.addColorStop(0.55, "#e6f4ff");
        grad.addColorStop(1, "#c6e3fa");
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
    }

    function stepSnow() {
        const c = ensureCanvas();
        if (!c || !ctx) {
            requestAnimationFrame(stepSnow);
            return;
        }

        const isOn = document.body.classList.contains("winter-mode");
        if (!isOn) {
            c.style.display = "none";
            ctx.clearRect(0, 0, w, h);
            requestAnimationFrame(stepSnow);
            return;
        }

        c.style.display = "block";
        ctx.clearRect(0, 0, w, h);

        if (flakes.length !== FLAKE_COUNT) {
            resetFlakes(true);
        }

        const driftTop = h - driftHeight;
        drawDrift();

        for (let i = 0; i < flakes.length; i++) {
            const f = flakes[i];
            f.phase += f.speed;
            f.x += f.vx + Math.sin(f.phase) * f.amp;
            f.y += f.vy;

            if (f.x < -14) f.x = w + 14;
            if (f.x > w + 14) f.x = -14;

            if (f.y + f.r >= driftTop) {
                driftHeight = Math.min(MAX_DRIFT, driftHeight + 0.04);
                const next = makeFlake(false);
                f.x = next.x;
                f.y = next.y;
                f.r = next.r;
                f.vy = next.vy;
                f.vx = next.vx;
                f.phase = next.phase;
                f.speed = next.speed;
                f.amp = next.amp;
            }

            ctx.save();
            ctx.globalAlpha = 1;
            ctx.beginPath();
            ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
            ctx.fillStyle = "#ffffff";
            ctx.fill();
            ctx.restore();
        }

        requestAnimationFrame(stepSnow);
    }

    function createSantaElement() {
        const santa = document.createElement("div");
        santa.id = "winterSanta";
        santa.innerHTML = `
            <svg viewBox="0 0 280 96" width="100%" height="100%" style="overflow: visible; filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.35));">
                <defs>
                    <linearGradient id="santaCoatGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stop-color="#ef4444"/>
                        <stop offset="100%" stop-color="#991b1b"/>
                    </linearGradient>
                    <linearGradient id="sleighGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#dc2626"/>
                        <stop offset="100%" stop-color="#7f1d1d"/>
                    </linearGradient>
                    <linearGradient id="runnerGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stop-color="#fde68a"/>
                        <stop offset="50%" stop-color="#f59e0b"/>
                        <stop offset="100%" stop-color="#fef08a"/>
                    </linearGradient>
                </defs>

                <path d="M14 74 L148 74 Q164 74 168 58" fill="none" stroke="url(#runnerGrad)" stroke-width="3.2" stroke-linecap="round"/>
                <line x1="36" y1="62" x2="36" y2="74" stroke="#f59e0b" stroke-width="2.5"/>
                <line x1="126" y1="62" x2="126" y2="74" stroke="#f59e0b" stroke-width="2.5"/>

                <path d="M124 44 L184 44" fill="none" stroke="#fef3c7" stroke-width="1.6" stroke-dasharray="4 2"/>

                <path d="M26 56 C18 42, 24 26, 40 26 C54 26, 62 40, 56 56 Z" fill="#b45309"/>
                <path d="M35 26 L45 26 L47 22 L33 22 Z" fill="#fbbf24"/>
                <rect x="44" y="28" width="12" height="12" rx="2" fill="#22c55e"/>
                <line x1="50" y1="28" x2="50" y2="40" stroke="#fef08a" stroke-width="2"/>
                <line x1="44" y1="34" x2="56" y2="34" stroke="#fef08a" stroke-width="2"/>

                <path d="M18 44 Q20 64 42 64 L134 64 Q152 64 156 42 L144 42 Q140 54 128 54 L40 54 Q30 54 28 44 Z" fill="url(#sleighGrad)"/>
                <path d="M22 46 Q88 52 150 44" fill="none" stroke="#fbbf24" stroke-width="2"/>

                <path d="M84 54 L88 32 Q98 28 112 32 L116 54 Z" fill="url(#santaCoatGrad)"/>
                <rect x="85" y="45" width="30" height="4.5" fill="#1e293b"/>
                <rect x="97" y="44.5" width="6" height="5.5" rx="1" fill="#fbbf24"/>
                <line x1="88" y1="33" x2="112" y2="33" stroke="#ffffff" stroke-width="3" stroke-linecap="round"/>
                <path d="M108 35 L124 43" stroke="#dc2626" stroke-width="6" stroke-linecap="round"/>
                <circle cx="125" cy="44" r="3.5" fill="#fde68a"/>

                <circle cx="102" cy="23" r="6.5" fill="#fde68a"/>
                <circle cx="104" cy="23" r="1.1" fill="#0f172a"/>
                <circle cx="106.5" cy="24" r="1.4" fill="#fb7185"/>
                <path d="M96 25 Q102 38 110 27 Q105 24 96 25 Z" fill="#ffffff"/>
                <path d="M94 20 C96 8, 114 6, 122 15 C115 16, 110 18, 112 21 Z" fill="#ef4444"/>
                <rect x="93" y="18" width="19" height="4" rx="2" fill="#ffffff"/>
                <circle cx="123" cy="15" r="3.5" fill="#ffffff"/>

                <line x1="186" y1="48" x2="182" y2="63" stroke="#78350f" stroke-width="2.6" stroke-linecap="round"/>
                <line x1="196" y1="48" x2="201" y2="63" stroke="#78350f" stroke-width="2.6" stroke-linecap="round"/>
                <path d="M180 41 Q192 38 202 42 L208 31 L215 33 L206 49 L180 49 Z" fill="#92400e"/>
                <ellipse cx="216" cy="32" rx="7" ry="4.5" fill="#92400e"/>
                <circle cx="223" cy="32" r="2.6" fill="#ef4444"/>
                <circle cx="223" cy="32" r="5" fill="rgba(239, 68, 68, 0.28)"/>
                <circle cx="215" cy="30.5" r="1.1" fill="#0f172a"/>
                <ellipse cx="211" cy="28" rx="3.2" ry="1.5" transform="rotate(-20 211 28)" fill="#78350f"/>
                <path d="M213 27 L211 18 M211 22 L207 20 M212 20 L215 18" stroke="#fde68a" stroke-width="1.8" stroke-linecap="round"/>
                <path d="M217 27 L219 18 M219 22 L223 20 M218 20 L215 18" stroke="#fde68a" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
        `;
        return santa;
    }

    function wEnsureNodes() {
        if (!document.body) return;
        cleanupOld();

        if (wIsHome()) {
            document.body.classList.add("winter-home");
            if (!document.getElementById("winterThemeButton")) {
                const btn = document.createElement("button");
                btn.type = "button";
                btn.id = "winterThemeButton";
                btn.textContent = W_TEXT.ru.off;
                document.body.appendChild(btn);
            }
            if (!document.getElementById("winterSanta")) {
                document.body.appendChild(createSantaElement());
            }
        }

        if (!document.getElementById("winterGarland")) {
            const g = document.createElement("div");
            g.id = "winterGarland";
            for (let i = 0; i < 22; i++) g.appendChild(document.createElement("span"));
            document.body.appendChild(g);
        }

        if (!document.getElementById("winterDrift")) {
            const d = document.createElement("div");
            d.id = "winterDrift";
            document.body.appendChild(d);
        }

        ensureCanvas();
        wAddHats();
    }

    function wUpdateDaveIcons(enable) {
        if (!wIsDave()) return;
        document.querySelectorAll(".plant-choice, .victory-plants, .game-section h2, .lab-header .dave-icon").forEach((el) => {
            if (enable) {
                if (!el.dataset.wOld) el.dataset.wOld = el.innerHTML;
                el.innerHTML = el.dataset.wOld
                    .replace(/🟢/g, "🧊")
                    .replace(/🌱/g, "❄️")
                    .replace(/🌻/g, "❄️");
            } else if (el.dataset.wOld) {
                el.innerHTML = el.dataset.wOld;
                delete el.dataset.wOld;
            }
        });
    }

    function wUpdateLabel() {
        const btn = document.getElementById("winterThemeButton");
        if (!btn) return;
        const dict = W_TEXT[wLang()] || W_TEXT.ru;
        btn.textContent = document.body.classList.contains("winter-mode") ? dict.on : dict.off;
    }

    function wSetMode(enable) {
        wEnsureNodes();
        if (enable) {
            document.body.classList.remove("halloween-theme");
            try { localStorage.setItem(H_KEY, "off"); } catch (_) {}
        }

        document.body.classList.toggle("winter-mode", enable);
        document.body.classList.toggle("winter-charlie", Boolean(enable && wIsCharlie()));
        document.body.classList.toggle("winter-dave", Boolean(enable && wIsDave()));
        wUpdateDaveIcons(enable);
        wUpdateLabel();

        if (enable) {
            driftHeight = BASE_DRIFT;
            resetFlakes(true);
        } else if (ctx) {
            ctx.clearRect(0, 0, w, h);
        }

        try { localStorage.setItem(W_KEY, enable ? "on" : "off"); } catch (_) {}
    }

    function wSyncFromStorage() {
        let savedW = null;
        let savedH = "off";
        try {
            savedW = localStorage.getItem(W_KEY);
            savedH = localStorage.getItem(H_KEY) || "off";
        } catch (_) {}

        if (savedW === "on" || (savedW === null && savedH !== "on")) {
            wSetMode(true);
        } else {
            wSetMode(false);
            if (savedH === "on") document.body.classList.add("halloween-theme");
        }
    }

    document.addEventListener("click", (e) => {
        const btn = e.target && e.target.closest && e.target.closest("#winterThemeButton");
        if (btn) {
            e.preventDefault();
            wSetMode(!document.body.classList.contains("winter-mode"));
        }
        const hBtn = e.target && e.target.closest && (e.target.closest("#halloweenThemeButton") || e.target.closest("#gardenThemeBtn"));
        if (hBtn) {
            setTimeout(() => {
                if (document.body.classList.contains("halloween-theme")) wSetMode(false);
            }, 0);
        }
    });

    window.addEventListener("resize", resizeCanvas);

    document.addEventListener("DOMContentLoaded", () => {
        wEnsureNodes();
        wSyncFromStorage();
        requestAnimationFrame(stepSnow);

        setInterval(() => {
            cleanupOld();
            wUpdateLabel();
            wAddHats();
            if (document.body.classList.contains("winter-mode")) {
                document.body.classList.toggle("winter-charlie", wIsCharlie());
                document.body.classList.toggle("winter-dave", wIsDave());
            }
        }, 600);
    });

    window.addEventListener("pageshow", () => {
        wEnsureNodes();
        wSyncFromStorage();
    });
})();