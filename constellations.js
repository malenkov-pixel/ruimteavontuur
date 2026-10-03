let currentLanguage =
    localStorage.getItem("siteLanguage") || "ru";


// 🌌 Переводы страницы «Мечты Чарли Морнингстар»

const constellationPageTranslations = {

    // 🇷🇺 Русский
    ru: {
        title: "✨ Мечты Чарли Морнингстар",
        subtitle: "Добро пожаловать в мир созвездий",
        back: "← Вернуться в космическое приключение",

        names: {
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
            "Пегас": "Пегас",
            "Водолей": "Водолей",
            "Дева": "Дева",
            "Козерог": "Козерог",
            "Южный Крест": "Южный Крест",
            "Кентавр": "Кентавр"
        },

        descriptions: {
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
            "Пегас": "Большое созвездие северного неба, названное в честь крылатого коня Пегаса.",
            "Водолей": "Зодиакальное созвездие, расположенное в области неба между Козерогом и Рыбами.",
            "Дева": "Большое зодиакальное созвездие, рядом с которым находится яркая звезда Спика.",
            "Козерог": "Зодиакальное созвездие южного неба, изображаемое в виде мифического морского козла.",
            "Южный Крест": "Небольшое, но хорошо узнаваемое созвездие южного неба в форме креста.",
            "Кентавр": "Большое южное созвездие, в котором находится ближайшая к Солнцу звёздная система Альфа Центавра."
        }
    },


    // 🇰🇿 Қазақша
    kk: {
        title: "✨ Чарли Морнингстардың армандары",
        subtitle: "Шоқжұлдыздар әлеміне қош келдіңіз",
        back: "← Ғарыштық саяхатқа оралу",

        names: {
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
            "Пегас": "Пегас",
            "Водолей": "Суқұйғыш",
            "Дева": "Бикеш",
            "Козерог": "Тауешкі",
            "Южный Крест": "Оңтүстік Крест",
            "Кентавр": "Кентавр"
        },

        descriptions: {
            "Большая Медведица": "Солтүстік аспандағы ең танымал шоқжұлдыздардың бірі.",
            "Малая Медведица": "Солтүстік аспанда орналасқан, ішінде Темірқазық жұлдызы бар танымал шоқжұлдыз.",
            "Орион": "Қысқы аспандағы жарық әрі оңай танылатын шоқжұлдыз.",
            "Кассиопея": "W әрпіне ұқсас ерекше пішінімен танымал солтүстік аспан шоқжұлдызы.",
            "Лебедь": "Құс жолының бойында орналасқан жазғы аспан шоқжұлдызы.",
            "Лира": "Жарық Вега жұлдызымен танымал шағын шоқжұлдыз.",
            "Андромеда": "Ежелгі грек мифологиясындағы кейіпкердің атымен аталған солтүстік аспан шоқжұлдызы.",
            "Телец": "Плеядалар жұлдыздар шоғырымен танымал зодиак шоқжұлдызы.",
            "Скорпион": "Өзіне тән иілген пішіні бар оңтүстік аспанның жарық шоқжұлдызы.",
            "Персей": "Ежелгі грек мифологиясындағы батырдың құрметіне аталған солтүстік аспан шоқжұлдызы.",
            "Большой Пёс": "Оңтүстік аспанда орналасқан, ішінде жарық Сириус жұлдызы бар шоқжұлдыз.",
            "Стрелец": "Құс жолының орталығы бағытына қарай орналасқан зодиак шоқжұлдызы.",
            "Близнецы": "Кастор және Поллукс атты жарық жұлдыздарымен танымал зодиак шоқжұлдызы.",
            "Лев": "Арыстанның бейнесіне ұқсайтын зодиак шоқжұлдызы.",
            "Цефей": "Ежелгі грек мифологиясындағы патшаның құрметіне аталған солтүстік аспан шоқжұлдызы.",
            "Пегас": "Қанатты Пегастың құрметіне аталған солтүстік аспандағы үлкен шоқжұлдыз.",
            "Водолей": "Тауешкі мен Балықтар арасындағы аспан аймағында орналасқан зодиак шоқжұлдызы.",
            "Дева": "Жарық Спика жұлдызы орналасқан үлкен зодиак шоқжұлдызы.",
            "Козерог": "Мифтік теңіз ешкісі бейнесімен байланысты оңтүстік аспандағы зodиак шоқжұлдызы.",
            "Южный Крест": "Крест тәрізді пішінімен танымал оңтүстік аспанның шағын шоқжұлдызы.",
            "Кентавр": "Күнге ең жақын жұлдыздар жүйесі Альфа Центавра орналасқан үлкен оңтүстік шоқжұлдыз."
        }
    },


    // 🇨🇿 Čeština
    cs: {
        title: "✨ Sny Charlieho Morningstara",
        subtitle: "Vítejte ve světě souhvězdí",
        back: "← Zpět ke kosmickému dobrodružství",

        names: {
            "Большая Медведица": "Velká medvědice",
            "Малая Медведица": "Malý medvěd",
            "Орион": "Orion",
            "Кассиопея": "Kasiopeia",
            "Лебедь": "Labutě",
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
            "Пегас": "Pegas",
            "Водолей": "Vodnář",
            "Дева": "Panna",
            "Козерог": "Kozoroh",
            "Южный Крест": "Jižní kříž",
            "Кентавр": "Kentaur"
        },

        descriptions: {
            "Большая Медведица": "Jedno z nejznámějších souhvězdí severní oblohy.",
            "Малая Медведица": "Známé souhvězdí severní oblohy, ve kterém se nachází Polárka.",
            "Орион": "Jasné a snadno rozpoznatelné souhvězdí zimní oblohy.",
            "Кассиопея": "Souhvězdí severní oblohy rozpoznatelné podle charakteristického tvaru písmene W.",
            "Лебедь": "Souhvězdí letní oblohy ležící podél Mléčné dráhy.",
            "Лира": "Malé souhvězdí známé jasnou hvězdou Vega.",
            "Андромеда": "Souhvězdí severní oblohy pojmenované podle hrdinky starořeckých mýtů.",
            "Телец": "Souhvězdí zvěrokruhu známé hvězdokupou Plejády.",
            "Скорпион": "Jasné souhvězdí jižní oblohy s charakteristickým zakřiveným tvarem.",
            "Персей": "Souhvězdí severní oblohy pojmenované po hrdinovi starořeckých mýtů.",
            "Большой Пёс": "Souhvězdí jižní oblohy, ve kterém se nachází jasná hvězda Sirius.",
            "Стрелец": "Souhvězdí zvěrokruhu ležící směrem ke středu Mléčné dráhy.",
            "Близнецы": "Souhvězdí zvěrokruhu známé jasnými hvězdami Castor a Pollux.",
            "Лев": "Souhvězdí zvěrokruhu připomínající postavu lva.",
            "Цефей": "Souhvězdí severní oblohy pojmenované po králi ze starořecké mytologie.",
            "Пегас": "Velké souhvězdí severní oblohy pojmenované po okřídleném koni Pegasovi.",
            "Водолей": "Znamení zvěrokruhu nacházející se mezi Kozorohem a Rybami.",
            "Дева": "Velké souhvězdí zvěrokruhu, v jehož oblasti se nachází jasná hvězda Spica.",
            "Козерог": "Souhvězdí zvěrokruhu jižní oblohy zobrazované jako mytický mořský kozel.",
            "Южный Крест": "Malé, ale snadno rozpoznatelné souhvězdí jižní oblohy ve tvaru kříže.",
            "Кентавр": "Velké souhvězdí jižní oblohy, ve kterém se nachází hvězdný systém Alfa Centauri."
        }
    },


    // 🇬🇧 English
    en: {
        title: "✨ Charlie Morningstar's Dreams",
        subtitle: "Welcome to the world of constellations",
        back: "← Back to the space adventure",

        names: {
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
            "Пегас": "Pegasus",
            "Водолей": "Aquarius",
            "Дева": "Virgo",
            "Козерог": "Capricornus",
            "Южный Крест": "Crux",
            "Кентавр": "Centaurus"
        },

        descriptions: {
            "Большая Медведица": "One of the most recognizable constellations in the northern sky.",
            "Малая Медведица": "A famous northern constellation containing the North Star.",
            "Орион": "A bright and easily recognizable constellation of the winter sky.",
            "Кассиопея": "A northern constellation recognized by its distinctive W shape.",
            "Лебедь": "A summer constellation located along the Milky Way.",
            "Лира": "A small constellation known for the bright star Vega.",
            "Андромеда": "A northern constellation named after a heroine from ancient Greek mythology.",
            "Телец": "A zodiac constellation known for the Pleiades star cluster.",
            "Скорпион": "A bright southern constellation with a distinctive curved shape.",
            "Персей": "A northern constellation named after a hero from ancient Greek mythology.",
            "Большой Пёс": "A southern constellation containing the bright star Sirius.",
            "Стрелец": "A zodiac constellation located in the direction of the center of the Milky Way.",
            "Близнецы": "A zodiac constellation known for the bright stars Castor and Pollux.",
            "Лев": "A zodiac constellation resembling the figure of a lion.",
            "Цефей": "A northern constellation named after a king from ancient Greek mythology.",
            "Пегас": "A large northern constellation named after the winged horse Pegasus.",
            "Водолей": "A zodiac constellation located between Capricornus and Pisces.",
            "Дева": "A large zodiac constellation known for the bright star Spica.",
            "Козерог": "A zodiac constellation of the southern sky associated with a mythical sea-goat.",
            "Южный Крест": "A small but distinctive southern constellation shaped like a cross.",
            "Кентавр": "A large southern constellation containing the Alpha Centauri star system."
        }
    },


    // 🇩🇪 Deutsch
    de: {
        title: "✨ Die Träume von Charlie Morningstar",
        subtitle: "Willkommen in der Welt der Sternbilder",
        back: "← Zurück zum Weltraumabenteuer",

        names: {
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
            "Пегас": "Pegasus",
            "Водолей": "Wassermann",
            "Дева": "Jungfrau",
            "Козерог": "Steinbock",
            "Южный Крест": "Kreuz des Südens",
            "Кентавр": "Zentaur"
        },

        descriptions: {
            "Большая Медведица": "Eines der bekanntesten Sternbilder des nördlichen Himmels.",
            "Малая Медведица": "Ein bekanntes Sternbild des Nordhimmels, in dem sich der Polarstern befindet.",
            "Орион": "Ein helles und leicht erkennbares Sternbild des Winterhimmels.",
            "Кассиопея": "Ein Sternbild des Nordhimmels, das an seiner charakteristischen W-Form erkennbar ist.",
            "Лебедь": "Ein Sternbild des Sommerhimmels, das sich entlang der Milchstraße erstreckt.",
            "Лира": "Ein kleines Sternbild, das für den hellen Stern Wega bekannt ist.",
            "Андромеда": "Ein Sternbild des Nordhimmels, benannt nach einer Heldin der griechischen Mythologie.",
            "Телец": "Ein Sternbild des Tierkreises, das für den Sternhaufen der Plejaden bekannt ist.",
            "Скорпион": "Ein helles Sternbild des Südhimmels mit einer charakteristischen gebogenen Form.",
            "Персей": "Ein Sternbild des Nordhimmels, benannt nach einem Helden der griechischen Mythologie.",
            "Большой Пёс": "Ein Sternbild des Südhimmels, in dem sich der helle Stern Sirius befindet.",
            "Стрелец": "Ein Sternbild des Tierkreises in Richtung des Zentrums der Milchstraße.",
            "Близнецы": "Ein Sternbild des Tierkreises, das für die hellen Sterne Kastor und Pollux bekannt ist.",
            "Лев": "Ein Sternbild des Tierkreises, das die Gestalt eines Löwen darstellt.",
            "Цефей": "Ein Sternbild des Nordhimmels, das nach einem König der griechischen Mythologie benannt wurde.",
            "Пегас": "Ein großes Sternbild des Nordhimmels, das nach dem geflügelten Pferd Pegasus benannt wurde.",
            "Водолей": "Ein Sternbild des Tierkreises zwischen Steinbock und Fischen.",
            "Дева": "Ein großes Sternbild des Tierkreises, in dessen Bereich sich der helle Stern Spica befindet.",
            "Козерог": "Ein Sternbild des Tierkreises am Südhimmel, das mit einem mythischen Seeziegenwesen verbunden ist.",
            "Южный Крест": "Ein kleines, aber markantes Sternbild des Südhimmels in Form eines Kreuzes.",
            "Кентавр": "Ein großes Sternbild des Südhimmels, in dem sich das Sternsystem Alpha Centauri befindet."
        }
    },


    // 🇫🇷 Français
    fr: {
        title: "✨ Les rêves de Charlie Morningstar",
        subtitle: "Bienvenue dans le monde des constellations",
        back: "← Retour à l'aventure spatiale",

        names: {
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
            "Пегас": "Pégase",
            "Водолей": "Verseau",
            "Дева": "Vierge",
            "Козерог": "Capricorne",
            "Южный Крест": "Croix du Sud",
            "Кентавр": "Centaure"
        },

        descriptions: {
            "Большая Медведица": "L'une des constellations les plus reconnaissables du ciel du nord.",
            "Малая Медведица": "Une constellation connue du ciel du nord qui contient l'Étoile Polaire.",
            "Орион": "Une constellation brillante et facilement reconnaissable du ciel hivernal.",
            "Кассиопея": "Une constellation du ciel du nord reconnaissable à sa forme caractéristique en W.",
            "Лебедь": "Une constellation du ciel d'été située le long de la Voie lactée.",
            "Лира": "Une petite constellation connue pour son étoile brillante Véga.",
            "Андромеда": "Une constellation du ciel du nord nommée d'après une héroïne de la mythologie grecque antique.",
            "Телец": "Une constellation du zodiaque connue pour l'amas des Pléiades.",
            "Скорпион": "Une constellation brillante du ciel austral avec une forme courbée caractéristique.",
            "Персей": "Une constellation du ciel du nord nommée d'après un héros de la mythologie grecque antique.",
            "Большой Пёс": "Une constellation du ciel austral qui abrite l'étoile brillante Sirius.",
            "Стрелец": "Une constellation du zodiaque située en direction du centre de la Voie lactée.",
            "Близнецы": "Une constellation du zodiaque connue pour les étoiles brillantes Castor et Pollux.",
            "Лев": "Une constellation du zodiaque qui évoque la silhouette d'un lion.",
            "Цефей": "Une constellation du ciel boréal nommée d'après un roi de la mythologie grecque antique.",
            "Пегас": "Une grande constellation du ciel boréal nommée d'après le cheval ailé Pégase.",
            "Водолей": "Une constellation du zodiaque située entre le Capricorne et les Poissons.",
            "Дева": "Une grande constellation du zodiaque connue pour l'étoile brillante Spica.",
            "Козерог": "Une constellation du zodiaque du ciel austral associée à une créature mythique mi-chèvre mi-poisson.",
            "Южный Крест": "Une petite constellation du ciel austral reconnaissable à sa forme de croix.",
            "Кентавр": "Une grande constellation du ciel austral qui contient le système stellaire Alpha du Centaure."
        }
    },


    // 🇪🇸 Español
    es: {
        title: "✨ Los sueños de Charlie Morningstar",
        subtitle: "Bienvenido al mundo de las constelaciones",
        back: "← Volver a la aventura espacial",

        names: {
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
            "Пегас": "Pegaso",
            "Водолей": "Acuario",
            "Дева": "Virgo",
            "Козерог": "Capricornio",
            "Южный Крест": "Cruz del Sur",
            "Кентавр": "Centauro"
        },

        descriptions: {
            "Большая Медведица": "Una de las constelaciones más reconocibles del cielo del norte.",
            "Малая Медведица": "Una conocida constelación del cielo del norte que contiene la Estrella Polar.",
            "Орион": "Una constelación brillante y fácilmente reconocible del cielo invernal.",
            "Кассиопея": "Una constelación del cielo del norte reconocible por su característica forma de W.",
            "Лебедь": "Una constelación del cielo de verano situada a lo largo de la Vía Láctea.",
            "Лира": "Una pequeña constelación conocida por la brillante estrella Vega.",
            "Андромеда": "Una constelación del cielo del norte llamada así por una heroína de la mitología griega antigua.",
            "Телец": "Una constelación del zodiaco conocida por el cúmulo estelar de las Pléyades.",
            "Скорпион": "Una brillante constelación del cielo del sur con una característica forma curva.",
            "Персей": "Una constelación del cielo del norte llamada así por un héroe de la mitología griega antigua.",
            "Большой Пёс": "Una constelación del cielo austral que contiene la brillante estrella Sirio.",
            "Стрелец": "Una constelación del zodiaco situada en dirección al centro de la Vía Láctea.",
            "Близнецы": "Una constelación del zodiaco conocida por las brillantes estrellas Cástor y Pólux.",
            "Лев": "Una constelación del zodiaco que recuerda a la figura de un león.",
            "Цефей": "Una constelación del cielo del norte llamada así por un rey de la mitología griega antigua.",
            "Пегас": "Una gran constelación del cielo del norte llamada así por el caballo alado Pegaso.",
            "Водолей": "Una constelación del zodiaco situada entre Capricornio y Piscis.",
            "Дева": "Una gran constelación del zodiaco conocida por la brillante estrella Spica.",
            "Козерог": "Una constelación del zodiaco del cielo austral asociada con una criatura mítica mitad cabra, mitad pez.",
            "Южный Крест": "Una pequeña pero distintiva constelación del cielo austral con forma de cruz.",
            "Кентавр": "Una gran constelación del cielo austral que contiene el sistema estelar Alfa Centauri."
        }
    },


    // 🇮🇹 Italiano
    it: {
        title: "✨ I sogni di Charlie Morningstar",
        subtitle: "Benvenuto nel mondo delle costellazioni",
        back: "← Torna all'avventura spaziale",

        names: {
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
            "Пегас": "Pegaso",
            "Водолей": "Acquario",
            "Дева": "Vergine",
            "Козерог": "Capricorno",
            "Южный Крест": "Croce del Sud",
            "Кентавр": "Centauro"
        },

        descriptions: {
            "Большая Медведица": "Una delle costellazioni più riconoscibili del cielo settentrionale.",
            "Малая Медведица": "Una famosa costellazione del cielo settentrionale che contiene la Stella Polare.",
            "Орион": "Una costellazione luminosa e facilmente riconoscibile del cielo invernale.",
            "Кассиопея": "Una costellazione del cielo settentrionale riconoscibile per la sua caratteristica forma a W.",
            "Лебедь": "Una costellazione del cielo estivo situata lungo la Via Lattea.",
            "Лира": "Una piccola costellazione conosciuta per la brillante stella Vega.",
            "Андромеда": "Una costellazione del cielo settentrionale chiamata come un'eroina della mitologia greca antica.",
            "Телец": "Una costellazione dello zodiaco conosciuta per l'ammasso stellare delle Pleiadi.",
            "Скорпион": "Una brillante costellazione del cielo meridionale con una caratteristica forma curva.",
            "Персей": "Una costellazione del cielo settentrionale chiamata in onore di un eroe della mitologia greca antica.",
            "Большой Пёс": "Una costellazione del cielo australe che contiene la brillante stella Sirio.",
            "Стрелец": "Una costellazione dello zodiaco situata in direzione del centro della Via Lattea.",
            "Близнецы": "Una costellazione dello zodiaco conosciuta per le brillanti stelle Castore e Polluce.",
            "Лев": "Una costellazione dello zodiaco che ricorda la figura di un leone.",
            "Цефей": "Una costellazione del cielo settentrionale chiamata in onore di un re della mitologia greca antica.",
            "Пегас": "Una grande costellazione del cielo settentrionale chiamata in onore del cavallo alato Pegaso.",
            "Водолей": "Una costellazione dello zodiaco situata tra il Capricorno e i Pesci.",
            "Дева": "Una grande costellazione dello zodiaco conosciuta per la brillante stella Spica.",
            "Козерог": "Una costellazione dello zodiaco del cielo australe associata a una creatura mitica metà capra e metà pesce.",
            "Южный Крест": "Una piccola ma distintiva costellazione del cielo australe a forma di croce.",
            "Кентавр": "Una grande costellazione del cielo australe che contiene il sistema stellare Alfa Centauri."
        }
    }

};


// 🌌 Обновление страницы

function updateConstellationPage() {

    const data =
        constellationPageTranslations[currentLanguage] ||
        constellationPageTranslations.ru;


    const title =
        document.getElementById("constellationTitle");

    if (title) {
        title.textContent = data.title;
    }


    const subtitle =
        document.getElementById("constellationSubtitle");

    if (subtitle) {
        subtitle.textContent = data.subtitle;
    }


    const back =
        document.getElementById("constellationBack");

    if (back) {
        back.textContent = data.back;
    }


    document
        .querySelectorAll(".constellation-card")
        .forEach(card => {

            const originalName =
                card.dataset.constellation;

            const translatedName =
                data.names?.[originalName] ||
                originalName;


            const nameElement =
                card.querySelector(
                    "h2[data-original-name]"
                );

            if (nameElement) {
                nameElement.textContent =
                    translatedName;
            }


            const descriptionElement =
                card.querySelector(
                    ".constellation-description"
                );

            if (descriptionElement) {
                descriptionElement.textContent =
                    data.descriptions?.[originalName] ||
                    "";
            }


            const image =
                card.querySelector("img");

            if (image) {
                image.alt =
                    translatedName;
            }

        });


    document.title =
        data.title.replace("✨ ", "");


    updateLanguageButton();
}


// 🌐 Данные языковых кнопок

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


// 🌐 Смена языка

function changeLanguage(language) {

    if (!constellationPageTranslations[language]) {
        return;
    }


    currentLanguage = language;


    localStorage.setItem(
        "siteLanguage",
        language
    );


    document.documentElement.lang =
        language;


    updateConstellationPage();


    const dropdown =
        document.getElementById("languageDropdown");

    if (dropdown) {
        dropdown.classList.remove("open");
    }

}


// 🌐 Обновление кнопки выбранного языка

function updateLanguageButton() {

    const button =
        document.getElementById("languageButton");

    if (!button) {
        return;
    }


    const language =
        languageInfo[currentLanguage] ||
        languageInfo.ru;


    button.innerHTML = `

        <img
            src="${language.flag}"
            alt="${language.name}"
        >

        ${language.name}

    `;

}


// 🌐 Открытие / закрытие меню языков

function toggleLanguageMenu() {

    const dropdown =
        document.getElementById("languageDropdown");

    if (!dropdown) {
        return;
    }


    dropdown.classList.toggle("open");

}


// 🌌 Закрытие меню при клике вне него

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


// 🚀 Запуск страницы

document.addEventListener(
    "DOMContentLoaded",
    function () {

        currentLanguage =
            localStorage.getItem("siteLanguage") ||
            "ru";


        if (!constellationPageTranslations[currentLanguage]) {
            currentLanguage = "ru";
        }


        document.documentElement.lang =
            currentLanguage;


        updateConstellationPage();

    }
);