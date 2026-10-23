(() => {
    "use strict";

    const LANG_KEY = "siteLanguage";

    const translations = {
        "Солнце": ["Sun", "Soleil", "Sonne", "Sol", "Sole", "Słońce", "Zon", "Күн", "Slunce"],
        "Земля": ["Earth", "Terre", "Erde", "Tierra", "Terra", "Ziemia", "Aarde", "Жер", "Země"],
        "Марс": ["Mars", "Mars", "Mars", "Marte", "Marte", "Mars", "Mars", "Марс", "Mars"],
        "Плутон": ["Pluto", "Pluton", "Pluto", "Plutón", "Plutone", "Pluton", "Pluto", "Плутон", "Pluto"],
        "Луна": ["Moon", "Lune", "Mond", "Luna", "Luna", "Księżyc", "Maan", "Ай", "Měsíc"],
        "Юпитер": ["Jupiter", "Jupiter", "Jupiter", "Júpiter", "Giove", "Jowisz", "Jupiter", "Юпитер", "Jupiter"],
        "Сатурн": ["Saturn", "Saturne", "Saturn", "Saturno", "Saturno", "Saturn", "Saturnus", "Сатурн", "Saturn"],
        "Нептун": ["Neptune", "Neptune", "Neptun", "Neptuno", "Nettuno", "Neptun", "Neptunus", "Нептун", "Neptun"],
        "Меркурий": ["Mercury", "Mercure", "Merkur", "Mercurio", "Mercurio", "Merkury", "Mercurius", "Меркурий", "Merkur"],
        "Венера": ["Venus", "Vénus", "Venus", "Venus", "Venere", "Wenus", "Venus", "Шолпан", "Venuše"],
        "Уран": ["Uranus", "Uranus", "Uranus", "Urano", "Urano", "Uran", "Uranus", "Уран", "Uran"],

        "🌌 Космический атлас": ["🌌 Space Atlas", "🌌 Atlas spatial", "🌌 Weltraumatlas", "🌌 Atlas espacial", "🌌 Atlante spaziale", "🌌 Atlas kosmiczny", "🌌 Ruimteatlas", "🌌 Ғарыш атласы", "🌌 Vesmírný atlas"],
        "Назад": ["Back", "Retour", "Zurück", "Volver", "Indietro", "Wróć", "Terug", "Артқа", "Zpět"],
        "← Назад": ["← Back", "← Retour", "← Zurück", "← Volver", "← Indietro", "← Wróć", "← Terug", "← Артқа", "← Zpět"],
        "Исследуй космос!": ["Explore space!", "Explore l’espace !", "Erkunde das Weltall!", "¡Explora el espacio!", "Esplora lo spazio!", "Odkrywaj kosmos!", "Verken de ruimte!", "Ғарышты зертте!", "Prozkoumej vesmír!"],
        "Исследуй Солнечную систему": ["Explore the Solar System", "Explore le système solaire", "Erkunde das Sonnensystem", "Explora el sistema solar", "Esplora il Sistema Solare", "Odkrywaj Układ Słoneczny", "Verken het zonnestelsel", "Күн жүйесін зертте", "Prozkoumej Sluneční soustavu"],
        "Космические объекты": ["Space objects", "Objets spatiaux", "Himmelsobjekte", "Objetos espaciales", "Oggetti spaziali", "Obiekty kosmiczne", "Ruimteobjecten", "Ғарыш нысандары", "Vesmírné objekty"],
        "Узнай больше": ["Learn more", "En savoir plus", "Mehr erfahren", "Saber más", "Scopri di più", "Dowiedz się więcej", "Meer informatie", "Көбірек білу", "Zjistit více"],
        "Подробнее": ["More details", "Plus de détails", "Mehr Details", "Más detalles", "Maggiori dettagli", "Więcej szczegółów", "Meer details", "Толығырақ", "Více podrobností"],
        "Закрыть": ["Close", "Fermer", "Schließen", "Cerrar", "Chiudi", "Zamknij", "Sluiten", "Жабу", "Zavřít"],
        "🔍 Поиск": ["🔍 Search", "🔍 Rechercher", "🔍 Suchen", "🔍 Buscar", "🔍 Cerca", "🔍 Szukaj", "🔍 Zoeken", "🔍 Іздеу", "🔍 Hledat"],
        "Поиск": ["Search", "Rechercher", "Suchen", "Buscar", "Cerca", "Szukaj", "Zoeken", "Іздеу", "Hledat"],
        "🏆 Космические достижения": ["🏆 Space achievements", "🏆 Succès spatiaux", "🏆 Weltraum-Erfolge", "🏆 Logros espaciales", "🏆 Obiettivi spaziali", "🏆 Osiągnięcia kosmiczne", "🏆 Ruimteprestaties", "🏆 Ғарыш жетістіктері", "🏆 Vesmírné úspěchy"],
        "Первый исследователь": ["First Explorer", "Premier explorateur", "Erster Entdecker", "Primer explorador", "Primo esploratore", "Pierwszy odkrywca", "Eerste ontdekkingsreiziger", "Алғашқы зерттеуші", "První průzkumník"],
        "Исследователь планет": ["Planet Explorer", "Explorateur de planètes", "Planetenforscher", "Explorador de planetas", "Esploratore di pianeti", "Odkrywca planet", "Planeetverkenner", "Ғаламшар зерттеушісі", "Průzkumník planet"],
        "Знаток гигантов": ["Giant Expert", "Expert des géantes", "Riesenexperte", "Experto en gigantes", "Esperto dei giganti", "Ekspert olbrzymów", "Reuzenexpert", "Алыптар білгірі", "Expert na obry"],
        "Путешественник": ["Space Traveler", "Voyageur spatial", "Weltraumreisender", "Viajero espacial", "Viaggiatore spaziale", "Podróżnik kosmiczny", "Ruimtereiziger", "Ғарыш саяхатшысы", "Vesmírný cestovatel"],
        "Солнечный знаток": ["Solar Expert", "Expert solaire", "Sonnenexperte", "Experto solar", "Esperto solare", "Ekspert Układu Słonecznego", "Zonexpert", "Күн жүйесінің білгірі", "Expert na Slunce"],
        "Охотник за ледяными мирами": ["Ice World Hunter", "Chasseur de mondes glacés", "Jäger eisiger Welten", "Cazador de mundos helados", "Cacciatore di mondi ghiacciati", "Łowca lodowych światów", "Jager van ijswerelden", "Мұзды әлемдердің аңшысы", "Lovec ledových světů"],
        "Хранитель спутников": ["Moon Keeper", "Gardien des lunes", "Mondhüter", "Guardián de las lunas", "Custode delle lune", "Strażnik księżyców", "Maanbewaker", "Серіктер сақшысы", "Strážce měsíců"],
        "Великий исследователь": ["Grand Explorer", "Grand explorateur", "Großer Entdecker", "Gran explorador", "Grande esploratore", "Wielki odkrywca", "Grote ontdekkingsreiziger", "Ұлы зерттеуші", "Velký průzkumník"],
        "Гений космоса": ["Space Genius", "Génie de l’espace", "Weltraumgenie", "Genio del espacio", "Genio dello spazio", "Kosmiczny geniusz", "Ruimtegenie", "Ғарыш данышпаны", "Vesmírný génius"],
        "Покоритель космоса": ["Conqueror of Space", "Conquérant de l’espace", "Bezwinger des Weltraums", "Conquistador del espacio", "Conquistatore dello spazio", "Zdobywca kosmosu", "Overwinnaar van de ruimte", "Ғарыш бағындырушысы", "Dobyvatel vesmíru"],
        "Изучи любые три объекта.": ["Explore any three objects.", "Explore trois objets au choix.", "Erkunde beliebige drei Objekte.", "Explora tres objetos cualesquiera.", "Esplora tre oggetti a scelta.", "Zbadaj dowolne trzy obiekty.", "Verken drie willekeurige objecten.", "Кез келген үш нысанды зертте.", "Prozkoumej libovolné tři objekty."],
        "Изучи Солнце, Землю, Марс и Юпитер.": ["Explore the Sun, Earth, Mars and Jupiter.", "Explore le Soleil, la Terre, Mars et Jupiter.", "Erkunde die Sonne, die Erde, den Mars und den Jupiter.", "Explora el Sol, la Tierra, Marte y Júpiter.", "Esplora il Sole, la Terra, Marte e Giove.", "Zbadaj Słońce, Ziemię, Marsa i Jowisza.", "Verken de zon, de aarde, Mars en Jupiter.", "Күнді, Жерді, Марсты және Юпитерді зертте.", "Prozkoumej Slunce, Zemi, Mars a Jupiter."],
        "Изучи Юпитер, Сатурн и Нептун.": ["Explore Jupiter, Saturn and Neptune.", "Explore Jupiter, Saturne et Neptune.", "Erkunde Jupiter, Saturn und Neptun.", "Explora Júpiter, Saturno y Neptuno.", "Esplora Giove, Saturno e Nettuno.", "Zbadaj Jowisza, Saturna i Neptuna.", "Verken Jupiter, Saturnus en Neptunus.", "Юпитерді, Сатурнды және Нептунды зертте.", "Prozkoumej Jupiter, Saturn a Neptun."],
        "Исследуй семь объектов.": ["Explore seven objects.", "Explore sept objets.", "Erkunde sieben Objekte.", "Explora siete objetos.", "Esplora sette oggetti.", "Zbadaj siedem obiektów.", "Verken zeven objecten.", "Жеті нысанды зертте.", "Prozkoumej sedm objektů."],
        "Изучи Солнце и все восемь планет.": ["Explore the Sun and all eight planets.", "Explore le Soleil et les huit planètes.", "Erkunde die Sonne und alle acht Planeten.", "Explora el Sol y los ocho planetas.", "Esplora il Sole e tutti gli otto pianeti.", "Zbadaj Słońce i wszystkie osiem planet.", "Verken de zon en alle acht planeten.", "Күнді және сегіз ғаламшардың бәрін зертте.", "Prozkoumej Slunce a všech osm planet."],
        "Изучи Плутон и Нептун.": ["Explore Pluto and Neptune.", "Explore Pluton et Neptune.", "Erkunde Pluto und Neptun.", "Explora Plutón y Neptuno.", "Esplora Plutone e Nettuno.", "Zbadaj Plutona i Neptuna.", "Verken Pluto en Neptunus.", "Плутон мен Нептунды зертте.", "Prozkoumej Pluto a Neptun."],
        "Изучи Луну.": ["Explore the Moon.", "Explore la Lune.", "Erkunde den Mond.", "Explora la Luna.", "Esplora la Luna.", "Zbadaj Księżyc.", "Verken de maan.", "Айды зертте.", "Prozkoumej Měsíc."],
        "Изучи все объекты, представленные в атласе.": ["Explore every object in the atlas.", "Explore tous les objets de l’atlas.", "Erkunde alle Objekte im Atlas.", "Explora todos los objetos del atlas.", "Esplora tutti gli oggetti dell’atlante.", "Zbadaj wszystkie obiekty w atlasie.", "Verken alle objecten in de atlas.", "Атластағы барлық нысанды зертте.", "Prozkoumej všechny objekty v atlasu."],
        "Ответь правильно на все 10 вопросов викторины.": ["Answer all 10 quiz questions correctly.", "Réponds correctement aux 10 questions du quiz.", "Beantworte alle 10 Quizfragen richtig.", "Responde correctamente a las 10 preguntas del cuestionario.", "Rispondi correttamente a tutte le 10 domande del quiz.", "Odpowiedz poprawnie na wszystkie 10 pytań quizu.", "Beantwoord alle 10 quizvragen goed.", "Викторинаның 10 сұрағына да дұрыс жауап бер.", "Správně odpověz na všech 10 otázek kvízu."],
        "Победи космического босса.": ["Defeat the space boss.", "Bats le boss spatial.", "Besiege den Weltraum-Boss.", "Derrota al jefe espacial.", "Sconfiggi il boss spaziale.", "Pokonaj kosmicznego bossa.", "Versla de ruimtebaas.", "Ғарыш бастығын жең.", "Poraz vesmírného bosse."],
        " — открыто!": [" — unlocked!", " — débloqué !", " — freigeschaltet!", " — ¡desbloqueado!", " — sbloccato!", " — odblokowane!", " — ontgrendeld!", " — ашылды!", " — odemčeno!"],
        " — закрыто": [" — locked", " — verrouillé", " — gesperrt", " — bloqueado", " — bloccato", " — zablokowane", " — vergrendeld", " — жабық", " — zamčeno"],
        "🔊 Звук включён": ["🔊 Sound on", "🔊 Son activé", "🔊 Ton an", "🔊 Sonido activado", "🔊 Audio attivo", "🔊 Dźwięk włączony", "🔊 Geluid aan", "🔊 Дыбыс қосулы", "🔊 Zvuk zapnutý"],
        "🔇 Звук выключен": ["🔇 Sound off", "🔇 Son désactivé", "🔇 Ton aus", "🔇 Sonido desactivado", "🔇 Audio disattivato", "🔇 Dźwięk wyłączony", "🔇 Geluid uit", "🔇 Дыбыс өшірулі", "🔇 Zvuk vypnutý"],
        "🧪 Проверить звуки": ["🧪 Test sounds", "🧪 Tester les sons", "🧪 Töne testen", "🧪 Probar sonidos", "🧪 Prova i suoni", "🧪 Testuj dźwięki", "🧪 Geluiden testen", "🧪 Дыбыстарды тексеру", "🧪 Otestovat zvuky"]
    };

    // Индексы: английский, французский, немецкий, испанский,
    // итальянский, польский, нидерландский, казахский, чешский.
    const languageIndex = {
        en: 0, fr: 1, de: 2, es: 3, it: 4,
        pl: 5, nl: 6, kk: 7, cs: 8
    };

    const objectDescriptions = {
        "Солнце": {
            ru: "Солнце — звезда в центре Солнечной системы. Его свет и тепло важны для жизни на Земле.",
            en: "The Sun is the star at the centre of the Solar System. Its light and heat are essential for life on Earth.",
            fr: "Le Soleil est l’étoile au centre du Système solaire. Sa lumière et sa chaleur sont essentielles à la vie sur Terre.",
            de: "Die Sonne ist der Stern im Zentrum des Sonnensystems. Ihr Licht und ihre Wärme sind für das Leben auf der Erde wichtig.",
            es: "El Sol es la estrella situada en el centro del sistema solar. Su luz y su calor son esenciales para la vida en la Tierra.",
            it: "Il Sole è la stella al centro del Sistema solare. La sua luce e il suo calore sono fondamentali per la vita sulla Terra.",
            pl: "Słońce to gwiazda w centrum Układu Słonecznego. Jego światło i ciepło są niezbędne do życia na Ziemi.",
            nl: "De zon is de ster in het midden van het zonnestelsel. Haar licht en warmte zijn belangrijk voor het leven op aarde.",
            kk: "Күн — Күн жүйесінің орталығындағы жұлдыз. Оның жарығы мен жылуы Жердегі тіршілік үшін маңызды.",
            cs: "Slunce je hvězda ve středu Sluneční soustavy. Jeho světlo a teplo jsou důležité pro život na Zemi."
        },
        "Земля": {
            ru: "Земля — третья планета от Солнца. На ней существуют океаны, материки и известная нам жизнь.",
            en: "Earth is the third planet from the Sun. It has oceans, continents and the life we know.",
            fr: "La Terre est la troisième planète à partir du Soleil. Elle possède des océans, des continents et la vie que nous connaissons.",
            de: "Die Erde ist der dritte Planet von der Sonne. Sie besitzt Ozeane, Kontinente und das uns bekannte Leben.",
            es: "La Tierra es el tercer planeta desde el Sol. Tiene océanos, continentes y la vida que conocemos.",
            it: "La Terra è il terzo pianeta dal Sole. Ha oceani, continenti e la vita che conosciamo.",
            pl: "Ziemia to trzecia planeta od Słońca. Ma oceany, kontynenty i znane nam życie.",
            nl: "De aarde is de derde planeet vanaf de zon. Er zijn oceanen, continenten en het leven dat we kennen.",
            kk: "Жер — Күннен кейінгі үшінші ғаламшар. Онда мұхиттар, құрлықтар және біз білетін тіршілік бар.",
            cs: "Země je třetí planeta od Slunce. Má oceány, kontinenty a život, který známe."
        },
        "Марс": {
            ru: "Марс — четвёртая планета от Солнца. На нём есть гигантские вулканы, каньоны и полярные ледяные шапки.",
            en: "Mars is the fourth planet from the Sun. It has giant volcanoes, canyons and polar ice caps.",
            fr: "Mars est la quatrième planète à partir du Soleil. On y trouve des volcans géants, des canyons et des calottes glaciaires polaires.",
            de: "Mars ist der vierte Planet von der Sonne. Dort gibt es riesige Vulkane, Schluchten und Polkappen aus Eis.",
            es: "Marte es el cuarto planeta desde el Sol. Tiene volcanes gigantes, cañones y casquetes polares de hielo.",
            it: "Marte è il quarto pianeta dal Sole. Ha vulcani giganteschi, canyon e calotte polari ghiacciate.",
            pl: "Mars to czwarta planeta od Słońca. Znajdują się na nim olbrzymie wulkany, kaniony i polarne czapy lodowe.",
            nl: "Mars is de vierde planeet vanaf de zon. Er zijn reusachtige vulkanen, ravijnen en ijskappen bij de polen.",
            kk: "Марс — Күннен кейінгі төртінші ғаламшар. Онда алып жанартаулар, шатқалдар және полярлық мұз жамылғылары бар.",
            cs: "Mars je čtvrtá planeta od Slunce. Má obří sopky, kaňony a polární ledové čepičky."
        },
        "Плутон": {
            ru: "Плутон — карликовая планета в поясе Койпера. У него пять известных спутников.",
            en: "Pluto is a dwarf planet in the Kuiper Belt. It has five known moons.",
            fr: "Pluton est une planète naine de la ceinture de Kuiper. Il possède cinq satellites connus.",
            de: "Pluto ist ein Zwergplanet im Kuipergürtel. Er hat fünf bekannte Monde.",
            es: "Plutón es un planeta enano del cinturón de Kuiper. Tiene cinco lunas conocidas.",
            it: "Plutone è un pianeta nano della fascia di Kuiper. Ha cinque lune conosciute.",
            pl: "Pluton to planeta karłowata w Pasie Kuipera. Ma pięć znanych księżyców.",
            nl: "Pluto is een dwergplaneet in de Kuipergordel. Hij heeft vijf bekende manen.",
            kk: "Плутон — Койпер белдеуіндегі ергежейлі ғаламшар. Оның бес белгілі серігі бар.",
            cs: "Pluto je trpasličí planeta v Kuiperově pásu. Má pět známých měsíců."
        },
        "Луна": {
            ru: "Луна — естественный спутник Земли. Её поверхность покрыта кратерами, а гравитация влияет на приливы и отливы.",
            en: "The Moon is Earth's natural satellite. Its surface is covered in craters, and its gravity affects the tides.",
            fr: "La Lune est le satellite naturel de la Terre. Sa surface est couverte de cratères et sa gravité influence les marées.",
            de: "Der Mond ist der natürliche Satellit der Erde. Seine Oberfläche ist voller Krater, und seine Schwerkraft beeinflusst die Gezeiten.",
            es: "La Luna es el satélite natural de la Tierra. Su superficie está cubierta de cráteres y su gravedad influye en las mareas.",
            it: "La Luna è il satellite naturale della Terra. La sua superficie è ricoperta di crateri e la sua gravità influenza le maree.",
            pl: "Księżyc jest naturalnym satelitą Ziemi. Jego powierzchnia jest pokryta kraterami, a grawitacja wpływa na pływy.",
            nl: "De maan is de natuurlijke satelliet van de aarde. Het oppervlak zit vol kraters en de zwaartekracht beïnvloedt het getij.",
            kk: "Ай — Жердің табиғи серігі. Оның беті кратерлерге толы, ал тартылыс күші судың толысуы мен қайтуына әсер етеді.",
            cs: "Měsíc je přirozenou družicí Země. Jeho povrch pokrývají krátery a jeho gravitace ovlivňuje příliv a odliv."
        },
        "Юпитер": {
            ru: "Юпитер — крупнейшая планета Солнечной системы. На нём находится Большое красное пятно — гигантский атмосферный вихрь.",
            en: "Jupiter is the largest planet in the Solar System. Its Great Red Spot is a gigantic atmospheric storm.",
            fr: "Jupiter est la plus grande planète du Système solaire. Sa Grande Tache rouge est une gigantesque tempête atmosphérique.",
            de: "Jupiter ist der größte Planet des Sonnensystems. Sein Großer Roter Fleck ist ein gewaltiger Wirbelsturm in der Atmosphäre.",
            es: "Júpiter es el planeta más grande del sistema solar. Su Gran Mancha Roja es una gigantesca tormenta atmosférica.",
            it: "Giove è il pianeta più grande del Sistema solare. La Grande Macchia Rossa è un'enorme tempesta atmosferica.",
            pl: "Jowisz jest największą planetą Układu Słonecznego. Wielka Czerwona Plama to ogromny wir atmosferyczny.",
            nl: "Jupiter is de grootste planeet van het zonnestelsel. De Grote Rode Vlek is een gigantische storm in de atmosfeer.",
            kk: "Юпитер — Күн жүйесіндегі ең үлкен ғаламшар. Ондағы Үлкен қызыл дақ — алып атмосфералық құйын.",
            cs: "Jupiter je největší planeta Sluneční soustavy. Jeho Velká rudá skvrna je obrovská atmosférická bouře."
        },
        "Сатурн": {
            ru: "Сатурн — газовый гигант со знаменитой системой колец.",
            en: "Saturn is a gas giant famous for its ring system.",
            fr: "Saturne est une géante gazeuse célèbre pour son système d’anneaux.",
            de: "Saturn ist ein Gasriese, der für sein Ringsystem bekannt ist.",
            es: "Saturno es un gigante gaseoso famoso por su sistema de anillos.",
            it: "Saturno è un gigante gassoso famoso per il suo sistema di anelli.",
            pl: "Saturn to gazowy olbrzym znany ze swojego systemu pierścieni.",
            nl: "Saturnus is een gasreus die bekendstaat om zijn ringenstelsel.",
            kk: "Сатурн — сақиналар жүйесімен танымал газ алыбы.",
            cs: "Saturn je plynný obr známý svou soustavou prstenců."
        },
        "Нептун": {
            ru: "Нептун — восьмая планета от Солнца. Это ледяной гигант с очень быстрыми ветрами.",
            en: "Neptune is the eighth planet from the Sun. It is an ice giant with extremely fast winds.",
            fr: "Neptune est la huitième planète à partir du Soleil. C’est une géante glacée aux vents extrêmement rapides.",
            de: "Neptun ist der achte Planet von der Sonne. Er ist ein Eisriese mit extrem schnellen Winden.",
            es: "Neptuno es el octavo planeta desde el Sol. Es un gigante helado con vientos extremadamente rápidos.",
            it: "Nettuno è l'ottavo pianeta dal Sole. È un gigante ghiacciato con venti estremamente veloci.",
            pl: "Neptun to ósma planeta od Słońca. Jest lodowym olbrzymem z niezwykle szybkimi wiatrami.",
            nl: "Neptunus is de achtste planeet vanaf de zon. Het is een ijsreus met extreem snelle winden.",
            kk: "Нептун — Күннен кейінгі сегізінші ғаламшар. Ол өте жылдам желдері бар мұз алыбы.",
            cs: "Neptun je osmá planeta od Slunce. Je to ledový obr s mimořádně rychlými větry."
        },
        "Меркурий": {
            ru: "Меркурий — ближайшая к Солнцу и самая маленькая планета Солнечной системы. У него почти нет атмосферы.",
            en: "Mercury is the closest planet to the Sun and the smallest in the Solar System. It has almost no atmosphere.",
            fr: "Mercure est la planète la plus proche du Soleil et la plus petite du Système solaire. Son atmosphère est presque inexistante.",
            de: "Merkur ist der sonnennächste und kleinste Planet des Sonnensystems. Er hat fast keine Atmosphäre.",
            es: "Mercurio es el planeta más cercano al Sol y el más pequeño del sistema solar. Casi no tiene atmósfera.",
            it: "Mercurio è il pianeta più vicino al Sole e il più piccolo del Sistema solare. Ha un'atmosfera quasi inesistente.",
            pl: "Merkury jest najbliższą Słońcu i najmniejszą planetą Układu Słonecznego. Prawie nie ma atmosfery.",
            nl: "Mercurius is de planeet die het dichtst bij de zon staat en de kleinste planeet van het zonnestelsel. Hij heeft bijna geen atmosfeer.",
            kk: "Меркурий — Күнге ең жақын әрі Күн жүйесіндегі ең кішкентай ғаламшар. Оның атмосферасы дерлік жоқ.",
            cs: "Merkur je nejbližší planeta ke Slunci a nejmenší planeta Sluneční soustavy. Téměř nemá atmosféru."
        },
        "Венера": {
            ru: "Венера — вторая планета от Солнца. Её плотная атмосфера удерживает тепло, делая её самой горячей планетой Солнечной системы.",
            en: "Venus is the second planet from the Sun. Its dense atmosphere traps heat, making it the hottest planet in the Solar System.",
            fr: "Vénus est la deuxième planète à partir du Soleil. Son atmosphère dense retient la chaleur, ce qui en fait la planète la plus chaude du Système solaire.",
            de: "Venus ist der zweite Planet von der Sonne. Ihre dichte Atmosphäre hält Wärme zurück und macht sie zum heißesten Planeten des Sonnensystems.",
            es: "Venus es el segundo planeta desde el Sol. Su densa atmósfera retiene el calor y la convierte en el planeta más caliente del sistema solar.",
            it: "Venere è il secondo pianeta dal Sole. La sua densa atmosfera trattiene il calore e la rende il pianeta più caldo del Sistema solare.",
            pl: "Wenus jest drugą planetą od Słońca. Jej gęsta atmosfera zatrzymuje ciepło, czyniąc ją najgorętszą planetą Układu Słonecznego.",
            nl: "Venus is de tweede planeet vanaf de zon. Haar dichte atmosfeer houdt warmte vast, waardoor ze de heetste planeet van het zonnestelsel is.",
            kk: "Шолпан — Күннен кейінгі екінші ғаламшар. Оның тығыз атмосферасы жылуды ұстап, оны Күн жүйесіндегі ең ыстық ғаламшар етеді.",
            cs: "Venuše je druhá planeta od Slunce. Její hustá atmosféra zadržuje teplo, a proto je nejteplejší planetou Sluneční soustavy."
        },
        "Уран": {
            ru: "Уран — ледяной гигант с голубовато-зелёным цветом. Его ось вращения сильно наклонена, поэтому кажется, что планета вращается на боку.",
            en: "Uranus is an ice giant with a blue-green colour. Its axis is tilted so far that it appears to rotate on its side.",
            fr: "Uranus est une géante glacée de couleur bleu-vert. Son axe est tellement incliné qu’elle semble tourner sur le côté.",
            de: "Uranus ist ein Eisriese mit blaugrüner Farbe. Seine Achse ist so stark geneigt, dass er scheinbar auf der Seite rotiert.",
            es: "Urano es un gigante helado de color azul verdoso. Su eje está tan inclinado que parece girar de lado.",
            it: "Urano è un gigante ghiacciato dal colore verde-azzurro. Il suo asse è così inclinato che sembra ruotare su un fianco.",
            pl: "Uran to lodowy olbrzym o niebieskozielonej barwie. Jego oś jest tak mocno nachylona, że planeta zdaje się obracać na boku.",
            nl: "Uranus is een ijsreus met een blauwgroene kleur. Zijn as is zo sterk gekanteld dat hij op zijn kant lijkt te draaien.",
            kk: "Уран — көгілдір-жасыл түсті мұз алыбы. Оның айналу осі қатты еңкейгендіктен, ғаламшар бүйірімен айналатындай көрінеді.",
            cs: "Uran je ledový obr modrozelené barvy. Jeho osa je tak výrazně nakloněná, že se zdá, jako by se otáčel na boku."
        }
    };
    
    // Дополнительные переводы для подписей, характеристик и игры.
    // Порядок языков:
    // en, fr, de, es, it, pl, nl, kk, cs.

    const extraTranslations = {
        "Температура": ["Temperature", "Température", "Temperatur", "Temperatura", "Temperatura", "Temperatura", "Temperatuur", "Температура", "Teplota"],
        "Средняя температура": ["Average temperature", "Température moyenne", "Durchschnittstemperatur", "Temperatura media", "Temperatura media", "Średnia temperatura", "Gemiddelde temperatuur", "Орташа температура", "Průměrná teplota"],
        "Диаметр": ["Diameter", "Diamètre", "Durchmesser", "Diámetro", "Diametro", "Średnica", "Diameter", "Диаметр", "Průměr"],
        "Масса": ["Mass", "Masse", "Masse", "Masa", "Massa", "Masa", "Massa", "Масса", "Hmotnost"],
        "Расстояние от Солнца": ["Distance from the Sun", "Distance au Soleil", "Entfernung zur Sonne", "Distancia del Sol", "Distanza dal Sole", "Odległość od Słońca", "Afstand tot de zon", "Күннен қашықтығы", "Vzdálenost od Slunce"],
        "Среднее расстояние от Солнца": ["Average distance from the Sun", "Distance moyenne au Soleil", "Mittlere Entfernung zur Sonne", "Distancia media del Sol", "Distanza media dal Sole", "Średnia odległość od Słońca", "Gemiddelde afstand tot de zon", "Күннен орташа қашықтығы", "Průměrná vzdálenost od Slunce"],
        "Длина суток": ["Length of day", "Durée du jour", "Tageslänge", "Duración del día", "Durata del giorno", "Długość doby", "Lengte van een dag", "Тәуліктің ұзақтығы", "Délka dne"],
        "Продолжительность дня": ["Length of day", "Durée du jour", "Tagesdauer", "Duración del día", "Durata del giorno", "Długość dnia", "Daglengte", "Күн ұзақтығы", "Délka dne"],
        "Продолжительность года": ["Length of year", "Durée de l’année", "Jahresdauer", "Duración del año", "Durata dell’anno", "Długość roku", "Lengte van een jaar", "Жыл ұзақтығы", "Délka roku"],
        "Период вращения": ["Rotation period", "Période de rotation", "Rotationsdauer", "Período de rotación", "Periodo di rotazione", "Okres obrotu", "Rotatieperiode", "Айналу кезеңі", "Doba rotace"],
        "Период обращения": ["Orbital period", "Période orbitale", "Umlaufzeit", "Período orbital", "Periodo orbitale", "Okres orbitalny", "Omlooptijd", "Орбиталық кезең", "Oběžná doba"],
        "Спутники": ["Moons", "Satellites naturels", "Monde", "Lunas", "Lune", "Księżyce", "Manen", "Серіктер", "Měsíce"],
        "Количество спутников": ["Number of moons", "Nombre de satellites", "Anzahl der Monde", "Número de lunas", "Numero di lune", "Liczba księżyców", "Aantal manen", "Серіктер саны", "Počet měsíců"],
        "Кольца": ["Rings", "Anneaux", "Ringe", "Anillos", "Anelli", "Pierścienie", "Ringen", "Сақиналар", "Prstence"],
        "Атмосфера": ["Atmosphere", "Atmosphère", "Atmosphäre", "Atmósfera", "Atmosfera", "Atmosfera", "Atmosfeer", "Атмосфера", "Atmosféra"],
        "Интересный факт": ["Fun fact", "Fait intéressant", "Interessante Tatsache", "Dato curioso", "Curiosità", "Ciekawostka", "Weetje", "Қызықты дерек", "Zajímavost"],
        "Описание": ["Description", "Description", "Beschreibung", "Descripción", "Descrizione", "Opis", "Beschrijving", "Сипаттама", "Popis"],
        "Характеристики": ["Characteristics", "Caractéristiques", "Eigenschaften", "Características", "Caratteristiche", "Charakterystyka", "Kenmerken", "Сипаттамалар", "Vlastnosti"],
        "Тип объекта": ["Object type", "Type d’objet", "Objekttyp", "Tipo de objeto", "Tipo di oggetto", "Typ obiektu", "Objecttype", "Нысан түрі", "Typ objektu"],
        "Планета": ["Planet", "Planète", "Planet", "Planeta", "Pianeta", "Planeta", "Planeet", "Ғаламшар", "Planeta"],
        "Карликовая планета": ["Dwarf planet", "Planète naine", "Zwergplanet", "Planeta enana", "Pianeta nana", "Planeta karłowata", "Dwergplaneet", "Ергежейлі ғаламшар", "Trpasličí planeta"],
        "Звезда": ["Star", "Étoile", "Stern", "Estrella", "Stella", "Gwiazda", "Ster", "Жұлдыз", "Hvězda"],
        "Естественный спутник": ["Natural satellite", "Satellite naturel", "Natürlicher Satellit", "Satélite natural", "Satellite naturale", "Naturalny satelita", "Natuurlijke satelliet", "Табиғи серік", "Přirozená družice"],
        "Каменная планета": ["Terrestrial planet", "Planète tellurique", "Gesteinsplanet", "Planeta rocosa", "Pianeta rocciosa", "Planeta skalista", "Rotsachtige planeet", "Тасты ғаламшар", "Kamenná planeta"],
        "Газовый гигант": ["Gas giant", "Géante gazeuse", "Gasriese", "Gigante gaseoso", "Gigante gassoso", "Gazowy olbrzym", "Gasreus", "Газ алыбы", "Plynný obr"],
        "Ледяной гигант": ["Ice giant", "Géante glacée", "Eisriese", "Gigante helado", "Gigante ghiacciato", "Lodowy olbrzym", "IJsreus", "Мұз алыбы", "Ledový obr"],
        "Солнечная система": ["Solar System", "Système solaire", "Sonnensystem", "Sistema solar", "Sistema solare", "Układ Słoneczny", "Zonnestelsel", "Күн жүйесі", "Sluneční soustava"],
        "Пояс астероидов": ["Asteroid belt", "Ceinture d’astéroïdes", "Asteroidengürtel", "Cinturón de asteroides", "Fascia degli asteroidi", "Pas planetoid", "Asteroïdengordel", "Астероидтар белдеуі", "Pás asteroidů"],
        "Пояс Койпера": ["Kuiper Belt", "Ceinture de Kuiper", "Kuipergürtel", "Cinturón de Kuiper", "Fascia di Kuiper", "Pas Kuipera", "Kuipergordel", "Койпер белдеуі", "Kuiperův pás"],
        "Лаборатория": ["Laboratory", "Laboratoire", "Labor", "Laboratorio", "Laboratorio", "Laboratorium", "Laboratorium", "Зертхана", "Laboratoř"],
        "Космическая лаборатория": ["Space Laboratory", "Laboratoire spatial", "Weltraumlabor", "Laboratorio espacial", "Laboratorio spaziale", "Laboratorium kosmiczne", "Ruimtelaboratorium", "Ғарыш зертханасы", "Vesmírná laboratoř"],

        "Викторина": ["Quiz", "Quiz", "Quiz", "Cuestionario", "Quiz", "Quiz", "Quiz", "Викторина", "Kvíz"],
        "Начать викторину": ["Start quiz", "Commencer le quiz", "Quiz starten", "Iniciar cuestionario", "Inizia il quiz", "Rozpocznij quiz", "Quiz starten", "Викторинаны бастау", "Spustit kvíz"],
        "Начать": ["Start", "Commencer", "Starten", "Empezar", "Inizia", "Rozpocznij", "Starten", "Бастау", "Začít"],
        "Начать игру": ["Start game", "Commencer le jeu", "Spiel starten", "Iniciar juego", "Inizia il gioco", "Rozpocznij grę", "Start het spel", "Ойынды бастау", "Spustit hru"],
        "Играть": ["Play", "Jouer", "Spielen", "Jugar", "Gioca", "Graj", "Spelen", "Ойнау", "Hrát"],
        "Пауза": ["Pause", "Pause", "Pause", "Pausa", "Pausa", "Pauza", "Pauze", "Үзіліс", "Pauza"],
        "Продолжить": ["Continue", "Continuer", "Weiter", "Continuar", "Continua", "Kontynuuj", "Doorgaan", "Жалғастыру", "Pokračovat"],
        "Перезапустить": ["Restart", "Redémarrer", "Neu starten", "Reiniciar", "Riavvia", "Uruchom ponownie", "Opnieuw starten", "Қайта бастау", "Restartovat"],
        "Заново": ["Again", "À nouveau", "Noch einmal", "De nuevo", "Di nuovo", "Ponownie", "Opnieuw", "Қайтадан", "Znovu"],
        "Попробовать снова": ["Try again", "Réessayer", "Erneut versuchen", "Intentarlo de nuevo", "Riprova", "Spróbuj ponownie", "Opnieuw proberen", "Қайталап көру", "Zkusit znovu"],
        "Следующий вопрос": ["Next question", "Question suivante", "Nächste Frage", "Siguiente pregunta", "Domanda successiva", "Następne pytanie", "Volgende vraag", "Келесі сұрақ", "Další otázka"],
        "Предыдущий вопрос": ["Previous question", "Question précédente", "Vorherige Frage", "Pregunta anterior", "Domanda precedente", "Poprzednie pytanie", "Vorige vraag", "Алдыңғы сұрақ", "Předchozí otázka"],
        "Проверить ответ": ["Check answer", "Vérifier la réponse", "Antwort prüfen", "Comprobar respuesta", "Controlla la risposta", "Sprawdź odpowiedź", "Antwoord controleren", "Жауапты тексеру", "Zkontrolovat odpověď"],
        "Проверить": ["Check", "Vérifier", "Prüfen", "Comprobar", "Controlla", "Sprawdź", "Controleren", "Тексеру", "Zkontrolovat"],
        "Ответить": ["Answer", "Répondre", "Antworten", "Responder", "Rispondi", "Odpowiedz", "Antwoorden", "Жауап беру", "Odpovědět"],
        "Правильно!": ["Correct!", "Correct !", "Richtig!", "¡Correcto!", "Corretto!", "Dobrze!", "Correct!", "Дұрыс!", "Správně!"],
        "Неправильно!": ["Incorrect!", "Incorrect !", "Falsch!", "¡Incorrecto!", "Sbagliato!", "Niepoprawnie!", "Onjuist!", "Қате!", "Nesprávně!"],
        "Верный ответ": ["Correct answer", "Bonne réponse", "Richtige Antwort", "Respuesta correcta", "Risposta corretta", "Poprawna odpowiedź", "Goed antwoord", "Дұрыс жауап", "Správná odpověď"],
        "Ваш результат": ["Your result", "Votre résultat", "Dein Ergebnis", "Tu resultado", "Il tuo risultato", "Twój wynik", "Jouw resultaat", "Нәтижеңіз", "Váš výsledek"],
        "Результат": ["Result", "Résultat", "Ergebnis", "Resultado", "Risultato", "Wynik", "Resultaat", "Нәтиже", "Výsledek"],
        "Очки": ["Score", "Points", "Punkte", "Puntuación", "Punteggio", "Punkty", "Score", "Ұпай", "Body"],
        "Баллы": ["Points", "Points", "Punkte", "Puntos", "Punti", "Punkty", "Punten", "Ұпайлар", "Body"],
        "Вопрос": ["Question", "Question", "Frage", "Pregunta", "Domanda", "Pytanie", "Vraag", "Сұрақ", "Otázka"],
        "Вопросов": ["Questions", "Questions", "Fragen", "Preguntas", "Domande", "Pytań", "Vragen", "Сұрақ", "Otázek"],
        "Победа!": ["Victory!", "Victoire !", "Sieg!", "¡Victoria!", "Vittoria!", "Zwycięstwo!", "Overwinning!", "Жеңіс!", "Vítězství!"],
        "Ты победил!": ["You won!", "Tu as gagné !", "Du hast gewonnen!", "¡Has ganado!", "Hai vinto!", "Wygrałeś!", "Je hebt gewonnen!", "Сен жеңдің!", "Vyhrál jsi!"],
        "Поражение": ["Defeat", "Défaite", "Niederlage", "Derrota", "Sconfitta", "Porażka", "Nederlaag", "Жеңіліс", "Porážka"],
        "Ты проиграл": ["You lost", "Tu as perdu", "Du hast verloren", "Has perdido", "Hai perso", "Przegrałeś", "Je hebt verloren", "Сен жеңілдің", "Prohrál jsi"],
        "Космический босс": ["Space Boss", "Boss spatial", "Weltraum-Boss", "Jefe espacial", "Boss spaziale", "Kosmiczny boss", "Ruimtebaas", "Ғарыш бастығы", "Vesmírný boss"],
        "Босс": ["Boss", "Boss", "Boss", "Jefe", "Boss", "Boss", "Ba baas", "Босс", "Boss"],
        "Уровень": ["Level", "Niveau", "Level", "Nivel", "Livello", "Poziom", "Niveau", "Деңгей", "Úroveň"],
        "Здоровье": ["Health", "Santé", "Gesundheit", "Salud", "Salute", "Zdrowie", "Gezondheid", "Денсаулық", "Zdraví"],
        "Урон": ["Damage", "Dégâts", "Schaden", "Daño", "Danno", "Obrażenia", "Schade", "Зақым", "Poškození"],
        "Атака": ["Attack", "Attaque", "Angriff", "Ataque", "Attacco", "Atak", "Aanval", "Шабуыл", "Útok"],
        "Защита": ["Defense", "Défense", "Verteidigung", "Defensa", "Difesa", "Obrona", "Verdediging", "Қорғаныс", "Obrana"],

        "Все объекты": ["All objects", "Tous les objets", "Alle Objekte", "Todos los objetos", "Tutti gli oggetti", "Wszystkie obiekty", "Alle objecten", "Барлық нысандар", "Všechny objekty"],
        "Показать все": ["Show all", "Tout afficher", "Alle anzeigen", "Mostrar todo", "Mostra tutto", "Pokaż wszystko", "Alles tonen", "Барлығын көрсету", "Zobrazit vše"],
        "Фильтр": ["Filter", "Filtre", "Filter", "Filtro", "Filtro", "Filtr", "Filter", "Сүзгі", "Filtr"],
        "Категория": ["Category", "Catégorie", "Kategorie", "Categoría", "Categoria", "Kategoria", "Categorie", "Санат", "Kategorie"],
        "Выбрать язык": ["Choose language", "Choisir la langue", "Sprache auswählen", "Elegir idioma", "Scegli la lingua", "Wybierz język", "Taal kiezen", "Тілді таңдау", "Vybrat jazyk"],
        "Язык": ["Language", "Langue", "Sprache", "Idioma", "Lingua", "Język", "Taal", "Тіл", "Jazyk"],
        "Сбросить": ["Reset", "Réinitialiser", "Zurücksetzen", "Restablecer", "Reimposta", "Resetuj", "Resetten", "Қалпына келтіру", "Obnovit"],
        "Сбросить прогресс": ["Reset progress", "Réinitialiser la progression", "Fortschritt zurücksetzen", "Restablecer progreso", "Azzera i progressi", "Zresetuj postęp", "Voortgang resetten", "Прогресті қалпына келтіру", "Obnovit postup"],
        "Прогресс": ["Progress", "Progression", "Fortschritt", "Progreso", "Progressi", "Postęp", "Voortgang", "Прогресс", "Postup"],
        "Достижения": ["Achievements", "Succès", "Erfolge", "Logros", "Obiettivi", "Osiągnięcia", "Prestaties", "Жетістіктер", "Úspěchy"],
        "Открыто": ["Unlocked", "Débloqué", "Freigeschaltet", "Desbloqueado", "Sbloccato", "Odblokowano", "Ontgrendeld", "Ашық", "Odemčeno"],
        "Заблокировано": ["Locked", "Verrouillé", "Gesperrt", "Bloqueado", "Bloccato", "Zablokowano", "Vergrendeld", "Құлыпталған", "Uzamčeno"],
        "Загрузка...": ["Loading...", "Chargement...", "Wird geladen...", "Cargando...", "Caricamento...", "Ładowanie...", "Laden...", "Жүктелуде...", "Načítání..."],
        "Скоро появится": ["Coming soon", "Bientôt disponible", "Demnächst verfügbar", "Próximamente", "In arrivo", "Wkrótce dostępne", "Binnenkort beschikbaar", "Жақында пайда болады", "Již brzy"],
        "Ничего не найдено": ["Nothing found", "Aucun résultat", "Nichts gefunden", "No se encontró nada", "Nessun risultato", "Nic nie znaleziono", "Niets gevonden", "Ештеңе табылмады", "Nic nebylo nalezeno"],
        "Результаты поиска": ["Search results", "Résultats de recherche", "Suchergebnisse", "Resultados de búsqueda", "Risultati della ricerca", "Wyniki wyszukiwania", "Zoekresultaten", "Іздеу нәтижелері", "Výsledky hledání"],
        "Поиск объектов...": ["Search objects...", "Rechercher des objets...", "Objekte suchen...", "Buscar objetos...", "Cerca oggetti...", "Szukaj obiektów...", "Objecten zoeken...", "Нысандарды іздеу...", "Hledat objekty..."],
        "Очистить поиск": ["Clear search", "Effacer la recherche", "Suche löschen", "Borrar búsqueda", "Cancella ricerca", "Wyczyść wyszukiwanie", "Zoekopdracht wissen", "Іздеуді тазарту", "Vymazat hledání"],
        "Вернуться в атлас": ["Return to atlas", "Retourner à l’atlas", "Zum Atlas zurückkehren", "Volver al atlas", "Torna all’atlante", "Wróć do atlasu", "Terug naar de atlas", "Атласқа оралу", "Vrátit se do atlasu"],
        "← Вернуться в атлас": ["← Return to atlas", "← Retourner à l’atlas", "← Zurück zum Atlas", "← Volver al atlas", "← Torna all’atlante", "← Wróć do atlasu", "← Terug naar de atlas", "← Атласқа оралу", "← Vrátit se do atlasu"],
        "Готово": ["Done", "Terminé", "Fertig", "Listo", "Fatto", "Gotowe", "Klaar", "Дайын", "Hotovo"],
        "Завершить": ["Finish", "Terminer", "Beenden", "Finalizar", "Termina", "Zakończ", "Voltooien", "Аяқтау", "Dokončit"],
        "Скрыть": ["Hide", "Masquer", "Ausblenden", "Ocultar", "Nascondi", "Ukryj", "Verbergen", "Жасыру", "Skrýt"],
        "Показать": ["Show", "Afficher", "Anzeigen", "Mostrar", "Mostra", "Pokaż", "Tonen", "Көрсету", "Zobrazit"],
        "Выберите объект": ["Choose an object", "Choisissez un objet", "Wähle ein Objekt", "Elige un objeto", "Scegli un oggetto", "Wybierz obiekt", "Kies een object", "Нысанды таңдаңыз", "Vyberte objekt"],
        "Выберите ответ": ["Choose an answer", "Choisissez une réponse", "Wähle eine Antwort", "Elige una respuesta", "Scegli una risposta", "Wybierz odpowiedź", "Kies een antwoord", "Жауапты таңдаңыз", "Vyberte odpověď"],
        "Успех!": ["Success!", "Réussite !", "Erfolg!", "¡Éxito!", "Successo!", "Sukces!", "Succes!", "Сәттілік!", "Úspěch!"]
    };

    const allTranslations = {
        ...translations,
        ...extraTranslations
    };

    const translationLookup = Object.create(null);

    Object.keys(allTranslations).forEach(key => {
        translationLookup[key.toLocaleLowerCase("ru-RU")] =
            allTranslations[key];
    });

    function getLanguage() {
        try {
            const language = localStorage.getItem(LANG_KEY) || "ru";
            return languageIndex[language] !== undefined ? language : "ru";
        } catch (error) {
            return "ru";
        }
    }

    const originalTextMap = new WeakMap();
    const lastTranslatedTextMap = new WeakMap();
    const originalAttributeMap = new WeakMap();

    function escapeRegExp(text) {
        return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function translateText(text, language) {
        if (!text || language === "ru") {
            return text;
        }

        const trimmed = text.trim();

        if (!trimmed) {
            return text;
        }

        // Сначала пробуем перевести всю строку целиком.
        const objectDescription = objectDescriptions[trimmed];

        if (objectDescription && objectDescription[language]) {
            return text.replace(trimmed, objectDescription[language]);
        }

        const index = languageIndex[language];

        if (index === undefined) {
            return text;
        }

        const exactEntry = allTranslations[trimmed];

        if (exactEntry && exactEntry[index]) {
            return text.replace(trimmed, exactEntry[index]);
        }

        // Если строка содержит дополнительный текст,
        // переводим известные фразы внутри неё.
        const keys = Object.keys(allTranslations).sort(
            (a, b) => b.length - a.length
        );

        const patterns = keys.map(key => {
            const parts = key
                .split(/\s+/)
                .map(escapeRegExp)
                .join("\\s+");

            return {
                key,
                pattern: parts
            };
        });

        if (!patterns.length) {
            return text;
        }

        const combinedPattern = patterns
            .map(item => item.pattern)
            .join("|");

        const regex = new RegExp(
            `(?<![\\p{L}\\p{N}])(?:${combinedPattern})(?![\\p{L}\\p{N}])`,
            "giu"
        );

        return text.replace(regex, match => {
            const entry =
                translationLookup[match.toLocaleLowerCase("ru-RU")];

            return entry && entry[index] ? entry[index] : match;
        });
    }

    function translateTextNode(node, language) {
        if (!node || node.nodeType !== Node.TEXT_NODE) {
            return;
        }

        const current = node.nodeValue;

        if (!current || !current.trim()) {
            return;
        }

        if (!originalTextMap.has(node)) {
            originalTextMap.set(node, current);
        } else {
            const lastTranslated = lastTranslatedTextMap.get(node);

            // Если другой скрипт заменил текст, запоминаем новый оригинал.
            if (
                lastTranslated !== undefined &&
                current !== lastTranslated
            ) {
                originalTextMap.set(node, current);
            }
        }

        const original = originalTextMap.get(node);
        const translated = translateText(original, language);

        if (node.nodeValue !== translated) {
            node.nodeValue = translated;
        }

        lastTranslatedTextMap.set(node, translated);
    }

    function translateElement(element, language) {
        if (!element || element.nodeType !== Node.ELEMENT_NODE) {
            return;
        }

        if (
            element.matches(
                "script, style, textarea, input, select, option"
            )
        ) {
            return;
        }

        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {
                    if (
                        node.parentElement?.closest(
                            "script, style, textarea, input, select, option"
                        )
                    ) {
                        return NodeFilter.FILTER_REJECT;
                    }

                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        const nodes = [];

        while (walker.nextNode()) {
            nodes.push(walker.currentNode);
        }

        nodes.forEach(node => translateTextNode(node, language));

        const attributes = [
            "title",
            "aria-label",
            "placeholder"
        ];

        attributes.forEach(attribute => {
            if (!element.hasAttribute(attribute)) {
                return;
            }

            let originals = originalAttributeMap.get(element);

            if (!originals) {
                originals = {};
                originalAttributeMap.set(element, originals);
            }

            if (!(attribute in originals)) {
                originals[attribute] = element.getAttribute(attribute);
            }

            const original = originals[attribute];
            const translated = translateText(original, language);

            if (element.getAttribute(attribute) !== translated) {
                element.setAttribute(attribute, translated);
            }
        });
    }

    function translateOpenObject(language) {
        const title = document.getElementById("info-title");
        const description = document.getElementById("info-description");

        if (!title) {
            return;
        }

        if (!title.dataset.originalName) {
            const visibleName = title.textContent.trim();

            const originalName = Object.keys(translations).find(name =>
                Object.values(languageIndex).some(index =>
                    translations[name]?.[index] === visibleName
                )
            );

            title.dataset.originalName = originalName || visibleName;
        }

        const originalName = title.dataset.originalName;

        title.textContent = translateText(originalName, language);

        if (description) {
            const originalDescription = objectDescriptions[originalName];

            if (originalDescription) {
                description.textContent =
                    originalDescription[language] ||
                    originalDescription.ru ||
                    "";
            }
        }
    }

    function translateStaticPage() {
        const language = getLanguage();

        document.documentElement.lang = language;

        document.querySelectorAll("body *").forEach(element => {
            translateElement(element, language);
        });

        translateOpenObject(language);
    }

    function observeDynamicText() {
        if (!document.body) {
            return;
        }

        const observer = new MutationObserver(mutations => {
            const language = getLanguage();

            mutations.forEach(mutation => {
                // Текст внутри существующего элемента изменился.
                if (mutation.type === "characterData") {
                    translateTextNode(mutation.target, language);
                    return;
                }

                // На странице появился новый текст или элемент.
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        translateTextNode(node, language);
                    } else if (node.nodeType === Node.ELEMENT_NODE) {
                        translateElement(node, language);
                    }
                });
            });
        });

        observer.observe(document.body, {
            subtree: true,
            childList: true,
            characterData: true
        });
    }

    function startLocalization() {
        translateStaticPage();
        observeDynamicText();

        window.addEventListener("siteLanguageChanged", () => {
            translateStaticPage();
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            startLocalization,
            { once: true }
        );
    } else {
        startLocalization();
    }

    window.atlasTranslate = translateText;
    window.atlasDescriptions = objectDescriptions;

})();
