(() => {
    "use strict";

    const languages = [
        { code: "ru", name: "🇷🇺 Русский" },
        { code: "kk", name: "🇰🇿 Қазақша" },
        { code: "cs", name: "🇨🇿 Čeština" },
        { code: "en", name: "🇬🇧 English" },
        { code: "de", name: "🇩🇪 Deutsch" },
        { code: "fr", name: "🇫🇷 Français" },
        { code: "es", name: "🇪🇸 Español" },
        { code: "it", name: "🇮🇹 Italiano" },
        { code: "pl", name: "🇵🇱 Polski" },
        { code: "nl", name: "🇳🇱 Nederlands" }
    ];

    const storageKey = "siteLanguage";

    let currentLanguage = "ru";

    try {
        const savedLanguage = localStorage.getItem(storageKey);

        if (languages.some(language => language.code === savedLanguage)) {
            currentLanguage = savedLanguage;
        }
    } catch (error) {
        console.warn("Не удалось загрузить язык сайта:", error);
    }

    // Не создаём меню повторно.
    if (document.getElementById("pageLanguageMenu")) {
        return;
    }

    const style = document.createElement("style");

    style.textContent = `
        #pageLanguageMenu {
            position: fixed;
            top: 16px;
            right: 16px;
            z-index: 99999;
            max-width: calc(100vw - 32px);
            padding: 10px 14px;
            color: #fff;
            background: #17152f;
            border: 1px solid #8b7cff;
            border-radius: 12px;
            font-size: 15px;
            cursor: pointer;
            box-shadow: 0 0 14px #7867ff66;
        }

        #pageLanguageMenu:focus {
            outline: 2px solid #b9e8ff;
            outline-offset: 3px;
        }

        #pageLanguageMenu option {
            color: #fff;
            background: #17152f;
        }
    `;

    document.head.appendChild(style);

    const menu = document.createElement("select");

    menu.id = "pageLanguageMenu";
    menu.setAttribute("aria-label", "Выбор языка");
    menu.title = "Выбор языка / Language";

    languages.forEach(language => {
        const option = document.createElement("option");

        option.value = language.code;
        option.textContent = language.name;
        option.selected = language.code === currentLanguage;

        menu.appendChild(option);
    });

    menu.value = currentLanguage;

    menu.addEventListener("change", () => {
        const selectedLanguage = menu.value;

        if (!languages.some(language => language.code === selectedLanguage)) {
            return;
        }

        try {
            localStorage.setItem(storageKey, selectedLanguage);
        } catch (error) {
            console.warn("Не удалось сохранить язык сайта:", error);
        }

        // Сообщаем скриптам локализации о смене языка.
        window.dispatchEvent(
            new CustomEvent("siteLanguageChanged", {
                detail: { language: selectedLanguage }
            })
        );

        // Перезагрузка нужна для страниц, локализация которых
        // применяется при первоначальной загрузке.
        location.reload();
    });

    document.body.appendChild(menu);

    // Общая функция для остальных скриптов сайта.
    window.getSiteLanguage = function () {
        return currentLanguage;
    };

})();
