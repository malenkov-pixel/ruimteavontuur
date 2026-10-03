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
        spaceObjectsButton: "🌌 Космические объекты",
        kainButton: "🎪 Энциклопедия Кейна",
        dwarfPlanetsButton: "🪐 Карликовые планеты",
        constellationButton: "✨ Мечты Чарли Морнингстар",
        updatesTitle: "📝 Новые дополнения",
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
        spaceObjectsButton: "🌌 Ғарыш нысандары",
        kainButton: "🎪 Кейн энциклопедиясы",
        dwarfPlanetsButton: "🪐 Ергежейлі планеталар",
        constellationButton: "✨ Чарли Морнингстардың армандары",
        updatesTitle: "📝 Жаңа толықтырулар",
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
        spaceObjectsButton: "🌌 Vesmírné objekty",
        kainButton: "🎪 Kainova encyklopedie",
        dwarfPlanetsButton: "🪐 Trpasličí planety",
        constellationButton: "✨ Sny Charlieho Morningstara",
        updatesTitle: "📝 Nové doplňky",
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
        spaceObjectsButton: "🌌 Space Objects",
        kainButton: "🎪 Caine's Encyclopedia",
        dwarfPlanetsButton: "🪐 Dwarf Planets",
        constellationButton: "✨ Charlie Morningstar's Dreams",
        updatesTitle: "📝 New Additions",
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
        spaceObjectsButton: "🌌 Himmelsobjekte",
        kainButton: "🎪 Caines Enzyklopädie",
        dwarfPlanetsButton: "🪐 Zwergplaneten",
        constellationButton: "✨ Charlie Morningstars Träume",
        updatesTitle: "📝 Neue Ergänzungen",
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
        spaceObjectsButton: "🌌 Objets spatiaux",
        kainButton: "🎪 Encyclopédie de Caine",
        dwarfPlanetsButton: "🪐 Planètes naines",
        constellationButton: "✨ Les rêves de Charlie Morningstar",
        updatesTitle: "📝 Nouveautés",
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
        welcomeText:
            "Emprende un viaje por el Sistema Solar, explora los planetas y descubre datos interesantes sobre ellos.",
        startButton: "Comenzar la aventura 🚀",
        moonsButton: "🌙 Explorar las lunas",
        spaceObjectsButton: "🌌 Objetos espaciales",
        kainButton: "🎪 Enciclopedia de Caine",
        dwarfPlanetsButton: "🪐 Planetas enanos",
        constellationButton: "✨ Los sueños de Charlie Morningstar",
        updatesTitle: "📝 Nuevas incorporaciones",
        planetsTitle: "🪐 Planetas",
        temperature: "Temperatura:",
        diameter: "Diámetro:",
        mass: "Masa:",
        distance: "Distancia del Sol:",
        day: "Duración del día:",
        year: "Duración del año:",
        moons: "Lunas:",
        rings: "Anillos:",
        atmosphere: "Atmósfera:",
        fact: "🔭 Dato interesante",
        footer: "🌌 Aventura espacial de Papyrus © 2026",
        close: "Cerrar"
    },

    it: {
        siteTitle: "🌌 Avventura spaziale di Papyrus",
        siteSubtitle: "Esplora il Sistema Solare 🚀",
        welcomeTitle: "Benvenuto nello spazio!",
        welcomeText:
            "Parti per un viaggio attraverso il Sistema Solare, esplora i pianeti e scopri fatti interessanti su di essi.",
        startButton: "Inizia l'avventura 🚀",
        moonsButton: "🌙 Esplora le lune",
        spaceObjectsButton: "🌌 Oggetti spaziali",
        kainButton: "🎪 Enciclopedia di Caine",
        dwarfPlanetsButton: "🪐 Pianeti nani",
        constellationButton: "✨ I sogni di Charlie Morningstar",
        updatesTitle: "📝 Nuove aggiunte",
        planetsTitle: "🪐 Pianeti",
        temperature: "Temperatura:",
        diameter: "Diametro:",
        mass: "Massa:",
        distance: "Distanza dal Sole:",
        day: "Durata del giorno:",
        year: "Durata dell'anno:",
        moons: "Lune:",
        rings: "Anelli:",
        atmosphere: "Atmosfera:",
        fact: "🔭 Curiosità",
        footer: "🌌 Avventura spaziale di Papyrus © 2026",
        close: "Chiudi"
    }

};

const sansUpdateTranslations = {

    ru: [
        "💀 хей. это снова я, санс.",
        "да, кстати, я тоже появился в одном из обновлений. теперь я здесь, чтобы объявлять вам о всяких новинках на этом сайте.",
        "обычно я ленюсь стоять здесь и объявлять новости...",
        "но, похоже, на этом сайте накопилось слишком много нового, чтобы просто сделать вид, что я ничего не заметил.",
        "🌌 во-первых, у нас появились новые созвездия в «Мечтах Чарли Морнингстар».",
        "🪐 во-вторых, добавились новые спутники и карликовые планеты. церера, эрида, хаумеа и макемаке теперь тоже не скучают.",
        "📚 ещё появилась «Энциклопедия Кейна». да, именно того самого Кейна. и нет, это не «Каин». я проверил.",
        "🇪🇸🇮🇹 а ещё сайт теперь умеет говорить по-испански и по-итальянски. я бы пошутил про своё знание языков... но я слишком ленив для этого.",
        "💀 короче, дополнений стало больше.",
        "так что осматривайся. вдруг найдёшь что-нибудь интересное.",
        "а теперь можешь нажать на меня, чтобы закрыть это окно."
    ],

    kk: [
        "💀 сәлем. бұл тағы да мен, Санс.",
        "иә, айтпақшы, мен де жаңартулардың бірінде пайда болдым. енді осы сайттағы түрлі жаңалықтарды сіздерге хабарлап отыру үшін осындамын.",
        "әдетте мен осында тұрып, жаңалық жариялауға ерінемін...",
        "бірақ бұл сайтта жаңа нәрселер тым көбейіп кеткен сияқты, сондықтан ештеңе байқамағандай бола алмаймын.",
        "🌌 біріншіден, «Чарли Морнингстардың армандары» бөліміне жаңа шоқжұлдыздар қосылды.",
        "🪐 екіншіден, жаңа серіктер мен ергежейлі планеталар қосылды. Церера, Эрида, Хаумеа және Макемаке енді жалғыз емес.",
        "📚 тағы «Кейн энциклопедиясы» пайда болды. иә, дәл сол Кейн. және жоқ, бұл «Каин» емес. тексеріп қойдым.",
        "🇪🇸🇮🇹 енді сайт испан және итальян тілдерінде де сөйлей алады. тілдерді білетінім туралы әзіл айтар едім... бірақ мен оған тым жалқаумын.",
        "💀 қысқасы, толықтырулар көбейді.",
        "сондықтан айналаға қарап шық. мүмкін қызықты бір нәрсе тауып қаларсың.",
        "ал енді осы терезені жабу үшін мені баса аласың."
    ],

    cs: [
        "💀 hej. jsem to zase já, Sans.",
        "obvykle jsem příliš líný na to, abych tu stál a oznamoval novinky...",
        "jo, mimochodem, taky jsem se objevil v jedné z aktualizací. teď jsem tady, abych vám oznamoval všechny možné novinky na tomto webu.",
        "ale na tomto webu se toho nového nahromadilo tolik, že už nemůžu předstírat, že jsem si ničeho nevšiml.",
        "🌌 za prvé máme nová souhvězdí v části „Sny Charlieho Morningstara“.",
        "🪐 za druhé přibyly nové měsíce a trpasličí planety. Ceres, Eris, Haumea a Makemake už se také nenudí.",
        "📚 také přibyla „Encyklopedie Cainea“. ano, přesně toho Cainea. a ne, není to „Cain“. zkontroloval jsem to.",
        "🇪🇸🇮🇹 web teď také umí mluvit španělsky a italsky. udělal bych vtip o své znalosti jazyků... ale jsem na to příliš líný.",
        "💀 zkrátka, přibylo toho víc.",
        "tak se porozhlédni. třeba najdeš něco zajímavého.",
        "a teď na mě můžeš kliknout a zavřít toto okno."
    ],

    en: [
        "💀 hey. it's me again, Sans.",
        "oh, by the way, I also showed up in one of the updates. now I'm here to tell you about all the new stuff on this site.",
        "usually i'm too lazy to stand here and announce the news...",
        "but apparently there's so much new stuff on this site that i can't just pretend i didn't notice.",
        "🌌 first of all, we got new constellations in «Charlie Morningstar's Dreams».",
        "🪐 secondly, new moons and dwarf planets have been added. Ceres, Eris, Haumea and Makemake aren't bored anymore either.",
        "📚 there's also a new «Caine's Encyclopedia». yep, that Caine. and no, it's not «Cain». i checked.",
        "🇪🇸🇮🇹 the site can also speak Spanish and Italian now. i'd make a joke about my language skills... but i'm too lazy for that.",
        "💀 anyway, there are more additions now.",
        "so take a look around. you might find something interesting.",
        "and now you can click me to close this window."
    ],

    de: [
        "💀 hey. ich bin's wieder, Sans.",
        "ach ja, übrigens bin ich auch in einem der Updates aufgetaucht. jetzt bin ich hier, um euch über all die Neuigkeiten auf dieser Website zu informieren.",
        "normalerweise bin ich zu faul, hier herumzustehen und Neuigkeiten anzukündigen...",
        "aber anscheinend gibt es auf dieser Seite so viel Neues, dass ich nicht einfach so tun kann, als hätte ich nichts bemerkt.",
        "🌌 zuerst gibt es neue Sternbilder in „Charlies Träume“.",
        "🪐 außerdem wurden neue Monde und Zwergplaneten hinzugefügt. Ceres, Eris, Haumea und Makemake langweilen sich jetzt auch nicht mehr.",
        "📚 außerdem gibt es jetzt „Caines Enzyklopädie“. ja, genau dieser Caine. und nein, nicht „Kain“. ich habe nachgesehen.",
        "🇪🇸🇮🇹 die Seite kann jetzt auch Spanisch und Italienisch. ich würde einen Witz über meine Sprachkenntnisse machen... aber dafür bin ich zu faul.",
        "💀 kurz gesagt, es gibt jetzt mehr Ergänzungen.",
        "also sieh dich um. vielleicht findest du etwas Interessantes.",
        "und jetzt kannst du auf mich klicken, um dieses Fenster zu schließen."
    ],

    fr: [
        "💀 salut. c'est encore moi, Sans.",
        "au fait, je suis moi aussi apparu dans l'une des mises à jour. maintenant, je suis là pour vous annoncer toutes les nouveautés de ce site.",
        "d'habitude, je suis trop paresseux pour rester ici et annoncer les nouveautés...",
        "mais apparemment, il y a tellement de nouvelles choses sur ce site que je ne peux pas faire semblant de ne rien avoir remarqué.",
        "🌌 tout d'abord, de nouvelles constellations sont arrivées dans «Les rêves de Charlie Morningstar».",
        "🪐 ensuite, de nouvelles lunes et planètes naines ont été ajoutées. Cérès, Éris, Hauméa et Makémaké ne s'ennuient plus non plus.",
        "📚 il y a aussi maintenant «l'Encyclopédie de Caine». oui, ce Caine-là. et non, ce n'est pas «Caïn». j'ai vérifié.",
        "🇪🇸🇮🇹 le site peut maintenant parler espagnol et italien. je ferais bien une blague sur mes talents linguistiques... mais je suis trop paresseux pour ça.",
        "💀 bref, il y a maintenant encore plus de nouveautés.",
        "alors regarde autour de toi. tu trouveras peut-être quelque chose d'intéressant.",
        "et maintenant, tu peux cliquer sur moi pour fermer cette fenêtre."
    ],

    es: [
        "💀 hey. soy yo otra vez, Sans.",
        "ah, por cierto, yo también aparecí en una de las actualizaciones. ahora estoy aquí para contaros todas las novedades de este sitio.",
        "normalmente soy demasiado perezoso para quedarme aquí anunciando las novedades...",
        "pero parece que hay tantas cosas nuevas en este sitio que ya no puedo fingir que no me he dado cuenta.",
        "🌌 primero, tenemos nuevas constelaciones en «Los sueños de Charlie Morningstar».",
        "🪐 segundo, se han añadido nuevas lunas y planetas enanos. Ceres, Eris, Haumea y Makemake ya tampoco se aburren.",
        "📚 también apareció la «Enciclopedia de Caine». sí, ese mismo Caine. y no, no es «Caín». lo comprobé.",
        "🇪🇸🇮🇹 además, el sitio ahora puede hablar español e italiano. haría un chiste sobre mis conocimientos de idiomas... pero soy demasiado perezoso para eso.",
        "💀 en fin, ahora hay más novedades.",
        "así que echa un vistazo. quizá encuentres algo interesante.",
        "y ahora puedes hacer clic en mí para cerrar esta ventana."
    ],

    it: [
        "💀 ehi. sono di nuovo io, Sans.",
        "ah, a proposito, anch'io sono comparso in uno degli aggiornamenti. ora sono qui per annunciarvi tutte le novità di questo sito.",
        "di solito sono troppo pigro per stare qui ad annunciare le novità...",
        "ma a quanto pare su questo sito ci sono così tante cose nuove che non posso semplicemente fingere di non aver notato nulla.",
        "🌌 prima di tutto, abbiamo nuove costellazioni ne «I sogni di Charlie Morningstar».",
        "🪐 in secondo luogo, sono state aggiunte nuove lune e pianeti nani. Cerere, Eris, Haumea e Makemake ora non si annoiano più.",
        "📚 è comparsa anche l'«Enciclopedia di Caine». sì, proprio quel Caine. e no, non è «Caino». ho controllato.",
        "🇪🇸🇮🇹 inoltre, il sito ora sa parlare spagnolo e italiano. farei una battuta sulle mie conoscenze linguistiche... ma sono troppo pigro per farlo.",
        "💀 insomma, ora ci sono più novità.",
        "quindi dai un'occhiata in giro. potresti trovare qualcosa di interessante.",
        "e ora puoi cliccare su di me per chiudere questa finestra."
    ]

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
        },
        es: {
            planet: "Neptuno",
            diameter: "2 707 km",
            temperature: "alrededor de −235 °C",
            description: "Triton es la luna más grande de Neptuno.",
            fact: "Triton orbita alrededor de Neptuno en la dirección opuesta a la rotación del planeta."
        },
        it: {
            planet: "Nettuno",
            diameter: "2 707 km",
            temperature: "circa −235 °C",
            description: "Tritone è la luna più grande di Nettuno.",
            fact: "Tritone orbita attorno a Nettuno nella direzione opposta alla rotazione del pianeta."
        }
    }
};
/* =========================================================
   🪐 ОТКРЫТИЕ ПЛАНЕТ
   ========================================================= */

function showPlanet(name) {

    if (!planets[name]) {
        console.error("Планета не найдена:", name);
        return;
    }

    const planet = planets[name];

    const data =
        planet[currentLanguage] ||
        planet.ru;

    if (!data) {
        console.error("Нет данных для планеты:", name);
        return;
    }

    const modal = document.getElementById("planetModal");

    if (!modal) {
        console.error("Не найдено окно planetModal");
        return;
    }

    const setText = (id, value) => {
        const element = document.getElementById(id);

        if (element) {
            element.textContent = value ?? "";
        }
    };

    setText("planetIcon", planet.icon);
    setText("planetName", data.name);
    setText("planetDescription", data.description);
    setText("planetTemperature", data.temperature);
    setText("planetDiameter", data.diameter);
    setText("planetMass", data.mass);
    setText("planetDistance", data.distance);
    setText("planetDay", data.day);
    setText("planetYear", data.year);
    setText("planetMoons", data.moons);
    setText("planetRings", data.rings);
    setText("planetAtmosphere", data.atmosphere);
    setText("planetFact", data.fact);

    modal.classList.add("open");
    modal.style.display = "flex";

    modal.dataset.planet = name;
}


/* =========================================================
   🌙 ОТКРЫТИЕ СПУТНИКОВ
   ========================================================= */

function showMoon(name) {

    if (!moons[name]) {
        console.error("Спутник не найден:", name);
        return;
    }

    const moon = moons[name];

    const data =
        moon[currentLanguage] ||
        moon.ru;

    if (!data) {
        console.error("Нет данных для спутника:", name);
        return;
    }

    const modal =
        document.getElementById("moonModal") ||
        document.getElementById("moon-modal");

    if (!modal) {
        console.error("Не найдено окно moonModal");
        return;
    }

    const setText = (id, value) => {
        const element = document.getElementById(id);

        if (element) {
            element.textContent = value ?? "";
        }
    };

    setText("moonIcon", moon.icon);
    setText("moonName", name);
    setText("moonPlanet", data.planet);
    setText("moonDiameter", data.diameter);
    setText("moonTemperature", data.temperature);
    setText("moonDescription", data.description);
    setText("moonFact", data.fact);

    modal.classList.add("open");
    modal.style.display = "flex";

    modal.dataset.moon = name;
}


/* =========================================================
   ❌ ЗАКРЫТИЕ ОКОН
   ========================================================= */

function closePlanetModal() {

    const modal =
        document.getElementById("planetModal");

    if (modal) {
        modal.classList.remove("open");
        modal.style.display = "none";
    }
}


function closeMoonModal() {

    const modal =
        document.getElementById("moonModal") ||
        document.getElementById("moon-modal");

    if (modal) {
        modal.classList.remove("open");
        modal.style.display = "none";
    }
}


/* =========================================================
   🌍 ПЕРЕВОД КАРТОЧЕК ПЛАНЕТ
   ========================================================= */

/* =========================================================
   🌙 ПЕРЕВОД КАРТОЧЕК СПУТНИКОВ
   ========================================================= */


function updateMoonCards() {

    const moonNames = {

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
            "Каллисто": "Kallisto",
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
        },

        es: {
            "Луна": "Luna",
            "Фобос": "Fobos",
            "Деймос": "Deimos",
            "Ио": "Ío",
            "Европа": "Europa",
            "Ганимед": "Ganímedes",
            "Каллисто": "Calisto",
            "Титан": "Titán",
            "Энцелад": "Encélado",
            "Тритон": "Tritón"
        },

        it: {
            "Луна": "Luna",
            "Фобос": "Fobos",
            "Деймос": "Deimos",
            "Ио": "Io",
            "Европа": "Europa",
            "Ганимед": "Ganimede",
            "Каллисто": "Callisto",
            "Титан": "Titano",
            "Энцелад": "Encelado",
            "Тритон": "Tritone"
        }
    };

    document.querySelectorAll(".moon-card").forEach(card => {

        const name = card.dataset.moon;

        if (!name || !moons[name]) {
            return;
        }

        const title = card.querySelector("h3");
        const description = card.querySelector("p");

        if (!title || !description) {
            return;
        }

        const data =
            moons[name][currentLanguage] ||
            moons[name].ru;

        title.textContent =
            moonNames[currentLanguage]?.[name] ||
            moonNames.ru[name] ||
            name;

        description.textContent =
            data?.description || "";
    });
}



/* =========================================================
   🌙 ПЕРЕВОД КАРТОЧЕК СПУТНИКОВ
   ========================================================= */








/* =========================================================
   🖱️ КЛИК ПО КАРТОЧКАМ
   ========================================================= */

document.addEventListener("click", function(event) {

    const planetCard =
        event.target.closest(".planet-card");

    if (planetCard) {

        let name =
            planetCard.dataset.planet;

        if (name && planets[name]) {
            showPlanet(name);
            return;
        }
    }

    const moonCard =
        event.target.closest(".moon-card");

    if (moonCard) {

        let name =
            moonCard.dataset.moon;

        if (name && moons[name]) {
            showMoon(name);
            return;
        }
    }
});


/* =========================================================
   🌐 ОБНОВЛЕНИЕ КАРТОЧЕК ПРИ СМЕНЕ ЯЗЫКА
   ========================================================= */

function refreshCardsLanguage() {

    updatePlanetCards();
    updateMoonCards();
}


/* =========================================================
   🚀 ПЕРВОНАЧАЛЬНАЯ НАСТРОЙКА
   ========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    updatePlanetCards();
    updateMoonCards();

});


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
   🇪🇸🇮🇹 ДОБАВЛЕНИЕ ИСПАНСКОГО И ИТАЛЬЯНСКОГО
   ========================================================= */

/* =========================================================
   🪐 ПЛАНЕТЫ — ESPAÑOL / ITALIANO
   ========================================================= */

const planetsEsIt = {

    "Меркурий": {
        es: {
            name: "Mercurio",
            description: "El planeta más cercano al Sol.",
            temperature: "de −180°C a +430°C",
            diameter: "4.879 km",
            mass: "3,30 × 10²³ kg",
            distance: "57,9 millones de km",
            day: "58,6 días terrestres",
            year: "88 días terrestres",
            moons: "0",
            rings: "No",
            atmosphere: "Casi inexistente",
            fact: "Mercurio es el planeta más pequeño del Sistema Solar."
        },
        it: {
            name: "Mercurio",
            description: "Il pianeta più vicino al Sole.",
            temperature: "da −180°C a +430°C",
            diameter: "4.879 km",
            mass: "3,30 × 10²³ kg",
            distance: "57,9 milioni di km",
            day: "58,6 giorni terrestri",
            year: "88 giorni terrestri",
            moons: "0",
            rings: "No",
            atmosphere: "Quasi inesistente",
            fact: "Mercurio è il pianeta più piccolo del Sistema Solare."
        }
    },

    "Венера": {
        es: {
            name: "Venus",
            description: "El planeta más caliente.",
            temperature: "aproximadamente +465°C",
            diameter: "12.104 km",
            mass: "4,87 × 10²⁴ kg",
            distance: "108,2 millones de km",
            day: "243 días terrestres",
            year: "224,7 días terrestres",
            moons: "0",
            rings: "No",
            atmosphere: "Dióxido de carbono",
            fact: "Venus es más caliente que Mercurio."
        },
        it: {
            name: "Venere",
            description: "Il pianeta più caldo.",
            temperature: "circa +465°C",
            diameter: "12.104 km",
            mass: "4,87 × 10²⁴ kg",
            distance: "108,2 milioni di km",
            day: "243 giorni terrestri",
            year: "224,7 giorni terrestri",
            moons: "0",
            rings: "No",
            atmosphere: "Anidride carbonica",
            fact: "Venere è più calda di Mercurio."
        }
    },

    "Земля": {
        es: {
            name: "Tierra",
            description: "Nuestro planeta natal.",
            temperature: "promedio de +15°C",
            diameter: "12.742 km",
            mass: "5,97 × 10²⁴ kg",
            distance: "149,6 millones de km",
            day: "23 h 56 min",
            year: "365,25 días",
            moons: "1",
            rings: "No",
            atmosphere: "Nitrógeno y oxígeno",
            fact: "La Tierra es el único planeta conocido con vida."
        },
        it: {
            name: "Terra",
            description: "Il nostro pianeta natale.",
            temperature: "media di +15°C",
            diameter: "12.742 km",
            mass: "5,97 × 10²⁴ kg",
            distance: "149,6 milioni di km",
            day: "23 h 56 min",
            year: "365,25 giorni",
            moons: "1",
            rings: "No",
            atmosphere: "Azoto e ossigeno",
            fact: "La Terra è l'unico pianeta conosciuto con la vita."
        }
    },

    "Марс": {
        es: {
            name: "Marte",
            description: "El planeta rojo.",
            temperature: "aproximadamente −63°C",
            diameter: "6.779 km",
            mass: "6,42 × 10²³ kg",
            distance: "227,9 millones de km",
            day: "24 h 37 min",
            year: "687 días terrestres",
            moons: "2",
            rings: "No",
            atmosphere: "Dióxido de carbono",
            fact: "Marte alberga el Olympus Mons, el volcán más grande del Sistema Solar."
        },
        it: {
            name: "Marte",
            description: "Il pianeta rosso.",
            temperature: "circa −63°C",
            diameter: "6.779 km",
            mass: "6,42 × 10²³ kg",
            distance: "227,9 milioni di km",
            day: "24 h 37 min",
            year: "687 giorni terrestri",
            moons: "2",
            rings: "No",
            atmosphere: "Anidride carbonica",
            fact: "Marte ospita l'Olympus Mons, il vulcano più grande del Sistema Solare."
        }
    },

    "Юпитер": {
        es: {
            name: "Júpiter",
            description: "El planeta más grande del Sistema Solar.",
            temperature: "aproximadamente −110°C",
            diameter: "139.820 km",
            mass: "1,90 × 10²⁷ kg",
            distance: "778,5 millones de km",
            day: "9 h 56 min",
            year: "11,86 años terrestres",
            moons: "95+",
            rings: "Sí",
            atmosphere: "Hidrógeno y helio",
            fact: "La Gran Mancha Roja es una enorme tormenta que existe desde hace siglos."
        },
        it: {
            name: "Giove",
            description: "Il pianeta più grande del Sistema Solare.",
            temperature: "circa −110°C",
            diameter: "139.820 km",
            mass: "1,90 × 10²⁷ kg",
            distance: "778,5 milioni di km",
            day: "9 h 56 min",
            year: "11,86 anni terrestri",
            moons: "95+",
            rings: "Sì",
            atmosphere: "Idrogeno ed elio",
            fact: "La Grande Macchia Rossa è una gigantesca tempesta che esiste da secoli."
        }
    },

    "Сатурн": {
        es: {
            name: "Saturno",
            description: "Un planeta con magníficos anillos.",
            temperature: "aproximadamente −140°C",
            diameter: "116.460 km",
            mass: "5,68 × 10²⁶ kg",
            distance: "1,43 mil millones de km",
            day: "10 h 42 min",
            year: "29,45 años terrestres",
            moons: "140+",
            rings: "Sí",
            atmosphere: "Hidrógeno y helio",
            fact: "Los anillos de Saturno están compuestos principalmente de hielo y roca."
        },
        it: {
            name: "Saturno",
            description: "Un pianeta con magnifici anelli.",
            temperature: "circa −140°C",
            diameter: "116.460 km",
            mass: "5,68 × 10²⁶ kg",
            distance: "1,43 miliardi di km",
            day: "10 h 42 min",
            year: "29,45 anni terrestri",
            moons: "140+",
            rings: "Sì",
            atmosphere: "Idrogeno ed elio",
            fact: "Gli anelli di Saturno sono composti principalmente da ghiaccio e roccia."
        }
    },

    "Уран": {
        es: {
            name: "Urano",
            description: "Un gigante de hielo.",
            temperature: "aproximadamente −195°C",
            diameter: "50.724 km",
            mass: "8,68 × 10²⁵ kg",
            distance: "2,87 mil millones de km",
            day: "17 h 14 min",
            year: "84 años terrestres",
            moons: "27",
            rings: "Sí",
            atmosphere: "Hidrógeno, helio y metano",
            fact: "Urano gira casi de lado."
        },
        it: {
            name: "Urano",
            description: "Un gigante ghiacciato.",
            temperature: "circa −195°C",
            diameter: "50.724 km",
            mass: "8,68 × 10²⁵ kg",
            distance: "2,87 miliardi di km",
            day: "17 h 14 min",
            year: "84 anni terrestri",
            moons: "27",
            rings: "Sì",
            atmosphere: "Idrogeno, elio e metano",
            fact: "Urano ruota quasi su un fianco."
        }
    },

    "Нептун": {
        es: {
            name: "Neptuno",
            description: "El planeta más lejano.",
            temperature: "aproximadamente −200°C",
            diameter: "49.244 km",
            mass: "1,02 × 10²⁶ kg",
            distance: "4,50 mil millones de km",
            day: "16 h 6 min",
            year: "164,8 años terrestres",
            moons: "14",
            rings: "Sí",
            atmosphere: "Hidrógeno, helio y metano",
            fact: "Neptuno tiene algunos de los vientos más rápidos del Sistema Solar."
        },
        it: {
            name: "Nettuno",
            description: "Il pianeta più lontano.",
            temperature: "circa −200°C",
            diameter: "49.244 km",
            mass: "1,02 × 10²⁶ kg",
            distance: "4,50 miliardi di km",
            day: "16 h 6 min",
            year: "164,8 anni terrestri",
            moons: "14",
            rings: "Sì",
            atmosphere: "Idrogeno, elio e metano",
            fact: "Nettuno ha alcuni dei venti più veloci del Sistema Solare."
        }
    },

    "Плутон": {
        es: {
            name: "Plutón",
            description: "Un planeta enano del cinturón de Kuiper.",
            temperature: "aproximadamente −230°C",
            diameter: "2.377 km",
            mass: "1,31 × 10²² kg",
            distance: "aproximadamente 5,9 mil millones de km",
            day: "153,3 horas",
            year: "248 años terrestres",
            moons: "5",
            rings: "No",
            atmosphere: "Nitrógeno, metano y monóxido de carbono",
            fact: "Plutón fue clasificado como planeta enano en 2006."
        },
        it: {
            name: "Plutone",
            description: "Un pianeta nano della fascia di Kuiper.",
            temperature: "circa −230°C",
            diameter: "2.377 km",
            mass: "1,31 × 10²² kg",
            distance: "circa 5,9 miliardi di km",
            day: "153,3 ore",
            year: "248 anni terrestri",
            moons: "5",
            rings: "No",
            atmosphere: "Azoto, metano e monossido di carbonio",
            fact: "Plutone è stato classificato come pianeta nano nel 2006."
        }
    }
};


/* Добавляем новые языки к существующим планетам */

Object.keys(planetsEsIt).forEach(planetName => {

    if (planets[planetName]) {

        planets[planetName].es = planetsEsIt[planetName].es;
        planets[planetName].it = planetsEsIt[planetName].it;

    }

    });


/* =========================================================
   🌙 СПУТНИКИ — ESPAÑOL / ITALIANO
   ========================================================= */

const moonsEsIt = {

    "Луна": {
        es: {
            planet: "Tierra",
            diameter: "3.474 km",
            temperature: "de −173°C a +127°C",
            description: "La Luna es el satélite natural de la Tierra.",
            fact: "La Luna siempre muestra la misma cara a la Tierra."
        },
        it: {
            planet: "Terra",
            diameter: "3.474 km",
            temperature: "da −173°C a +127°C",
            description: "La Luna è il satellite naturale della Terra.",
            fact: "La Luna mostra sempre la stessa faccia alla Terra."
        }
    },

    "Фобос": {
        es: {
            planet: "Marte",
            diameter: "aproximadamente 22 km",
            temperature: "muy baja",
            description: "Fobos es la luna más grande y cercana de Marte.",
            fact: "Fobos se está acercando gradualmente a Marte."
        },
        it: {
            planet: "Marte",
            diameter: "circa 22 km",
            temperature: "molto bassa",
            description: "Fobos è la luna più grande e vicina di Marte.",
            fact: "Fobos si sta avvicinando gradualmente a Marte."
        }
    },

    "Деймос": {
        es: {
            planet: "Marte",
            diameter: "aproximadamente 12 km",
            temperature: "muy baja",
            description: "Deimos es una pequeña luna de Marte.",
            fact: "El nombre Deimos significa «terror»."
        },
        it: {
            planet: "Marte",
            diameter: "circa 12 km",
            temperature: "molto bassa",
            description: "Deimos è una piccola luna di Marte.",
            fact: "Il nome Deimos significa «terrore»."
        }
    },

    "Ио": {
        es: {
            planet: "Júpiter",
            diameter: "3.643 km",
            temperature: "aproximadamente −130°C",
            description: "Ío es una luna de Júpiter con volcanes extremadamente activos.",
            fact: "Ío es el mundo con mayor actividad volcánica del Sistema Solar."
        },
        it: {
            planet: "Giove",
            diameter: "3.643 km",
            temperature: "circa −130°C",
            description: "Io è una luna di Giove con vulcani estremamente attivi.",
            fact: "Io è il mondo con la maggiore attività vulcanica del Sistema Solare."
        }
    },

    "Европа": {
        es: {
            planet: "Júpiter",
            diameter: "3.122 km",
            temperature: "aproximadamente −160°C",
            description: "Europa es una luna helada de Júpiter.",
            fact: "Probablemente existe un océano bajo su superficie helada."
        },
        it: {
            planet: "Giove",
            diameter: "3.122 km",
            temperature: "circa −160°C",
            description: "Europa è una luna ghiacciata di Giove.",
            fact: "Probabilmente esiste un oceano sotto la sua superficie ghiacciata."
        }
    },

    "Ганимед": {
        es: {
            planet: "Júpiter",
            diameter: "5.268 km",
            temperature: "aproximadamente −160°C",
            description: "Ganímedes es la luna más grande del Sistema Solar.",
            fact: "Ganímedes tiene un diámetro mayor que Mercurio."
        },
        it: {
            planet: "Giove",
            diameter: "5.268 km",
            temperature: "circa −160°C",
            description: "Ganimede è la luna più grande del Sistema Solare.",
            fact: "Ganimede ha un diametro maggiore di quello di Mercurio."
        }
    },

    "Каллисто": {
        es: {
            planet: "Júpiter",
            diameter: "4.821 km",
            temperature: "aproximadamente −140°C",
            description: "Calisto es una de las lunas más grandes de Júpiter.",
            fact: "La superficie de Calisto está cubierta de numerosos cráteres de impacto."
        },
        it: {
            planet: "Giove",
            diameter: "4.821 km",
            temperature: "circa −140°C",
            description: "Callisto è una delle lune più grandi di Giove.",
            fact: "La superficie di Callisto è ricoperta da numerosi crateri da impatto."
        }
    },

    "Титан": {
        es: {
            planet: "Saturno",
            diameter: "5.150 km",
            temperature: "aproximadamente −179°C",
            description: "Titán es la luna más grande de Saturno.",
            fact: "Titán tiene una atmósfera densa y mares de hidrocarburos líquidos."
        },
        it: {
            planet: "Saturno",
            diameter: "5.150 km",
            temperature: "circa −179°C",
            description: "Titano è la luna più grande di Saturno.",
            fact: "Titano possiede una densa atmosfera e mari di idrocarburi liquidi."
        }
    },

    "Энцелад": {
        es: {
            planet: "Saturno",
            diameter: "aproximadamente 504 km",
            temperature: "aproximadamente −200°C",
            description: "Encélado es una pequeña luna helada de Saturno.",
            fact: "Desde su región sur salen chorros de vapor de agua y hielo."
        },
        it: {
            planet: "Saturno",
            diameter: "circa 504 km",
            temperature: "circa −200°C",
            description: "Encelado è una piccola luna ghiacciata di Saturno.",
            fact: "Dalla sua regione meridionale eruttano getti di vapore acqueo e ghiaccio."
        }
    },

    "Тритон": {
        es: {
            planet: "Neptuno",
            diameter: "2.707 km",
            temperature: "aproximadamente −235°C",
            description: "Tritón es la luna más grande de Neptuno.",
            fact: "Tritón orbita Neptuno en dirección contraria a la rotación del planeta."
        },
        it: {
            planet: "Nettuno",
            diameter: "2.707 km",
            temperature: "circa −235°C",
            description: "Tritone è la luna più grande di Nettuno.",
            fact: "Tritone orbita attorno a Nettuno in direzione opposta alla rotazione del pianeta."
        }
    }
};


/* Добавляем новые языки к существующим спутникам */

Object.keys(moonsEsIt).forEach(moonName => {

    if (moons[moonName]) {

        moons[moonName].es = moonsEsIt[moonName].es;
        moons[moonName].it = moonsEsIt[moonName].it;

    }

});
/* =========================================================
   🌙 ДОБАВЛЯЕМ ESPAÑOL / ITALIANO В ДЕТАЛИ СПУТНИКОВ
   ========================================================= */

moonDetailsTranslations.es = Object.fromEntries(
    Object.entries(moonsEsIt).map(([moonName, data]) => [
        moonName,
        data.es
    ])
);

moonDetailsTranslations.it = Object.fromEntries(
    Object.entries(moonsEsIt).map(([moonName, data]) => [
        moonName,
        data.it
    ])
);

/* =========================================================
   🌙 ПЕРЕВОДЫ ДЕТАЛЕЙ СПУТНИКОВ
   ========================================================= */

/*
   Используем те же переводы, что и в объекте moons.
   Так moonDetailsTranslations автоматически получает
   испанский и итальянский.
*/

moonDetailsTranslations.es = {};

moonDetailsTranslations.it = {};

Object.keys(moonsEsIt).forEach(moonName => {

    moonDetailsTranslations.es[moonName] =
        moonsEsIt[moonName].es;

    moonDetailsTranslations.it[moonName] =
        moonsEsIt[moonName].it;

});


console.log("🇪🇸 Испанский язык добавлен к планетам и спутникам.");
console.log("🇮🇹 Итальянский язык добавлен к планетам и спутникам.");


/* =========================================================
   🌙 ОПИСАНИЯ КАРТОЧЕК СПУТНИКОВ
   ========================================================= */

const moonCardTranslations = {

    ru: {
        "Луна": "Естественный спутник Земли.",
        "Фобос": "Крупнейший и ближайший спутник Марса.",
        "Деймос": "Небольшой спутник Марса.",
        "Ио": "Спутник Юпитера с чрезвычайно активными вулканами.",
        "Европа": "Ледяной спутник Юпитера.",
        "Ганимед": "Крупнейший спутник Солнечной системы.",
        "Каллисто": "Один из крупнейших спутников Юпитера.",
        "Титан": "Крупнейший спутник Сатурна.",
        "Энцелад": "Небольшой ледяной спутник Сатурна.",
        "Тритон": "Крупнейший спутник Нептуна."
    },

    kk: {
        "Луна": "Жердің табиғи серігі.",
        "Фобос": "Марстың ең үлкен әрі ең жақын серігі.",
        "Деймос": "Марстың кішкентай серігі.",
        "Ио": "Жанартаулары өте белсенді Юпитер серігі.",
        "Европа": "Юпитердің мұзды серігі.",
        "Ганимед": "Күн жүйесіндегі ең үлкен серік.",
        "Каллисто": "Юпитердің ең ірі серіктерінің бірі.",
        "Титан": "Сатурнның ең үлкен серігі.",
        "Энцелад": "Сатурнның кішкентай мұзды серігі.",
        "Тритон": "Нептунның ең үлкен серігі."
    },

    cs: {
        "Луна": "Přirozená družice Země.",
        "Фобос": "Největší a nejbližší měsíc Marsu.",
        "Деймос": "Malý měsíc Marsu.",
        "Ио": "Měsíc Jupiteru s mimořádně aktivními sopkami.",
        "Европа": "Ledový měsíc Jupiteru.",
        "Ганимед": "Největší měsíc Sluneční soustavy.",
        "Каллисто": "Jeden z největších měsíců Jupiteru.",
        "Титан": "Největší měsíc Saturnu.",
        "Энцелад": "Malý ledový měsíc Saturnu.",
        "Тритон": "Největší měsíc Neptunu."
    },

    en: {
        "Луна": "Earth's natural satellite.",
        "Фобос": "The largest and closest moon of Mars.",
        "Деймос": "A small moon of Mars.",
        "Ио": "A moon of Jupiter with extremely active volcanoes.",
        "Европа": "An icy moon of Jupiter.",
        "Ганимед": "The largest moon in the Solar System.",
        "Каллисто": "One of Jupiter's largest moons.",
        "Титан": "The largest moon of Saturn.",
        "Энцелад": "A small icy moon of Saturn.",
        "Тритон": "The largest moon of Neptune."
    },

    de: {
        "Луна": "Der natürliche Satellit der Erde.",
        "Фобос": "Der größte und nächste Mond des Mars.",
        "Деймос": "Ein kleiner Mond des Mars.",
        "Ио": "Ein Jupitermond mit äußerst aktiven Vulkanen.",
        "Европа": "Ein Eismond des Jupiter.",
        "Ганимед": "Der größte Mond im Sonnensystem.",
        "Каллисто": "Einer der größten Monde des Jupiter.",
        "Титан": "Der größte Mond des Saturn.",
        "Энцелад": "Ein kleiner Eismond des Saturn.",
        "Тритон": "Der größte Mond des Neptun."
    },

    fr: {
        "Луна": "Le satellite naturel de la Terre.",
        "Фобос": "Le plus grand et le plus proche satellite de Mars.",
        "Деймос": "Un petit satellite de Mars.",
        "Ио": "Un satellite de Jupiter aux volcans extrêmement actifs.",
        "Европа": "Un satellite glacé de Jupiter.",
        "Ганимед": "Le plus grand satellite du Système solaire.",
        "Каллисто": "L'un des plus grands satellites de Jupiter.",
        "Титан": "Le plus grand satellite de Saturne.",
        "Энцелад": "Un petit satellite glacé de Saturne.",
        "Тритон": "Le plus grand satellite de Neptune."
    },

    es: {
        "Луна": "El satélite natural de la Tierra.",
        "Фобос": "La luna más grande y cercana de Marte.",
        "Деймос": "Una pequeña luna de Marte.",
        "Ио": "Una luna de Júpiter con volcanes extremadamente activos.",
        "Европа": "Una luna helada de Júpiter.",
        "Ганимед": "La luna más grande del Sistema Solar.",
        "Каллисто": "Una de las lunas más grandes de Júpiter.",
        "Титан": "La luna más grande de Saturno.",
        "Энцелад": "Una pequeña luna helada de Saturno.",
        "Тритон": "La luna más grande de Neptuno."
    },

    it: {
        "Луна": "Il satellite naturale della Terra.",
        "Фобос": "La luna più grande e vicina di Marte.",
        "Деймос": "Una piccola luna di Marte.",
        "Ио": "Una luna di Giove con vulcani estremamente attivi.",
        "Европа": "Una luna ghiacciata di Giove.",
        "Ганимед": "La luna più grande del Sistema Solare.",
        "Каллисто": "Una delle lune più grandi di Giove.",
        "Титан": "La luna più grande di Saturno.",
        "Энцелад": "Una piccola luna ghiacciata di Saturno.",
        "Тритон": "La luna più grande di Nettuno."
    }
};


/* =========================================================
   🌙 ОБНОВЛЕНИЕ КАРТОЧЕК СПУТНИКОВ
   ========================================================= */




/* =========================================================
   🌐 СОЗВЕЗДИЯ
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
    },

    es: {
        title: "🌙 Lunas de los planetas",
        text: "Explora las lunas del Sistema Solar y descubre más sobre estos mundos."
    },

    it: {
        title: "🌙 Lune dei pianeti",
        text: "Esplora le lune del Sistema Solare e scopri di più su questi mondi."
    }
};
function updateMoonSectionLanguage() {

    const translation =
        moonSectionTranslations[currentLanguage] ||
        moonSectionTranslations.ru;

    const title =
        document.getElementById("moonsTitle");

    const text =
        document.getElementById("moonsDescription");

    if (title) {
        title.textContent =
            translation.title;
    }

    if (text) {
        text.textContent =
            translation.text;
    }
}
function updateConstellationLanguage() {

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
            "Персей": "Персей",
            "Большой Пёс": "Большой Пёс",
            "Стрелец": "Стрелец",
            "Близнецы": "Близнецы",
            "Лев": "Лев",
            "Цефей": "Цефей",
            "Пегас": "Пегас"
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
            "Персей": "Персей",
            "Большой Пёс": "Үлкен Ит",
            "Стрелец": "Мерген",
            "Близнецы": "Егіздер",
            "Лев": "Арыстан",
            "Цефей": "Цефей",
            "Пегас": "Пегас"
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
            "Персей": "Perseus",
            "Большой Пёс": "Velký pes",
            "Стрелец": "Střelec",
            "Близнецы": "Blíženci",
            "Лев": "Lev",
            "Цефей": "Cefeus",
            "Пегас": "Pegas"
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
            "Персей": "Perseus",
            "Большой Пёс": "Canis Major",
            "Стрелец": "Sagittarius",
            "Близнецы": "Gemini",
            "Лев": "Leo",
            "Цефей": "Cepheus",
            "Пегас": "Pegasus"
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
            "Персей": "Perseus",
            "Большой Пёс": "Großer Hund",
            "Стрелец": "Schütze",
            "Близнецы": "Zwillinge",
            "Лев": "Löwe",
            "Цефей": "Kepheus",
            "Пегас": "Pegasus"
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
            "Персей": "Persée",
            "Большой Пёс": "Grand Chien",
            "Стрелец": "Sagittaire",
            "Близнецы": "Gémeaux",
            "Лев": "Lion",
            "Цефей": "Céphée",
            "Пегас": "Pégase"
        },

        es: {
            "Большая Медведица": "Osa Mayor",
            "Малая Медведица": "Osa Menor",
            "Орион": "Orión",
            "Кассиопея": "Casiopea",
            "Лебедь": "Cisne",
            "Лира": "Lira",
            "Андромеда": "Andrómeda",
            "Телец": "Tauro",
            "Скорпион": "Escorpio",
            "Персей": "Perseo",
            "Большой Пёс": "Can Mayor",
            "Стрелец": "Sagitario",
            "Близнецы": "Géminis",
            "Лев": "Leo",
            "Цефей": "Cefeo",
            "Пегас": "Pegaso"
        },

        it: {
            "Большая Медведица": "Orsa Maggiore",
            "Малая Медведица": "Orsa Minore",
            "Орион": "Orione",
            "Кассиопея": "Cassiopea",
            "Лебедь": "Cigno",
            "Лира": "Lira",
            "Андромеда": "Andromeda",
            "Телец": "Toro",
            "Скорпион": "Scorpione",
            "Персей": "Perseo",
            "Большой Пёс": "Cane Maggiore",
            "Стрелец": "Sagittario",
            "Близнецы": "Gemelli",
            "Лев": "Leone",
            "Цефей": "Cefeo",
            "Пегас": "Pegaso"
        }
    };


    const constellationDescriptions = {

        ru: {
            "Большая Медведица": "Одно из самых узнаваемых созвездий северного неба.",
            "Малая Медведица": "Известное северное созвездие, в котором находится Полярная звезда.",
            "Орион": "Яркое и легко узнаваемое созвездие зимнего неба.",
            "Кассиопея": "Созвездие северного неба, узнаваемое по характерной форме буквы W.",
            "Лебедь": "Созвездие летнего неба, расположенное вдоль Млечного Пути.",
            "Лира": "Небольшое созвездие, известное яркой звездой Вега.",
            "Андромеда": "Северное созвездие, названное в честь героини древнегреческих мифов.",
            "Телец": "Созвездие зодиакального пояса, известное звездным скоплением Плеяды.",
            "Скорпион": "Яркое созвездие южной части неба с характерной изогнутой формой.",
            "Персей": "Созвездие северного неба, названное в честь героя древнегреческих мифов.",
            "Большой Пёс": "Созвездие южного неба, в котором находится яркая звезда Сириус.",
            "Стрелец": "Зодиакальное созвездие, расположенное в направлении центра Млечного Пути.",
            "Близнецы": "Зодиакальное созвездие, известное яркими звёздами Кастор и Поллукс.",
            "Лев": "Зодиакальное созвездие, напоминающее фигуру льва.",
            "Цефей": "Созвездие северного неба, названное в честь царя из древнегреческой мифологии.",
            "Пегас": "Большое созвездие северного неба, названное в честь крылатого коня Пегаса."
        },

        kk: {
            "Большая Медведица": "Солтүстік аспандағы ең танымал шоқжұлдыздардың бірі.",
            "Малая Медведица": "Солтүстік аспанда орналасқан, оның құрамында Темірқазық жұлдызы бар.",
            "Орион": "Қысқы аспандағы жарық әрі оңай танылатын шоқжұлдыз.",
            "Кассиопея": "W әрпіне ұқсас пішінімен танымал солтүстік аспан шоқжұлдызы.",
            "Лебедь": "Құс жолының бойында орналасқан жазғы аспан шоқжұлдызы.",
            "Лира": "Жарқын Вега жұлдызымен танымал шағын шоқжұлдыз.",
            "Андромеда": "Ежелгі грек мифтеріндегі кейіпкердің атымен аталған солтүстік шоқжұлдыз.",
            "Телец": "Плеядалар жұлдыздар шоғырымен танымал зодиак шоқжұлдызы.",
            "Скорпион": "Өзіне тән иілген пішіні бар оңтүстік аспандағы жарық шоқжұлдыз.",
            "Персей": "Ежелгі грек мифтеріндегі батырдың атымен аталған солтүстік шоқжұлдыз.",
            "Большой Пёс": "Солтүстік емес, оңтүстік аспанда орналасқан және онда жарық Сириус жұлдызы бар шоқжұлдыз.",
            "Стрелец": "Құс жолының орталығы бағытына қарай орналасқан зодиак шоқжұлдызы.",
            "Близнецы": "Кастор мен Поллукс атты жарық жұлдыздарымен танымал зодиак шоқжұлдызы.",
            "Лев": "Арыстанның бейнесіне ұқсайтын зодиак шоқжұлдызы.",
            "Цефей": "Ежелгі грек мифологиясындағы патшаның атымен аталған солтүстік шоқжұлдыз.",
            "Пегас": "Қанатты Пегас атымен аталған үлкен солтүстік аспан шоқжұлдызы."
        },

        cs: {
            "Большая Медведица": "Jedno z nejznámějších souhvězdí severní oblohy.",
            "Малая Медведица": "Známé severní souhvězdí, ve kterém se nachází Polárka.",
            "Орион": "Jasné a snadno rozpoznatelné souhvězdí zimní oblohy.",
            "Кассиопея": "Souhvězdí severní oblohy známé svým charakteristickým tvarem písmene W.",
            "Лебедь": "Souhvězdí letní oblohy ležící podél Mléčné dráhy.",
            "Лира": "Malé souhvězdí známé jasnou hvězdou Vega.",
            "Андромеда": "Severní souhvězdí pojmenované po hrdince starořeckých mýtů.",
            "Телец": "Souhvězdí zvěrokruhu známé hvězdokupou Plejády.",
            "Скорпион": "Jasné souhvězdí jižní oblohy s charakteristickým zakřiveným tvarem.",
            "Персей": "Severní souhvězdí pojmenované po hrdinovi starořeckých mýtů.",
            "Большой Пёс": "Souhvězdí jižní oblohy, ve kterém se nachází jasná hvězda Sirius.",
            "Стрелец": "Souhvězdí zvěrokruhu ležící směrem ke středu Mléčné dráhy.",
            "Близнецы": "Souhvězdí zvěrokruhu známé jasnými hvězdami Castor a Pollux.",
            "Лев": "Souhvězdí zvěrokruhu připomínající postavu lva.",
            "Цефей": "Souhvězdí severní oblohy pojmenované po králi ze starořecké mytologie.",
            "Пегас": "Velké souhvězdí severní oblohy pojmenované po okřídleném koni Pegasovi."
        },

        en: {
            "Большая Медведица": "One of the most recognizable constellations in the northern sky.",
            "Малая Медведица": "A well-known northern constellation containing the North Star.",
            "Орион": "A bright and easily recognizable constellation of the winter sky.",
            "Кассиопея": "A northern constellation recognizable by its distinctive W shape.",
            "Лебедь": "A summer constellation located along the Milky Way.",
            "Лира": "A small constellation known for the bright star Vega.",
            "Андромеда": "A northern constellation named after a heroine from ancient Greek mythology.",
            "Телец": "A zodiac constellation known for the Pleiades star cluster.",
            "Скорпион": "A bright southern constellation with a distinctive curved shape.",
            "Персей": "A northern constellation named after a hero from ancient Greek mythology.",
            "Большой Пёс": "A southern constellation containing the bright star Sirius.",
            "Стрелец": "A zodiac constellation located toward the center of the Milky Way.",
            "Близнецы": "A zodiac constellation known for the bright stars Castor and Pollux.",
            "Лев": "A zodiac constellation resembling the figure of a lion.",
            "Цефей": "A northern constellation named after a king from ancient Greek mythology.",
            "Пегас": "A large northern constellation named after the winged horse Pegasus."
        },

        de: {
            "Большая Медведица": "Eines der bekanntesten Sternbilder des Nordhimmels.",
            "Малая Медведица": "Ein bekanntes Sternbild des Nordhimmels mit dem Polarstern.",
            "Орион": "Ein helles und leicht erkennbares Sternbild des Winterhimmels.",
            "Кассиопея": "Ein Sternbild des Nordhimmels, das an seiner charakteristischen W-Form erkennbar ist.",
            "Лебедь": "Ein Sommersternbild entlang der Milchstraße.",
            "Лира": "Ein kleines Sternbild, das für den hellen Stern Vega bekannt ist.",
            "Андромеда": "Ein nördliches Sternbild, das nach einer Heldin der griechischen Mythologie benannt wurde.",
            "Телец": "Ein Tierkreissternbild, das für den Sternhaufen der Plejaden bekannt ist.",
            "Скорпион": "Ein helles Sternbild des Südhimmels mit einer charakteristischen gebogenen Form.",
            "Персей": "Ein nördliches Sternbild, das nach einem Helden der griechischen Mythologie benannt wurde.",
            "Большой Пёс": "Ein Sternbild des Südhimmels mit dem hellen Stern Sirius.",
            "Стрелец": "Ein Tierkreissternbild in Richtung des Zentrums der Milchstraße.",
            "Близнецы": "Ein Tierkreissternbild mit den hellen Sternen Castor und Pollux.",
            "Лев": "Ein Tierkreissternbild, das an einen Löwen erinnert.",
            "Цефей": "Ein Sternbild des Nordhimmels, das nach einem König der griechischen Mythologie benannt wurde.",
            "Пегас": "Ein großes Sternbild des Nordhimmels, benannt nach dem geflügelten Pferd Pegasus."
        },

        fr: {
            "Большая Медведица": "L'une des constellations les plus reconnaissables du ciel boréal.",
            "Малая Медведица": "Une constellation célèbre du ciel boréal où se trouve l'étoile Polaire.",
            "Орион": "Une constellation brillante et facilement reconnaissable du ciel hivernal.",
            "Кассиопея": "Une constellation du ciel boréal reconnaissable à sa forme caractéristique en W.",
            "Лебедь": "Une constellation estivale située le long de la Voie lactée.",
            "Лира": "Une petite constellation connue pour son étoile brillante Véga.",
            "Андромеда": "Une constellation boréale nommée d'après une héroïne de la mythologie grecque.",
            "Телец": "Une constellation du zodiaque connue pour l'amas des Pléiades.",
            "Скорпион": "Une constellation brillante du ciel austral à la forme courbée caractéristique.",
            "Персей": "Une constellation boréale nommée d'après un héros de la mythologie grecque.",
            "Большой Пёс": "Une constellation du ciel austral où se trouve l'étoile brillante Sirius.",
            "Стрелец": "Une constellation du zodiaque située en direction du centre de la Voie lactée.",
            "Близнецы": "Une constellation du zodiaque connue pour les étoiles brillantes Castor et Pollux.",
            "Лев": "Une constellation du zodiaque évoquant la forme d'un lion.",
            "Цефей": "Une constellation boréale nommée d'après un roi de la mythologie grecque.",
            "Пегас": "Une grande constellation boréale nommée d'après le cheval ailé Pégase."
        },

        es: {
            "Большая Медведица": "Una de las constelaciones más reconocibles del cielo del norte.",
            "Малая Медведица": "Una conocida constelación del norte donde se encuentra la Estrella Polar.",
            "Орион": "Una constelación brillante y fácilmente reconocible del cielo invernal.",
            "Кассиопея": "Una constelación del norte reconocible por su característica forma de W.",
            "Лебедь": "Una constelación del cielo de verano situada a lo largo de la Vía Láctea.",
            "Лира": "Una pequeña constelación conocida por la brillante estrella Vega.",
            "Андромеда": "Una constelación del norte llamada así por una heroína de la mitología griega.",
            "Телец": "Una constelación zodiacal conocida por el cúmulo estelar de las Pléyades.",
            "Скорпион": "Una brillante constelación del cielo austral con una característica forma curva.",
            "Персей": "Una constelación del norte llamada así por un héroe de la mitología griega.",
            "Большой Пёс": "Una constelación del cielo austral donde se encuentra la brillante estrella Sirio.",
            "Стрелец": "Una constelación zodiacal situada en dirección al centro de la Vía Láctea.",
            "Близнецы": "Una constelación zodiacal conocida por las brillantes estrellas Cástor y Pólux.",
            "Лев": "Una constelación zodiacal que recuerda la figura de un león.",
            "Цефей": "Una constelación del norte llamada así por un rey de la mitología griega.",
            "Пегас": "Una gran constelación del norte llamada así por el caballo alado Pegaso."
        },

        it: {
            "Большая Медведица": "Una delle costellazioni più riconoscibili del cielo settentrionale.",
            "Малая Медведица": "Una famosa costellazione settentrionale dove si trova la Stella Polare.",
            "Орион": "Una costellazione luminosa e facilmente riconoscibile del cielo invernale.",
            "Кассиопея": "Una costellazione settentrionale riconoscibile per la caratteristica forma a W.",
            "Лебедь": "Una costellazione estiva situata lungo la Via Lattea.",
            "Лира": "Una piccola costellazione conosciuta per la luminosa stella Vega.",
            "Андромеда": "Una costellazione settentrionale intitolata a un'eroina della mitologia greca.",
            "Телец": "Una costellazione zodiacale famosa per l'ammasso stellare delle Pleiadi.",
            "Скорпион": "Una brillante costellazione meridionale dalla caratteristica forma curva.",
            "Персей": "Una costellazione settentrionale intitolata a un eroe della mitologia greca.",
            "Большой Пёс": "Una costellazione del cielo meridionale dove si trova la brillante stella Sirio.",
            "Стрелец": "Una costellazione zodiacale situata in direzione del centro della Via Lattea.",
            "Близнецы": "Una costellazione zodiacale conosciuta per le stelle luminose Castore e Polluce.",
            "Лев": "Una costellazione zodiacale che ricorda la figura di un leone.",
            "Цефей": "Una costellazione settentrionale intitolata a un re della mitologia greca.",
            "Пегас": "Una grande costellazione settentrionale intitolata al cavallo alato Pegaso."
        }
    };


    const translations =
        constellationTranslations[currentLanguage];

    const descriptions =
        constellationDescriptions[currentLanguage];

    if (!translations || !descriptions) {
        return;
    }


    document
        .querySelectorAll(".constellation-card h2")
        .forEach(title => {

            const originalName =
                title.dataset.originalName ||
                title.textContent.trim();

            title.dataset.originalName =
                originalName;

            if (translations[originalName]) {
                title.textContent =
                    translations[originalName];
            }
        });


    document
        .querySelectorAll(".constellation-description")
        .forEach(description => {

            const originalName =
                description.dataset.originalName;

            if (originalName &&
                descriptions[originalName]) {

                description.textContent =
                    descriptions[originalName];
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

            it: "← Torna all'avventura spaziale"
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
            

                // 🪐 Обновляем карточки планет
    updatePlanetCards();

    // 🌙 Обновляем карточки спутников
    updateMoonCards();

    // 🌙 Обновляем заголовок и описание секции спутников
    updateMoonSectionLanguage();

    const text = languages[language];


    /* =====================================================
       🌌 ГЛАВНАЯ СТРАНИЦА
       ===================================================== */

    const elements = {

        siteTitle: text.siteTitle,
        siteSubtitle: text.siteSubtitle,
        welcomeTitle: text.welcomeTitle,
        welcomeText: text.welcomeText,
        startButton: text.startButton,
        moonsButton: text.moonsButton,
        spaceObjectsButton: text.spaceObjectsButton,
        kainButton: text.kainButton,
        dwarfPlanetsButton: text.dwarfPlanetsButton,
        constellationButton: text.constellationButton,
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


    Object.entries(elements).forEach(
        ([id, value]) => {

            const element =
                document.getElementById(id);

            if (element && value !== undefined) {
                element.textContent = value;
            }

        }
    );


    /* =====================================================
       💀 САНС
       ===================================================== */

    const updatesTitle =
        document.getElementById("updatesTitle");

    if (updatesTitle) {
        updatesTitle.textContent =
            text.updatesTitle;
    }


    if (typeof sansUpdateTranslations !== "undefined") {

        const sansTexts =
            sansUpdateTranslations[language] ||
            sansUpdateTranslations.ru;

        for (let i = 1; i <= 10; i++) {

            const element =
                document.getElementById(
                    `sansUpdate${i}`
                );

            if (
                element &&
                sansTexts &&
                sansTexts[i - 1]
            ) {
                element.textContent =
                    sansTexts[i - 1];
            }

        }

    }


    const sansUpdateButton =
        document.getElementById(
            "sansUpdateButton"
        );

    if (sansUpdateButton) {

        sansUpdateButton.setAttribute(
            "aria-label",
            text.updatesTitle
        );

    }


    /* =====================================================
       🌐 КНОПКА ЯЗЫКА
       ===================================================== */

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
        }

    };


    const selected =
        languageData[language];

    if (
        languageButton &&
        selected
    ) {

        languageButton.innerHTML = `
            <img
                src="${selected.flag}"
                alt="${selected.name}"
            >
            ${selected.name}
        `;

    }


    /* =====================================================
       🪐 ПЛАНЕТЫ
       ===================================================== */

    if (typeof updatePlanetCards === "function") {
        updatePlanetCards();
    }


    /* =====================================================
       🌙 СПУТНИКИ
       ===================================================== */

    if (typeof updateMoonCards === "function") {
        updateMoonCards();
    }

    if (typeof updateMoonSectionLanguage === "function") {
        updateMoonSectionLanguage();
    }


    /* =====================================================
       ✨ СОЗВЕЗДИЯ
       ===================================================== */

if (
    typeof updateConstellationLanguage === "function" &&
    document.querySelector(".constellation-card")
) {
    updateConstellationLanguage();
}


    /* =====================================================
       ❌ КНОПКИ ЗАКРЫТИЯ
       ===================================================== */

    document
        .querySelectorAll(".close-button")
        .forEach(button => {

            button.setAttribute(
                "aria-label",
                text.close
            );

        });


    /* =====================================================
       🪐 ОТКРЫТАЯ ПЛАНЕТА
       ===================================================== */

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

        if (
            name &&
            typeof fillPlanetModal === "function"
        ) {
            fillPlanetModal(name);
        }

    }


    /* =====================================================
       🌙 ОТКРЫТЫЙ СПУТНИК
       ===================================================== */

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

        if (
            name &&
            typeof showMoon === "function"
        ) {
            showMoon(name);
        }

    }


    /* =====================================================
       🌐 ЗАКРЫВАЕМ МЕНЮ
       ===================================================== */

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



// 💀 Окно «Новые дополнения»

function openUpdatesModal() {
    const modal = document.getElementById("updatesModal");

    if (modal) {
        modal.style.display = "flex";
    }
}

function closeUpdatesModal() {
    const modal = document.getElementById("updatesModal");

    if (modal) {
        modal.style.display = "none";
    }
}

// Закрытие окна при клике по затемнённому фону
document.addEventListener("click", function (event) {
    const modal = document.getElementById("updatesModal");

    if (event.target === modal) {
        closeUpdatesModal();
    }
});
// ======================================================
// 🚀 СИСТЕМА КАРТОЧЕК ПЛАНЕТ И СПУТНИКОВ
// ======================================================

function getCurrentLanguageData(data) {
    if (!data) return null;

    return (
        data[currentLanguage] ||
        data.ru ||
        Object.values(data).find(
            value =>
                value &&
                typeof value === "object" &&
                value.name
        ) ||
        null
    );
}


// ======================================================
// 🪐 ОТКРЫТИЕ ПЛАНЕТЫ
// ======================================================

function showPlanet(name) {

    const planet = planets[name];

    if (!planet) {
        console.error("Планета не найдена:", name);
        return;
    }

    const data = getCurrentLanguageData(planet);

    if (!data) {
        console.error("Нет данных для планеты:", name);
        return;
    }

    const modal = document.getElementById("planetModal");

    if (!modal) {
        console.error("Не найдено окно planetModal");
        return;
    }

    document.getElementById("planetIcon").textContent =
        planet.icon || "🪐";

    document.getElementById("planetName").textContent =
        data.name || name;

    document.getElementById("planetDescription").textContent =
        data.description || "";

    document.getElementById("planetTemperature").textContent =
        data.temperature || "—";

    document.getElementById("planetDiameter").textContent =
        data.diameter || "—";

    document.getElementById("planetMass").textContent =
        data.mass || "—";

    document.getElementById("planetDistance").textContent =
        data.distance || "—";

    document.getElementById("planetDay").textContent =
        data.day || "—";

    document.getElementById("planetYear").textContent =
        data.year || "—";

    document.getElementById("planetMoons").textContent =
        data.moons || "—";

    document.getElementById("planetRings").textContent =
        data.rings || "—";

    document.getElementById("planetAtmosphere").textContent =
        data.atmosphere || "—";

    document.getElementById("planetFact").textContent =
        data.fact || "";

    modal.classList.add("active");
    modal.style.display = "flex";

    document.body.classList.add("modal-open");

    // Запоминаем открытую планету
    window.currentOpenPlanet = name;
}


// ======================================================
// 🌙 ОТКРЫТИЕ СПУТНИКА
// ======================================================

function showMoon(name) {

    const moon = moons[name];

    if (!moon) {
        console.error("Спутник не найден:", name);
        return;
    }

    const data = getCurrentLanguageData(moon);

    if (!data) {
        console.error("Нет данных для спутника:", name);
        return;
    }

    const modal = document.getElementById("moonModal");

    if (!modal) {
        console.error("Не найдено окно moonModal");
        return;
    }

    document.getElementById("moonIcon").textContent =
        moon.icon || "🌕";

    document.getElementById("moonName").textContent =
        data.name || name;

    document.getElementById("moonDescription").textContent =
        data.description || "";

    document.getElementById("moonPlanet").textContent =
        data.planet || "—";

    document.getElementById("moonDiameter").textContent =
        data.diameter || "—";

    document.getElementById("moonTemperature").textContent =
        data.temperature || "—";

    document.getElementById("moonFact").textContent =
        data.fact || "";

    modal.classList.add("active");
    modal.style.display = "flex";

    document.body.classList.add("modal-open");

    // Запоминаем открытый спутник
    window.currentOpenMoon = name;
}


// ======================================================
// ✕ ЗАКРЫТИЕ ПЛАНЕТЫ
// ======================================================

function closePlanet() {

    const modal = document.getElementById("planetModal");

    if (modal) {
        modal.classList.remove("active");
        modal.style.display = "none";
    }

    window.currentOpenPlanet = null;

    document.body.classList.remove("modal-open");
}


// ======================================================
// ✕ ЗАКРЫТИЕ СПУТНИКА
// ======================================================

function closeMoon() {

    const modal = document.getElementById("moonModal");

    if (modal) {
        modal.classList.remove("active");
        modal.style.display = "none";
    }

    window.currentOpenMoon = null;

    document.body.classList.remove("modal-open");
}


// ======================================================
// 🌍 ПЕРЕВОД КАРТОЧЕК ПЛАНЕТ
// ======================================================

function updatePlanetCards() {

    document.querySelectorAll(".planet-card").forEach(card => {

        const name = card.dataset.planet;

        if (!name || !planets[name]) return;

        const data = getCurrentLanguageData(planets[name]);

        if (!data) return;

        const title = card.querySelector("h3");
        const description = card.querySelector("p");

        if (title) {
            title.textContent = data.name || name;
        }

        if (description) {
            description.textContent =
                data.description || "";
        }
    });
}


// ======================================================
// 🌙 ПЕРЕВОД КАРТОЧЕК СПУТНИКОВ
// ======================================================

// ======================================================
// 🌙 ПЕРЕВОД КАРТОЧЕК СПУТНИКОВ
// ======================================================




// ======================================================
// 🌐 ОБНОВЛЕНИЕ ОТКРЫТОГО ОКНА ПРИ СМЕНЕ ЯЗЫКА
// ======================================================

function refreshOpenModalLanguage() {

    if (window.currentOpenPlanet) {
        showPlanet(window.currentOpenPlanet);
    }

    if (window.currentOpenMoon) {
        showMoon(window.currentOpenMoon);
    }
}


// ======================================================
// 🌌 ОБЩЕЕ ОБНОВЛЕНИЕ
// ======================================================

function refreshCardsLanguage() {

    updatePlanetCards();
    updateMoonCards();
    refreshOpenModalLanguage();
}


// ======================================================
// 🚀 ЗАПУСК
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    updatePlanetCards();
    updateMoonCards();

});


// ======================================================
// 🌠 ЗАКРЫТИЕ ПО КЛИКУ ВНЕ ОКНА
// ======================================================

document.addEventListener("click", event => {

    const planetModal =
        document.getElementById("planetModal");

    const moonModal =
        document.getElementById("moonModal");

    if (
        planetModal &&
        event.target === planetModal
    ) {
        closePlanet();
    }

    if (
        moonModal &&
        event.target === moonModal
    ) {
        closeMoon();
    }

});


// ======================================================
// ⌨️ ЗАКРЫТИЕ ПО ESC
// ======================================================

document.addEventListener("keydown", event => {

    if (event.key !== "Escape") return;

    closePlanet();
    closeMoon();

});
