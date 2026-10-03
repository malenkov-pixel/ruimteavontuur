let kainLanguage = localStorage.getItem("siteLanguage") || "ru";

const kainTranslations = {

    ru: {
        title: "📚 Энциклопедия Кейна",
        subtitle: "История рождения и развития планет Солнечной системы.",
        back: "← Космическое приключение",
        footer: "🌌 Энциклопедия Кейна © 2026",

        cards: [
            "Рождение Солнечной системы",
            "Формирование каменных планет",
            "Рождение гигантов",
            "Как появилась Земля",
            "Рождение Луны",
            "Миры за Нептуном"
        ],

        texts: [
            "Около 4,6 млрд лет назад огромное облако газа и пыли начало сжиматься под действием гравитации. В центре сформировалось молодое Солнце, а вокруг него возник вращающийся протопланетный диск.",
            "Во внутренней части диска температура была выше. Здесь сталкивались и объединялись твёрдые частицы, постепенно образуя Меркурий, Венеру, Землю и Марс.",
            "Дальше от Солнца было холоднее, поэтому крупные зародыши могли накопить много льда и газа. Так сформировались Юпитер, Сатурн, Уран и Нептун.",
            "Земля росла из столкновений планетезималей. После формирования она постепенно остыла, сформировались кора, океаны и атмосфера, а позднее возникла жизнь.",
            "Согласно наиболее принятой модели, молодая Земля столкнулась с крупным небесным телом. Из выброшенного материала вокруг Земли сформировалась Луна.",
            "За орбитой Нептуна сохранилось множество ледяных тел. Среди них находятся Плутон и другие карликовые планеты пояса Койпера и рассеянного диска."
        ],
        planetsHistoryTitle: "🪐 История планет",
planetsHistorySubtitle: "Как формировались миры Солнечной системы.",

planetCards: [
    "Меркурий",
    "Венера",
    "Земля",
    "Марс",
    "Юпитер",
    "Сатурн",
    "Уран",
    "Нептун",
    "Плутон"
],

planetTexts: [
    "Меркурий сформировался во внутренней части молодой Солнечной системы. Высокая температура не позволила ему сохранить большое количество лёгких веществ, поэтому он стал небольшим каменистым миром с крупным металлическим ядром.",

    "Венера возникла из материала протопланетного диска рядом с Землёй. Она постепенно росла благодаря столкновениям планетезималей и других небольших тел, а позднее приобрела плотную атмосферу.",

    "Земля сформировалась около 4,5 млрд лет назад из множества столкновений молодых тел. Со временем планета разделилась на ядро, мантию и кору, а затем на её поверхности появились океаны и атмосфера.",

    "Марс сформировался в более холодной внешней части области каменных планет. Он оказался значительно меньше Земли и поэтому быстрее потерял внутреннее тепло. В далёком прошлом на Марсе существовала жидкая вода на поверхности.",

    "Юпитер начал формироваться далеко от Солнца, где было достаточно холодно для накопления льда. Его массивное ядро стало притягивать большое количество газа, благодаря чему возник крупнейший планетарный гигант Солнечной системы.",

    "Сатурн сформировался в холодной внешней части протопланетного диска. Он накопил большое количество водорода и гелия. Позднее вокруг планеты сформировалась сложная система колец из льда и каменных частиц.",

    "Уран сформировался далеко от Солнца из смеси каменных материалов, льдов и газов. Его относят к ледяным гигантам. Вероятно, крупные столкновения в ранней истории повлияли на необычный наклон его оси.",

    "Нептун сформировался в холодной внешней области Солнечной системы. Он состоит из плотного внутреннего вещества, богатого водой и другими летучими соединениями, окружённого газовой атмосферой.",

    "Плутон сформировался в далёкой области за орбитой Нептуна. Он является одним из крупных известных тел пояса Койпера и относится к карликовым планетам. Его поверхность содержит различные виды льда."
]
    },

    kk: {
        title: "📚 Кейннің энциклопедиясы",
        subtitle: "Күн жүйесіндегі планеталардың пайда болуы мен дамуының тарихы.",
        back: "← Ғарыштық саяхат",
        footer: "🌌 Кейннің энциклопедиясы © 2026",

        cards: [
            "Күн жүйесінің пайда болуы",
            "Жер тектес планеталардың қалыптасуы",
            "Алып планеталардың пайда болуы",
            "Жер қалай пайда болды",
            "Айдың пайда болуы",
            "Нептуннан кейінгі әлемдер"
        ],

        texts: [
            "Шамамен 4,6 миллиард жыл бұрын орасан зор газ бен шаң бұлты тартылыс күшінің әсерінен сығыла бастады. Оның ортасында жас Күн қалыптасып, айналасында айналмалы протопланеталық диск пайда болды.",
            "Дискінің ішкі бөлігінде температура жоғары болды. Мұнда қатты бөлшектер соқтығысып, бір-бірімен бірігіп, біртіндеп Меркурий, Шолпан, Жер және Марсты қалыптастырды.",
            "Күннен алыстаған сайын суық болды. Сондықтан ірі ұрықтар көп мөлшерде мұз бен газ жинай алды. Осылайша Юпитер, Сатурн, Уран және Нептун қалыптасты.",
            "Жер планетезимальдардың соқтығысуы нәтижесінде өсті. Кейін ол біртіндеп суып, жер қыртысы, мұхиттар және атмосфера қалыптасты, ал әлдеқайда кейін тіршілік пайда болды.",
            "Ең кең таралған модель бойынша, жас Жер ірі аспан денесімен соқтығысқан. Соқтығысудан ұшып шыққан материал Жердің айналасында жиналып, Айды қалыптастырды.",
            "Нептун орбитасының ар жағында көптеген мұзды денелер сақталған. Олардың арасында Плутон және Койпер белдеуіндегі және шашыраңқы дискідегі басқа ергежейлі планеталар бар."
        ]
    },

    cs: {
        title: "📚 Encyklopedie Cainea",
        subtitle: "Historie vzniku a vývoje planet Sluneční soustavy.",
        back: "← Vesmírné dobrodružství",
        footer: "🌌 Encyklopedie Cainea © 2026",

        cards: [
            "Vznik Sluneční soustavy",
            "Vznik kamenných planet",
            "Zrození obrů",
            "Jak vznikla Země",
            "Vznik Měsíce",
            "Světy za Neptunem"
        ],

        texts: [
            "Přibližně před 4,6 miliardy let se obrovský oblak plynu a prachu začal působením gravitace smršťovat. Uprostřed vzniklo mladé Slunce a kolem něj rotující protoplanetární disk.",
            "Ve vnitřní části disku byla vyšší teplota. Pevné částice se zde srážely a spojovaly a postupně vytvořily Merkur, Venuši, Zemi a Mars.",
            "Dále od Slunce bylo chladněji, takže velká zárodečná tělesa mohla nahromadit velké množství ledu a plynu. Tak vznikly Jupiter, Saturn, Uran a Neptun.",
            "Země rostla díky srážkám planetesimál. Po svém vzniku postupně chladla a vytvořila se její kůra, oceány a atmosféra. Mnohem později se objevil život.",
            "Podle nejpřijímanějšího modelu se mladá Země srazila s velkým vesmírným tělesem. Materiál vyvržený při srážce vytvořil kolem Země Měsíc.",
            "Za oběžnou dráhou Neptunu zůstalo mnoho ledových těles. Patří mezi ně Pluto a další trpasličí planety Kuiperova pásu a rozptýleného disku."
        ]
    },

    en: {
        title: "📚 Caine's Encyclopedia",
        subtitle: "The history of the birth and development of the planets of the Solar System.",
        back: "← Space Adventure",
        footer: "🌌 Caine's Encyclopedia © 2026",

        cards: [
            "Birth of the Solar System",
            "Formation of the Rocky Planets",
            "Birth of the Giants",
            "How Earth Was Formed",
            "Birth of the Moon",
            "Worlds Beyond Neptune"
        ],

        texts: [
            "About 4.6 billion years ago, a huge cloud of gas and dust began collapsing under gravity. A young Sun formed at its center, surrounded by a rotating protoplanetary disk.",
            "The inner part of the disk was hotter. Solid particles collided and joined together, gradually forming Mercury, Venus, Earth and Mars.",
            "Farther from the Sun it was colder, allowing large planetary embryos to collect large amounts of ice and gas. This is how Jupiter, Saturn, Uranus and Neptune formed.",
            "Earth grew through collisions between planetesimals. After its formation, it gradually cooled and developed a crust, oceans and atmosphere. Much later, life appeared.",
            "According to the most widely accepted model, the young Earth collided with a large celestial body. The material thrown into orbit eventually formed the Moon.",
            "Beyond Neptune's orbit, many icy bodies remained. Among them are Pluto and other dwarf planets of the Kuiper Belt and scattered disk."
        ]
    },

    de: {
        title: "📚 Caines Enzyklopädie",
        subtitle: "Die Geschichte der Entstehung und Entwicklung der Planeten des Sonnensystems.",
        back: "← Weltraumabenteuer",
        footer: "🌌 Caines Enzyklopädie © 2026",

        cards: [
            "Die Entstehung des Sonnensystems",
            "Entstehung der Gesteinsplaneten",
            "Die Entstehung der Riesen",
            "Wie die Erde entstand",
            "Die Entstehung des Mondes",
            "Welten jenseits des Neptun"
        ],

        texts: [
            "Vor etwa 4,6 Milliarden Jahren begann eine riesige Wolke aus Gas und Staub unter dem Einfluss der Schwerkraft zusammenzufallen. In ihrem Zentrum entstand die junge Sonne, umgeben von einer rotierenden protoplanetaren Scheibe.",
            "Im inneren Bereich der Scheibe war es heißer. Feste Teilchen stießen zusammen und verbanden sich allmählich zu Merkur, Venus, Erde und Mars.",
            "Weiter von der Sonne entfernt war es kälter. Dadurch konnten große Keime viel Eis und Gas sammeln. So entstanden Jupiter, Saturn, Uranus und Neptun.",
            "Die Erde wuchs durch Zusammenstöße von Planetesimalen. Nach ihrer Entstehung kühlte sie allmählich ab und bildete Kruste, Ozeane und Atmosphäre. Viel später entstand Leben.",
            "Nach dem heute am weitesten akzeptierten Modell kollidierte die junge Erde mit einem großen Himmelskörper. Das dabei herausgeschleuderte Material bildete den Mond.",
            "Jenseits der Neptunbahn blieben viele eisige Körper erhalten. Dazu gehören Pluto und andere Zwergplaneten des Kuipergürtels und der verstreuten Scheibe."
        ]
    },

    fr: {
        title: "📚 Encyclopédie de Caine",
        subtitle: "L'histoire de la naissance et de l'évolution des planètes du Système solaire.",
        back: "← Aventure spatiale",
        footer: "🌌 Encyclopédie de Caine © 2026",

        cards: [
            "Naissance du Système solaire",
            "Formation des planètes rocheuses",
            "Naissance des géantes",
            "Comment la Terre est née",
            "Naissance de la Lune",
            "Les mondes au-delà de Neptune"
        ],

        texts: [
            "Il y a environ 4,6 milliards d'années, un immense nuage de gaz et de poussière a commencé à s'effondrer sous l'effet de la gravité. Le jeune Soleil s'est formé au centre, entouré d'un disque protoplanétaire en rotation.",
            "Dans la partie interne du disque, la température était plus élevée. Les particules solides se sont heurtées et assemblées pour former progressivement Mercure, Vénus, la Terre et Mars.",
            "Plus loin du Soleil, il faisait plus froid, ce qui a permis aux grands embryons planétaires d'accumuler beaucoup de glace et de gaz. C'est ainsi que Jupiter, Saturne, Uranus et Neptune se sont formés.",
            "La Terre s'est développée grâce aux collisions entre planétésimaux. Après sa formation, elle s'est progressivement refroidie et a développé une croûte, des océans et une atmosphère. La vie est apparue bien plus tard.",
            "Selon le modèle le plus accepté, la jeune Terre est entrée en collision avec un grand corps céleste. Les matériaux projetés autour de la Terre ont finalement formé la Lune.",
            "Au-delà de l'orbite de Neptune, de nombreux corps glacés sont restés. Parmi eux se trouvent Pluton et d'autres planètes naines de la ceinture de Kuiper et du disque dispersé."
        ]
    },

    es: {
        title: "📚 Enciclopedia de Caine",
        subtitle: "Historia del nacimiento y evolución de los planetas del Sistema Solar.",
        back: "← Aventura espacial",
        footer: "🌌 Enciclopedia de Caine © 2026",

        cards: [
            "Nacimiento del Sistema Solar",
            "Formación de los planetas rocosos",
            "Nacimiento de los gigantes",
            "Cómo apareció la Tierra",
            "Nacimiento de la Luna",
            "Mundos más allá de Neptuno"
        ],

        texts: [
            "Hace unos 4.600 millones de años, una enorme nube de gas y polvo comenzó a colapsar por la gravedad. En el centro nació el Sol y alrededor se formó un disco protoplanetario.",
            "En la región interior del disco hacía más calor. Las partículas sólidas chocaron y se unieron hasta formar Mercurio, Venus, la Tierra y Marte.",
            "Más lejos del Sol hacía más frío, lo que permitió a grandes núcleos acumular hielo y gas. Así surgieron Júpiter, Saturno, Urano y Neptuno.",
            "La Tierra creció mediante colisiones de planetesimales. Después se enfrió y desarrolló corteza, océanos y atmósfera; mucho más tarde apareció la vida.",
            "Según el modelo más aceptado, la Tierra joven chocó con un cuerpo grande. El material expulsado terminó formando la Luna.",
            "Más allá de Neptuno quedaron muchos cuerpos helados, entre ellos Plutón y otros planetas enanos del cinturón de Kuiper y del disco disperso."
        ]
    },

    it: {
        title: "📚 Enciclopedia di Caine",
        subtitle: "La storia della nascita e dell'evoluzione dei pianeti del Sistema Solare.",
        back: "← Avventura spaziale",
        footer: "🌌 Enciclopedia di Caine © 2026",

        cards: [
            "Nascita del Sistema Solare",
            "Formazione dei pianeti rocciosi",
            "Nascita dei giganti",
            "Come è nata la Terra",
            "Nascita della Luna",
            "Mondi oltre Nettuno"
        ],

        texts: [
            "Circa 4,6 miliardi di anni fa, un'enorme nube di gas e polvere iniziò a collassare sotto la gravità. Al centro nacque il giovane Sole e intorno si formò un disco protoplanetario.",
            "Nella parte interna del disco la temperatura era più alta. Le particelle solide si scontrarono e si unirono, formando Mercurio, Venere, la Terra e Marte.",
            "Più lontano dal Sole faceva più freddo, permettendo ai grandi nuclei di accumulare ghiaccio e gas. Nacquero così Giove, Saturno, Urano e Nettuno.",
            "La Terra crebbe attraverso collisioni tra planetesimi. In seguito si raffreddò e sviluppò crosta, oceani e atmosfera; molto più tardi comparve la vita.",
            "Secondo il modello più accettato, la Terra giovane entrò in collisione con un grande corpo celeste. Il materiale espulso formò la Luna.",
            "Oltre Nettuno sono rimasti molti corpi ghiacciati, tra cui Plutone e altri pianeti nani della fascia di Kuiper e del disco diffuso."
        ]
    }

};
const planetHistoryTranslations = {
    

    ru: {
        title: "🪐 История планет",
        subtitle: "Как формировались миры Солнечной системы.",
        planets: [
            ["Меркурий", "Меркурий сформировался во внутренней части молодой Солнечной системы. Высокая температура не позволила ему сохранить большое количество лёгких веществ, поэтому он стал небольшим каменистым миром с крупным металлическим ядром."],
            ["Венера", "Венера возникла из материала протопланетного диска рядом с Землёй. Она постепенно росла благодаря столкновениям планетезималей и других небольших тел, а позднее приобрела плотную атмосферу."],
            ["Земля", "Земля сформировалась около 4,5 млрд лет назад из множества столкновений молодых тел. Со временем планета разделилась на ядро, мантию и кору, а затем на её поверхности появились океаны и атмосфера."],
            ["Марс", "Марс сформировался в более холодной внешней части области каменных планет. Он оказался значительно меньше Земли и поэтому быстрее потерял внутреннее тепло. В далёком прошлом на Марсе существовала жидкая вода на поверхности."],
            ["Юпитер", "Юпитер начал формироваться далеко от Солнца, где было достаточно холодно для накопления льда. Его массивное ядро стало притягивать большое количество газа, благодаря чему возник крупнейший планетарный гигант Солнечной системы."],
            ["Сатурн", "Сатурн сформировался в холодной внешней части протопланетного диска. Он накопил большое количество водорода и гелия. Позднее вокруг планеты сформировалась сложная система колец из льда и каменных частиц."],
            ["Уран", "Уран сформировался далеко от Солнца из смеси каменных материалов, льдов и газов. Его относят к ледяным гигантам. Вероятно, крупные столкновения в ранней истории повлияли на необычный наклон его оси."],
            ["Нептун", "Нептун сформировался в холодной внешней области Солнечной системы. Он состоит из плотного внутреннего вещества, богатого водой и другими летучими соединениями, окружённого газовой атмосферой."],
            ["Плутон", "Плутон сформировался в далёкой области за орбитой Нептуна. Он является одним из крупных известных тел пояса Койпера и относится к карликовым планетам. Его поверхность содержит различные виды льда."]
        ]
    },

    kk: {
        title: "🪐 Планеталардың тарихы",
        subtitle: "Күн жүйесінің әлемдері қалай қалыптасты.",
        planets: [
            ["Меркурий", "Меркурий жас Күн жүйесінің ішкі бөлігінде қалыптасты. Жоғары температура оның жеңіл заттардың көп мөлшерін сақтап қалуына мүмкіндік бермеді. Сондықтан ол үлкен металл ядросы бар шағын тасты әлемге айналды."],
            ["Шолпан", "Шолпан Жердің маңындағы протопланеталық диск материалдарынан пайда болды. Ол планетезималдар мен басқа да шағын денелердің соқтығысуы арқылы біртіндеп өсті, кейін тығыз атмосфераға ие болды."],
            ["Жер", "Жер шамамен 4,5 миллиард жыл бұрын жас аспан денелерінің көптеген соқтығысуы нәтижесінде қалыптасты. Уақыт өте келе планета ядроға, мантияға және жер қыртысына бөлінді, кейін оның бетінде мұхиттар мен атмосфера пайда болды."],
            ["Марс", "Марс тасты планеталар аймағының салыстырмалы түрде салқын сыртқы бөлігінде қалыптасты. Ол Жерден әлдеқайда кіші болғандықтан, ішкі жылуын тезірек жоғалтты. Ертеде Марстың бетінде сұйық су болған."],
            ["Юпитер", "Юпитер Күннен алыс жерде қалыптаса бастады. Ол аймақта мұздың жиналуына жеткілікті суық болды. Оның үлкен ядросы көп мөлшерде газды тартты, нәтижесінде Күн жүйесіндегі ең алып планеталық алып пайда болды."],
            ["Сатурн", "Сатурн протопланеталық дискінің суық сыртқы бөлігінде қалыптасты. Ол көп мөлшерде сутек пен гелий жинады. Кейін планетаның айналасында мұз бен тас бөлшектерінен тұратын күрделі сақиналар жүйесі пайда болды."],
            ["Уран", "Уран Күннен алыс жерде тасты материалдар, мұздар мен газдардың қоспасынан қалыптасты. Ол мұзды алыптарға жатады. Ертедегі ірі соқтығыстар оның осінің ерекше көлбеулігіне әсер еткен болуы мүмкін."],
            ["Нептун", "Нептун Күн жүйесінің суық сыртқы аймағында қалыптасты. Оның ішкі бөлігі суға және басқа ұшқыш қосылыстарға бай тығыз заттардан тұрады, ал сыртқы бөлігін газды атмосфера қоршап тұр."],
            ["Плутон", "Плутон Нептун орбитасының ар жағындағы алыс аймақта қалыптасты. Ол Койпер белдеуіндегі белгілі ірі денелердің бірі және ергежейлі планетаға жатады. Оның бетінде мұздың әртүрлі түрлері бар."]
        ]
    },

    cs: {
        title: "🪐 Historie planet",
        subtitle: "Jak vznikaly světy Sluneční soustavy.",
        planets: [
            ["Merkur", "Merkur vznikl ve vnitřní části mladé Sluneční soustavy. Vysoká teplota mu nedovolila zachovat velké množství lehkých látek, a proto se stal malým kamenným světem s velkým kovovým jádrem."],
            ["Venuše", "Venuše vznikla z materiálu protoplanetárního disku poblíž Země. Postupně rostla díky srážkám planetesimál a dalších malých těles a později získala hustou atmosféru."],
            ["Země", "Země vznikla asi před 4,5 miliardami let během mnoha srážek mladých těles. Postupně se rozdělila na jádro, plášť a kůru a později se na jejím povrchu vytvořily oceány a atmosféra."],
            ["Mars", "Mars vznikl v chladnější vnější části oblasti kamenných planet. Byl mnohem menší než Země, a proto rychleji ztratil své vnitřní teplo. V dávné minulosti se na jeho povrchu nacházela kapalná voda."],
            ["Jupiter", "Jupiter se začal formovat daleko od Slunce, kde bylo dostatečně chladno pro hromadění ledu. Jeho mohutné jádro začalo přitahovat velké množství plynu a vznikl tak největší planetární obr Sluneční soustavy."],
            ["Saturn", "Saturn vznikl v chladné vnější části protoplanetárního disku. Nahromadil velké množství vodíku a helia. Později se kolem něj vytvořil složitý systém prstenců z ledu a kamenných částic."],
            ["Uran", "Uran vznikl daleko od Slunce ze směsi kamenných materiálů, ledů a plynů. Patří mezi ledové obry. Velké srážky v rané historii mohly ovlivnit neobvyklý sklon jeho osy."],
            ["Neptun", "Neptun vznikl v chladné vnější oblasti Sluneční soustavy. Skládá se z husté vnitřní hmoty bohaté na vodu a další těkavé látky a je obklopen plynnou atmosférou."],
            ["Pluto", "Pluto vzniklo ve vzdálené oblasti za oběžnou dráhou Neptunu. Je jedním z větších známých těles Kuiperova pásu a patří mezi trpasličí planety. Jeho povrch obsahuje různé druhy ledu."]
        ]
    },

    en: {
        title: "🪐 History of the Planets",
        subtitle: "How the worlds of the Solar System formed.",
        planets: [
            ["Mercury", "Mercury formed in the inner part of the young Solar System. The high temperature prevented it from retaining large amounts of light materials, so it became a small rocky world with a large metallic core."],
            ["Venus", "Venus formed from material in the protoplanetary disk near Earth. It gradually grew through collisions between planetesimals and other small bodies and later developed a dense atmosphere."],
            ["Earth", "Earth formed about 4.5 billion years ago through many collisions between young bodies. Over time, the planet separated into a core, mantle and crust, and oceans and an atmosphere later appeared on its surface."],
            ["Mars", "Mars formed in the colder outer part of the rocky-planet region. It was much smaller than Earth and therefore lost its internal heat more quickly. In the distant past, liquid water existed on the Martian surface."],
            ["Jupiter", "Jupiter began forming far from the Sun, where it was cold enough for ice to accumulate. Its massive core attracted large amounts of gas, creating the largest planetary giant in the Solar System."],
            ["Saturn", "Saturn formed in the cold outer part of the protoplanetary disk. It accumulated large amounts of hydrogen and helium. Later, a complex system of rings made of ice and rocky particles formed around the planet."],
            ["Uranus", "Uranus formed far from the Sun from a mixture of rocky materials, ices and gases. It is classified as an ice giant. Major collisions early in its history may have influenced its unusual axial tilt."],
            ["Neptune", "Neptune formed in the cold outer region of the Solar System. It consists of dense inner material rich in water and other volatile compounds, surrounded by a gaseous atmosphere."],
            ["Pluto", "Pluto formed in a distant region beyond Neptune's orbit. It is one of the larger known bodies in the Kuiper Belt and is classified as a dwarf planet. Its surface contains different types of ice."]
        ]
    },

    de: {
        title: "🪐 Geschichte der Planeten",
        subtitle: "Wie die Welten des Sonnensystems entstanden.",
        planets: [
            ["Merkur", "Merkur entstand im inneren Bereich des jungen Sonnensystems. Die hohe Temperatur verhinderte, dass er große Mengen leichter Stoffe behalten konnte. So wurde er zu einer kleinen Gesteinswelt mit einem großen Metallkern."],
            ["Venus", "Die Venus entstand aus Material der protoplanetaren Scheibe in der Nähe der Erde. Sie wuchs allmählich durch Zusammenstöße von Planetesimalen und anderen kleinen Körpern und entwickelte später eine dichte Atmosphäre."],
            ["Erde", "Die Erde entstand vor etwa 4,5 Milliarden Jahren durch zahlreiche Zusammenstöße junger Himmelskörper. Mit der Zeit bildeten sich Kern, Mantel und Kruste sowie später Ozeane und eine Atmosphäre."],
            ["Mars", "Der Mars entstand im kälteren äußeren Bereich der Region der Gesteinsplaneten. Er war deutlich kleiner als die Erde und verlor deshalb schneller seine innere Wärme. In der fernen Vergangenheit gab es flüssiges Wasser auf seiner Oberfläche."],
            ["Jupiter", "Der Jupiter begann sich weit von der Sonne entfernt zu bilden, wo es kalt genug für die Ansammlung von Eis war. Sein massereicher Kern zog große Mengen Gas an und machte ihn zum größten Planetenriesen des Sonnensystems."],
            ["Saturn", "Der Saturn entstand im kalten äußeren Bereich der protoplanetaren Scheibe. Er sammelte große Mengen Wasserstoff und Helium. Später entstand um ihn ein komplexes Ringsystem aus Eis und Gesteinspartikeln."],
            ["Uranus", "Der Uranus entstand weit von der Sonne entfernt aus einer Mischung aus Gestein, Eis und Gasen. Er gehört zu den Eisriesen. Große Zusammenstöße in seiner frühen Geschichte könnten die ungewöhnliche Neigung seiner Achse beeinflusst haben."],
            ["Neptun", "Der Neptun entstand in der kalten äußeren Region des Sonnensystems. Er besteht aus dichtem innerem Material, das reich an Wasser und anderen flüchtigen Verbindungen ist, und ist von einer Gasatmosphäre umgeben."],
            ["Pluto", "Pluto entstand in einer fernen Region jenseits der Neptunbahn. Er gehört zu den größeren bekannten Körpern des Kuipergürtels und ist ein Zwergplanet. Seine Oberfläche enthält verschiedene Arten von Eis."]
        ]
    },

    fr: {
        title: "🪐 Histoire des planètes",
        subtitle: "Comment les mondes du Système solaire se sont formés.",
        planets: [
            ["Mercure", "Mercure s'est formée dans la partie interne du jeune Système solaire. La température élevée l'a empêchée de conserver de grandes quantités de substances légères. Elle est ainsi devenue un petit monde rocheux doté d'un grand noyau métallique."],
            ["Vénus", "Vénus est née du matériau du disque protoplanétaire près de la Terre. Elle a progressivement grandi grâce aux collisions entre planétésimaux et autres petits corps, puis a développé une atmosphère dense."],
            ["Terre", "La Terre s'est formée il y a environ 4,5 milliards d'années à la suite de nombreuses collisions entre de jeunes corps célestes. Elle s'est ensuite différenciée en noyau, manteau et croûte, puis des océans et une atmosphère sont apparus."],
            ["Mars", "Mars s'est formée dans la partie externe plus froide de la région des planètes rocheuses. Elle était beaucoup plus petite que la Terre et a donc perdu sa chaleur interne plus rapidement. Dans un passé lointain, de l'eau liquide existait à sa surface."],
            ["Jupiter", "Jupiter a commencé à se former loin du Soleil, dans une région suffisamment froide pour permettre l'accumulation de glace. Son noyau massif a attiré de grandes quantités de gaz, donnant naissance à la plus grande planète géante du Système solaire."],
            ["Saturne", "Saturne s'est formée dans la partie externe froide du disque protoplanétaire. Elle a accumulé de grandes quantités d'hydrogène et d'hélium. Plus tard, un système complexe d'anneaux composé de glace et de particules rocheuses s'est formé autour d'elle."],
            ["Uranus", "Uranus s'est formée loin du Soleil à partir d'un mélange de matériaux rocheux, de glaces et de gaz. Elle fait partie des géantes de glace. De grandes collisions au début de son histoire pourraient avoir influencé l'inclinaison inhabituelle de son axe."],
            ["Neptune", "Neptune s'est formée dans la région externe froide du Système solaire. Elle est constituée d'une matière interne dense riche en eau et autres composés volatils, entourée d'une atmosphère gazeuse."],
            ["Pluton", "Pluton s'est formée dans une région lointaine au-delà de l'orbite de Neptune. Elle est l'un des plus grands corps connus de la ceinture de Kuiper et est classée comme planète naine. Sa surface contient différents types de glace."]
        ]
    },

    es: {
        title: "🪐 Historia de los planetas",
        subtitle: "Cómo se formaron los mundos del Sistema Solar.",
        planets: [
            ["Mercurio", "Mercurio se formó en la parte interior del joven Sistema Solar. La alta temperatura no le permitió conservar grandes cantidades de sustancias ligeras, por lo que se convirtió en un pequeño mundo rocoso con un gran núcleo metálico."],
            ["Venus", "Venus se formó a partir del material del disco protoplanetario cerca de la Tierra. Creció gradualmente mediante colisiones entre planetesimales y otros cuerpos pequeños y más tarde desarrolló una atmósfera densa."],
            ["Tierra", "La Tierra se formó hace unos 4.500 millones de años a partir de numerosas colisiones entre cuerpos jóvenes. Con el tiempo se diferenciaron su núcleo, manto y corteza, y posteriormente aparecieron océanos y una atmósfera."],
            ["Marte", "Marte se formó en la parte exterior más fría de la región de los planetas rocosos. Era mucho más pequeño que la Tierra y por eso perdió su calor interno más rápidamente. En el pasado lejano hubo agua líquida en su superficie."],
            ["Júpiter", "Júpiter comenzó a formarse lejos del Sol, donde hacía suficiente frío para acumular hielo. Su enorme núcleo atrajo grandes cantidades de gas, dando lugar al mayor gigante planetario del Sistema Solar."],
            ["Saturno", "Saturno se formó en la parte exterior y fría del disco protoplanetario. Acumuló grandes cantidades de hidrógeno y helio. Más tarde se formó a su alrededor un complejo sistema de anillos de hielo y partículas rocosas."],
            ["Urano", "Urano se formó lejos del Sol a partir de una mezcla de materiales rocosos, hielos y gases. Es un gigante helado. Grandes colisiones durante su historia temprana pudieron influir en la inclinación inusual de su eje."],
            ["Neptuno", "Neptuno se formó en la fría región exterior del Sistema Solar. Está compuesto por material interno denso, rico en agua y otros compuestos volátiles, rodeado por una atmósfera gaseosa."],
            ["Plutón", "Plutón se formó en una región distante más allá de la órbita de Neptuno. Es uno de los cuerpos grandes conocidos del cinturón de Kuiper y está clasificado como planeta enano. Su superficie contiene distintos tipos de hielo."]
        ]
    },

    it: {
        title: "🪐 Storia dei pianeti",
        subtitle: "Come si sono formati i mondi del Sistema Solare.",
        planets: [
            ["Mercurio", "Mercurio si è formato nella parte interna del giovane Sistema Solare. L'alta temperatura non gli ha permesso di conservare grandi quantità di sostanze leggere, quindi è diventato un piccolo mondo roccioso con un grande nucleo metallico."],
            ["Venere", "Venere si è formata dal materiale del disco protoplanetario vicino alla Terra. È cresciuta gradualmente attraverso collisioni tra planetesimi e altri piccoli corpi e in seguito ha sviluppato una densa atmosfera."],
            ["Terra", "La Terra si è formata circa 4,5 miliardi di anni fa attraverso numerose collisioni tra giovani corpi celesti. Nel tempo si sono formati nucleo, mantello e crosta, seguiti dalla comparsa di oceani e atmosfera."],
            ["Marte", "Marte si è formato nella parte esterna e più fredda della regione dei pianeti rocciosi. Era molto più piccolo della Terra e per questo perse più rapidamente il proprio calore interno. In un lontano passato sulla sua superficie esisteva acqua liquida."],
            ["Giove", "Giove iniziò a formarsi lontano dal Sole, dove faceva abbastanza freddo da permettere l'accumulo di ghiaccio. Il suo enorme nucleo attirò grandi quantità di gas, dando origine al più grande gigante planetario del Sistema Solare."],
            ["Saturno", "Saturno si formò nella parte esterna e fredda del disco protoplanetario. Accumulò grandi quantità di idrogeno ed elio. In seguito attorno al pianeta si formò un complesso sistema di anelli composto da ghiaccio e particelle rocciose."],
            ["Urano", "Urano si formò lontano dal Sole da una miscela di materiali rocciosi, ghiacci e gas. È classificato come gigante ghiacciato. Grandi collisioni nella sua storia iniziale potrebbero aver influenzato l'insolita inclinazione del suo asse."],
            ["Nettuno", "Nettuno si formò nella fredda regione esterna del Sistema Solare. È composto da materiale interno denso, ricco di acqua e altri composti volatili, circondato da un'atmosfera gassosa."],
            ["Plutone", "Plutone si formò in una regione lontana oltre l'orbita di Nettuno. È uno dei corpi più grandi conosciuti della fascia di Kuiper ed è classificato come pianeta nano. La sua superficie contiene diversi tipi di ghiaccio."]
        ]
    }
};
function updatePlanetHistory() {
    const data =
        planetHistoryTranslations[kainLanguage] ||
        planetHistoryTranslations.ru;

    const title = document.getElementById("planetsHistoryTitle");
    const subtitle = document.getElementById("planetsHistorySubtitle");

    if (title) {
        title.textContent = data.title;
    }

    if (subtitle) {
        subtitle.textContent = data.subtitle;
    }

    const ids = [
        "Mercury",
        "Venus",
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune",
        "Pluto"
    ];

    data.planets.forEach((planet, index) => {
        const titleElement =
            document.getElementById(
                `planet${ids[index]}Title`
            );

        const textElement =
            document.getElementById(
                `planet${ids[index]}Text`
            );

        if (titleElement) {
            titleElement.textContent = planet[0];
        }

        if (textElement) {
            textElement.textContent = planet[1];
        }
    });
}


function setKainLanguage(lang) {

    if (!kainTranslations[lang]) {
        return;
    }

    kainLanguage = lang;

    localStorage.setItem(
        "siteLanguage",
        lang
    );

    updateKainPage();
}


function updateKainPage() {
    updatePlanetHistory();

    const t =
        kainTranslations[kainLanguage] ||
        kainTranslations.ru;

    document.documentElement.lang =
        kainLanguage;

    const title =
        document.getElementById("kainTitle");

    const subtitle =
        document.getElementById("kainSubtitle");

    const back =
        document.getElementById("backLink");

    const footer =
        document.getElementById("kainFooter");

    if (title) {
        title.textContent = t.title;
    }

    if (subtitle) {
        subtitle.textContent = t.subtitle;
    }

    if (back) {
        back.textContent = t.back;
    }

    if (footer) {
        footer.textContent = t.footer;
    }

    const headings =
        document.querySelectorAll(
            ".history-card h2"
        );

    const paragraphs =
        document.querySelectorAll(
            ".history-card p"
        );

    headings.forEach((element, index) => {

        if (t.cards[index]) {
            element.textContent =
                t.cards[index];
        }

    });

    paragraphs.forEach((element, index) => {

        if (t.texts[index]) {
            element.textContent =
                t.texts[index];
        }

    });

}


document.addEventListener(
    "DOMContentLoaded",
    () => {

        const savedLanguage =
            localStorage.getItem("siteLanguage") ||
            "ru";

        kainLanguage =
            kainTranslations[savedLanguage]
                ? savedLanguage
                : "ru";

        updateKainPage();

    }
);