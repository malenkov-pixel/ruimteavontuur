const planets = {
    "Меркурий": {
        icon: "☿",
        ru: {
            name: "Меркурий",
            description: "Меркурий — ближайшая к Солнцу и самая маленькая планета Солнечной системы.",
            temperature: "от −180°C до +430°C",
            diameter: "4 879 км",
            mass: "3,30 × 10²³ кг",
            distance: "57,9 млн км",
            day: "58,6 земных суток",
            year: "88 земных суток",
            moons: "0",
            rings: "Нет",
            atmosphere: "Очень разреженная экзосфера",
            fact: "Меркурий обращается вокруг Солнца быстрее любой другой планеты."
        },
        kk: {
            name: "Меркурий",
            description: "Меркурий — Күнге ең жақын әрі Күн жүйесіндегі ең кішкентай ғаламшар.",
            temperature: "−180°C-тан +430°C-қа дейін",
            diameter: "4 879 км",
            mass: "3,30 × 10²³ кг",
            distance: "57,9 млн км",
            day: "58,6 Жер тәулігі",
            year: "88 Жер тәулігі",
            moons: "0",
            rings: "Жоқ",
            atmosphere: "Өте сирек экзосфера",
            fact: "Меркурий Күнді басқа ғаламшарлардың бәрінен жылдамырақ айналып өтеді."
        },
        cs: {
            name: "Merkur",
            description: "Merkur je planeta nejbližší Slunci a zároveň nejmenší planeta Sluneční soustavy.",
            temperature: "od −180 °C do +430 °C",
            diameter: "4 879 km",
            mass: "3,30 × 10²³ kg",
            distance: "57,9 mil. km",
            day: "58,6 pozemského dne",
            year: "88 pozemských dnů",
            moons: "0",
            rings: "Ne",
            atmosphere: "Velmi řídká exosféra",
            fact: "Merkur oběhne Slunce rychleji než kterákoli jiná planeta."
        }
    },

    "Венера": {
        icon: "♀",
        ru: {
            name: "Венера",
            description: "Венера — вторая планета от Солнца и самая горячая планета Солнечной системы.",
            temperature: "около +465°C",
            diameter: "12 104 км",
            mass: "4,87 × 10²⁴ кг",
            distance: "108,2 млн км",
            day: "243 земных суток",
            year: "225 земных суток",
            moons: "0",
            rings: "Нет",
            atmosphere: "Плотная, в основном углекислый газ",
            fact: "Венера вращается вокруг своей оси в обратном направлении."
        },
        kk: {
            name: "Шолпан",
            description: "Шолпан — Күннен екінші ғаламшар және Күн жүйесіндегі ең ыстық ғаламшар.",
            temperature: "шамамен +465°C",
            diameter: "12 104 км",
            mass: "4,87 × 10²⁴ кг",
            distance: "108,2 млн км",
            day: "243 Жер тәулігі",
            year: "225 Жер тәулігі",
            moons: "0",
            rings: "Жоқ",
            atmosphere: "Тығыз, негізінен көмірқышқыл газынан тұрады",
            fact: "Шолпан өз осінен басқа ғаламшарлардың көпшілігіне қарама-қарсы бағытта айналады."
        },
        cs: {
            name: "Venuše",
            description: "Venuše je druhá planeta od Slunce a nejteplejší planeta Sluneční soustavy.",
            temperature: "asi +465 °C",
            diameter: "12 104 km",
            mass: "4,87 × 10²⁴ kg",
            distance: "108,2 mil. km",
            day: "243 pozemských dnů",
            year: "225 pozemských dnů",
            moons: "0",
            rings: "Ne",
            atmosphere: "Hustá, převážně oxid uhličitý",
            fact: "Venuše se otáčí kolem své osy opačným směrem než většina planet."
        }
    },

    "Земля": {
        icon: "🌍",
        ru: {
            name: "Земля",
            description: "Земля — третья планета от Солнца и наш родной дом.",
            temperature: "в среднем около +15°C",
            diameter: "12 742 км",
            mass: "5,97 × 10²⁴ кг",
            distance: "149,6 млн км",
            day: "24 часа",
            year: "365,25 суток",
            moons: "1 — Луна",
            rings: "Нет",
            atmosphere: "Азот, кислород и другие газы",
            fact: "Около 71% поверхности Земли покрыто водой."
        },
        kk: {
            name: "Жер",
            description: "Жер — Күннен үшінші ғаламшар және біздің туған үйіміз.",
            temperature: "орташа шамамен +15°C",
            diameter: "12 742 км",
            mass: "5,97 × 10²⁴ кг",
            distance: "149,6 млн км",
            day: "24 сағат",
            year: "365,25 тәулік",
            moons: "1 — Ай",
            rings: "Жоқ",
            atmosphere: "Азот, оттегі және басқа газдар",
            fact: "Жер бетінің шамамен 71%-ын су алып жатыр."
        },
        cs: {
            name: "Země",
            description: "Země je třetí planeta od Slunce a náš domov.",
            temperature: "v průměru asi +15 °C",
            diameter: "12 742 km",
            mass: "5,97 × 10²⁴ kg",
            distance: "149,6 mil. km",
            day: "24 hodin",
            year: "365,25 dne",
            moons: "1 — Měsíc",
            rings: "Ne",
            atmosphere: "Dusík, kyslík a další plyny",
            fact: "Přibližně 71 % povrchu Země pokrývá voda."
        }
    },

    "Марс": {
        icon: "♂",
        ru: {
            name: "Марс",
            description: "Марс — четвёртая планета от Солнца, известная своим красноватым цветом.",
            temperature: "в среднем около −63°C",
            diameter: "6 779 км",
            mass: "6,42 × 10²³ кг",
            distance: "227,9 млн км",
            day: "24 часа 37 минут",
            year: "687 земных суток",
            moons: "2 — Фобос и Деймос",
            rings: "Нет",
            atmosphere: "Очень разреженная, в основном углекислый газ",
            fact: "На Марсе находится Олимп — крупнейший известный вулкан Солнечной системы."
        },
        kk: {
            name: "Марс",
            description: "Марс — Күннен төртінші ғаламшар, қызғылт түсімен танымал.",
            temperature: "орташа шамамен −63°C",
            diameter: "6 779 км",
            mass: "6,42 × 10²³ кг",
            distance: "227,9 млн км",
            day: "24 сағат 37 минут",
            year: "687 Жер тәулігі",
            moons: "2 — Фобос және Деймос",
            rings: "Жоқ",
            atmosphere: "Өте сирек, негізінен көмірқышқыл газы",
            fact: "Марста Күн жүйесіндегі белгілі ең үлкен жанартау — Олимп тауы орналасқан."
        },
        cs: {
            name: "Mars",
            description: "Mars je čtvrtá planeta od Slunce, známá svou načervenalou barvou.",
            temperature: "v průměru asi −63 °C",
            diameter: "6 779 km",
            mass: "6,42 × 10²³ kg",
            distance: "227,9 mil. km",
            day: "24 hodin 37 minut",
            year: "687 pozemských dnů",
            moons: "2 — Phobos a Deimos",
            rings: "Ne",
            atmosphere: "Velmi řídká, převážně oxid uhličitý",
            fact: "Na Marsu se nachází Olympus Mons, největší známá sopka Sluneční soustavy."
        }
    },

    "Юпитер": {
        icon: "♃",
        ru: {
            name: "Юпитер",
            description: "Юпитер — крупнейшая планета Солнечной системы и газовый гигант.",
            temperature: "около −110°C",
            diameter: "139 820 км",
            mass: "1,90 × 10²⁷ кг",
            distance: "778,5 млн км",
            day: "около 9 часов 56 минут",
            year: "11,86 земных лет",
            moons: "много",
            rings: "Есть, но очень слабые",
            atmosphere: "В основном водород и гелий",
            fact: "Большое красное пятно — гигантский атмосферный вихрь."
        },
        kk: {
            name: "Юпитер",
            description: "Юпитер — Күн жүйесіндегі ең үлкен ғаламшар және газды алып.",
            temperature: "шамамен −110°C",
            diameter: "139 820 км",
            mass: "1,90 × 10²⁷ кг",
            distance: "778,5 млн км",
            day: "шамамен 9 сағат 56 минут",
            year: "11,86 Жер жылы",
            moons: "көп",
            rings: "Бар, бірақ өте әлсіз",
            atmosphere: "Негізінен сутек пен гелий",
            fact: "Үлкен Қызыл Дақ — алып атмосфералық құйын."
        },
        cs: {
            name: "Jupiter",
            description: "Jupiter je největší planeta Sluneční soustavy a plynný obr.",
            temperature: "asi −110 °C",
            diameter: "139 820 km",
            mass: "1,90 × 10²⁷ kg",
            distance: "778,5 mil. km",
            day: "asi 9 hodin 56 minut",
            year: "11,86 pozemského roku",
            moons: "mnoho",
            rings: "Ano, ale velmi slabé",
            atmosphere: "Převážně vodík a helium",
            fact: "Velká rudá skvrna je obrovský atmosférický vír."
        }
    },

    "Сатурн": {
        icon: "♄",
        ru: {
            name: "Сатурн",
            description: "Сатурн — газовый гигант, знаменитый своей системой колец.",
            temperature: "около −140°C",
            diameter: "116 460 км",
            mass: "5,68 × 10²⁶ кг",
            distance: "1,43 млрд км",
            day: "около 10 часов 33 минут",
            year: "29,5 земных лет",
            moons: "много",
            rings: "Да, очень заметные",
            atmosphere: "В основном водород и гелий",
            fact: "Кольца Сатурна состоят в основном изо льда и каменных частиц."
        },
        kk: {
            name: "Сатурн",
            description: "Сатурн — сақиналар жүйесімен әйгілі газды алып.",
            temperature: "шамамен −140°C",
            diameter: "116 460 км",
            mass: "5,68 × 10²⁶ кг",
            distance: "1,43 млрд км",
            day: "шамамен 10 сағат 33 минут",
            year: "29,5 Жер жылы",
            moons: "көп",
            rings: "Иә, өте айқын",
            atmosphere: "Негізінен сутек пен гелий",
            fact: "Сатурнның сақиналары негізінен мұз бен тас бөлшектерінен тұрады."
        },
        cs: {
            name: "Saturn",
            description: "Saturn je plynný obr známý svou výraznou soustavou prstenců.",
            temperature: "asi −140 °C",
            diameter: "116 460 km",
            mass: "5,68 × 10²⁶ kg",
            distance: "1,43 mld. km",
            day: "asi 10 hodin 33 minut",
            year: "29,5 pozemského roku",
            moons: "mnoho",
            rings: "Ano, velmi výrazné",
            atmosphere: "Převážně vodík a helium",
            fact: "Saturnovy prstence jsou tvořeny převážně ledem a kamennými částicemi."
        }
    },

    "Уран": {
        icon: "♅",
        ru: {
            name: "Уран",
            description: "Уран — ледяной гигант с необычным наклоном оси вращения.",
            temperature: "около −195°C",
            diameter: "50 724 км",
            mass: "8,68 × 10²⁵ кг",
            distance: "2,87 млрд км",
            day: "около 17 часов 14 минут",
            year: "84 земных года",
            moons: "много",
            rings: "Да",
            atmosphere: "Водород, гелий и метан",
            fact: "Уран вращается почти лёжа на боку."
        },
        kk: {
            name: "Уран",
            description: "Уран — айналу осінің ерекше көлбеулігі бар мұзды алып.",
            temperature: "шамамен −195°C",
            diameter: "50 724 км",
            mass: "8,68 × 10²⁵ кг",
            distance: "2,87 млрд км",
            day: "шамамен 17 сағат 14 минут",
            year: "84 Жер жылы",
            moons: "көп",
            rings: "Иә",
            atmosphere: "Сутек, гелий және метан",
            fact: "Уран өз осінде бүйірімен жатқандай болып айналады."
        },
        cs: {
            name: "Uran",
            description: "Uran je ledový obr s neobvyklým sklonem rotační osy.",
            temperature: "asi −195 °C",
            diameter: "50 724 km",
            mass: "8,68 × 10²⁵ kg",
            distance: "2,87 mld. km",
            day: "asi 17 hodin 14 minut",
            year: "84 pozemských let",
            moons: "mnoho",
            rings: "Ano",
            atmosphere: "Vodík, helium a metan",
            fact: "Uran se otáčí téměř jako planeta ležící na boku."
        }
    },

    "Нептун": {
        icon: "♆",
        ru: {
            name: "Нептун",
            description: "Нептун — восьмая и самая далёкая от Солнца планета.",
            temperature: "около −200°C",
            diameter: "49 244 км",
            mass: "1,02 × 10²⁶ кг",
            distance: "4,5 млрд км",
            day: "около 16 часов",
            year: "164,8 земных года",
            moons: "много",
            rings: "Да, слабые",
            atmosphere: "Водород, гелий и метан",
            fact: "На Нептуне наблюдаются очень быстрые ветры."
        },
        kk: {
            name: "Нептун",
            description: "Нептун — Күннен сегізінші және ең алыс ғаламшар.",
            temperature: "шамамен −200°C",
            diameter: "49 244 км",
            mass: "1,02 × 10²⁶ кг",
            distance: "4,5 млрд км",
            day: "шамамен 16 сағат",
            year: "164,8 Жер жылы",
            moons: "көп",
            rings: "Иә, әлсіз",
            atmosphere: "Сутек, гелий және метан",
            fact: "Нептунда өте жылдам желдер байқалады."
        },
        cs: {
            name: "Neptun",
            description: "Neptun je osmá a nejvzdálenější planeta od Slunce.",
            temperature: "asi −200 °C",
            diameter: "49 244 km",
            mass: "1,02 × 10²⁶ kg",
            distance: "4,5 mld. km",
            day: "asi 16 hodin",
            year: "164,8 pozemského roku",
            moons: "mnoho",
            rings: "Ano, slabé",
            atmosphere: "Vodík, helium a metan",
            fact: "Na Neptunu se vyskytují velmi rychlé větry."
        }
    },

    "Плутон": {
        icon: "♇",
        ru: {
            name: "Плутон",
            description: "Плутон — карликовая планета в поясе Койпера.",
            temperature: "около −230°C",
            diameter: "2 377 км",
            mass: "1,30 × 10²² кг",
            distance: "около 5,9 млрд км",
            day: "6,4 земных суток",
            year: "248 земных лет",
            moons: "5 — крупнейший Харон",
            rings: "Нет",
            atmosphere: "Очень разреженная",
            fact: "Плутон совершает один оборот вокруг Солнца примерно за 248 земных лет."
        },
        kk: {
            name: "Плутон",
            description: "Плутон — Койпер белдеуіндегі ергежейлі ғаламшар.",
            temperature: "шамамен −230°C",
            diameter: "2 377 км",
            mass: "1,30 × 10²² кг",
            distance: "шамамен 5,9 млрд км",
            day: "6,4 Жер тәулігі",
            year: "248 Жер жылы",
            moons: "5 — ең үлкені Харон",
            rings: "Жоқ",
            atmosphere: "Өте сирек",
            fact: "Плутон Күнді шамамен 248 Жер жылында бір рет айналып шығады."
        },
        cs: {
            name: "Pluto",
            description: "Pluto je trpasličí planeta v Kuiperově pásu.",
            temperature: "asi −230 °C",
            diameter: "2 377 km",
            mass: "1,30 × 10²² kg",
            distance: "asi 5,9 mld. km",
            day: "6,4 pozemského dne",
            year: "248 pozemských let",
            moons: "5 — největší Charon",
            rings: "Ne",
            atmosphere: "Velmi řídká",
            fact: "Pluto oběhne Slunce přibližně jednou za 248 pozemských let."
        }
    }
};

const languages = {
    ru: {
        siteTitle: "🌌 Космическое приключение имени папайруса",
        siteSubtitle: "Исследуй Солнечную систему 🚀",
        welcomeTitle: "Добро пожаловать в космос!",
        welcomeText: "Отправляйся в путешествие по Солнечной системе, изучай планеты и узнавай интересные факты о них.",
        startButton: "Начать путешествие 🚀",
        moonsButton: "🌙 Исследовать спутники",
        planetsTitle: "🪐 Планеты",
        temperature: "Температура:",
        diameter: "Диаметр:",
        mass: "Масса:",
        distance: "Расстояние от Солнца:",
        day: "Длина дня:",
        year: "Длина года:",
        moons: "Спутники:",
        rings: "Кольца:",
        atmosphere: "Атмосфера:",
        fact: "🔭 Интересный факт",
        footer: "🌌 Космическое приключение имени папайруса © 2026",
        close: "Закрыть"
    },

    kk: {
        siteTitle: "🌌 Ғарыштық саяхат",
        siteSubtitle: "Күн жүйесін зертте 🚀",
        welcomeTitle: "Ғарышқа қош келдің!",
        welcomeText: "Күн жүйесі бойынша саяхатқа шығып, ғаламшарларды зерттеп, олар туралы қызықты деректерді біл.",
        startButton: "Саяхатты бастау 🚀",
        moonsButton: "🌙 Серіктерді зерттеу",
        planetsTitle: "🪐 Ғаламшарлар",
        temperature: "Температурасы:",
        diameter: "Диаметрі:",
        mass: "Массасы:",
        distance: "Күннен қашықтығы:",
        day: "Бір тәулігінің ұзақтығы:",
        year: "Бір жылының ұзақтығы:",
        moons: "Серіктері:",
        rings: "Сақиналары:",
        atmosphere: "Атмосферасы:",
        fact: "🔭 Қызықты дерек",
        footer: "🌌 Папайрус атындағы ғарыштық саяхат © 2026",
        close: "Жабу"
    },

    cs: {
        siteTitle: "🌌 Vesmírné dobrodružství",
        siteSubtitle: "Prozkoumej Sluneční soustavu 🚀",
        welcomeTitle: "Vítej ve vesmíru!",
        welcomeText: "Vydej se na cestu Sluneční soustavou, prozkoumávej planety a objevuj zajímavá fakta.",
        startButton: "Začít dobrodružství 🚀",
        moonsButton: "🌙 Prozkoumat měsíce",
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
        footer: "🌌 Vesmírné dobrodružství jménem Papyrus © 2026",
        close: "Zavřít"
    }
};

let currentLanguage = "ru";


/* 🌙 Переводы раздела спутников */

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
    }
};


/* 🌙 Названия и описания карточек спутников */

const moonCardTranslations = {
    ru: {
        "Луна": "Естественный спутник Земли.",
        "Фобос": "Ближайший спутник Марса.",
        "Деймос": "Маленький спутник Марса.",
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
    }
};

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
    }
};


/* 🌙 Данные спутников */

const moons = {
    "Луна": {
        icon: "🌕",
        planet: "Земля",
        diameter: "3 474 км",
        temperature: "примерно от −173°C до +127°C",
        description: "Луна — естественный спутник Земли.",
        fact: "Луна всегда обращена к Земле одной и той же стороной."
    },

    "Фобос": {
        icon: "🔴",
        planet: "Марс",
        diameter: "около 22 км",
        temperature: "очень низкая",
        description: "Фобос — крупнейший и ближайший спутник Марса.",
        fact: "Фобос постепенно приближается к Марсу."
    },

    "Деймос": {
        icon: "🔴",
        planet: "Марс",
        diameter: "около 12 км",
        temperature: "очень низкая",
        description: "Деймос — небольшой спутник Марса.",
        fact: "Название Деймос означает «ужас»."
    },

    "Ио": {
        icon: "🟠",
        planet: "Юпитер",
        diameter: "3 643 км",
        temperature: "около −130°C на поверхности",
        description: "Ио — спутник Юпитера с чрезвычайно активными вулканами.",
        fact: "Ио считается самым вулканически активным миром Солнечной системы."
    },

    "Европа": {
        icon: "🧊",
        planet: "Юпитер",
        diameter: "3 122 км",
        temperature: "около −160°C",
        description: "Европа — ледяной спутник Юпитера.",
        fact: "Под её ледяной поверхностью, вероятно, находится океан."
    },

    "Ганимед": {
        icon: "🌑",
        planet: "Юпитер",
        diameter: "5 268 км",
        temperature: "около −160°C",
        description: "Ганимед — крупнейший спутник Солнечной системы.",
        fact: "Ганимед больше планеты Меркурий по диаметру."
    },

    "Каллисто": {
        icon: "🌑",
        planet: "Юпитер",
        diameter: "4 821 км",
        temperature: "около −140°C",
        description: "Каллисто — один из крупнейших спутников Юпитера.",
        fact: "Поверхность Каллисто покрыта множеством ударных кратеров."
    },

    "Титан": {
        icon: "🪐",
        planet: "Сатурн",
        diameter: "5 150 км",
        temperature: "около −179°C",
        description: "Титан — крупнейший спутник Сатурна.",
        fact: "Титан имеет плотную атмосферу и моря из жидких углеводородов."
    },

    "Энцелад": {
        icon: "❄️",
        planet: "Сатурн",
        diameter: "около 504 км",
        temperature: "около −200°C",
        description: "Энцелад — небольшой ледяной спутник Сатурна.",
        fact: "Из его южной области вырываются струи водяного пара и льда."
    },

    "Тритон": {
        icon: "🔵",
        planet: "Нептун",
        diameter: "2 707 км",
        temperature: "около −235°C",
        description: "Тритон — крупнейший спутник Нептуна.",
        fact: "Тритон движется вокруг Нептуна в обратном направлении относительно вращения планеты."
    }
};


/* 🌍 Перевод планет */

function updatePlanetCards() {
    const cardMap = {
        "Меркурий": "mercury",
        "Венера": "venus",
        "Земля": "earth",
        "Марс": "mars",
        "Юпитер": "jupiter",
        "Сатурн": "saturn",
        "Уран": "uranus",
        "Нептун": "neptune",
        "Плутон": "pluto"
    };

    Object.entries(cardMap).forEach(([russianName, id]) => {
        const planet = planets[russianName][currentLanguage];

        const title = document.getElementById(`planet-title-${id}`);
        const description = document.getElementById(`planet-desc-${id}`);

        if (title) {
            title.textContent = planet.name;
        }

        if (description) {
            description.textContent = getShortDescription(russianName);
        }
    });
}

function getShortDescription(name) {
    const descriptions = {
        ru: {
            "Меркурий": "Ближайшая к Солнцу планета.",
            "Венера": "Самая горячая планета.",
            "Земля": "Наш родной дом.",
            "Марс": "Красная планета.",
            "Юпитер": "Крупнейшая планета Солнечной системы.",
            "Сатурн": "Планета с великолепными кольцами.",
            "Уран": "Ледяной гигант.",
            "Нептун": "Самая далёкая планета.",
            "Плутон": "Карликовая планета пояса Койпера."
        },

        kk: {
            "Меркурий": "Күнге ең жақын ғаламшар.",
            "Венера": "Ең ыстық ғаламшар.",
            "Земля": "Біздің туған үйіміз.",
            "Марс": "Қызыл ғаламшар.",
            "Юпитер": "Күн жүйесіндегі ең үлкен ғаламшар.",
            "Сатурн": "Керемет сақиналары бар ғаламшар.",
            "Уран": "Мұзды алып.",
            "Нептун": "Ең алыс ғаламшар.",
            "Плутон": "Койпер белдеуіндегі ергежейлі ғаламшар."
        },

        cs: {
            "Меркурий": "Planeta nejbližší Slunci.",
            "Венера": "Nejteplejší planeta.",
            "Земля": "Náš domov.",
            "Марс": "Rudá planeta.",
            "Юпитер": "Největší planeta Sluneční soustavy.",
            "Сатурн": "Planeta s nádhernými prstenci.",
            "Уран": "Ledový obr.",
            "Нептун": "Nejvzdálenější planeta.",
            "Плутон": "Trpasličí planeta Kuiperova pásu."
        }
    };

    return descriptions[currentLanguage][name];
}


/* 🌙 Перевод карточек спутников */

function updateMoonCards() {
    const cards = document.querySelectorAll(".moon-card");

    cards.forEach(card => {
        const moonName = card.dataset.moon;

        if (!moonName) {
            return;
        }

        const title = card.querySelector("h3");
        const description = card.querySelector("p");

        if (!title || !description) {
            return;
        }

        title.textContent =
            moonCardNames[currentLanguage]?.[moonName] || moonName;

        description.textContent =
            moonCardTranslations[currentLanguage]?.[moonName] || "";
    });
}


/* 🌙 Перевод заголовка раздела спутников */

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

    document.querySelectorAll("#moonsSectionTitle").forEach(element => {
        element.textContent = data.title;
    });

    document.querySelectorAll("#moonsSectionText").forEach(element => {
        element.textContent = data.text;
    });
}


/* 🌐 Смена языка */

function changeLanguage(language) {
    if (!languages[language]) {
        return;
    }

    currentLanguage = language;

    const text = languages[language];

    document.documentElement.lang =
        language === "kk" ? "kk" : language;

    const elements = {
        siteTitle: text.siteTitle,
        siteSubtitle: text.siteSubtitle,
        welcomeTitle: text.welcomeTitle,
        welcomeText: text.welcomeText,
        startButton: text.startButton,
        moonsButton: text.moonsButton,
        planetsTitle: text.planetsTitle,
        labelTemperature: text.temperature,
        labelDiameter: text.diameter,
        labelMass: text.mass,
        labelDistance: text.distance,
        labelDay: text.day,
        labelYear: text.year,
        labelMoons: text.moons,
        labelRings: text.rings,
        labelAtmosphere: text.atmosphere,
        factTitle: text.fact,
        footerText: text.footer
    };

    Object.entries(elements).forEach(([id, value]) => {
        const element = document.getElementById(id);

        if (element) {
            element.textContent = value;
        }
    });

    /* ❌ Перевод кнопок закрытия обоих окон */

    document.querySelectorAll(".close-button").forEach(button => {
        button.setAttribute("aria-label", text.close);
    });

    updatePlanetCards();
    updateMoonCards();
    updateMoonSectionLanguage();

    /* 🇷🇺🇰🇿🇨🇿 Кнопка языка */

    const languageButton = document.getElementById("languageButton");

    if (languageButton) {
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
            }
        };

        const selected = languageData[language];

        if (selected) {
            languageButton.innerHTML = `
                <img src="${selected.flag}" alt="${selected.name}">
                ${selected.name}
            `;
        }
    }

    /* Если окно планеты уже открыто — обновляем его */

    const planetModal = document.getElementById("planetModal");

    if (planetModal && planetModal.classList.contains("active")) {
        const russianName = planetModal.dataset.planet;

        if (russianName) {
            fillPlanetModal(russianName);
        }
    }

    /* Если окно спутника уже открыто — обновляем его */

    const moonModal = document.getElementById("moonModal");

    if (moonModal && moonModal.classList.contains("active")) {
        const currentMoonName = moonModal.dataset.moon;

        if (currentMoonName) {
            showMoon(currentMoonName);
        }
    }
}


/* 🪐 Открытие планеты */

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
    const planet = planets[name][currentLanguage];

    if (!planet) {
        return;
    }

    const values = {
        planetIcon: planets[name].icon,
        planetName: planet.name,
        planetDescription: planet.description,
        planetTemperature: planet.temperature,
        planetDiameter: planet.diameter,
        planetMass: planet.mass,
        planetDistance: planet.distance,
        planetDay: planet.day,
        planetYear: planet.year,
        planetMoons: planet.moons,
        planetRings: planet.rings,
        planetAtmosphere: planet.atmosphere,
        planetFact: planet.fact
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


/* 🌙 Открытие спутника */

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

    const translations = {
        ru: {
            "Луна": {
                description: "Луна — естественный спутник Земли.",
                planet: "Земля",
                temperature: "примерно от −173°C до +127°C",
                fact: "Луна всегда обращена к Земле одной и той же стороной."
            },
            "Фобос": {
                description: "Фобос — крупнейший и ближайший спутник Марса.",
                planet: "Марс",
                temperature: "очень низкая",
                fact: "Фобос постепенно приближается к Марсу."
            },
            "Деймос": {
                description: "Деймос — небольшой спутник Марса.",
                planet: "Марс",
                temperature: "очень низкая",
                fact: "Название Деймос означает «ужас»."
            },
            "Ио": {
                description: "Ио — спутник Юпитера с чрезвычайно активными вулканами.",
                planet: "Юпитер",
                temperature: "около −130°C на поверхности",
                fact: "Ио считается самым вулканически активным миром Солнечной системы."
            },
            "Европа": {
                description: "Европа — ледяной спутник Юпитера.",
                planet: "Юпитер",
                temperature: "около −160°C",
                fact: "Под её ледяной поверхностью, вероятно, находится океан."
            },
            "Ганимед": {
                description: "Ганимед — крупнейший спутник Солнечной системы.",
                planet: "Юпитер",
                temperature: "около −160°C",
                fact: "Ганимед больше планеты Меркурий по диаметру."
            },
            "Каллисто": {
                description: "Каллисто — один из крупнейших спутников Юпитера.",
                planet: "Юпитер",
                temperature: "около −140°C",
                fact: "Поверхность Каллисто покрыта множеством ударных кратеров."
            },
            "Титан": {
                description: "Титан — крупнейший спутник Сатурна.",
                planet: "Сатурн",
                temperature: "около −179°C",
                fact: "Титан имеет плотную атмосферу и озёра жидкого метана."
            },
            "Энцелад": {
                description: "Энцелад — небольшой ледяной спутник Сатурна.",
                planet: "Сатурн",
                temperature: "около −200°C",
                fact: "Из его южной области вырываются струи водяного пара и льда."
            },
            "Тритон": {
                description: "Тритон — крупнейший спутник Нептуна.",
                planet: "Нептун",
                temperature: "около −235°C",
                fact: "Тритон движется вокруг Нептуна в обратном направлении относительно вращения планеты."
            }
        },

        kk: {
            "Луна": {
                description: "Ай — Жердің табиғи серігі.",
                planet: "Жер",
                temperature: "−173°C-тан +127°C-қа дейін",
                fact: "Ай әрдайым Жерге бір жағын ғана көрсетеді."
            },
            "Фобос": {
                description: "Фобос — Марстың ең үлкен әрі ең жақын серігі.",
                planet: "Марс",
                temperature: "өте төмен",
                fact: "Фобос біртіндеп Марсқа жақындап келеді."
            },
            "Деймос": {
                description: "Деймос — Марстың шағын серігі.",
                planet: "Марс",
                temperature: "өте төмен",
                fact: "Деймос атауы «қорқыныш» дегенді білдіреді."
            },
            "Ио": {
                description: "Ио — Юпитердің жанартаулық белсенді серігі.",
                planet: "Юпитер",
                temperature: "бетінде шамамен −130°C",
                fact: "Ио — Күн жүйесіндегі жанартаулық белсенділігі ең жоғары әлем."
            },
            "Европа": {
                description: "Еуропа — Юпитердің мұзды серігі.",
                planet: "Юпитер",
                temperature: "шамамен −160°C",
                fact: "Оның мұзды бетінің астында мұхит болуы мүмкін."
            },
            "Ганимед": {
                description: "Ганимед — Күн жүйесіндегі ең үлкен серік.",
                planet: "Юпитер",
                temperature: "шамамен −160°C",
                fact: "Ганимедтің диаметрі Меркурий планетасының диаметрінен үлкен."
            },
            "Каллисто": {
                description: "Каллисто — Юпитердің ең ірі серіктерінің бірі.",
                planet: "Юпитер",
                temperature: "шамамен −140°C",
                fact: "Каллистоның беті көптеген соққы кратерлерімен жабылған."
            },
            "Титан": {
                description: "Титан — Сатурнның ең үлкен серігі.",
                planet: "Сатурн",
                temperature: "шамамен −179°C",
                fact: "Титанда тығыз атмосфера және сұйық метан көлдері бар."
            },
            "Энцелад": {
                description: "Энцелад — Сатурнның шағын мұзды серігі.",
                planet: "Сатурн",
                temperature: "шамамен −200°C",
                fact: "Оның оңтүстік аймағынан су буы мен мұз ағындары атқылайды."
            },
            "Тритон": {
                description: "Тритон — Нептунның ең үлкен серігі.",
                planet: "Нептун",
                temperature: "шамамен −235°C",
                fact: "Тритон Нептунды планетаның айналу бағытына кері бағытта айналады."
            }
        },

        cs: {
            "Луна": {
                description: "Měsíc je přirozená družice Země.",
                planet: "Země",
                temperature: "přibližně od −173 °C do +127 °C",
                fact: "Měsíc ukazuje Zemi stále stejnou stranou."
            },
            "Фобос": {
                description: "Phobos je největší a nejbližší měsíc Marsu.",
                planet: "Mars",
                temperature: "velmi nízká",
                fact: "Phobos se postupně přibližuje k Marsu."
            },
            "Деймос": {
                description: "Deimos je malý měsíc Marsu.",
                planet: "Mars",
                temperature: "velmi nízká",
                fact: "Název Deimos znamená „děs“."
            },
            "Ио": {
                description: "Io je měsíc Jupiteru s mimořádně aktivními sopkami.",
                planet: "Jupiter",
                temperature: "asi −130 °C na povrchu",
                fact: "Io je považováno za vulkanicky nejaktivnější svět Sluneční soustavy."
            },
            "Европа": {
                description: "Europa je ledový měsíc Jupiteru.",
                planet: "Jupiter",
                temperature: "asi −160 °C",
                fact: "Pod jejím ledovým povrchem se pravděpodobně nachází oceán."
            },
            "Ганимед": {
                description: "Ganymed je největší měsíc Sluneční soustavy.",
                planet: "Jupiter",
                temperature: "asi −160 °C",
                fact: "Ganymed má větší průměr než planeta Merkur."
            },
            "Каллисто": {
                description: "Callisto je jeden z největších měsíců Jupiteru.",
                planet: "Jupiter",
                temperature: "asi −140 °C",
                fact: "Povrch Callisto je pokryt mnoha impaktními krátery."
            },
            "Титан": {
                description: "Titan je největší měsíc Saturnu.",
                planet: "Saturn",
                temperature: "asi −179 °C",
                fact: "Titan má hustou atmosféru a jezera kapalného metanu."
            },
            "Энцелад": {
                description: "Enceladus je malý ledový měsíc Saturnu.",
                planet: "Saturn",
                temperature: "asi −200 °C",
                fact: "Z jeho jižní oblasti vytryskávají proudy vodní páry a ledu."
            },
            "Тритон": {
                description: "Triton je největší měsíc Neptunu.",
                planet: "Neptun",
                temperature: "asi −235 °C",
                fact: "Triton obíhá Neptun opačným směrem, než se planeta otáčí."
            }
        }
    };

    const translated = translations[currentLanguage]?.[name];

    document.getElementById("moonIcon").textContent = moon.icon;

    document.getElementById("moonName").textContent =
        moonCardNames[currentLanguage]?.[name] || name;

    document.getElementById("moonDescription").textContent =
        translated?.description || moon.description;

    const planetNames = {
        ru: {
            "Земля": "Земля",
            "Марс": "Марс",
            "Юпитер": "Юпитер",
            "Сатурн": "Сатурн",
            "Нептун": "Нептун"
        },

        kk: {
            "Земля": "Жер",
            "Марс": "Марс",
            "Юпитер": "Юпитер",
            "Сатурн": "Сатурн",
            "Нептун": "Нептун"
        },

        cs: {
            "Земля": "Země",
            "Марс": "Mars",
            "Юпитер": "Jupiter",
            "Сатурн": "Saturn",
            "Нептун": "Neptun"
        }
    };

    const planetName = translated?.planet || moon.planet;

    document.getElementById("moonPlanet").textContent =
        planetNames[currentLanguage]?.[planetName] || planetName;

    document.getElementById("moonDiameter").textContent =
        moon.diameter;

    document.getElementById("moonTemperature").textContent =
        translated?.temperature || moon.temperature;

    document.getElementById("moonFact").textContent =
        translated?.fact || moon.fact;

    /* Перевод подписей */

    const labels = {
        ru: {
            planet: "Планета:",
            diameter: "Диаметр:",
            temperature: "Температура:",
            fact: "Интересный факт:"
        },

        kk: {
            planet: "Планета:",
            diameter: "Диаметр:",
            temperature: "Температура:",
            fact: "Қызықты дерек:"
        },

        cs: {
            planet: "Planeta:",
            diameter: "Průměr:",
            temperature: "Teplota:",
            fact: "Zajímavý fakt:"
        }
    };

    const currentLabels = labels[currentLanguage];

    const infoLabels =
        document.querySelectorAll("#moonModal .moon-info strong");

    if (infoLabels.length >= 4) {
        infoLabels[0].textContent = currentLabels.planet;
        infoLabels[1].textContent = currentLabels.diameter;
        infoLabels[2].textContent = currentLabels.temperature;
        infoLabels[3].textContent = currentLabels.fact;
    }

    modal.dataset.moon = name;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}


/* ❌ Закрытие спутника */

function closeMoon() {
    const modal = document.getElementById("moonModal");

    if (modal) {
        modal.classList.remove("active");
        modal.dataset.moon = "";
    }

    document.body.style.overflow = "";
}


/* 🪐 Закрытие окна планеты по клику */

const planetModal = document.getElementById("planetModal");

if (planetModal) {
    planetModal.addEventListener("click", function(event) {
        if (event.target === planetModal) {
            closePlanet();
        }
    });
}


/* 🌙 Закрытие окна спутника по клику */

const moonModal = document.getElementById("moonModal");

if (moonModal) {
    moonModal.addEventListener("click", function(event) {
        if (event.target === moonModal) {
            closeMoon();
        }
    });
}


/* ⌨️ Escape */

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closePlanet();
        closeMoon();
    }
});


/* ⭐ Создание звёзд */

for (let i = 0; i < 120; i++) {
    const star = document.createElement("div");

    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.animationDelay = Math.random() * 3 + "s";

    document.body.appendChild(star);
}


/* ☄️ Кометы */

function createComet() {
    const comet = document.createElement("div");
    const tail = document.createElement("div");

    comet.className = "comet";
    tail.className = "comet-tail";

    document.body.appendChild(tail);
    document.body.appendChild(comet);

    const startX = window.innerWidth + 60;
    const startY = -60;
    const endX = -150;
    const endY = window.innerHeight + 150;

    const duration = 3500;
    const startTime = performance.now();

    function animate(time) {
        const progress = (time - startTime) / duration;

        if (progress >= 1) {
            comet.remove();
            tail.remove();
            return;
        }

        const x = startX + (endX - startX) * progress;
        const y = startY + (endY - startY) * progress;

        comet.style.left = x - 9 + "px";
        comet.style.top = y - 9 + "px";

        tail.style.left = x - 5 + "px";
        tail.style.top = y + 5 + "px";
        tail.style.transform = "rotate(-45deg)";

        let opacity = 1;

        if (progress < 0.1) {
            opacity = progress / 0.1;
        }

        if (progress > 0.85) {
            opacity = (1 - progress) / 0.15;
        }

        comet.style.opacity = opacity;
        tail.style.opacity = opacity;

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

setTimeout(createComet, 1500);
setInterval(createComet, 5000);


/* 🌐 Языковое меню */

function toggleLanguageMenu() {
    const dropdown = document.getElementById("languageDropdown");

    if (dropdown) {
        dropdown.classList.toggle("open");
    }
}

document.addEventListener("click", function(event) {
    const menu = document.querySelector(".language-menu");
    const dropdown = document.getElementById("languageDropdown");

    if (!menu || !dropdown) {
        return;
    }

    if (!menu.contains(event.target)) {
        dropdown.classList.remove("open");
    }
});


/* 🚀 Прокрутка к планетам */

function scrollToPlanets() {
    const planetsSection = document.getElementById("planets");

    if (planetsSection) {
        planetsSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* 🌙 Прокрутка к спутникам */

function scrollToMoons() {
    const moonsSection = document.getElementById("moons");

    if (moonsSection) {
        moonsSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* 🇷🇺 Начальный язык */

changeLanguage("ru");