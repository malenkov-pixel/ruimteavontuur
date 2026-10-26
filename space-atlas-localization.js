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
/* =========================================================
   🌌 ПОЛНАЯ ЛОКАЛИЗАЦИЯ АТЛАСА ПОМНИ
   Языки: en, fr, de, es, it, pl, nl, kk, cs
   Вставить перед if (document.readyState === "loading")
   ========================================================= */

const atlasPatchTranslations = {
    "Сириус": ["Sirius", "Sirius", "Sirius", "Sirio", "Sirio", "Syriusz", "Sirius", "Сириус", "Sirius"],
    "Полярная звезда": ["Polaris", "Étoile polaire", "Polarstern", "Estrella Polar", "Stella Polare", "Gwiazda Polarna", "Poolster", "Темірқазық", "Polárka"],
    "Бетельгейзе": ["Betelgeuse", "Bételgeuse", "Beteigeuze", "Betelgeuse", "Betelgeuse", "Betelgeza", "Betelgeuze", "Бетельгейзе", "Betelgeuze"],
    "Титан": ["Titan", "Titan", "Titan", "Titán", "Titano", "Tytan", "Titan", "Титан", "Titan"],
    "Европа": ["Europa", "Europe", "Europa", "Europa", "Europa", "Europa", "Europa", "Еуропа", "Europa"],
    "Фобос": ["Phobos", "Phobos", "Phobos", "Fobos", "Fobos", "Fobos", "Phobos", "Фобос", "Phobos"],

    // ВИКТОРИНА — все 10 вопросов
    "Какая звезда находится в центре Солнечной системы?": [
        "Which star is at the centre of the Solar System?",
        "Quelle étoile se trouve au centre du Système solaire ?",
        "Welcher Stern befindet sich im Zentrum des Sonnensystems?",
        "¿Qué estrella se encuentra en el centro del sistema solar?",
        "Quale stella si trova al centro del Sistema solare?",
        "Która gwiazda znajduje się w centrum Układu Słonecznego?",
        "Welke ster staat in het midden van het zonnestelsel?",
        "Күн жүйесінің орталығында қандай жұлдыз орналасқан?",
        "Která hvězda se nachází ve středu Sluneční soustavy?"
    ],
    "Какая планета известна своими знаменитыми кольцами?": [
        "Which planet is famous for its rings?",
        "Quelle planète est célèbre pour ses anneaux ?",
        "Welcher Planet ist für seine berühmten Ringe bekannt?",
        "¿Qué planeta es famoso por sus anillos?",
        "Quale pianeta è famoso per i suoi anelli?",
        "Która planeta słynie ze swoich pierścieni?",
        "Welke planeet staat bekend om zijn ringen?",
        "Қай ғаламшар өзінің әйгілі сақиналарымен танымал?",
        "Která planeta je známá svými slavnými prstenci?"
    ],
    "Какая планета является крупнейшей в Солнечной системе?": [
        "Which planet is the largest in the Solar System?",
        "Quelle est la plus grande planète du Système solaire ?",
        "Welcher Planet ist der größte im Sonnensystem?",
        "¿Cuál es el planeta más grande del sistema solar?",
        "Qual è il pianeta più grande del Sistema solare?",
        "Która planeta jest największa w Układzie Słonecznym?",
        "Welke planeet is de grootste in het zonnestelsel?",
        "Күн жүйесіндегі ең үлкен ғаламшар қайсы?",
        "Která planeta je největší ve Sluneční soustavě?"
    ],
    "Как называется естественный спутник Земли?": [
        "What is Earth's natural satellite called?",
        "Comment s'appelle le satellite naturel de la Terre ?",
        "Wie heißt der natürliche Satellit der Erde?",
        "¿Cómo se llama el satélite natural de la Tierra?",
        "Come si chiama il satellite naturale della Terra?",
        "Jak nazywa się naturalny satelita Ziemi?",
        "Hoe heet de natuurlijke satelliet van de aarde?",
        "Жердің табиғи серігі қалай аталады?",
        "Jak se nazývá přirozená družice Země?"
    ],
    "Какая планета находится ближе всего к Солнцу?": [
        "Which planet is closest to the Sun?",
        "Quelle planète est la plus proche du Soleil ?",
        "Welcher Planet ist der Sonne am nächsten?",
        "¿Qué planeta está más cerca del Sol?",
        "Quale pianeta è più vicino al Sole?",
        "Która planeta znajduje się najbliżej Słońca?",
        "Welke planeet staat het dichtst bij de zon?",
        "Күнге ең жақын ғаламшар қайсы?",
        "Která planeta je nejblíže Slunci?"
    ],
    "Какую планету называют Красной планетой?": [
        "Which planet is called the Red Planet?",
        "Quelle planète appelle-t-on la planète rouge ?",
        "Welcher Planet wird als Roter Planet bezeichnet?",
        "¿Qué planeta se conoce como el planeta rojo?",
        "Quale pianeta viene chiamato il Pianeta Rosso?",
        "Którą planetę nazywa się Czerwoną Planetą?",
        "Welke planeet wordt de Rode Planeet genoemd?",
        "Қай ғаламшарды Қызыл ғаламшар деп атайды?",
        "Které planetě se říká Rudá planeta?"
    ],
    "Какая из этих планет является ледяным гигантом?": [
        "Which of these planets is an ice giant?",
        "Laquelle de ces planètes est une géante glacée ?",
        "Welcher dieser Planeten ist ein Eisriese?",
        "¿Cuál de estos planetas es un gigante helado?",
        "Quale di questi pianeti è un gigante ghiacciato?",
        "Która z tych planet jest lodowym olbrzymem?",
        "Welke van deze planeten is een ijsreus?",
        "Осы ғаламшарлардың қайсысы мұз алыбы?",
        "Která z těchto planet je ledový obr?"
    ],
    "Как называется карликовая планета в поясе Койпера?": [
        "Which dwarf planet is located in the Kuiper Belt?",
        "Comment s'appelle la planète naine située dans la ceinture de Kuiper ?",
        "Wie heißt der Zwergplanet im Kuipergürtel?",
        "¿Cómo se llama el planeta enano del cinturón de Kuiper?",
        "Come si chiama il pianeta nano nella fascia di Kuiper?",
        "Jak nazywa się planeta karłowata znajdująca się w Pasie Kuipera?",
        "Hoe heet de dwergplaneet in de Kuipergordel?",
        "Койпер белдеуіндегі ергежейлі ғаламшар қалай аталады?",
        "Jak se nazývá trpasličí planeta v Kuiperově pásu?"
    ],
    "На какой планете находится Большое красное пятно?": [
        "Which planet has the Great Red Spot?",
        "Sur quelle planète se trouve la Grande Tache rouge ?",
        "Auf welchem Planeten befindet sich der Große Rote Fleck?",
        "¿En qué planeta se encuentra la Gran Mancha Roja?",
        "Su quale pianeta si trova la Grande Macchia Rossa?",
        "Na której planecie znajduje się Wielka Czerwona Plama?",
        "Op welke planeet bevindt zich de Grote Rode Vlek?",
        "Үлкен қызыл дақ қай ғаламшарда орналасқан?",
        "Na které planetě se nachází Velká rudá skvrna?"
    ],
    "Какая планета вращается почти на боку?": [
        "Which planet rotates almost on its side?",
        "Quelle planète tourne presque sur le côté ?",
        "Welcher Planet dreht sich fast auf der Seite?",
        "¿Qué planeta gira casi de lado?",
        "Quale pianeta ruota quasi su un fianco?",
        "Która planeta obraca się niemal na boku?",
        "Welke planeet draait bijna op zijn kant?",
        "Қай ғаламшар бүйірімен айналатындай болып айналады?",
        "Která planeta se otáčí téměř na boku?"
    ],

    // БИТВА С КОСМИЧЕСКИМ БОССОМ — 5 вопросов
    "Почему Венера горячее Меркурия, хотя находится дальше от Солнца?": [
        "Why is Venus hotter than Mercury even though it is farther from the Sun?",
        "Pourquoi Vénus est-elle plus chaude que Mercure alors qu'elle est plus éloignée du Soleil ?",
        "Warum ist die Venus heißer als Merkur, obwohl sie weiter von der Sonne entfernt ist?",
        "¿Por qué Venus está más caliente que Mercurio si está más lejos del Sol?",
        "Perché Venere è più calda di Mercurio anche se è più lontana dal Sole?",
        "Dlaczego Wenus jest gorętsza od Merkurego, mimo że znajduje się dalej od Słońca?",
        "Waarom is Venus heter dan Mercurius, hoewel ze verder van de zon staat?",
        "Шолпан Күннен алысырақ болса да, неге Меркурийден ыстық?",
        "Proč je Venuše teplejší než Merkur, přestože je dál od Slunce?"
    ],
    "Что находится за орбитой Нептуна и содержит множество ледяных тел?": [
        "What lies beyond Neptune's orbit and contains many icy bodies?",
        "Qu'est-ce qui se trouve au-delà de l'orbite de Neptune et contient de nombreux corps glacés ?",
        "Was liegt jenseits der Neptunbahn und enthält viele eisige Körper?",
        "¿Qué se encuentra más allá de la órbita de Neptuno y contiene muchos cuerpos helados?",
        "Che cosa si trova oltre l'orbita di Nettuno e contiene molti corpi ghiacciati?",
        "Co znajduje się za orbitą Neptuna i zawiera wiele lodowych ciał?",
        "Wat ligt voorbij de baan van Neptunus en bevat veel ijzige hemellichamen?",
        "Нептун орбитасының ар жағында көптеген мұзды денелерден тұратын не бар?",
        "Co se nachází za oběžnou dráhou Neptunu a obsahuje mnoho ledových těles?"
    ],
    "Почему на Луне почти не сохраняются следы жидкой воды на поверхности?": [
        "Why does liquid water barely remain on the Moon's surface?",
        "Pourquoi l'eau liquide ne laisse-t-elle presque aucune trace à la surface de la Lune ?",
        "Warum bleiben auf der Mondoberfläche kaum Spuren von flüssigem Wasser erhalten?",
        "¿Por qué apenas quedan rastros de agua líquida en la superficie de la Luna?",
        "Perché sulla superficie lunare rimangono pochissime tracce di acqua liquida?",
        "Dlaczego na powierzchni Księżyca prawie nie zachowują się ślady ciekłej wody?",
        "Waarom blijven er op het maanoppervlak nauwelijks sporen van vloeibaar water achter?",
        "Неліктен Ай бетінде сұйық судың іздері дерлік сақталмайды?",
        "Proč na povrchu Měsíce téměř nezůstávají stopy kapalné vody?"
    ],
    "Как учёные определяют состав атмосферы далёких планет по свету?": [
        "How do scientists determine the atmospheric composition of distant planets from light?",
        "Comment les scientifiques déterminent-ils la composition de l'atmosphère des planètes lointaines grâce à la lumière ?",
        "Wie bestimmen Forschende anhand von Licht die Zusammensetzung der Atmosphäre ferner Planeten?",
        "¿Cómo determinan los científicos la composición de la atmósfera de planetas lejanos a partir de la luz?",
        "Come fanno gli scienziati a determinare la composizione atmosferica di pianeti lontani attraverso la luce?",
        "Jak naukowcy określają skład atmosfery odległych planet na podstawie światła?",
        "Hoe bepalen wetenschappers aan de hand van licht de samenstelling van de atmosfeer van verre planeten?",
        "Ғалымдар жарық арқылы алыс ғаламшарлардың атмосфера құрамын қалай анықтайды?",
        "Jak vědci určují složení atmosféry vzdálených planet pomocí světla?"
    ],
    "Почему газовые гиганты могут иметь меньшую среднюю плотность, чем каменистые планеты?": [
        "Why can gas giants have a lower average density than rocky planets?",
        "Pourquoi les géantes gazeuses peuvent-elles avoir une densité moyenne inférieure à celle des planètes rocheuses ?",
        "Warum können Gasriesen eine geringere mittlere Dichte als Gesteinsplaneten haben?",
        "¿Por qué los gigantes gaseosos pueden tener una densidad media menor que los planetas rocosos?",
        "Perché i giganti gassosi possono avere una densità media inferiore a quella dei pianeti rocciosi?",
        "Dlaczego gazowe olbrzymy mogą mieć mniejszą średnią gęstość niż planety skaliste?",
        "Waarom kunnen gasreuzen een lagere gemiddelde dichtheid hebben dan rotsachtige planeten?",
        "Неліктен газ алыптарының орташа тығыздығы тасты ғаламшарлардан төмен болуы мүмкін?",
        "Proč mohou mít plynní obři nižší průměrnou hustotu než kamenné planety?"
    ],

    // Варианты ответов — Венера и Меркурий
    "Из-за сильного парникового эффекта": [
        "Because of the strong greenhouse effect",
        "À cause du puissant effet de serre",
        "Wegen des starken Treibhauseffekts",
        "Debido al fuerte efecto invernadero",
        "A causa del forte effetto serra",
        "Z powodu silnego efektu cieplarnianego",
        "Door het sterke broeikaseffect",
        "Күшті жылыжай әсерінен",
        "Kvůli silnému skleníkovému efektu"
    ],
    "Из-за более близкой орбиты": [
        "Because it has a closer orbit",
        "À cause d'une orbite plus proche",
        "Wegen einer näheren Umlaufbahn",
        "Debido a una órbita más cercana",
        "A causa di un'orbita più vicina",
        "Z powodu bliższej orbity",
        "Door een kleinere afstand in zijn baan",
        "Орбитасы жақынырақ болғандықтан",
        "Kvůli bližší oběžné dráze"
    ],
    "Из-за постоянных вулканических извержений": [
        "Because of constant volcanic eruptions",
        "À cause d'éruptions volcaniques constantes",
        "Wegen ständiger Vulkanausbrüche",
        "Debido a las constantes erupciones volcánicas",
        "A causa delle continue eruzioni vulcaniche",
        "Z powodu nieustannych erupcji wulkanicznych",
        "Door voortdurende vulkaanuitbarstingen",
        "Үздіксіз жанартау атқылауларына байланысты",
        "Kvůli neustálým sopečným erupcím"
    ],
    "Из-за отсутствия атмосферы": [
        "Because it has no atmosphere",
        "À cause de l'absence d'atmosphère",
        "Wegen der fehlenden Atmosphäre",
        "Debido a la ausencia de atmósfera",
        "A causa dell'assenza di atmosfera",
        "Z powodu braku atmosfery",
        "Door het ontbreken van een atmosfeer",
        "Атмосферасы болмағандықтан",
        "Kvůli absenci atmosféry"
    ],

    // Варианты ответов — пояс Койпера
    "Главный пояс астероидов": [
        "The main asteroid belt",
        "La ceinture principale d'astéroïdes",
        "Der Hauptasteroidengürtel",
        "El cinturón principal de asteroides",
        "La fascia principale degli asteroidi",
        "Główny pas planetoid",
        "De belangrijkste asteroïdengordel",
        "Негізгі астероидтар белдеуі",
        "Hlavní pás asteroidů"
    ],
    "Облака Венеры": [
        "The clouds of Venus",
        "Les nuages de Vénus",
        "Die Wolken der Venus",
        "Las nubes de Venus",
        "Le nubi di Venere",
        "Chmury Wenus",
        "De wolken van Venus",
        "Шолпанның бұлттары",
        "Mraky Venuše"
    ],
    "Солнечная корона": [
        "The solar corona",
        "La couronne solaire",
        "Die Sonnenkorona",
        "La corona solar",
        "La corona solare",
        "Korona słoneczna",
        "De zonnecorona",
        "Күн тәжі",
        "Sluneční koróna"
    ],

    // Варианты ответов — Луна
    "Луна слишком близка к Земле": [
        "The Moon is too close to Earth",
        "La Lune est trop proche de la Terre",
        "Der Mond ist der Erde zu nahe",
        "La Luna está demasiado cerca de la Tierra",
        "La Luna è troppo vicina alla Terra",
        "Księżyc jest zbyt blisko Ziemi",
        "De maan staat te dicht bij de aarde",
        "Ай Жерге тым жақын",
        "Měsíc je příliš blízko Zemi"
    ],
    "У Луны нет океанов из-за магнитного поля Земли": [
        "The Moon has no oceans because of Earth's magnetic field",
        "La Lune n'a pas d'océans à cause du champ magnétique terrestre",
        "Der Mond hat wegen des Erdmagnetfelds keine Ozeane",
        "La Luna no tiene océanos debido al campo magnético terrestre",
        "La Luna non ha oceani a causa del campo magnetico terrestre",
        "Księżyc nie ma oceanów z powodu pola magnetycznego Ziemi",
        "De maan heeft geen oceanen door het magnetisch veld van de aarde",
        "Жердің магнит өрісіне байланысты Айда мұхиттар жоқ",
        "Měsíc nemá oceány kvůli magnetickému poli Země"
    ],
    "На поверхности почти нет атмосферного давления": [
        "There is almost no atmospheric pressure at the surface",
        "La pression atmosphérique à la surface est presque inexistante",
        "An der Oberfläche herrscht fast kein atmosphärischer Druck",
        "En la superficie casi no hay presión atmosférica",
        "Sulla superficie la pressione atmosferica è quasi assente",
        "Na powierzchni prawie nie ma ciśnienia atmosferycznego",
        "Aan het oppervlak is er bijna geen luchtdruk",
        "Беткі қабатта атмосфералық қысым дерлік жоқ",
        "Na povrchu téměř není žádný atmosférický tlak"
    ],
    "Луна постоянно покрыта облаками": [
        "The Moon is constantly covered in clouds",
        "La Lune est constamment couverte de nuages",
        "Der Mond ist ständig von Wolken bedeckt",
        "La Luna está siempre cubierta de nubes",
        "La Luna è costantemente coperta di nuvole",
        "Księżyc jest stale pokryty chmurami",
        "De maan is voortdurend bedekt met wolken",
        "Ай үнемі бұлттармен жабылған",
        "Měsíc je neustále pokryt mraky"
    ],

    // Варианты ответов — спектры
    "По цвету фотографий без дополнительных измерений": [
        "By the colour of photos without additional measurements",
        "À la couleur des photos sans mesures supplémentaires",
        "Anhand der Fotofarbe ohne zusätzliche Messungen",
        "Por el color de las fotografías sin mediciones adicionales",
        "Dal colore delle fotografie senza misurazioni aggiuntive",
        "Na podstawie koloru zdjęć bez dodatkowych pomiarów",
        "Aan de hand van fotokleuren zonder extra metingen",
        "Қосымша өлшеусіз фотосуреттердің түсіне қарап",
        "Podle barvy fotografií bez dalších měření"
    ],
    "По спектральным линиям света": [
        "By the spectral lines in light",
        "À l'aide des raies spectrales de la lumière",
        "Anhand der Spektrallinien des Lichts",
        "Mediante las líneas espectrales de la luz",
        "Attraverso le righe spettrali della luce",
        "Na podstawie linii widmowych światła",
        "Aan de hand van de spectraallijnen van licht",
        "Жарықтың спектрлік сызықтары арқылы",
        "Pomocí spektrálních čar světla"
    ],
    "По скорости вращения планеты вокруг оси": [
        "By the planet's rotation speed",
        "À l'aide de la vitesse de rotation de la planète",
        "Anhand der Rotationsgeschwindigkeit des Planeten",
        "Por la velocidad de rotación del planeta",
        "Attraverso la velocità di rotazione del pianeta",
        "Na podstawie prędkości obrotu planety",
        "Aan de hand van de draaisnelheid van de planeet",
        "Ғаламшардың өз осінен айналу жылдамдығы арқылы",
        "Podle rychlosti otáčení planety"
    ],
    "По количеству спутников": [
        "By the number of moons",
        "À l'aide du nombre de satellites",
        "Anhand der Anzahl der Monde",
        "Por la cantidad de lunas",
        "Attraverso il numero di lune",
        "Na podstawie liczby księżyców",
        "Aan de hand van het aantal manen",
        "Серіктерінің саны арқылы",
        "Podle počtu měsíců"
    ],

    // Варианты ответов — газовые гиганты
    "Они состоят преимущественно из лёгких веществ": [
        "They consist mainly of lightweight substances",
        "Ils sont principalement composés de substances légères",
        "Sie bestehen überwiegend aus leichten Stoffen",
        "Están compuestos principalmente de sustancias ligeras",
        "Sono composti soprattutto da sostanze leggere",
        "Składają się głównie z lekkich substancji",
        "Ze bestaan voornamelijk uit lichte stoffen",
        "Олар негізінен жеңіл заттардан тұрады",
        "Skládají se převážně z lehkých látek"
    ],
    "У них нет гравитации": [
        "They have no gravity",
        "Ils n'ont pas de gravité",
        "Sie haben keine Schwerkraft",
        "No tienen gravedad",
        "Non hanno gravità",
        "Nie mają grawitacji",
        "Ze hebben geen zwaartekracht",
        "Оларда тартылыс күші жоқ",
        "Nemají gravitaci"
    ],
    "Они не имеют внутреннего строения": [
        "They have no internal structure",
        "Ils n'ont pas de structure interne",
        "Sie haben keine innere Struktur",
        "No tienen estructura interna",
        "Non hanno una struttura interna",
        "Nie mają budowy wewnętrznej",
        "Ze hebben geen inwendige structuur",
        "Олардың ішкі құрылысы жоқ",
        "Nemají vnitřní strukturu"
    ],
    "Они находятся вне Солнечной системы": [
        "They are outside the Solar System",
        "Ils se trouvent en dehors du Système solaire",
        "Sie befinden sich außerhalb des Sonnensystems",
        "Están fuera del sistema solar",
        "Si trovano al di fuori del Sistema solare",
        "Znajdują się poza Układem Słonecznym",
        "Ze bevinden zich buiten het zonnestelsel",
        "Олар Күн жүйесінен тыс орналасқан",
        "Nacházejí se mimo Sluneční soustavu"
    ],

    // Общие сообщения игр
    "Пять загадок Вселенной. Пять великих исследований. И ни одного гарантийного талона на оборудование!": [
        "Five mysteries of the universe. Five great investigations. And not a single warranty for the equipment!",
        "Cinq mystères de l’Univers. Cinq grandes recherches. Et aucune garantie pour le matériel !",
        "Fünf Geheimnisse des Universums. Fünf große Forschungsprojekte. Und keine Garantie für die Ausrüstung!",
        "Cinco misterios del universo. Cinco grandes investigaciones. ¡Y ni una sola garantía para el equipo!",
        "Cinque misteri dell’universo. Cinque grandi ricerche. E nessuna garanzia per l’attrezzatura!",
        "Pięć tajemnic Wszechświata. Pięć wielkich badań. I ani jednej gwarancji na sprzęt!",
        "Vijf mysteries van het universum. Vijf grote onderzoeken. En geen enkele garantie op de apparatuur!",
        "Ғаламның бес жұмбағы. Бес үлкен зерттеу. Жабдыққа кепілдік те жоқ!",
        "Pět záhad vesmíru. Pět velkých výzkumů. A ani jedna záruka na vybavení!"
    ],
    "✅ Верно! Отличная работа!": [
        "✅ Correct! Great job!",
        "✅ Exact ! Excellent travail !",
        "✅ Richtig! Gute Arbeit!",
        "✅ ¡Correcto! ¡Buen trabajo!",
        "✅ Esatto! Ottimo lavoro!",
        "✅ Dobrze! Świetna robota!",
        "✅ Goed! Goed gedaan!",
        "✅ Дұрыс! Жарайсың!",
        "✅ Správně! Skvělá práce!"
    ],
    "🏆 Посмотреть результат": [
        "🏆 View results",
        "🏆 Voir le résultat",
        "🏆 Ergebnis anzeigen",
        "🏆 Ver resultados",
        "🏆 Mostra il risultato",
        "🏆 Zobacz wynik",
        "🏆 Resultaat bekijken",
        "🏆 Нәтижені көру",
        "🏆 Zobrazit výsledek"
    ],
    "🔄 Играть снова": [
        "🔄 Play again",
        "🔄 Rejouer",
        "🔄 Noch einmal spielen",
        "🔄 Jugar de nuevo",
        "🔄 Gioca di nuovo",
        "🔄 Zagraj ponownie",
        "🔄 Opnieuw spelen",
        "🔄 Қайта ойнау",
        "🔄 Hrát znovu"
    ],
    "🔄 Сразиться снова": [
        "🔄 Fight again",
        "🔄 Recommencer le combat",
        "🔄 Erneut kämpfen",
        "🔄 Luchar de nuevo",
        "🔄 Combatti di nuovo",
        "🔄 Walcz ponownie",
        "🔄 Opnieuw vechten",
        "🔄 Қайта шайқасу",
        "🔄 Bojovat znovu"
    ],
    "✨ Попадание! Ты нанёс боссу урон!": [
        "✨ Hit! You damaged the boss!",
        "✨ Touché ! Tu as blessé le boss !",
        "✨ Treffer! Du hast dem Boss Schaden zugefügt!",
        "✨ ¡Impacto! ¡Has dañado al jefe!",
        "✨ Colpito! Hai danneggiato il boss!",
        "✨ Trafienie! Zadałeś obrażenia bossowi!",
        "✨ Raak! Je hebt de baas beschadigd!",
        "✨ Дәл тиді! Сен боссқа зақым келтірдің!",
        "✨ Zásah! Způsobil jsi bossovi poškození!"
    ],
    "🌟 НЕВЕРОЯТНО! Ты ответил правильно на все вопросы!": [
        "🌟 AMAZING! You answered every question correctly!",
        "🌟 INCROYABLE ! Tu as répondu correctement à toutes les questions !",
        "🌟 UNGLAUBLICH! Du hast alle Fragen richtig beantwortet!",
        "🌟 ¡INCREÍBLE! ¡Has respondido bien a todas las preguntas!",
        "🌟 INCREDIBILE! Hai risposto correttamente a tutte le domande!",
        "🌟 NIESAMOWITE! Odpowiedziałeś poprawnie na wszystkie pytania!",
        "🌟 GEWELDIG! Je hebt alle vragen goed beantwoord!",
        "🌟 КЕРЕМЕТ! Барлық сұраққа дұрыс жауап бердің!",
        "🌟 NEUVĚŘITELNÉ! Odpověděl jsi správně na všechny otázky!"
    ],
    "🚀 Отличный результат! Ты много знаешь о космосе!": [
        "🚀 Great result! You know a lot about space!",
        "🚀 Excellent résultat ! Tu connais bien l'espace !",
        "🚀 Tolles Ergebnis! Du weißt viel über den Weltraum!",
        "🚀 ¡Gran resultado! ¡Sabes mucho sobre el espacio!",
        "🚀 Ottimo risultato! Sai molto sullo spazio!",
        "🚀 Świetny wynik! Dużo wiesz o kosmosie!",
        "🚀 Geweldig resultaat! Je weet veel over de ruimte!",
        "🚀 Тамаша нәтиже! Сен ғарыш туралы көп білесің!",
        "🚀 Skvělý výsledek! O vesmíru toho víš hodně!"
    ],
    "🪐 Хорошее начало! Продолжай исследовать космос!": [
        "🪐 Good start! Keep exploring space!",
        "🪐 Bon début ! Continue à explorer l'espace !",
        "🪐 Guter Anfang! Erforsche weiter den Weltraum!",
        "🪐 ¡Buen comienzo! ¡Sigue explorando el espacio!",
        "🪐 Buon inizio! Continua a esplorare lo spazio!",
        "🪐 Dobry początek! Odkrywaj dalej kosmos!",
        "🪐 Goed begin! Blijf de ruimte verkennen!",
        "🪐 Жақсы бастама! Ғарышты зерттеуді жалғастыр!",
        "🪐 Dobrý začátek! Pokračuj ve zkoumání vesmíru!"
    ],
    "🌌 Впереди ещё много открытий. Попробуй снова!": [
        "🌌 Many discoveries lie ahead. Try again!",
        "🌌 Beaucoup de découvertes t'attendent. Réessaie !",
        "🌌 Es gibt noch viel zu entdecken. Versuche es erneut!",
        "🌌 Aún quedan muchos descubrimientos. ¡Inténtalo de nuevo!",
        "🌌 Ti aspettano ancora tante scoperte. Riprova!",
        "🌌 Przed tobą jeszcze wiele odkryć. Spróbuj ponownie!",
        "🌌 Er valt nog veel te ontdekken. Probeer het opnieuw!",
        "🌌 Алда әлі талай жаңалық бар. Қайта көр!",
        "🌌 Ještě tě čeká mnoho objevů. Zkus to znovu!"
    ],
    "БОСС ПОБЕЖДЁН!": [
        "BOSS DEFEATED!", "BOSS VAINCU !", "BOSS BESIEGT!",
        "¡JEFE DERROTADO!", "BOSS SCONFITTO!", "BOSS POKONANY!",
        "BAAS VERSLAGEN!", "БОСС ЖЕҢІЛДІ!", "BOSS PORAŽEN!"
    ],
    "Ты выдержал все пять вопросов!": [
        "You made it through all five questions!",
        "Tu as réussi les cinq questions !",
        "Du hast alle fünf Fragen überstanden!",
        "¡Has superado las cinco preguntas!",
        "Hai superato tutte e cinque le domande!",
        "Przetrwałeś wszystkie pięć pytań!",
        "Je hebt alle vijf vragen doorstaan!",
        "Сен бес сұрақтың бәрінен өттің!",
        "Zvládl jsi všech pět otázek!"
    ],
    "🏆 Победа! Ты настоящий покоритель космоса!": [
        "🏆 Victory! You're a true conqueror of space!",
        "🏆 Victoire ! Tu es un véritable conquérant de l'espace !",
        "🏆 Sieg! Du bist ein wahrer Bezwinger des Weltraums!",
        "🏆 ¡Victoria! ¡Eres un auténtico conquistador del espacio!",
        "🏆 Vittoria! Sei un vero conquistatore dello spazio!",
        "🏆 Zwycięstwo! Jesteś prawdziwym zdobywcą kosmosu!",
        "🏆 Gewonnen! Je bent een echte veroveraar van de ruimte!",
        "🏆 Жеңіс! Сен нағыз ғарыш бағындырушысысың!",
        "🏆 Vítězství! Jsi skutečný dobyvatel vesmíru!"
    ],
    "БИТВА ПРОИГРАНА": [
        "BATTLE LOST", "COMBAT PERDU", "KAMPF VERLOREN",
        "BATALLA PERDIDA", "BATTAGLIA PERSA", "WALKA PRZEGRANA",
        "GEVECHT VERLOREN", "ШАЙҚАС ЖЕҢІЛДІ", "SOUBOJ PROHRÁN"
    ],
    "Босс оказался сильнее на этот раз.": [
        "The boss was stronger this time.",
        "Le boss était plus fort cette fois.",
        "Der Boss war diesmal stärker.",
        "El jefe fue más fuerte esta vez.",
        "Questa volta il boss era più forte.",
        "Tym razem boss okazał się silniejszy.",
        "De baas was deze keer sterker.",
        "Бұл жолы босс күштірек болды.",
        "Boss byl tentokrát silnější."
    ],
    "💫 Передохни и попробуй ещё раз!": [
        "💫 Take a breather and try again!",
        "💫 Reprends ton souffle et réessaie !",
        "💫 Atme kurz durch und versuche es erneut!",
        "💫 Descansa un momento e inténtalo otra vez.",
        "💫 Fai una pausa e riprova!",
        "💫 Odpocznij chwilę i spróbuj ponownie!",
        "💫 Neem even pauze en probeer het opnieuw!",
        "💫 Демалып алып, қайта көр!",
        "💫 Odpočiň si a zkus to znovu!"
    ]
};

/* Добавляем строки к уже существующему словарю переводов. */
Object.assign(allTranslations, atlasPatchTranslations);

Object.keys(atlasPatchTranslations).forEach(key => {
    translationLookup[key.toLocaleLowerCase("ru-RU")] =
        atlasPatchTranslations[key];
});

/* Перевод динамических строк с числами. */
const atlasDynamicLabels = {
    en: { question: "Question", of: "of", score: "Score", finalScore: "Final score", explored: "Objects explored", overall: "Overall progress", quizDone: "Quiz complete! Your score: ", quizWrong: "❌ Not quite! Correct answer: ", bossWrong: "💥 Wrong! Correct answer: " },
    fr: { question: "Question", of: "sur", score: "Score", finalScore: "Score final", explored: "Objets explorés", overall: "Progression totale", quizDone: "Quiz terminé ! Ton résultat : ", quizWrong: "❌ Pas tout à fait ! Bonne réponse : ", bossWrong: "💥 Erreur ! Bonne réponse : " },
    de: { question: "Frage", of: "von", score: "Punkte", finalScore: "Endpunktzahl", explored: "Erforschte Objekte", overall: "Gesamtfortschritt", quizDone: "Quiz abgeschlossen! Dein Ergebnis: ", quizWrong: "❌ Nicht ganz! Richtige Antwort: ", bossWrong: "💥 Falsch! Richtige Antwort: " },
    es: { question: "Pregunta", of: "de", score: "Puntuación", finalScore: "Puntuación final", explored: "Objetos explorados", overall: "Progreso total", quizDone: "¡Cuestionario terminado! Tu resultado: ", quizWrong: "❌ ¡No exactamente! Respuesta correcta: ", bossWrong: "💥 ¡Error! Respuesta correcta: " },
    it: { question: "Domanda", of: "di", score: "Punteggio", finalScore: "Punteggio finale", explored: "Oggetti esplorati", overall: "Progresso totale", quizDone: "Quiz completato! Il tuo risultato: ", quizWrong: "❌ Non proprio! Risposta corretta: ", bossWrong: "💥 Errore! Risposta corretta: " },
    pl: { question: "Pytanie", of: "z", score: "Punkty", finalScore: "Wynik końcowy", explored: "Zbadane obiekty", overall: "Łączny postęp", quizDone: "Quiz ukończony! Twój wynik: ", quizWrong: "❌ Nie całkiem! Prawidłowa odpowiedź: ", bossWrong: "💥 Błąd! Prawidłowa odpowiedź: " },
    nl: { question: "Vraag", of: "van", score: "Score", finalScore: "Eindscore", explored: "Onderzochte objecten", overall: "Totale voortgang", quizDone: "Quiz voltooid! Jouw resultaat: ", quizWrong: "❌ Niet helemaal! Goed antwoord: ", bossWrong: "💥 Fout! Goed antwoord: " },
    kk: { question: "Сұрақ", of: "/", score: "Ұпай", finalScore: "Қорытынды ұпай", explored: "Зерттелген нысандар", overall: "Жалпы прогресс", quizDone: "Викторина аяқталды! Нәтижең: ", quizWrong: "❌ Онша дұрыс емес! Дұрыс жауап: ", bossWrong: "💥 Қате! Дұрыс жауап: " },
    cs: { question: "Otázka", of: "z", score: "Body", finalScore: "Celkové skóre", explored: "Prozkoumané objekty", overall: "Celkový postup", quizDone: "Kvíz dokončen! Tvůj výsledek: ", quizWrong: "❌ Ne tak docela! Správná odpověď: ", bossWrong: "💥 Chyba! Správná odpověď: " }
};

/* Сохраняем старый переводчик и дополняем его, а не ломаем. */
const atlasPreviousTranslateText = translateText;

function atlasTranslateDynamicText(value, language) {
    const labels = atlasDynamicLabels[language];
    if (!labels) return null;

    const text = String(value ?? "").trim();
    let match;

    match = text.match(/^Вопрос (\d+) из (\d+): (.+)$/);
    if (match) {
        return `${labels.question} ${match[1]} ${labels.of} ${match[2]}: ${atlasPreviousTranslateText(match[3], language)}`;
    }

    match = text.match(/^Вопрос (\d+) из (\d+)$/);
    if (match) {
        return `${labels.question} ${match[1]} ${labels.of} ${match[2]}`;
    }

    match = text.match(/^Исследовано объектов: (\d+) из (\d+)$/);
    if (match) {
        return `${labels.explored}: ${match[1]} / ${match[2]}`;
    }

    match = text.match(/^Общий прогресс: (\d+)%$/);
    if (match) {
        return `${labels.overall}: ${match[1]}%`;
    }

    match = text.match(/^Очки: (\d+)$/);
    if (match) {
        return `${labels.score}: ${match[1]}`;
    }

    match = text.match(/^Итоговые очки: (\d+) из (\d+)$/);
    if (match) {
        return `${labels.finalScore}: ${match[1]} ${labels.of} ${match[2]}`;
    }

    match = text.match(/^🏆 Викторина завершена! Твой результат: (\d+) из (\d+)\.$/);
    if (match) {
        return `🏆 ${labels.quizDone}${match[1]} ${labels.of} ${match[2]}.`;
    }

    match = text.match(/^❌ Не совсем! Правильный ответ: (.+)\.$/);
    if (match) {
        return `${labels.quizWrong}${atlasPreviousTranslateText(match[1], language)}.`;
    }

    match = text.match(/^💥 Ошибка! Правильный ответ: (.+)\.$/);
    if (match) {
        return `${labels.bossWrong}${atlasPreviousTranslateText(match[1], language)}.`;
    }

    return null;
}

/* Подменяем переводчик: сначала динамические строки, затем обычный словарь. */
translateText = function (text, language) {
    if (!text || language === "ru") return text;

    const dynamic = atlasTranslateDynamicText(text, language);
    if (dynamic !== null) {
        return String(text).replace(String(text).trim(), dynamic);
    }

    return atlasPreviousTranslateText(text, language);
};

/* Переводим placeholder и подсказки, в том числе у полей ввода. */
function atlasTranslateAttributes(language) {
    const attributes = ["title", "aria-label", "placeholder", "alt", "value"];

    document.querySelectorAll("*").forEach(element => {
        attributes.forEach(attribute => {
            if (!element.hasAttribute(attribute)) return;

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
    });
}

/* После обычного перевода страницы обновляем и атрибуты. */
const atlasPreviousTranslateStaticPage = translateStaticPage;

translateStaticPage = function () {
    atlasPreviousTranslateStaticPage();
    atlasTranslateAttributes(getLanguage());
};

/* Переводим страницу повторно при смене языка через главное меню. */
if (
    typeof window.changeLanguage === "function" &&
    !window.__atlasLanguageWrapped
) {
    const atlasOriginalChangeLanguage = window.changeLanguage;

    window.changeLanguage = function (language) {
        const result = atlasOriginalChangeLanguage.apply(this, arguments);

        window.setTimeout(() => {
            if (languageIndex[language] !== undefined || language === "ru") {
                translateStaticPage();
            }
        }, 0);

        return result;
    };

    window.__atlasLanguageWrapped = true;
}

/* Подстраховка для переключателей языка, созданных через HTML. */
document.addEventListener("click", event => {
    const control = event.target.closest(
        "[data-language], [onclick*='changeLanguage'], .language-option, .language-item"
    );

    if (control) {
        window.setTimeout(() => translateStaticPage(), 0);
    }
}, true);

/* Поиск учитывает переведённые названия и описания карточек. */
const atlasSearchInput = document.getElementById("search");

if (atlasSearchInput && !atlasSearchInput.dataset.localizedSearchAttached) {
    atlasSearchInput.dataset.localizedSearchAttached = "true";

    atlasSearchInput.addEventListener("input", function () {
        const query = this.value.trim().toLocaleLowerCase();

        document.querySelectorAll(".object-card").forEach(card => {
            const searchableText =
                `${card.textContent} ${card.dataset.name || ""}`.toLocaleLowerCase();

            card.hidden = query
                ? !searchableText.includes(query)
                : false;
        });
    });
}
// =====================================================
// ДОПОЛНЕНИЕ ПЕРЕВОДА КОСМИЧЕСКОГО АТЛАСА
// Порядок языков: en, fr, de, es, it, pl, nl, kk, cs
// =====================================================

const atlasCompletePhraseTranslations = {
    "← На главную": [
        "← Home", "← Accueil", "← Zur Startseite",
        "← Volver al inicio", "← Torna alla pagina principale",
        "← Strona główna", "← Naar de hoofdpagina",
        "← Басты бетке", "← Zpět na hlavní stránku"
    ],

    "Исследуй Вселенную вместе с Папайрусом!": [
        "Explore the universe with Papyrus!",
        "Explore l’Univers avec Papyrus !",
        "Erkunde das Universum mit Papyrus!",
        "¡Explora el universo con Papyrus!",
        "Esplora l’universo con Papyrus!",
        "Odkrywaj Wszechświat z Papyrusem!",
        "Ontdek het heelal samen met Papyrus!",
        "Папируспен бірге Ғаламды зертте!",
        "Prozkoumej vesmír s Papyrusem!"
    ],

    "Звезда, которая освещает и согревает нашу планетную систему.": [
        "The star that lights and warms our planetary system.",
        "L’étoile qui éclaire et réchauffe notre système planétaire.",
        "Der Stern, der unser Planetensystem erhellt und erwärmt.",
        "La estrella que ilumina y calienta nuestro sistema planetario.",
        "La stella che illumina e riscalda il nostro sistema planetario.",
        "Gwiazda, która oświetla i ogrzewa nasz układ planetarny.",
        "De ster die ons planetenstelsel verlicht en verwarmt.",
        "Ғаламшарлар жүйемізді жарықтандырып, жылытатын жұлдыз.",
        "Hvězda, která osvětluje a zahřívá naši planetární soustavu."
    ],

    "Наш родной мир, на котором существует жизнь.": [
        "Our home world, where life exists.",
        "Notre monde, où la vie existe.",
        "Unsere Heimatwelt, auf der Leben existiert.",
        "Nuestro mundo, donde existe la vida.",
        "Il nostro mondo, dove esiste la vita.",
        "Nasz domowy świat, na którym istnieje życie.",
        "Onze thuiswereld, waar leven bestaat.",
        "Тіршілік бар туған әлеміміз.",
        "Náš domovský svět, na kterém existuje život."
    ],

    "Красная планета с вулканами, каньонами и ледяными запасами.": [
        "The Red Planet, with volcanoes, canyons and ice deposits.",
        "La planète rouge, avec ses volcans, ses canyons et ses réserves de glace.",
        "Der Rote Planet mit Vulkanen, Canyons und Eisvorkommen.",
        "El planeta rojo, con volcanes, cañones y depósitos de hielo.",
        "Il Pianeta Rosso, con vulcani, canyon e depositi di ghiaccio.",
        "Czerwona planeta z wulkanami, kanionami i pokładami lodu.",
        "De rode planeet met vulkanen, ravijnen en ijsvoorraden.",
        "Жанартаулары, каньондары және мұз қоры бар Қызыл ғаламшар.",
        "Rudá planeta se sopkami, kaňony a zásobami ledu."
    ],

    "Карликовая планета в поясе Койпера за орбитой Нептуна.": [
        "A dwarf planet in the Kuiper Belt beyond Neptune’s orbit.",
        "Une planète naine dans la ceinture de Kuiper, au-delà de l’orbite de Neptune.",
        "Ein Zwergplanet im Kuipergürtel jenseits der Neptunbahn.",
        "Un planeta enano del cinturón de Kuiper, más allá de la órbita de Neptuno.",
        "Un pianeta nano nella fascia di Kuiper, oltre l’orbita di Nettuno.",
        "Planeta karłowata w Pasie Kuipera za orbitą Neptuna.",
        "Een dwergplaneet in de Kuipergordel voorbij de baan van Neptunus.",
        "Нептун орбитасынан тыс Койпер белдеуінде орналасқан ергежейлі ғаламшар.",
        "Trpasličí planeta v Kuiperově pásu za oběžnou dráhou Neptunu."
    ],

    "Самая близкая к Солнцу планета.": [
        "The planet closest to the Sun.",
        "La planète la plus proche du Soleil.",
        "Der Planet, der der Sonne am nächsten ist.",
        "El planeta más cercano al Sol.",
        "Il pianeta più vicino al Sole.",
        "Planeta najbliższa Słońcu.",
        "De planeet die het dichtst bij de zon staat.",
        "Күнге ең жақын ғаламшар.",
        "Planeta nejbližší Slunci."
    ],

    "Очень горячая планета с плотной атмосферой.": [
        "A very hot planet with a dense atmosphere.",
        "Une planète très chaude à l’atmosphère dense.",
        "Ein sehr heißer Planet mit dichter Atmosphäre.",
        "Un planeta muy caliente con una atmósfera densa.",
        "Un pianeta molto caldo con un’atmosfera densa.",
        "Bardzo gorąca planeta z gęstą atmosferą.",
        "Een zeer hete planeet met een dichte atmosfeer.",
        "Атмосферасы тығыз, өте ыстық ғаламшар.",
        "Velmi horká planeta s hustou atmosférou."
    ],

    "Ледяной гигант, вращающийся почти на боку.": [
        "An ice giant that rotates almost on its side.",
        "Une géante glacée qui tourne presque sur le côté.",
        "Ein Eisriese, der sich fast auf der Seite dreht.",
        "Un gigante helado que gira casi de lado.",
        "Un gigante ghiacciato che ruota quasi su un fianco.",
        "Lodowy olbrzym obracający się niemal na boku.",
        "Een ijsreus die bijna op zijn kant draait.",
        "Бүйірімен айналатындай болып айналатын мұз алыбы.",
        "Ledový obr, který se otáčí téměř na boku."
    ],

    "Естественный спутник Земли, покрытый кратерами.": [
        "Earth’s natural satellite, covered with craters.",
        "Le satellite naturel de la Terre, couvert de cratères.",
        "Der natürliche Satellit der Erde, bedeckt mit Kratern.",
        "El satélite natural de la Tierra, cubierto de cráteres.",
        "Il satellite naturale della Terra, ricoperto di crateri.",
        "Naturalny satelita Ziemi pokryty kraterami.",
        "De natuurlijke satelliet van de aarde, bedekt met kraters.",
        "Кратерлермен көмкерілген Жердің табиғи серігі.",
        "Přirozená družice Země pokrytá krátery."
    ],

    "Самая большая планета Солнечной системы.": [
        "The largest planet in the Solar System.",
        "La plus grande planète du Système solaire.",
        "Der größte Planet des Sonnensystems.",
        "El planeta más grande del sistema solar.",
        "Il pianeta più grande del Sistema solare.",
        "Największa planeta Układu Słonecznego.",
        "De grootste planeet van het zonnestelsel.",
        "Күн жүйесіндегі ең үлкен ғаламшар.",
        "Největší planeta Sluneční soustavy."
    ],

    "Газовый гигант со знаменитой системой колец.": [
        "A gas giant with a famous ring system.",
        "Une géante gazeuse dotée d’un célèbre système d’anneaux.",
        "Ein Gasriese mit einem berühmten Ringsystem.",
        "Un gigante gaseoso con un famoso sistema de anillos.",
        "Un gigante gassoso con un famoso sistema di anelli.",
        "Gazowy olbrzym ze słynnym systemem pierścieni.",
        "Een gasreus met een beroemd ringenstelsel.",
        "Әйгілі сақиналар жүйесі бар газ алыбы.",
        "Plynný obr se známou soustavou prstenců."
    ],

    "Далёкий ледяной гигант на окраине Солнечной системы.": [
        "A distant ice giant at the edge of the Solar System.",
        "Une lointaine géante glacée aux confins du Système solaire.",
        "Ein ferner Eisriese am Rand des Sonnensystems.",
        "Un gigante helado lejano en los confines del sistema solar.",
        "Un gigante ghiacciato lontano, ai confini del Sistema solare.",
        "Daleki lodowy olbrzym na obrzeżach Układu Słonecznego.",
        "Een verre ijsreus aan de rand van het zonnestelsel.",
        "Күн жүйесінің шетінде орналасқан алыстағы мұз алыбы.",
        "Vzdálený ledový obr na okraji Sluneční soustavy."
    ],

    "Исследовать": [
        "Explore", "Explorer", "Erkunden",
        "Explorar", "Esplora", "Badaj",
        "Onderzoeken", "Зерттеу", "Prozkoumat"
    ],

    "🎯 Задание исследователя": [
        "🎯 Explorer Mission", "🎯 Mission d’exploration",
        "🎯 Forscheraufgabe", "🎯 Misión del explorador",
        "🎯 Missione dell’esploratore", "🎯 Zadanie odkrywcy",
        "🎯 Onderzoeksmissie", "🎯 Зерттеушінің тапсырмасы",
        "🎯 Úkol průzkumníka"
    ],

    "Открой информацию о трёх разных космических объектах!": [
        "Discover information about three different space objects!",
        "Découvre des informations sur trois objets spatiaux différents !",
        "Entdecke Informationen über drei verschiedene Weltraumobjekte!",
        "¡Descubre información sobre tres objetos espaciales diferentes!",
        "Scopri informazioni su tre diversi oggetti spaziali!",
        "Poznaj informacje o trzech różnych obiektach kosmicznych!",
        "Ontdek informatie over drie verschillende ruimteobjecten!",
        "Үш түрлі ғарыш нысаны туралы ақпаратты аш!",
        "Objev informace o třech různých vesmírných objektech!"
    ],

    "🎮 Космическая викторина": [
        "🎮 Space Quiz", "🎮 Quiz spatial",
        "🎮 Weltraumquiz", "🎮 Cuestionario espacial",
        "🎮 Quiz spaziale", "🎮 Kosmiczny quiz",
        "🎮 Ruimtequiz", "🎮 Ғарыш викторинасы",
        "🎮 Vesmírný kvíz"
    ],

    "Космическая викторина": [
        "Space Quiz", "Quiz spatial",
        "Weltraumquiz", "Cuestionario espacial",
        "Quiz spaziale", "Kosmiczny quiz",
        "Ruimtequiz", "Ғарыш викторинасы",
        "Vesmírný kvíz"
    ],

    "Проверь, насколько хорошо ты знаешь Солнечную систему!": [
        "Test how well you know the Solar System!",
        "Teste tes connaissances sur le Système solaire !",
        "Teste dein Wissen über das Sonnensystem!",
        "¡Pon a prueba tus conocimientos del sistema solar!",
        "Metti alla prova la tua conoscenza del Sistema solare!",
        "Sprawdź, jak dobrze znasz Układ Słoneczny!",
        "Test hoe goed je het zonnestelsel kent!",
        "Күн жүйесі туралы біліміңді тексер!",
        "Ověř si, jak dobře znáš Sluneční soustavu!"
    ],

    "Впереди пять сложнейших вопросов. Сможешь победить?": [
        "Five very challenging questions lie ahead. Can you win?",
        "Cinq questions très difficiles t’attendent. Peux-tu gagner ?",
        "Fünf äußerst schwierige Fragen warten auf dich. Kannst du gewinnen?",
        "Te esperan cinco preguntas muy difíciles. ¿Podrás ganar?",
        "Ti aspettano cinque domande difficilissime. Riuscirai a vincere?",
        "Przed tobą pięć bardzo trudnych pytań. Czy uda ci się wygrać?",
        "Er wachten vijf bijzonder moeilijke vragen op je. Kun je winnen?",
        "Алда бес өте қиын сұрақ бар. Жеңе аласың ба?",
        "Čeká tě pět velmi obtížných otázek. Dokážeš vyhrát?"
    ],

    "Босс ждёт вызова!": [
        "The boss awaits your challenge!",
        "Le boss attend ton défi !",
        "Der Boss wartet auf deine Herausforderung!",
        "¡El jefe espera tu desafío!",
        "Il boss attende la tua sfida!",
        "Boss czeka na twoje wyzwanie!",
        "De eindbaas wacht op je uitdaging!",
        "Босс сенің шақыруыңды күтіп тұр!",
        "Boss čeká na tvou výzvu!"
    ],

    "Готов к битве?": [
        "Ready for battle?", "Prêt pour le combat ?",
        "Bereit für den Kampf?", "¿Listo para la batalla?",
        "Pronto per la battaglia?", "Gotowy do walki?",
        "Klaar voor de strijd?", "Шайқасқа дайынсың ба?",
        "Jsi připraven na bitvu?"
    ],

    "⚔️ Начать битву": [
        "⚔️ Start Battle", "⚔️ Commencer le combat",
        "⚔️ Kampf starten", "⚔️ Iniciar batalla",
        "⚔️ Inizia la battaglia", "⚔️ Rozpocznij bitwę",
        "⚔️ Begin het gevecht", "⚔️ Шайқасты бастау",
        "⚔️ Zahájit bitvu"
    ],

    "🏆 Достижение открыто: «Первый исследователь»!": [
        "🏆 Achievement unlocked: “First Explorer”!",
        "🏆 Succès débloqué : « Premier explorateur » !",
        "🏆 Errungenschaft freigeschaltet: „Erster Entdecker“!",
        "🏆 ¡Logro desbloqueado: «Primer explorador»!",
        "🏆 Obiettivo sbloccato: «Primo esploratore»!",
        "🏆 Osiągnięcie odblokowane: „Pierwszy odkrywca”!",
        "🏆 Prestatie ontgrendeld: ‘Eerste ontdekkingsreiziger’!",
        "🏆 Жетістік ашылды: «Алғашқы зерттеуші»!",
        "🏆 Úspěch odemčen: „První průzkumník“!"
    ]
};

// Регистрируем целые фразы, чтобы слова не переводились по частям.
Object.assign(allTranslations, atlasCompletePhraseTranslations);

Object.keys(atlasCompletePhraseTranslations).forEach(key => {
    translationLookup[key.toLocaleLowerCase("ru-RU")] =
        atlasCompletePhraseTranslations[key];
});
/* =========================================================
   КОНЕЦ ДОПОЛНЕНИЯ ДЛЯ АТЛАСА
   ========================================================= */
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
