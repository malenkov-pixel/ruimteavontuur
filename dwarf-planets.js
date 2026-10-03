/* =========================================
   КАРЛИКОВЫЕ ПЛАНЕТЫ
========================================= */

let currentLanguage =
    localStorage.getItem("siteLanguage") || "ru";

let currentDwarfPlanet = null;


/* =========================================
   ПЕРЕВОДЫ
========================================= */

const dwarfTranslations = {

    ru: {

        name: "Русский",

        title: "🪐 Карликовые планеты",

        subtitle:
            "Маленькие миры Солнечной системы.",

        back:
            "← Космическое приключение",

        sectionTitle:
            "🌌 Известные карликовые планеты",

        sectionDescription:
            "Исследуй необычные миры Солнечной системы.",

        explore:
            "🔭 Исследовать",

        close:
            "Закрыть",

        footer:
            "🌌 Космическое приключение имени Папайруса © 2026",

        planets: {

            "Плутон": {
                name: "Плутон",
                short:
                    "Известный карликовый мир на окраине Солнечной системы.",
                description:
                    "Плутон находится в поясе Койпера за орбитой Нептуна. Он состоит из смеси каменных материалов и льдов. На его поверхности обнаружены азотный, метановый и водяной лёд. У Плутона есть пять известных спутников, крупнейший из которых — Харон.",
                image:
                    "images/pluto.jpg",
                symbol: "♇"
            },

            "Церера": {
                name: "Церера",
                short:
                    "Крупнейший объект главного пояса астероидов.",
                description:
                    "Церера находится в главном поясе астероидов между орбитами Марса и Юпитера. Это единственная официально признанная карликовая планета во внутренней части Солнечной системы. Церера богата каменистым материалом и льдом.",
                image:
                    "images/ceres.jpg",
                symbol: "⚳"
            },

            "Хаумеа": {
                name: "Хаумеа",
                short:
                    "Быстро вращающийся ледяной мир пояса Койпера.",
                description:
                    "Хаумеа находится в поясе Койпера за орбитой Нептуна. Она необычно быстро вращается, из-за чего имеет вытянутую форму. У Хаумеа есть два известных спутника и собственная система колец.",
                image:
                    "images/haumea.jpg",
                symbol: "🪐"
            },

            "Макемаке": {
                name: "Макемаке",
                short:
                    "Холодный ледяной мир за орбитой Нептуна.",
                description:
                    "Макемаке — крупный объект пояса Койпера, расположенный далеко за орбитой Нептуна. Его поверхность покрыта большим количеством замёрзших летучих веществ, включая метан. У Макемаке известен один спутник.",
                image:
                    "images/makemake.jpg",
                symbol: "🪐"
            },

            "Эрида": {
                name: "Эрида",
                short:
                    "Очень далёкий карликовый мир рассеянного диска.",
                description:
                    "Эрида находится в очень далёкой области Солнечной системы, связанной с рассеянным диском. По размеру она близка к Плутону. У Эриды есть известный спутник Дисномия.",
                image:
                    "images/eris.jpg",
                symbol: "🪐"
            }

        }

    },


    kk: {

        name: "Қазақша",

        title:
            "🪐 Ергежейлі планеталар",

        subtitle:
            "Күн жүйесінің шағын әлемдері.",

        back:
            "← Ғарыштық саяхат",

        sectionTitle:
            "🌌 Белгілі ергежейлі планеталар",

        sectionDescription:
            "Күн жүйесінің ерекше әлемдерін зертте.",

        explore:
            "🔭 Зерттеу",

        close:
            "Жабу",

        footer:
            "🌌 Папайрустың ғарыштық саяхаты © 2026",

        planets: {

            "Плутон": {
                name: "Плутон",
                short:
                    "Күн жүйесінің шетіндегі әйгілі ергежейлі әлем.",
                description:
                    "Плутон Нептун орбитасының ар жағындағы Койпер белдеуінде орналасқан. Ол тас материалдар мен мұздардың қоспасынан тұрады. Оның бетінде азот, метан және су мұзы бар. Плутонның бес белгілі серігі бар, олардың ең үлкені — Харон.",
                image:
                    "images/pluto.jpg",
                symbol: "♇"
            },

            "Церера": {
                name: "Церера",
                short:
                    "Астероидтардың негізгі белдеуіндегі ең ірі дене.",
                description:
                    "Церера Марс пен Юпитер орбиталарының арасындағы негізгі астероид белдеуінде орналасқан. Ол Күн жүйесінің ішкі бөлігіндегі ресми түрде танылған жалғыз ергежейлі планета. Церера тас материалдар мен мұзға бай.",
                image:
                    "images/ceres.jpg",
                symbol: "⚳"
            },

            "Хаумеа": {
                name: "Хаумеа",
                short:
                    "Койпер белдеуіндегі жылдам айналатын мұзды әлем.",
                description:
                    "Хаумеа Нептун орбитасының ар жағындағы Койпер белдеуінде орналасқан. Ол өте жылдам айналатындықтан, пішіні созылыңқы. Хаумеаның екі белгілі серігі және сақина жүйесі бар.",
                image:
                    "images/haumea.jpg",
                symbol: "🪐"
            },

            "Макемаке": {
                name: "Макемаке",
                short:
                    "Нептун орбитасының ар жағындағы суық мұзды әлем.",
                description:
                    "Макемаке — Нептуннан өте алыс орналасқан Койпер белдеуінің ірі денелерінің бірі. Оның бетінде метанды қоса алғанда, қатқан ұшқыш заттар көп. Макемакенің бір белгілі серігі бар.",
                image:
                    "images/makemake.jpg",
                symbol: "🪐"
            },

            "Эрида": {
                name: "Эрида",
                short:
                    "Шашыраңқы дискідегі өте алыс ергежейлі әлем.",
                description:
                    "Эрида Күн жүйесінің шашыраңқы дискімен байланысты өте алыс аймағында орналасқан. Оның өлшемі Плутонға жақын. Эриданың Дисномия атты белгілі серігі бар.",
                image:
                    "images/eris.jpg",
                symbol: "🪐"
            }

        }

    },


    cs: {

        name: "Čeština",

        title:
            "🪐 Trpasličí planety",

        subtitle:
            "Malé světy Sluneční soustavy.",

        back:
            "← Vesmírné dobrodružství",

        sectionTitle:
            "🌌 Známé trpasličí planety",

        sectionDescription:
            "Prozkoumej neobvyklé světy Sluneční soustavy.",

        explore:
            "🔭 Prozkoumat",

        close:
            "Zavřít",

        footer:
            "🌌 Vesmírné dobrodružství Papyruse © 2026",

        planets: {

            "Плутон": {
                name: "Pluto",
                short:
                    "Známý trpasličí svět na okraji Sluneční soustavy.",
                description:
                    "Pluto se nachází v Kuiperově pásu za oběžnou dráhou Neptunu. Skládá se ze směsi hornin a ledu. Na jeho povrchu se nachází dusíkový, metanový a vodní led. Pluto má pět známých měsíců, z nichž největší je Charon.",
                image:
                    "images/pluto.jpg",
                symbol: "♇"
            },

            "Церера": {
                name: "Ceres",
                short:
                    "Největší těleso hlavního pásu asteroidů.",
                description:
                    "Ceres se nachází v hlavním pásu asteroidů mezi oběžnými drahami Marsu a Jupiteru. Je jedinou oficiálně uznávanou trpasličí planetou ve vnitřní části Sluneční soustavy. Obsahuje horniny a led.",
                image:
                    "images/ceres.jpg",
                symbol: "⚳"
            },

            "Хаумеа": {
                name: "Haumea",
                short:
                    "Rychle rotující ledový svět Kuiperova pásu.",
                description:
                    "Haumea se nachází v Kuiperově pásu za Neptunem. Rotuje neobvykle rychle, a proto má protáhlý tvar. Má dva známé měsíce a vlastní prstencový systém.",
                image:
                    "images/haumea.jpg",
                symbol: "🪐"
            },

            "Макемаке": {
                name: "Makemake",
                short:
                    "Chladný ledový svět za oběžnou dráhou Neptunu.",
                description:
                    "Makemake je velké těleso Kuiperova pásu, které se nachází daleko za Neptunem. Jeho povrch obsahuje velké množství zmrzlých těkavých látek včetně metanu. Má jeden známý měsíc.",
                image:
                    "images/makemake.jpg",
                symbol: "🪐"
            },

            "Эрида": {
                name: "Eris",
                short:
                    "Velmi vzdálený trpasličí svět rozptýleného disku.",
                description:
                    "Eris se nachází ve velmi vzdálené oblasti Sluneční soustavy spojené s rozptýleným diskem. Její velikost je podobná Plutu. Eris má známý měsíc Dysnomia.",
                image:
                    "images/eris.jpg",
                symbol: "🪐"
            }

        }

    },


    en: {

        name: "English",

        title:
            "🪐 Dwarf Planets",

        subtitle:
            "Small worlds of the Solar System.",

        back:
            "← Space Adventure",

        sectionTitle:
            "🌌 Known Dwarf Planets",

        sectionDescription:
            "Explore unusual worlds of the Solar System.",

        explore:
            "🔭 Explore",

        close:
            "Close",

        footer:
            "🌌 Papyrus's Space Adventure © 2026",

        planets: {

            "Плутон": {
                name: "Pluto",
                short:
                    "A famous dwarf world at the edge of the Solar System.",
                description:
                    "Pluto is located in the Kuiper Belt beyond Neptune's orbit. It is made of a mixture of rock and ice. Its surface contains nitrogen, methane and water ice. Pluto has five known moons, the largest of which is Charon.",
                image:
                    "images/pluto.jpg",
                symbol: "♇"
            },

            "Церера": {
                name: "Ceres",
                short:
                    "The largest object in the main asteroid belt.",
                description:
                    "Ceres is located in the main asteroid belt between the orbits of Mars and Jupiter. It is the only officially recognized dwarf planet in the inner Solar System. Ceres contains rocky material and ice.",
                image:
                    "images/ceres.jpg",
                symbol: "⚳"
            },

            "Хаумеа": {
                name: "Haumea",
                short:
                    "A rapidly rotating icy world in the Kuiper Belt.",
                description:
                    "Haumea is located in the Kuiper Belt beyond Neptune. It rotates unusually fast, giving it an elongated shape. Haumea has two known moons and a ring system.",
                image:
                    "images/haumea.jpg",
                symbol: "🪐"
            },

            "Макемаке": {
                name: "Makemake",
                short:
                    "A cold icy world beyond Neptune's orbit.",
                description:
                    "Makemake is a large Kuiper Belt object located far beyond Neptune. Its surface contains large amounts of frozen volatile materials, including methane. Makemake has one known moon.",
                image:
                    "images/makemake.jpg",
                symbol: "🪐"
            },

            "Эрида": {
                name: "Eris",
                short:
                    "A very distant dwarf world of the scattered disk.",
                description:
                    "Eris is located in a very distant region of the Solar System associated with the scattered disk. It is similar in size to Pluto. Eris has one known moon, Dysnomia.",
                image:
                    "images/eris.jpg",
                symbol: "🪐"
            }

        }

    },


    de: {

        name: "Deutsch",

        title:
            "🪐 Zwergplaneten",

        subtitle:
            "Kleine Welten des Sonnensystems.",

        back:
            "← Weltraumabenteuer",

        sectionTitle:
            "🌌 Bekannte Zwergplaneten",

        sectionDescription:
            "Erkunde ungewöhnliche Welten des Sonnensystems.",

        explore:
            "🔭 Erkunden",

        close:
            "Schließen",

        footer:
            "🌌 Papyrus' Weltraumabenteuer © 2026",

        planets: {

            "Плутон": {
                name: "Pluto",
                short:
                    "Eine bekannte Zwergwelt am Rand des Sonnensystems.",
                description:
                    "Pluto befindet sich im Kuipergürtel jenseits der Neptunbahn. Er besteht aus einer Mischung aus Gestein und Eis. Auf seiner Oberfläche gibt es Stickstoff-, Methan- und Wassereis. Pluto besitzt fünf bekannte Monde, von denen Charon der größte ist.",
                image:
                    "images/pluto.jpg",
                symbol: "♇"
            },

            "Церера": {
                name: "Ceres",
                short:
                    "Das größte Objekt des Hauptasteroidengürtels.",
                description:
                    "Ceres befindet sich im Hauptasteroidengürtel zwischen den Umlaufbahnen von Mars und Jupiter. Sie ist der einzige offiziell anerkannte Zwergplanet im inneren Sonnensystem. Ceres enthält Gestein und Eis.",
                image:
                    "images/ceres.jpg",
                symbol: "⚳"
            },

            "Хаумеа": {
                name: "Haumea",
                short:
                    "Eine schnell rotierende Eiswelt im Kuipergürtel.",
                description:
                    "Haumea befindet sich im Kuipergürtel jenseits der Neptunbahn. Sie rotiert ungewöhnlich schnell und besitzt deshalb eine längliche Form. Haumea hat zwei bekannte Monde und ein Ringsystem.",
                image:
                    "images/haumea.jpg",
                symbol: "🪐"
            },

            "Макемаке": {
                name: "Makemake",
                short:
                    "Eine kalte Eiswelt jenseits der Neptunbahn.",
                description:
                    "Makemake ist ein großes Objekt des Kuipergürtels weit jenseits von Neptun. Seine Oberfläche enthält große Mengen gefrorener flüchtiger Stoffe, darunter Methan. Makemake besitzt einen bekannten Mond.",
                image:
                    "images/makemake.jpg",
                symbol: "🪐"
            },

            "Эрида": {
                name: "Eris",
                short:
                    "Eine sehr weit entfernte Zwergwelt der Streuscheibe.",
                description:
                    "Eris befindet sich in einer sehr weit entfernten Region des Sonnensystems, die mit der Streuscheibe verbunden ist. Ihre Größe ähnelt der von Pluto. Eris besitzt den bekannten Mond Dysnomia.",
                image:
                    "images/eris.jpg",
                symbol: "🪐"
            }

        }

    },


    fr: {

        name: "Français",

        title:
            "🪐 Planètes naines",

        subtitle:
            "Les petits mondes du Système solaire.",

        back:
            "← Aventure spatiale",

        sectionTitle:
            "🌌 Planètes naines connues",

        sectionDescription:
            "Explore les mondes inhabituels du Système solaire.",

        explore:
            "🔭 Explorer",

        close:
            "Fermer",

        footer:
            "🌌 Aventure spatiale de Papyrus © 2026",

        planets: {

            "Плутон": {
                name: "Pluton",
                short:
                    "Un monde nain célèbre aux confins du Système solaire.",
                description:
                    "Pluton se trouve dans la ceinture de Kuiper au-delà de l'orbite de Neptune. Il est composé d'un mélange de roches et de glaces. Sa surface contient de la glace d'azote, de méthane et d'eau. Pluton possède cinq lunes connues, dont la plus grande est Charon.",
                image:
                    "images/pluto.jpg",
                symbol: "♇"
            },

            "Церера": {
                name: "Cérès",
                short:
                    "Le plus grand objet de la ceinture principale d'astéroïdes.",
                description:
                    "Cérès se trouve dans la ceinture principale d'astéroïdes entre les orbites de Mars et de Jupiter. C'est la seule planète naine officiellement reconnue dans la partie interne du Système solaire. Cérès contient des matériaux rocheux et de la glace.",
                image:
                    "images/ceres.jpg",
                symbol: "⚳"
            },

            "Хаумеа": {
                name: "Hauméa",
                short:
                    "Un monde glacé à rotation rapide de la ceinture de Kuiper.",
                description:
                    "Hauméa se trouve dans la ceinture de Kuiper au-delà de Neptune. Elle tourne très rapidement et possède donc une forme allongée. Hauméa possède deux lunes connues et un système d'anneaux.",
                image:
                    "images/haumea.jpg",
                symbol: "🪐"
            },

            "Макемаке": {
                name: "Makémaké",
                short:
                    "Un monde glacé et froid au-delà de Neptune.",
                description:
                    "Makémaké est un grand objet de la ceinture de Kuiper situé très loin au-delà de Neptune. Sa surface contient beaucoup de substances volatiles gelées, notamment du méthane. Makémaké possède une lune connue.",
                image:
                    "images/makemake.jpg",
                symbol: "🪐"
            },

            "Эрида": {
                name: "Éris",
                short:
                    "Un monde nain très éloigné du disque dispersé.",
                description:
                    "Éris se trouve dans une région très éloignée du Système solaire associée au disque dispersé. Sa taille est proche de celle de Pluton. Éris possède une lune connue, Dysnomie.",
                image:
                    "images/eris.jpg",
                symbol: "🪐"
            }

        }

    },


    es: {

        name: "Español",

        title:
            "🪐 Planetas enanos",

        subtitle:
            "Pequeños mundos del Sistema Solar.",

        back:
            "← Aventura espacial",

        sectionTitle:
            "🌌 Planetas enanos conocidos",

        sectionDescription:
            "Explora los mundos inusuales del Sistema Solar.",

        explore:
            "🔭 Explorar",

        close:
            "Cerrar",

        footer:
            "🌌 Aventura espacial de Papyrus © 2026",

        planets: {

            "Плутон": {
                name: "Plutón",
                short:
                    "Un famoso mundo enano en los límites del Sistema Solar.",
                description:
                    "Plutón se encuentra en el cinturón de Kuiper, más allá de la órbita de Neptuno. Está formado por una mezcla de roca y hielo. Su superficie contiene hielo de nitrógeno, metano y agua. Plutón tiene cinco lunas conocidas, y la mayor es Caronte.",
                image:
                    "images/pluto.jpg",
                symbol: "♇"
            },

            "Церера": {
                name: "Ceres",
                short:
                    "El objeto más grande del cinturón principal de asteroides.",
                description:
                    "Ceres se encuentra en el cinturón principal de asteroides, entre las órbitas de Marte y Júpiter. Es el único planeta enano reconocido oficialmente en la parte interior del Sistema Solar. Ceres contiene materiales rocosos y hielo.",
                image:
                    "images/ceres.jpg",
                symbol: "⚳"
            },

            "Хаумеа": {
                name: "Haumea",
                short:
                    "Un mundo helado de rotación rápida del cinturón de Kuiper.",
                description:
                    "Haumea se encuentra en el cinturón de Kuiper, más allá de Neptuno. Gira de forma muy rápida, por lo que tiene una forma alargada. Tiene dos lunas conocidas y un sistema de anillos.",
                image:
                    "images/haumea.jpg",
                symbol: "🪐"
            },

            "Макемаке": {
                name: "Makemake",
                short:
                    "Un mundo helado y frío más allá de Neptuno.",
                description:
                    "Makemake es un gran objeto del cinturón de Kuiper situado muy lejos de Neptuno. Su superficie contiene grandes cantidades de sustancias volátiles congeladas, incluido metano. Makemake tiene una luna conocida.",
                image:
                    "images/makemake.jpg",
                symbol: "🪐"
            },

            "Эрида": {
                name: "Eris",
                short:
                    "Un mundo enano muy lejano del disco disperso.",
                description:
                    "Eris se encuentra en una región muy distante del Sistema Solar asociada con el disco disperso. Su tamaño es similar al de Plutón. Eris tiene una luna conocida, Disnomia.",
                image:
                    "images/eris.jpg",
                symbol: "🪐"
            }

        }

    },


    it: {

        name: "Italiano",

        title:
            "🪐 Pianeti nani",

        subtitle:
            "Piccoli mondi del Sistema Solare.",

        back:
            "← Avventura spaziale",

        sectionTitle:
            "🌌 Pianeti nani conosciuti",

        sectionDescription:
            "Esplora i mondi insoliti del Sistema Solare.",

        explore:
            "🔭 Esplora",

        close:
            "Chiudi",

        footer:
            "🌌 Avventura spaziale di Papyrus © 2026",

        planets: {

            "Плутон": {
                name: "Plutone",
                short:
                    "Un famoso mondo nano ai confini del Sistema Solare.",
                description:
                    "Plutone si trova nella fascia di Kuiper oltre l'orbita di Nettuno. È composto da una miscela di roccia e ghiaccio. La sua superficie contiene ghiaccio di azoto, metano e acqua. Plutone ha cinque lune conosciute, la più grande delle quali è Caronte.",
                image:
                    "images/pluto.jpg",
                symbol: "♇"
            },

            "Церера": {
                name: "Cerere",
                short:
                    "Il più grande oggetto della fascia principale degli asteroidi.",
                description:
                    "Cerere si trova nella fascia principale degli asteroidi, tra le orbite di Marte e Giove. È l'unico pianeta nano ufficialmente riconosciuto nella parte interna del Sistema Solare. Cerere contiene materiale roccioso e ghiaccio.",
                image:
                    "images/ceres.jpg",
                symbol: "⚳"
            },

            "Хаумеа": {
                name: "Haumea",
                short:
                    "Un mondo ghiacciato a rotazione rapida della fascia di Kuiper.",
                description:
                    "Haumea si trova nella fascia di Kuiper oltre Nettuno. Ruota molto velocemente e per questo ha una forma allungata. Ha due lune conosciute e un sistema di anelli.",
                image:
                    "images/haumea.jpg",
                symbol: "🪐"
            },

            "Макемаке": {
                name: "Makemake",
                short:
                    "Un freddo mondo ghiacciato oltre Nettuno.",
                description:
                    "Makemake è un grande oggetto della fascia di Kuiper situato molto oltre Nettuno. La sua superficie contiene grandi quantità di sostanze volatili congelate, tra cui il metano. Makemake ha una luna conosciuta.",
                image:
                    "images/makemake.jpg",
                symbol: "🪐"
            },

            "Эрида": {
                name: "Eris",
                short:
                    "Un mondo nano molto lontano del disco diffuso.",
                description:
                    "Eris si trova in una regione molto lontana del Sistema Solare associata al disco diffuso. Le sue dimensioni sono simili a quelle di Plutone. Eris ha una luna conosciuta, Disnomia.",
                image:
                    "images/eris.jpg",
                symbol: "🪐"
            }

        }

    }

};


/* =========================================
   ПЕРЕВОД НАЗВАНИЙ
========================================= */

function getPlanetData(originalName) {

    const language =
        dwarfTranslations[currentLanguage] ||
        dwarfTranslations.ru;

    return (
        language.planets[originalName] ||
        dwarfTranslations.ru.planets[originalName]
    );
}


/* =========================================
   ОБНОВЛЕНИЕ СТРАНИЦЫ
========================================= */

function updatePage() {

    const language =
        dwarfTranslations[currentLanguage] ||
        dwarfTranslations.ru;


    document.documentElement.lang =
        currentLanguage;


    const title =
        document.getElementById("pageTitle");

    const subtitle =
        document.getElementById("pageSubtitle");

    const back =
        document.getElementById("backLink");

    const sectionTitle =
        document.getElementById("sectionTitle");

    const sectionDescription =
        document.getElementById("sectionDescription");

    const footer =
        document.getElementById("footerText");

    const currentLanguageName =
        document.getElementById(
            "currentLanguageName"
        );


    if (title) {
        title.textContent =
            language.title;
    }

    if (subtitle) {
        subtitle.textContent =
            language.subtitle;
    }

    if (back) {
        back.textContent =
            language.back;
    }

    if (sectionTitle) {
        sectionTitle.textContent =
            language.sectionTitle;
    }

    if (sectionDescription) {
        sectionDescription.textContent =
            language.sectionDescription;
    }

    if (footer) {
        footer.textContent =
            language.footer;
    }

    if (currentLanguageName) {
        currentLanguageName.textContent =
            language.name;
    }


    const planets =
        [
            "Плутон",
            "Церера",
            "Хаумеа",
            "Макемаке",
            "Эрида"
        ];


    planets.forEach(
        originalName => {

            const data =
                getPlanetData(originalName);

            if (!data) {
                return;
            }


            const card =
                document.querySelector(
                    `[data-planet="${originalName}"]`
                );

            if (!card) {
                return;
            }


            const cardContainer =
                card.closest(".dwarf-card");


            const heading =
                cardContainer
                    ?.querySelector("h3");


            const paragraph =
                cardContainer
                    ?.querySelector("p");


            const button =
                cardContainer
                    ?.querySelector(".explore-button");


            if (heading) {
                heading.textContent =
                    data.name;
            }

            if (paragraph) {
                paragraph.textContent =
                    data.short;
            }

            if (button) {
                button.textContent =
                    language.explore;
            }

        }
    );


    updateModalLanguage();
}


/* =========================================
   МОДАЛЬНОЕ ОКНО
========================================= */

function openDwarfModal(originalName) {

    currentDwarfPlanet =
        originalName;


    const data =
        getPlanetData(originalName);


    const modal =
        document.getElementById("dwarfModal");

    const image =
        document.getElementById("modalImage");

    const title =
        document.getElementById("modalTitle");

    const description =
        document.getElementById("modalDescription");

    const symbol =
        document.getElementById("modalSymbol");


    if (!data || !modal) {
        return;
    }


    if (image) {

        image.src =
            data.image;

        image.alt =
            data.name;
    }


    if (title) {
        title.textContent =
            data.name;
    }


    if (description) {
        description.textContent =
            data.description;
    }


    if (symbol) {
        symbol.textContent =
            data.symbol;
    }


    modal.classList.add("open");

    document.body.style.overflow =
        "hidden";
}


/* =========================================
   ОБНОВЛЕНИЕ ОТКРЫТОГО ОКНА
========================================= */

function updateModalLanguage() {

    if (!currentDwarfPlanet) {
        return;
    }


    const modal =
        document.getElementById("dwarfModal");


    if (!modal ||
        !modal.classList.contains("open")) {

        return;
    }


    const data =
        getPlanetData(currentDwarfPlanet);


    if (!data) {
        return;
    }


    const image =
        document.getElementById("modalImage");

    const title =
        document.getElementById("modalTitle");

    const description =
        document.getElementById("modalDescription");

    const symbol =
        document.getElementById("modalSymbol");


    if (image) {
        image.src =
            data.image;

        image.alt =
            data.name;
    }

    if (title) {
        title.textContent =
            data.name;
    }

    if (description) {
        description.textContent =
            data.description;
    }

    if (symbol) {
        symbol.textContent =
            data.symbol;
    }

}


/* =========================================
   ЗАКРЫТИЕ
========================================= */

function closeDwarfModal() {

    const modal =
        document.getElementById("dwarfModal");


    if (modal) {
        modal.classList.remove("open");
    }


    document.body.style.overflow =
        "";


    currentDwarfPlanet =
        null;
}


/* =========================================
   ЯЗЫК
========================================= */

function changeLanguage(language) {

    if (!dwarfTranslations[language]) {
        return;
    }


    currentLanguage =
        language;


    localStorage.setItem(
        "siteLanguage",
        language
    );


    updatePage();


    const dropdown =
        document.getElementById(
            "languageDropdown"
        );


    if (dropdown) {
        dropdown.classList.remove("open");
    }
}


/* =========================================
   МЕНЮ ЯЗЫКОВ
========================================= */

function toggleLanguageMenu() {

    const dropdown =
        document.getElementById(
            "languageDropdown"
        );


    if (dropdown) {
        dropdown.classList.toggle("open");
    }

}


/* =========================================
   ЗАКРЫТИЕ МЕНЮ ПРИ КЛИКЕ СНАРУЖИ
========================================= */

document.addEventListener(
    "click",
    function (event) {

        const menu =
            document.querySelector(
                ".language-menu"
            );

        const dropdown =
            document.getElementById(
                "languageDropdown"
            );


        if (!menu || !dropdown) {
            return;
        }


        if (!menu.contains(event.target)) {

            dropdown.classList.remove(
                "open"
            );

        }

    }
);


/* =========================================
   ЗАКРЫТИЕ MODAL
========================================= */

document.addEventListener(
    "click",
    function (event) {

        const modal =
            document.getElementById(
                "dwarfModal"
            );


        if (
            modal &&
            event.target === modal
        ) {

            closeDwarfModal();

        }

    }
);


/* =========================================
   ESC
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeDwarfModal();

        }

    }
);


/* =========================================
   ЗАПУСК
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (
            !dwarfTranslations[
                currentLanguage
            ]
        ) {

            currentLanguage =
                "ru";

        }


        updatePage();

    }
);