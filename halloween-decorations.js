
(() => {
    "use strict";

    const STORAGE_KEY = "siteHalloweenTheme";

    // Восстанавливаем выбранную тему
    try {
        if (localStorage.getItem(STORAGE_KEY) === "on") {
            document.body.classList.add("halloween-theme");
        }
    } catch (error) {
        console.warn("Не удалось проверить тему Хэллоуина:", error);
    }

    // Не создаём библиотеку повторно
    if (!document.getElementById("halloween-shared-library")) {
        const library = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );

        library.id = "halloween-shared-library";
        library.setAttribute("aria-hidden", "true");
        library.style.cssText = "position:absolute;width:0;height:0;overflow:hidden";

        library.innerHTML = `
        <defs>
            <symbol id="hpage-pumpkin" viewBox="0 0 100 100">
                <path d="M50 25 C22 5 10 35 18 65 C25 92 43 91 50 85 C62 95 82 82 84 58 C87 31 70 9 50 25Z"
                      fill="#ef801f" stroke="#ffbd55" stroke-width="3"/>
                <path d="M50 26 Q39 50 50 85 M50 26 Q62 50 50 85"
                      fill="none" stroke="#b95318" stroke-width="3"/>
                <path d="M46 24 Q44 10 59 7 Q59 19 46 24Z"
                      fill="#65a34e"/>
                <path d="M29 48 L43 55 L31 62Z M71 48 L57 55 L69 62Z"
                      fill="#351326"/>
                <path d="M32 69 Q50 90 68 69 L61 80 L54 74 L50 82 L44 74 L37 80Z"
                      fill="#351326"/>
            </symbol>

            <symbol id="hpage-skull" viewBox="0 0 100 100">
                <path d="M50 10 C21 10 13 34 18 54 Q21 67 35 73 V89 H65 V73 Q81 65 83 49 C86 25 71 10 50 10Z"
                      fill="#e9e0d5" stroke="#a18da9" stroke-width="4"/>
                <ellipse cx="35" cy="47" rx="10" ry="13" fill="#28182f"/>
                <ellipse cx="65" cy="47" rx="10" ry="13" fill="#28182f"/>
                <path d="M50 57 L43 69 H57Z" fill="#28182f"/>
                <path d="M38 78 V88 M48 78 V88 M58 78 V88 M66 78 V88"
                      stroke="#8d7a91" stroke-width="3"/>
            </symbol>

            <symbol id="hpage-bat" viewBox="0 0 100 100">
                <path d="M50 35 Q34 10 20 15 L22 37 Q9 23 3 27 L12 65 L35 78 L50 66 L65 78 L88 65 L97 27 Q91 23 78 37 L80 15 Q66 10 50 35Z"
                      fill="#281332" stroke="#b27bd2" stroke-width="3"/>
                <circle cx="43" cy="43" r="3" fill="#ff9f40"/>
                <circle cx="57" cy="43" r="3" fill="#ff9f40"/>
            </symbol>

            <symbol id="hpage-ghost" viewBox="0 0 100 100">
                <path d="M50 9 C25 9 17 31 18 54 L16 91 L34 80 L49 94 L65 80 L84 91 L82 53 C84 28 72 9 50 9Z"
                      fill="#c7a4ed" fill-opacity=".85"
                      stroke="#f0d9ff" stroke-width="3"/>
                <ellipse cx="39" cy="42" rx="5" ry="8" fill="#38244d"/>
                <ellipse cx="62" cy="42" rx="5" ry="8" fill="#38244d"/>
                <ellipse cx="50" cy="62" rx="7" ry="9" fill="#38244d"/>
            </symbol>

            <symbol id="hpage-potion" viewBox="0 0 100 100">
                <path d="M37 9 H63 V31 L78 49 Q91 72 72 89 Q50 106 28 89 Q9 72 22 49 L37 31Z"
                      fill="#49245c" stroke="#ca91ff" stroke-width="4"/>
                <path d="M37 9 H63 V31 H37Z"
                      fill="#a56bd1" stroke="#e2bdff" stroke-width="3"/>
                <path d="M24 64 Q50 54 76 64 L78 78 Q50 99 22 78Z"
                      fill="#bd43e7" opacity=".9"/>
                <circle cx="42" cy="72" r="5" fill="#ffd0ff"/>
                <circle cx="60" cy="81" r="4" fill="#ffd0ff"/>
            </symbol>

            <symbol id="hpage-book" viewBox="0 0 100 100">
                <path d="M8 19 Q31 8 50 23 V88 Q29 73 8 84Z"
                      fill="#622b43" stroke="#e8a05a" stroke-width="4"/>
                <path d="M92 19 Q69 8 50 23 V88 Q71 73 92 84Z"
                      fill="#392039" stroke="#e8a05a" stroke-width="4"/>
                <path d="M50 23 V88" stroke="#ffcb7c" stroke-width="3"/>
                <path d="M28 38 L43 44 M28 51 L43 57 M58 44 L73 38 M58 57 L73 51"
                      stroke="#ffcf91" stroke-width="3"/>
                <path d="M50 39 L55 50 L67 52 L58 60 L60 72 L50 65 L40 72 L42 60 L33 52 L45 50Z"
                      fill="#ffbf49"/>
            </symbol>

            <symbol id="hpage-crystal" viewBox="0 0 100 100">
                <path d="M50 7 L76 34 L68 79 L50 94 L32 79 L24 34Z"
                      fill="#7544a5" stroke="#d8b1ff" stroke-width="4"/>
                <path d="M50 7 V94 M24 34 L50 45 L76 34 M32 79 L50 45 L68 79"
                      fill="none" stroke="#edceff" stroke-width="3"/>
                <path d="M50 19 L57 39 L50 53 L43 39Z"
                      fill="#f5dcff"/>
            </symbol>

            <symbol id="hpage-spider" viewBox="0 0 100 100">
                <g fill="none" stroke="#b07bd3" stroke-width="5" stroke-linecap="round">
                    <path d="M40 39 L17 20 L8 30 M35 52 L8 50 L4 64 M40 63 L17 83 L8 74"/>
                    <path d="M60 39 L83 20 L92 30 M65 52 L92 50 L96 64 M60 63 L83 83 L92 74"/>
                </g>
                <ellipse cx="50" cy="58" rx="17" ry="21" fill="#2a1734" stroke="#b07bd3" stroke-width="4"/>
                <circle cx="50" cy="31" r="13" fill="#2a1734" stroke="#b07bd3" stroke-width="4"/>
                <circle cx="44" cy="29" r="3" fill="#ff9e43"/>
                <circle cx="56" cy="29" r="3" fill="#ff9e43"/>
            </symbol>

            <symbol id="hpage-web" viewBox="0 0 100 100">
                <g fill="none" stroke="#d0b3e4" stroke-width="2">
                    <path d="M5 5 L95 95 M95 5 L5 95 M50 0 V100 M0 50 H100"/>
                    <path d="M5 5 Q50 25 95 5 M5 5 Q25 50 5 95 M95 5 Q75 50 95 95 M5 95 Q50 75 95 95"/>
                    <path d="M20 20 Q50 32 80 20 Q68 50 80 80 Q50 68 20 80 Q32 50 20 20"/>
                </g>
            </symbol>

            <symbol id="hpage-moon" viewBox="0 0 100 100">
                <path d="M70 13 Q30 17 26 51 Q22 83 62 89 Q34 100 14 73 Q-4 42 23 16 Q45 -2 70 13Z"
                      fill="#c9a0f4" stroke="#f0d9ff" stroke-width="3"/>
                <path d="M76 26 L81 38 L94 42 L81 47 L76 60 L71 47 L58 42 L71 38Z"
                      fill="#ffc05c"/>
            </symbol>

            <symbol id="hpage-comet" viewBox="0 0 100 100">
                <path d="M10 78 Q36 47 73 24"
                      stroke="#9652c8" stroke-width="17" opacity=".55" stroke-linecap="round"/>
                <path d="M17 78 Q45 48 75 26"
                      stroke="#dfb2ff" stroke-width="6" stroke-linecap="round"/>
                <circle cx="80" cy="20" r="12" fill="#ffbb57" stroke="#ffe7b0" stroke-width="3"/>
            </symbol>

            <symbol id="hpage-planet" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="24" fill="#7846a0" stroke="#d3a5f4" stroke-width="4"/>
                <ellipse cx="50" cy="50" rx="46" ry="13"
                         transform="rotate(-25 50 50)"
                         fill="none" stroke="#f1b56a" stroke-width="6"/>
                <path d="M36 35 Q50 24 64 40" stroke="#eac5ff" stroke-width="3" fill="none"/>
            </symbol>

            <symbol id="hpage-star" viewBox="0 0 100 100">
                <path d="M50 5 L61 37 L95 38 L68 58 L78 91 L50 71 L22 91 L32 58 L5 38 L39 37Z"
                      fill="#ffbb55" stroke="#ffe5a4" stroke-width="3"/>
            </symbol>
        </defs>`;

        document.body.prepend(library);
    }

    function makeDecoration(symbol, className) {
        const svg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );

        svg.setAttribute("viewBox", "0 0 100 100");
        svg.setAttribute("aria-hidden", "true");
        svg.classList.add("halloween-page-decor", className);

        const use = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "use"
        );

        use.setAttribute("href", "#hpage-" + symbol);
        svg.appendChild(use);

        return svg;
    }

    // Выбираем коллекцию по названию страницы
    function getPageSymbols() {
        const pageName = (
            document.title + " " +
            (document.querySelector("h1")?.textContent || "")
        ).toLowerCase();

        if (pageName.includes("дэйв") || pageName.includes("лаборатор")) {
            return ["potion", "spider", "book", "skull", "crystal", "ghost"];
        }

        if (pageName.includes("кейн") || pageName.includes("caine")) {
            return ["book", "crystal", "ghost", "potion", "moon", "skull"];
        }

        if (pageName.includes("атлас") || pageName.includes("atlas")) {
            return ["planet", "comet", "crystal", "moon", "star", "web"];
        }

        if (pageName.includes("карликов")) {
            return ["planet", "moon", "comet", "star", "pumpkin", "bat"];
        }

        if (pageName.includes("чарли") || pageName.includes("созвезд")) {
            return ["moon", "star", "crystal", "ghost", "comet", "bat"];
        }

        if (pageName.includes("космическ")) {
            return ["planet", "comet", "moon", "star", "bat", "pumpkin"];
        }

        return [
            "pumpkin", "skull", "bat", "ghost",
            "potion", "book", "crystal", "spider", "web", "moon"
        ];
    }

    function decorateSections() {
        const symbols = getPageSymbols();
        // На странице Космического атласа большие стикеры не создаём
const pageTitle = (
    document.title + " " +
    (document.querySelector("h1")?.textContent || "")
).toLowerCase();

if (
    document.body.classList.contains("space-atlas-page") ||
    pageTitle.includes("космический атлас") ||
    pageTitle.includes("космический атлас — папайрус")
) {
    return;
}

        let targets = [
            ...document.querySelectorAll(
                "header, main > section, main > article, section, article, footer, [data-halloween-decor]"
            )
        ];

        targets = [...new Set(targets)].filter(element => {
            if (element.id === "halloween-shared-library") return false;
            if (element.closest(".modal, [role='dialog']")) return false;

            const rect = element.getBoundingClientRect();

            if (element.tagName === "HEADER" || element.tagName === "FOOTER") {
                return rect.width > 200;
            }

            return rect.width > 240 && rect.height > 130;
        });

        // Если на странице нет section, используем основной контейнер
        if (targets.length === 0) {
            const fallback = document.querySelector(
                "main, .page-container, .container, .content"
            ) || document.body;

            targets = [fallback];
        }

        const positions = [
            "hpage-decor-top-left",
            "hpage-decor-top-right",
            "hpage-decor-bottom-left",
            "hpage-decor-bottom-right",
            "hpage-decor-mid-left",
            "hpage-decor-mid-right"
        ];

        targets.forEach((target, index) => {
            if (target.dataset.halloweenSharedDecor === "true") return;

            // Если старый декор уже есть, не дублируем его
            if (target.querySelector(".halloween-float")) {
                target.dataset.halloweenSharedDecor = "true";
                return;
            }

            target.dataset.halloweenSharedDecor = "true";

            if (getComputedStyle(target).position === "static") {
                target.style.position = "relative";
            }

            const layer = document.createElement("div");
            layer.className = "halloween-page-decor-layer";
            layer.setAttribute("aria-hidden", "true");

            const isHeaderOrFooter =
                target.tagName === "HEADER" || target.tagName === "FOOTER";

            const count = isHeaderOrFooter ? 1 : 3;

            for (let i = 0; i < count; i++) {
                const symbolIndex = (index * 2 + i) % symbols.length;
                const positionIndex = (index + i) % positions.length;

                const symbol = symbols[symbolIndex];

                layer.appendChild(
                    makeDecoration(
                        symbol,
                        positions[positionIndex]
                    )
                );
            }

            target.appendChild(layer);
        });
    }

    function decorateCards() {
        const symbols = getPageSymbols();

        const cards = document.querySelectorAll(
            ".planet-card, .moon-card, .constellation-card, " +
            ".satellite-card, .dwarf-planet-card, .atlas-card, " +
            ".card, [class*='-card']"
        );

        cards.forEach((card, index) => {
            if (card.querySelector(".halloween-card-corner")) return;
            if (card.closest(".modal, [role='dialog']")) return;

            const rect = card.getBoundingClientRect();
            if (rect.width < 100 || rect.height < 85) return;

            if (getComputedStyle(card).position === "static") {
                card.style.position = "relative";
            }

            const symbol = symbols[index % symbols.length];

            card.appendChild(
                makeDecoration(symbol, "halloween-card-corner")
            );
        });
    }

    function startDecorations() {
        decorateSections();
        decorateCards();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", startDecorations, {
            once: true
        });
    } else {
        startDecorations();
    }

    // Синхронизация темы между открытыми вкладками
    window.addEventListener("storage", event => {
        if (event.key === STORAGE_KEY) {
            document.body.classList.toggle(
                "halloween-theme",
                event.newValue === "on"
            );
        }
    });
})();
