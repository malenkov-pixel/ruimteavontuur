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
        startButton: "Начать путешествие 🚀",
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
        startButton: "Саяхатты бастау 🚀",
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
        startButton: "Začít cestu 🚀",
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
        startButton: "Start the journey 🚀",
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
        startButton: "Reise beginnen 🚀",
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
        startButton: "Commencer le voyage 🚀",
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
    },

    es: {
        siteTitle: "🌌 Aventura espacial de Papyrus",
        siteSubtitle: "Explora el Sistema Solar 🚀",
        welcomeTitle: "¡Bienvenido al espacio!",
        welcomeText: "Emprende un viaje por el Sistema Solar, explora los planetas y descubre datos interesantes sobre ellos.",
        startButton: "Iniciar el viaje 🚀",
        moonsButton: "🌙 Explorar las lunas",
        constellationButton: "✨ Los sueños de Charlie Morningstar",
        planetsTitle: "🪐 Planetas",
        temperature: "Temperatura:", diameter: "Diámetro:", mass: "Masa:",
        distance: "Distancia al Sol:", day: "Duración del día:", year: "Duración del año:",
        moons: "Lunas:", rings: "Anillos:", atmosphere: "Atmósfera:",
        fact: "🔭 Dato interesante", footer: "🌌 Aventura espacial de Papyrus © 2026", close: "Cerrar"
    },

    it: {
        siteTitle: "🌌 Avventura spaziale di Papyrus",
        siteSubtitle: "Esplora il Sistema Solare 🚀",
        welcomeTitle: "Benvenuto nello spazio!",
        welcomeText: "Parti per un viaggio nel Sistema Solare, esplora i pianeti e scopri fatti interessanti su di essi.",
        startButton: "Inizia il viaggio 🚀",
        moonsButton: "🌙 Esplora le lune",
        constellationButton: "✨ I sogni di Charlie Morningstar",
        planetsTitle: "🪐 Pianeti",
        temperature: "Temperatura:", diameter: "Diametro:", mass: "Massa:",
        distance: "Distanza dal Sole:", day: "Durata del giorno:", year: "Durata dell'anno:",
        moons: "Lune:", rings: "Anelli:", atmosphere: "Atmosfera:",
        fact: "🔭 Curiosità", footer: "🌌 Avventura spaziale di Papyrus © 2026", close: "Chiudi"
    },

    pl: {
        siteTitle: "🌌 Kosmiczna przygoda Papyrusa",
        siteSubtitle: "Odkrywaj Układ Słoneczny 🚀",
        welcomeTitle: "Witaj w kosmosie!",
        welcomeText: "Wyrusz w podróż po Układzie Słonecznym, odkrywaj planety i poznawaj ciekawe fakty.",
        startButton: "Rozpocznij podróż 🚀",
        moonsButton: "🌙 Odkrywaj księżyce",
        constellationButton: "✨ Marzenia Charlie Morningstar",
        planetsTitle: "🪐 Planety",
        temperature: "Temperatura:", diameter: "Średnica:", mass: "Masa:",
        distance: "Odległość od Słońca:", day: "Długość doby:", year: "Długość roku:",
        moons: "Księżyce:", rings: "Pierścienie:", atmosphere: "Atmosfera:",
        fact: "🔭 Ciekawostka", footer: "🌌 Kosmiczna przygoda Papyrusa © 2026", close: "Zamknij"
    },

    nl: {
        siteTitle: "🌌 Papyrus' ruimteavontuur",
        siteSubtitle: "Verken het zonnestelsel 🚀",
        welcomeTitle: "Welkom in de ruimte!",
        welcomeText: "Ga op reis door het zonnestelsel, verken de planeten en ontdek interessante feiten.",
        startButton: "Begin de reis 🚀",
        moonsButton: "🌙 Verken de manen",
        constellationButton: "✨ Charlie Morningstars dromen",
        planetsTitle: "🪐 Planeten",
        temperature: "Temperatuur:", diameter: "Diameter:", mass: "Massa:",
        distance: "Afstand tot de zon:", day: "Lengte van de dag:", year: "Lengte van het jaar:",
        moons: "Manen:", rings: "Ringen:", atmosphere: "Atmosfeer:",
        fact: "🔭 Interessant weetje", footer: "🌌 Papyrus' ruimteavontuur © 2026", close: "Sluiten"
    },
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


/* 🇪🇸🇮🇹 Traducciones adicionales de planetas */
const planetESIT = {
    "Меркурий": {
        es: {name:"Mercurio",description:"El planeta más cercano al Sol.",rings:"No",atmosphere:"Exosfera muy tenue",fact:"Mercurio es el planeta más pequeño del Sistema Solar."},
        it: {name:"Mercurio",description:"Il pianeta più vicino al Sole.",rings:"No",atmosphere:"Esosfera molto tenue",fact:"Mercurio è il pianeta più piccolo del Sistema Solare."}
    },
    "Венера": {
        es: {name:"Venus",description:"El planeta más caliente.",rings:"No",atmosphere:"Dióxido de carbono",fact:"Venus es más caliente que Mercurio."},
        it: {name:"Venere",description:"Il pianeta più caldo.",rings:"No",atmosphere:"Anidride carbonica",fact:"Venere è più calda di Mercurio."}
    },
    "Земля": {
        es: {name:"Tierra",description:"Nuestro hogar.",rings:"No",atmosphere:"Nitrógeno y oxígeno",fact:"La Tierra es el único mundo conocido que alberga vida."},
        it: {name:"Terra",description:"La nostra casa.",rings:"No",atmosphere:"Azoto e ossigeno",fact:"La Terra è l'unico mondo conosciuto che ospita la vita."}
    },
    "Марс": {
        es: {name:"Marte",description:"El planeta rojo.",rings:"No",atmosphere:"Dióxido de carbono",fact:"En Marte se encuentra Olympus Mons, el mayor volcán del Sistema Solar."},
        it: {name:"Marte",description:"Il pianeta rosso.",rings:"No",atmosphere:"Anidride carbonica",fact:"Su Marte si trova Olympus Mons, il vulcano più grande del Sistema Solare."}
    },
    "Юпитер": {
        es: {name:"Júpiter",description:"El planeta más grande del Sistema Solar.",rings:"Sí",atmosphere:"Hidrógeno y helio",fact:"La Gran Mancha Roja es una enorme tormenta que existe desde hace siglos."},
        it: {name:"Giove",description:"Il pianeta più grande del Sistema Solare.",rings:"Sì",atmosphere:"Idrogeno ed elio",fact:"La Grande Macchia Rossa è una gigantesca tempesta che dura da secoli."}
    },
    "Сатурн": {
        es: {name:"Saturno",description:"Un planeta con magníficos anillos.",rings:"Sí",atmosphere:"Hidrógeno y helio",fact:"Los anillos de Saturno están formados principalmente por hielo y roca."},
        it: {name:"Saturno",description:"Un pianeta con magnifici anelli.",rings:"Sì",atmosphere:"Idrogeno ed elio",fact:"Gli anelli di Saturno sono composti soprattutto da ghiaccio e roccia."}
    },
    "Уран": {
        es: {name:"Urano",description:"Un gigante helado.",rings:"Sí",atmosphere:"Hidrógeno, helio y metano",fact:"Urano gira casi de lado."},
        it: {name:"Urano",description:"Un gigante ghiacciato.",rings:"Sì",atmosphere:"Idrogeno, elio e metano",fact:"Urano ruota quasi sdraiato su un fianco."}
    },
    "Нептун": {
        es: {name:"Neptuno",description:"El planeta más lejano.",rings:"Sí",atmosphere:"Hidrógeno, helio y metano",fact:"Neptuno tiene algunos de los vientos más rápidos del Sistema Solar."},
        it: {name:"Nettuno",description:"Il pianeta più lontano.",rings:"Sì",atmosphere:"Idrogeno, elio e metano",fact:"Nettuno ha alcuni dei venti più veloci del Sistema Solare."}
    },
    "Плутон": {
        es: {name:"Plutón",description:"Un planeta enano del cinturón de Kuiper.",rings:"No",atmosphere:"Nitrógeno, metano y monóxido de carbono",fact:"Plutón fue clasificado como planeta enano en 2006."},
        it: {name:"Plutone",description:"Un pianeta nano della fascia di Kuiper.",rings:"No",atmosphere:"Azoto, metano e monossido di carbonio",fact:"Plutone è stato classificato come pianeta nano nel 2006."}
    }
};

function localizePlanetNumbers(data, lang) {
    const d = {...data};
    if (lang === "es") {
        d.temperature = d.temperature.replaceAll("около", "aprox.").replaceAll("от", "de").replaceAll("до", "a");
        d.diameter = d.diameter.replaceAll("км", "km");
        d.mass = d.mass.replaceAll("кг", "kg");
        d.distance = d.distance.replace("млрд", "mil millones").replace("млн", "millones").replaceAll("км", "km");
        d.day = d.day.replace("земных суток", "días terrestres").replace("земных", "terrestres").replace("суток", "días").replace("часа", "horas").replace("ч", "h").replace("мин", "min").replace("часов", "horas");
        d.year = d.year.replace("земных лет", "años terrestres").replace("земных суток", "días terrestres").replace("Жер", "terrestres").replace("лет", "años");
    }
    if (lang === "it") {
        d.temperature = d.temperature.replaceAll("около", "circa").replaceAll("от", "da").replaceAll("до", "a");
        d.diameter = d.diameter.replaceAll("км", "km");
        d.mass = d.mass.replaceAll("кг", "kg");
        d.distance = d.distance.replace("млрд", "miliardi").replace("млн", "milioni").replaceAll("км", "km");
        d.day = d.day.replace("земных суток", "giorni terrestri").replace("земных", "terrestri").replace("суток", "giorni").replace("часа", "ore").replace("ч", "h").replace("мин", "min").replace("часов", "ore");
        d.year = d.year.replace("земных лет", "anni terrestri").replace("земных суток", "giorni terrestri").replace("лет", "anni");
    }
    return d;
}

Object.entries(planetESIT).forEach(([name, langs]) => {
    const basePlanet = planets[name];
    if (!basePlanet) return;
    Object.entries(langs).forEach(([lang, text]) => {
        basePlanet[lang] = {...localizePlanetNumbers(basePlanet.ru || {}, lang), ...text};
    });
});

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

/* 🌙 Новые спутники */
const newMoonData = {
    "Харон": { icon:"🧊", ru:{planet:"Плутон",diameter:"1 212 км",temperature:"около −220°C",description:"Крупнейший спутник Плутона.",fact:"Харон настолько велик по сравнению с Плутоном, что их иногда рассматривают как двойную систему."}, es:{planet:"Plutón",diameter:"1 212 km",temperature:"aprox. −220 °C",description:"La mayor luna de Plutón.",fact:"Caronte es tan grande respecto a Plutón que ambos forman un sistema especialmente singular."}, it:{planet:"Plutone",diameter:"1 212 km",temperature:"circa −220 °C",description:"La luna più grande di Plutone.",fact:"Caronte è così grande rispetto a Plutone che il sistema è particolarmente insolito."} },
    "Титания": { icon:"🔵", ru:{planet:"Уран",diameter:"1 578 км",temperature:"около −203°C",description:"Крупнейший спутник Урана.",fact:"Титания — крупнейшая луна Урана."}, es:{planet:"Urano",diameter:"1 578 km",temperature:"aprox. −203 °C",description:"La mayor luna de Urano.",fact:"Titania es la luna más grande de Urano."}, it:{planet:"Urano",diameter:"1 578 km",temperature:"circa −203 °C",description:"La luna più grande di Urano.",fact:"Titania è la luna più grande di Urano."} },
    "Оберон": { icon:"🌑", ru:{planet:"Уран",diameter:"1 523 км",temperature:"около −200°C",description:"Крупный внешний спутник Урана.",fact:"Оберон — самый внешний из крупных спутников Урана."}, es:{planet:"Urano",diameter:"1 523 km",temperature:"aprox. −200 °C",description:"Una gran luna exterior de Urano.",fact:"Oberón es la más exterior de las grandes lunas de Urano."}, it:{planet:"Urano",diameter:"1 523 km",temperature:"circa −200 °C",description:"Una grande luna esterna di Urano.",fact:"Oberon è la più esterna delle grandi lune di Urano."} },
    "Ариэль": { icon:"❄️", ru:{planet:"Уран",diameter:"1 158 км",temperature:"около −213°C",description:"Яркий ледяной спутник Урана.",fact:"Ариэль имеет одну из самых светлых поверхностей среди крупных спутников Урана."}, es:{planet:"Urano",diameter:"1 158 km",temperature:"aprox. −213 °C",description:"Una brillante luna helada de Urano.",fact:"Ariel tiene una de las superficies más claras entre las grandes lunas de Urano."}, it:{planet:"Urano",diameter:"1 158 km",temperature:"circa −213 °C",description:"Una brillante luna ghiacciata di Urano.",fact:"Ariel ha una delle superfici più chiare tra le grandi lune di Urano."} },
    "Рея": { icon:"⚪", ru:{planet:"Сатурн",diameter:"1 528 км",temperature:"около −174°C",description:"Второй по размеру спутник Сатурна.",fact:"Рея состоит в основном из водяного льда и каменного материала."}, es:{planet:"Saturno",diameter:"1 528 km",temperature:"aprox. −174 °C",description:"La segunda luna más grande de Saturno.",fact:"Rea está compuesta principalmente de hielo de agua y material rocoso."}, it:{planet:"Saturno",diameter:"1 528 km",temperature:"circa −174 °C",description:"La seconda luna più grande di Saturno.",fact:"Rea è composta soprattutto da ghiaccio d'acqua e materiale roccioso."} },
    "Япет": { icon:"🌗", ru:{planet:"Сатурн",diameter:"1 469 км",temperature:"около −143°C",description:"Необычный спутник Сатурна с резким контрастом поверхности.",fact:"Япет известен сильным различием яркости двух полушарий."}, es:{planet:"Saturno",diameter:"1 469 km",temperature:"aprox. −143 °C",description:"Una luna de Saturno con un marcado contraste superficial.",fact:"Jápeto es famoso por la gran diferencia de brillo entre sus hemisferios."}, it:{planet:"Saturno",diameter:"1 469 km",temperature:"circa −143 °C",description:"Una luna di Saturno con un forte contrasto superficiale.",fact:"Giapeto è famoso per la grande differenza di luminosità tra i suoi emisferi."} }
};
Object.assign(moons, newMoonData);

const newMoonOtherLanguages = {
    "Харон": {
        kk:{planet:"Плутон",description:"Плутонның ең үлкен серігі.",fact:"Харон Плутонмен салыстырғанда өте үлкен, сондықтан бұл жүйе ерекше қос жүйе ретінде қарастырылады."},
        cs:{planet:"Pluto",description:"Největší měsíc Pluta.",fact:"Charon je vzhledem k Plutu velmi velký a tvoří s ním neobvyklý systém."},
        en:{planet:"Pluto",description:"The largest moon of Pluto.",fact:"Charon is unusually large compared with Pluto."},
        de:{planet:"Pluto",description:"Der größte Mond von Pluto.",fact:"Charon ist im Verhältnis zu Pluto ungewöhnlich groß."},
        fr:{planet:"Pluton",description:"La plus grande lune de Pluton.",fact:"Charon est exceptionnellement grand par rapport à Pluton."}
    },
    "Титания": {kk:{planet:"Уран",description:"Уранның ең үлкен серігі.",fact:"Титания — Уранның ең үлкен серігі."},cs:{planet:"Uran",description:"Největší měsíc Uranu.",fact:"Titania je největší měsíc Uranu."},en:{planet:"Uranus",description:"The largest moon of Uranus.",fact:"Titania is Uranus's largest moon."},de:{planet:"Uranus",description:"Der größte Mond des Uranus.",fact:"Titania ist der größte Mond des Uranus."},fr:{planet:"Uranus",description:"La plus grande lune d'Uranus.",fact:"Titania est la plus grande lune d'Uranus."}},
    "Оберон": {kk:{planet:"Уран",description:"Уранның ірі сыртқы серігі.",fact:"Оберон — Уранның ірі серіктерінің ең сыртқыларының бірі."},cs:{planet:"Uran",description:"Velký vnější měsíc Uranu.",fact:"Oberon patří mezi nejvzdálenější velké měsíce Uranu."},en:{planet:"Uranus",description:"A large outer moon of Uranus.",fact:"Oberon is one of Uranus's outer large moons."},de:{planet:"Uranus",description:"Ein großer äußerer Mond des Uranus.",fact:"Oberon gehört zu den äußeren großen Monden des Uranus."},fr:{planet:"Uranus",description:"Une grande lune extérieure d'Uranus.",fact:"Obéron fait partie des grandes lunes extérieures d'Uranus."}},
    "Ариэль": {kk:{planet:"Уран",description:"Уранның жарқын мұзды серігі.",fact:"Ариэль Уранның ірі серіктерінің арасында ең жарық беттердің біріне ие."},cs:{planet:"Uran",description:"Jasný ledový měsíc Uranu.",fact:"Ariel má jeden z nejjasnějších povrchů mezi velkými měsíci Uranu."},en:{planet:"Uranus",description:"A bright icy moon of Uranus.",fact:"Ariel has one of the brightest surfaces among Uranus's large moons."},de:{planet:"Uranus",description:"Ein heller Eismond des Uranus.",fact:"Ariel besitzt eine der hellsten Oberflächen unter den großen Uranusmonden."},fr:{planet:"Uranus",description:"Une lune glacée et brillante d'Uranus.",fact:"Ariel possède l'une des surfaces les plus claires des grandes lunes d'Uranus."}},
    "Рея": {kk:{planet:"Сатурн",description:"Сатурнның көлемі бойынша екінші серігі.",fact:"Рея негізінен су мұзы мен тасты материалдан тұрады."},cs:{planet:"Saturn",description:"Druhý největší měsíc Saturnu.",fact:"Rhea se skládá převážně z vodního ledu a hornin."},en:{planet:"Saturn",description:"The second-largest moon of Saturn.",fact:"Rhea is composed mainly of water ice and rock."},de:{planet:"Saturn",description:"Der zweitgrößte Mond des Saturn.",fact:"Rhea besteht hauptsächlich aus Wassereis und Gestein."},fr:{planet:"Saturne",description:"La deuxième plus grande lune de Saturne.",fact:"Rhéa est principalement composée de glace d'eau et de roches."}},
    "Япет": {kk:{planet:"Сатурн",description:"Бетінде айқын контраст бар ерекше серік.",fact:"Япет екі жарты шарының жарықтығымен қатты ерекшеленеді."},cs:{planet:"Saturn",description:"Neobvyklý měsíc Saturnu s výrazným kontrastem povrchu.",fact:"Iapetus je známý výrazným rozdílem jasu svých polokoulí."},en:{planet:"Saturn",description:"An unusual moon of Saturn with strong surface contrast.",fact:"Iapetus is known for the striking brightness difference between its hemispheres."},de:{planet:"Saturn",description:"Ein ungewöhnlicher Saturnmond mit starkem Oberflächenkontrast.",fact:"Iapetus ist für den starken Helligkeitsunterschied seiner Hemisphären bekannt."},fr:{planet:"Saturne",description:"Une lune de Saturne au fort contraste de surface.",fact:"Japet est connu pour la différence marquée de luminosité entre ses hémisphères."}}
};
Object.entries(newMoonOtherLanguages).forEach(([name,langs])=>{Object.entries(langs).forEach(([lang,data])=>{moons[name][lang]={...moons[name].ru,...data};});});

/* Локализуем единицы измерения новых спутников во всех уже доступных языках. */
const newMoonMeasurementText = {
    kk:{unit:"км",about:"шамамен",degree:" °C"},
    cs:{unit:"km",about:"přibližně",degree:" °C"},
    en:{unit:"km",about:"about",degree:"°C"},
    de:{unit:"km",about:"etwa",degree:" °C"},
    fr:{unit:"km",about:"environ",degree:" °C"},
    es:{unit:"km",about:"aprox.",degree:" °C"},
    it:{unit:"km",about:"circa",degree:" °C"}
};
for (const [moonName, translations] of Object.entries(newMoonOtherLanguages)) {
    const base = moons[moonName]?.ru;
    if (!base) continue;
    const diameterMatch = String(base.diameter).match(/[0-9][0-9\s]*/);
    const temperatureMatch = String(base.temperature).match(/[−-]\s*\d+/);
    for (const [lang, labels] of Object.entries(newMoonMeasurementText)) {
        if (!moons[moonName][lang]) continue;
        if (diameterMatch) {
            const amount = diameterMatch[0].trim().replace(/\s+/g, lang === "en" ? "," : lang === "de" ? "." : " ");
            moons[moonName][lang].diameter = `${amount} ${labels.unit}`;
        }
        if (temperatureMatch) {
            moons[moonName][lang].temperature = `${labels.about} ${temperatureMatch[0].replace(/\s+/g, "")}${labels.degree}`;
        }
    }
}



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


/* 🇪🇸🇮🇹 Traducciones adicionales de lunas */
const moonESIT = {
    "Луна": {
        es: { planet: 'Earth', description: 'La Luna es el satélite natural de la Tierra.', fact: 'La Luna siempre muestra la misma cara a la Tierra.' },
        it: { planet: 'Terra', description: 'La Luna è il satellite naturale della Terra.', fact: 'La Luna mostra sempre lo stesso lato alla Terra.' }
    },
    "Фобос": {
        es: { planet: 'Mars', description: 'Fobos es el satélite más cercano a Marte.', fact: 'Fobos se acerca gradualmente a Marte.' },
        it: { planet: 'Marte', description: 'Fobos è il satellite più vicino a Marte.', fact: 'Fobos si sta avvicinando gradualmente a Marte.' }
    },
    "Деймос": {
        es: { planet: 'Mars', description: 'Deimos es un pequeño satélite de Marte.', fact: 'El nombre Deimos significa «terror».' },
        it: { planet: 'Marte', description: 'Deimos è una piccola luna di Marte.', fact: 'Deimos è una piccola luna di Marte.' }
    },
    "Ио": {
        es: { planet: 'Júpiter', description: 'Ío es un mundo volcánicamente activo.', fact: 'Ío es el mundo con mayor actividad volcánica del Sistema Solar.' },
        it: { planet: 'Giove', description: 'Io è una luna vulcanicamente attiva.', fact: 'Io è il mondo vulcanicamente più attivo del Sistema Solare.' }
    },
    "Европа": {
        es: { planet: 'Júpiter', description: 'Europa es una luna helada de Júpiter.', fact: 'Probablemente hay un océano bajo su superficie helada.' },
        it: { planet: 'Giove', description: 'Europa è una luna ghiacciata di Giove.', fact: 'Sotto la sua superficie ghiacciata potrebbe esserci un oceano.' }
    },
    "Ганимед": {
        es: { planet: 'Júpiter', description: 'Ganímedes es la luna más grande del Sistema Solar.', fact: 'Ganímedes es la luna más grande del Sistema Solar.' },
        it: { planet: 'Giove', description: 'Ganimede è la luna più grande del Sistema Solare.', fact: 'Ganimede è la luna più grande del Sistema Solare.' }
    },
    "Каллисто": {
        es: { planet: 'Júpiter', description: 'Calisto es una de las grandes lunas de Júpiter.', fact: 'La superficie de Calisto está cubierta de numerosos cráteres de impacto.' },
        it: { planet: 'Giove', description: 'Callisto è una delle lune più grandi di Giove.', fact: 'La superficie di Callisto è ricoperta da numerosi crateri d’impatto.' }
    },
    "Титан": {
        es: { planet: 'Saturno', description: 'Titán es la luna más grande de Saturno.', fact: 'Titán tiene una atmósfera densa y lagos de hidrocarburos líquidos.' },
        it: { planet: 'Saturno', description: 'Titano è la luna più grande di Saturno.', fact: 'Titano possiede una densa atmosfera e laghi di idrocarburi liquidi.' }
    },
    "Энцелад": {
        es: { planet: 'Saturno', description: 'Encélado es una luna helada de Saturno.', fact: 'Desde su región austral brotan chorros de vapor de agua y hielo.' },
        it: { planet: 'Saturno', description: 'Encelado è una luna ghiacciata di Saturno.', fact: 'Dalla sua regione meridionale fuoriescono pennacchi di vapore acqueo e ghiaccio.' }
    },
    "Тритон": {
        es: { planet: 'Neptuno', description: 'Tritón es la luna más grande de Neptuno.', fact: 'Tritón orbita Neptuno en sentido contrario al giro del planeta.' },
        it: { planet: 'Nettuno', description: 'Tritone è la luna più grande di Nettuno.', fact: 'Tritone orbita intorno a Nettuno in direzione opposta alla rotazione del pianeta.' }
    },
};

Object.entries(moonESIT).forEach(([name, langs]) => {
    const moon = moons[name];
    if (!moon) return;
    Object.entries(langs).forEach(([lang, text]) => {
        moon[lang] = { ...(moon.ru || {}), ...text };
    });
});

moonCardNames.es = {
    "Луна":"Luna","Фобос":"Fobos","Деймос":"Deimos","Ио":"Ío","Европа":"Europa","Ганимед":"Ganímedes","Каллисто":"Calisto","Титан":"Titán","Энцелад":"Encélado","Тритон":"Tritón",
    "Харон":"Caronte","Титания":"Titania","Оберон":"Oberón","Ариэль":"Ariel","Рея":"Rea","Япет":"Jápeto"
};
moonCardNames.it = {
    "Луна":"Luna","Фобос":"Fobos","Деймос":"Deimos","Ио":"Io","Европа":"Europa","Ганимед":"Ganimede","Каллисто":"Callisto","Титан":"Titano","Энцелад":"Encelado","Тритон":"Tritone",
    "Харон":"Caronte","Титания":"Titania","Оберон":"Oberon","Ариэль":"Ariel","Рея":"Rea","Япет":"Giapeto"
};

moonCardNames.kk = {...moonCardNames.kk,"Харон":"Харон","Титания":"Титания","Оберон":"Оберон","Ариэль":"Ариэль","Рея":"Рея","Япет":"Япет"};
moonCardNames.cs = {...moonCardNames.cs,"Харон":"Charon","Титания":"Titania","Оберон":"Oberon","Ариэль":"Ariel","Рея":"Rhea","Япет":"Iapetus"};
moonCardNames.en = {...moonCardNames.en,"Харон":"Charon","Титания":"Titania","Оберон":"Oberon","Ариэль":"Ariel","Рея":"Rhea","Япет":"Iapetus"};
moonCardNames.de = {...moonCardNames.de,"Харон":"Charon","Титания":"Titania","Оберон":"Oberon","Ариэль":"Ariel","Рея":"Rhea","Япет":"Iapetus"};
moonCardNames.fr = {...moonCardNames.fr,"Харон":"Charon","Титания":"Titania","Оберон":"Obéron","Ариэль":"Ariel","Рея":"Rhéa","Япет":"Japet"};

moonCardTranslations.es = Object.fromEntries(Object.entries(moonESIT).map(([k,v]) => [k,v.es.description]));
moonCardTranslations.es["Харон"]="La mayor luna de Plutón."; moonCardTranslations.es["Титания"]="La mayor luna de Urano."; moonCardTranslations.es["Оберон"]="Una gran luna exterior de Urano."; moonCardTranslations.es["Ариэль"]="Una brillante luna helada de Urano."; moonCardTranslations.es["Рея"]="La segunda luna más grande de Saturno."; moonCardTranslations.es["Япет"]="Una luna de Saturno con un gran contraste superficial.";
moonCardTranslations.it = Object.fromEntries(Object.entries(moonESIT).map(([k,v]) => [k,v.it.description]));
moonCardTranslations.it["Харон"]="La luna più grande di Plutone."; moonCardTranslations.it["Титания"]="La luna più grande di Urano."; moonCardTranslations.it["Оберон"]="Una grande luna esterna di Urano."; moonCardTranslations.it["Ариэль"]="Una brillante luna ghiacciata di Urano."; moonCardTranslations.it["Рея"]="La seconda luna più grande di Saturno."; moonCardTranslations.it["Япет"]="Una luna di Saturno con un forte contrasto superficiale.";
Object.keys(newMoonOtherLanguages).forEach(name=>{
    ["kk","cs","en","de","fr"].forEach(lang=>{
        moonCardTranslations[lang][name]=newMoonOtherLanguages[name][lang].description;
    });
});


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
   ♇ КАРЛИКОВЫЕ ПЛАНЕТЫ
   ========================================================= */

const dwarfPlanets = {
    "Церера": { icon:"⚪", ru:{name:"Церера",description:"Карликовая планета главного пояса астероидов.",diameter:"≈ 940 км",distance:"≈ 413 млн км",moons:"0",fact:"Церера — крупнейший объект главного пояса астероидов."}, es:{name:"Ceres",description:"Un planeta enano del cinturón principal de asteroides.",diameter:"≈ 940 km",distance:"≈ 413 millones de km",moons:"0",fact:"Ceres es el objeto más grande del cinturón principal de asteroides."}, it:{name:"Cerere",description:"Un pianeta nano della fascia principale degli asteroidi.",diameter:"≈ 940 km",distance:"≈ 413 milioni di km",moons:"0",fact:"Cerere è il più grande oggetto della fascia principale degli asteroidi."} },
    "Эрида": { icon:"🧊", ru:{name:"Эрида",description:"Очень далёкий карликовый мир рассеянного диска.",diameter:"≈ 2 326 км",distance:"≈ 10,1 млрд км",moons:"1",fact:"Эрида помогла пересмотреть определение планеты в Солнечной системе."}, es:{name:"Eris",description:"Un mundo enano muy lejano del disco disperso.",diameter:"≈ 2 326 km",distance:"≈ 10,1 mil millones de km",moons:"1",fact:"Eris ayudó a impulsar el debate que llevó a redefinir el término planeta."}, it:{name:"Eris",description:"Un mondo nano molto lontano del disco diffuso.",diameter:"≈ 2 326 km",distance:"≈ 10,1 miliardi di km",moons:"1",fact:"Eris contribuì al dibattito che portò a ridefinire il termine pianeta."} },
    "Хаумеа": { icon:"🥚", ru:{name:"Хаумеа",description:"Быстро вращающийся карликовый мир пояса Койпера.",diameter:"≈ 1 560 км",distance:"≈ 6,5 млрд км",moons:"2",fact:"Хаумеа имеет необычную вытянутую форму из-за быстрого вращения."}, es:{name:"Haumea",description:"Un mundo enano del cinturón de Kuiper que gira muy rápido.",diameter:"≈ 1 560 km",distance:"≈ 6,5 mil millones de km",moons:"2",fact:"Haumea tiene una forma alargada causada por su rápida rotación."}, it:{name:"Haumea",description:"Un mondo nano della fascia di Kuiper che ruota molto rapidamente.",diameter:"≈ 1 560 km",distance:"≈ 6,5 miliardi di km",moons:"2",fact:"Haumea ha una forma allungata dovuta alla sua rapida rotazione."} },
    "Макемаке": { icon:"🧊", ru:{name:"Макемаке",description:"Ледяной карликовый мир за орбитой Нептуна.",diameter:"≈ 1 430 км",distance:"≈ 6,8 млрд км",moons:"1",fact:"Макемаке — один из крупнейших известных объектов пояса Койпера."}, es:{name:"Makemake",description:"Un mundo enano helado más allá de la órbita de Neptuno.",diameter:"≈ 1 430 km",distance:"≈ 6,8 mil millones de km",moons:"1",fact:"Makemake es uno de los mayores objetos conocidos del cinturón de Kuiper."}, it:{name:"Makemake",description:"Un mondo nano ghiacciato oltre l'orbita di Nettuno.",diameter:"≈ 1 430 km",distance:"≈ 6,8 miliardi di km",moons:"1",fact:"Makemake è uno dei maggiori oggetti conosciuti della fascia di Kuiper."} }
};

const dwarfPlanetCardTranslations = {
    ru:{"Церера":["Церера","Крупнейший объект главного пояса астероидов и карликовая планета."],"Эрида":["Эрида","Далёкий карликовый мир рассеянного диска."],"Хаумеа":["Хаумеа","Быстро вращающийся карликовый мир пояса Койпера."],"Макемаке":["Макемаке","Яркий ледяной карликовый мир за орбитой Нептуна."]},
    es:{"Церера":["Ceres","El mayor objeto del cinturón principal de asteroides y un planeta enano."],"Эрида":["Eris","Un mundo enano lejano del disco disperso."],"Хаумеа":["Haumea","Un mundo enano del cinturón de Kuiper que gira rápidamente."],"Макемаке":["Makemake","Un mundo enano helado más allá de Neptuno."]},
    it:{"Церера":["Cerere","Il più grande oggetto della fascia principale degli asteroidi e un pianeta nano."],"Эрида":["Eris","Un lontano mondo nano del disco diffuso."],"Хаумеа":["Haumea","Un mondo nano della fascia di Kuiper dalla rapida rotazione."],"Макемаке":["Makemake","Un mondo nano ghiacciato oltre Nettuno."]}
};

function updateDwarfPlanetCards(){
    document.querySelectorAll('.dwarf-planet-card').forEach(card=>{
        const name=card.dataset.dwarf; const data=dwarfPlanetCardTranslations[currentLanguage]?.[name] || dwarfPlanetCardTranslations.ru[name];
        if(!data)return; const h=card.querySelector('h3'); const p=card.querySelector('p'); if(h)h.textContent=data[0]; if(p)p.textContent=data[1];
        const img=card.querySelector('img'); if(img)img.alt=data[0];
    });
}

function showDwarfPlanet(name){
    const item=dwarfPlanets[name]; if(!item)return; const data=item[currentLanguage]||item.ru; const modal=document.getElementById('dwarfPlanetModal'); if(!modal)return;
    modal.dataset.dwarf=name;
    document.getElementById('dwarfPlanetIcon').textContent=item.icon;
    document.getElementById('dwarfPlanetName').textContent=data.name;
    document.getElementById('dwarfPlanetDescription').textContent=data.description;
    document.getElementById('dwarfDiameter').textContent=data.diameter;
    document.getElementById('dwarfDistance').textContent=data.distance;
    document.getElementById('dwarfMoons').textContent=data.moons;
    document.getElementById('dwarfFact').textContent=data.fact;
    modal.classList.add('active'); document.body.style.overflow='hidden';
}

function closeDwarfPlanet(){ const modal=document.getElementById('dwarfPlanetModal'); if(modal){modal.classList.remove('active');modal.dataset.dwarf='';} if(!document.querySelector('.planet-modal.active,.moon-modal.active,.updates-modal.active'))document.body.style.overflow=''; }

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

        const data = {...planet.ru, ...(planet[currentLanguage] || {})};

        const title = card.querySelector("h2, h3");
        const description = card.querySelector("p");

        if (title) {
            title.textContent = data.name;
        }

        if (description) {
            description.textContent = data.description;
        }

        const image = card.querySelector("img");
        if (image) {
            image.alt = data.name;
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

        const localizedName = moonCardNames[currentLanguage]?.[name] || name;
        if (title) {
            title.textContent = localizedName;
        }

        if (description) {
            description.textContent =
                moonCardTranslations[currentLanguage]?.[name] || moonCardTranslations.ru?.[name] || "";
        }

        const image = card.querySelector("img");
        if (image) {
            image.alt = localizedName;
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

    const data = {...planet.ru, ...(planet[currentLanguage] || {})};

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
        },

        es: {
            planet: "Planeta:", diameter: "Diámetro:", temperature: "Temperatura:", fact: "Dato interesante:"
        },

        it: {
            planet: "Pianeta:", diameter: "Diametro:", temperature: "Temperatura:", fact: "Curiosità:"
        },
        pl: {
            planet: "Planeta:", diameter: "Średnica:", temperature: "Temperatura:", fact: "Ciekawostka:"
        },
        nl: {
            planet: "Planeet:", diameter: "Diameter:", temperature: "Temperatuur:", fact: "Interessant feit:"
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

            fr: "← Retour à l'aventure spatiale",
            es: "← Volver a la aventura espacial",
            it: "← Torna all’avventura spaziale",
            pl: "← Wróć do kosmicznej przygody",
            nl: "← Terug naar het ruimteavontuur"
        };

        backButton.textContent =
            backText[currentLanguage] || backText.ru;
    }
}




/* =========================================================
   🌐 ДОПОЛНИТЕЛЬНАЯ ЛОКАЛИЗАЦИЯ: PL / NL И НОВЫЕ РАЗДЕЛЫ
   ========================================================= */

Object.assign(languages, {
    pl: {
        siteTitle: "🌌 Kosmiczna przygoda Papyrusa",
        siteSubtitle: "Odkrywaj Układ Słoneczny 🚀",
        welcomeTitle: "Witaj w kosmosie!",
        welcomeText: "Wyrusz w podróż po Układzie Słonecznym, odkrywaj planety i poznawaj ciekawostki na ich temat.",
        startButton: "Rozpocznij podróż 🚀",
        moonsButton: "🌙 Odkrywaj księżyce",
        constellationButton: "✨ Marzenia Charlie Morningstar",
        planetsTitle: "🪐 Planety",
        temperature: "Temperatura:", diameter: "Średnica:", mass: "Masa:", distance: "Odległość od Słońca:",
        day: "Długość doby:", year: "Długość roku:", moons: "Księżyce:", rings: "Pierścienie:", atmosphere: "Atmosfera:",
        fact: "🔭 Ciekawostka", footer: "🌌 Kosmiczna przygoda Papyrusa © 2026", close: "Zamknij",
        encyclopediaButton: "📚 Encyklopedia Caine’a"
    },
    nl: {
        siteTitle: "🌌 Papyrus’ ruimteavontuur",
        siteSubtitle: "Verken het zonnestelsel 🚀",
        welcomeTitle: "Welkom in de ruimte!",
        welcomeText: "Ga op reis door het zonnestelsel, verken de planeten en ontdek interessante feiten over ze.",
        startButton: "Begin de reis 🚀",
        moonsButton: "🌙 Verken de manen",
        constellationButton: "✨ Charlie Morningstars dromen",
        planetsTitle: "🪐 Planeten",
        temperature: "Temperatuur:", diameter: "Diameter:", mass: "Massa:", distance: "Afstand tot de zon:",
        day: "Lengte van de dag:", year: "Lengte van het jaar:", moons: "Manen:", rings: "Ringen:", atmosphere: "Atmosfeer:",
        fact: "🔭 Interessant feit", footer: "🌌 Papyrus’ ruimteavontuur © 2026", close: "Sluiten",
        encyclopediaButton: "📚 Caines encyclopedie"
    }
});

const planetPLNL = {
    "Меркурий": {
        pl: {name:"Merkury",description:"Planeta znajdująca się najbliżej Słońca.",temperature:"od −180°C do +430°C",diameter:"4 879 km",mass:"3,30 × 10²³ kg",distance:"57,9 mln km",day:"58,6 doby ziemskiej",year:"88 dni ziemskich",moons:"0",rings:"Nie",atmosphere:"Bardzo rzadka egzosfera",fact:"Merkury jest najmniejszą planetą Układu Słonecznego."},
        nl: {name:"Mercurius",description:"De planeet die het dichtst bij de zon staat.",temperature:"van −180°C tot +430°C",diameter:"4.879 km",mass:"3,30 × 10²³ kg",distance:"57,9 miljoen km",day:"58,6 aardse dagen",year:"88 aardse dagen",moons:"0",rings:"Nee",atmosphere:"Zeer ijle exosfeer",fact:"Mercurius is de kleinste planeet van het zonnestelsel."}
    },
    "Венера": {
        pl: {name:"Wenus",description:"Najgorętsza planeta Układu Słonecznego.",temperature:"około +465°C",diameter:"12 104 km",mass:"4,87 × 10²⁴ kg",distance:"108,2 mln km",day:"243 doby ziemskie",year:"224,7 doby ziemskiej",moons:"0",rings:"Nie",atmosphere:"Głównie dwutlenek węgla",fact:"Wenus jest gorętsza od Merkurego."},
        nl: {name:"Venus",description:"De heetste planeet van het zonnestelsel.",temperature:"ongeveer +465°C",diameter:"12.104 km",mass:"4,87 × 10²⁴ kg",distance:"108,2 miljoen km",day:"243 aardse dagen",year:"224,7 aardse dagen",moons:"0",rings:"Nee",atmosphere:"Voornamelijk koolstofdioxide",fact:"Venus is heter dan Mercurius."}
    },
    "Земля": {
        pl: {name:"Ziemia",description:"Nasza rodzinna planeta.",temperature:"średnio +15°C",diameter:"12 742 km",mass:"5,97 × 10²⁴ kg",distance:"149,6 mln km",day:"23 godz. 56 min",year:"365,25 doby",moons:"1",rings:"Nie",atmosphere:"Azot i tlen",fact:"Ziemia jest jedyną znaną planetą, na której istnieje życie."},
        nl: {name:"Aarde",description:"Onze thuisplaneet.",temperature:"gemiddeld +15°C",diameter:"12.742 km",mass:"5,97 × 10²⁴ kg",distance:"149,6 miljoen km",day:"23 uur 56 min",year:"365,25 dagen",moons:"1",rings:"Nee",atmosphere:"Stikstof en zuurstof",fact:"De aarde is de enige bekende planeet waarop leven voorkomt."}
    },
    "Марс": {
        pl: {name:"Mars",description:"Czerwona planeta.",temperature:"średnio około −63°C",diameter:"6 779 km",mass:"6,42 × 10²³ kg",distance:"227,9 mln km",day:"24 godz. 37 min",year:"687 dni ziemskich",moons:"2",rings:"Nie",atmosphere:"Głównie dwutlenek węgla",fact:"Na Marsie znajduje się Olympus Mons, największy wulkan w Układzie Słonecznym."},
        nl: {name:"Mars",description:"De rode planeet.",temperature:"gemiddeld ongeveer −63°C",diameter:"6.779 km",mass:"6,42 × 10²³ kg",distance:"227,9 miljoen km",day:"24 uur 37 min",year:"687 aardse dagen",moons:"2",rings:"Nee",atmosphere:"Voornamelijk koolstofdioxide",fact:"Op Mars ligt Olympus Mons, de grootste vulkaan van het zonnestelsel."}
    },
    "Юпитер": {
        pl: {name:"Jowisz",description:"Największa planeta Układu Słonecznego.",temperature:"około −110°C na poziomie chmur",diameter:"139 820 km",mass:"1,90 × 10²⁷ kg",distance:"778,5 mln km",day:"9 godz. 56 min",year:"11,86 roku ziemskiego",moons:"95+",rings:"Tak",atmosphere:"Wodór i hel",fact:"Wielka Czerwona Plama to olbrzymia burza obserwowana od stuleci."},
        nl: {name:"Jupiter",description:"De grootste planeet van het zonnestelsel.",temperature:"ongeveer −110°C bij de wolkentoppen",diameter:"139.820 km",mass:"1,90 × 10²⁷ kg",distance:"778,5 miljoen km",day:"9 uur 56 min",year:"11,86 aardse jaren",moons:"95",rings:"Ja",atmosphere:"Waterstof en helium",fact:"De Grote Rode Vlek is een enorme storm die al eeuwen wordt waargenomen."}
    },
    "Сатурн": {
        pl: {name:"Saturn",description:"Gazowy olbrzym słynący z efektownych pierścieni.",temperature:"około −140°C na poziomie chmur",diameter:"116 460 km",mass:"5,68 × 10²⁶ kg",distance:"1,43 mld km",day:"10 godz. 42 min",year:"29,45 roku ziemskiego",moons:"140+",rings:"Tak",atmosphere:"Wodór i hel",fact:"Pierścienie Saturna składają się głównie z lodu i odłamków skalnych."},
        nl: {name:"Saturnus",description:"Een gasreus die bekendstaat om zijn opvallende ringen.",temperature:"ongeveer −140°C bij de wolkentoppen",diameter:"116.460 km",mass:"5,68 × 10²⁶ kg",distance:"1,43 miljard km",day:"10 uur 42 min",year:"29,45 aardse jaren",moons:"146",rings:"Ja",atmosphere:"Waterstof en helium",fact:"De ringen van Saturnus bestaan vooral uit ijs en rotsachtig materiaal."}
    },
    "Уран": {
        pl: {name:"Uran",description:"Lodowy olbrzym obracający się niemal na boku.",temperature:"około −195°C",diameter:"50 724 km",mass:"8,68 × 10²⁵ kg",distance:"2,87 mld km",day:"17 godz. 14 min",year:"84 lata ziemskie",moons:"27",rings:"Tak",atmosphere:"Wodór, hel i metan",fact:"Oś obrotu Urana jest nachylona tak mocno, że planeta obraca się niemal na boku."},
        nl: {name:"Uranus",description:"Een ijsreus die vrijwel op zijn zij draait.",temperature:"ongeveer −195°C",diameter:"50.724 km",mass:"8,68 × 10²⁵ kg",distance:"2,87 miljard km",day:"17 uur 14 min",year:"84 aardse jaren",moons:"28",rings:"Ja",atmosphere:"Waterstof, helium en methaan",fact:"De as van Uranus helt zo sterk dat de planeet bijna op zijn zij draait."}
    },
    "Нептун": {
        pl: {name:"Neptun",description:"Daleka, błękitna planeta o bardzo silnych wiatrach.",temperature:"około −200°C",diameter:"49 244 km",mass:"1,02 × 10²⁶ kg",distance:"4,50 mld km",day:"16 godz. 6 min",year:"164,8 roku ziemskiego",moons:"14",rings:"Tak",atmosphere:"Wodór, hel i metan",fact:"Na Neptunie występują jedne z najszybszych wiatrów w Układzie Słonecznym."},
        nl: {name:"Neptunus",description:"Een verre blauwe planeet met zeer krachtige winden.",temperature:"ongeveer −200°C",diameter:"49.244 km",mass:"1,02 × 10²⁶ kg",distance:"4,50 miljard km",day:"16 uur 6 min",year:"164,8 aardse jaren",moons:"16",rings:"Ja",atmosphere:"Waterstof, helium en methaan",fact:"Neptunus heeft enkele van de snelste winden in het zonnestelsel."}
    },
    "Плутон": {
        pl: {name:"Pluton",description:"Planeta karłowata w Pasie Kuipera.",temperature:"około −230°C",diameter:"2 377 km",mass:"1,31 × 10²² kg",distance:"około 5,9 mld km",day:"153,3 godziny",year:"248 lat ziemskich",moons:"5",rings:"Nie",atmosphere:"Azot, metan i tlenek węgla",fact:"W 2006 roku Pluton został sklasyfikowany jako planeta karłowata."},
        nl: {name:"Pluto",description:"Een dwergplaneet in de Kuipergordel.",temperature:"ongeveer −230°C",diameter:"2.377 km",mass:"1,30 × 10²² kg",distance:"ongeveer 5,9 miljard km",day:"153,3 uur",year:"248 aardse jaren",moons:"5",rings:"Nee",atmosphere:"Stikstof, methaan en koolstofmonoxide",fact:"Pluto werd in 2006 geclassificeerd als dwergplaneet."}
    }
};
Object.entries(planetPLNL).forEach(([name, translations]) => {
    if (!planets[name]) return;
    Object.entries(translations).forEach(([lang, data]) => {
        planets[name][lang] = {...data};
    });
});

const moonPLNL = {
    "Луна": {pl:{planet:"Ziemia",diameter:"3 474 km",temperature:"od −173°C do +127°C",description:"Naturalny satelita Ziemi.",fact:"Księżyc zawsze zwraca ku Ziemi niemal tę samą stronę."},nl:{planet:"Aarde",diameter:"3.474 km",temperature:"van −173°C tot +127°C",description:"De natuurlijke satelliet van de aarde.",fact:"De maan laat de aarde steeds vrijwel dezelfde kant zien."}},
    "Фобос": {pl:{planet:"Mars",diameter:"około 22 km",temperature:"bardzo niska",description:"Największy i bliższy Marsowi z jego dwóch księżyców.",fact:"Fobos stopniowo zbliża się do Marsa."},nl:{planet:"Mars",diameter:"ongeveer 22 km",temperature:"zeer laag",description:"De grootste en dichtstbijzijnde van de twee manen van Mars.",fact:"Phobos komt langzaam dichter bij Mars."}},
    "Деймос": {pl:{planet:"Mars",diameter:"około 12 km",temperature:"bardzo niska",description:"Niewielki księżyc Marsa.",fact:"Nazwa Deimos oznacza „grozę”."},nl:{planet:"Mars",diameter:"ongeveer 12 km",temperature:"zeer laag",description:"Een kleine maan van Mars.",fact:"De naam Deimos betekent ‘angst’ of ‘schrik’."}},
    "Ио": {pl:{planet:"Jowisz",diameter:"3 643 km",temperature:"około −130°C",description:"Księżyc Jowisza z niezwykle aktywnymi wulkanami.",fact:"Io jest najbardziej aktywnym wulkanicznie światem w Układzie Słonecznym."},nl:{planet:"Jupiter",diameter:"3.643 km",temperature:"ongeveer −130°C",description:"Een maan van Jupiter met zeer actieve vulkanen.",fact:"Io is de vulkanisch actiefste wereld in het zonnestelsel."}},
    "Европа": {pl:{planet:"Jowisz",diameter:"3 122 km",temperature:"około −160°C",description:"Lodowy księżyc Jowisza.",fact:"Pod lodową powierzchnią Europy prawdopodobnie znajduje się ocean."},nl:{planet:"Jupiter",diameter:"3.122 km",temperature:"ongeveer −160°C",description:"Een ijzige maan van Jupiter.",fact:"Onder het ijzige oppervlak bevindt zich waarschijnlijk een oceaan."}},
    "Ганимед": {pl:{planet:"Jowisz",diameter:"5 268 km",temperature:"około −160°C",description:"Największy księżyc w Układzie Słonecznym.",fact:"Ganimedes ma większą średnicę niż Merkury."},nl:{planet:"Jupiter",diameter:"5.268 km",temperature:"ongeveer −160°C",description:"De grootste maan van het zonnestelsel.",fact:"Ganymedes heeft een grotere diameter dan Mercurius."}},
    "Каллисто": {pl:{planet:"Jowisz",diameter:"4 821 km",temperature:"około −140°C",description:"Jeden z największych księżyców Jowisza.",fact:"Powierzchnię Kallisto pokrywają liczne kratery uderzeniowe."},nl:{planet:"Jupiter",diameter:"4.821 km",temperature:"ongeveer −140°C",description:"Een van de grootste manen van Jupiter.",fact:"Het oppervlak van Callisto is bedekt met veel inslagkraters."}},
    "Титан": {pl:{planet:"Saturn",diameter:"5 150 km",temperature:"około −179°C",description:"Największy księżyc Saturna.",fact:"Tytan ma gęstą atmosferę oraz jeziora ciekłych węglowodorów."},nl:{planet:"Saturnus",diameter:"5.150 km",temperature:"ongeveer −179°C",description:"De grootste maan van Saturnus.",fact:"Titan heeft een dichte atmosfeer en meren van vloeibare koolwaterstoffen."}},
    "Энцелад": {pl:{planet:"Saturn",diameter:"około 504 km",temperature:"około −200°C",description:"Niewielki lodowy księżyc Saturna.",fact:"Z jego południowego obszaru tryskają pióropusze pary wodnej i lodu."},nl:{planet:"Saturnus",diameter:"ongeveer 504 km",temperature:"ongeveer −200°C",description:"Een kleine ijzige maan van Saturnus.",fact:"Uit het zuidelijke gebied spuiten pluimen van waterdamp en ijs."}},
    "Тритон": {pl:{planet:"Neptun",diameter:"2 707 km",temperature:"około −235°C",description:"Największy księżyc Neptuna.",fact:"Triton krąży wokół Neptuna w kierunku przeciwnym do obrotu planety."},nl:{planet:"Neptunus",diameter:"2.707 km",temperature:"ongeveer −235°C",description:"De grootste maan van Neptunus.",fact:"Triton draait rond Neptunus tegen de draairichting van de planeet in."}},
    "Харон": {pl:{planet:"Pluton",diameter:"1 212 km",temperature:"około −220°C",description:"Największy księżyc Plutona.",fact:"Charon jest tak duży w porównaniu z Plutonem, że układ bywa opisywany jako podwójny."},nl:{planet:"Pluto",diameter:"1.212 km",temperature:"ongeveer −220°C",description:"De grootste maan van Pluto.",fact:"Charon is relatief zo groot dat Pluto en Charon soms als een dubbel systeem worden beschouwd."}},
    "Титания": {pl:{planet:"Uran",diameter:"1 578 km",temperature:"około −203°C",description:"Największy księżyc Urana.",fact:"Tytania jest największym księżycem Urana."},nl:{planet:"Uranus",diameter:"1.578 km",temperature:"ongeveer −203°C",description:"De grootste maan van Uranus.",fact:"Titania is de grootste maan van Uranus."}},
    "Оберон": {pl:{planet:"Uran",diameter:"1 523 km",temperature:"około −200°C",description:"Duży, zewnętrzny księżyc Urana.",fact:"Oberon jest jednym z najbardziej oddalonych dużych księżyców Urana."},nl:{planet:"Uranus",diameter:"1.523 km",temperature:"ongeveer −200°C",description:"Een grote, buitenste maan van Uranus.",fact:"Oberon is een van de buitenste grote manen van Uranus."}},
    "Ариэль": {pl:{planet:"Uran",diameter:"1 158 km",temperature:"około −213°C",description:"Jasny, lodowy księżyc Urana.",fact:"Ariel ma jedną z najjaśniejszych powierzchni wśród dużych księżyców Urana."},nl:{planet:"Uranus",diameter:"1.158 km",temperature:"ongeveer −213°C",description:"Een heldere, ijzige maan van Uranus.",fact:"Ariel heeft een van de helderste oppervlakken van de grote manen van Uranus."}},
    "Рея": {pl:{planet:"Saturn",diameter:"1 528 km",temperature:"około −174°C",description:"Drugi co do wielkości księżyc Saturna.",fact:"Rea składa się głównie z lodu wodnego i skał."},nl:{planet:"Saturnus",diameter:"1.528 km",temperature:"ongeveer −174°C",description:"De op één na grootste maan van Saturnus.",fact:"Rhea bestaat voornamelijk uit waterijs en gesteente."}},
    "Япет": {pl:{planet:"Saturn",diameter:"1 469 km",temperature:"około −143°C",description:"Niezwykły księżyc Saturna o silnym kontraście powierzchni.",fact:"Japet wyróżnia się dużą różnicą jasności między półkulami."},nl:{planet:"Saturnus",diameter:"1.469 km",temperature:"ongeveer −143°C",description:"Een bijzondere maan van Saturnus met sterk oppervlaktecontrast.",fact:"Iapetus staat bekend om het grote verschil in helderheid tussen zijn halfronden."}}
};
Object.entries(moonPLNL).forEach(([name, langs]) => {
    if (!moons[name]) return;
    Object.entries(langs).forEach(([lang, data]) => { moons[name][lang] = {...(moons[name].ru || {}), ...data}; });
});
moonCardNames.ru = {...moonCardNames.ru, "Харон":"Харон", "Титания":"Титания", "Оберон":"Оберон", "Ариэль":"Ариэль", "Рея":"Рея", "Япет":"Япет"};
moonCardTranslations.ru = {...moonCardTranslations.ru,
    "Харон":"Крупнейший спутник Плутона.",
    "Титания":"Крупнейший спутник Урана.",
    "Оберон":"Крупный внешний спутник Урана.",
    "Ариэль":"Яркий ледяной спутник Урана.",
    "Рея":"Второй по размеру спутник Сатурна.",
    "Япет":"Необычный спутник Сатурна с резким контрастом поверхности."
};
moonCardNames.pl = {"Луна":"Księżyc","Фобос":"Fobos","Деймос":"Deimos","Ио":"Io","Европа":"Europa","Ганимед":"Ganimedes","Каллисто":"Kallisto","Титан":"Tytan","Энцелад":"Enceladus","Тритон":"Tryton","Харон":"Charon","Титания":"Tytania","Оберон":"Oberon","Ариэль":"Ariel","Рея":"Rea","Япет":"Japet"};
moonCardNames.nl = {"Луна":"Maan","Фобос":"Phobos","Деймос":"Deimos","Ио":"Io","Европа":"Europa","Ганимед":"Ganymedes","Каллисто":"Callisto","Титан":"Titan","Энцелад":"Enceladus","Тритон":"Triton","Харон":"Charon","Титания":"Titania","Оберон":"Oberon","Ариэль":"Ariel","Рея":"Rhea","Япет":"Iapetus"};
moonCardTranslations.pl = Object.fromEntries(Object.entries(moonPLNL).map(([name, langs]) => [name, langs.pl.description]));
moonCardTranslations.nl = Object.fromEntries(Object.entries(moonPLNL).map(([name, langs]) => [name, langs.nl.description]));
moonSectionTranslations.es = {title:"🌙 Lunas de los planetas",text:"Explora las lunas del Sistema Solar y descubre más sobre estos mundos."};
moonSectionTranslations.it = {title:"🌙 Lune dei pianeti",text:"Esplora le lune del Sistema Solare e scopri di più su questi mondi."};
moonSectionTranslations.pl = {title:"🌙 Księżyce planet",text:"Poznaj księżyce Układu Słonecznego i odkrywaj fascynujące światy."};
moonSectionTranslations.nl = {title:"🌙 Manen van de planeten",text:"Verken de manen van het zonnestelsel en ontdek meer over deze werelden."};

/* Pełne dane dla planet karłowatych we wszystkich językach */
const dwarfPlanetExtraTranslations = {
    "Церера": {
        kk:{name:"Церера",description:"Астероидтардың негізгі белдеуіндегі ергежейлі ғаламшар.",diameter:"≈ 940 км",distance:"≈ 413 млн км",moons:"0",fact:"Церера — негізгі астероид белдеуіндегі ең ірі нысан."},
        cs:{name:"Ceres",description:"Trpasličí planeta v hlavním pásu asteroidů.",diameter:"≈ 940 km",distance:"≈ 413 mil. km",moons:"0",fact:"Ceres je největším objektem hlavního pásu asteroidů."},
        en:{name:"Ceres",description:"A dwarf planet in the main asteroid belt.",diameter:"≈ 940 km",distance:"≈ 413 million km",moons:"0",fact:"Ceres is the largest object in the main asteroid belt."},
        de:{name:"Ceres",description:"Ein Zwergplanet im Hauptasteroidengürtel.",diameter:"≈ 940 km",distance:"≈ 413 Mio. km",moons:"0",fact:"Ceres ist das größte Objekt im Hauptasteroidengürtel."},
        fr:{name:"Cérès",description:"Une planète naine de la ceinture principale d’astéroïdes.",diameter:"≈ 940 km",distance:"≈ 413 millions de km",moons:"0",fact:"Cérès est le plus grand objet de la ceinture principale d’astéroïdes."},
        pl:{name:"Ceres",description:"Planeta karłowata w głównym pasie asteroid.",diameter:"≈ 940 km",distance:"≈ 413 mln km",moons:"0",fact:"Ceres jest największym obiektem głównego pasa asteroid."},
        nl:{name:"Ceres",description:"Een dwergplaneet in de belangrijkste asteroïdengordel.",diameter:"≈ 940 km",distance:"≈ 413 miljoen km",moons:"0",fact:"Ceres is het grootste object in de belangrijkste asteroïdengordel."}
    },
    "Эрида": {
        kk:{name:"Эрида",description:"Шашыраңқы дискідегі өте алыс ергежейлі әлем.",diameter:"≈ 2 326 км",distance:"≈ 10,1 млрд км",moons:"1",fact:"Эрида Күн жүйесіндегі ғаламшар анықтамасын қайта қарауға ықпал етті."},
        cs:{name:"Eris",description:"Velmi vzdálený trpasličí svět v rozptýleném disku.",diameter:"≈ 2 326 km",distance:"≈ 10,1 mld. km",moons:"1",fact:"Eris pomohla vyvolat přehodnocení definice planety."},
        en:{name:"Eris",description:"A very distant dwarf world in the scattered disc.",diameter:"≈ 2,326 km",distance:"≈ 10.1 billion km",moons:"1",fact:"Eris helped prompt a rethink of the definition of a planet."},
        de:{name:"Eris",description:"Eine sehr weit entfernte Zwergwelt in der Streuscheibe.",diameter:"≈ 2.326 km",distance:"≈ 10,1 Mrd. km",moons:"1",fact:"Eris trug dazu bei, die Definition eines Planeten neu zu überdenken."},
        fr:{name:"Éris",description:"Un monde nain très éloigné du disque diffus.",diameter:"≈ 2 326 km",distance:"≈ 10,1 milliards de km",moons:"1",fact:"Éris a contribué au débat qui a conduit à revoir la définition d’une planète."},
        pl:{name:"Eris",description:"Bardzo odległy świat karłowaty z dysku rozproszonego.",diameter:"≈ 2 326 km",distance:"≈ 10,1 mld km",moons:"1",fact:"Eris przyczyniła się do ponownego rozważenia definicji planety."},
        nl:{name:"Eris",description:"Een zeer verre dwergwereld in de verstrooide schijf.",diameter:"≈ 2.326 km",distance:"≈ 10,1 miljard km",moons:"1",fact:"Eris droeg bij aan de herziening van de definitie van een planeet."}
    },
    "Хаумеа": {
        kk:{name:"Хаумеа",description:"Койпер белдеуіндегі жылдам айналатын ергежейлі әлем.",diameter:"≈ 1 560 км",distance:"≈ 6,5 млрд км",moons:"2",fact:"Жылдам айналғандықтан Хаумеаның пішіні созылыңқы."},
        cs:{name:"Haumea",description:"Rychle rotující trpasličí svět v Kuiperově pásu.",diameter:"≈ 1 560 km",distance:"≈ 6,5 mld. km",moons:"2",fact:"Rychlá rotace dává Haumei protáhlý tvar."},
        en:{name:"Haumea",description:"A rapidly rotating dwarf world in the Kuiper Belt.",diameter:"≈ 1,560 km",distance:"≈ 6.5 billion km",moons:"2",fact:"Haumea’s rapid rotation gives it an elongated shape."},
        de:{name:"Haumea",description:"Eine schnell rotierende Zwergwelt im Kuipergürtel.",diameter:"≈ 1.560 km",distance:"≈ 6,5 Mrd. km",moons:"2",fact:"Durch ihre schnelle Rotation ist Haumea länglich geformt."},
        fr:{name:"Hauméa",description:"Un monde nain du disque de Kuiper qui tourne rapidement.",diameter:"≈ 1 560 km",distance:"≈ 6,5 milliards de km",moons:"2",fact:"Sa rotation rapide donne à Hauméa une forme allongée."},
        pl:{name:"Haumea",description:"Szybko obracająca się planeta karłowata z Pasa Kuipera.",diameter:"≈ 1 560 km",distance:"≈ 6,5 mld km",moons:"2",fact:"Szybki obrót nadaje Haumei wydłużony kształt."},
        nl:{name:"Haumea",description:"Een snel draaiende dwergwereld in de Kuipergordel.",diameter:"≈ 1.560 km",distance:"≈ 6,5 miljard km",moons:"2",fact:"Door haar snelle draaiing heeft Haumea een langgerekte vorm."}
    },
    "Макемаке": {
        kk:{name:"Макемаке",description:"Нептун орбитасынан тыс орналасқан мұзды ергежейлі әлем.",diameter:"≈ 1 430 км",distance:"≈ 6,8 млрд км",moons:"1",fact:"Макемаке — Койпер белдеуіндегі ең ірі белгілі нысандардың бірі."},
        cs:{name:"Makemake",description:"Ledový trpasličí svět za oběžnou dráhou Neptunu.",diameter:"≈ 1 430 km",distance:"≈ 6,8 mld. km",moons:"1",fact:"Makemake patří mezi největší známé objekty Kuiperova pásu."},
        en:{name:"Makemake",description:"An icy dwarf world beyond Neptune’s orbit.",diameter:"≈ 1,430 km",distance:"≈ 6.8 billion km",moons:"1",fact:"Makemake is one of the largest known objects in the Kuiper Belt."},
        de:{name:"Makemake",description:"Eine eisige Zwergwelt jenseits der Neptunbahn.",diameter:"≈ 1.430 km",distance:"≈ 6,8 Mrd. km",moons:"1",fact:"Makemake gehört zu den größten bekannten Objekten im Kuipergürtel."},
        fr:{name:"Makémaké",description:"Un monde nain glacé au-delà de l’orbite de Neptune.",diameter:"≈ 1 430 km",distance:"≈ 6,8 milliards de km",moons:"1",fact:"Makémaké est l’un des plus grands objets connus de la ceinture de Kuiper."},
        pl:{name:"Makemake",description:"Lodowy świat karłowaty poza orbitą Neptuna.",diameter:"≈ 1 430 km",distance:"≈ 6,8 mld km",moons:"1",fact:"Makemake jest jednym z największych znanych obiektów Pasa Kuipera."},
        nl:{name:"Makemake",description:"Een ijzige dwergwereld voorbij de baan van Neptunus.",diameter:"≈ 1.430 km",distance:"≈ 6,8 miljard km",moons:"1",fact:"Makemake is een van de grootste bekende objecten in de Kuipergordel."}
    }
};
Object.entries(dwarfPlanetExtraTranslations).forEach(([name, langs]) => Object.entries(langs).forEach(([lang, data]) => {
    if (dwarfPlanets[name]) dwarfPlanets[name][lang] = data;
}));

const dwarfCardExtraTranslations = {
    kk:{"Церера":["Церера","Астероидтардың негізгі белдеуіндегі ең ірі нысан."],"Эрида":["Эрида","Шашыраңқы дискідегі алыс ергежейлі әлем."],"Хаумеа":["Хаумеа","Койпер белдеуіндегі жылдам айналатын әлем."],"Макемаке":["Макемаке","Нептуннан тыс орналасқан мұзды әлем."]},
    cs:{"Церера":["Ceres","Největší objekt hlavního pásu asteroidů a trpasličí planeta."],"Эрида":["Eris","Vzdálený trpasličí svět v rozptýleném disku."],"Хаумеа":["Haumea","Rychle rotující trpasličí svět v Kuiperově pásu."],"Макемаке":["Makemake","Ledový trpasličí svět za Neptunem."]},
    en:{"Церера":["Ceres","The largest object in the main asteroid belt and a dwarf planet."],"Эрида":["Eris","A distant dwarf world in the scattered disc."],"Хаумеа":["Haumea","A rapidly rotating dwarf world in the Kuiper Belt."],"Макемаке":["Makemake","An icy dwarf world beyond Neptune."]},
    de:{"Церера":["Ceres","Das größte Objekt im Hauptasteroidengürtel und ein Zwergplanet."],"Эрида":["Eris","Eine weit entfernte Zwergwelt in der Streuscheibe."],"Хаумеа":["Haumea","Eine schnell rotierende Zwergwelt im Kuipergürtel."],"Макемаке":["Makemake","Eine eisige Zwergwelt jenseits von Neptun."]},
    fr:{"Церера":["Cérès","Le plus grand objet de la ceinture principale d’astéroïdes et une planète naine."],"Эрида":["Éris","Un monde nain éloigné du disque diffus."],"Хаумеа":["Hauméa","Un monde nain du Kuiper à rotation rapide."],"Макемаке":["Makémaké","Un monde nain glacé au-delà de Neptune."]},
    es:{"Церера":["Ceres","El mayor objeto del cinturón principal de asteroides y un planeta enano."],"Эрида":["Eris","Un mundo enano lejano del disco disperso."],"Хаумеа":["Haumea","Un mundo enano del cinturón de Kuiper que gira rápidamente."],"Макемаке":["Makemake","Un mundo enano helado más allá de Neptuno."]},
    it:{"Церера":["Cerere","Il più grande oggetto della fascia principale degli asteroidi e un pianeta nano."],"Эрида":["Eris","Un lontano mondo nano del disco diffuso."],"Хаумеа":["Haumea","Un mondo nano della fascia di Kuiper dalla rapida rotazione."],"Макемаке":["Makemake","Un mondo nano ghiacciato oltre Nettuno."]},
    pl:{"Церера":["Ceres","Największy obiekt głównego pasa asteroid i planeta karłowata."],"Эрида":["Eris","Odległy świat karłowaty z dysku rozproszonego."],"Хаумеа":["Haumea","Szybko obracająca się planeta karłowata z Pasa Kuipera."],"Макемаке":["Makemake","Lodowy świat karłowaty za orbitą Neptuna."]},
    nl:{"Церера":["Ceres","Het grootste object in de belangrijkste asteroïdengordel en een dwergplaneet."],"Эрида":["Eris","Een verre dwergwereld in de verstrooide schijf."],"Хаумеа":["Haumea","Een snel draaiende dwergwereld in de Kuipergordel."],"Макемаке":["Makemake","Een ijzige dwergwereld voorbij Neptunus."]}
};
Object.assign(dwarfPlanetCardTranslations, dwarfCardExtraTranslations);

/* Vertalingen van extra sterrenbeelden */
const extraConstellationNames = {
    "Большой Пёс": {ru:"Большой Пёс",kk:"Үлкен Ит",cs:"Velký pes",en:"Canis Major",de:"Großer Hund",fr:"Grand Chien",es:"Can Mayor",it:"Cane Maggiore",pl:"Wielki Pies",nl:"Grote Hond"},
    "Стрелец": {ru:"Стрелец",kk:"Мерген",cs:"Střelec",en:"Sagittarius",de:"Schütze",fr:"Sagittaire",es:"Sagitario",it:"Sagittario",pl:"Strzelec",nl:"Boogschutter"},
    "Близнецы": {ru:"Близнецы",kk:"Егіздер",cs:"Blíženci",en:"Gemini",de:"Zwillinge",fr:"Gémeaux",es:"Géminis",it:"Gemelli",pl:"Bliźnięta",nl:"Tweelingen"},
    "Лев": {ru:"Лев",kk:"Арыстан",cs:"Lev",en:"Leo",de:"Löwe",fr:"Lion",es:"Leo",it:"Leone",pl:"Lew",nl:"Leeuw"},
    "Цефей": {ru:"Цефей",kk:"Цефей",cs:"Cefej",en:"Cepheus",de:"Kepheus",fr:"Céphée",es:"Cefeo",it:"Cefeo",pl:"Cefeusz",nl:"Cepheus"},
    "Пегас": {ru:"Пегас",kk:"Пегас",cs:"Pegas",en:"Pegasus",de:"Pegasus",fr:"Pégase",es:"Pegaso",it:"Pegaso",pl:"Pegaz",nl:"Pegasus"}
};
const standardConstellationNames = {
    "Большая Медведица": {kk:"Үлкен Аю",cs:"Velká medvědice",en:"Ursa Major",de:"Großer Bär",fr:"Grande Ourse",es:"Osa Mayor",it:"Orsa Maggiore",pl:"Wielka Niedźwiedzica",nl:"Grote Beer"},
    "Малая Медведица": {kk:"Кіші Аю",cs:"Malý medvěd",en:"Ursa Minor",de:"Kleiner Bär",fr:"Petite Ourse",es:"Osa Menor",it:"Orsa Minore",pl:"Mała Niedźwiedzica",nl:"Kleine Beer"},
    "Орион": {kk:"Орион",cs:"Orion",en:"Orion",de:"Orion",fr:"Orion",es:"Orión",it:"Orione",pl:"Orion",nl:"Orion"},
    "Кассиопея": {kk:"Кассиопея",cs:"Kasiopeia",en:"Cassiopeia",de:"Kassiopeia",fr:"Cassiopée",es:"Casiopea",it:"Cassiopea",pl:"Kasjopeja",nl:"Cassiopeia"},
    "Лебедь": {kk:"Аққу",cs:"Labuť",en:"Cygnus",de:"Schwan",fr:"Cygne",es:"Cisne",it:"Cigno",pl:"Łabędź",nl:"Zwaan"},
    "Лира": {kk:"Лира",cs:"Lyra",en:"Lyra",de:"Leier",fr:"Lyre",es:"Lira",it:"Lira",pl:"Lutnia",nl:"Lier"},
    "Андромеда": {kk:"Андромеда",cs:"Andromeda",en:"Andromeda",de:"Andromeda",fr:"Andromède",es:"Andrómeda",it:"Andromeda",pl:"Andromeda",nl:"Andromeda"},
    "Телец": {kk:"Торпақ",cs:"Býk",en:"Taurus",de:"Stier",fr:"Taureau",es:"Tauro",it:"Toro",pl:"Byk",nl:"Stier"},
    "Скорпион": {kk:"Сарышаян",cs:"Štír",en:"Scorpius",de:"Skorpion",fr:"Scorpion",es:"Escorpio",it:"Scorpione",pl:"Skorpion",nl:"Schorpioen"},
    "Персей": {kk:"Персей",cs:"Perseus",en:"Perseus",de:"Perseus",fr:"Persée",es:"Perseo",it:"Perseo",pl:"Perseusz",nl:"Perseus"}
};
Object.entries(extraConstellationNames).forEach(([ruName, langs]) => {
    Object.entries(langs).forEach(([lang, translated]) => {
        if (!constellationTranslations[lang]) constellationTranslations[lang] = {};
        constellationTranslations[lang][ruName] = translated;
    });
});
Object.entries(standardConstellationNames).forEach(([ruName, langs]) => {
    Object.entries(langs).forEach(([lang, translated]) => {
        if (!constellationTranslations[lang]) constellationTranslations[lang] = {};
        constellationTranslations[lang][ruName] = translated;
    });
});
const constellationPLNL = {
    "Большая Медведица": {pl:"Wielka Niedźwiedzica",nl:"Grote Beer"},"Малая Медведица":{pl:"Mała Niedźwiedzica",nl:"Kleine Beer"},"Орион":{pl:"Orion",nl:"Orion"},"Кассиопея":{pl:"Kasjopeja",nl:"Cassiopeia"},"Лебедь":{pl:"Łabędź",nl:"Zwaan"},"Лира":{pl:"Lutnia",nl:"Lier"},"Андромеда":{pl:"Andromeda",nl:"Andromeda"},"Телец":{pl:"Byk",nl:"Stier"},"Скорпион":{pl:"Skorpion",nl:"Schorpioen"},"Персей":{pl:"Perseusz",nl:"Perseus"}
};
Object.entries(constellationPLNL).forEach(([ruName, langs]) => Object.entries(langs).forEach(([lang, translated]) => {const map = constellationTranslations[lang] || (constellationTranslations[lang] = {}); map[ruName] = translated;}));

/* =========================================================
   💀 ОБНОВЛЕНИЯ + НОВЫЕ РАЗДЕЛЫ
   ========================================================= */

const newSectionsTranslations = {
    ru: {
        dwarfTitle: "♇ Карликовые планеты", dwarfButton: "🪐 Карликовые планеты",
        dwarfText: "Исследуй карликовые планеты и другие далёкие миры Солнечной системы.",
        newMoonTitle: "🌙 Новые спутники", newMoonText: "Ещё несколько интересных спутников для исследования.",
        spaceObjectsButton: "🌌 Космические объекты", kainButton: "🎪 Энциклопедия Кейна",
        encyclopedia: "📚 Энциклопедия Кейна", daveLabButton: "Лаборатория<br>безумного<br>Дэйва", atlasButton: "АТЛАС<br>ПОМНИ",
        updatesTitle: "💀 Санс сообщает о новинках",
        updatesText: "йоу. на сайте появились новые штуки: Атлас Помни, новые созвездия, лаборатория Дэйва, карликовые планеты и космические объекты. сайт пополняется и новыми языками. заглядывай иногда — кто знает, что появится дальше?",
        closeHint: "Нажми на Санса, чтобы закрыть окно."
    
    },
    kk: {
        dwarfTitle: "♇ Ергежейлі ғаламшарлар", dwarfButton: "🪐 Ергежейлі ғаламшарлар",
        dwarfText: "Ергежейлі ғаламшарлар мен Күн жүйесінің алыс әлемдерін зертте.",
        newMoonTitle: "🌙 Жаңа серіктер", newMoonText: "Зерттеуге арналған тағы бірнеше қызықты серік.",
        spaceObjectsButton: "🌌 Ғарыш нысандары", kainButton: "🎪 Кейн энциклопедиясы",
        encyclopedia: "📚 Кейн энциклопедиясы", daveLabButton: "Ессіз Дэйвтің<br>зертханасы", atlasButton: "ПОМНИ<br>АТЛАСЫ",
        updatesTitle: "💀 Санс жаңа жаңалықтарды хабарлайды",
        updatesText: "йоу. сайтта жаңа дүниелер пайда болды: Помни атласы, жаңа шоқжұлдыздар, Дэйвтің зертханасы, ергежейлі ғаламшарлар және ғарыш нысандары. сайтқа жаңа тілдер де қосылып жатыр. анда-санда кіріп тұр — келесіде не пайда боларын кім білсін?",
        closeHint: "Терезені жабу үшін Сансқа бас."
    },
    cs: {
        dwarfTitle: "♇ Trpasličí planety", dwarfButton: "🪐 Trpasličí planety",
        dwarfText: "Prozkoumej trpasličí planety a další vzdálené světy Sluneční soustavy.",
        newMoonTitle: "🌙 Nové měsíce", newMoonText: "Další zajímavé měsíce k prozkoumání.",
        spaceObjectsButton: "🌌 Vesmírné objekty", kainButton: "🎪 Caineova encyklopedie",
        encyclopedia: "📚 Caineova encyklopedie", daveLabButton: "Laboratoř<br>šíleného<br>Davea", atlasButton: "ATLAS<br>POMNI",
        updatesTitle: "💀 Sans hlásí novinky",
        updatesText: "Nazdar. Na webu se objevily nové věci: Atlas Pomni, nová souhvězdí, laboratoř šíleného Davea, trpasličí planety a vesmírné objekty. Web se také rozšiřuje o další jazyky. Občas se sem vrať — kdo ví, co přibude příště?",
        closeHint: "Kliknutím na Sansa zavřeš okno."
    },
    en: {
        dwarfTitle: "♇ Dwarf Planets", dwarfButton: "🪐 Dwarf Planets",
        dwarfText: "Explore dwarf planets and other distant worlds of the Solar System.",
        newMoonTitle: "🌙 New Moons", newMoonText: "A few more fascinating moons to explore.",
        spaceObjectsButton: "🌌 Space Objects", kainButton: "🎪 Caine's Encyclopedia",
        encyclopedia: "📚 Caine's Encyclopedia", daveLabButton: "Crazy Dave's<br>Laboratory", atlasButton: "POMNI'S<br>ATLAS",
        updatesTitle: "💀 Sans has some news",
        updatesText: "yo. some new stuff has appeared on the site: Pomni's Atlas, new constellations, Crazy Dave's Lab, dwarf planets, and space objects. the site is also adding more languages. drop by now and then — who knows what might show up next?",
        closeHint: "Click Sans to close the window."
    },
    de: {
        dwarfTitle: "♇ Zwergplaneten", dwarfButton: "🪐 Zwergplaneten",
        dwarfText: "Erkunde Zwergplaneten und weitere ferne Welten des Sonnensystems.",
        newMoonTitle: "🌙 Neue Monde", newMoonText: "Weitere faszinierende Monde zum Entdecken.",
        spaceObjectsButton: "🌌 Weltraumobjekte", kainButton: "🎪 Caines Enzyklopädie",
        encyclopedia: "📚 Caines Enzyklopädie", daveLabButton: "Labor des<br>verrückten<br>Dave", atlasButton: "POMNIS<br>ATLAS",
        updatesTitle: "💀 Sans hat Neuigkeiten",
        updatesText: "Hey. Auf der Website gibt es Neues: Pomnis Atlas, neue Sternbilder, das Labor des verrückten Dave, Zwergplaneten und Weltraumobjekte. Außerdem kommen weitere Sprachen hinzu. Schau ab und zu vorbei — wer weiß, was als Nächstes auftaucht?",
        closeHint: "Klicke auf Sans, um das Fenster zu schließen."
    },
    fr: {
        dwarfTitle: "♇ Planètes naines", dwarfButton: "🪐 Planètes naines",
        dwarfText: "Explore les planètes naines et les mondes lointains du Système solaire.",
        newMoonTitle: "🌙 Nouvelles lunes", newMoonText: "Quelques lunes fascinantes supplémentaires à explorer.",
        spaceObjectsButton: "🌌 Objets spatiaux", kainButton: "🎪 Encyclopédie de Caine",
        encyclopedia: "📚 Encyclopédie de Caine", daveLabButton: "Laboratoire<br>de Dave le Fou", atlasButton: "ATLAS<br>DE POMNI",
        updatesTitle: "💀 Sans a des nouveautés",
        updatesText: "Yo. De nouvelles choses sont apparues sur le site : l’Atlas de Pomni, de nouvelles constellations, le laboratoire de Dave le Fou, des planètes naines et des objets spatiaux. Le site accueille aussi de nouvelles langues. Repasse de temps en temps — qui sait ce qui apparaîtra ensuite ?",
        closeHint: "Clique sur Sans pour fermer la fenêtre."
    },
    es: {
        dwarfTitle: "♇ Planetas enanos", dwarfButton: "🪐 Planetas enanos",
        dwarfText: "Explora planetas enanos y otros mundos lejanos del Sistema Solar.",
        newMoonTitle: "🌙 Nuevas lunas", newMoonText: "Algunas lunas fascinantes más para explorar.",
        spaceObjectsButton: "🌌 Objetos espaciales", kainButton: "🎪 Enciclopedia de Caine",
        encyclopedia: "📚 Enciclopedia de Caine", daveLabButton: "Laboratorio<br>del Loco Dave", atlasButton: "ATLAS<br>DE POMNI",
        updatesTitle: "💀 Sans trae novedades",
        updatesText: "hey. han aparecido cosas nuevas en la web: el Atlas de Pomni, nuevas constelaciones, el laboratorio del Loco Dave, planetas enanos y objetos espaciales. También se están añadiendo más idiomas. pásate de vez en cuando; quién sabe qué aparecerá después.",
        closeHint: "Haz clic en Sans para cerrar la ventana."
    },
    it: {
        dwarfTitle: "♇ Pianeti nani", dwarfButton: "🪐 Pianeti nani",
        dwarfText: "Esplora i pianeti nani e altri mondi lontani del Sistema Solare.",
        newMoonTitle: "🌙 Nuove lune", newMoonText: "Altre lune affascinanti da esplorare.",
        spaceObjectsButton: "🌌 Oggetti spaziali", kainButton: "🎪 Enciclopedia di Caine",
        encyclopedia: "📚 Enciclopedia di Caine", daveLabButton: "Laboratorio<br>di Dave il Pazzo", atlasButton: "ATLANTE<br>DI POMNI",
        updatesTitle: "💀 Le novità di Sans",
        updatesText: "ehi. sul sito sono comparse nuove cose: l’Atlante di Pomni, nuove costellazioni, il laboratorio di Dave il Pazzo, pianeti nani e oggetti spaziali. Stiamo aggiungendo anche altre lingue. torna ogni tanto — chissà cosa comparirà la prossima volta.",
        closeHint: "Clicca su Sans per chiudere la finestra."
    },
    pl: {
        dwarfTitle: "♇ Planety karłowate", dwarfButton: "🪐 Planety karłowate",
        dwarfText: "Odkrywaj planety karłowate i inne odległe światy Układu Słonecznego.",
        newMoonTitle: "🌙 Nowe księżyce", newMoonText: "Poznaj kolejne fascynujące księżyce.",
        spaceObjectsButton: "🌌 Obiekty kosmiczne", kainButton: "🎪 Encyklopedia Caine’a",
        encyclopedia: "📚 Encyklopedia Caine’a", daveLabButton: "Laboratorium<br>Szalonego Dave’a", atlasButton: "ATLAS<br>POMNI",
        updatesTitle: "💀 Sans ma nowości",
        updatesText: "hej. na stronie pojawiły się nowe rzeczy: Atlas Pomni, nowe gwiazdozbiory, laboratorium Szalonego Dave’a, planety karłowate i obiekty kosmiczne. Dodajemy też kolejne języki. zaglądaj od czasu do czasu — kto wie, co pojawi się następnym razem?",
        closeHint: "Kliknij Sansa, aby zamknąć okno."
    },
    nl: {
        dwarfTitle: "♇ Dwergplaneten", dwarfButton: "🪐 Dwergplaneten",
        dwarfText: "Verken dwergplaneten en andere verre werelden van het zonnestelsel.",
        newMoonTitle: "🌙 Nieuwe manen", newMoonText: "Ontdek nog meer interessante manen.",
        spaceObjectsButton: "🌌 Ruimteobjecten", kainButton: "🎪 Caines encyclopedie",
        encyclopedia: "📚 Caines encyclopedie", daveLabButton: "Laboratorium<br>van Gekke Dave", atlasButton: "POMNI'S<br>ATLAS",
        updatesTitle: "💀 Sans heeft nieuws",
        updatesText: "yo. er zijn nieuwe dingen op de site verschenen: Pomni's Atlas, nieuwe sterrenbeelden, het lab van Gekke Dave, dwergplaneten en ruimteobjecten. Er worden ook meer talen toegevoegd. kom af en toe terug — wie weet wat er hierna verschijnt?",
        closeHint: "Klik op Sans om het venster te sluiten."
    }
};

Object.keys(newSectionsTranslations).forEach(lang=>{ if(languages[lang]) languages[lang].encyclopediaButton=newSectionsTranslations[lang].encyclopedia; });

function updateNewSectionsLanguage() {
    const t =
        newSectionsTranslations[currentLanguage] ||
        newSectionsTranslations.ru;

    const setText = (id, value) => {
        const element = document.getElementById(id);

        if (element && value !== undefined) {
            element.textContent = value;
        }
    };

    // Карликовые планеты и спутники
    setText("dwarfPlanetsTitle", t.dwarfTitle);
    setText("dwarfPlanetsText", t.dwarfText);
    setText("newMoonsTitle", t.newMoonTitle);
    setText("newMoonsText", t.newMoonText);

    // Заголовок окна Санса
    setText("updatesTitle", t.updatesTitle);

    // Десять абзацев объявления Санса
    if (t.sansUpdates) {
        t.sansUpdates.forEach((paragraph, index) => {
            setText(`sansUpdate${index + 1}`, paragraph);
        });
    }

    setText("updatesCloseHint", t.closeHint);

    // Кнопки новых разделов
    setText("spaceObjectsButton", t.spaceObjectsButton);
    setText("kainButton", t.kainButton);
    setText("dwarfPlanetsButton", t.dwarfButton);

    // Лаборатория Дэйва
    const daveButton =
        document.querySelector(".dave-lab-triangle");

    const daveLabel =
        daveButton?.querySelector("span");

    if (daveLabel && t.daveLabButton !== undefined) {
        daveLabel.innerHTML = t.daveLabButton;
    }

    if (daveButton && t.daveLabButton !== undefined) {
        const label = t.daveLabButton.replace(/<br\s*\/?>/gi, " ");
        daveButton.setAttribute("aria-label", label);
        daveButton.setAttribute("title", label);
    }

    // Атлас Помни
    const atlasLabel =
        document.querySelector(".pomni-atlas-title");

    if (atlasLabel && t.atlasButton !== undefined) {
        atlasLabel.innerHTML = t.atlasButton;
    }

    const atlasButton =
        document.querySelector(".pomni-atlas-button");

    if (atlasButton && t.atlasButton !== undefined) {
        const label = t.atlasButton.replace(/<br\s*\/?>/gi, " ");
        atlasButton.setAttribute("aria-label", label);
        atlasButton.setAttribute("title", label);
    }

    // Кнопка Санса
    const sansButton =
        document.getElementById("sansUpdateButton");

    if (sansButton && t.updatesTitle !== undefined) {
        sansButton.setAttribute("aria-label", t.updatesTitle);
    }

    // Кнопка закрытия окна
    const closeButton =
        document.querySelector(
            "#updatesModal .updates-close-button"
        );

    if (closeButton) {
        const hint =
            t.closeHint || "Close window";

        closeButton.setAttribute("aria-label", hint);

        const image = closeButton.querySelector("img");

        if (image) {
            image.alt = hint;
        }
    }
}

function updateDwarfModalLabels(){ const t=languages[currentLanguage]||languages.ru; const map={dwarfDiameterLabel:t.diameter,dwarfDistanceLabel:t.distance,dwarfMoonsLabel:t.moons,dwarfFactLabel:t.fact}; Object.entries(map).forEach(([id,v])=>{const e=document.getElementById(id);if(e)e.textContent=v;}); }

function openUpdatesModal() {
    const modal = document.getElementById("updatesModal");
    if (!modal) {
        console.error("Не найдено окно updatesModal. Проверь index.html.");
        return;
    }

    // Перевод уже применяется при выборе языка. Не обновляем DOM повторно при клике.
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeUpdatesModal() {
    const modal = document.getElementById("updatesModal");
    if (!modal) return;

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");

    // Не включаем прокрутку, если другое модальное окно всё ещё открыто.
    const anotherModalIsOpen = document.querySelector(
        "#planetModal.active, #moonModal.active, #dwarfPlanetModal.active"
    );
    if (!anotherModalIsOpen) {
        document.body.style.overflow = "";
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

    document.title = text.siteTitle;

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

        encyclopediaButton:
            text.encyclopediaButton || "📚 Энциклопедия Кейна",

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
        },

        es: {
            name: "Español",
            flag: "images/spain.jpg"
        },

        it: {
            name: "Italiano",
            flag: "images/italy.jpg"
        },
      pl: {
    name: "Polski",
    flag: "images/poland.png"
},

nl: {
    name: "Nederlands",
    flag: "images/netherlands.png"
}
    };


    const selected =
        languageData[language];


    if (languageButton && selected) {

        languageButton.innerHTML = selected.flag
            ? `<img src="${selected.flag}" alt="${selected.name}"> ${selected.name}`
            : `${selected.emoji} ${selected.name}`;
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

    updateDwarfPlanetCards();
    updateNewSectionsLanguage();
    updateDwarfModalLabels();


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
   
    if (!dropdown || !menu) return;

    // Возвращаем список внутрь исходного меню
    if (dropdown.parentElement !== menu) {
        menu.appendChild(dropdown);
    }

    // Открываем или закрываем список
    dropdown.classList.toggle("open");
}


    const dropdown =
        document.getElementById("languageDropdown");

    if (dropdown) {
        dropdown.classList.toggle("open");
    }




document.addEventListener("click", event => {
    const menu = document.querySelector(".language-menu");
    const dropdown = document.getElementById("languageDropdown");

    if (!menu || !dropdown) return;

    // Закрываем меню только при клике за его пределами
    if (!menu.contains(event.target)) {
        dropdown.classList.remove("open");
    }
});



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

        const dwarfModal = document.getElementById("dwarfPlanetModal");
        if (dwarfModal) {
            dwarfModal.addEventListener("click", event => {
                if (event.target === dwarfModal) closeDwarfPlanet();
            });
        }

        const updatesModal = document.getElementById("updatesModal");
        if (updatesModal) {
            updatesModal.addEventListener("click", event => {
                if (event.target === updatesModal) closeUpdatesModal();
            });
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
            closeDwarfPlanet();
            closeUpdatesModal();
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

/* 💀 Новое объявление Санса на 10 языках */
(() => {
    const sansNews = {
        ru: {
            updatesTitle: "💀 Санс вещает о новинках",
            updatesText: `йоу. это снова я, санс. сайт опять разросся, пока я экономил силы. ну, кто-то же должен был за всем этим наблюдать.

<br><br>В меню появились новые кнопки: «Космические объекты», «Энциклопедия Кейна», «Карликовые планеты», «Атлас Помни» и лаборатория безумного Дэйва. В «Мечтах Чарли Морнингстар» стало больше созвездий, появились новые спутники и четыре карликовые планеты: Церера, Эрида, Хаумеа и Макемаке. И да, это Кейн, не Каин. я проверил. почти.

<br><br>В Атласе есть поиск по 11 космическим объектам, сведения о них, викторина из 10 вопросов, достижения, сохранение прогресса, звуковые эффекты и космический босс с пятью сложными вопросами. Дэйв тоже ждёт тебя в лаборатории. постарайся не нажимать все кнопки сразу. хотя зрелище было бы неплохое.

<br><br>Теперь сайт поддерживает десять языков: русский, казахский, чешский, английский, немецкий, французский, испанский, итальянский, польский и нидерландский. новые кнопки и страницы помогут найти больше интересного, а кое-где могут прятаться секреты. я ничего не обещал.

<br><br>короче, осматривайся, исследуй новые разделы и ищи сюрпризы. если найдёшь что-то раньше меня, скажи, что так и было задумано. нажми на меня, чтобы закрыть окно.`,
            closeHint: "Нажми на Санса, чтобы закрыть окно."
        },

        kk: {
            updatesTitle: "💀 Санс жаңалықтарды хабарлайды",
            updatesText: `йоу. бұл тағы мен, Санс. мен күшімді үнемдеп жатқанда сайт тағы да үлкейіп кетіпті. біреу бәрін бақылап отыруы керек қой.

<br><br>Мәзірге жаңа батырмалар қосылды: «Ғарыш нысандары», «Кейн энциклопедиясы», «Ергежейлі ғаламшарлар», «Помни атласы» және Ессіз Дэйвтің зертханасы. «Чарли Морнингстардың армандары» бөлімінде шоқжұлдыздар көбейді, жаңа серіктер мен төрт ергежейлі ғаламшар қосылды: Церера, Эрида, Хаумеа және Макемаке. Айтпақшы, ол — Кейн, Каин емес. тексеріп көрдім. дерлік.

<br><br>Атласта 11 ғарыш нысанын іздеуге, олар туралы мәлімет оқуға, 10 сұрақтық викторинадан өтуге, жетістіктер жинауға, прогресті сақтауға, дыбыстарды тыңдауға және бес қиын сұрағы бар ғарыштық боспен шайқасуға болады. Дэйв те зертханасында күтіп отыр. барлық батырманы бірден баспа. дегенмен, қызық болар еді.

<br><br>Енді сайт он тілді қолдайды: орыс, қазақ, чех, ағылшын, неміс, француз, испан, итальян, поляк және нидерланд тілдері. жаңа батырмалар мен беттер зерттейтін дүниелерді көбейтеді. кей жерлерде құпиялар да болуы мүмкін. мен ештеңе уәде еткен жоқпын.

<br><br>қысқасы, айналаны қарап шық, жаңа бөлімдерді зертте және тосынсыйларды ізде. бірдеңені менен бұрын тапсаң, бәрі жоспар бойынша болды деп айта сал. терезені жабу үшін мені бас.`,
            closeHint: "Терезені жабу үшін Сансқа бас."
        },

        cs: {
            updatesTitle: "💀 Sans hlásí novinky",
            updatesText: `Nazdar, tady zase Sans. Web se zase rozrostl, zatímco jsem šetřil energii. Někdo to tu přece musel hlídat.

<br><br>V nabídce přibyly nové odkazy: Vesmírné objekty, Caineova encyklopedie, Trpasličí planety, Atlas Pomni a Laboratoř šíleného Davea. Ve „Snech Charlieho Morningstarové“ najdeš více souhvězdí, přibyly nové měsíce a čtyři trpasličí planety: Ceres, Eris, Haumea a Makemake. A ano, je to Caine, ne Kain. kontroloval jsem to. skoro.

<br><br>Atlas nabízí vyhledávání 11 vesmírných objektů, jejich informace, kvíz s 10 otázkami, úspěchy, ukládání postupu, zvukové efekty a kosmického bosse s pěti těžkými otázkami. Dave na tebe čeká v laboratoři. nemačkej všechna tlačítka najednou. i když by to byla podívaná.

<br><br>Web nyní podporuje deset jazyků: ruštinu, kazaštinu, češtinu, angličtinu, němčinu, francouzštinu, španělštinu, italštinu, polštinu a nizozemštinu. Nová tlačítka a stránky ti pomohou najít další zajímavosti. možná se někde skrývají i tajemství. nic jsem neslíbil.

<br><br>Tak se rozhlédni, prozkoumej nové sekce a hledej překvapení. když něco objevíš přede mnou, řekni, že to tak bylo v plánu. Kliknutím na mě okno zavřeš.`,
            closeHint: "Kliknutím na Sansa zavřeš okno."
        },

        en: {
            updatesTitle: "💀 Sans has some news",
            updatesText: `yo. sans here again. the site got bigger while I was conserving energy. somebody had to keep an eye on things, right?

<br><br>New menu buttons lead to Space Objects, Caine's Encyclopedia, Dwarf Planets, Pomni's Atlas, and Crazy Dave's Lab. Charlie Morningstar's Dreams has more constellations, and there are new moons plus four dwarf planets to explore: Ceres, Eris, Haumea, and Makemake. and yes, it's Caine, not Cain. I checked. mostly.

<br><br>The Atlas has a search feature for 11 space objects, information about them, a 10-question quiz, achievements, saved progress, sound effects, and a cosmic boss with five tough questions. Dave is waiting in his lab, too. try not to press every button at once. though I'd probably watch.

<br><br>The site now supports ten languages: Russian, Kazakh, Czech, English, German, French, Spanish, Italian, Polish, and Dutch. New buttons and pages make it easier to find things to explore. there might even be a few secrets hidden around. I promised nothing.

<br><br>anyway, look around, explore the new sections, and hunt for surprises. if you find something before me, just say I planned it that way. click me to close this window.`,
            closeHint: "Click Sans to close the window."
        },

        de: {
            updatesTitle: "💀 Sans hat Neuigkeiten",
            updatesText: `yo. hier ist wieder Sans. die Website ist gewachsen, während ich Energie gespart habe. irgendwer musste schließlich ein Auge darauf haben.

<br><br>Im Menü gibt es neue Schaltflächen für Weltraumobjekte, Caines Enzyklopädie, Zwergplaneten, Pomnis Atlas und Crazy Daves Labor. Bei Charlies Morningstars Träumen sind weitere Sternbilder dazugekommen. Außerdem gibt es neue Monde und vier Zwergplaneten zu entdecken: Ceres, Eris, Haumea und Makemake. und ja, es heißt Caine, nicht Kain. ich hab nachgesehen. mehr oder weniger.

<br><br>Der Atlas bietet eine Suche nach 11 Weltraumobjekten, Informationen über sie, ein Quiz mit 10 Fragen, Erfolge, gespeicherten Fortschritt, Soundeffekte und einen kosmischen Boss mit fünf kniffligen Fragen. Dave wartet ebenfalls in seinem Labor. klick besser nicht alle Schaltflächen gleichzeitig. obwohl ... das wäre unterhaltsam.

<br><br>Die Website unterstützt jetzt zehn Sprachen: Russisch, Kasachisch, Tschechisch, Englisch, Deutsch, Französisch, Spanisch, Italienisch, Polnisch und Niederländisch. Neue Schaltflächen und Seiten führen zu weiteren Dingen, die du entdecken kannst. vielleicht sind auch Geheimnisse versteckt. ich habe nichts versprochen.

<br><br>Also, schau dich um, erkunde die neuen Bereiche und such nach Überraschungen. wenn du etwas vor mir findest, behaupte einfach, ich hätte es so geplant. Klick auf mich, um das Fenster zu schließen.`,
            closeHint: "Klicke auf Sans, um das Fenster zu schließen."
        },

        fr: {
            updatesTitle: "💀 Sans a des nouveautés",
            updatesText: `yo. c'est encore Sans. le site a grandi pendant que j'économisais mon énergie. quelqu'un devait bien garder un œil sur tout ça.

<br><br>Le menu propose de nouveaux boutons : Objets spatiaux, Encyclopédie de Caine, Planètes naines, Atlas de Pomni et Laboratoire de Dave le Fou. La page « Les rêves de Charlie Morningstar » accueille davantage de constellations. De nouvelles lunes sont arrivées, ainsi que quatre planètes naines : Cérès, Éris, Hauméa et Makémaké. et oui, c'est Caine, pas Caïn. j'ai vérifié. à peu près.

<br><br>L'Atlas permet de rechercher parmi 11 objets spatiaux, de consulter leurs fiches, de répondre à un quiz de 10 questions, de gagner des succès, de sauvegarder sa progression, d'écouter des effets sonores et d'affronter un boss cosmique avec cinq questions difficiles. Dave t'attend aussi dans son laboratoire. évite de cliquer sur tous les boutons à la fois. quoique, ça pourrait être drôle.

<br><br>Le site propose maintenant dix langues : russe, kazakh, tchèque, anglais, allemand, français, espagnol, italien, polonais et néerlandais. Les nouveaux boutons et les nouvelles pages donnent encore plus de choses à découvrir. quelques secrets sont peut-être cachés quelque part. je n'ai rien promis.

<br><br>bon, fais un tour, explore les nouvelles sections et cherche les surprises. si tu trouves quelque chose avant moi, dis que je l'avais prévu. Clique sur moi pour fermer cette fenêtre.`,
            closeHint: "Clique sur Sans pour fermer la fenêtre."
        },

        es: {
            updatesTitle: "💀 Sans trae novedades",
            updatesText: `hey. soy Sans otra vez. la web ha crecido mientras yo ahorraba energía. alguien tenía que vigilar todo esto, ¿no?

<br><br>El menú tiene nuevos botones para Objetos espaciales, la Enciclopedia de Caine, Planetas enanos, el Atlas de Pomni y el Laboratorio del Loco Dave. En «Los sueños de Charlie Morningstar» hay más constelaciones. También llegaron nuevas lunas y cuatro planetas enanos: Ceres, Eris, Haumea y Makemake. y sí, es Caine, no Caín. lo comprobé. más o menos.

<br><br>El Atlas permite buscar entre 11 objetos espaciales, leer sus fichas, hacer un cuestionario de 10 preguntas, conseguir logros, guardar el progreso, escuchar efectos de sonido y enfrentarse a un jefe cósmico con cinco preguntas difíciles. Dave también te espera en su laboratorio. intenta no pulsar todos los botones a la vez. aunque sería divertido verlo.

<br><br>La web ahora ofrece diez idiomas: ruso, kazajo, checo, inglés, alemán, francés, español, italiano, polaco y neerlandés. Los nuevos botones y páginas añaden más cosas por explorar. quizá haya secretos escondidos por ahí. no he prometido nada.

<br><br>en fin, echa un vistazo, explora las nuevas secciones y busca sorpresas. si descubres algo antes que yo, di que estaba planeado. pulsa sobre mí para cerrar la ventana.`,
            closeHint: "Haz clic en Sans para cerrar la ventana."
        },

        it: {
            updatesTitle: "💀 Le novità di Sans",
            updatesText: `ehi. sono di nuovo Sans. il sito è cresciuto mentre risparmiavo energie. qualcuno doveva pur tenere d'occhio tutto questo.

<br><br>Nel menu ci sono nuovi pulsanti per Oggetti spaziali, Enciclopedia di Caine, Pianeti nani, Atlante di Pomni e Laboratorio di Dave il Pazzo. «I sogni di Charlie Morningstar» ora contiene più costellazioni. Sono arrivati anche nuovi satelliti e quattro pianeti nani: Cerere, Eris, Haumea e Makemake. e sì, è Caine, non Caino. ho controllato. più o meno.

<br><br>Nell'Atlante puoi cercare tra 11 oggetti spaziali e leggere le loro schede, affrontare un quiz di 10 domande, ottenere obiettivi, salvare i progressi, ascoltare effetti sonori e sfidare un boss cosmico con cinque domande difficili. Dave ti aspetta anche nel suo laboratorio. cerca di non premere tutti i pulsanti insieme. anche se sarebbe divertente.

<br><br>Il sito ora supporta dieci lingue: russo, kazako, ceco, inglese, tedesco, francese, spagnolo, italiano, polacco e neerlandese. I nuovi pulsanti e le nuove pagine aggiungono altre cose da esplorare. magari ci sono anche dei segreti nascosti. non ho promesso niente.

<br><br>insomma, dai un'occhiata, esplora le nuove sezioni e cerca sorprese. se trovi qualcosa prima di me, facciamo finta che fosse tutto programmato. clicca su di me per chiudere la finestra.`,
            closeHint: "Clicca su Sans per chiudere la finestra."
        },

        pl: {
            updatesTitle: "💀 Sans ma nowości",
            updatesText: `yo. tu znowu Sans. strona urosła, kiedy oszczędzałem energię. ktoś przecież musiał mieć na to wszystko oko.

<br><br>W menu pojawiły się nowe przyciski: Obiekty kosmiczne, Encyklopedia Caine’a, Planety karłowate, Atlas Pomni i Laboratorium Szalonego Dave’a. W „Marzeniach Charlie Morningstar” doszły kolejne gwiazdozbiory. Pojawiły się też nowe księżyce i cztery planety karłowate: Ceres, Eris, Haumea i Makemake. i tak, chodzi o Caine’a, nie Kaina. sprawdziłem. prawie na pewno.

<br><br>Atlas ma wyszukiwarkę 11 obiektów kosmicznych, ich opisy, quiz z 10 pytaniami, osiągnięcia, zapisywanie postępów, efekty dźwiękowe oraz kosmicznego bossa z pięcioma trudnymi pytaniami. Dave też czeka w swoim laboratorium. postaraj się nie klikać wszystkiego naraz. chociaż... obejrzałbym to.

<br><br>Strona obsługuje teraz dziesięć języków: rosyjski, kazachski, czeski, angielski, niemiecki, francuski, hiszpański, włoski, polski i niderlandzki. nowe przyciski i strony dają więcej rzeczy do odkrycia. może gdzieś kryją się też sekrety. niczego nie obiecywałem.

<br><br>no dobra, rozejrzyj się, sprawdź nowe działy i poszukaj niespodzianek. jeśli coś odkryjesz przede mną, powiedzmy, że tak właśnie planowałem. kliknij mnie, żeby zamknąć okno.`,
            closeHint: "Kliknij Sansa, aby zamknąć okno."
        },

        nl: {
            updatesTitle: "💀 Sans heeft nieuws",
            updatesText: `yo. sans hier weer. de website is gegroeid terwijl ik energie aan het besparen was. iemand moest dit allemaal toch in de gaten houden.

<br><br>In het menu staan nieuwe knoppen voor Ruimteobjecten, Caines encyclopedie, Dwergplaneten, Pomni's Atlas en het lab van Gekke Dave. Bij Charlie Morningstars Dromen zijn nieuwe sterrenbeelden toegevoegd. Ook zijn er nieuwe manen en vier dwergplaneten om te ontdekken: Ceres, Eris, Haumea en Makemake. en ja, het is Caine, niet Kaïn. ik heb het gecontroleerd. ongeveer.

<br><br>In de Atlas kun je zoeken tussen 11 ruimteobjecten en hun informatie lezen, een quiz met 10 vragen doen, prestaties behalen, je voortgang opslaan, geluidseffecten horen en een kosmische eindbaas met vijf lastige vragen uitdagen. Dave wacht ook in zijn lab. probeer niet alle knoppen tegelijk in te drukken. al zou dat best grappig zijn.

<br><br>De website ondersteunt nu tien talen: Russisch, Kazachs, Tsjechisch, Engels, Duits, Frans, Spaans, Italiaans, Pools en Nederlands. Met de nieuwe knoppen en pagina's valt er nog meer te ontdekken. misschien liggen er geheimen verstopt. ik heb niets beloofd.

<br><br>goed, kijk rond, ontdek de nieuwe onderdelen en zoek naar verrassingen. als jij iets eerder vindt dan ik, doen we alsof ik het zo gepland had. klik op mij om dit venster te sluiten.`,
            closeHint: "Klik op Sans om het venster te sluiten."
        }
    };
// Переводы десяти отдельных абзацев Санса


const sansUpdatesTranslations = {
    ru: [
        "💀 хей. это снова я, санс. у нас тут кое-что новенькое.",
        "🚧 кстати, это пока демоверсия. Маленков ещё не доделал всё, что хотел, но обязательно доделает… когда перестанет есть блины. 🥞",
        "🔮 встречай Атлас Помни! теперь исследовать космос стало ещё интереснее.",
        "🧭 в атласе тебя ждут поиск, викторина, достижения и сохранение прогресса.",
        "👾 а ещё там есть звуки и босс. надеюсь, ты не испугаешься. хе-хе.",
        "🧪 следующее дополнение — Лаборатория безумного Дэйва!",
        "🌻 готовь растения и защищайся от зомби. Дэйв явно опять что-то задумал.",
        "⚔️ впереди целых 20 волн! посмотрим, как далеко ты сможешь пройти.",
        "🇵🇱 кстати, теперь на сайте есть польский язык. dzień dobry!",
        "🇳🇱 а ещё добавлен нидерландский язык. hallo, космические путешественники!",
        "ну вот и все новости. загляни в новые разделы, а потом нажми на меня, чтобы закрыть окно. heh."
    ],

    kk: [
        "💀 сәлем. бұл тағы да мен, Санс. бізде бірнеше жаңалық бар.",
        "🚧 айтпақшы, бұл әзірге демо-нұсқа. Маленков әлі өзі қалағанның бәрін аяқтаған жоқ, бірақ міндетті түрде аяқтайды… тек құймақ жеуді тоқтатқан кезде. 🥞",
        "🔮 Помни атласымен таныс! Енді ғарышты зерттеу одан да қызықты.",
        "🧭 атласта іздеу, викторина, жетістіктер және прогресті сақтау мүмкіндігі бар.",
        "👾 сонымен қатар дыбыстар мен бастық бар. қорқып қалма, хе-хе.",
        "🧪 келесі жаңалық — Ессіз Дэйвтің зертханасы!",
        "🌻 өсімдіктерді дайындап, зомбилерден қорған. Дэйв тағы бірдеңе ойлап тапқан сияқты.",
        "⚔️ сені 20 толқын күтіп тұр! қаншалықты алысқа жете алатыныңды көрейік.",
        "🇵🇱 айтпақшы, енді сайтта поляк тілі бар. dzień dobry!",
        "🇳🇱 сонымен қатар нидерланд тілі де қосылды. hallo, ғарыш саяхатшылары!",
        "жаңалықтар әзірге осы. жаңа бөлімдерді қарап шық та, терезені жабу үшін мені бас. heh."
    ],

    cs: [
        "💀 čau. to jsem zase já, Sans. máme tu pár novinek.",
        "🚧 mimochodem, tohle je zatím jen demo. Malenkov ještě nedokončil všechno, co chtěl, ale určitě to dodělá… až přestane jíst palačinky. 🥞",
        "🔮 seznam se s Atlasem Pomni! Objevování vesmíru je teď ještě zajímavější.",
        "🧭 atlas nabízí vyhledávání, kvíz, úspěchy a ukládání postupu.",
        "👾 najdeš v něm také zvuky a bosse. snad se nebudeš bát. hehe.",
        "🧪 další novinkou je Laboratoř šíleného Davea!",
        "🌻 připrav rostliny a braň se zombíkům. Dave zase určitě něco vymyslel.",
        "⚔️ čeká tě celých 20 vln! Uvidíme, jak daleko se dostaneš.",
        "🇵🇱 mimochodem, web teď podporuje polštinu. dzień dobry!",
        "🇳🇱 přibyla také nizozemština. hallo, vesmírní cestovatelé!",
        "to je pro dnešek všechno. prozkoumej nové sekce a kliknutím na mě zavři okno. heh."
    ],

    en: [
        "💀 hey. it's me again, Sans. we've got some new stuff.",
        "🚧 by the way, this is still a demo version. Malenkov hasn't finished everything he wanted yet, but he will… once he stops eating pancakes. 🥞",
        "🔮 meet Pomni's Atlas! Exploring space just got more interesting.",
        "🧭 the atlas includes search, a quiz, achievements, and saved progress.",
        "👾 there are also sounds and a boss. hope you don't get scared. heh-heh.",
        "🧪 the next addition is Crazy Dave's Lab!",
        "🌻 prepare your plants and defend yourself against zombies. Dave's up to something again.",
        "⚔️ there are 20 waves to survive! Let's see how far you can get.",
        "🇵🇱 by the way, Polish is now available on the website. dzień dobry!",
        "🇳🇱 Dutch has been added too. hallo, space travelers!",
        "that's all the news for now. check out the new sections, then click me to close this window. heh."
    ],

    de: [
        "💀 hey. ich bin's wieder, Sans. wir haben ein paar Neuigkeiten.",
        "🚧 übrigens ist das hier erst eine Demoversion. Malenkov hat noch nicht alles fertiggestellt, was er vorhatte, aber er wird es noch schaffen… sobald er aufhört, Pfannkuchen zu essen. 🥞",
        "🔮 lerne Pomnis Atlas kennen! Die Erkundung des Weltraums macht jetzt noch mehr Spaß.",
        "🧭 der Atlas bietet eine Suche, ein Quiz, Erfolge und gespeicherten Fortschritt.",
        "👾 außerdem gibt es Geräusche und einen Boss. Hoffentlich erschrickst du nicht. Hehe.",
        "🧪 die nächste Neuerung ist Crazy Daves Labor!",
        "🌻 mach deine Pflanzen bereit und verteidige dich gegen Zombies. Dave hat bestimmt wieder etwas ausgeheckt.",
        "⚔️ ganze 20 Wellen warten auf dich! Mal sehen, wie weit du kommst.",
        "🇵🇱 übrigens ist die Website jetzt auch auf Polnisch verfügbar. dzień dobry!",
        "🇳🇱 außerdem wurde Niederländisch hinzugefügt. hallo, Weltraumreisende!",
        "das waren alle Neuigkeiten. Schau dir die neuen Bereiche an und klicke dann auf mich, um das Fenster zu schließen. Heh."
    ],

    fr: [
        "💀 salut. c'est encore moi, Sans. nous avons quelques nouveautés.",
        "🚧 au fait, ce n’est encore qu’une version démo. Malenkov n’a pas terminé tout ce qu’il voulait ajouter, mais il le fera… dès qu’il arrêtera de manger des crêpes. 🥞",
        "🔮 découvre l'Atlas de Pomni ! Explorer l'espace devient encore plus intéressant.",
        "🧭 l'atlas propose une recherche, un quiz, des succès et la sauvegarde de la progression.",
        "👾 il contient aussi des sons et un boss. j'espère que tu n'auras pas peur. hé hé.",
        "🧪 la prochaine nouveauté, c'est le Laboratoire du fou Dave !",
        "🌻 prépare tes plantes et défends-toi contre les zombies. Dave prépare sûrement encore quelque chose.",
        "⚔️ vingt vagues t'attendent ! Voyons jusqu'où tu pourras aller.",
        "🇵🇱 au fait, le polonais est maintenant disponible sur le site. dzień dobry !",
        "🇳🇱 le néerlandais a également été ajouté. hallo, voyageurs de l'espace !",
        "c'est tout pour les nouvelles. découvre les nouvelles sections, puis clique sur moi pour fermer cette fenêtre. hé."
    ],

    es: [
        "💀 hey. soy yo otra vez, Sans. tenemos algunas novedades.",
        "🚧 por cierto, esta todavía es una versión de demostración. Malenkov aún no ha terminado todo lo que quería añadir, pero lo hará… cuando deje de comer tortitas. 🥞",
        "🔮 ¡conoce el Atlas de Pomni! Explorar el espacio ahora es aún más interesante.",
        "🧭 el atlas incluye búsqueda, un cuestionario, logros y guardado del progreso.",
        "👾 también hay sonidos y un jefe. espero que no te asustes. je, je.",
        "🧪 ¡la siguiente novedad es el Laboratorio del loco Dave!",
        "🌻 prepara tus plantas y defiéndete de los zombis. Dave seguro que trama algo otra vez.",
        "⚔️ ¡te esperan 20 oleadas! Veamos hasta dónde puedes llegar.",
        "🇵🇱 por cierto, ahora la página también está disponible en polaco. dzień dobry.",
        "🇳🇱 también hemos añadido el neerlandés. ¡hallo, viajeros espaciales!",
        "eso es todo por ahora. explora las nuevas secciones y luego pulsa sobre mí para cerrar esta ventana. je."
    ],

    it: [
        "💀 ehi. sono di nuovo io, Sans. ci sono alcune novità.",
        "🚧 a proposito, questa è ancora una versione demo. Malenkov non ha ancora finito tutto quello che voleva aggiungere, ma lo farà… appena smetterà di mangiare pancake. 🥞",
        "🔮 scopri l'Atlante di Pomni! Esplorare lo spazio è diventato ancora più interessante.",
        "🧭 l'atlante include una ricerca, un quiz, obiettivi e il salvataggio dei progressi.",
        "👾 ci sono anche suoni e un boss. spero che tu non ti spaventi. eheh.",
        "🧪 la prossima novità è il Laboratorio del folle Dave!",
        "🌻 prepara le tue piante e difenditi dagli zombi. Dave sta sicuramente escogitando qualcosa.",
        "⚔️ ti aspettano ben 20 ondate! Vediamo fin dove riuscirai ad arrivare.",
        "🇵🇱 a proposito, ora il sito è disponibile anche in polacco. dzień dobry!",
        "🇳🇱 abbiamo aggiunto anche l'olandese. hallo, viaggiatori dello spazio!",
        "per ora è tutto. esplora le nuove sezioni e poi clicca su di me per chiudere questa finestra. heh."
    ],

    pl: [
        "💀 hej. to znowu ja, Sans. mamy kilka nowości.",
        "🚧 tak przy okazji, to na razie wersja demonstracyjna. Malenkov nie dokończył jeszcze wszystkiego, co chciał dodać, ale na pewno to zrobi… kiedy przestanie jeść naleśniki. 🥞",
        "🔮 poznaj Atlas Pomni! Odkrywanie kosmosu stało się jeszcze ciekawsze.",
        "🧭 atlas oferuje wyszukiwanie, quiz, osiągnięcia i zapisywanie postępów.",
        "👾 są tam również dźwięki i boss. mam nadzieję, że się nie przestraszysz. he he.",
        "🧪 kolejną nowością jest Laboratorium Szalonego Dave'a!",
        "🌻 przygotuj rośliny i broń się przed zombie. Dave znowu coś kombinuje.",
        "⚔️ czeka na ciebie aż 20 fal! Zobaczymy, jak daleko zajdziesz.",
        "🇵🇱 przy okazji, na stronie jest już dostępny język polski. dzień dobry!",
        "🇳🇱 dodaliśmy również język niderlandzki. hallo, kosmiczni podróżnicy!",
        "to już wszystkie nowości. odwiedź nowe sekcje, a potem kliknij mnie, aby zamknąć to okno. heh."
    ],

    nl: [
        "💀 hé. ik ben er weer, Sans. we hebben wat nieuws.",
        "🚧 trouwens, dit is voorlopig nog een demoversie. Malenkov heeft nog niet alles afgemaakt wat hij wilde toevoegen, maar dat komt zeker goed… zodra hij stopt met pannenkoeken eten. 🥞",
        "🔮 maak kennis met Pomni's Atlas! De ruimte verkennen is nu nog interessanter.",
        "🧭 de atlas bevat een zoekfunctie, een quiz, prestaties en opgeslagen voortgang.",
        "👾 er zijn ook geluiden en een eindbaas. hopelijk schrik je niet. hehe.",
        "🧪 de volgende toevoeging is Crazy Dave's Laboratorium!",
        "🌻 maak je planten klaar en verdedig jezelf tegen zombies. Dave heeft vast weer iets bedacht.",
        "⚔️ er wachten maar liefst 20 golven op je! Eens kijken hoe ver je komt.",
        "🇵🇱 trouwens, de website is nu ook beschikbaar in het Pools. dzień dobry!",
        "🇳🇱 ook het Nederlands is toegevoegd. hallo, ruimtereizigers!",
        "dat was het nieuws voor nu. ontdek de nieuwe onderdelen en klik daarna op mij om dit venster te sluiten. heh."
    ]
};
// 💀 Санс объявляет о полноценном обновлении
const fullUpdateMessages = {
    ru: "🚀 хорошие новости! это уже полноценное обновление, а не демоверсия! новые разделы готовы, польский и нидерландский языки добавлены. Маленков всё-таки справился… хотя блины, наверное, ему помогли. 🥞",

    kk: "🚀 жақсы жаңалық! енді бұл демо-нұсқа емес, толыққанды жаңарту! жаңа бөлімдер дайын, поляк және нидерланд тілдері қосылды. Маленков ақыры бәрін аяқтады… құймақтардың көмегі тиген шығар. 🥞",

    cs: "🚀 skvělé zprávy! už jde o plnohodnotnou aktualizaci, ne o demo verzi! nové sekce jsou připravené a přibyla polština i nizozemština. Malenkov to nakonec zvládl… možná mu pomohly palačinky. 🥞",

    en: "🚀 good news! this is now a full update, not a demo version! The new sections are ready, and Polish and Dutch have been added. Malenkov finally pulled it off… maybe the pancakes helped. 🥞",

    de: "🚀 gute Nachrichten! Das ist jetzt ein vollständiges Update und keine Demoversion mehr! Die neuen Bereiche sind fertig, und Polnisch sowie Niederländisch sind hinzugekommen. Malenkov hat es tatsächlich geschafft… vielleicht haben die Pfannkuchen geholfen. 🥞",

    fr: "🚀 bonne nouvelle ! il s'agit maintenant d'une mise à jour complète, et non plus d'une version démo ! Les nouvelles sections sont prêtes, et le polonais ainsi que le néerlandais ont été ajoutés. Malenkov a finalement réussi… les crêpes l'ont peut-être aidé. 🥞",

    es: "🚀 ¡buenas noticias! ¡ahora es una actualización completa, no una versión de demostración! Las nuevas secciones están listas y se han añadido el polaco y el neerlandés. Malenkov por fin lo consiguió… quizá las tortitas le ayudaron. 🥞",

    it: "🚀 buone notizie! ora è un aggiornamento completo, non più una versione demo! Le nuove sezioni sono pronte e sono state aggiunte le lingue polacca e neerlandese. Malenkov ce l'ha finalmente fatta… forse i pancake lo hanno aiutato. 🥞",

    pl: "🚀 świetna wiadomość! to już pełna aktualizacja, a nie wersja demonstracyjna! Nowe sekcje są gotowe, a na stronie pojawiły się języki polski i niderlandzki. Malenkovowi w końcu się udało… może pomogły mu naleśniki. 🥞",

    nl: "🚀 goed nieuws! dit is nu een volledige update en geen demoversie meer! De nieuwe onderdelen zijn klaar en Pools en Nederlands zijn toegevoegd. Malenkov heeft het eindelijk voor elkaar gekregen… misschien hebben de pannenkoeken geholpen. 🥞"
};

// Заменяем старое сообщение о демоверсии новым
Object.entries(fullUpdateMessages).forEach(([lang, message]) => {
    if (Array.isArray(sansUpdatesTranslations[lang])) {
        sansUpdatesTranslations[lang][1] = message;
    }
});


Object.entries(sansUpdatesTranslations).forEach(([lang, paragraphs]) => {
    if (sansNews[lang]) {
        sansNews[lang].sansUpdates = paragraphs;
    }
});

    if (typeof newSectionsTranslations === "undefined") {
        console.error(
            "Словарь newSectionsTranslations не найден. Проверь, что основной script.js содержит переводы новых разделов."
        );
        return;
    }

    Object.entries(sansNews).forEach(([lang, news]) => {
        if (newSectionsTranslations[lang]) {
            Object.assign(newSectionsTranslations[lang], news);
        }
    });

    if (typeof updateNewSectionsLanguage === "function") {
        updateNewSectionsLanguage();
    }
})();
/* =========================================
   💀 ОБНОВЛЯЕМ ПЕРЕВОДЫ САНСА
   ПОСЛЕ ЗАГРУЗКИ ВСЕХ СЛОВАРЕЙ
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    if (typeof updateNewSectionsLanguage === "function") {
        updateNewSectionsLanguage();
    }
}); 

/* =========================================
   💌 ЛИЧНЫЕ ПОСЛАНИЯ
========================================= */

const personalMessages = {
    miras: {
        title: "Для Мираса",
        text: `непослушный алихан это не для тебя послание иди в свою кнопку

даров мирас хотел тебе сказать что не воспринимай мои слова в серьёз тогда не знаю почему но мне кажется что ты разочарован в чём то и на самом деле ни одно слово нн было адресовано тебе если тебе показалось иное то тебе кажется не бери всё близко к сердцу ведь всё же не каждое слово то правда то и не сбылось тем более ваще у тебя там миллион будет впереди комуникаций которые будут и по хреще меня обзываться поэтому по стоять за себя те придётся хотя ты это и без моих убеждений знаешь стримись живи и продвигайся дальше`
    },

    alikhan: {
        title: "Для Алихана",
        text: `наивный мирас что тут лезешь не для тебя тут слова они не тебе нужны так что вали отсюда

здаров алихан чё хотел тебе сказать так это то что несмотря на все травли что ты получал в школе ты ж всё понимал что это всё не так прям было для тя опазно но уважение кидаю что не стал как нытик и слабак жаловаться а пережил тот период унижений которые я тебе надовал в 9 классе и если я делал это для прикола и больше иронизировал это но с другими придурками лучше не лезть в драку: если они сильнее, отойди и обратись за помощью. Это не слабость, а способ защитить себя. В общем живи радуйся и не комплексуй дышы полной грудью и т.д (а ещё на другие языки это сообщение можешь не проверять я не переводил)`
    }
};

function openPersonalMessage(person) {
    const message = personalMessages[person];
    const modal = document.getElementById("personalMessageModal");
    const title = document.getElementById("personalMessageTitle");
    const text = document.getElementById("personalMessageText");

    if (!message || !modal || !title || !text) {
        return;
    }

    title.textContent = message.title;
    text.textContent = message.text;

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closePersonalMessage() {
    const modal = document.getElementById("personalMessageModal");

    if (modal) {
        modal.classList.remove("open");
    }

    document.body.style.overflow = "";
}

document.addEventListener("click", function (event) {
    const modal = document.getElementById("personalMessageModal");

    if (modal && event.target === modal) {
        closePersonalMessage();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closePersonalMessage();
    }
});

/* 🌐 Закрепляем весь контейнер языков поверх страницы */
function ensureLanguageMenuOnTop() {
    const menu = document.querySelector(".language-menu");
    const dropdown = document.getElementById("languageDropdown");

    if (!menu || !dropdown) return null;

    // Переносим весь контейнер из header непосредственно в body
    if (menu.parentElement !== document.body) {
        document.body.appendChild(menu);
    }

    // Список должен оставаться внутри контейнера
    if (dropdown.parentElement !== menu) {
        menu.appendChild(dropdown);
    }

    return { menu, dropdown };
}

/* Открытие и закрытие списка */
function toggleLanguageMenu() {
    const elements = ensureLanguageMenuOnTop();

    if (!elements) return;

    elements.dropdown.classList.toggle("open");
}

/* Закрытие при клике за пределами меню */
document.addEventListener("click", event => {
    const elements = ensureLanguageMenuOnTop();

    if (!elements) return;

    const { menu, dropdown } = elements;

    if (!menu.contains(event.target)) {
        dropdown.classList.remove("open");
    }
});

/* Подготавливаем меню после загрузки HTML */
if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        ensureLanguageMenuOnTop
    );
} else {
    ensureLanguageMenuOnTop();
}
