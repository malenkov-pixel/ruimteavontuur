let currentLanguage =
    localStorage.getItem("siteLanguage") || "ru";


const languageInfo = {

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


const translations = {

    ru: {

        title: "Космические объекты",

        subtitle:
            "Исследуй удивительные объекты Вселенной",

        introTitle:
            "🔭 Что скрывается в космосе?",

        introText:
            "Вселенная наполнена удивительными объектами — от огромных звёзд и туманностей до астероидов, комет и чёрных дыр.",

        back:
            "← Вернуться в космическое приключение",

        fact:
            "🔭 Интересный факт",

        footer:
            "🌌 Космическое приключение имени Папайруса © 2026"

    },


    kk: {

        title: "Ғарыш нысандары",

        subtitle:
            "Ғаламның таңғажайып нысандарын зертте",

        introTitle:
            "🔭 Ғарышта не бар?",

        introText:
            "Ғалам жұлдыздар, тұмандықтар, астероидтар, кометалар және қара құрдымдар сияқты таңғажайып нысандарға толы.",

        back:
            "← Ғарыштық саяхатқа оралу",

        fact:
            "🔭 Қызықты факт",

        footer:
            "🌌 Папирустың ғарыштық саяхаты © 2026"

    },


    cs: {

        title: "Vesmírné objekty",

        subtitle:
            "Prozkoumej úžasné objekty vesmíru",

        introTitle:
            "🔭 Co se skrývá ve vesmíru?",

        introText:
            "Vesmír je plný úžasných objektů — od obrovských hvězd a mlhovin až po asteroidy, komety a černé díry.",

        back:
            "← Zpět k vesmírnému dobrodružství",

        fact:
            "🔭 Zajímavost",

        footer:
            "🌌 Papyrusovo vesmírné dobrodružství © 2026"

    },


    en: {

        title: "Space Objects",

        subtitle:
            "Explore the amazing objects of the Universe",

        introTitle:
            "🔭 What is hidden in space?",

        introText:
            "The Universe is filled with amazing objects — from enormous stars and nebulae to asteroids, comets and black holes.",

        back:
            "← Back to the Space Adventure",

        fact:
            "🔭 Interesting fact",

        footer:
            "🌌 Papyrus Space Adventure © 2026"

    },


    de: {

        title: "Himmelsobjekte",

        subtitle:
            "Entdecke die erstaunlichen Objekte des Universums",

        introTitle:
            "🔭 Was verbirgt sich im Weltraum?",

        introText:
            "Das Universum ist voller erstaunlicher Objekte — von riesigen Sternen und Nebeln bis hin zu Asteroiden, Kometen und Schwarzen Löchern.",

        back:
            "← Zurück zum Weltraumabenteuer",

        fact:
            "🔭 Interessanter Fakt",

        footer:
            "🌌 Papyrus' Weltraumabenteuer © 2026"

    },


    fr: {

        title: "Objets cosmiques",

        subtitle:
            "Explore les objets fascinants de l'Univers",

        introTitle:
            "🔭 Que se cache-t-il dans l'espace ?",

        introText:
            "L'Univers est rempli d'objets fascinants — des étoiles gigantesques et des nébuleuses aux astéroïdes, comètes et trous noirs.",

        back:
            "← Retour à l'aventure spatiale",

        fact:
            "🔭 Fait intéressant",

        footer:
            "🌌 L'aventure spatiale de Papyrus © 2026"

    },


    es: {

        title: "Objetos espaciales",

        subtitle:
            "Explora los increíbles objetos del Universo",

        introTitle:
            "🔭 ¿Qué se esconde en el espacio?",

        introText:
            "El Universo está lleno de objetos increíbles — desde enormes estrellas y nebulosas hasta asteroides, cometas y agujeros negros.",

        back:
            "← Volver a la aventura espacial",

        fact:
            "🔭 Dato interesante",

        footer:
            "🌌 Aventura espacial de Papyrus © 2026"

    },


    it: {

        title: "Oggetti spaziali",

        subtitle:
            "Esplora gli incredibili oggetti dell'Universo",

        introTitle:
            "🔭 Cosa si nasconde nello spazio?",

        introText:
            "L'Universo è pieno di oggetti incredibili — dalle enormi stelle e nebulose agli asteroidi, alle comete e ai buchi neri.",

        back:
            "← Torna all'avventura spaziale",

        fact:
            "🔭 Curiosità",

        footer:
            "🌌 Avventura spaziale di Papyrus © 2026"

    }

};


const objects = {

    comet: {

        icon: "☄️",

        ru: {
            title: "Комета",
            description:
                "Комета — небольшое космическое тело, состоящее в основном из льда, пыли и каменных частиц.",
            fact:
                "Когда комета приближается к Солнцу, её лёд нагревается и вокруг ядра появляется кома и хвост."
        },

        kk: {
            title: "Комета",
            description:
                "Комета — негізінен мұздан, шаңнан және тасты бөлшектерден тұратын шағын ғарыш нысаны.",
            fact:
                "Комета Күнге жақындағанда оның мұзы қызады да, кома мен құйрық пайда болады."
        },

        cs: {
            title: "Kometa",
            description:
                "Kometa je malé vesmírné těleso složené především z ledu, prachu a kamenných částic.",
            fact:
                "Když se kometa přiblíží ke Slunci, její led se zahřívá a vytváří komu a ohon."
        },

        en: {
            title: "Comet",
            description:
                "A comet is a small space body made mainly of ice, dust and rocky particles.",
            fact:
                "When a comet approaches the Sun, its ice heats up and a coma and tail can appear."
        },

        de: {
            title: "Komet",
            description:
                "Ein Komet ist ein kleines Himmelsobjekt, das hauptsächlich aus Eis, Staub und Gestein besteht.",
            fact:
                "Wenn sich ein Komet der Sonne nähert, erwärmt sich sein Eis und ein Schweif kann entstehen."
        },

        fr: {
            title: "Comète",
            description:
                "Une comète est un petit corps céleste composé principalement de glace, de poussière et de roches.",
            fact:
                "Lorsqu'une comète s'approche du Soleil, sa glace se réchauffe et une queue peut apparaître."
        },

        es: {
            title: "Cometa",
            description:
                "Un cometa es un pequeño cuerpo espacial formado principalmente por hielo, polvo y partículas rocosas.",
            fact:
                "Cuando un cometa se acerca al Sol, su hielo se calienta y puede aparecer una cola."
        },

        it: {
            title: "Cometa",
            description:
                "Una cometa è un piccolo corpo celeste composto principalmente da ghiaccio, polvere e rocce.",
            fact:
                "Quando una cometa si avvicina al Sole, il ghiaccio si riscalda e può comparire una coda."
        }

    },


    asteroid: {

        icon: "🪨",

        ru: {
            title: "Астероид",
            description:
                "Астероид — каменное или металлическое тело, обращающееся вокруг Солнца.",
            fact:
                "Большинство известных астероидов Солнечной системы находится в главном поясе астероидов между Марсом и Юпитером."
        },

        kk: {
            title: "Астероид",
            description:
                "Астероид — Күнді айналып қозғалатын тасты немесе металды дене.",
            fact:
                "Көптеген астероидтар Марс пен Юпитер арасындағы негізгі астероидтар белдеуінде орналасқан."
        },

        cs: {
            title: "Asteroid",
            description:
                "Asteroid je kamenné nebo kovové těleso obíhající kolem Slunce.",
            fact:
                "Mnoho známých asteroidů se nachází v hlavním pásu mezi Marsem a Jupiterem."
        },

        en: {
            title: "Asteroid",
            description:
                "An asteroid is a rocky or metallic body orbiting the Sun.",
            fact:
                "Many known asteroids are located in the main asteroid belt between Mars and Jupiter."
        },

        de: {
            title: "Asteroid",
            description:
                "Ein Asteroid ist ein felsiger oder metallischer Körper, der die Sonne umkreist.",
            fact:
                "Viele bekannte Asteroiden befinden sich im Hauptasteroidengürtel zwischen Mars und Jupiter."
        },

        fr: {
            title: "Astéroïde",
            description:
                "Un astéroïde est un corps rocheux ou métallique qui orbite autour du Soleil.",
            fact:
                "De nombreux astéroïdes connus se trouvent dans la ceinture principale entre Mars et Jupiter."
        },

        es: {
            title: "Asteroide",
            description:
                "Un asteroide es un cuerpo rocoso o metálico que orbita alrededor del Sol.",
            fact:
                "Muchos asteroides conocidos se encuentran en el cinturón principal entre Marte y Júpiter."
        },

        it: {
            title: "Asteroide",
            description:
                "Un asteroide è un corpo roccioso o metallico che orbita intorno al Sole.",
            fact:
                "Molti asteroidi conosciuti si trovano nella fascia principale tra Marte e Giove."
        }

    },


    meteor: {

        icon: "🌠",

        ru: {
            title: "Метеор",
            description:
                "Метеор — световое явление, возникающее, когда космическое тело входит в атмосферу.",
            fact:
                "Яркие метеоры иногда называют болидами."
        },

        kk: {
            title: "Метеор",
            description:
                "Метеор — ғарыштық дене атмосфераға кірген кезде пайда болатын жарық құбылысы.",
            fact:
                "Өте жарық метеорлар кейде болидтер деп аталады."
        },

        cs: {
            title: "Meteor",
            description:
                "Meteor je světelný jev vznikající při vstupu kosmického tělesa do atmosféry.",
            fact:
                "Velmi jasné meteory se někdy nazývají bolidy."
        },

        en: {
            title: "Meteor",
            description:
                "A meteor is a streak of light produced when a space body enters an atmosphere.",
            fact:
                "Very bright meteors are sometimes called fireballs."
        },

        de: {
            title: "Meteor",
            description:
                "Ein Meteor ist eine Leuchterscheinung, die entsteht, wenn ein Körper in eine Atmosphäre eintritt.",
            fact:
                "Sehr helle Meteore werden manchmal als Feuerkugeln bezeichnet."
        },

        fr: {
            title: "Météore",
            description:
                "Un météore est un phénomène lumineux produit lorsqu'un corps spatial entre dans une atmosphère.",
            fact:
                "Les météores très brillants sont parfois appelés bolides."
        },

        es: {
            title: "Meteoro",
            description:
                "Un meteoro es un fenómeno luminoso producido cuando un cuerpo espacial entra en una atmósfera.",
            fact:
                "Los meteoros muy brillantes a veces se llaman bólidos."
        },

        it: {
            title: "Meteora",
            description:
                "Una meteora è un fenomeno luminoso prodotto quando un corpo spaziale entra nell'atmosfera.",
            fact:
                "Le meteore molto luminose sono talvolta chiamate bolidi."
        }

    },


    nebula: {

        icon: "🌌",

        ru: {
            title: "Туманность",
            description:
                "Туманность — огромное облако газа и пыли в космосе.",
            fact:
                "Некоторые туманности являются местами, где рождаются новые звёзды."
        },

        kk: {
            title: "Тұмандық",
            description:
                "Тұмандық — ғарыштағы алып газ және шаң бұлты.",
            fact:
                "Кейбір тұмандықтарда жаңа жұлдыздар пайда болады."
        },

        cs: {
            title: "Mlhovina",
            description:
                "Mlhovina je obrovský oblak plynu a prachu ve vesmíru.",
            fact:
                "Některé mlhoviny jsou místy, kde vznikají nové hvězdy."
        },

        en: {
            title: "Nebula",
            description:
                "A nebula is a huge cloud of gas and dust in space.",
            fact:
                "Some nebulae are regions where new stars are born."
        },

        de: {
            title: "Nebel",
            description:
                "Ein Nebel ist eine riesige Wolke aus Gas und Staub im Weltraum.",
            fact:
                "Einige Nebel sind Gebiete, in denen neue Sterne entstehen."
        },

        fr: {
            title: "Nébuleuse",
            description:
                "Une nébuleuse est un immense nuage de gaz et de poussière dans l'espace.",
            fact:
                "Certaines nébuleuses sont des régions où naissent de nouvelles étoiles."
        },

        es: {
            title: "Nebulosa",
            description:
                "Una nebulosa es una enorme nube de gas y polvo en el espacio.",
            fact:
                "Algunas nebulosas son regiones donde nacen nuevas estrellas."
        },

        it: {
            title: "Nebulosa",
            description:
                "Una nebulosa è un'enorme nube di gas e polvere nello spazio.",
            fact:
                "Alcune nebulose sono regioni in cui nascono nuove stelle."
        }

    },


    star: {

        icon: "⭐",

        ru: {
            title: "Звезда",
            description:
                "Звезда — огромное горячее небесное тело, которое излучает энергию.",
            fact:
                "Солнце — ближайшая к Земле звезда."
        },

        kk: {
            title: "Жұлдыз",
            description:
                "Жұлдыз — энергия шығаратын алып әрі ыстық аспан денесі.",
            fact:
                "Күн — Жерге ең жақын жұлдыз."
        },

        cs: {
            title: "Hvězda",
            description:
                "Hvězda je obrovské horké nebeské těleso, které vyzařuje energii.",
            fact:
                "Slunce je hvězda nejbližší Zemi."
        },

        en: {
            title: "Star",
            description:
                "A star is a huge hot celestial body that releases energy.",
            fact:
                "The Sun is the closest star to Earth."
        },

        de: {
            title: "Stern",
            description:
                "Ein Stern ist ein riesiger heißer Himmelskörper, der Energie abstrahlt.",
            fact:
                "Die Sonne ist der der Erde nächstgelegene Stern."
        },

        fr: {
            title: "Étoile",
            description:
                "Une étoile est un immense corps céleste chaud qui émet de l'énergie.",
            fact:
                "Le Soleil est l'étoile la plus proche de la Terre."
        },

        es: {
            title: "Estrella",
            description:
                "Una estrella es un enorme cuerpo celeste caliente que libera energía.",
            fact:
                "El Sol es la estrella más cercana a la Tierra."
        },

        it: {
            title: "Stella",
            description:
                "Una stella è un enorme corpo celeste caldo che emette energia.",
            fact:
                "Il Sole è la stella più vicina alla Terra."
        }

    },


    blackHole: {

        icon: "🕳️",

        ru: {
            title: "Чёрная дыра",
            description:
                "Чёрная дыра — область пространства с чрезвычайно сильной гравитацией.",
            fact:
                "Граница чёрной дыры, за которой свет уже не может вернуться, называется горизонтом событий."
        },

        kk: {
            title: "Қара құрдым",
            description:
                "Қара құрдым — тартылыс күші өте жоғары кеңістік аймағы.",
            fact:
                "Жарық қайта шыға алмайтын шекара оқиғалар көкжиегі деп аталады."
        },

        cs: {
            title: "Černá díra",
            description:
                "Černá díra je oblast vesmíru s mimořádně silnou gravitací.",
            fact:
                "Hranice, za kterou se světlo nemůže vrátit, se nazývá horizont událostí."
        },

        en: {
            title: "Black Hole",
            description:
                "A black hole is a region of space with extremely strong gravity.",
            fact:
                "The boundary beyond which light cannot escape is called the event horizon."
        },

        de: {
            title: "Schwarzes Loch",
            description:
                "Ein Schwarzes Loch ist eine Region des Weltraums mit extrem starker Gravitation.",
            fact:
                "Die Grenze, hinter der Licht nicht mehr entkommen kann, wird Ereignishorizont genannt."
        },

        fr: {
            title: "Trou noir",
            description:
                "Un trou noir est une région de l'espace où la gravité est extrêmement forte.",
            fact:
                "La limite au-delà de laquelle la lumière ne peut plus s'échapper est appelée horizon des événements."
        },

        es: {
            title: "Agujero negro",
            description:
                "Un agujero negro es una región del espacio con una gravedad extremadamente fuerte.",
            fact:
                "El límite más allá del cual la luz no puede escapar se llama horizonte de sucesos."
        },

        it: {
            title: "Buco nero",
            description:
                "Un buco nero è una regione dello spazio con una gravità estremamente forte.",
            fact:
                "Il confine oltre il quale la luce non può più fuggire è chiamato orizzonte degli eventi."
        }

    }

};


/*
    Для остальных объектов используются
    отдельные короткие данные.
*/

const extraObjects = {

    galaxy: {
        icon: "🌌",
        names: {
            ru: "Галактика",
            kk: "Галактика",
            cs: "Galaxie",
            en: "Galaxy",
            de: "Galaxie",
            fr: "Galaxie",
            es: "Galaxia",
            it: "Galassia"
        },
        descriptions: {
            ru: "Огромная система из звёзд, газа, пыли и других компонентов.",
            kk: "Жұлдыздардан, газдан, шаңнан және басқа құрамдастардан тұратын алып жүйе.",
            cs: "Obrovský systém hvězd, plynu, prachu a dalších složek.",
            en: "A huge system containing stars, gas, dust and other components.",
            de: "Ein riesiges System aus Sternen, Gas, Staub und weiteren Bestandteilen.",
            fr: "Un immense système composé d'étoiles, de gaz, de poussière et d'autres éléments.",
            es: "Un enorme sistema formado por estrellas, gas, polvo y otros componentes.",
            it: "Un enorme sistema formato da stelle, gas, polvere e altri componenti."
        },
        facts: {
            ru: "Солнце находится в галактике Млечный Путь.",
            kk: "Күн Құс жолы галактикасында орналасқан.",
            cs: "Slunce se nachází v galaxii Mléčná dráha.",
            en: "The Sun is located in the Milky Way galaxy.",
            de: "Die Sonne befindet sich in der Milchstraße.",
            fr: "Le Soleil se trouve dans la galaxie de la Voie lactée.",
            es: "El Sol se encuentra en la galaxia de la Vía Láctea.",
            it: "Il Sole si trova nella galassia della Via Lattea."
        }
    },

    pulsar: {
        icon: "💫",
        names: {
            ru: "Пульсар",
            kk: "Пульсар",
            cs: "Pulsar",
            en: "Pulsar",
            de: "Pulsar",
            fr: "Pulsar",
            es: "Púlsar",
            it: "Pulsar"
        },
        descriptions: {
            ru: "Быстро вращающаяся нейтронная звезда, испускающая регулярные импульсы излучения.",
            kk: "Тұрақты сәуле импульстарын шығаратын жылдам айналатын нейтрондық жұлдыз.",
            cs: "Rychle rotující neutronová hvězda vysílající pravidelné pulzy záření.",
            en: "A rapidly rotating neutron star that emits regular pulses of radiation.",
            de: "Ein schnell rotierender Neutronenstern, der regelmäßige Strahlungsimpulse aussendet.",
            fr: "Une étoile à neutrons en rotation rapide qui émet des impulsions régulières.",
            es: "Una estrella de neutrones que gira rápidamente y emite pulsos regulares de radiación.",
            it: "Una stella di neutroni che ruota rapidamente ed emette impulsi regolari di radiazione."
        },
        facts: {
            ru: "Некоторые пульсары вращаются десятки и даже сотни раз в секунду.",
            kk: "Кейбір пульсарлар секундына ондаған, тіпті жүздеген рет айналады.",
            cs: "Některé pulsary se otáčejí desítky až stovkykrát za sekundu.",
            en: "Some pulsars rotate dozens or even hundreds of times per second.",
            de: "Einige Pulsare drehen sich Dutzende oder sogar Hunderte Male pro Sekunde.",
            fr: "Certains pulsars tournent des dizaines, voire des centaines de fois par seconde.",
            es: "Algunos púlsares giran decenas o incluso cientos de veces por segundo.",
            it: "Alcune pulsar ruotano decine o persino centinaia di volte al secondo."
        }
    },

    neutronStar: {
        icon: "🔵",
        names: {
            ru: "Нейтронная звезда",
            kk: "Нейтрондық жұлдыз",
            cs: "Neutronová hvězda",
            en: "Neutron Star",
            de: "Neutronenstern",
            fr: "Étoile à neutrons",
            es: "Estrella de neutrones",
            it: "Stella di neutroni"
        },
        descriptions: {
            ru: "Очень плотный остаток массивной звезды после её эволюции.",
            kk: "Массасы үлкен жұлдыздың эволюциясынан кейін қалған өте тығыз қалдық.",
            cs: "Velmi hustý pozůstatek masivní hvězdy.",
            en: "An extremely dense remnant of a massive star.",
            de: "Ein extrem dichter Überrest eines massereichen Sterns.",
            fr: "Un vestige extrêmement dense d'une étoile massive.",
            es: "Un remanente extremadamente denso de una estrella masiva.",
            it: "Un residuo estremamente denso di una stella massiccia."
        },
        facts: {
            ru: "Нейтронные звёзды имеют огромную плотность.",
            kk: "Нейтрондық жұлдыздардың тығыздығы өте жоғары.",
            cs: "Neutronové hvězdy mají obrovskou hustotu.",
            en: "Neutron stars have incredibly high density.",
            de: "Neutronensterne besitzen eine extrem hohe Dichte.",
            fr: "Les étoiles à neutrons ont une densité extrêmement élevée.",
            es: "Las estrellas de neutrones tienen una densidad increíblemente alta.",
            it: "Le stelle di neutroni hanno una densità incredibilmente elevata."
        }
    },

    redGiant: {
        icon: "🔴",
        names: {
            ru: "Красный гигант",
            kk: "Қызыл алып",
            cs: "Červený obr",
            en: "Red Giant",
            de: "Roter Riese",
            fr: "Géante rouge",
            es: "Gigante roja",
            it: "Gigante rossa"
        },
        descriptions: {
            ru: "Стадия жизни звезды, когда она сильно расширяется после изменений внутри неё.",
            kk: "Жұлдыздың ішкі өзгерістерден кейін қатты кеңейетін өмір кезеңі.",
            cs: "Vývojová fáze hvězdy, během níž se výrazně rozpíná.",
            en: "A stage in a star's life when it expands greatly.",
            de: "Eine Lebensphase eines Sterns, in der er sich stark ausdehnt.",
            fr: "Une étape de la vie d'une étoile durant laquelle elle se dilate fortement.",
            es: "Una etapa de la vida de una estrella en la que se expande enormemente.",
            it: "Una fase della vita di una stella durante la quale si espande notevolmente."
        },
        facts: {
            ru: "Солнце в далёком будущем также станет красным гигантом.",
            kk: "Алыс болашақта Күн де қызыл алыпқа айналады.",
            cs: "Slunce se ve vzdálené budoucnosti také stane červeným obrem.",
            en: "In the distant future, the Sun will also become a red giant.",
            de: "In ferner Zukunft wird auch die Sonne zu einem roten Riesen.",
            fr: "Dans un avenir très lointain, le Soleil deviendra lui aussi une géante rouge.",
            es: "En un futuro lejano, el Sol también se convertirá en una gigante roja.",
            it: "In un futuro lontano, anche il Sole diventerà una gigante rossa."
        }
    },

    whiteDwarf: {
        icon: "⚪",
        names: {
            ru: "Белый карлик",
            kk: "Ақ ергежейлі",
            cs: "Bílý trpaslík",
            en: "White Dwarf",
            de: "Weißer Zwerg",
            fr: "Naine blanche",
            es: "Enana blanca",
            it: "Nana bianca"
        },
        descriptions: {
            ru: "Горячий плотный остаток звезды, которая завершила основную часть своей жизни.",
            kk: "Өз өмірінің негізгі кезеңін аяқтаған жұлдыздың ыстық әрі тығыз қалдығы.",
            cs: "Horký a hustý pozůstatek hvězdy, která dokončila hlavní část svého života.",
            en: "A hot, dense remnant of a star that has completed most of its life.",
            de: "Ein heißer, dichter Überrest eines Sterns am Ende seiner Hauptlebensphase.",
            fr: "Un vestige chaud et dense d'une étoile ayant achevé l'essentiel de sa vie.",
            es: "Un remanente caliente y denso de una estrella que ha completado gran parte de su vida.",
            it: "Un residuo caldo e denso di una stella che ha completato gran parte della sua vita."
        },
        facts: {
            ru: "Белые карлики постепенно остывают с течением времени.",
            kk: "Ақ ергежейлілер уақыт өте біртіндеп суиды.",
            cs: "Bílí trpaslíci postupně v průběhu času chladnou.",
            en: "White dwarfs gradually cool over time.",
            de: "Weiße Zwerge kühlen mit der Zeit allmählich ab.",
            fr: "Les naines blanches refroidissent progressivement avec le temps.",
            es: "Las enanas blancas se enfrían gradualmente con el tiempo.",
            it: "Le nane bianche si raffreddano gradualmente nel tempo."
        }
    },

    supernova: {
        icon: "💥",
        names: {
            ru: "Сверхновая",
            kk: "Супернова",
            cs: "Supernova",
            en: "Supernova",
            de: "Supernova",
            fr: "Supernova",
            es: "Supernova",
            it: "Supernova"
        },
        descriptions: {
            ru: "Очень мощное космическое событие, связанное с разрушением некоторых звёзд.",
            kk: "Кейбір жұлдыздардың жойылуымен байланысты аса қуатты ғарыштық оқиға.",
            cs: "Velmi silná kosmická událost spojená se zánikem některých hvězd.",
            en: "An extremely powerful cosmic event associated with the destruction of some stars.",
            de: "Ein äußerst energiereiches kosmisches Ereignis, das mit dem Ende bestimmter Sterne verbunden ist.",
            fr: "Un événement cosmique extrêmement puissant lié à la fin de certaines étoiles.",
            es: "Un evento cósmico extremadamente poderoso relacionado con el final de algunas estrellas.",
            it: "Un evento cosmico estremamente potente legato alla fine di alcune stelle."
        },
        facts: {
            ru: "Сверхновые могут на короткое время становиться чрезвычайно яркими.",
            kk: "Суперновалар қысқа уақыт ішінде өте жарық болуы мүмкін.",
            cs: "Supernovy mohou být po krátkou dobu mimořádně jasné.",
            en: "Supernovae can become extraordinarily bright for a short period.",
            de: "Supernovae können für kurze Zeit außergewöhnlich hell werden.",
            fr: "Les supernovas peuvent devenir extrêmement brillantes pendant une courte période.",
            es: "Las supernovas pueden volverse extremadamente brillantes durante un breve periodo.",
            it: "Le supernove possono diventare estremamente luminose per un breve periodo."
        }
    }

};

// =====================================================
// 🇵🇱 POLSKI + 🇳🇱 NEDERLANDS
// Полная локализация страницы «Космические объекты»
// =====================================================

// 🌐 Информация о языках и флагах
Object.assign(languageInfo, {
    pl: {
        name: "Polski",
        flag: "images/poland.png"
    },

    nl: {
        name: "Nederlands",
        flag: "images/netherlands.png"
    }
});


// 🌌 Основные надписи страницы
Object.assign(translations, {
    pl: {
        title: "Obiekty kosmiczne",
        subtitle: "Odkrywaj niezwykłe obiekty Wszechświata",
        introTitle: "🔭 Co kryje się w kosmosie?",
        introText:
            "Wszechświat jest pełen niezwykłych obiektów — od ogromnych gwiazd i mgławic po asteroidy, komety i czarne dziury.",
        back: "← Powrót do kosmicznej przygody",
        fact: "🔭 Ciekawostka",
        footer: "🌌 Kosmiczna przygoda Papyrusa © 2026"
    },

    nl: {
        title: "Ruimteobjecten",
        subtitle: "Ontdek de bijzondere objecten van het heelal",
        introTitle: "🔭 Wat verbergt de ruimte?",
        introText:
            "Het heelal zit vol bijzondere objecten — van enorme sterren en nevels tot asteroïden, kometen en zwarte gaten.",
        back: "← Terug naar het ruimteavontuur",
        fact: "🔭 Interessant weetje",
        footer: "🌌 Het ruimteavontuur van Papyrus © 2026"
    }
});


// ☄️ Комета
Object.assign(objects.comet, {
    pl: {
        title: "Kometa",
        description:
            "Kometa to niewielkie ciało kosmiczne zbudowane głównie z lodu, pyłu i cząstek skalnych.",
        fact:
            "Gdy kometa zbliża się do Słońca, jej lód się nagrzewa, a wokół jądra powstaje koma i warkocz."
    },

    nl: {
        title: "Komeet",
        description:
            "Een komeet is een klein hemellichaam dat voornamelijk bestaat uit ijs, stof en rotsdeeltjes.",
        fact:
            "Wanneer een komeet de zon nadert, warmt het ijs op en kunnen er een coma en een staart ontstaan."
    }
});


// 🪨 Астероид
Object.assign(objects.asteroid, {
    pl: {
        title: "Asteroida",
        description:
            "Asteroida to skalne lub metaliczne ciało niebieskie krążące wokół Słońca.",
        fact:
            "Większość znanych asteroid Układu Słonecznego znajduje się w głównym pasie asteroid między Marsem a Jowiszem."
    },

    nl: {
        title: "Asteroïde",
        description:
            "Een asteroïde is een rotsachtig of metalen hemellichaam dat om de zon draait.",
        fact:
            "De meeste bekende asteroïden in het zonnestelsel bevinden zich in de belangrijkste asteroïdengordel tussen Mars en Jupiter."
    }
});


// 🌠 Метеор
Object.assign(objects.meteor, {
    pl: {
        title: "Meteor",
        description:
            "Meteor to zjawisko świetlne powstające, gdy ciało kosmiczne wchodzi w atmosferę.",
        fact:
            "Bardzo jasne meteory są czasami nazywane bolidami."
    },

    nl: {
        title: "Meteoor",
        description:
            "Een meteoor is een lichtverschijnsel dat ontstaat wanneer een ruimtedeeltje de atmosfeer binnendringt.",
        fact:
            "Zeer heldere meteoren worden soms vuurballen genoemd."
    }
});


// 🌌 Туманность
Object.assign(objects.nebula, {
    pl: {
        title: "Mgławica",
        description:
            "Mgławica to ogromny obłok gazu i pyłu w przestrzeni kosmicznej.",
        fact:
            "Niektóre mgławice są obszarami, w których rodzą się nowe gwiazdy."
    },

    nl: {
        title: "Nevel",
        description:
            "Een nevel is een enorme wolk van gas en stof in de ruimte.",
        fact:
            "Sommige nevels zijn gebieden waar nieuwe sterren ontstaan."
    }
});


// ⭐ Звезда
Object.assign(objects.star, {
    pl: {
        title: "Gwiazda",
        description:
            "Gwiazda to ogromne, gorące ciało niebieskie emitujące energię.",
        fact:
            "Słońce jest gwiazdą znajdującą się najbliżej Ziemi."
    },

    nl: {
        title: "Ster",
        description:
            "Een ster is een enorm, heet hemellichaam dat energie uitstraalt.",
        fact:
            "De zon is de ster die het dichtst bij de aarde staat."
    }
});


// 🕳️ Чёрная дыра
Object.assign(objects.blackHole, {
    pl: {
        title: "Czarna dziura",
        description:
            "Czarna dziura to obszar przestrzeni o niezwykle silnej grawitacji.",
        fact:
            "Granica, zza której światło nie może już uciec, nazywa się horyzontem zdarzeń."
    },

    nl: {
        title: "Zwart gat",
        description:
            "Een zwart gat is een gebied in de ruimte met een extreem sterke zwaartekracht.",
        fact:
            "De grens waarachter licht niet meer kan ontsnappen, heet de waarnemingshorizon."
    }
});


// 🌌 Дополнительные космические объекты

// Галактика
Object.assign(extraObjects.galaxy.names, {
    pl: "Galaktyka",
    nl: "Sterrenstelsel"
});

Object.assign(extraObjects.galaxy.descriptions, {
    pl:
        "Ogromny układ złożony z gwiazd, gazu, pyłu i innych składników.",
    nl:
        "Een enorm systeem dat bestaat uit sterren, gas, stof en andere bestanddelen."
});

Object.assign(extraObjects.galaxy.facts, {
    pl: "Słońce znajduje się w galaktyce Drogi Mlecznej.",
    nl: "De zon bevindt zich in het sterrenstelsel de Melkweg."
});


// Пульсар
Object.assign(extraObjects.pulsar.names, {
    pl: "Pulsar",
    nl: "Pulsar"
});

Object.assign(extraObjects.pulsar.descriptions, {
    pl:
        "Szybko obracająca się gwiazda neutronowa, która emituje regularne impulsy promieniowania.",
    nl:
        "Een snel draaiende neutronenster die regelmatig stralingspulsen uitzendt."
});

Object.assign(extraObjects.pulsar.facts, {
    pl:
        "Niektóre pulsary obracają się dziesiątki, a nawet setki razy na sekundę.",
    nl:
        "Sommige pulsars draaien tientallen of zelfs honderden keren per seconde."
});


// Нейтронная звезда
Object.assign(extraObjects.neutronStar.names, {
    pl: "Gwiazda neutronowa",
    nl: "Neutronenster"
});

Object.assign(extraObjects.neutronStar.descriptions, {
    pl:
        "Niezwykle gęsta pozostałość masywnej gwiazdy po zakończeniu jej ewolucji.",
    nl:
        "Een extreem dicht overblijfsel van een zware ster aan het einde van haar evolutie."
});

Object.assign(extraObjects.neutronStar.facts, {
    pl: "Gwiazdy neutronowe mają niezwykle dużą gęstość.",
    nl: "Neutronensterren hebben een uitzonderlijk hoge dichtheid."
});


// Красный гигант
Object.assign(extraObjects.redGiant.names, {
    pl: "Czerwony olbrzym",
    nl: "Rode reus"
});

Object.assign(extraObjects.redGiant.descriptions, {
    pl:
        "Etap życia gwiazdy, w którym znacznie zwiększa ona swoje rozmiary wskutek zmian zachodzących w jej wnętrzu.",
    nl:
        "Een fase in het leven van een ster waarin deze sterk uitzet door veranderingen in haar binnenste."
});

Object.assign(extraObjects.redGiant.facts, {
    pl: "W odległej przyszłości Słońce również stanie się czerwonym olbrzymem.",
    nl: "In de verre toekomst zal de zon ook een rode reus worden."
});


// Белый карлик
Object.assign(extraObjects.whiteDwarf.names, {
    pl: "Biały karzeł",
    nl: "Witte dwerg"
});

Object.assign(extraObjects.whiteDwarf.descriptions, {
    pl:
        "Gorąca i gęsta pozostałość gwiazdy, która zakończyła główny etap swojego życia.",
    nl:
        "Een heet en dicht overblijfsel van een ster die het grootste deel van haar leven heeft doorlopen."
});

Object.assign(extraObjects.whiteDwarf.facts, {
    pl: "Białe karły stopniowo stygną z upływem czasu.",
    nl: "Witte dwergen koelen na verloop van tijd geleidelijk af."
});


// Сверхновая
Object.assign(extraObjects.supernova.names, {
    pl: "Supernowa",
    nl: "Supernova"
});

Object.assign(extraObjects.supernova.descriptions, {
    pl:
        "Niezwykle potężne zjawisko kosmiczne związane z końcem życia niektórych gwiazd.",
    nl:
        "Een uiterst krachtige kosmische gebeurtenis die verband houdt met het einde van sommige sterren."
});

Object.assign(extraObjects.supernova.facts, {
    pl:
        "Supernowe mogą przez krótki czas świecić niezwykle jasno.",
    nl:
        "Supernova's kunnen korte tijd uitzonderlijk helder schijnen."
});
function toggleLanguageMenu() {

    const dropdown =
        document.getElementById("languageDropdown");

    if (dropdown) {
        dropdown.classList.toggle("open");
    }

}


document.addEventListener(
    "click",
    function (event) {

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


function updateLanguageButton() {

    const button =
        document.getElementById("languageButton");

    const info =
        languageInfo[currentLanguage];

    if (!button || !info) {
        return;
    }

    button.innerHTML = `
        <img
            src="${info.flag}"
            alt="${info.name}"
        >
        ${info.name}
    `;

}


function changeLanguage(language) {

    if (!translations[language]) {
        return;
    }

    currentLanguage = language;

    localStorage.setItem(
        "siteLanguage",
        language
    );

    document.documentElement.lang =
        language;

    updatePage();

    updateLanguageButton();

    const dropdown =
        document.getElementById("languageDropdown");

    if (dropdown) {
        dropdown.classList.remove("open");
    }

}


function updatePage() {

    const data =
        translations[currentLanguage] ||
        translations.ru;


    document.getElementById(
        "page-title"
    ).textContent =
        data.title;


    document.getElementById(
        "page-subtitle"
    ).textContent =
        data.subtitle;


    document.getElementById(
        "intro-title"
    ).textContent =
        data.introTitle;


    document.getElementById(
        "intro-text"
    ).textContent =
        data.introText;


    document.querySelector(
        ".back-button"
    ).textContent =
        data.back;


    document.getElementById(
        "factTitle"
    ).textContent =
        data.fact;


    document.getElementById(
        "footer-text"
    ).textContent =
        data.footer;


    document.querySelectorAll(
        "[data-object-title]"
    ).forEach(element => {

        const id =
            element.dataset.objectTitle;

        const object =
            objects[id];

        if (object && object[currentLanguage]) {

            element.textContent =
                object[currentLanguage].title;

        }
        else if (extraObjects[id]) {

            element.textContent =
                extraObjects[id]
                    .names[currentLanguage];

        }

    });


    document.querySelectorAll(
        "[data-object-description]"
    ).forEach(element => {

        const id =
            element.dataset.objectDescription;

        const object =
            objects[id];

        if (object && object[currentLanguage]) {

            element.textContent =
                object[currentLanguage].description;

        }
        else if (extraObjects[id]) {

            element.textContent =
                extraObjects[id]
                    .descriptions[currentLanguage];

        }

    });

}


function openObject(id) {

    const object =
        objects[id];

    const extra =
        extraObjects[id];


    let icon;
    let title;
    let description;
    let fact;


    if (object && object[currentLanguage]) {

        icon =
            object.icon;

        title =
            object[currentLanguage].title;

        description =
            object[currentLanguage].description;

        fact =
            object[currentLanguage].fact;

    }
    else if (extra) {

        icon =
            extra.icon;

        title =
            extra.names[currentLanguage];

        description =
            extra.descriptions[currentLanguage];

        fact =
            extra.facts[currentLanguage];

    }
    else {

        return;

    }


    document.getElementById(
        "modalIcon"
    ).textContent =
        icon;


    document.getElementById(
        "modalTitle"
    ).textContent =
        title;


    document.getElementById(
        "modalDescription"
    ).textContent =
        description;


    document.getElementById(
        "modalFact"
    ).textContent =
        fact;


    document.getElementById(
        "objectModal"
    ).classList.add("show");

}


function closeObject(event) {

    if (
        event &&
        event.target &&
        event.target.id !== "objectModal"
    ) {
        return;
    }

    document.getElementById(
        "objectModal"
    ).classList.remove("show");

}


document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {
            closeObject();
        }

    }
);


document.addEventListener(
    "DOMContentLoaded",
    function () {

        currentLanguage =
            localStorage.getItem("siteLanguage") ||
            "ru";

        if (!translations[currentLanguage]) {
            currentLanguage = "ru";
        }

        document.documentElement.lang =
            currentLanguage;

        updatePage();

        updateLanguageButton();

    }
);