/* =========================================================
   🌌 КОСМИЧЕСКОЕ ПРИКЛЮЧЕНИЕ — ОСНОВНОЙ SCRIPT
   ========================================================= */

let currentLanguage = localStorage.getItem("siteLanguage") || "ru";


/* =========================================================
   🌍 ОСНОВНЫЕ ПЕРЕВОДЫ
   ========================================================= */

const languages = {

    ru: {
        siteTitle: "🌌 Космическое приключение имени Папайруса",
        siteSubtitle: "Исследуй Солнечную систему 🚀",
        welcomeTitle: "Добро пожаловать в космос!",
        welcomeText:
            "Отправляйся в путешествие по Солнечной системе, исследуй планеты и открывай интересные факты о них.",
        startButton: "Начать приключение 🚀",
        moonsButton: "🌙 Исследовать спутники",
        constellationButton: "✨ Мечты Чарли Морнингстар",
        planetsTitle: "🪐 Планеты",
        temperature: "Температура:",
        diameter: "Диаметр:",
        mass: "Масса:",
        distance: "Расстояние от Солнца:",
        day: "Длительность дня:",
        year: "Длительность года:",
        moons: "Спутники:",
        rings: "Кольца:",
        atmosphere: "Атмосфера:",
        fact: "🔭 Интересный факт",
        footer: "🌌 Космическое приключение имени Папайруса © 2026",
        close: "Закрыть"
    },

    kk: {
        siteTitle: "🌌 Папайрустың ғарыштық шытырман оқиғасы",
        siteSubtitle: "Күн жүйесін зертте 🚀",
        welcomeTitle: "Ғарышқа қош келдің!",
        welcomeText:
            "Күн жүйесіне саяхат жасап, ғаламшарларды зертте және олар туралы қызықты деректерді біл.",
        startButton: "Шытырман оқиғаны бастау 🚀",
        moonsButton: "🌙 Серіктерді зерттеу",
        constellationButton: "✨ Чарли Морнингстардың армандары",
        planetsTitle: "🪐 Ғаламшарлар",
        temperature: "Температурасы:",
        diameter: "Диаметрі:",
        mass: "Массасы:",
        distance: "Күннен қашықтығы:",
        day: "Күн ұзақтығы:",
        year: "Жыл ұзақтығы:",
        moons: "Серіктері:",
        rings: "Сақиналары:",
        atmosphere: "Атмосферасы:",
        fact: "🔭 Қызықты дерек",
        footer: "🌌 Папайрустың ғарыштық шытырман оқиғасы © 2026",
        close: "Жабу"
    },

    cs: {
        siteTitle: "🌌 Papyrusovo vesmírné dobrodružství",
        siteSubtitle: "Prozkoumej Sluneční soustavu 🚀",
        welcomeTitle: "Vítej ve vesmíru!",
        welcomeText:
            "Vydej se na cestu Sluneční soustavou, prozkoumej planety a objev zajímavá fakta.",
        startButton: "Začít dobrodružství 🚀",
        moonsButton: "🌙 Prozkoumat měsíce",
        constellationButton: "✨ Sny Charlieho Morningstara",
        planetsTitle: "🪐 Planety",
        temperature: "Teplota:",
        diameter: "Průměr:",
        mass: "Hmotnost:",
        distance: "Vzdálenost od Slunce:",
        day: "Délka dne:",
        year: "Délka roku:",
        moons: "Měsíce:",
        rings: "Prstence:",
        atmosphere: "Atmosféra:",
        fact: "🔭 Zajímavý fakt",
        footer: "🌌 Papyrusovo vesmírné dobrodružství © 2026",
        close: "Zavřít"
    },

    en: {
        siteTitle: "🌌 Papyrus Space Adventure",
        siteSubtitle: "Explore the Solar System 🚀",
        welcomeTitle: "Welcome to space!",
        welcomeText:
            "Set off on a journey through the Solar System, explore the planets and discover interesting facts about them.",
        startButton: "Start the adventure 🚀",
        moonsButton: "🌙 Explore moons",
        constellationButton: "✨ Charlie Morningstar's Dreams",
        planetsTitle: "🪐 Planets",
        temperature: "Temperature:",
        diameter: "Diameter:",
        mass: "Mass:",
        distance: "Distance from the Sun:",
        day: "Length of day:",
        year: "Length of year:",
        moons: "Moons:",
        rings: "Rings:",
        atmosphere: "Atmosphere:",
        fact: "🔭 Interesting fact",
        footer: "🌌 Papyrus Space Adventure © 2026",
        close: "Close"
    },

    de: {
        siteTitle: "🌌 Weltraumabenteuer von Papyrus",
        siteSubtitle: "Erkunde das Sonnensystem 🚀",
        welcomeTitle: "Willkommen im Weltraum!",
        welcomeText:
            "Begib dich auf eine Reise durch das Sonnensystem, erkunde die Planeten und entdecke interessante Fakten.",
        startButton: "Abenteuer beginnen 🚀",
        moonsButton: "🌙 Monde erkunden",
        constellationButton: "✨ Charlie Morningstars Träume",
        planetsTitle: "🪐 Planeten",
        temperature: "Temperatur:",
        diameter: "Durchmesser:",
        mass: "Masse:",
        distance: "Entfernung von der Sonne:",
        day: "Tageslänge:",
        year: "Jahreslänge:",
        moons: "Monde:",
        rings: "Ringe:",
        atmosphere: "Atmosphäre:",
        fact: "🔭 Interessanter Fakt",
        footer: "🌌 Weltraumabenteuer von Papyrus © 2026",
        close: "Schließen"
    },

    fr: {
        siteTitle: "🌌 Aventure spatiale de Papyrus",
        siteSubtitle: "Explore le Système solaire 🚀",
        welcomeTitle: "Bienvenue dans l'espace !",
        welcomeText:
            "Pars à la découverte du Système solaire, explore les planètes et découvre des faits intéressants.",
        startButton: "Commencer l'aventure 🚀",
        moonsButton: "🌙 Explorer les lunes",
        constellationButton: "✨ Les rêves de Charlie Morningstar",
        planetsTitle: "🪐 Planètes",
        temperature: "Température :",
        diameter: "Diamètre :",
        mass: "Masse :",
        distance: "Distance du Soleil :",
        day: "Durée du jour :",
        year: "Durée de l'année :",
        moons: "Lunes :",
        rings: "Anneaux :",
        atmosphere: "Atmosphère :",
        fact: "🔭 Fait intéressant",
        footer: "🌌 Aventure spatiale de Papyrus © 2026",
        close: "Fermer"
    }
};


/* =========================================================
   🪐 ПЛАНЕТЫ
   ========================================================= */

const planets = {

    "Меркурий": {
        icon: "☿",
        ru: {
            name: "Меркурий",
            description: "Ближайшая к Солнцу планета.",
            temperature: "от −180°C до +430°C",
            diameter: "4 879 км",
            mass: "3,30 × 10²³ кг",
            distance: "57,9 млн км",
            day: "58,6 земных суток",
            year: "88 земных суток",
            moons: "0",
            rings: "Нет",
            atmosphere: "Практически отсутствует",
            fact: "Меркурий — самая маленькая планета Солнечной системы."
        },
        kk: {
            name: "Меркурий",
            description: "Күнге ең жақын ғаламшар.",
            temperature: "−180°C-тан +430°C-қа дейін",
            diameter: "4 879 км",
            mass: "3,30 × 10²³ кг",
            distance: "57,9 млн км",
            day: "58,6 Жер тәулігі",
            year: "88 Жер тәулігі",
            moons: "0",
            rings: "Жоқ",
            atmosphere: "Іс жүзінде жоқ",
            fact: "Меркурий — Күн жүйесіндегі ең кішкентай ғаламшар."
        },
        cs: {
            name: "Merkur",
            description: "Planeta nejbližší Slunci.",
            temperature: "od −180 °C do +430 °C",
            diameter: "4 879 km",
            mass: "3,30 × 10²³ kg",
            distance: "57,9 mil. km",
            day: "58,6 pozemského dne",
            year: "88 pozemských dní",
            moons: "0",
            rings: "Ne",
            atmosphere: "Téměř žádná",
            fact: "Merkur je nejmenší planeta Sluneční soustavy."
        },
        en: {
            name: "Mercury",
            description: "The planet closest to the Sun.",
            temperature: "−180°C to +430°C",
            diameter: "4,879 km",
            mass: "3.30 × 10²³ kg",
            distance: "57.9 million km",
            day: "58.6 Earth days",
            year: "88 Earth days",
            moons: "0",
            rings: "No",
            atmosphere: "Almost none",
            fact: "Mercury is the smallest planet in the Solar System."
        },
        de: {
            name: "Merkur",
            description: "Der sonnennächste Planet.",
            temperature: "−180 °C bis +430 °C",
            diameter: "4.879 km",
            mass: "3,30 × 10²³ kg",
            distance: "57,9 Mio. km",
            day: "58,6 Erdtage",
            year: "88 Erdtage",
            moons: "0",
            rings: "Nein",
            atmosphere: "Fast keine",
            fact: "Merkur ist der kleinste Planet des Sonnensystems."
        },
        fr: {
            name: "Mercure",
            description: "La planète la plus proche du Soleil.",
            temperature: "de −180 °C à +430 °C",
            diameter: "4 879 km",
            mass: "3,30 × 10²³ kg",
            distance: "57,9 millions de km",
            day: "58,6 jours terrestres",
            year: "88 jours terrestres",
            moons: "0",
            rings: "Non",
            atmosphere: "Presque inexistante",
            fact: "Mercure est la plus petite planète du Système solaire."
        }
    },

    "Венера": {
        icon: "♀",
        ru: {
            name: "Венера",
            description: "Самая горячая планета.",
            temperature: "около +465°C",
            diameter: "12 104 км",
            mass: "4,87 × 10²⁴ кг",
            distance: "108,2 млн км",
            day: "243 земных суток",
            year: "224,7 земных суток",
            moons: "0",
            rings: "Нет",
            atmosphere: "Углекислый газ",
            fact: "На Венере температура выше, чем на Меркурии."
        },
        kk: {
            name: "Шолпан",
            description: "Ең ыстық ғаламшар.",
            temperature: "шамамен +465°C",
            diameter: "12 104 км",
            mass: "4,87 × 10²⁴ кг",
            distance: "108,2 млн км",
            day: "243 Жер тәулігі",
            year: "224,7 Жер тәулігі",
            moons: "0",
            rings: "Жоқ",
            atmosphere: "Көмірқышқыл газы",
            fact: "Шолпандағы температура Меркурийден де жоғары."
        },
        cs: {
            name: "Venuše",
            description: "Nejteplejší planeta.",
            temperature: "asi +465 °C",
            diameter: "12 104 km",
            mass: "4,87 × 10²⁴ kg",
            distance: "108,2 mil. km",
            day: "243 pozemských dní",
            year: "224,7 pozemského dne",
            moons: "0",
            rings: "Ne",
            atmosphere: "Oxid uhličitý",
            fact: "Venuše je teplejší než Merkur."
        },
        en: {
            name: "Venus",
            description: "The hottest planet.",
            temperature: "about +465°C",
            diameter: "12,104 km",
            mass: "4.87 × 10²⁴ kg",
            distance: "108.2 million km",
            day: "243 Earth days",
            year: "224.7 Earth days",
            moons: "0",
            rings: "No",
            atmosphere: "Carbon dioxide",
            fact: "Venus is hotter than Mercury."
        },
        de: {
            name: "Venus",
            description: "Der heißeste Planet.",
            temperature: "etwa +465 °C",
            diameter: "12.104 km",
            mass: "4,87 × 10²⁴ kg",
            distance: "108,2 Mio. km",
            day: "243 Erdtage",
            year: "224,7 Erdtage",
            moons: "0",
            rings: "Nein",
            atmosphere: "Kohlendioxid",
            fact: "Die Venus ist heißer als Merkur."
        },
        fr: {
            name: "Vénus",
            description: "La planète la plus chaude.",
            temperature: "environ +465 °C",
            diameter: "12 104 km",
            mass: "4,87 × 10²⁴ kg",
            distance: "108,2 millions de km",
            day: "243 jours terrestres",
            year: "224,7 jours terrestres",
            moons: "0",
            rings: "Non",
            atmosphere: "Dioxyde de carbone",
            fact: "Vénus est plus chaude que Mercure."
        }
    },

    "Земля": {
        icon: "🌍",
        ru: {
            name: "Земля",
            description: "Наш родной дом.",
            temperature: "в среднем +15°C",
            diameter: "12 742 км",
            mass: "5,97 × 10²⁴ кг",
            distance: "149,6 млн км",
            day: "23 ч 56 мин",
            year: "365,25 суток",
            moons: "1",
            rings: "Нет",
            atmosphere: "Азот и кислород",
            fact: "Земля — единственная известная планета с жизнью."
        },
        kk: {
            name: "Жер",
            description: "Біздің туған ғаламшарымыз.",
            temperature: "орташа +15°C",
            diameter: "12 742 км",
            mass: "5,97 × 10²⁴ кг",
            distance: "149,6 млн км",
            day: "23 сағ 56 мин",
            year: "365,25 тәулік",
            moons: "1",
            rings: "Жоқ",
            atmosphere: "Азот және оттегі",
            fact: "Жер — тіршілік бар екені белгілі жалғыз ғаламшар."
        },
        cs: {
            name: "Země",
            description: "Náš domov.",
            temperature: "průměrně +15 °C",
            diameter: "12 742 km",
            mass: "5,97 × 10²⁴ kg",
            distance: "149,6 mil. km",
            day: "23 h 56 min",
            year: "365,25 dne",
            moons: "1",
            rings: "Ne",
            atmosphere: "Dusík a kyslík",
            fact: "Země je jediná známá planeta s životem."
        },
        en: {
            name: "Earth",
            description: "Our home planet.",
            temperature: "average +15°C",
            diameter: "12,742 km",
            mass: "5.97 × 10²⁴ kg",
            distance: "149.6 million km",
            day: "23 h 56 min",
            year: "365.25 days",
            moons: "1",
            rings: "No",
            atmosphere: "Nitrogen and oxygen",
            fact: "Earth is the only known planet with life."
        },
        de: {
            name: "Erde",
            description: "Unser Heimatplanet.",
            temperature: "durchschnittlich +15 °C",
            diameter: "12.742 km",
            mass: "5,97 × 10²⁴ kg",
            distance: "149,6 Mio. km",
            day: "23 h 56 min",
            year: "365,25 Tage",
            moons: "1",
            rings: "Nein",
            atmosphere: "Stickstoff und Sauerstoff",
            fact: "Die Erde ist der einzige bekannte Planet mit Leben."
        },
        fr: {
            name: "Terre",
            description: "Notre planète d'origine.",
            temperature: "en moyenne +15 °C",
            diameter: "12 742 km",
            mass: "5,97 × 10²⁴ kg",
            distance: "149,6 millions de km",
            day: "23 h 56 min",
            year: "365,25 jours",
            moons: "1",
            rings: "Non",
            atmosphere: "Azote et oxygène",
            fact: "La Terre est la seule planète connue abritant la vie."
        }
    },

    "Марс": {
        icon: "🔴",
        ru: {
            name: "Марс",
            description: "Красная планета.",
            temperature: "около −63°C",
            diameter: "6 779 км",
            mass: "6,42 × 10²³ кг",
            distance: "227,9 млн км",
            day: "24 ч 37 мин",
            year: "687 земных суток",
            moons: "2",
            rings: "Нет",
            atmosphere: "Углекислый газ",
            fact: "На Марсе находится крупнейший вулкан Солнечной системы — Олимп."
        },
        kk: {
            name: "Марс",
            description: "Қызыл ғаламшар.",
            temperature: "шамамен −63°C",
            diameter: "6 779 км",
            mass: "6,42 × 10²³ кг",
            distance: "227,9 млн км",
            day: "24 сағ 37 мин",
            year: "687 Жер тәулігі",
            moons: "2",
            rings: "Жоқ",
            atmosphere: "Көмірқышқыл газы",
            fact: "Марста Күн жүйесіндегі ең үлкен жанартау — Олимп орналасқан."
        },
        cs: {
            name: "Mars",
            description: "Rudá planeta.",
            temperature: "asi −63 °C",
            diameter: "6 779 km",
            mass: "6,42 × 10²³ kg",
            distance: "227,9 mil. km",
            day: "24 h 37 min",
            year: "687 pozemských dní",
            moons: "2",
            rings: "Ne",
            atmosphere: "Oxid uhličitý",
            fact: "Na Marsu se nachází největší sopka Sluneční soustavy, Olympus."
        },
        en: {
            name: "Mars",
            description: "The Red Planet.",
            temperature: "about −63°C",
            diameter: "6,779 km",
            mass: "6.42 × 10²³ kg",
            distance: "227.9 million km",
            day: "24 h 37 min",
            year: "687 Earth days",
            moons: "2",
            rings: "No",
            atmosphere: "Carbon dioxide",
            fact: "Mars is home to Olympus Mons, the largest volcano in the Solar System."
        },
        de: {
            name: "Mars",
            description: "Der Rote Planet.",
            temperature: "etwa −63 °C",
            diameter: "6.779 km",
            mass: "6,42 × 10²³ kg",
            distance: "227,9 Mio. km",
            day: "24 h 37 min",
            year: "687 Erdtage",
            moons: "2",
            rings: "Nein",
            atmosphere: "Kohlendioxid",
            fact: "Auf dem Mars befindet sich Olympus Mons, der größte Vulkan des Sonnensystems."
        },
        fr: {
            name: "Mars",
            description: "La planète rouge.",
            temperature: "environ −63 °C",
            diameter: "6 779 km",
            mass: "6,42 × 10²³ kg",
            distance: "227,9 millions de km",
            day: "24 h 37 min",
            year: "687 jours terrestres",
            moons: "2",
            rings: "Non",
            atmosphere: "Dioxyde de carbone",
            fact: "Mars abrite Olympus Mons, le plus grand volcan du Système solaire."
        }
    },

    "Юпитер": {
        icon: "🟠",
        ru: {
            name: "Юпитер",
            description: "Крупнейшая планета Солнечной системы.",
            temperature: "около −110°C",
            diameter: "139 820 км",
            mass: "1,90 × 10²⁷ кг",
            distance: "778,5 млн км",
            day: "9 ч 56 мин",
            year: "11,86 земных лет",
            moons: "95+",
            rings: "Есть",
            atmosphere: "Водород и гелий",
            fact: "Большое Красное Пятно — гигантский шторм, существующий сотни лет."
        },
        kk: {
            name: "Юпитер",
            description: "Күн жүйесіндегі ең үлкен ғаламшар.",
            temperature: "шамамен −110°C",
            diameter: "139 820 км",
            mass: "1,90 × 10²⁷ кг",
            distance: "778,5 млн км",
            day: "9 сағ 56 мин",
            year: "11,86 Жер жылы",
            moons: "95+",
            rings: "Бар",
            atmosphere: "Сутегі және гелий",
            fact: "Үлкен Қызыл Дақ — жүздеген жыл бойы өмір сүріп келе жатқан алып дауыл."
        },
        cs: {
            name: "Jupiter",
            description: "Největší planeta Sluneční soustavy.",
            temperature: "asi −110 °C",
            diameter: "139 820 km",
            mass: "1,90 × 10²⁷ kg",
            distance: "778,5 mil. km",
            day: "9 h 56 min",
            year: "11,86 pozemského roku",
            moons: "95+",
            rings: "Ano",
            atmosphere: "Vodík a helium",
            fact: "Velká rudá skvrna je obrovská bouře, která trvá stovky let."
        },
        en: {
            name: "Jupiter",
            description: "The largest planet in the Solar System.",
            temperature: "about −110°C",
            diameter: "139,820 km",
            mass: "1.90 × 10²⁷ kg",
            distance: "778.5 million km",
            day: "9 h 56 min",
            year: "11.86 Earth years",
            moons: "95+",
            rings: "Yes",
            atmosphere: "Hydrogen and helium",
            fact: "The Great Red Spot is a giant storm that has lasted for centuries."
        },
        de: {
            name: "Jupiter",
            description: "Der größte Planet des Sonnensystems.",
            temperature: "etwa −110 °C",
            diameter: "139.820 km",
            mass: "1,90 × 10²⁷ kg",
            distance: "778,5 Mio. km",
            day: "9 h 56 min",
            year: "11,86 Erdenjahre",
            moons: "95+",
            rings: "Ja",
            atmosphere: "Wasserstoff und Helium",
            fact: "Der Große Rote Fleck ist ein riesiger Sturm, der seit Jahrhunderten besteht."
        },
        fr: {
            name: "Jupiter",
            description: "La plus grande planète du Système solaire.",
            temperature: "environ −110 °C",
            diameter: "139 820 km",
            mass: "1,90 × 10²⁷ kg",
            distance: "778,5 millions de km",
            day: "9 h 56 min",
            year: "11,86 années terrestres",
            moons: "95+",
            rings: "Oui",
            atmosphere: "Hydrogène et hélium",
            fact: "La Grande Tache rouge est une gigantesque tempête qui dure depuis des siècles."
        }
    },

    "Сатурн": {
        icon: "🪐",
        ru: {
            name: "Сатурн",
            description: "Планета с великолепными кольцами.",
            temperature: "около −140°C",
            diameter: "116 460 км",
            mass: "5,68 × 10²⁶ кг",
            distance: "1,43 млрд км",
            day: "10 ч 42 мин",
            year: "29,45 земных лет",
            moons: "140+",
            rings: "Есть",
            atmosphere: "Водород и гелий",
            fact: "Кольца Сатурна состоят преимущественно из льда и камней."
        },
        kk: {
            name: "Сатурн",
            description: "Керемет сақиналары бар ғаламшар.",
            temperature: "шамамен −140°C",
            diameter: "116 460 км",
            mass: "5,68 × 10²⁶ кг",
            distance: "1,43 млрд км",
            day: "10 сағ 42 мин",
            year: "29,45 Жер жылы",
            moons: "140+",
            rings: "Бар",
            atmosphere: "Сутегі және гелий",
            fact: "Сатурнның сақиналары негізінен мұз бен тастардан тұрады."
        },
        cs: {
            name: "Saturn",
            description: "Planeta s nádhernými prstenci.",
            temperature: "asi −140 °C",
            diameter: "116 460 km",
            mass: "5,68 × 10²⁶ kg",
            distance: "1,43 mld. km",
            day: "10 h 42 min",
            year: "29,45 pozemského roku",
            moons: "140+",
            rings: "Ano",
            atmosphere: "Vodík a helium",
            fact: "Saturnovy prstence se skládají převážně z ledu a hornin."
        },
        en: {
            name: "Saturn",
            description: "A planet with magnificent rings.",
            temperature: "about −140°C",
            diameter: "116,460 km",
            mass: "5.68 × 10²⁶ kg",
            distance: "1.43 billion km",
            day: "10 h 42 min",
            year: "29.45 Earth years",
            moons: "140+",
            rings: "Yes",
            atmosphere: "Hydrogen and helium",
            fact: "Saturn's rings are made mostly of ice and rock."
        },
        de: {
            name: "Saturn",
            description: "Ein Planet mit prächtigen Ringen.",
            temperature: "etwa −140 °C",
            diameter: "116.460 km",
            mass: "5,68 × 10²⁶ kg",
            distance: "1,43 Mrd. km",
            day: "10 h 42 min",
            year: "29,45 Erdenjahre",
            moons: "140+",
            rings: "Ja",
            atmosphere: "Wasserstoff und Helium",
            fact: "Die Ringe des Saturn bestehen hauptsächlich aus Eis und Gestein."
        },
        fr: {
            name: "Saturne",
            description: "Une planète aux magnifiques anneaux.",
            temperature: "environ −140 °C",
            diameter: "116 460 km",
            mass: "5,68 × 10²⁶ kg",
            distance: "1,43 milliard de km",
            day: "10 h 42 min",
            year: "29,45 années terrestres",
            moons: "140+",
            rings: "Oui",
            atmosphere: "Hydrogène et hélium",
            fact: "Les anneaux de Saturne sont principalement composés de glace et de roches."
        }
    },

    "Уран": {
        icon: "🔵",
        ru: {
            name: "Уран",
            description: "Ледяной гигант.",
            temperature: "около −195°C",
            diameter: "50 724 км",
            mass: "8,68 × 10²⁵ кг",
            distance: "2,87 млрд км",
            day: "17 ч 14 мин",
            year: "84 земных года",
            moons: "27",
            rings: "Есть",
            atmosphere: "Водород, гелий и метан",
            fact: "Уран вращается почти лёжа на боку."
        },
        kk: {
            name: "Уран",
            description: "Мұзды алып.",
            temperature: "шамамен −195°C",
            diameter: "50 724 км",
            mass: "8,68 × 10²⁵ кг",
            distance: "2,87 млрд км",
            day: "17 сағ 14 мин",
            year: "84 Жер жылы",
            moons: "27",
            rings: "Бар",
            atmosphere: "Сутегі, гелий және метан",
            fact: "Уран өз осінде бүйірімен жатқандай айналады."
        },
        cs: {
            name: "Uran",
            description: "Ledový obr.",
            temperature: "asi −195 °C",
            diameter: "50 724 km",
            mass: "8,68 × 10²⁵ kg",
            distance: "2,87 mld. km",
            day: "17 h 14 min",
            year: "84 pozemských let",
            moons: "27",
            rings: "Ano",
            atmosphere: "Vodík, helium a metan",
            fact: "Uran se otáčí téměř naležato."
        },
        en: {
            name: "Uranus",
            description: "An ice giant.",
            temperature: "about −195°C",
            diameter: "50,724 km",
            mass: "8.68 × 10²⁵ kg",
            distance: "2.87 billion km",
            day: "17 h 14 min",
            year: "84 Earth years",
            moons: "27",
            rings: "Yes",
            atmosphere: "Hydrogen, helium and methane",
            fact: "Uranus rotates almost on its side."
        },
        de: {
            name: "Uranus",
            description: "Ein Eisriese.",
            temperature: "etwa −195 °C",
            diameter: "50.724 km",
            mass: "8,68 × 10²⁵ kg",
            distance: "2,87 Mrd. km",
            day: "17 h 14 min",
            year: "84 Erdenjahre",
            moons: "27",
            rings: "Ja",
            atmosphere: "Wasserstoff, Helium und Methan",
            fact: "Uranus dreht sich fast auf der Seite."
        },
        fr: {
            name: "Uranus",
            description: "Une géante de glace.",
            temperature: "environ −195 °C",
            diameter: "50 724 km",
            mass: "8,68 × 10²⁵ kg",
            distance: "2,87 milliards de km",
            day: "17 h 14 min",
            year: "84 années terrestres",
            moons: "27",
            rings: "Oui",
            atmosphere: "Hydrogène, hélium et méthane",
            fact: "Uranus tourne presque sur le côté."
        }
    },

    "Нептун": {
        icon: "🔵",
        ru: {
            name: "Нептун",
            description: "Самая далёкая планета.",
            temperature: "около −200°C",
            diameter: "49 244 км",
            mass: "1,02 × 10²⁶ кг",
            distance: "4,50 млрд км",
            day: "16 ч 6 мин",
            year: "164,8 земных года",
            moons: "14",
            rings: "Есть",
            atmosphere: "Водород, гелий и метан",
            fact: "На Нептуне дуют одни из самых быстрых ветров в Солнечной системе."
        },
        kk: {
            name: "Нептун",
            description: "Күннен ең алыс ғаламшар.",
            temperature: "шамамен −200°C",
            diameter: "49 244 км",
            mass: "1,02 × 10²⁶ кг",
            distance: "4,50 млрд км",
            day: "16 сағ 6 мин",
            year: "164,8 Жер жылы",
            moons: "14",
            rings: "Бар",
            atmosphere: "Сутегі, гелий және метан",
            fact: "Нептунда Күн жүйесіндегі ең жылдам желдердің кейбірі соғады."
        },
        cs: {
            name: "Neptun",
            description: "Nejvzdálenější planeta.",
            temperature: "asi −200 °C",
            diameter: "49 244 km",
            mass: "1,02 × 10²⁶ kg",
            distance: "4,50 mld. km",
            day: "16 h 6 min",
            year: "164,8 pozemského roku",
            moons: "14",
            rings: "Ano",
            atmosphere: "Vodík, helium a metan",
            fact: "Na Neptunu vanou jedny z nejrychlejších větrů ve Sluneční soustavě."
        },
        en: {
            name: "Neptune",
            description: "The most distant planet.",
            temperature: "about −200°C",
            diameter: "49,244 km",
            mass: "1.02 × 10²⁶ kg",
            distance: "4.50 billion km",
            day: "16 h 6 min",
            year: "164.8 Earth years",
            moons: "14",
            rings: "Yes",
            atmosphere: "Hydrogen, helium and methane",
            fact: "Neptune has some of the fastest winds in the Solar System."
        },
        de: {
            name: "Neptun",
            description: "Der am weitesten entfernte Planet.",
            temperature: "etwa −200 °C",
            diameter: "49.244 km",
            mass: "1,02 × 10²⁶ kg",
            distance: "4,50 Mrd. km",
            day: "16 h 6 min",
            year: "164,8 Erdenjahre",
            moons: "14",
            rings: "Ja",
            atmosphere: "Wasserstoff, Helium und Methan",
            fact: "Auf Neptun herrschen einige der schnellsten Winde im Sonnensystem."
        },
        fr: {
            name: "Neptune",
            description: "La planète la plus éloignée.",
            temperature: "environ −200 °C",
            diameter: "49 244 km",
            mass: "1,02 × 10²⁶ kg",
            distance: "4,50 milliards de km",
            day: "16 h 6 min",
            year: "164,8 années terrestres",
            moons: "14",
            rings: "Oui",
            atmosphere: "Hydrogène, hélium et méthane",
            fact: "Neptune possède certains des vents les plus rapides du Système solaire."
        }
    },

    "Плутон": {
        icon: "🧊",
        ru: {
            name: "Плутон",
            description: "Карликовая планета пояса Койпера.",
            temperature: "около −230°C",
            diameter: "2 377 км",
            mass: "1,31 × 10²² кг",
            distance: "около 5,9 млрд км",
            day: "153,3 часа",
            year: "248 земных лет",
            moons: "5",
            rings: "Нет",
            atmosphere: "Азот, метан и угарный газ",
            fact: "Плутон был классифицирован как карликовая планета в 2006 году."
        },
        kk: {
            name: "Плутон",
            description: "Койпер белдеуіндегі ергежейлі ғаламшар.",
            temperature: "шамамен −230°C",
            diameter: "2 377 км",
            mass: "1,31 × 10²² кг",
            distance: "шамамен 5,9 млрд км",
            day: "153,3 сағат",
            year: "248 Жер жылы",
            moons: "5",
            rings: "Жоқ",
            atmosphere: "Азот, метан және көміртек тотығы",
            fact: "Плутон 2006 жылы ергежейлі ғаламшар ретінде жіктелді."
        },
        cs: {
            name: "Pluto",
            description: "Trpasličí planeta Kuiperova pásu.",
            temperature: "asi −230 °C",
            diameter: "2 377 km",
            mass: "1,31 × 10²² kg",
            distance: "asi 5,9 mld. km",
            day: "153,3 hodiny",
            year: "248 pozemských let",
            moons: "5",
            rings: "Ne",
            atmosphere: "Dusík, metan a oxid uhelnatý",
            fact: "Pluto bylo v roce 2006 klasifikováno jako trpasličí planeta."
        },
        en: {
            name: "Pluto",
            description: "A dwarf planet in the Kuiper Belt.",
            temperature: "about −230°C",
            diameter: "2,377 km",
            mass: "1.31 × 10²² kg",
            distance: "about 5.9 billion km",
            day: "153.3 hours",
            year: "248 Earth years",
            moons: "5",
            rings: "No",
            atmosphere: "Nitrogen, methane and carbon monoxide",
            fact: "Pluto was classified as a dwarf planet in 2006."
        },
        de: {
            name: "Pluto",
            description: "Ein Zwergplanet im Kuipergürtel.",
            temperature: "etwa −230 °C",
            diameter: "2.377 km",
            mass: "1,31 × 10²² kg",
            distance: "etwa 5,9 Mrd. km",
            day: "153,3 Stunden",
            year: "248 Erdenjahre",
            moons: "5",
            rings: "Nein",
            atmosphere: "Stickstoff, Methan und Kohlenmonoxid",
            fact: "Pluto wurde 2006 als Zwergplanet klassifiziert."
        },
        fr: {
            name: "Pluton",
            description: "Une planète naine de la ceinture de Kuiper.",
            temperature: "environ −230 °C",
            diameter: "2 377 km",
            mass: "1,31 × 10²² kg",
            distance: "environ 5,9 milliards de km",
            day: "153,3 heures",
            year: "248 années terrestres",
            moons: "5",
            rings: "Non",
            atmosphere: "Azote, méthane et monoxyde de carbone",
            fact: "Pluton a été classée comme planète naine en 2006."
        }
    }
};


/* =========================================================
   🌙 СПУТНИКИ
   ========================================================= */

const moons = {

    "Луна": {
        icon: "🌕",
        ru: {
            planet: "Земля",
            diameter: "3 474 км",
            temperature: "от −173°C до +127°C",
            description: "Луна — естественный спутник Земли.",
            fact: "Луна всегда обращена к Земле одной и той же стороной."
        },
        kk: {
            planet: "Жер",
            diameter: "3 474 км",
            temperature: "−173°C-тан +127°C-қа дейін",
            description: "Ай — Жердің табиғи серігі.",
            fact: "Ай әрдайым Жерге бір жағымен қарап тұрады."
        },
        cs: {
            planet: "Země",
            diameter: "3 474 km",
            temperature: "−173 °C až +127 °C",
            description: "Měsíc je přirozená družice Země.",
            fact: "Měsíc je k Zemi stále obrácen stejnou stranou."
        },
        en: {
            planet: "Earth",
            diameter: "3,474 km",
            temperature: "−173°C to +127°C",
            description: "The Moon is Earth's natural satellite.",
            fact: "The Moon always keeps the same side facing Earth."
        },
        de: {
            planet: "Erde",
            diameter: "3.474 km",
            temperature: "−173 °C bis +127 °C",
            description: "Der Mond ist der natürliche Satellit der Erde.",
            fact: "Der Mond zeigt der Erde immer dieselbe Seite."
        },
        fr: {
            planet: "Terre",
            diameter: "3 474 km",
            temperature: "de −173 °C à +127 °C",
            description: "La Lune est le satellite naturel de la Terre.",
            fact: "La Lune présente toujours la même face à la Terre."
        }
    },

    "Фобос": {
        icon: "🔴",
        ru: {
            planet: "Марс",
            diameter: "около 22 км",
            temperature: "очень низкая",
            description: "Фобос — крупнейший и ближайший спутник Марса.",
            fact: "Фобос постепенно приближается к Марсу."
        },
        kk: {
            planet: "Марс",
            diameter: "шамамен 22 км",
            temperature: "өте төмен",
            description: "Фобос — Марстың ең үлкен әрі ең жақын серігі.",
            fact: "Фобос біртіндеп Марсқа жақындап келеді."
        },
        cs: {
            planet: "Mars",
            diameter: "asi 22 km",
            temperature: "velmi nízká",
            description: "Phobos je největší a nejbližší měsíc Marsu.",
            fact: "Phobos se postupně přibližuje k Marsu."
        },
        en: {
            planet: "Mars",
            diameter: "about 22 km",
            temperature: "very low",
            description: "Phobos is the largest and closest moon of Mars.",
            fact: "Phobos is gradually moving closer to Mars."
        },
        de: {
            planet: "Mars",
            diameter: "etwa 22 km",
            temperature: "sehr niedrig",
            description: "Phobos ist der größte und nächste Mond des Mars.",
            fact: "Phobos nähert sich allmählich dem Mars."
        },
        fr: {
            planet: "Mars",
            diameter: "environ 22 km",
            temperature: "très basse",
            description: "Phobos est le plus grand et le plus proche satellite de Mars.",
            fact: "Phobos se rapproche progressivement de Mars."
        }
    },

    "Деймос": {
        icon: "🔴",
        ru: {
            planet: "Марс",
            diameter: "около 12 км",
            temperature: "очень низкая",
            description: "Деймос — небольшой спутник Марса.",
            fact: "Название Деймос означает «ужас»."
        },
        kk: {
            planet: "Марс",
            diameter: "шамамен 12 км",
            temperature: "өте төмен",
            description: "Деймос — Марстың кішкентай серігі.",
            fact: "Деймос атауы «қорқыныш» дегенді білдіреді."
        },
        cs: {
            planet: "Mars",
            diameter: "asi 12 km",
            temperature: "velmi nízká",
            description: "Deimos je malý měsíc Marsu.",
            fact: "Název Deimos znamená „děs“."
        },
        en: {
            planet: "Mars",
            diameter: "about 12 km",
            temperature: "very low",
            description: "Deimos is a small moon of Mars.",
            fact: "The name Deimos means “terror”."
        },
        de: {
            planet: "Mars",
            diameter: "etwa 12 km",
            temperature: "sehr niedrig",
            description: "Deimos ist ein kleiner Mond des Mars.",
            fact: "Der Name Deimos bedeutet „Schrecken“."
        },
        fr: {
            planet: "Mars",
            diameter: "environ 12 km",
            temperature: "très basse",
            description: "Déimos est un petit satellite de Mars.",
            fact: "Le nom Déimos signifie « terreur »."
        }
    },

    "Ио": {
        icon: "🟠",
        ru: {
            planet: "Юпитер",
            diameter: "3 643 км",
            temperature: "около −130°C",
            description: "Ио — спутник Юпитера с чрезвычайно активными вулканами.",
            fact: "Ио считается самым вулканически активным миром Солнечной системы."
        },
        kk: {
            planet: "Юпитер",
            diameter: "3 643 км",
            temperature: "шамамен −130°C",
            description: "Ио — жанартаулары өте белсенді Юпитер серігі.",
            fact: "Ио — Күн жүйесіндегі жанартаулық белсенділігі ең жоғары әлем."
        },
        cs: {
            planet: "Jupiter",
            diameter: "3 643 km",
            temperature: "asi −130 °C",
            description: "Io je měsíc Jupiteru s mimořádně aktivními sopkami.",
            fact: "Io je vulkanicky nejaktivnější svět Sluneční soustavy."
        },
        en: {
            planet: "Jupiter",
            diameter: "3,643 km",
            temperature: "about −130°C",
            description: "Io is a moon of Jupiter with extremely active volcanoes.",
            fact: "Io is the most volcanically active world in the Solar System."
        },
        de: {
            planet: "Jupiter",
            diameter: "3.643 km",
            temperature: "etwa −130 °C",
            description: "Io ist ein Mond des Jupiter mit äußerst aktiven Vulkanen.",
            fact: "Io ist die vulkanisch aktivste Welt im Sonnensystem."
        },
        fr: {
            planet: "Jupiter",
            diameter: "3 643 km",
            temperature: "environ −130 °C",
            description: "Io est un satellite de Jupiter aux volcans extrêmement actifs.",
            fact: "Io est le monde le plus volcanique du Système solaire."
        }
    },

    "Европа": {
        icon: "🧊",
        ru: {
            planet: "Юпитер",
            diameter: "3 122 км",
            temperature: "около −160°C",
            description: "Европа — ледяной спутник Юпитера.",
            fact: "Под её ледяной поверхностью, вероятно, находится океан."
        },
        kk: {
            planet: "Юпитер",
            diameter: "3 122 км",
            temperature: "шамамен −160°C",
            description: "Еуропа — Юпитердің мұзды серігі.",
            fact: "Мұзды бетінің астында мұхит болуы мүмкін."
        },
        cs: {
            planet: "Jupiter",
            diameter: "3 122 km",
            temperature: "asi −160 °C",
            description: "Europa je ledový měsíc Jupiteru.",
            fact: "Pod jejím ledovým povrchem se pravděpodobně nachází oceán."
        },
        en: {
            planet: "Jupiter",
            diameter: "3,122 km",
            temperature: "about −160°C",
            description: "Europa is an icy moon of Jupiter.",
            fact: "An ocean likely exists beneath its icy surface."
        },
        de: {
            planet: "Jupiter",
            diameter: "3.122 km",
            temperature: "etwa −160 °C",
            description: "Europa ist ein Eismond des Jupiter.",
            fact: "Unter ihrer eisigen Oberfläche befindet sich wahrscheinlich ein Ozean."
        },
        fr: {
            planet: "Jupiter",
            diameter: "3 122 km",
            temperature: "environ −160 °C",
            description: "Europe est un satellite glacé de Jupiter.",
            fact: "Un océan se trouve probablement sous sa surface glacée."
        }
    },

    "Ганимед": {
        icon: "🌑",
        ru: {
            planet: "Юпитер",
            diameter: "5 268 км",
            temperature: "около −160°C",
            description: "Ганимед — крупнейший спутник Солнечной системы.",
            fact: "Ганимед больше Меркурия по диаметру."
        },
        kk: {
            planet: "Юпитер",
            diameter: "5 268 км",
            temperature: "шамамен −160°C",
            description: "Ганимед — Күн жүйесіндегі ең үлкен серік.",
            fact: "Ганимедтің диаметрі Меркурийден үлкен."
        },
        cs: {
            planet: "Jupiter",
            diameter: "5 268 km",
            temperature: "asi −160 °C",
            description: "Ganymed je největší měsíc Sluneční soustavy.",
            fact: "Ganymed má větší průměr než Merkur."
        },
        en: {
            planet: "Jupiter",
            diameter: "5,268 km",
            temperature: "about −160°C",
            description: "Ganymede is the largest moon in the Solar System.",
            fact: "Ganymede is larger than Mercury in diameter."
        },
        de: {
            planet: "Jupiter",
            diameter: "5.268 km",
            temperature: "etwa −160 °C",
            description: "Ganymed ist der größte Mond im Sonnensystem.",
            fact: "Ganymed ist vom Durchmesser her größer als Merkur."
        },
        fr: {
            planet: "Jupiter",
            diameter: "5 268 km",
            temperature: "environ −160 °C",
            description: "Ganymède est le plus grand satellite du Système solaire.",
            fact: "Ganymède est plus grand que Mercure en diamètre."
        }
    },

    "Каллисто": {
        icon: "🌑",
        ru: {
            planet: "Юпитер",
            diameter: "4 821 км",
            temperature: "около −140°C",
            description: "Каллисто — один из крупнейших спутников Юпитера.",
            fact: "Поверхность Каллисто покрыта множеством ударных кратеров."
        },
        kk: {
            planet: "Юпитер",
            diameter: "4 821 км",
            temperature: "шамамен −140°C",
            description: "Каллисто — Юпитердің ең ірі серіктерінің бірі.",
            fact: "Каллистоның бетінде көптеген соққы кратерлері бар."
        },
        cs: {
            planet: "Jupiter",
            diameter: "4 821 km",
            temperature: "asi −140 °C",
            description: "Callisto je jeden z největších měsíců Jupiteru.",
            fact: "Povrch Callista je pokryt mnoha impaktními krátery."
        },
        en: {
            planet: "Jupiter",
            diameter: "4,821 km",
            temperature: "about −140°C",
            description: "Callisto is one of Jupiter's largest moons.",
            fact: "Callisto's surface is covered with many impact craters."
        },
        de: {
            planet: "Jupiter",
            diameter: "4.821 km",
            temperature: "etwa −140 °C",
            description: "Kallisto ist einer der größten Monde des Jupiter.",
            fact: "Die Oberfläche von Kallisto ist von vielen Einschlagskratern bedeckt."
        },
        fr: {
            planet: "Jupiter",
            diameter: "4 821 km",
            temperature: "environ −140 °C",
            description: "Callisto est l'un des plus grands satellites de Jupiter.",
            fact: "La surface de Callisto est couverte de nombreux cratères d'impact."
        }
    },

    "Титан": {
        icon: "🪐",
        ru: {
            planet: "Сатурн",
            diameter: "5 150 км",
            temperature: "около −179°C",
            description: "Титан — крупнейший спутник Сатурна.",
            fact: "Титан имеет плотную атмосферу и моря из жидких углеводородов."
        },
        kk: {
            planet: "Сатурн",
            diameter: "5 150 км",
            temperature: "шамамен −179°C",
            description: "Титан — Сатурнның ең үлкен серігі.",
            fact: "Титанда тығыз атмосфера және сұйық көмірсутектерден тұратын теңіздер бар."
        },
        cs: {
            planet: "Saturn",
            diameter: "5 150 km",
            temperature: "asi −179 °C",
            description: "Titan je největší měsíc Saturnu.",
            fact: "Titan má hustou atmosféru a jezera kapalných uhlovodíků."
        },
        en: {
            planet: "Saturn",
            diameter: "5,150 km",
            temperature: "about −179°C",
            description: "Titan is the largest moon of Saturn.",
            fact: "Titan has a thick atmosphere and lakes of liquid hydrocarbons."
        },
        de: {
            planet: "Saturn",
            diameter: "5.150 km",
            temperature: "etwa −179 °C",
            description: "Titan ist der größte Mond des Saturn.",
            fact: "Titan besitzt eine dichte Atmosphäre und Seen aus flüssigen Kohlenwasserstoffen."
        },
        fr: {
            planet: "Saturne",
            diameter: "5 150 km",
            temperature: "environ −179 °C",
            description: "Titan est le plus grand satellite de Saturne.",
            fact: "Titan possède une atmosphère dense et des lacs d'hydrocarbures liquides."
        }
    },

    "Энцелад": {
        icon: "❄️",
        ru: {
            planet: "Сатурн",
            diameter: "около 504 км",
            temperature: "около −200°C",
            description: "Энцелад — небольшой ледяной спутник Сатурна.",
            fact: "Из его южной области вырываются струи водяного пара и льда."
        },
        kk: {
            planet: "Сатурн",
            diameter: "шамамен 504 км",
            temperature: "шамамен −200°C",
            description: "Энцелад — Сатурнның кішкентай мұзды серігі.",
            fact: "Оның оңтүстік аймағынан су буы мен мұздың шлейфтері атқылайды."
        },
        cs: {
            planet: "Saturn",
            diameter: "asi 504 km",
            temperature: "asi −200 °C",
            description: "Enceladus je malý ledový měsíc Saturnu.",
            fact: "Z jeho jižní oblasti unikají proudy vodní páry a ledu."
        },
        en: {
            planet: "Saturn",
            diameter: "about 504 km",
            temperature: "about −200°C",
            description: "Enceladus is a small icy moon of Saturn.",
            fact: "Jets of water vapor and ice erupt from its southern region."
        },
        de: {
            planet: "Saturn",
            diameter: "etwa 504 km",
            temperature: "etwa −200 °C",
            description: "Enceladus ist ein kleiner Eismond des Saturn.",
            fact: "Aus seiner südlichen Region treten Fontänen aus Wasserdampf und Eis aus."
        },
        fr: {
            planet: "Saturne",
            diameter: "environ 504 km",
            temperature: "environ −200 °C",
            description: "Encelade est un petit satellite glacé de Saturne.",
            fact: "Des jets de vapeur d'eau et de glace jaillissent de sa région sud."
        }
    },

    "Тритон": {
        icon: "🔵",
        ru: {
            planet: "Нептун",
            diameter: "2 707 км",
            temperature: "около −235°C",
            description: "Тритон — крупнейший спутник Нептуна.",
            fact: "Тритон движется вокруг Нептуна в обратном направлении относительно вращения планеты."
        },
        kk: {
            planet: "Нептун",
            diameter: "2 707 км",
            temperature: "шамамен −235°C",
            description: "Тритон — Нептунның ең үлкен серігі.",
            fact: "Тритон Нептунның айналу бағытына қарама-қарсы бағытта қозғалады."
        },
        cs: {
            planet: "Neptun",
            diameter: "2 707 km",
            temperature: "asi −235 °C",
            description: "Triton je největší měsíc Neptunu.",
            fact: "Triton obíhá Neptun opačným směrem, než se planeta otáčí."
        },
        en: {
            planet: "Neptune",
            diameter: "2,707 km",
            temperature: "about −235°C",
            description: "Triton is the largest moon of Neptune.",
            fact: "Triton orbits Neptune in the opposite direction to the planet's rotation."
        },
        de: {
            planet: "Neptun",
            diameter: "2.707 km",
            temperature: "etwa −235 °C",
            description: "Triton ist der größte Mond des Neptun.",
            fact: "Triton umkreist Neptun entgegen der Rotationsrichtung des Planeten."
        },
        fr: {
            planet: "Neptune",
            diameter: "2 707 km",
            temperature: "environ −235 °C",
            description: "Triton est le plus grand satellite de Neptune.",
            fact: "Triton orbite autour de Neptune dans le sens opposé à la rotation de la planète."
        }
    }
};


/* =========================================================
   🌙 ПЕРЕВОДЫ ДЕТАЛЕЙ СПУТНИКОВ
   ========================================================= */

const moonDetailsTranslations = {

    ru: {
        "Луна": {
            planet: "Земля",
            diameter: "3 474 км",
            temperature: "от −173 °C до +127 °C",
            description: "Луна — естественный спутник Земли.",
            fact: "Луна всегда обращена к Земле одной и той же стороной."
        },
        "Фобос": {
            planet: "Марс",
            diameter: "около 22 км",
            temperature: "очень низкая",
            description: "Фобос — крупнейший и ближайший спутник Марса.",
            fact: "Фобос постепенно приближается к Марсу."
        },
        "Деймос": {
            planet: "Марс",
            diameter: "около 12 км",
            temperature: "очень низкая",
            description: "Деймос — небольшой спутник Марса.",
            fact: "Название Деймос означает «ужас»."
        },
        "Ио": {
            planet: "Юпитер",
            diameter: "3 643 км",
            temperature: "около −130 °C",
            description: "Ио — спутник Юпитера с чрезвычайно активными вулканами.",
            fact: "Ио — самый вулканически активный мир Солнечной системы."
        },
        "Европа": {
            planet: "Юпитер",
            diameter: "3 122 км",
            temperature: "около −160 °C",
            description: "Европа — ледяной спутник Юпитера.",
            fact: "Под её ледяной поверхностью, вероятно, находится океан."
        },
        "Ганимед": {
            planet: "Юпитер",
            diameter: "5 268 км",
            temperature: "около −160 °C",
            description: "Ганимед — крупнейший спутник Солнечной системы.",
            fact: "Ганимед больше Меркурия по диаметру."
        },
        "Каллисто": {
            planet: "Юпитер",
            diameter: "4 821 км",
            temperature: "около −140 °C",
            description: "Каллисто — один из крупнейших спутников Юпитера.",
            fact: "Поверхность Каллисто покрыта множеством ударных кратеров."
        },
        "Титан": {
            planet: "Сатурн",
            diameter: "5 150 км",
            temperature: "около −179 °C",
            description: "Титан — крупнейший спутник Сатурна.",
            fact: "Титан имеет плотную атмосферу и моря из жидких углеводородов."
        },
        "Энцелад": {
            planet: "Сатурн",
            diameter: "около 504 км",
            temperature: "около −200 °C",
            description: "Энцелад — небольшой ледяной спутник Сатурна.",
            fact: "Из его южной области вырываются струи водяного пара и льда."
        },
        "Тритон": {
            planet: "Нептун",
            diameter: "2 707 км",
            temperature: "около −235 °C",
            description: "Тритон — крупнейший спутник Нептуна.",
            fact: "Тритон движется вокруг Нептуна в обратном направлении относительно вращения планеты."
        }
    },

    kk: {
        "Луна": {
            planet: "Жер",
            diameter: "3 474 км",
            temperature: "−173 °C-тан +127 °C-қа дейін",
            description: "Ай — Жердің табиғи серігі.",
            fact: "Ай әрдайым Жерге бір жағымен қарап тұрады."
        },
        "Фобос": {
            planet: "Марс",
            diameter: "шамамен 22 км",
            temperature: "өте төмен",
            description: "Фобос — Марстың ең үлкен әрі ең жақын серігі.",
            fact: "Фобос біртіндеп Марсқа жақындап келеді."
        },
        "Деймос": {
            planet: "Марс",
            diameter: "шамамен 12 км",
            temperature: "өте төмен",
            description: "Деймос — Марстың кішкентай серігі.",
            fact: "Деймос атауы «қорқыныш» дегенді білдіреді."
        },
        "Ио": {
            planet: "Юпитер",
            diameter: "3 643 км",
            temperature: "шамамен −130 °C",
            description: "Ио — жанартаулары өте белсенді Юпитер серігі.",
            fact: "Ио — Күн жүйесіндегі жанартаулық белсенділігі ең жоғары әлем."
        },
        "Европа": {
            planet: "Юпитер",
            diameter: "3 122 км",
            temperature: "шамамен −160 °C",
            description: "Еуропа — Юпитердің мұзды серігі.",
            fact: "Мұзды бетінің астында мұхит болуы мүмкін."
        },
        "Ганимед": {
            planet: "Юпитер",
            diameter: "5 268 км",
            temperature: "шамамен −160 °C",
            description: "Ганимед — Күн жүйесіндегі ең үлкен серік.",
            fact: "Ганимедтің диаметрі Меркурийден үлкен."
        },
        "Каллисто": {
            planet: "Юпитер",
            diameter: "4 821 км",
            temperature: "шамамен −140 °C",
            description: "Каллисто — Юпитердің ең ірі серіктерінің бірі.",
            fact: "Каллистоның бетінде көптеген соққы кратерлері бар."
        },
        "Титан": {
            planet: "Сатурн",
            diameter: "5 150 км",
            temperature: "шамамен −179 °C",
            description: "Титан — Сатурнның ең үлкен серігі.",
            fact: "Титанда тығыз атмосфера және сұйық көмірсутектерден тұратын теңіздер бар."
        },
        "Энцелад": {
            planet: "Сатурн",
            diameter: "шамамен 504 км",
            temperature: "шамамен −200 °C",
            description: "Энцелад — Сатурнның кішкентай мұзды серігі.",
            fact: "Оның оңтүстік аймағынан су буы мен мұздың шлейфтері атқылайды."
        },
        "Тритон": {
            planet: "Нептун",
            diameter: "2 707 км",
            temperature: "шамамен −235 °C",
            description: "Тритон — Нептунның ең үлкен серігі.",
            fact: "Тритон Нептунның айналу бағытына қарама-қарсы бағытта қозғалады."
        }
    },

    cs: {
        "Луна": {
            planet: "Země",
            diameter: "3 474 km",
            temperature: "−173 °C až +127 °C",
            description: "Měsíc je přirozená družice Země.",
            fact: "Měsíc je k Zemi stále obrácen stejnou stranou."
        },
        "Фобос": {
            planet: "Mars",
            diameter: "asi 22 km",
            temperature: "velmi nízká",
            description: "Phobos je největší a nejbližší měsíc Marsu.",
            fact: "Phobos se postupně přibližuje k Marsu."
        },
        "Деймос": {
            planet: "Mars",
            diameter: "asi 12 km",
            temperature: "velmi nízká",
            description: "Deimos je malý měsíc Marsu.",
            fact: "Název Deimos znamená „děs“."
        },
        "Ио": {
            planet: "Jupiter",
            diameter: "3 643 km",
            temperature: "asi −130 °C",
            description: "Io je měsíc Jupiteru s mimořádně aktivními sopkami.",
            fact: "Io je vulkanicky nejaktivnější svět Sluneční soustavy."
        },
        "Европа": {
            planet: "Jupiter",
            diameter: "3 122 km",
            temperature: "asi −160 °C",
            description: "Europa je ledový měsíc Jupiteru.",
            fact: "Pod jejím ledovým povrchem se pravděpodobně nachází oceán."
        },
        "Ганимед": {
            planet: "Jupiter",
            diameter: "5 268 km",
            temperature: "asi −160 °C",
            description: "Ganymed je největší měsíc Sluneční soustavy.",
            fact: "Ganymed má větší průměr než Merkur."
        },
        "Каллисто": {
            planet: "Jupiter",
            diameter: "4 821 km",
            temperature: "asi −140 °C",
            description: "Callisto je jeden z největších měsíců Jupiteru.",
            fact: "Povrch Callista je pokryt mnoha impaktními krátery."
        },
        "Титан": {
            planet: "Saturn",
            diameter: "5 150 km",
            temperature: "asi −179 °C",
            description: "Titan je největší měsíc Saturnu.",
            fact: "Titan má hustou atmosféru a jezera kapalných uhlovodíků."
        },
        "Энцелад": {
            planet: "Saturn",
            diameter: "asi 504 km",
            temperature: "asi −200 °C",
            description: "Enceladus je malý ledový měsíc Saturnu.",
            fact: "Z jeho jižní oblasti unikají proudy vodní páry a ledu."
        },
        "Тритон": {
            planet: "Neptun",
            diameter: "2 707 km",
            temperature: "asi −235 °C",
            description: "Triton je největší měsíc Neptunu.",
            fact: "Triton obíhá Neptun opačným směrem, než se planeta otáčí."
        }
    },

    en: {
        "Луна": {
            planet: "Earth",
            diameter: "3,474 km",
            temperature: "−173°C to +127°C",
            description: "The Moon is Earth's natural satellite.",
            fact: "The Moon always keeps the same side facing Earth."
        },
        "Фобос": {
            planet: "Mars",
            diameter: "about 22 km",
            temperature: "very low",
            description: "Phobos is the largest and closest moon of Mars.",
            fact: "Phobos is gradually moving closer to Mars."
        },
        "Деймос": {
            planet: "Mars",
            diameter: "about 12 km",
            temperature: "very low",
            description: "Deimos is a small moon of Mars.",
            fact: "The name Deimos means “terror”."
        },
        "Ио": {
            planet: "Jupiter",
            diameter: "3,643 km",
            temperature: "about −130°C",
            description: "Io is a moon of Jupiter with extremely active volcanoes.",
            fact: "Io is the most volcanically active world in the Solar System."
        },
        "Европа": {
            planet: "Jupiter",
            diameter: "3,122 km",
            temperature: "about −160°C",
            description: "Europa is an icy moon of Jupiter.",
            fact: "An ocean likely exists beneath its icy surface."
        },
        "Ганимед": {
            planet: "Jupiter",
            diameter: "5,268 km",
            temperature: "about −160°C",
            description: "Ganymede is the largest moon in the Solar System.",
            fact: "Ganymede is larger than Mercury in diameter."
        },
        "Каллисто": {
            planet: "Jupiter",
            diameter: "4,821 km",
            temperature: "about −140°C",
            description: "Callisto is one of Jupiter's largest moons.",
            fact: "Callisto's surface is covered with many impact craters."
        },
        "Титан": {
            planet: "Saturn",
            diameter: "5,150 km",
            temperature: "about −179°C",
            description: "Titan is the largest moon of Saturn.",
            fact: "Titan has a thick atmosphere and lakes of liquid hydrocarbons."
        },
        "Энцелад": {
            planet: "Saturn",
            diameter: "about 504 km",
            temperature: "about −200°C",
            description: "Enceladus is a small icy moon of Saturn.",
            fact: "Jets of water vapor and ice erupt from its southern region."
        },
        "Тритон": {
            planet: "Neptune",
            diameter: "2,707 km",
            temperature: "about −235°C",
            description: "Triton is the largest moon of Neptune.",
            fact: "Triton orbits Neptune in the opposite direction to the planet's rotation."
        }
    },

    de: {
        "Луна": {
            planet: "Erde",
            diameter: "3.474 km",
            temperature: "etwa −173 °C bis +127 °C",
            description: "Der Mond ist der natürliche Satellit der Erde.",
            fact: "Der Mond zeigt der Erde immer dieselbe Seite."
        },
        "Фобос": {
            planet: "Mars",
            diameter: "etwa 22 km",
            temperature: "sehr niedrig",
            description: "Phobos ist der größte und nächste Mond des Mars.",
            fact: "Phobos nähert sich allmählich dem Mars."
        },
        "Деймос": {
            planet: "Mars",
            diameter: "etwa 12 km",
            temperature: "sehr niedrig",
            description: "Deimos ist ein kleiner Mond des Mars.",
            fact: "Der Name Deimos bedeutet „Schrecken“."
        },
        "Ио": {
            planet: "Jupiter",
            diameter: "3.643 km",
            temperature: "etwa −130 °C",
            description: "Io ist ein Mond des Jupiter mit äußerst aktiven Vulkanen.",
            fact: "Io ist die vulkanisch aktivste Welt im Sonnensystem."
        },
        "Европа": {
            planet: "Jupiter",
            diameter: "3.122 km",
            temperature: "etwa −160 °C",
            description: "Europa ist ein Eismond des Jupiter.",
            fact: "Unter ihrer eisigen Oberfläche befindet sich wahrscheinlich ein Ozean."
        },
        "Ганимед": {
            planet: "Jupiter",
            diameter: "5.268 km",
            temperature: "etwa −160 °C",
            description: "Ganymed ist der größte Mond im Sonnensystem.",
            fact: "Ganymed ist vom Durchmesser her größer als Merkur."
        },
        "Каллисто": {
            planet: "Jupiter",
            diameter: "4.821 km",
            temperature: "etwa −140 °C",
            description: "Kallisto ist einer der größten Monde des Jupiter.",
            fact: "Die Oberfläche von Kallisto ist von vielen Einschlagskratern bedeckt."
        },
        "Титан": {
            planet: "Saturn",
            diameter: "5.150 km",
            temperature: "etwa −179 °C",
            description: "Titan ist der größte Mond des Saturn.",
            fact: "Titan besitzt eine dichte Atmosphäre und Seen aus flüssigen Kohlenwasserstoffen."
        },
        "Энцелад": {
            planet: "Saturn",
            diameter: "etwa 504 km",
            temperature: "etwa −200 °C",
            description: "Enceladus ist ein kleiner Eismond des Saturn.",
            fact: "Aus seiner Südregion treten Fontänen aus Wasserdampf und Eis aus."
        },
        "Тритон": {
            planet: "Neptun",
            diameter: "2.707 km",
            temperature: "etwa −235 °C",
            description: "Triton ist der größte Mond des Neptun.",
            fact: "Triton umkreist Neptun entgegen der Drehrichtung des Planeten."
        }
    },

    fr: {
        "Луна": {
            planet: "Terre",
            diameter: "3 474 km",
            temperature: "environ −173 °C à +127 °C",
            description: "La Lune est le satellite naturel de la Terre.",
            fact: "La Lune présente toujours la même face à la Terre."
        },
        "Фобос": {
            planet: "Mars",
            diameter: "environ 22 km",
            temperature: "très basse",
            description: "Phobos est le plus grand et le plus proche satellite de Mars.",
            fact: "Phobos se rapproche progressivement de Mars."
        },
        "Деймос": {
            planet: "Mars",
            diameter: "environ 12 km",
            temperature: "très basse",
            description: "Déimos est un petit satellite de Mars.",
            fact: "Le nom Déimos signifie « terreur »."
        },
        "Ио": {
            planet: "Jupiter",
            diameter: "3 643 km",
            temperature: "environ −130 °C à la surface",
            description: "Io est un satellite de Jupiter aux volcans extrêmement actifs.",
            fact: "Io est le monde le plus volcaniquement actif du Système solaire."
        },
        "Европа": {
            planet: "Jupiter",
            diameter: "3 122 km",
            temperature: "environ −160 °C",
            description: "Europe est un satellite glacé de Jupiter.",
            fact: "Un océan souterrain se trouve probablement sous sa surface glacée."
        },
        "Ганимед": {
            planet: "Jupiter",
            diameter: "5 268 km",
            temperature: "environ −160 °C",
            description: "Ganymède est le plus grand satellite du Système solaire.",
            fact: "Ganymède est plus grand que Mercure en diamètre."
        },
        "Каллисто": {
            planet: "Jupiter",
            diameter: "4 821 km",
            temperature: "environ −140 °C",
            description: "Callisto est l'un des plus grands satellites de Jupiter.",
            fact: "La surface de Callisto est couverte de nombreux cratères d'impact."
        },
        "Титан": {
            planet: "Saturne",
            diameter: "5 150 km",
            temperature: "environ −179 °C",
            description: "Titan est le plus grand satellite de Saturne.",
            fact: "Titan possède une atmosphère dense et des mers d'hydrocarbures liquides."
        },
        "Энцелад": {
            planet: "Saturne",
            diameter: "environ 504 km",
            temperature: "environ −200 °C",
            description: "Encelade est un petit satellite glacé de Saturne.",
            fact: "Des jets de vapeur d'eau et de glace jaillissent de sa région sud."
        },
        "Тритон": {
            planet: "Neptune",
            diameter: "2 707 km",
            temperature: "environ −235 °C",
            description: "Triton est le plus grand satellite de Neptune.",
            fact: "Triton orbite autour de Neptune dans le sens opposé à la rotation de la planète."
        }
    }
};


/* =========================================================
   🌙 КАРТОЧКИ СПУТНИКОВ
   ========================================================= */

const moonCardNames = {

    ru: {
        "Луна": "Луна",
        "Фобос": "Фобос",
        "Деймос": "Деймос",
        "Ио": "Ио",
        "Европа": "Европа",
        "Ганимед": "Ганимед",
        "Каллисто": "Каллисто",
        "Титан": "Титан",
        "Энцелад": "Энцелад",
        "Тритон": "Тритон"
    },

    kk: {
        "Луна": "Ай",
        "Фобос": "Фобос",
        "Деймос": "Деймос",
        "Ио": "Ио",
        "Европа": "Еуропа",
        "Ганимед": "Ганимед",
        "Каллисто": "Каллисто",
        "Титан": "Титан",
        "Энцелад": "Энцелад",
        "Тритон": "Тритон"
    },

    cs: {
        "Луна": "Měsíc",
        "Фобос": "Phobos",
        "Деймос": "Deimos",
        "Ио": "Io",
        "Европа": "Europa",
        "Ганимед": "Ganymed",
        "Каллисто": "Callisto",
        "Титан": "Titan",
        "Энцелад": "Enceladus",
        "Тритон": "Triton"
    },

    en: {
        "Луна": "Moon",
        "Фобос": "Phobos",
        "Деймос": "Deimos",
        "Ио": "Io",
        "Европа": "Europa",
        "Ганимед": "Ganymede",
        "Каллисто": "Callisto",
        "Титан": "Titan",
        "Энцелад": "Enceladus",
        "Тритон": "Triton"
    },

    de: {
        "Луна": "Mond",
        "Фобос": "Phobos",
        "Деймос": "Deimos",
        "Ио": "Io",
        "Европа": "Europa",
        "Ганимед": "Ganymed",
        "Каллисто": "Kallisto",
        "Титан": "Titan",
        "Энцелад": "Enceladus",
        "Тритон": "Triton"
    },

    fr: {
        "Луна": "Lune",
        "Фобос": "Phobos",
        "Деймос": "Déimos",
        "Ио": "Io",
        "Европа": "Europe",
        "Ганимед": "Ganymède",
        "Каллисто": "Callisto",
        "Титан": "Titan",
        "Энцелад": "Encelade",
        "Тритон": "Triton"
    }
};


/* =========================================================
   🌙 КАРТОЧКИ СПУТНИКОВ — ОПИСАНИЯ
   ========================================================= */

const moonCardTranslations = {

    ru: {
        "Луна": "Естественный спутник Земли.",
        "Фобос": "Ближайший спутник Марса.",
        "Деймос": "Небольшой спутник Марса.",
        "Ио": "Вулканически активный спутник Юпитера.",
        "Европа": "Ледяной спутник Юпитера.",
        "Ганимед": "Крупнейший спутник Солнечной системы.",
        "Каллисто": "Один из крупнейших спутников Юпитера.",
        "Титан": "Крупнейший спутник Сатурна.",
        "Энцелад": "Ледяной спутник Сатурна.",
        "Тритон": "Крупнейший спутник Нептуна."
    },

    kk: {
        "Луна": "Жердің табиғи серігі.",
        "Фобос": "Марстың ең жақын серігі.",
        "Деймос": "Марстың кішкентай серігі.",
        "Ио": "Юпитердің жанартаулық белсенді серігі.",
        "Европа": "Юпитердің мұзды серігі.",
        "Ганимед": "Күн жүйесіндегі ең үлкен серік.",
        "Каллисто": "Юпитердің ең ірі серіктерінің бірі.",
        "Титан": "Сатурнның ең үлкен серігі.",
        "Энцелад": "Сатурнның мұзды серігі.",
        "Тритон": "Нептунның ең үлкен серігі."
    },

    cs: {
        "Луна": "Přirozená družice Země.",
        "Фобос": "Nejbližší měsíc Marsu.",
        "Деймос": "Malý měsíc Marsu.",
        "Ио": "Vulkanicky aktivní měsíc Jupiteru.",
        "Европа": "Ledový měsíc Jupiteru.",
        "Ганимед": "Největší měsíc Sluneční soustavy.",
        "Каллисто": "Jeden z největších měsíců Jupiteru.",
        "Титан": "Největší měsíc Saturnu.",
        "Энцелад": "Ledový měsíc Saturnu.",
        "Тритон": "Největší měsíc Neptunu."
    },

    en: {
        "Луна": "Earth's natural satellite.",
        "Фобос": "The closest moon to Mars.",
        "Деймос": "A small moon of Mars.",
        "Ио": "A volcanically active moon of Jupiter.",
        "Европа": "An icy moon of Jupiter.",
        "Ганимед": "The largest moon in the Solar System.",
        "Каллисто": "One of Jupiter's largest moons.",
        "Титан": "The largest moon of Saturn.",
        "Энцелад": "An icy moon of Saturn.",
        "Тритон": "The largest moon of Neptune."
    },

    de: {
        "Луна": "Der natürliche Satellit der Erde.",
        "Фобос": "Der nächstgelegene Mond des Mars.",
        "Деймос": "Ein kleiner Mond des Mars.",
        "Ио": "Ein vulkanisch aktiver Mond des Jupiter.",
        "Европа": "Ein Eismond des Jupiter.",
        "Ганимед": "Der größte Mond im Sonnensystem.",
        "Каллисто": "Einer der größten Monde des Jupiter.",
        "Титан": "Der größte Mond des Saturn.",
        "Энцелад": "Ein Eismond des Saturn.",
        "Тритон": "Der größte Mond des Neptun."
    },

    fr: {
        "Луна": "Le satellite naturel de la Terre.",
        "Фобос": "Le satellite le plus proche de Mars.",
        "Деймос": "Un petit satellite de Mars.",
        "Ио": "Un satellite volcanique actif de Jupiter.",
        "Европа": "Un satellite glacé de Jupiter.",
        "Ганимед": "Le plus grand satellite du Système solaire.",
        "Каллисто": "L'un des plus grands satellites de Jupiter.",
        "Титан": "Le plus grand satellite de Saturne.",
        "Энцелад": "Un satellite glacé de Saturne.",
        "Тритон": "Le plus grand satellite de Neptune."
    }
};


/* =========================================================
   🌙 СЕКЦИЯ СПУТНИКОВ
   ========================================================= */

const moonSectionTranslations = {

    ru: {
        title: "🌙 Спутники планет",
        text: "Исследуй спутники Солнечной системы и узнай больше о космических мирах."
    },

    kk: {
        title: "🌙 Планеталардың серіктері",
        text: "Күн жүйесінің серіктерін зерттеп, ғарыш әлемдері туралы көбірек біл."
    },

    cs: {
        title: "🌙 Měsíce planet",
        text: "Prozkoumej měsíce Sluneční soustavy a zjisti více o vesmírných světech."
    },

    en: {
        title: "🌙 Moons of the Planets",
        text: "Explore the moons of the Solar System and discover more about these worlds."
    },

    de: {
        title: "🌙 Monde der Planeten",
        text: "Erkunde die Monde des Sonnensystems und entdecke mehr über diese Welten."
    },

    fr: {
        title: "🌙 Lunes des planètes",
        text: "Explore les lunes du Système solaire et découvre davantage ces mondes."
    }
};


/* =========================================================
   🌌 СОЗВЕЗДИЯ
   ========================================================= */

const constellationTranslations = {

    ru: {
        "Большая Медведица": "Большая Медведица",
        "Малая Медведица": "Малая Медведица",
        "Орион": "Орион",
        "Кассиопея": "Кассиопея",
        "Лебедь": "Лебедь",
        "Лира": "Лира",
        "Андромеда": "Андромеда",
        "Телец": "Телец",
        "Скорпион": "Скорпион",
        "Персей": "Персей"
    },

    kk: {
        "Большая Медведица": "Үлкен Аю",
        "Малая Медведица": "Кіші Аю",
        "Орион": "Орион",
        "Кассиопея": "Кассиопея",
        "Лебедь": "Аққу",
        "Лира": "Лира",
        "Андромеда": "Андромеда",
        "Телец": "Торпақ",
        "Скорпион": "Сарышаян",
        "Персей": "Персей"
    },

    cs: {
        "Большая Медведица": "Velká medvědice",
        "Малая Медведица": "Malý medvěd",
        "Орион": "Orion",
        "Кассиопея": "Kasiopeia",
        "Лебедь": "Labuť",
        "Лира": "Lyra",
        "Андромеда": "Andromeda",
        "Телец": "Býk",
        "Скорпион": "Štír",
        "Персей": "Perseus"
    },

    en: {
        "Большая Медведица": "Ursa Major",
        "Малая Медведица": "Ursa Minor",
        "Орион": "Orion",
        "Кассиопея": "Cassiopeia",
        "Лебедь": "Cygnus",
        "Лира": "Lyra",
        "Андромеда": "Andromeda",
        "Телец": "Taurus",
        "Скорпион": "Scorpius",
        "Персей": "Perseus"
    },

    de: {
        "Большая Медведица": "Großer Bär",
        "Малая Медведица": "Kleiner Bär",
        "Орион": "Orion",
        "Кассиопея": "Kassiopeia",
        "Лебедь": "Schwan",
        "Лира": "Leier",
        "Андромеда": "Andromeda",
        "Телец": "Stier",
        "Скорпион": "Skorpion",
        "Персей": "Perseus"
    },

    fr: {
        "Большая Медведица": "Grande Ourse",
        "Малая Медведица": "Petite Ourse",
        "Орион": "Orion",
        "Кассиопея": "Cassiopée",
        "Лебедь": "Cygne",
        "Лира": "Lyre",
        "Андромеда": "Andromède",
        "Телец": "Taureau",
        "Скорпион": "Scorpion",
        "Персей": "Persée"
    }
};


/* =========================================================
   🪐 КОРОТКИЕ ОПИСАНИЯ ПЛАНЕТ
   ========================================================= */

function updatePlanetCards() {

    document.querySelectorAll(".planet-card").forEach(card => {

        const name = card.dataset.planet;

        if (!name) {
            return;
        }

        const planet = planets[name];

        if (!planet) {
            return;
        }

        const data = planet[currentLanguage] || planet.ru;

        const title = card.querySelector("h2, h3");
        const description = card.querySelector("p");

        if (title) {
            title.textContent = data.name;
        }

        if (description) {
            description.textContent = data.description;
        }
    });
}


/* =========================================================
   🌙 ОБНОВЛЕНИЕ КАРТОЧЕК СПУТНИКОВ
   ========================================================= */

function updateMoonCards() {

    document.querySelectorAll(".moon-card").forEach(card => {

        const name = card.dataset.moon;

        if (!name) {
            return;
        }

        const title = card.querySelector("h3");
        const description = card.querySelector("p");

        if (title) {
            title.textContent =
                moonCardNames[currentLanguage]?.[name] || name;
        }

        if (description) {
            description.textContent =
                moonCardTranslations[currentLanguage]?.[name] || "";
        }
    });
}


/* =========================================================
   🌙 ОБНОВЛЕНИЕ СЕКЦИИ СПУТНИКОВ
   ========================================================= */

function updateMoonSectionLanguage() {

    const data = moonSectionTranslations[currentLanguage];

    if (!data) {
        return;
    }

    document.querySelectorAll(".moons-section-title").forEach(element => {
        element.textContent = data.title;
    });

    document.querySelectorAll(".moons-section-text").forEach(element => {
        element.textContent = data.text;
    });

    const title = document.getElementById("moonsSectionTitle");
    const text = document.getElementById("moonsSectionText");

    if (title) {
        title.textContent = data.title;
    }

    if (text) {
        text.textContent = data.text;
    }
}


/* =========================================================
   🪐 МОДАЛЬНОЕ ОКНО ПЛАНЕТЫ
   ========================================================= */

function showPlanet(name) {

    if (!planets[name]) {
        console.error("Планета не найдена:", name);
        return;
    }

    const modal = document.getElementById("planetModal");

    if (!modal) {
        console.error("Не найдено окно planetModal");
        return;
    }

    modal.dataset.planet = name;

    fillPlanetModal(name);

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function fillPlanetModal(name) {

    const planet = planets[name];

    if (!planet) {
        return;
    }

    const data = planet[currentLanguage] || planet.ru;

    const values = {

        planetIcon: planet.icon,

        planetName: data.name,

        planetDescription: data.description,

        planetTemperature: data.temperature,

        planetDiameter: data.diameter,

        planetMass: data.mass,

        planetDistance: data.distance,

        planetDay: data.day,

        planetYear: data.year,

        planetMoons: data.moons,

        planetRings: data.rings,

        planetAtmosphere: data.atmosphere,

        planetFact: data.fact
    };

    Object.entries(values).forEach(([id, value]) => {

        const element = document.getElementById(id);

        if (element) {
            element.textContent = value;
        }
    });
}


function closePlanet() {

    const modal = document.getElementById("planetModal");

    if (modal) {
        modal.classList.remove("active");
        modal.dataset.planet = "";
    }

    document.body.style.overflow = "";
}


/* =========================================================
   🌙 МОДАЛЬНОЕ ОКНО СПУТНИКА
   ========================================================= */

function showMoon(name) {

    const moon = moons[name];

    if (!moon) {
        console.error("Спутник не найден:", name);
        return;
    }

    const modal = document.getElementById("moonModal");

    if (!modal) {
        console.error("Не найдено окно moonModal");
        return;
    }

    const data = moon[currentLanguage] || moon.ru;

    const labels = {

        ru: {
            planet: "Планета:",
            diameter: "Диаметр:",
            temperature: "Температура:",
            fact: "Интересный факт:"
        },

        kk: {
            planet: "Ғаламшар:",
            diameter: "Диаметрі:",
            temperature: "Температурасы:",
            fact: "Қызықты дерек:"
        },

        cs: {
            planet: "Planeta:",
            diameter: "Průměr:",
            temperature: "Teplota:",
            fact: "Zajímavý fakt:"
        },

        en: {
            planet: "Planet:",
            diameter: "Diameter:",
            temperature: "Temperature:",
            fact: "Interesting fact:"
        },

        de: {
            planet: "Planet:",
            diameter: "Durchmesser:",
            temperature: "Temperatur:",
            fact: "Interessanter Fakt:"
        },

        fr: {
            planet: "Planète :",
            diameter: "Diamètre :",
            temperature: "Température :",
            fact: "Fait intéressant :"
        }
    };

    document.getElementById("moonIcon").textContent =
        moon.icon;

    document.getElementById("moonName").textContent =
        moonCardNames[currentLanguage]?.[name] || name;

    document.getElementById("moonDescription").textContent =
        data.description;

    document.getElementById("moonPlanet").textContent =
        data.planet;

    document.getElementById("moonDiameter").textContent =
        data.diameter;

    document.getElementById("moonTemperature").textContent =
        data.temperature;

    document.getElementById("moonFact").textContent =
        data.fact;

    const currentLabels =
        labels[currentLanguage] || labels.ru;

    const planetLabel =
        document.getElementById("moonPlanetLabel");

    const diameterLabel =
        document.getElementById("moonDiameterLabel");

    const temperatureLabel =
        document.getElementById("moonTemperatureLabel");

    const factLabel =
        document.getElementById("moonFactLabel");

    if (planetLabel) {
        planetLabel.textContent = currentLabels.planet;
    }

    if (diameterLabel) {
        diameterLabel.textContent = currentLabels.diameter;
    }

    if (temperatureLabel) {
        temperatureLabel.textContent = currentLabels.temperature;
    }

    if (factLabel) {
        factLabel.textContent = currentLabels.fact;
    }

    modal.dataset.moon = name;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeMoon() {

    const modal = document.getElementById("moonModal");

    if (modal) {
        modal.classList.remove("active");
        modal.dataset.moon = "";
    }

    document.body.style.overflow = "";
}


/* =========================================================
   🌐 СОЗВЕЗДИЯ
   ========================================================= */

function updateConstellationLanguage() {

    const translations =
        constellationTranslations[currentLanguage];

    if (!translations) {
        return;
    }

    document
        .querySelectorAll(".constellation-card h2")
        .forEach(title => {

            const originalName =
                title.dataset.originalName ||
                title.textContent;

            title.dataset.originalName =
                originalName;

            if (translations[originalName]) {
                title.textContent =
                    translations[originalName];
            }
        });

    const backButton =
        document.getElementById("constellationBack");

    if (backButton) {

        const backText = {

            ru: "← Вернуться в космическое приключение",

            kk: "← Ғарыштық шытырман оқиғаға оралу",

            cs: "← Zpět na vesmírné dobrodružství",

            en: "← Back to the space adventure",

            de: "← Zurück zum Weltraumabenteuer",

            fr: "← Retour à l'aventure spatiale"
        };

        backButton.textContent =
            backText[currentLanguage];
    }
}


/* =========================================================
   🌐 СМЕНА ЯЗЫКА
   ========================================================= */

/* =========================================================
   🌐 СМЕНА ЯЗЫКА
   ========================================================= */

function changeLanguage(language) {

    if (!languages[language]) {
        return;
    }


    /* =========================================
       СОХРАНЯЕМ ВЫБРАННЫЙ ЯЗЫК
       ========================================= */

    currentLanguage = language;

    console.log("Текущий язык:", currentLanguage);
    
    localStorage.setItem(
        "siteLanguage",
        language
    );


    document.documentElement.lang =
        language === "kk"
            ? "kk"
            : language;


    /* =========================================
       СТРАНИЦА СОЗВЕЗДИЙ
       ========================================= */

    if (
        document.querySelector(".constellation-card") &&
        typeof updateConstellationPage === "function"
    ) {

        updateConstellationPage();


        const dropdown =
            document.getElementById(
                "languageDropdown"
            );


        if (dropdown) {

            dropdown.classList.remove(
                "open"
            );

        }


        return;
    }


    /* =========================================
       ОБЫЧНАЯ ГЛАВНАЯ СТРАНИЦА
       ========================================= */

    const text =
        languages[language];


    const elements = {

        siteTitle:
            text.siteTitle,

        siteSubtitle:
            text.siteSubtitle,

        welcomeTitle:
            text.welcomeTitle,

        welcomeText:
            text.welcomeText,

        startButton:
            text.startButton,

        moonsButton:
            text.moonsButton,

        constellationButton:
            text.constellationButton,

        planetsTitle:
            text.planetsTitle,

        labelTemperature:
            text.temperature,

        labelDiameter:
            text.diameter,

        labelMass:
            text.mass,

        labelDistance:
            text.distance,

        labelDay:
            text.day,

        labelYear:
            text.year,

        labelMoons:
            text.moons,

        labelRings:
            text.rings,

        labelAtmosphere:
            text.atmosphere,

        factTitle:
            text.fact,

        footerText:
            text.footer
    };


    Object.entries(elements).forEach(
        ([id, value]) => {

            const element =
                document.getElementById(id);


            if (element) {

                element.textContent =
                    value;

            }

        }
    );


    /* =========================================
       КНОПКА ВЫБРАННОГО ЯЗЫКА
       ========================================= */

    const languageButton =
        document.getElementById(
            "languageButton"
        );


    const languageData = {

        ru: {
            name: "Русский",
            flag: "images/russia.png"
        },

        kk: {
            name: "Қазақша",
            flag: "images/kazakhstan.png"
        },

        cs: {
            name: "Čeština",
            flag: "images/czechia.png"
        },

        en: {
            name: "English",
            flag: "images/usa.png"
        },

        de: {
            name: "Deutsch",
            flag: "images/germany.png"
        },

        fr: {
            name: "Français",
            flag: "images/france.png"
        }
    };


    const selected =
        languageData[language];


    if (languageButton && selected) {

        languageButton.innerHTML = `
            <img
                src="${selected.flag}"
                alt="${selected.name}"
            >
            ${selected.name}
        `;
    }


    /* =========================================
       ПЛАНЕТЫ
       ========================================= */

    updatePlanetCards();


    /* =========================================
       СПУТНИКИ
       ========================================= */

    updateMoonCards();

    updateMoonSectionLanguage();


/* =========================================
   СОЗВЕЗДИЯ
   ========================================= */

if (
    !document.querySelector(".constellation-card")
) {
    updateConstellationLanguage();
}


    /* =========================================
       КНОПКИ ЗАКРЫТИЯ
       ========================================= */

    document
        .querySelectorAll(".close-button")
        .forEach(button => {

            button.setAttribute(
                "aria-label",
                text.close
            );

        });


    /* =========================================
       ЕСЛИ МОДАЛЬНОЕ ОКНО ПЛАНЕТЫ ОТКРЫТО
       ========================================= */

    const planetModal =
        document.getElementById(
            "planetModal"
        );


    if (
        planetModal &&
        planetModal.classList.contains("active")
    ) {

        const name =
            planetModal.dataset.planet;


        if (name) {
            fillPlanetModal(name);
        }

    }


    /* =========================================
       ЕСЛИ МОДАЛЬНОЕ ОКНО СПУТНИКА ОТКРЫТО
       ========================================= */

    const moonModal =
        document.getElementById(
            "moonModal"
        );


    if (
        moonModal &&
        moonModal.classList.contains("active")
    ) {

        const name =
            moonModal.dataset.moon;


        if (name) {
            showMoon(name);
        }

    }


    /* =========================================
       ЗАКРЫВАЕМ МЕНЮ ЯЗЫКОВ
       ========================================= */

    const dropdown =
        document.getElementById(
            "languageDropdown"
        );


    if (dropdown) {

        dropdown.classList.remove(
            "open"
        );

    }

}
function toggleLanguageMenu() {

    const dropdown =
        document.getElementById("languageDropdown");

    if (dropdown) {
        dropdown.classList.toggle("open");
    }
}


document.addEventListener(
    "click",
    event => {

        const menu =
            document.querySelector(".language-menu");

        const dropdown =
            document.getElementById("languageDropdown");

        if (!menu || !dropdown) {
            return;
        }

        if (!menu.contains(event.target)) {
            dropdown.classList.remove("open");
        }
    }
);


/* =========================================================
   🪐 ПРОКРУТКА
   ========================================================= */

function scrollToPlanets() {

    const section =
        document.getElementById("planets");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


function scrollToMoons() {

    const section =
        document.getElementById("moons");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* =========================================================
   ❌ ЗАКРЫТИЕ МОДАЛЬНЫХ ОКОН ПО КЛИКУ
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const planetModal =
            document.getElementById("planetModal");

        if (planetModal) {

            planetModal.addEventListener(
                "click",
                event => {

                    if (
                        event.target === planetModal
                    ) {
                        closePlanet();
                    }
                }
            );
        }


        const moonModal =
            document.getElementById("moonModal");

        if (moonModal) {

            moonModal.addEventListener(
                "click",
                event => {

                    if (
                        event.target === moonModal
                    ) {
                        closeMoon();
                    }
                }
            );
        }


        /* Запускаем выбранный язык */

        changeLanguage(currentLanguage);
    }
);


/* =========================================================
   ⌨️ ESC — ЗАКРЫТЬ ОКНО
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closePlanet();
            closeMoon();
        }
    }
);


/* =========================================================
   ⭐ ЗВЁЗДЫ
   ========================================================= */

function createStars() {

    /*
       Не создаём звёзды второй раз,
       если script.js загружен на другой странице.
    */

    if (
        document.querySelector(".star")
    ) {
        return;
    }

    for (let i = 0; i < 120; i++) {

        const star =
            document.createElement("div");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "vw";

        star.style.top =
            Math.random() * 100 + "vh";

        const size =
            Math.random() * 3 + 1;

        star.style.width =
            size + "px";

        star.style.height =
            size + "px";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        document.body.appendChild(star);
    }
}


/* =========================================================
   ☄️ КОМЕТЫ
   ========================================================= */

function createComet() {

    const comet =
        document.createElement("div");

    const tail =
        document.createElement("div");

    comet.className = "comet";

    tail.className = "comet-tail";

    document.body.appendChild(tail);

    document.body.appendChild(comet);


    const startX =
        window.innerWidth + 60;

    const startY = -60;

    const endX = -150;

    const endY =
        window.innerHeight + 150;

    const duration = 3500;

    const startTime =
        performance.now();


    function animate(time) {

        const progress =
            (time - startTime) /
            duration;

        if (progress >= 1) {

            comet.remove();

            tail.remove();

            return;
        }


        const x =
            startX +
            (endX - startX) *
            progress;

        const y =
            startY +
            (endY - startY) *
            progress;


        comet.style.left =
            x - 9 + "px";

        comet.style.top =
            y - 9 + "px";


        tail.style.left =
            x - 5 + "px";

        tail.style.top =
            y + 5 + "px";

        tail.style.transform =
            "rotate(-45deg)";


        let opacity = 1;


        if (progress < 0.1) {
            opacity =
                progress / 0.1;
        }


        if (progress > 0.85) {
            opacity =
                (1 - progress) / 0.15;
        }


        comet.style.opacity =
            opacity;

        tail.style.opacity =
            opacity;


        requestAnimationFrame(
            animate
        );
    }


    requestAnimationFrame(
        animate
    );
}


/* =========================================================
   🚀 ЗАПУСК КОСМИЧЕСКИХ ЭФФЕКТОВ
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        createStars();

        setTimeout(
            createComet,
            1500
        );

        setInterval(
            createComet,
            5000
        );
    }
);


const savedLanguage =
    localStorage.getItem("siteLanguage") || "ru";

changeLanguage(savedLanguage);