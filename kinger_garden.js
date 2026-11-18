const GARDEN_STORAGE_KEYS = {
    lang: "siteLanguage",
    theme: "siteHalloweenTheme",
    lanterns: "kingerGardenLanterns",
    quoteIndex: "kingerGardenQuoteIndex",
    tipCategory: "kingerGardenTipCategory",
    tipIndex: "kingerGardenTipIndex"
};

const gardenTranslations = {
    ru: {
        pageTitle: "♛ Сад Королёра ♛",
        backHome: "← На главную",
        themeOn: "🎃 Хэллоуин: ВКЛ",
        themeOff: "🎃 Тема Хэллоуина",
        subtitle: "Тихая орбитальная оранжерея теней, звёздной пыли и мягкого света",
        counterLabel: "Зажжено огоньков в саду:",
        introTitle: "Добро пожаловать под купол тишины",
        introText: "Здесь растёт то, что не любит суеты. Нажимай на космические растения, чтобы зажигать или приглушать их тихое сияние.",
        stateLit: "Тихо светится",
        stateDim: "Дремлет в тени",
        btnDim: "Приглушить свет",
        btnLit: "Зажечь огонёк",
        notesTitle: "Записки Королёра",
        nextQuote: "Следующая мысль Королёра ✦",
        tipsTitle: "Советы от Королёра",
        nextTip: "Следующий совет ✦",
        catAll: "Все",
        catAstronauts: "🚀 Космонавтам",
        catProgrammers: "💻 Программистам",
        catGardeners: "🌱 Искателям",
        footer: "♛ Сад Королёра • Космическое приключение имени Папайруса © 2026",
        plants: {
            moonbell: {
                name: "Лунный колокольчик",
                desc: "Хрупкий цветок из ледяной пыли. В полумраке звенит почти неслышно и освещает дорожку.",
                orbit: "Орбита: Тень Луны"
            },
            crownfern: {
                name: "Корона-папоротник",
                desc: "Складывает резные листья в форму шахматной короны, когда вокруг спокойно и никто не шумит.",
                orbit: "Орбита: Кольца Сатурна"
            },
            mistpumpkin: {
                name: "Туманная тыква-фонарь",
                desc: "Хранит тёплый янтарный уголёк внутри. В хэллоуинскую ночь светит особенно загадочно.",
                orbit: "Орбита: Пояс Койпера"
            }
        },
        quotes: [
            "«Если в космосе слишком темно — это ещё не повод терять корону. Иногда достаточно одного маленького огонька.»",
            "«Растения на орбите никуда не торопятся. Нам тоже иногда полезно просто постоять и посмотреть на звёзды.»",
            "«Я пересчитал все кометы дважды… хотя, кажется, третья была просто светящимся лепестком.»"
        ],
        halloweenQuotes: [
            "«В хэллоуинскую ночь тыква-фонарь шепчет секреты туманностей. Главное — не уронить её в чёрную дыру.»",
            "«Тёмный купол сегодня особенно уютен. Все огоньки в саду держат строй, как настоящие фигуры на доске.»"
        ],
        tips: [
            {
                cat: "astronauts",
                tag: "🚀 Космонавтам",
                text: "Перед выходом в открытый космос проверь скафандр, кислород и то, не оставил ли корону на соседнем стуле."
            },
            {
                cat: "astronauts",
                tag: "🚀 Космонавтам",
                text: "В невесомости крошки и заметки улетают быстрее, чем кажется — крепи важное на липучку или держи поближе."
            },
            {
                cat: "programmers",
                tag: "💻 Программистам",
                text: "Если баг не сдаётся полчаса — сделай шаг назад, перечитай условие и проверь, не перезаписывается ли переменная где-то ниже."
            },
            {
                cat: "programmers",
                tag: "💻 Программистам",
                text: "Меняй понемногу и проверяй сразу: маленькие аккуратные шаги всегда спасают от ночной археологии по коду."
            },
            {
                cat: "gardeners",
                tag: "🌱 Искателям",
                text: "Даже самому тихому саду нужен свой фонарик. Не обязательно светить на всю галактику — хватит мягкого тепла рядом."
            }
        ],
        halloweenTips: [
            {
                cat: "gardeners",
                tag: "🎃 Хэллоуин • Искателям",
                text: "Когда включается сумеречная тема, оранжерея становится тише: прислушайся, вдруг тыква-фонарь подскажет новую идею."
            }
        ]
    },
    kk: {
        pageTitle: "♛ Патшашының бағы ♛",
        backHome: "← Басты бетке",
        themeOn: "🎃 Хэллоуин: ҚОСУЛЫ",
        themeOff: "🎃 Хэллоуин тақырыбы",
        subtitle: "Көлеңкелер, жұлдыз шаңы және жұмсақ жарықтың тыныш орбиталық жылыжайы",
        counterLabel: "Бақта жағылған шамдар:",
        introTitle: "Тыныштық күмбезіне қош келдіңіз",
        introText: "Мұнда асығыстықты ұнатпайтын өсімдіктер өседі. Жұмсақ сәулесін жағу немесе бәсеңдету үшін ғарыштық өсімдіктерді басыңыз.",
        stateLit: "Жайлап жарқырайды",
        stateDim: "Көлеңкеде қалғиды",
        btnDim: "Жарықты бәсеңдету",
        btnLit: "Шамды жағу",
        notesTitle: "Патшашының жазбалары",
        nextQuote: "Келесі ой ✦",
        tipsTitle: "Патшашының кеңестері",
        nextTip: "Келесі кеңес ✦",
        catAll: "Барлығы",
        catAstronauts: "🚀 Ғарышкерлерге",
        catProgrammers: "💻 Бағдарламашыларға",
        catGardeners: "🌱 Іздеушілерге",
        footer: "♛ Патшашының бағы • Папайрус атындағы ғарыштық саяхат © 2026",
        plants: {
            moonbell: {
                name: "Ай қоңыраугүлі",
                desc: "Мұз шаңынан жаралған нәзік гүл. Көлеңкеде сыңғырлап, соқпаққа жұмсақ жарық түсіреді.",
                orbit: "Орбита: Ай көлеңкесі"
            },
            crownfern: {
                name: "Тәж-қырыққұлақ",
                desc: "Айнала тыныш болғанда өрнекті жапырақтарын шахмат тәжі пішініне келтіреді.",
                orbit: "Орбита: Сатурн сақиналары"
            },
            mistpumpkin: {
                name: "Тұманды асқабақ-шам",
                desc: "Ішінде жылы кәріптас шоғын сақтайды. Хэллоуин түнінде ерекше жұмбақ жарқырайды.",
                orbit: "Орбита: Койпер белдеуі"
            }
        },
        quotes: [
            "«Ғарыш тым қараңғы болса да, тәжді жоғалтуға себеп жоқ. Кейде бір кішкентай шам жеткілікті.»",
            "«Орбитадағы өсімдіктер ешқайда асықпайды. Бізге де кейде жұлдыздарға қарап тұру пайдалы.»",
            "«Мен барлық кометаларды екі рет санадым… бірақ үшіншісі жай ғана жарқыраған күлте сияқты.»"
        ],
        halloweenQuotes: [
            "«Хэллоуин түнінде асқабақ-шам тұмандықтардың құпиясын сыбырлайды.»",
            "«Бүгін қараңғы күмбез ерекше жайлы. Бақтағы барлық шамдар сап түзеп тұр.»"
        ],
        tips: [
            {
                cat: "astronauts",
                tag: "🚀 Ғарышкерлерге",
                text: "Ашық ғарышқа шығар алдында скафандрды, оттегін және тәжді орнында қалдырғаныңызды тексеріңіз."
            },
            {
                cat: "programmers",
                tag: "💻 Бағдарламашыларға",
                text: "Қате табылмаса, сәл кідіріп, шартты қайта оқып, айнымалының төменде қайта жазылмағанын тексеріңіз."
            },
            {
                cat: "gardeners",
                tag: "🌱 Іздеушілерге",
                text: "Ең тыныш баққа да өз шамы қажет. Бүкіл галактикаға шашу шарт емес, жанындағы жұмсақ жылу да жетеді."
            }
        ],
        halloweenTips: [
            {
                cat: "gardeners",
                tag: "🎃 Хэллоуин • Іздеушілерге",
                text: "Ымырт тақырыбы қосылғанда жылыжай тыныштала түседі — құлақ түріңіз, бәлкім асқабақ-шам жаңа ой айтар."
            }
        ]
    },
    cs: {
        pageTitle: "♛ Kingerova zahrada ♛",
        backHome: "← Na hlavní stránku",
        themeOn: "🎃 Halloween: ZAP",
        themeOff: "🎃 Halloweenské téma",
        subtitle: "Tichý orbitální skleník stínů, hvězdného prachu a jemného světla",
        counterLabel: "Rozsvícená světýlka v zahradě:",
        introTitle: "Vítejte pod kupolí ticha",
        introText: "Roste tu vše, co nemá rádo spěch. Klikněte na vesmírné rostliny a rozsviťte nebo ztlumte jejich záři.",
        stateLit: "Tiše září",
        stateDim: "Dříme ve stínu",
        btnDim: "Ztlumit světlo",
        btnLit: "Rozsvítit světýlko",
        notesTitle: "Kingerovy poznámky",
        nextQuote: "Další Kingerova myšlenka ✦",
        tipsTitle: "Kingerovy rady",
        nextTip: "Další rada ✦",
        catAll: "Vše",
        catAstronauts: "🚀 Astronautům",
        catProgrammers: "💻 Programátorům",
        catGardeners: "🌱 Hledačům",
        footer: "♛ Kingerova zahrada • Vesmírné dobrodružství Papyrusa © 2026",
        plants: {
            moonbell: {
                name: "Měsíční zvonek",
                desc: "Křehký květ z ledového prachu. V přítmí tiše zvoní a osvětluje pěšinu.",
                orbit: "Oběžná dráha: Stín Měsíce"
            },
            crownfern: {
                name: "Korunní kapradina",
                desc: "Skládá listy do tvaru šachové koruny, když je kolem klid a ticho.",
                orbit: "Oběžná dráha: Prstence Saturnu"
            },
            mistpumpkin: {
                name: "Mlhavá dýňová lucerna",
                desc: "Uchovává uvnitř teplý jantarový uhlík. O halloweenské noci září obzvlášť tajemně.",
                orbit: "Oběžná dráha: Kuiperův pás"
            }
        },
        quotes: [
            "„I když je ve vesmíru tma, není důvod ztrácet korunu. Někdy stačí jediné malé světýlko.“",
            "„Rostliny na oběžné dráze nikam nespěchají. I nám občas prospěje jen pozorovat hvězdy.“",
            "„Spočítal jsem všechny komety dvakrát… i když ta třetí byl asi jen svítící okvětní lístek.“"
        ],
        halloweenQuotes: [
            "„O halloweenské noci šeptá dýňová lucerna tajemství mlhovin.“",
            "„Tmavá kupole je dnes obzvlášť útulná. Všechna světýlka drží stráž jako figurky na šachovnici.“"
        ],
        tips: [
            {
                cat: "astronauts",
                tag: "🚀 Astronautům",
                text: "Před výstupem do volného prostoru zkontroluj skafandr, kyslík i to, zda koruna nezůstala na židli."
            },
            {
                cat: "programmers",
                tag: "💻 Programátorům",
                text: "Když chyba vzdoruje, udělej krok zpět, přečti si zadání a ověř, zda se proměnná nepřepisuje o kus níž."
            },
            {
                cat: "gardeners",
                tag: "🌱 Hledačům",
                text: "I tichá zahrada potřebuje vlastní lucernu. Nemusíš rozzářit celou galaxii, stačí jemné teplo nablízku."
            }
        ],
        halloweenTips: [
            {
                cat: "gardeners",
                tag: "🎃 Halloween • Hledačům",
                text: "Když se zapne šerý motiv, skleník ztichne — zaposlouchej se, třeba dýňová lucerna poradí nový nápad."
            }
        ]
    },
    en: {
        pageTitle: "♛ Kinger's Garden ♛",
        backHome: "← Back to Home",
        themeOn: "🎃 Halloween: ON",
        themeOff: "🎃 Halloween Theme",
        subtitle: "A quiet orbital conservatory of shadows, stardust, and gentle light",
        counterLabel: "Lanterns lit in the garden:",
        introTitle: "Welcome beneath the dome of quiet",
        introText: "Everything growing here dislikes rushing. Click the cosmic plants to kindle or soften their gentle glow.",
        stateLit: "Softly glowing",
        stateDim: "Resting in shadow",
        btnDim: "Dim the light",
        btnLit: "Light a lantern",
        notesTitle: "Kinger's Field Notes",
        nextQuote: "Next thought from Kinger ✦",
        tipsTitle: "Tips from Kinger",
        nextTip: "Next tip ✦",
        catAll: "All",
        catAstronauts: "🚀 Astronauts",
        catProgrammers: "💻 Programmers",
        catGardeners: "🌱 Wanderers",
        footer: "♛ Kinger's Garden • Papyrus Space Adventure © 2026",
        plants: {
            moonbell: {
                name: "Lunar Bellflower",
                desc: "A delicate blossom of ice dust. In twilight it chimes softly and lights the garden path.",
                orbit: "Orbit: Shadow of the Moon"
            },
            crownfern: {
                name: "Crown Fern",
                desc: "Folds its fronds into the shape of a chess crown whenever the greenhouse is peaceful.",
                orbit: "Orbit: Rings of Saturn"
            },
            mistpumpkin: {
                name: "Nebula Lantern Pumpkin",
                desc: "Holds a warm amber ember inside. On Halloween night it glows with extra mystery.",
                orbit: "Orbit: Kuiper Belt"
            }
        },
        quotes: [
            "“Even when space feels too dark, that's no reason to lose your crown. Sometimes one tiny lantern is enough.”",
            "“Orbital plants never hurry anywhere. Watching the stars quietly for a while is good for us too.”",
            "“I counted every comet twice… though I suspect the third one was just a glowing petal.”"
        ],
        halloweenQuotes: [
            "“On Halloween night, the lantern pumpkin whispers secrets of distant nebulae.”",
            "“The dark dome feels extra cozy tonight. Every light in the garden stands ready like chess pieces.”"
        ],
        tips: [
            {
                cat: "astronauts",
                tag: "🚀 Astronauts",
                text: "Before stepping into open space, check your suit, oxygen, and make sure you didn't leave your crown on a chair."
            },
            {
                cat: "programmers",
                tag: "💻 Programmers",
                text: "When a bug refuses to budge, step back, re-read the logic, and check if a variable gets overwritten lower down."
            },
            {
                cat: "gardeners",
                tag: "🌱 Wanderers",
                text: "Even a quiet garden needs its own lantern. You don't have to light up the whole galaxy—a gentle glow nearby helps."
            }
        ],
        halloweenTips: [
            {
                cat: "gardeners",
                tag: "🎃 Halloween • Wanderers",
                text: "When the twilight theme is on, the conservatory grows stiller—listen closely, the lantern pumpkin might spark an idea."
            }
        ]
    },
    de: {
        pageTitle: "♛ Kingers Garten ♛",
        backHome: "← Zur Startseite",
        themeOn: "🎃 Halloween: AN",
        themeOff: "🎃 Halloween-Design",
        subtitle: "Ein ruhiges Orbitalgewächshaus aus Schatten, Sternenstaub und sanftem Licht",
        counterLabel: "Entzündete Lichter im Garten:",
        introTitle: "Willkommen unter der Kuppel der Stille",
        introText: "Hier wächst alles, was keine Eile mag. Klicke auf die kosmischen Pflanzen, um ihr Leuchten zu entfachen oder zu dämpfen.",
        stateLit: "Leuchtet sanft",
        stateDim: "Schlummert im Schatten",
        btnDim: "Licht dämpfen",
        btnLit: "Licht entzünden",
        notesTitle: "Kingers Notizen",
        nextQuote: "Nächster Gedanke von Kinger ✦",
        tipsTitle: "Tipps von Kinger",
        nextTip: "Nächster Tipp ✦",
        catAll: "Alle",
        catAstronauts: "🚀 Astronauten",
        catProgrammers: "💻 Programmierer",
        catGardeners: "🌱 Entdecker",
        footer: "♛ Kingers Garten • Papyrus' Weltraumabenteuer © 2026",
        plants: {
            moonbell: {
                name: "Mondglockenblume",
                desc: "Eine zarte Blüte aus Eisstaub. Im Halbdunkel klingt sie leise und erhellt den Pfad.",
                orbit: "Umlaufbahn: Schatten des Mondes"
            },
            crownfern: {
                name: "Kronenfarn",
                desc: "Faltet seine Wedel zur Form einer Schachkrone, wenn rundherum Ruhe einkehrt.",
                orbit: "Umlaufbahn: Ringe des Saturn"
            },
            mistpumpkin: {
                name: "Nebel-Kürbislaterne",
                desc: "Bewahrt eine warme Bernsteinglut im Inneren. In der Halloweennacht leuchtet sie besonders geheimnisvoll.",
                orbit: "Umlaufbahn: Kuipergürtel"
            }
        },
        quotes: [
            "„Selbst wenn der Weltraum zu dunkel wirkt, verliert man deswegen nicht seine Krone. Manchmal genügt ein kleines Licht.“",
            "„Pflanzen im Orbit haben es nie eilig. Ab und zu tut es gut, einfach nur die Sterne zu betrachten.“",
            "„Ich habe alle Kometen zweimal gezählt… wobei der dritte wohl nur ein leuchtendes Blütenblatt war.“"
        ],
        halloweenQuotes: [
            "„In der Halloweennacht flüstert die Kürbislaterne Geheimnisse ferner Nebel.“",
            "„Die dunkle Kuppel ist heute besonders gemütlich. Alle Lichter stehen bereit wie Figuren auf dem Brett.“"
        ],
        tips: [
            {
                cat: "astronauts",
                tag: "🚀 Astronauten",
                text: "Prüfe vor dem Weltraumspaziergang Anzug, Sauerstoff und ob deine Krone nicht auf einem Stuhl liegen blieb."
            },
            {
                cat: "programmers",
                tag: "💻 Programmierer",
                text: "Wenn ein Fehler bleibt, tritt einen Schritt zurück, lies die Logik neu und prüfe, ob ein Wert weiter unten überschrieben wird."
            },
            {
                cat: "gardeners",
                tag: "🌱 Entdecker",
                text: "Auch ein stiller Garten braucht eine Laterne. Du musst nicht die ganze Galaxie erhellen – ein sanftes Licht reicht."
            }
        ],
        halloweenTips: [
            {
                cat: "gardeners",
                tag: "🎃 Halloween • Entdecker",
                text: "Mit dem Dämmerungsthema wird es im Gewächshaus noch ruhiger – vielleicht flüstert die Kürbislaterne eine Idee."
            }
        ]
    },
    fr: {
        pageTitle: "♛ Jardin de Kinger ♛",
        backHome: "← Accueil",
        themeOn: "🎃 Halloween : ACTIVÉ",
        themeOff: "🎃 Thème Halloween",
        subtitle: "Une serre orbitale paisible d'ombres, de poussière d'étoiles et de lumière douce",
        counterLabel: "Lueurs allumées dans le jardin :",
        introTitle: "Bienvenue sous le dôme du silence",
        introText: "Ici pousse tout ce qui n'aime pas la hâte. Clique sur les plantes cosmiques pour allumer ou apaiser leur lueur.",
        stateLit: "Brille doucement",
        stateDim: "Sommeille dans l'ombre",
        btnDim: "Tamiser la lumière",
        btnLit: "Allumer une lueur",
        notesTitle: "Notes de Kinger",
        nextQuote: "Pensée suivante de Kinger ✦",
        tipsTitle: "Conseils de Kinger",
        nextTip: "Conseil suivant ✦",
        catAll: "Tous",
        catAstronauts: "🚀 Astronautes",
        catProgrammers: "💻 Programmeurs",
        catGardeners: "🌱 Explorateurs",
        footer: "♛ Jardin de Kinger • L'aventure spatiale de Papyrus © 2026",
        plants: {
            moonbell: {
                name: "Clochette lunaire",
                desc: "Une fleur fragile née de la poussière de glace. Dans la pénombre, elle tinte doucement et éclaire le sentier.",
                orbit: "Orbite : Ombre de la Lune"
            },
            crownfern: {
                name: "Fougère-couronne",
                desc: "Replie ses feuilles en forme de couronne d'échecs lorsque le calme règne autour d'elle.",
                orbit: "Orbite : Anneaux de Saturne"
            },
            mistpumpkin: {
                name: "Citrouille-lanterne des nébuleuses",
                desc: "Garde une braise ambrée bien au chaud. La nuit d'Halloween, sa lueur devient encore plus mystérieuse.",
                orbit: "Orbite : Ceinture de Kuiper"
            }
        },
        quotes: [
            "« Même quand l'espace semble trop sombre, ce n'est pas une raison pour perdre sa couronne. Une petite lueur suffit parfois. »",
            "« Les plantes orbitales ne sont jamais pressées. Observer les étoiles en silence fait aussi du bien. »",
            "« J'ai compté toutes les comètes deux fois… même si la troisième n'était qu'un pétale lumineux. »"
        ],
        halloweenQuotes: [
            "« La nuit d'Halloween, la citrouille-lanterne murmure les secrets des nébuleuses. »",
            "« Le dôme sombre est particulièrement accueillant ce soir. Toutes les lumières veillent comme des pièces d'échecs. »"
        ],
        tips: [
            {
                cat: "astronauts",
                tag: "🚀 Astronautes",
                text: "Avant de sortir dans l'espace, vérifie ta combinaison, l'oxygène et assure-toi de ne pas laisser ta couronne sur une chaise."
            },
            {
                cat: "programmers",
                tag: "💻 Programmeurs",
                text: "Quand un bug résiste, prends du recul, relis ta logique et vérifie si une variable est écrasée plus bas."
            },
            {
                cat: "gardeners",
                tag: "🌱 Explorateurs",
                text: "Même un jardin paisible a besoin de sa lanterne. Pas besoin d'éclairer toute la galaxie, une douce lueur suffit."
            }
        ],
        halloweenTips: [
            {
                cat: "gardeners",
                tag: "🎃 Halloween • Explorateurs",
                text: "Avec le thème d'Halloween, la serre devient plus calme — écoute bien, la citrouille-lanterne a peut-être une idée."
            }
        ]
    },
    es: {
        pageTitle: "♛ Jardín de Kinger ♛",
        backHome: "← Volver al inicio",
        themeOn: "🎃 Halloween: SÍ",
        themeOff: "🎃 Tema de Halloween",
        subtitle: "Un tranquilo invernadero orbital de sombras, polvo estelar y luz suave",
        counterLabel: "Luces encendidas en el jardín:",
        introTitle: "Bienvenido bajo la cúpula del silencio",
        introText: "Aquí crece todo lo que detesta las prisas. Pulsa las plantas cósmicas para encender o suavizar su brillo.",
        stateLit: "Brilla suavemente",
        stateDim: "Duerme en la sombra",
        btnDim: "Atenuar la luz",
        btnLit: "Encender una luz",
        notesTitle: "Apuntes de Kinger",
        nextQuote: "Siguiente pensamiento de Kinger ✦",
        tipsTitle: "Consejos de Kinger",
        nextTip: "Siguiente consejo ✦",
        catAll: "Todos",
        catAstronauts: "🚀 Astronautas",
        catProgrammers: "💻 Programadores",
        catGardeners: "🌱 Exploradores",
        footer: "♛ Jardín de Kinger • Aventura espacial de Papyrus © 2026",
        plants: {
            moonbell: {
                name: "Campanilla lunar",
                desc: "Una flor delicada de polvo helado. En la penumbra suena muy bajito e ilumina el sendero.",
                orbit: "Órbita: Sombra de la Luna"
            },
            crownfern: {
                name: "Helecho corona",
                desc: "Pliega sus hojas formando una corona de ajedrez cuando todo está en calma.",
                orbit: "Órbita: Anillos de Saturno"
            },
            mistpumpkin: {
                name: "Calabaza-farol de nebulosa",
                desc: "Guarda una brasa cálida de ámbar en su interior. En la noche de Halloween brilla con un toque misterioso.",
                orbit: "Órbita: Cinturón de Kuiper"
            }
        },
        quotes: [
            "«Aunque el espacio parezca demasiado oscuro, no hay motivo para perder la corona. A veces basta una pequeña luz.»",
            "«Las plantas orbitales nunca tienen prisa. Mirar las estrellas en calma también nos sienta bien.»",
            "«Conté todos los cometas dos veces… aunque creo que el tercero era solo un pétalo brillante.»"
        ],
        halloweenQuotes: [
            "«En la noche de Halloween, la calabaza-farol susurra secretos de las nebulosas.»",
            "«La cúpula oscura hoy resulta especialmente acogedora. Todas las luces vigilan como piezas en el tablero.»"
        ],
        tips: [
            {
                cat: "astronauts",
                tag: "🚀 Astronautas",
                text: "Antes de salir al espacio exterior, revisa el traje, el oxígeno y que no hayas dejado la corona en una silla."
            },
            {
                cat: "programmers",
                tag: "💻 Programadores",
                text: "Si un error no cede, da un paso atrás, repasa la lógica y mira si alguna variable se sobrescribe más abajo."
            },
            {
                cat: "gardeners",
                tag: "🌱 Exploradores",
                text: "Hasta un jardín tranquilo necesita su farol. No hace falta iluminar toda la galaxia; basta un brillo suave."
            }
        ],
        halloweenTips: [
            {
                cat: "gardeners",
                tag: "🎃 Halloween • Exploradores",
                text: "Con el modo de Halloween el invernadero se vuelve más sereno: escucha, quizá la calabaza-farol tenga una idea."
            }
        ]
    },
    it: {
        pageTitle: "♛ Giardino di Kinger ♛",
        backHome: "← Torna alla home",
        themeOn: "🎃 Halloween: ON",
        themeOff: "🎃 Tema di Halloween",
        subtitle: "Una serra orbitale silenziosa di ombre, polvere di stelle e luce soffusa",
        counterLabel: "Luci accese nel giardino:",
        introTitle: "Benvenuto sotto la cupola del silenzio",
        introText: "Qui cresce tutto ciò che non ama la fretta. Tocca le piante cosmiche per accendere o attenuare il loro bagliore.",
        stateLit: "Brilla dolcemente",
        stateDim: "Riposa nell'ombra",
        btnDim: "Attenua la luce",
        btnLit: "Accendi una luce",
        notesTitle: "Appunti di Kinger",
        nextQuote: "Prossimo pensiero di Kinger ✦",
        tipsTitle: "Consigli di Kinger",
        nextTip: "Prossimo consiglio ✦",
        catAll: "Tutti",
        catAstronauts: "🚀 Astronauti",
        catProgrammers: "💻 Programmatori",
        catGardeners: "🌱 Esploratori",
        footer: "♛ Giardino di Kinger • Avventura spaziale di Papyrus © 2026",
        plants: {
            moonbell: {
                name: "Campanula lunare",
                desc: "Un fiore fragile di polvere ghiacciata. Nella penombra tintinna piano e illumina il sentiero.",
                orbit: "Orbita: Ombra della Luna"
            },
            crownfern: {
                name: "Felce corona",
                desc: "Ripiega le fronde a forma di corona degli scacchi quando intorno regna la quiete.",
                orbit: "Orbita: Anelli di Saturno"
            },
            mistpumpkin: {
                name: "Zucca-lanterna nebulare",
                desc: "Custodisce una brace ambrata al suo interno. Nella notte di Halloween splende in modo misterioso.",
                orbit: "Orbita: Fascia di Kuiper"
            }
        },
        quotes: [
            "«Anche quando lo spazio sembra troppo buio, non è un buon motivo per perdere la corona. A volte basta una piccola luce.»",
            "«Le piante orbitali non hanno mai fretta. Anche a noi ogni tanto fa bene guardare le stelle in silenzio.»",
            "«Ho contato tutte le comete due volte… anche se la terza era probabilmente solo un petalo luminoso.»"
        ],
        halloweenQuotes: [
            "«Nella notte di Halloween la zucca-lanterna sussurra i segreti delle nebulose.»",
            "«La cupola scura stasera è particolarmente accogliente. Tutte le luci fanno la guardia come pezzi sulla scacchiera.»"
        ],
        tips: [
            {
                cat: "astronauts",
                tag: "🚀 Astronauti",
                text: "Prima di uscire nello spazio, controlla tuta, ossigeno e di non aver lasciato la corona su una sedia."
            },
            {
                cat: "programmers",
                tag: "💻 Programmatori",
                text: "Quando un bug resiste, fai un passo indietro, rileggi la logica e verifica se una variabile viene sovrascritta."
            },
            {
                cat: "gardeners",
                tag: "🌱 Esploratori",
                text: "Anche un giardino quieto ha bisogno della sua lanterna. Non serve illuminare l'intera galassia, basta una luce dolce."
            }
        ],
        halloweenTips: [
            {
                cat: "gardeners",
                tag: "🎃 Halloween • Esploratori",
                text: "Con il tema di Halloween la serra si fa più tranquilla: ascolta, forse la zucca-lanterna ha un'idea."
            }
        ]
    },
    pl: {
        pageTitle: "♛ Ogród Kingera ♛",
        backHome: "← Strona główna",
        themeOn: "🎃 Halloween: WŁ.",
        themeOff: "🎃 Motyw Halloween",
        subtitle: "Cicha orbitalna oranżeria cieni, gwiezdnego pyłu i łagodnego światła",
        counterLabel: "Zapalone światełka w ogrodzie:",
        introTitle: "Witaj pod kopułą ciszy",
        introText: "Rośnie tu wszystko, co nie lubi pośpiechu. Klikaj kosmiczne rośliny, aby zapalać lub przyciemniać ich blask.",
        stateLit: "Cicho świeci",
        stateDim: "Drzemie w cieniu",
        btnDim: "Przyciemnij światło",
        btnLit: "Zapal światełko",
        notesTitle: "Notatki Kingera",
        nextQuote: "Kolejna myśl Kingera ✦",
        tipsTitle: "Porady od Kingera",
        nextTip: "Kolejna porada ✦",
        catAll: "Wszystkie",
        catAstronauts: "🚀 Astronautom",
        catProgrammers: "💻 Programistom",
        catGardeners: "🌱 Poszukiwaczom",
        footer: "♛ Ogród Kingera • Kosmiczna przygoda Papyrusa © 2026",
        plants: {
            moonbell: {
                name: "Księżycowy dzwoneczek",
                desc: "Kruchy kwiat z lodowego pyłu. W półmroku dzwoni cichutko i oświetla ścieżkę.",
                orbit: "Orbita: Cień Księżyca"
            },
            crownfern: {
                name: "Paproć koronowa",
                desc: "Składa liście w kształt szachowej korony, gdy wokół panuje spokój i cisza.",
                orbit: "Orbita: Pierścienie Saturna"
            },
            mistpumpkin: {
                name: "Mgławicowa dynia-latarnia",
                desc: "Skrywa w środku ciepły bursztynowy żar. W noc Halloween świeci wyjątkowo tajemniczo.",
                orbit: "Orbita: Pas Kuipera"
            }
        },
        quotes: [
            "„Nawet gdy w kosmosie jest zbyt ciemno, to nie powód, by gubić koronę. Czasem wystarczy jedno małe światełko.”",
            "„Rośliny na orbicie nigdzie się nie spieszą. Nam też czasem dobrze zrobi zwykłe patrzenie w gwiazdy.”",
            "„Policzyłem wszystkie komety dwa razy… chociaż trzecia była chyba tylko świecącym płatkiem.”"
        ],
        halloweenQuotes: [
            "„W noc Halloween dynia-latarnia szepcze sekrety mgławic.”",
            "„Ciemna kopuła jest dziś wyjątkowo przytulna. Wszystkie światełka stoją na straży jak figury na szachownicy.”"
        ],
        tips: [
            {
                cat: "astronauts",
                tag: "🚀 Astronautom",
                text: "Przed wyjściem w przestrzeń sprawdź skafander, tlen i czy korona nie została na sąsiednim krześle."
            },
            {
                cat: "programmers",
                tag: "💻 Programistom",
                text: "Gdy błąd nie daje spokoju, zrób krok w tył, przejrzyj logikę i sprawdź, czy zmienna nie jest nadpisywana niżej."
            },
            {
                cat: "gardeners",
                tag: "🌱 Poszukiwaczom",
                text: "Nawet cichy ogród potrzebuje latarni. Nie trzeba oświetlać całej galaktyki — wystarczy łagodny blask obok."
            }
        ],
        halloweenTips: [
            {
                cat: "gardeners",
                tag: "🎃 Halloween • Poszukiwaczom",
                text: "Gdy włączony jest motyw Halloween, oranżeria cichnie — wsłuchaj się, może dynia-latarnia podsunie pomysł."
            }
        ]
    },
    nl: {
        pageTitle: "♛ Kingers tuin ♛",
        backHome: "← Naar startpagina",
        themeOn: "🎃 Halloween: AAN",
        themeOff: "🎃 Halloween-thema",
        subtitle: "Een stille orbitale kas vol schaduwen, sterrenstof en zacht licht",
        counterLabel: "Aangestoken lichtjes in de tuin:",
        introTitle: "Welkom onder de koepel van stilte",
        introText: "Hier groeit alles wat niet van haast houdt. Klik op de kosmische planten om hun zachte gloed aan te steken of te dempen.",
        stateLit: "Straalt zachtjes",
        stateDim: "Sluimert in de schaduw",
        btnDim: "Licht dempen",
        btnLit: "Lichtje aansteken",
        notesTitle: "Notities van Kinger",
        nextQuote: "Volgende gedachte van Kinger ✦",
        tipsTitle: "Tips van Kinger",
        nextTip: "Volgende tip ✦",
        catAll: "Alles",
        catAstronauts: "🚀 Astronauten",
        catProgrammers: "💻 Programmeurs",
        catGardeners: "🌱 Ontdekkers",
        footer: "♛ Kingers tuin • Ruimteavontuur van Papyrus © 2026",
        plants: {
            moonbell: {
                name: "Maanklokje",
                desc: "Een tere bloem van ijsstof. In de schemering rinkelt hij zachtjes en verlicht het pad.",
                orbit: "Baan: Schaduw van de Maan"
            },
            crownfern: {
                name: "Kroonvaren",
                desc: "Vouwt zijn bladeren in de vorm van een schaakkroon zodra het rustig en stil is.",
                orbit: "Baan: Ringen van Saturnus"
            },
            mistpumpkin: {
                name: "Nevel-pompoenlantaarn",
                desc: "Bewaart vanbinnen een warme amberkleurige gloed. Op Halloweennacht schijnt hij extra geheimzinnig.",
                orbit: "Baan: Kuipergordel"
            }
        },
        quotes: [
            "“Zelfs als de ruimte te donker lijkt, is dat geen reden om je kroon te verliezen. Soms is één klein lichtje genoeg.”",
            "“Planten in een baan om de planeet hebben nooit haast. Af en toe rustig naar de sterren kijken doet ons ook goed.”",
            "“Ik heb alle kometen twee keer geteld… al was de derde volgens mij gewoon een lichtgevend bloemblaadje.”"
        ],
        halloweenQuotes: [
            "“Op Halloweennacht fluistert de pompoenlantaarn geheimen van verre nevels.”",
            "“De donkere koepel is vanavond extra knus. Alle lichtjes staan paraat als schaakstukken op het bord.”"
        ],
        tips: [
            {
                cat: "astronauts",
                tag: "🚀 Astronauten",
                text: "Controleer voor een ruimtewandeling je pak, zuurstof en of je kroon niet op een stoel is blijven liggen."
            },
            {
                cat: "programmers",
                tag: "💻 Programmeurs",
                text: "Als een bug blijft dwarsliggen, neem even afstand, lees de logica na en kijk of een variabele lager wordt overschreven."
            },
            {
                cat: "gardeners",
                tag: "🌱 Ontdekkers",
                text: "Zelfs een stille tuin heeft een lantaarn nodig. Je hoeft niet het hele heelal te verlichten; zacht licht is genoeg."
            }
        ],
        halloweenTips: [
            {
                cat: "gardeners",
                tag: "🎃 Halloween • Ontdekkers",
                text: "Met het Halloweenthema wordt de kas nog stiller — luister goed, misschien fluistert de pompoenlantaarn een idee."
            }
        ]
    }
};

let currentGardenLang = localStorage.getItem(GARDEN_STORAGE_KEYS.lang) || "ru";
if (!gardenTranslations[currentGardenLang]) {
    currentGardenLang = "ru";
}

let quoteIndex = Number.parseInt(localStorage.getItem(GARDEN_STORAGE_KEYS.quoteIndex) || "0", 10);
if (Number.isNaN(quoteIndex) || quoteIndex < 0) {
    quoteIndex = 0;
}

let currentTipCategory = localStorage.getItem(GARDEN_STORAGE_KEYS.tipCategory) || "all";
let tipIndex = Number.parseInt(localStorage.getItem(GARDEN_STORAGE_KEYS.tipIndex) || "0", 10);
if (Number.isNaN(tipIndex) || tipIndex < 0) {
    tipIndex = 0;
}

function isHalloweenStorageEnabled(value) {
    return value === "on" || value === "true" || value === "enabled";
}

function applySavedHalloweenTheme() {
    const savedTheme = localStorage.getItem(GARDEN_STORAGE_KEYS.theme) || "off";
    const enabled = isHalloweenStorageEnabled(savedTheme);
    document.body.classList.toggle("halloween-theme", enabled);
}

function saveLanternStates() {
    const states = {};
    document.querySelectorAll(".plant-card").forEach((card) => {
        const key = card.dataset.plant;
        if (key) {
            states[key] = card.classList.contains("is-lit");
        }
    });
    localStorage.setItem(GARDEN_STORAGE_KEYS.lanterns, JSON.stringify(states));
}

function restoreLanternStates() {
    const raw = localStorage.getItem(GARDEN_STORAGE_KEYS.lanterns);
    if (!raw) return;

    try {
        const states = JSON.parse(raw);
        if (!states || typeof states !== "object") return;

        document.querySelectorAll(".plant-card").forEach((card) => {
            const key = card.dataset.plant;
            if (key && Object.prototype.hasOwnProperty.call(states, key)) {
                card.classList.toggle("is-lit", Boolean(states[key]));
            }
        });
    } catch (_) {
        // Игнорируем повреждённое значение в localStorage
    }
}

function getActiveQuotes(t) {
    const isHalloween = document.body.classList.contains("halloween-theme");
    return isHalloween ? [...t.quotes, ...t.halloweenQuotes] : t.quotes;
}

function getActiveTips(t) {
    const isHalloween = document.body.classList.contains("halloween-theme");
    const combined = isHalloween ? [...t.tips, ...t.halloweenTips] : t.tips;

    if (currentTipCategory === "all") {
        return combined;
    }

    const filtered = combined.filter((item) => item.cat === currentTipCategory);
    return filtered.length > 0 ? filtered : combined;
}

function updateLanternCounter() {
    const cards = document.querySelectorAll(".plant-card");
    const litCount = document.querySelectorAll(".plant-card.is-lit").length;
    const counterValue = document.getElementById("lanternCounterValue");

    if (counterValue) {
        counterValue.textContent = `${litCount} / ${cards.length}`;
    }
}

function renderCurrentTip(t) {
    const tips = getActiveTips(t);
    if (tips.length === 0) return;

    const activeTip = tips[tipIndex % tips.length];
    const tagEl = document.getElementById("tipCategoryBadge");
    const textEl = document.getElementById("kingerTipText");

    if (tagEl) {
        tagEl.textContent = activeTip.tag;
    }
    if (textEl) {
        textEl.textContent = activeTip.text;
    }
}

function syncTipFilterButtons() {
    document.querySelectorAll(".tip-filter-btn").forEach((btn) => {
        btn.classList.toggle("is-active", btn.dataset.tipCat === currentTipCategory);
    });
}

function applyGardenLanguage(lang) {
    currentGardenLang = gardenTranslations[lang] ? lang : "ru";
    localStorage.setItem(GARDEN_STORAGE_KEYS.lang, currentGardenLang);
    document.documentElement.lang = currentGardenLang;

    const t = gardenTranslations[currentGardenLang];
    document.title = t.pageTitle;

    const select = document.getElementById("gardenLangSelect");
    if (select) {
        select.value = currentGardenLang;
    }

    const textMap = {
        backHomeBtn: t.backHome,
        gardenPageTitle: t.pageTitle,
        gardenPageSubtitle: t.subtitle,
        lanternCounterLabel: t.counterLabel,
        gardenIntroTitle: t.introTitle,
        gardenIntroText: t.introText,
        kingerNotesTitle: t.notesTitle,
        nextQuoteBtn: t.nextQuote,
        kingerTipsTitle: t.tipsTitle,
        nextTipBtn: t.nextTip,
        tipCatAll: t.catAll,
        tipCatAstronauts: t.catAstronauts,
        tipCatProgrammers: t.catProgrammers,
        tipCatGardeners: t.catGardeners,
        gardenFooterText: t.footer
    };

    Object.entries(textMap).forEach(([id, text]) => {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = text;
        }
    });

    const themeBtn = document.getElementById("gardenThemeBtn");
    if (themeBtn) {
        const isHalloween = document.body.classList.contains("halloween-theme");
        themeBtn.textContent = isHalloween ? t.themeOn : t.themeOff;
    }

    document.querySelectorAll(".plant-card").forEach((card) => {
        const key = card.dataset.plant;
        const plantInfo = t.plants[key];
        const isLit = card.classList.contains("is-lit");

        if (plantInfo) {
            const nameEl = card.querySelector('[data-role="name"]');
            const descEl = card.querySelector('[data-role="desc"]');
            const orbitEl = card.querySelector('[data-role="orbit"]');

            if (nameEl) nameEl.textContent = plantInfo.name;
            if (descEl) descEl.textContent = plantInfo.desc;
            if (orbitEl) orbitEl.textContent = plantInfo.orbit;
        }

        const stateEl = card.querySelector('[data-role="state"]');
        const actionEl = card.querySelector('[data-role="action"]');

        if (stateEl) stateEl.textContent = isLit ? t.stateLit : t.stateDim;
        if (actionEl) actionEl.textContent = isLit ? t.btnDim : t.btnLit;
    });

    const quotes = getActiveQuotes(t);
    const quoteEl = document.getElementById("kingerQuoteText");
    if (quoteEl && quotes.length > 0) {
        quoteEl.textContent = quotes[quoteIndex % quotes.length];
    }

    syncTipFilterButtons();
    renderCurrentTip(t);
    updateLanternCounter();
}

function createGardenStars() {
    const container = document.getElementById("gardenStars");
    if (!container) return;

    for (let i = 0; i < 85; i++) {
        const star = document.createElement("span");
        star.className = "garden-star";
        const size = (Math.random() * 2.4 + 1).toFixed(1);
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${(Math.random() * 100).toFixed(2)}%`;
        star.style.top = `${(Math.random() * 100).toFixed(2)}%`;
        star.style.animationDuration = `${(Math.random() * 3 + 2).toFixed(2)}s`;
        star.style.animationDelay = `${(Math.random() * 3).toFixed(2)}s`;
        container.appendChild(star);
    }
}

function spawnGardenComet() {
    const container = document.getElementById("gardenComets");
    if (!container) return;

    const comet = document.createElement("div");
    comet.className = "garden-comet";
    comet.style.left = "-8vw";
    comet.style.top = `${Math.floor(Math.random() * 45)}%`;
    comet.style.animationDuration = `${(Math.random() * 2 + 3.2).toFixed(2)}s`;

    container.appendChild(comet);
    setTimeout(() => comet.remove(), 5500);
}

document.addEventListener("DOMContentLoaded", () => {
    applySavedHalloweenTheme();
    restoreLanternStates();
    createGardenStars();
    setInterval(spawnGardenComet, 6500);

    const langSelect = document.getElementById("gardenLangSelect");
    if (langSelect) {
        langSelect.addEventListener("change", (event) => {
            applyGardenLanguage(event.target.value);
        });
    }

    const themeBtn = document.getElementById("gardenThemeBtn");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("halloween-theme");
            const isHalloween = document.body.classList.contains("halloween-theme");
            localStorage.setItem(GARDEN_STORAGE_KEYS.theme, isHalloween ? "on" : "off");
            applyGardenLanguage(currentGardenLang);
        });
    }

    window.addEventListener("pageshow", () => {
        applySavedHalloweenTheme();
        applyGardenLanguage(currentGardenLang);
    });

    document.querySelectorAll(".plant-card").forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.toggle("is-lit");
            saveLanternStates();
            applyGardenLanguage(currentGardenLang);
        });
    });

    const nextQuoteBtn = document.getElementById("nextQuoteBtn");
    if (nextQuoteBtn) {
        nextQuoteBtn.addEventListener("click", () => {
            const t = gardenTranslations[currentGardenLang];
            const quotes = getActiveQuotes(t);
            quoteIndex = (quoteIndex + 1) % quotes.length;
            localStorage.setItem(GARDEN_STORAGE_KEYS.quoteIndex, String(quoteIndex));

            const quoteEl = document.getElementById("kingerQuoteText");
            if (quoteEl) {
                quoteEl.textContent = quotes[quoteIndex];
            }
        });
    }

    document.querySelectorAll(".tip-filter-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            currentTipCategory = btn.dataset.tipCat || "all";
            tipIndex = 0;
            localStorage.setItem(GARDEN_STORAGE_KEYS.tipCategory, currentTipCategory);
            localStorage.setItem(GARDEN_STORAGE_KEYS.tipIndex, "0");
            applyGardenLanguage(currentGardenLang);
        });
    });

    const nextTipBtn = document.getElementById("nextTipBtn");
    if (nextTipBtn) {
        nextTipBtn.addEventListener("click", () => {
            const t = gardenTranslations[currentGardenLang];
            const tips = getActiveTips(t);
            tipIndex = (tipIndex + 1) % tips.length;
            localStorage.setItem(GARDEN_STORAGE_KEYS.tipIndex, String(tipIndex));
            renderCurrentTip(t);
        });
    }

    applyGardenLanguage(currentGardenLang);
});