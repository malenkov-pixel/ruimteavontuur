/* Локализация лаборатории Дэйва: ru, kk, cs, en, de, fr, es, it, pl, nl */
(() => {
  'use strict';
  const langs = ['ru','kk','cs','en','de','fr','es','it','pl','nl'];
  const map = Object.create(null);
  const originalTextByNode = new WeakMap();
  const n = s => String(s ?? '').replace(/\s+/g, ' ').trim();
  const rows = [
    ['Космическая лаборатория Безумного Дэйва','Ғарыштық Ессіз Дэйв зертханасы','Kosmická laboratoř Šíleného Davea',"Crazy Dave's Space Lab",'Verrücktes Daves Weltraumlabor','Le laboratoire spatial de Dave le Fou','Laboratorio espacial de Dave el Loco','Laboratorio spaziale di Dave il Pazzo','Kosmiczne laboratorium Szalonego Dave’a','Ruimtelaboratorium van Gekke Dave'],
    ['НЕСАНКЦИОНИРОВАННЫЙ ЭКСПЕРИМЕНТ № 42','РҰҚСАТСЫЗ ЭКСПЕРИМЕНТ № 42','NEPOVOLENÝ EXPERIMENT č. 42','UNAUTHORIZED EXPERIMENT NO. 42','NICHT GENEHMIGTES EXPERIMENT NR. 42','EXPÉRIENCE NON AUTORISÉE N° 42','EXPERIMENTO NO AUTORIZADO N.º 42','ESPERIMENTO NON AUTORIZZATO N. 42','NIEAUTORYZOWANY EKSPERYMENT NR 42','NIET-GEAUTORISEERD EXPERIMENT NR. 42'],
    ['Наука! Космос! Растения! И, возможно, немного мозгов!','Ғылым! Ғарыш! Өсімдіктер! Мүмкін, аздап ми да бар шығар!','Věda! Vesmír! Rostliny! A možná i trochu mozků!','Science! Space! Plants! And maybe a few brains!','Wissenschaft! Weltraum! Pflanzen! Und vielleicht ein paar Gehirne!','Science ! Espace ! Plantes ! Et peut-être quelques cerveaux !','¡Ciencia! ¡Espacio! ¡Plantas! ¡Y quizá algunos cerebros!','Scienza! Spazio! Piante! E magari anche qualche cervello!','Nauka! Kosmos! Rośliny! I być może trochę mózgów!','Wetenschap! Ruimte! Planten! En misschien een paar hersenen!'],
    ['БРРРРРРРР! Добро пожаловать в мою лабораторию! Я собираюсь исследовать ВСЮ ВСЕЛЕННУЮ! Где моя кастрюля?!','БРРРРРР! Зертханама қош келдің! Мен БҮКІЛ ҒАЛАМДЫ зерттемекпін! Менің қазаным қайда?!','BRRRRR! Vítej v mé laboratoři! Chystám se prozkoumat CELÝ VESMÍR! Kde mám hrnec?!',"BRRRRRR! Welcome to my lab! I'm going to explore the ENTIRE UNIVERSE! Where's my pot?!",'BRRRRRR! Willkommen in meinem Labor! Ich werde das GANZE UNIVERSUM erforschen! Wo ist mein Kochtopf?!','Brrrrrr ! Bienvenue dans mon laboratoire ! Je vais explorer TOUT L’UNIVERS ! Où est ma marmite ?!','¡BRRRRRR! ¡Bienvenido a mi laboratorio! ¡Voy a explorar TODO EL UNIVERSO! ¿Dónde está mi olla?','BRRRRRR! Benvenuto nel mio laboratorio! Esplorerò TUTTO L’UNIVERSO! Dov’è la mia pentola?!','BRRRRRR! Witaj w moim laboratorium! Zbadam CAŁY WSZECHŚWIAT! Gdzie jest mój garnek?!','BRRRRRR! Welkom in mijn laboratorium! Ik ga het HELE HEELAL onderzoeken! Waar is mijn kookpot?!'],
    ['🌱 Защити лабораторию Дэйва!','🌱 Дэйвтің зертханасын қорға!','🌱 Braň Daveovu laboratoř!','🌱 Defend Dave’s Lab!','🌱 Verteidige Daves Labor!','🌱 Défends le laboratoire de Dave !','🌱 ¡Defiende el laboratorio de Dave!','🌱 Difendi il laboratorio di Dave!','🌱 Broń laboratorium Dave’a!','🌱 Verdedig Daves lab!'],
    ['Выбирай растения и готовься к нашествию зомби!','Өсімдіктерді таңдап, зомбилер шабуылына дайындал!','Vyber si rostliny a připrav se na invazi zombíků!','Choose your plants and prepare for the zombie invasion!','Wähle Pflanzen und bereite dich auf die Zombie-Invasion vor!','Choisis tes plantes et prépare-toi à l’invasion des zombies !','¡Elige plantas y prepárate para la invasión zombi!','Scegli le piante e preparati all’invasione degli zombi!','Wybierz rośliny i przygotuj się na inwazję zombie!','Kies planten en bereid je voor op de zombie-invasie!'],
    ['☀️ Солнце:','☀️ Күн:','☀️ Slunce:','☀️ Sun:','☀️ Sonne:','☀️ Soleil :','☀️ Sol:','☀️ Sole:','☀️ Słońce:','☀️ Zon:'],
    ['🧟 Волна:','🧟 Толқын:','🧟 Vlna:','🧟 Wave:','🧟 Welle:','🧟 Vague :','🧟 Oleada:','🧟 Ondata:','🧟 Fala:','🧟 Golf:'],
    ['🟢 Горохострел','🟢 Асбұршақ атқыш','🟢 Hráškomet','🟢 Peashooter','🟢 Erbsenkanone','🟢 Lance-pois','🟢 Lanzaguisantes','🟢 Sparasemi','🟢 Plujka','🟢 Erwtenknaller'],
    ['🌻 Подсолнух','🌻 Күнбағыс','🌻 Slunečnice','🌻 Sunflower','🌻 Sonnenblume','🌻 Tournesol','🌻 Girasol','🌻 Girasole','🌻 Słonecznik','🌻 Zonnebloem'],
    ['🥔 Орехостена','🥔 Жаңғақ-қабырға','🥔 Ořechová zeď','🥔 Wall-nut','🥔 Wallnuss','🥔 Noix','🥔 Nuez','🥔 Noce','🥔 Orzech','🥔 Walnoot'],
    ['Выбери растение, затем нажми на клетку газона!','Өсімдікті таңдап, содан кейін көгалдағы ұяшықты бас!','Vyber rostlinu a potom klikni na políčko trávníku!','Choose a plant, then click a lawn tile!','Wähle eine Pflanze und klicke dann auf ein Rasenfeld!','Choisis une plante, puis clique sur une case de la pelouse !','¡Elige una planta y después pulsa una casilla del césped!','Scegli una pianta, poi fai clic su una casella del prato!','Wybierz roślinę, a następnie kliknij pole trawnika!','Kies een plant en klik daarna op een vakje van het gazon!'],
    ['Игровой газон','Ойын көгал алаңы','Herní trávník','Game lawn','Spielfeld','Pelouse de jeu','Césped de juego','Prato di gioco','Plansza z trawnikiem','Speelgazon'],
    ['🧟 Начать волну','🧟 Толқынды бастау','🧟 Spustit vlnu','🧟 Start Wave','🧟 Welle starten','🧟 Lancer la vague','🧟 Iniciar oleada','🧟 Avvia ondata','🧟 Rozpocznij falę','🧟 Start golf'],
    ['🔄 Новая игра','🔄 Жаңа ойын','🔄 Nová hra','🔄 New Game','🔄 Neues Spiel','🔄 Nouvelle partie','🔄 Nueva partida','🔄 Nuova partita','🔄 Nowa gra','🔄 Nieuw spel'],
    ['🔬 Космический каталог','🔬 Ғарыш каталогы','🔬 Vesmírný katalog','🔬 Space Catalogue','🔬 Weltraumkatalog','🔬 Catalogue spatial','🔬 Catálogo espacial','🔬 Catalogo spaziale','🔬 Katalog kosmiczny','🔬 Ruimtecatalogus'],
    ['Пять загадок Вселенной. Пять великих исследований. И ни одного гарантийного талона на оборудование!','Ғаламның бес жұмбағы. Бес ұлы зерттеу. Ал жабдыққа кепілдік талоны мүлде жоқ!','Pět záhad vesmíru. Pět velkých výzkumů. A ani jeden záruční list na vybavení!','Five mysteries of the universe. Five great investigations. And not a single warranty for the equipment!','Fünf Geheimnisse des Universums. Fünf große Forschungsprojekte. Und keine Garantie für die Ausrüstung!','Cinq mystères de l’Univers. Cinq grandes recherches. Et aucun bon de garantie pour le matériel !','Cinco misterios del universo. Cinco grandes investigaciones. ¡Y ni una sola garantía para el equipo!','Cinque misteri dell’universo. Cinque grandi ricerche. E neanche una garanzia per l’attrezzatura!','Pięć tajemnic Wszechświata. Pięć wielkich badań. I ani jednej gwarancji na sprzęt!','Vijf mysteries van het heelal. Vijf grote onderzoeken. En geen garantie op de apparatuur!'],
    ['Изучить объект','Нысанды зерттеу','Prozkoumat objekt','Study Object','Objekt untersuchen','Étudier l’objet','Estudiar objeto','Studia l’oggetto','Zbadaj obiekt','Object onderzoeken'],
    ['Проксима Центавра','Проксима Центавра','Proxima Centauri','Proxima Centauri','Proxima Centauri','Proxima du Centaure','Próxima Centauri','Proxima Centauri','Proxima Centauri','Proxima Centauri'],
    ['Красный карлик','Қызыл ергежейлі','Červený trpaslík','Red dwarf','Roter Zwerg','Naine rouge','Enana roja','Nana rossa','Czerwony karzeł','Rode dwerg'],
    ['Ближайшая к Солнцу звезда. Дэйв хочет выяснить, можно ли вырастить подсолнух на планете возле неё.','Күнге ең жақын жұлдыз. Дэйв оның маңындағы планетада күнбағыс өсіруге бола ма, соны білгісі келеді.','Hvězda nejbližší Slunci. Dave chce zjistit, zda lze na planetě v její blízkosti vypěstovat slunečnici.','The star closest to the Sun. Dave wants to find out whether a sunflower could grow on a planet near it.','Der Stern, der der Sonne am nächsten ist. Dave will herausfinden, ob auf einem Planeten in seiner Nähe eine Sonnenblume wachsen könnte.','L’étoile la plus proche du Soleil. Dave veut savoir si un tournesol pourrait pousser sur une planète voisine.','La estrella más cercana al Sol. Dave quiere averiguar si podría cultivar un girasol en un planeta cercano.','La stella più vicina al Sole. Dave vuole scoprire se su un pianeta vicino potrebbe crescere un girasole.','Gwiazda najbliższa Słońcu. Dave chce sprawdzić, czy na pobliskiej planecie dałoby się wyhodować słonecznik.','De ster die het dichtst bij de zon staat. Dave wil ontdekken of er op een planeet in de buurt een zonnebloem kan groeien.'],
    ['Экзопланеты','Экзопланеталар','Exoplanety','Exoplanets','Exoplaneten','Exoplanètes','Exoplanetas','Esopianeti','Egzoplanety','Exoplaneten'],
    ['Миры других звёзд','Басқа жұлдыздардың әлемдері','Světy jiných hvězd','Worlds around other stars','Welten anderer Sterne','Mondes d’autres étoiles','Mundos de otras estrellas','Mondi di altre stelle','Światy innych gwiazd','Werelden bij andere sterren'],
        ['Экзопланеты — это планеты за пределами нашей Солнечной системы.','Экзопланеталар — Күн жүйесінен тыс орналасқан ғаламшарлар.','Exoplanety jsou planety mimo naši Sluneční soustavu.','Exoplanets are planets beyond our Solar System.','Exoplaneten sind Planeten außerhalb unseres Sonnensystems.','Les exoplanètes sont des planètes situées au-delà de notre Système solaire.','Los exoplanetas son planetas que están fuera de nuestro sistema solar.','Gli esopianeti sono pianeti che si trovano al di fuori del nostro Sistema solare.','Egzoplanety to planety znajdujące się poza Układem Słonecznym.','Exoplaneten zijn planeten buiten ons zonnestelsel.'],
    ['Туманность Ориона','Орион тұмандығы','Mlhovina v Orionu','Orion Nebula','Orionnebel','Nébuleuse d’Orion','Nebulosa de Orión','Nebulosa di Orione','Mgławica Oriona','Orionnevel'],
    ['Звёздные ясли','Жұлдыздар бесігі','Hvězdná kolébka','Stellar Nursery','Sternenwiege','Berceau d’étoiles','Cuna estelar','Culla stellare','Gwiezdny żłobek','Sterrenkraamkamer'],
    ['Облако газа и пыли, где рождаются новые звёзды. Дэйв надеется найти там космический сад!','Жаңа жұлдыздар пайда болатын газ бен шаң бұлты. Дэйв сол жерден ғарыштық бақ тапқысы келеді!','Oblak plynu a prachu, kde vznikají nové hvězdy. Dave tam doufá najít vesmírnou zahradu!','A cloud of gas and dust where new stars are born. Dave hopes to find a cosmic garden there!','Eine Gas- und Staubwolke, in der neue Sterne entstehen. Dave hofft, dort einen kosmischen Garten zu finden!','Un nuage de gaz et de poussière où naissent de nouvelles étoiles. Dave espère y trouver un jardin cosmique !','Una nube de gas y polvo donde nacen nuevas estrellas. ¡Dave espera encontrar allí un jardín cósmico!','Una nube di gas e polvere dove nascono nuove stelle. Dave spera di trovarci un giardino cosmico!','Obłok gazu i pyłu, w którym rodzą się nowe gwiazdy. Dave ma nadzieję znaleźć tam kosmiczny ogród!','Een wolk van gas en stof waar nieuwe sterren ontstaan. Dave hoopt daar een kosmische tuin te vinden!'],
    ['Чёрные дыры','Қара құрдымдар','Černé díry','Black Holes','Schwarze Löcher','Trous noirs','Agujeros negros','Buchi neri','Czarne dziury','Zwarte gaten'],
    ['Гравитационные монстры','Гравитациялық құбыжықтар','Gravitační monstra','Gravity Monsters','Gravitationsmonster','Monstres gravitationnels','Monstruos gravitatorios','Mostri gravitazionali','Grawitacyjne potwory','Zwaartekrachtmonsters'],
    ['Области пространства с настолько сильной гравитацией, что даже свет не может выбраться из-за горизонта событий. Дэйв не рекомендует проверять это на собственном опыте.','Гравитациясы соншалық күшті болғандықтан, оқиға көкжиегінен тіпті жарық та шыға алмайтын кеңістік аймақтары. Дэйв мұны өз тәжірибеңде тексеруге кеңес бермейді.','Oblasti prostoru s tak silnou gravitací, že zpoza horizontu událostí neunikne ani světlo. Dave nedoporučuje ověřovat si to na vlastní kůži.','Regions of space with gravity so strong that not even light can escape beyond the event horizon. Dave does not recommend testing this yourself.','Bereiche des Weltraums mit einer so starken Gravitation, dass nicht einmal Licht hinter dem Ereignishorizont entkommen kann. Dave empfiehlt keinen Selbstversuch.','Des régions de l’espace où la gravité est si forte que même la lumière ne peut s’échapper de l’horizon des événements. Dave déconseille de vérifier cela soi-même.','Regiones del espacio con una gravedad tan intensa que ni siquiera la luz puede escapar del horizonte de sucesos. Dave no recomienda comprobarlo por cuenta propia.','Regioni dello spazio con una gravità così intensa che nemmeno la luce può sfuggire oltre l’orizzonte degli eventi. Dave sconsiglia di verificarlo di persona.','Obszary przestrzeni o tak silnej grawitacji, że nawet światło nie może wydostać się zza horyzontu zdarzeń. Dave nie poleca sprawdzać tego na własną rękę.','Gebieden in de ruimte met zo’n sterke zwaartekracht dat zelfs licht niet voorbij de waarnemingshorizon kan ontsnappen. Dave raadt af om dit zelf te testen.'],
    ['Галактика Андромеды','Андромеда галактикасы','Galaxie v Andromedě','Andromeda Galaxy','Andromedagalaxie','Galaxie d’Andromède','Galaxia de Andrómeda','Galassia di Andromeda','Galaktyka Andromedy','Andromedastelsel'],
    ['Соседка Млечного Пути','Құс жолының көршісі','Sousedka Mléčné dráhy','Milky Way’s Neighbour','Nachbarin der Milchstraße','Voisine de la Voie lactée','Vecina de la Vía Láctea','Vicina della Via Lattea','Sąsiadka Drogi Mlecznej','Buurgalaxie van de Melkweg'],
    ['Большая спиральная галактика примерно в 2,5 миллиона световых лет от Земли. Дэйв мечтает устроить там самую большую теплицу во Вселенной.','Жерден шамамен 2,5 миллион жарық жылы қашықтықта орналасқан үлкен шиыршықты галактика. Дэйв онда Ғаламдағы ең үлкен жылыжайды ашуды армандайды.','Velká spirální galaxie vzdálená od Země asi 2,5 milionu světelných let. Dave sní o tom, že tam postaví největší skleník ve vesmíru.','A large spiral galaxy about 2.5 million light-years from Earth. Dave dreams of building the biggest greenhouse in the universe there.','Eine große Spiralgalaxie, etwa 2,5 Millionen Lichtjahre von der Erde entfernt. Dave träumt davon, dort das größte Gewächshaus des Universums zu errichten.','Une grande galaxie spirale située à environ 2,5 millions d’années-lumière de la Terre. Dave rêve d’y construire la plus grande serre de l’Univers.','Una gran galaxia espiral situada a unos 2,5 millones de años luz de la Tierra. Dave sueña con construir allí el invernadero más grande del universo.','Una grande galassia a spirale a circa 2,5 milioni di anni luce dalla Terra. Dave sogna di costruirvi la serra più grande dell’universo.','Duża galaktyka spiralna oddalona o około 2,5 miliona lat świetlnych od Ziemi. Dave marzy o zbudowaniu tam największej szklarni we Wszechświecie.','Een groot spiraalstelsel op ongeveer 2,5 miljoen lichtjaar van de aarde. Dave droomt ervan daar de grootste kas van het heelal te bouwen.'],
    ['🔬 Факт:','🔬 Дерек:','🔬 Fakt:','🔬 Fact:','🔬 Fakt:','🔬 Fait :','🔬 Dato:','🔬 Curiosità:','🔬 Ciekawostka:','🔬 Weetje:'],
    ['Проверить эксперимент','Тәжірибені тексеру','Ověřit experiment','Test Experiment','Experiment testen','Tester l’expérience','Probar el experimento','Prova l’esperimento','Przetestuj eksperyment','Experiment testen'],
    ['Закрыть','Жабу','Zavřít','Close','Schließen','Fermer','Cerrar','Chiudi','Zamknij','Sluiten'],
    ['Эксперименты','Тәжірибелер','Experimenty','Experiments','Experimente','Expériences','Experimentos','Esperimenti','Eksperymenty','Experimenten'],
    ['Безумный Дэйв','Ессіз Дэйв','Šílený Dave','Crazy Dave','Verrückter Dave','Dave le Fou','Dave el Loco','Dave il Pazzo','Szalony Dave','Gekke Dave'],
    ['Новая игра','Жаңа ойын','Nová hra','New Game','Neues Spiel','Nouvelle partie','Nueva partida','Nuova partita','Nowa gra','Nieuw spel'],
    ['Начать игру','Ойынды бастау','Spustit hru','Start Game','Spiel starten','Commencer','Iniciar juego','Inizia il gioco','Rozpocznij grę','Spel starten'],
    ['Победа!','Жеңіс!','Vítězství!','Victory!','Sieg!','Victoire !','¡Victoria!','Vittoria!','Zwycięstwo!','Gewonnen!'],
    ['Поражение!','Жеңіліс!','Porážka!','Defeat!','Niederlage!','Défaite !','¡Derrota!','Sconfitta!','Porażka!','Verloren!'],
    ['Все 20 волн пройдены! Лаборатория Дэйва спасена!','Барлық 20 толқыннан өттің! Дэйвтің зертханасы құтқарылды!','Všech 20 vln je za tebou! Daveova laboratoř je zachráněna!','All 20 waves completed! Dave’s lab is saved!','Alle 20 Wellen geschafft! Daves Labor ist gerettet!','Les 20 vagues sont terminées ! Le laboratoire de Dave est sauvé !','¡Has superado las 20 oleadas! ¡El laboratorio de Dave está a salvo!','Hai superato tutte le 20 ondate! Il laboratorio di Dave è salvo!','Wszystkie 20 fal ukończone! Laboratorium Dave’a jest uratowane!','Alle 20 golven zijn voltooid! Daves lab is gered!'],
        ['Волна','Толқын','Vlna','Wave','Welle','Vague','Oleada','Ondata','Fala','Golf'],
    ['Ряд','Қатар','Řada','Row','Reihe','Rangée','Fila','Riga','Rząd','Rij'],
    ['Клетка','Ұяшық','Políčko','Tile','Feld','Case','Casilla','Casella','Pole','Vakje'],
    ['Здоровье','Денсаулық','Zdraví','Health','Gesundheit','Santé','Salud','Salute','Zdrowie','Gezondheid'],
    ['Солнце собрано!','Күн жиналды!','Slunce sesbíráno!','Sun collected!','Sonne gesammelt!','Soleil récolté !','¡Sol recogido!','Sole raccolto!','Słońce zebrane!','Zon verzameld!'],
    ['Собрать 25 солнц','25 күн жинау','Sesbírat 25 sluncí','Collect 25 sun','25 Sonnen sammeln','Récolter 25 soleils','Recoger 25 soles','Raccogli 25 soli','Zbierz 25 słoneczek','Verzamel 25 zonnen'],
    ['Зомби побеждён!','Зомби жеңілді!','Zombie poražen!','Zombie defeated!','Zombie besiegt!','Zombie vaincu !','¡Zombi derrotado!','Zombie sconfitto!','Zombie pokonany!','Zombie verslagen!'],
    ['Зомби прорвались!','Зомбилер басып кірді!','Zombie pronikli!','The zombies broke through!','Die Zombies sind durchgebrochen!','Les zombies ont percé !','¡Los zombis han atravesado la defensa!','Gli zombi hanno sfondato!','Zombie się przedarły!','De zombies zijn doorgebroken!'],
    ['Сначала выбери растение!','Алдымен өсімдікті таңда!','Nejprve vyber rostlinu!','Choose a plant first!','Wähle zuerst eine Pflanze!','Choisis d’abord une plante !','¡Elige primero una planta!','Scegli prima una pianta!','Najpierw wybierz roślinę!','Kies eerst een plant!'],
    ['Не хватает солнца!','Күн жеткіліксіз!','Nedostatek slunce!','Not enough sun!','Nicht genug Sonne!','Pas assez de soleil !','¡No hay suficiente sol!','Sole insufficiente!','Za mało słońca!','Niet genoeg zon!'],
    ['Эта клетка уже занята!','Бұл ұяшық бос емес!','Toto políčko je už obsazené!','This tile is already occupied!','Dieses Feld ist bereits belegt!','Cette case est déjà occupée !','¡Esta casilla ya está ocupada!','Questa casella è già occupata!','To pole jest już zajęte!','Dit vakje is al bezet!'],
    ['Дождись окончания волны!','Толқын аяқталғанша күт!','Počkej, až vlna skončí!','Wait until the wave ends!','Warte, bis die Welle vorbei ist!','Attends la fin de la vague !','¡Espera a que termine la oleada!','Aspetta che finisca l’ondata!','Poczekaj, aż fala się skończy!','Wacht tot de golf voorbij is!'],
    ['Во время волны новые растения пока сажать нельзя!','Толқын кезінде жаңа өсімдіктерді отырғызуға болмайды!','Během vlny nelze sázet nové rostliny!','You cannot plant new plants during a wave!','Während einer Welle kannst du keine neuen Pflanzen setzen!','Tu ne peux pas planter de nouvelles plantes pendant une vague !','¡No puedes plantar nuevas plantas durante una oleada!','Non puoi piantare nuove piante durante un’ondata!','Podczas fali nie można sadzić nowych roślin!','Tijdens een golf kun je geen nieuwe planten planten!'],
    ['Новая игра! Выбери растения и подготовь газон. 🌱','Жаңа ойын! Өсімдіктерді таңдап, көгалды дайында. 🌱','Nová hra! Vyber rostliny a připrav trávník. 🌱','New game! Choose plants and prepare the lawn. 🌱','Neues Spiel! Wähle Pflanzen und bereite den Rasen vor. 🌱','Nouvelle partie ! Choisis tes plantes et prépare la pelouse. 🌱','¡Nueva partida! Elige plantas y prepara el césped. 🌱','Nuova partita! Scegli le piante e prepara il prato. 🌱','Nowa gra! Wybierz rośliny i przygotuj trawnik. 🌱','Nieuw spel! Kies planten en bereid het gazon voor. 🌱'],
    ['Подсолнухи произвели','Күнбағыстар өндірді','Slunečnice vyprodukovaly','Sunflowers produced','Sonnenblumen haben produziert','Les tournesols ont produit','Los girasoles han producido','I girasoli hanno prodotto','Słoneczniki wyprodukowały','Zonnebloemen hebben geproduceerd'],
    ['Горошина попала! Осталось здоровья зомби:','Асбұршақ тиді! Зомбидің қалған денсаулығы:','Hrášek zasáhl! Zbývající zdraví zombie:','Pea hit! Zombie health remaining:','Erbse getroffen! Verbleibende Zombie-Gesundheit:','Le petit pois a touché sa cible ! Santé restante du zombie :','¡El guisante ha acertado! Salud restante del zombi:','Il pisello ha colpito! Salute rimanente dello zombie:','Groch trafił! Pozostałe zdrowie zombie:','Erwt geraakt! Resterende gezondheid van de zombie:'],
    ['Победа! 🌻 +50 солнц. Подготовься к волне','Жеңіс! 🌻 +50 күн. Толқынға дайындал','Vítězství! 🌻 +50 sluncí. Připrav se na vlnu','Victory! 🌻 +50 sun. Prepare for wave','Sieg! 🌻 +50 Sonne. Bereite dich auf die Welle vor','Victoire ! 🌻 +50 soleils. Prépare-toi pour la vague','¡Victoria! 🌻 +50 soles. Prepárate para la oleada','Vittoria! 🌻 +50 soli. Preparati per l’ondata','Zwycięstwo! 🌻 +50 słońc. Przygotuj się na falę','Gewonnen! 🌻 +50 zon. Bereid je voor op golf'],
    ['Зомби идут справа налево! 🧟','Зомбилер оңнан солға қарай келе жатыр! 🧟','Zombie jdou zprava doleva! 🧟','Zombies are coming from right to left! 🧟','Zombies kommen von rechts nach links! 🧟','Les zombies arrivent de droite à gauche ! 🧟','¡Los zombis vienen de derecha a izquierda! 🧟','Gli zombi arrivano da destra a sinistra! 🧟','Zombie idą z prawej na lewo! 🧟','Zombies komen van rechts naar links! 🧟'],
    ['Выбери клетку.','Ұяшықты таңда.','Vyber políčko.','Choose a tile.','Wähle ein Feld.','Choisis une case.','Elige una casilla.','Scegli una casella.','Wybierz pole.','Kies een vakje.'],
    ['Растение посажено!','Өсімдік отырғызылды!','Rostlina zasazena!','Plant placed!','Pflanze gesetzt!','Plante installée !','¡Planta colocada!','Pianta posizionata!','Roślina posadzona!','Plant geplaatst!'],
    ['Солнца недостаточно для этого растения!','Бұл өсімдікке күн жеткіліксіз!','Pro tuto rostlinu nemáš dost slunce!','Not enough sun for this plant!','Nicht genug Sonne für diese Pflanze!','Pas assez de soleil pour cette plante !','¡No hay suficiente sol para esta planta!','Sole insufficiente per questa pianta!','Za mało słońca na tę roślinę!','Niet genoeg zon voor deze plant!'],
    ['Нажми «Новая игра», чтобы начать заново.','Қайта бастау үшін «Жаңа ойын» түймесін бас.','Klikni na „Nová hra“ a začni znovu.','Click “New Game” to start again.','Klicke auf „Neues Spiel“, um erneut zu beginnen.','Clique sur « Nouvelle partie » pour recommencer.','Pulsa «Nueva partida» para empezar de nuevo.','Fai clic su «Nuova partita» per ricominciare.','Kliknij „Nowa gra”, aby zacząć od nowa.','Klik op ‘Nieuw spel’ om opnieuw te beginnen.'],
    ['Лаборатория Дэйва спасена!','Дэйвтің зертханасы құтқарылды!','Daveova laboratoř je zachráněna!','Dave’s lab is saved!','Daves Labor ist gerettet!','Le laboratoire de Dave est sauvé !','¡El laboratorio de Dave está a salvo!','Il laboratorio di Dave è salvo!','Laboratorium Dave’a jest uratowane!','Daves lab is gered!'],
        ['Растения','Өсімдіктер','Rostliny','Plants','Pflanzen','Plantes','Plantas','Piante','Rośliny','Planten'],
    ['Зомби','Зомбилер','Zombie','Zombies','Zombies','Zombies','Zombis','Zombi','Zombie','Zombies'],
    ['Солнечная энергия','Күн энергиясы','Sluneční energie','Solar energy','Sonnenenergie','Énergie solaire','Energía solar','Energia solare','Energia słoneczna','Zonne-energie'],
    ['Защита','Қорғаныс','Obrana','Defense','Verteidigung','Défense','Defensa','Difesa','Obrona','Verdediging'],
    ['Лаборатория','Зертхана','Laboratoř','Laboratory','Labor','Laboratoire','Laboratorio','Laboratorio','Laboratorium','Laboratorium'],
    ['Космос','Ғарыш','Vesmír','Space','Weltraum','Espace','Espacio','Spazio','Kosmos','Ruimte'],
    ['Звезда','Жұлдыз','Hvězda','Star','Stern','Étoile','Estrella','Stella','Gwiazda','Ster'],
    ['Планета','Ғаламшар','Planeta','Planet','Planet','Planète','Planeta','Pianeta','Planeta','Planeet'],
    ['Галактика','Галактика','Galaxie','Galaxy','Galaxie','Galaxie','Galaxia','Galassia','Galaktyka','Melkwegstelsel'],
    ['Научный эксперимент','Ғылыми тәжірибе','Vědecký experiment','Scientific experiment','Wissenschaftliches Experiment','Expérience scientifique','Experimento científico','Esperimento scientifico','Eksperyment naukowy','Wetenschappelijk experiment'],
    ['Исследовать','Зерттеу','Prozkoumat','Explore','Erforschen','Explorer','Explorar','Esplora','Zbadaj','Onderzoeken'],
    ['Начать эксперимент','Тәжірибені бастау','Spustit experiment','Start Experiment','Experiment starten','Lancer l’expérience','Iniciar experimento','Avvia esperimento','Rozpocznij eksperyment','Experiment starten'],
    ['Эксперимент завершён!','Тәжірибе аяқталды!','Experiment dokončen!','Experiment complete!','Experiment abgeschlossen!','Expérience terminée !','¡Experimento terminado!','Esperimento completato!','Eksperyment zakończony!','Experiment voltooid!'],
    ['Ошибка эксперимента!','Тәжірибе қатесі!','Chyba experimentu!','Experiment error!','Experimentfehler!','Erreur d’expérience !','¡Error en el experimento!','Errore dell’esperimento!','Błąd eksperymentu!','Experimentfout!'],
    ['Вернуться','Қайту','Zpět','Return','Zurückkehren','Retour','Volver','Torna indietro','Wróć','Terug'],
    ['Продолжить','Жалғастыру','Pokračovat','Continue','Weiter','Continuer','Continuar','Continua','Kontynuuj','Doorgaan'],
    ['Готово!','Дайын!','Hotovo!','Done!','Fertig!','Terminé !','¡Listo!','Fatto!','Gotowe!','Klaar!'],
    ['Загрузка…','Жүктелуде…','Načítání…','Loading…','Wird geladen…','Chargement…','Cargando…','Caricamento…','Ładowanie…','Laden…'],
    ['Подготовка лаборатории…','Зертхана дайындалуда…','Příprava laboratoře…','Preparing the lab…','Labor wird vorbereitet…','Préparation du laboratoire…','Preparando el laboratorio…','Preparazione del laboratorio…','Przygotowywanie laboratorium…','Laboratorium voorbereiden…'],
    ['Внимание!','Назар аудар!','Pozor!','Warning!','Achtung!','Attention !','¡Atención!','Attenzione!','Uwaga!','Let op!'],
    ['Успех!','Сәттілік!','Úspěch!','Success!','Erfolg!','Réussite !','¡Éxito!','Successo!','Sukces!','Succes!'],
    ['Попробуй ещё раз','Қайтадан көр','Zkus to znovu','Try again','Versuche es erneut','Réessaie','Inténtalo de nuevo','Riprova','Spróbuj ponownie','Probeer opnieuw'],
    ['Растение готово к посадке','Өсімдік отырғызуға дайын','Rostlina je připravena k zasazení','Plant ready to be planted','Pflanze bereit zum Einpflanzen','Plante prête à être plantée','Planta lista para plantar','Pianta pronta per essere piantata','Roślina gotowa do posadzenia','Plant klaar om te planten'],
    ['Зомби приближается!','Зомби жақындап келеді!','Zombie se blíží!','Zombie approaching!','Zombie nähert sich!','Un zombie approche !','¡Se acerca un zombi!','Uno zombie si avvicina!','Zombie się zbliża!','Zombie nadert!'],
    ['Волна начинается!','Толқын басталды!','Vlna začíná!','Wave starting!','Die Welle beginnt!','La vague commence !','¡Comienza la oleada!','L’ondata comincia!','Fala się zaczyna!','De golf begint!'],
    ['Все растения посажены','Барлық өсімдіктер отырғызылды','Všechny rostliny jsou zasazeny','All plants planted','Alle Pflanzen sind gesetzt','Toutes les plantes sont plantées','Todas las plantas están plantadas','Tutte le piante sono state piantate','Wszystkie rośliny posadzone','Alle planten zijn geplant'],
    ['Собирай солнце, чтобы покупать растения!','Өсімдіктер сатып алу үшін күн жина!','Sbírej slunce a kupuj rostliny!','Collect sun to buy plants!','Sammle Sonne, um Pflanzen zu kaufen!','Récolte du soleil pour acheter des plantes !','¡Recoge sol para comprar plantas!','Raccogli il sole per comprare piante!','Zbieraj słońce, aby kupować rośliny!','Verzamel zon om planten te kopen!'],
    ['Не позволяй зомби добраться до лаборатории!','Зомбилердің зертханаға жетуіне жол берме!','Nedovol zombíkům dostat se do laboratoře!','Do not let zombies reach the lab!','Lass die Zombies nicht ins Labor gelangen!','Ne laisse pas les zombies atteindre le laboratoire !','¡No dejes que los zombis lleguen al laboratorio!','Non lasciare che gli zombi raggiungano il laboratorio!','Nie pozwól zombie dotrzeć do laboratorium!','Laat de zombies het lab niet bereiken!'],
    ['Дэйв доволен твоей работой!','Дэйв сенің жұмысыңа риза!','Dave je s tvou prací spokojen!','Dave is pleased with your work!','Dave ist mit deiner Arbeit zufrieden!','Dave est satisfait de ton travail !','¡Dave está satisfecho con tu trabajo!','Dave è soddisfatto del tuo lavoro!','Dave jest zadowolony z twojej pracy!','Dave is tevreden over je werk!'],
    ['Дэйв: «Нужно больше растений!»','Дэйв: «Өсімдіктерді көбейту керек!»','Dave: „Potřebujeme více rostlin!“','Dave: “We need more plants!”','Dave: „Wir brauchen mehr Pflanzen!“','Dave : « Il nous faut plus de plantes ! »','Dave: «¡Necesitamos más plantas!»','Dave: «Servono più piante!»','Dave: „Potrzebujemy więcej roślin!”','Dave: “We hebben meer planten nodig!”'],
    ['Выберите растение','Өсімдікті таңдаңыз','Vyber rostlinu','Choose a plant','Pflanze auswählen','Choisissez une plante','Elige una planta','Scegli una pianta','Wybierz roślinę','Kies een plant'],
['Растение выбрано','Өсімдік таңдалды','Rostlina vybrána','Plant selected','Pflanze ausgewählt','Plante sélectionnée','Planta seleccionada','Pianta selezionata','Wybrano roślinę','Plant geselecteerd'],
['Недостаточно солнечных очков','Күн ұпайлары жеткіліксіз','Nedostatek slunečních bodů','Not enough sun points','Nicht genug Sonnenpunkte','Pas assez de points de soleil','No tienes suficientes puntos de sol','Punti sole insufficienti','Za mało punktów słońca','Niet genoeg zonnepunten'],
['Солнце','Күн','Slunce','Sun','Sonne','Soleil','Sol','Sole','Słońce','Zon'],
['Здоровье','Денсаулық','Zdraví','Health','Gesundheit','Santé','Salud','Salute','Zdrowie','Gezondheid'],
['Волна','Толқын','Vlna','Wave','Welle','Vague','Oleada','Ondata','Fala','Golf'],
['Уровень','Деңгей','Úroveň','Level','Level','Niveau','Nivel','Livello','Poziom','Niveau'],
['Пауза','Үзіліс','Pauza','Pause','Pause','Pause','Pausa','Pausa','Pauza','Pauze'],
['Продолжить','Жалғастыру','Pokračovat','Resume','Fortsetzen','Reprendre','Continuar','Riprendi','Wznów','Hervatten'],
['Заново','Қайта бастау','Znovu','Restart','Neu starten','Recommencer','Reiniciar','Ricomincia','Uruchom ponownie','Opnieuw starten'],
['Начать игру','Ойынды бастау','Spustit hru','Start game','Spiel starten','Démarrer le jeu','Iniciar juego','Avvia il gioco','Rozpocznij grę','Start spel'],
['Игра окончена','Ойын аяқталды','Konec hry','Game over','Spiel vorbei','Fin de partie','Fin del juego','Partita terminata','Koniec gry','Spel afgelopen'],
['Победа!','Жеңіс!','Vítězství!','Victory!','Sieg!','Victoire !','¡Victoria!','Vittoria!','Zwycięstwo!','Overwinning!'],
['Попробуйте ещё раз','Қайталап көріңіз','Zkuste to znovu','Try again','Versuchen Sie es erneut','Réessayez','Inténtalo de nuevo','Riprova','Spróbuj ponownie','Probeer het opnieuw'],
['Загрузка...','Жүктелуде...','Načítání...','Loading...','Wird geladen...','Chargement...','Cargando...','Caricamento...','Ładowanie...','Laden...'],
['Настройки','Параметрлер','Nastavení','Settings','Einstellungen','Paramètres','Ajustes','Impostazioni','Ustawienia','Instellingen'],
['Звук','Дыбыс','Zvuk','Sound','Ton','Son','Sonido','Suono','Dźwięk','Geluid'],
['Музыка','Музыка','Hudba','Music','Musik','Musique','Música','Musica','Muzyka','Muziek'],
['Включить','Қосу','Zapnout','Enable','Einschalten','Activer','Activar','Attiva','Włącz','Inschakelen'],
['Выключить','Өшіру','Vypnout','Disable','Ausschalten','Désactiver','Desactivar','Disattiva','Wyłącz','Uitschakelen'],
['Назад','Артқа','Zpět','Back','Zurück','Retour','Volver','Indietro','Wstecz','Terug'],
['Закрыть','Жабу','Zavřít','Close','Schließen','Fermer','Cerrar','Chiudi','Zamknij','Sluiten'],
['Да','Иә','Ano','Yes','Ja','Oui','Sí','Sì','Tak','Ja'],
['Нет','Жоқ','Ne','No','Nein','Non','No','No','Nie','Nee'],
['Подтвердить','Растау','Potvrdit','Confirm','Bestätigen','Confirmer','Confirmar','Conferma','Potwierdź','Bevestigen'],
['Отмена','Бас тарту','Zrušit','Cancel','Abbrechen','Annuler','Cancelar','Annulla','Anuluj','Annuleren'],
['Новая игра','Жаңа ойын','Nová hra','New game','Neues Spiel','Nouvelle partie','Nueva partida','Nuova partita','Nowa gra','Nieuw spel'],
['Продолжить игру','Ойынды жалғастыру','Pokračovat ve hře','Continue game','Spiel fortsetzen','Continuer la partie','Continuar partida','Continua la partita','Kontynuuj grę','Spel voortzetten'],
['Сохранить','Сақтау','Uložit','Save','Speichern','Enregistrer','Guardar','Salva','Zapisz','Opslaan'],
['Загрузка сохранения...','Сақталған ойын жүктелуде...','Načítání uložené hry...','Loading save...','Spielstand wird geladen...','Chargement de la sauvegarde...','Cargando partida guardada...','Caricamento del salvataggio...','Wczytywanie zapisu...','Opgeslagen spel laden...'],

    ['Планеты за пределами Солнечной системы. Есть ли там растения? А зомби?!','Күн жүйесінен тыс планеталар. Онда өсімдіктер бар ма? Ал зомбилер ше?!','Planety mimo Sluneční soustavu. Rostou tam rostliny? A co zombíci?!','Planets beyond the Solar System. Are there plants out there? And zombies?!','Planeten außerhalb des Sonnensystems. Gibt es dort Pflanzen? Und Zombies?!','Des planètes au-delà du Système solaire. Y a-t-il des plantes là-bas ? Et des zombies ?!','Planetas más allá del sistema solar. ¿Habrá plantas allí? ¿Y zombis?!','Pianeti oltre il Sistema solare. Ci saranno piante? E zombi?!','Planety poza Układem Słonecznym. Czy są tam rośliny? A może zombie?!','Planeten buiten het zonnestelsel. Zijn daar planten? En zombies?!'],
    ['Огромное облако газа и пыли, где рождаются звёзды. Дэйв уже ищет лейку.','Жұлдыздар пайда болатын орасан зор газ бен шаң бұлты. Дэйв суқұйғышын іздеп жүр.','Obrovský oblak plynu a prachu, kde se rodí hvězdy. Dave už hledá konev.','A huge cloud of gas and dust where stars are born. Dave is already looking for his watering can.','Eine riesige Gas- und Staubwolke, in der Sterne entstehen. Dave sucht schon seine Gießkanne.','Un immense nuage de gaz et de poussière où naissent les étoiles. Dave cherche déjà son arrosoir.','Una enorme nube de gas y polvo donde nacen estrellas. Dave ya está buscando su regadera.','Un’enorme nube di gas e polvere dove nascono le stelle. Dave sta già cercando l’annaffiatoio.','Ogromny obłok gazu i pyłu, w którym rodzą się gwiazdy. Dave już szuka konewki.','Een enorme wolk van gas en stof waar sterren worden geboren. Dave zoekt zijn gieter al.'],
    ['Экстремальная гравитация','Аса күшті гравитация','Extrémní gravitace','Extreme gravity','Extreme Gravitation','Gravité extrême','Gravedad extrema','Gravità estrema','Ekstremalna grawitacja','Extreme zwaartekracht'],
    ['Области пространства, из которых ничто, даже свет, не может выбраться за пределы горизонта событий.','Оқиға көкжиегінен ештеңе, тіпті жарық та шыға алмайтын кеңістік аймақтары.','Oblasti prostoru, z nichž za horizont událostí nemůže uniknout nic, ani světlo.','Regions of space from which nothing, not even light, can escape beyond the event horizon.','Raumbereiche, aus denen nichts, nicht einmal Licht, hinter dem Ereignishorizont entkommen kann.','Régions de l’espace dont rien, pas même la lumière, ne peut sortir au-delà de l’horizon des événements.','Regiones del espacio de las que nada, ni siquiera la luz, puede escapar más allá del horizonte de sucesos.','Regioni dello spazio da cui nulla, nemmeno la luce, può sfuggire oltre l’orizzonte degli eventi.','Obszary przestrzeni, z których nic, nawet światło, nie może wydostać się poza horyzont zdarzeń.','Gebieden in de ruimte waaruit niets, zelfs licht niet, voorbij de waarnemingshorizon kan ontsnappen.'],
    ['Соседняя большая галактика','Жақын орналасқан үлкен галактика','Velká sousední galaxie','Large neighbouring galaxy','Benachbarte große Galaxie','Grande galaxie voisine','Gran galaxia vecina','Grande galassia vicina','Duża sąsiednia galaktyka','Groot naburig sterrenstelsel'],
    ['Гигантская галактика за пределами Млечного Пути. Дэйв собирается отправить туда межгалактический горшок.','Құс жолынан тыс жатқан алып галактика. Дэйв оған галактикааралық гүлсауыт жібермек.','Obří galaxie za Mléčnou dráhou. Dave tam chce poslat mezigalaktický květináč.','A giant galaxy beyond the Milky Way. Dave plans to send an intergalactic flowerpot there.','Eine riesige Galaxie außerhalb der Milchstraße. Dave will einen intergalaktischen Blumentopf dorthin schicken.','Une galaxie géante au-delà de la Voie lactée. Dave compte y envoyer un pot de fleurs intergalactique.','Una galaxia gigantesca más allá de la Vía Láctea. Dave piensa enviar allí una maceta intergaláctica.','Una gigantesca galassia oltre la Via Lattea. Dave vuole mandarle un vaso intergalattico.','Olbrzymia galaktyka poza Drogą Mleczną. Dave zamierza wysłać tam międzygalaktyczną doniczkę.','Een gigantisch sterrenstelsel buiten de Melkweg. Dave wil er een intergalactische bloempot naartoe sturen.'],
    ['Проксима Центавра — красный карлик, ближайшая к Солнцу звезда. Она находится примерно в 4,24 светового года от нас. Вокруг неё обращается как минимум одна известная планета — Проксима b.','Проксима Центавра — Күнге ең жақын қызыл ергежейлі жұлдыз. Ол бізден шамамен 4,24 жарық жылы қашықтықта. Оның айналасында кемінде бір белгілі планета — Проксима b — айналады.','Proxima Centauri je červený trpaslík a hvězda nejbližší Slunci. Je asi 4,24 světelného roku daleko. Obíhá kolem ní nejméně jedna známá planeta — Proxima b.','Proxima Centauri is a red dwarf and the star closest to the Sun. It is about 4.24 light-years away. At least one known planet, Proxima b, orbits it.','Proxima Centauri ist ein roter Zwerg und der sonnennächste Stern. Er ist etwa 4,24 Lichtjahre entfernt. Mindestens ein bekannter Planet, Proxima b, umkreist ihn.','Proxima du Centaure est une naine rouge et l’étoile la plus proche du Soleil. Elle se trouve à environ 4,24 années-lumière. Au moins une planète connue, Proxima b, est en orbite autour d’elle.','Próxima Centauri es una enana roja y la estrella más cercana al Sol. Está a unos 4,24 años luz. Al menos un planeta conocido, Próxima b, orbita a su alrededor.','Proxima Centauri è una nana rossa ed è la stella più vicina al Sole. Si trova a circa 4,24 anni luce. Almeno un pianeta noto, Proxima b, le orbita attorno.','Proxima Centauri to czerwony karzeł i gwiazda najbliższa Słońcu. Znajduje się około 4,24 roku świetlnego od nas. Krąży wokół niej co najmniej jedna znana planeta — Proxima b.','Proxima Centauri is een rode dwerg en de ster die het dichtst bij de zon staat. Ze staat op ongeveer 4,24 lichtjaar afstand. Er draait minstens één bekende planeet omheen: Proxima b.'],
    ['🔬 Факт: Проксима Центавра значительно холоднее и тусклее Солнца.','🔬 Дерек: Проксима Центавра Күннен әлдеқайда салқын әрі күңгірт.','🔬 Fakt: Proxima Centauri je výrazně chladnější a méně jasná než Slunce.','🔬 Fact: Proxima Centauri is much cooler and dimmer than the Sun.','🔬 Fakt: Proxima Centauri ist deutlich kühler und lichtschwächer als die Sonne.','🔬 Fait : Proxima du Centaure est bien plus froide et moins lumineuse que le Soleil.','🔬 Dato: Próxima Centauri es mucho más fría y tenue que el Sol.','🔬 Curiosità: Proxima Centauri è molto più fredda e meno luminosa del Sole.','🔬 Fakt: Proxima Centauri jest znacznie chłodniejsza i słabiej świeci niż Słońce.','🔬 Feit: Proxima Centauri is veel koeler en zwakker dan de zon.'],
    ['БРРРРР! Красная звезда! Может, это гигантский помидор?! Нужно отправить туда подсолнух и выяснить!','БРРРРР! Қызыл жұлдыз! Бұл алып қызанақ шығар?! Ол жаққа күнбағыс жіберіп, анықтау керек!','BRRR! Červená hvězda! Není to obří rajče?! Musíme tam poslat slunečnici a zjistit to!','BRRR! A red star! Could it be a giant tomato?! We should send a sunflower there and find out!','BRRR! Ein roter Stern! Ist das vielleicht eine riesige Tomate?! Wir müssen eine Sonnenblume hinschicken!','Brrrr ! Une étoile rouge ! Serait-ce une tomate géante ?! Envoyons-y un tournesol pour le découvrir !','¡BRRR! ¡Una estrella roja! ¿Será un tomate gigante? ¡Hay que enviar un girasol para averiguarlo!','BRRR! Una stella rossa! Forse è un pomodoro gigante?! Mandiamoci un girasole per scoprirlo!','BRRR! Czerwona gwiazda! Czy to gigantyczny pomidor?! Wyślijmy tam słonecznik i sprawdźmy!','BRRR! Een rode ster! Is het een gigantische tomaat?! Stuur er een zonnebloem heen om het uit te zoeken!'],
    ['Экзопланеты — это планеты за пределами нашей Солнечной системы. Одни раскалены, другие могут быть холодными, а некоторые обращаются вокруг нескольких звёзд.','Экзопланеталар — Күн жүйесінен тыс орналасқан планеталар. Кейбірі қатты ыстық, басқалары суық болуы мүмкін, ал кейбірі бірнеше жұлдызды айналады.','Exoplanety jsou planety mimo naši Sluneční soustavu. Některé jsou rozpálené, jiné mohou být chladné a některé obíhají kolem několika hvězd.','Exoplanets are planets beyond our Solar System. Some are scorching hot, others may be cold, and some orbit multiple stars.','Exoplaneten sind Planeten außerhalb unseres Sonnensystems. Einige sind glühend heiß, andere können kalt sein, und manche umkreisen mehrere Sterne.','Les exoplanètes sont des planètes au-delà de notre Système solaire. Certaines sont brûlantes, d’autres froides, et certaines orbitent autour de plusieurs étoiles.','Los exoplanetas son planetas fuera de nuestro sistema solar. Algunos son abrasadores, otros pueden ser fríos y algunos orbitan varias estrellas.','Gli esopianeti sono pianeti al di fuori del nostro Sistema solare. Alcuni sono roventi, altri freddi e alcuni orbitano attorno a più stelle.','Egzoplanety to planety poza naszym Układem Słonecznym. Jedne są rozpalone, inne mogą być zimne, a niektóre krążą wokół kilku gwiazd.','Exoplaneten zijn planeten buiten ons zonnestelsel. Sommige zijn gloeiend heet, andere koud en sommige draaien om meerdere sterren.'],
    ['🔬 Факт: Учёные часто находят экзопланеты, наблюдая, как их прохождение перед звездой немного уменьшает её яркость.','🔬 Дерек: Ғалымдар экзопланеталарды жұлдыз алдынан өткенде оның жарықтығының аздап төмендеуін бақылау арқылы жиі табады.','🔬 Fakt: Vědci často objevují exoplanety sledováním mírného poklesu jasu hvězdy při přechodu planety před ní.','🔬 Fact: Scientists often find exoplanets by observing the slight dip in a star’s brightness as a planet passes in front of it.','🔬 Fakt: Forschende entdecken Exoplaneten oft, indem sie beobachten, wie ein Stern beim Vorbeiziehen eines Planeten kurz dunkler wird.','🔬 Fait : Les scientifiques détectent souvent les exoplanètes en observant la légère baisse de luminosité d’une étoile lorsqu’une planète passe devant elle.','🔬 Dato: Los científicos suelen detectar exoplanetas observando la leve disminución del brillo de una estrella cuando un planeta pasa por delante.','🔬 Curiosità: Gli scienziati spesso individuano gli esopianeti osservando la leggera diminuzione della luminosità di una stella quando un pianeta le passa davanti.','🔬 Fakt: Naukowcy często odkrywają egzoplanety, obserwując niewielki spadek jasności gwiazdy, gdy planeta przechodzi przed jej tarczą.','🔬 Feit: Wetenschappers ontdekken vaak exoplaneten door een kleine afname in de helderheid van een ster te meten wanneer een planeet ervoor langs beweegt.'],
    ['МОЗГИ ИЗ ДРУГОЙ ПЛАНЕТЫ?! Сначала проверим, можно ли там выращивать горохострел!','БАСҚА ҒАЛАМШАРДАН МИ МА?! Алдымен онда асбұршақ атқыш өсіруге болатынын тексерейік!','MOZKY Z JINÉ PLANETY?! Nejdřív zjistíme, jestli tam lze pěstovat hráškomet!','BRAINS FROM ANOTHER PLANET?! First, let’s see if we can grow a peashooter there!','GEHIRNE VON EINEM ANDEREN PLANETEN?! Zuerst prüfen wir, ob dort Erbsenkanonen wachsen können!','DES CERVEAUX D’UNE AUTRE PLANÈTE ?! Vérifions d’abord si l’on peut y faire pousser un lance-pois !','¿¡CEREBROS DE OTRO PLANETA!? Primero veremos si allí podemos cultivar lanzaguisantes.','CERVELLI DA UN ALTRO PIANETA?! Prima vediamo se possiamo coltivarci uno sparasemi!','MÓZGI Z INNEJ PLANETY?! Najpierw sprawdźmy, czy da się tam wyhodować plujkę!','HERSENEN VAN EEN ANDERE PLANEET?! Eerst kijken of we daar erwtenknallers kunnen kweken!'],
    ['Туманность Ориона — область газа и пыли, в которой формируются новые звёзды. Она находится примерно в 1 300–1 400 световых годах от Земли.','Тұмандық Орион — жаңа жұлдыздар қалыптасатын газ бен шаң аймағы. Ол Жерден шамамен 1300–1400 жарық жылы қашықтықта.','Mlhovina v Orionu je oblast plynu a prachu, kde vznikají nové hvězdy. Leží asi 1 300–1 400 světelných let od Země.','The Orion Nebula is a region of gas and dust where new stars form. It lies about 1,300–1,400 light-years from Earth.','Der Orionnebel ist eine Gas- und Staubregion, in der neue Sterne entstehen. Er ist etwa 1.300–1.400 Lichtjahre von der Erde entfernt.','La nébuleuse d’Orion est une région de gaz et de poussière où naissent de nouvelles étoiles. Elle se situe à environ 1 300 à 1 400 années-lumière de la Terre.','La nebulosa de Orión es una región de gas y polvo donde se forman nuevas estrellas. Está a unos 1.300–1.400 años luz de la Tierra.','La nebulosa di Orione è una regione di gas e polvere in cui nascono nuove stelle. Si trova a circa 1.300–1.400 anni luce dalla Terra.','Mgławica Oriona to obszar gazu i pyłu, w którym powstają nowe gwiazdy. Leży około 1300–1400 lat świetlnych od Ziemi.','De Orionnevel is een gebied van gas en stof waar nieuwe sterren ontstaan. Ze ligt ongeveer 1.300–1.400 lichtjaar van de aarde.'],
    ['🔬 Факт: Изображения туманности показывают газ, светящийся под действием излучения горячих молодых звёзд.','🔬 Дерек: Тұмандық суреттерінде ыстық жас жұлдыздардың сәулеленуінен жарқырайтын газ көрінеді.','🔬 Fakt: Na snímcích mlhoviny je vidět plyn, který září působením záření horkých mladých hvězd.','🔬 Fact: Images of the nebula show gas glowing under radiation from hot, young stars.','🔬 Fakt: Auf Bildern des Nebels sieht man Gas, das durch die Strahlung heißer junger Sterne leuchtet.','🔬 Fait : Les images de la nébuleuse montrent du gaz qui brille sous le rayonnement d’étoiles jeunes et chaudes.','🔬 Dato: Las imágenes de la nebulosa muestran gas que brilla por la radiación de estrellas jóvenes y calientes.','🔬 Curiosità: Le immagini della nebulosa mostrano gas luminoso eccitato dalla radiazione di stelle giovani e calde.','🔬 Fakt: Na zdjęciach mgławicy widać gaz świecący pod wpływem promieniowania gorących, młodych gwiazd.','🔬 Feit: Op afbeeldingen van de nevel zie je gas dat oplicht door straling van hete, jonge sterren.'],
    ['ОГРОМНАЯ КОСМИЧЕСКАЯ ТЕПЛИЦА! Где моя лейка? И почему тут нет таблички «Не топтать»?!','ҮЛКЕН ҒАРЫШ ЖЫЛЫЖАЙЫ! Суқұйғышым қайда? Неге мұнда «Баспаңыз» деген белгі жоқ?!','OBROVSKÝ VESMÍRNÝ SKLENÍK! Kde mám konev? A proč tu není cedule „Nevstupovat na záhony“?!','A HUGE SPACE GREENHOUSE! Where’s my watering can? And why is there no “Keep Off the Beds” sign?!','EIN RIESIGES WELTRAUM-GEWÄCHSHAUS! Wo ist meine Gießkanne? Und warum steht hier kein Schild „Beete nicht betreten“?!','UNE IMMENSE SERRE SPATIALE ! Où est mon arrosoir ? Et pourquoi n’y a-t-il pas de panneau « Ne pas piétiner » ?!','¡UN INMENSO INVERNADERO ESPACIAL! ¿Dónde está mi regadera? ¿Y por qué no hay un cartel de «No pisar»?!','UN’ENORME SERRA SPAZIALE! Dov’è il mio annaffiatoio? E perché non c’è un cartello «Non calpestare»?!','OGROMNA KOSMICZNA SZKLARNIA! Gdzie jest konewka? I dlaczego nie ma tabliczki „Nie deptać”?!','EEN GIGANTISCHE RUIMTEKAS! Waar is mijn gieter? En waarom staat er geen bordje “Niet op de bedden lopen”?!'],
    ['Чёрная дыра — область пространства-времени с настолько сильной гравитацией, что за её горизонтом событий не может выбраться даже свет.','Қара құрдым — тартылыс күші соншалықты күшті кеңістік-уақыт аймағы, оның оқиға көкжиегінен жарықтың өзі шыға алмайды.','Černá díra je oblast časoprostoru s tak silnou gravitací, že za jejím horizontem událostí neunikne ani světlo.','A black hole is a region of spacetime with gravity so strong that not even light can escape from beyond its event horizon.','Ein Schwarzes Loch ist ein Raumzeitbereich mit so starker Gravitation, dass nicht einmal Licht hinter seinem Ereignishorizont entkommen kann.','Un trou noir est une région de l’espace-temps dont la gravité est si forte que même la lumière ne peut s’échapper au-delà de son horizon des événements.','Un agujero negro es una región del espacio-tiempo con una gravedad tan intensa que ni siquiera la luz puede escapar de su horizonte de sucesos.','Un buco nero è una regione dello spaziotempo con una gravità così intensa che nemmeno la luce può sfuggire oltre il suo orizzonte degli eventi.','Czarna dziura to obszar czasoprzestrzeni o tak silnej grawitacji, że zza jej horyzontu zdarzeń nie może uciec nawet światło.','Een zwart gat is een gebied in de ruimtetijd met zo’n sterke zwaartekracht dat zelfs licht niet voorbij de waarnemingshorizon kan ontsnappen.'],
    ['🔬 Факт: Чёрные дыры обнаруживают, в частности, по влиянию на окружающее вещество и по гравитационным волнам от их слияний.','🔬 Дерек: Қара құрдымдарды айналасындағы затқа әсері және олардың қосылуынан туатын гравитациялық толқындар арқылы анықтауға болады.','🔬 Fakt: Černé díry lze odhalit podle jejich vlivu na okolní hmotu a podle gravitačních vln při jejich slučování.','🔬 Fact: Black holes can be detected by their effects on nearby matter and by gravitational waves from mergers.','🔬 Fakt: Schwarze Löcher lassen sich an ihrer Wirkung auf Materie in ihrer Umgebung und an Gravitationswellen bei Verschmelzungen erkennen.','🔬 Fait : On détecte notamment les trous noirs grâce à leur effet sur la matière environnante et aux ondes gravitationnelles émises lors de leur fusion.','🔬 Dato: Los agujeros negros se detectan por su efecto sobre la materia cercana y por las ondas gravitacionales de sus fusiones.','🔬 Curiosità: I buchi neri si individuano anche osservando il loro effetto sulla materia circostante e le onde gravitazionali prodotte dalle fusioni.','🔬 Fakt: Czarne dziury wykrywa się na podstawie ich wpływu na otaczającą materię i fal grawitacyjnych powstających podczas łączenia.','🔬 Feit: Zwarte gaten worden opgespoord door hun invloed op omringende materie en door zwaartekrachtgolven bij samensmeltingen.'],
    ['Э-Э-Э! МОЯ КАСТРЮЛЯ ЧУТЬ НЕ УЛЕТЕЛА ТУДА! Эксперимент отменяется. Отходим на безопасное расстояние!','Ә-Ә-Ә! ҚАЗАНЫМ СОҒАН ҰША ЖАЗДАДЫ! Эксперимент тоқтатылды. Қауіпсіз қашықтыққа шегінеміз!','E-E-E! MÁLEM SE MI TAM NEODLETĚL HRNEC! Pokus se ruší. Ustupujeme do bezpečné vzdálenosti!','E-E-E! MY POT ALMOST FLEW IN THERE! Experiment cancelled. Retreat to a safe distance!','Ä-Ä-Ä! MEIN KOCHTOPF WÄRE FAST HINEINGEFLOGEN! Experiment abgebrochen. Wir ziehen uns auf sichere Entfernung zurück!','E-E-E ! MA MARMITE A FAILLI S’ENVOLER LÀ-DEDANS ! Expérience annulée. Reculons à une distance sûre !','¡E-E-EH! ¡MI OLLA CASI SALE VOLANDO HACIA ALLÍ! Experimento cancelado. ¡Retirada a una distancia segura!','E-E-EH! LA MIA PENTOLA STAVA PER FINIRE LÌ DENTRO! Esperimento annullato. Ritiriamoci a distanza di sicurezza!','E-E-E! MÓJ GARNEK PRAWIE TAM POLECIAŁ! Eksperyment odwołany. Wycofujemy się na bezpieczną odległość!','E-E-E! MIJN KOOKPOT VLOOG ER BIJNA IN! Experiment afgelast. Terug naar een veilige afstand!'],
    ['Галактика Андромеды — большая спиральная галактика, соседняя с Млечным Путём. Она находится примерно в 2,5 миллиона световых лет от Земли.','Андромеда — Құс жолына көршілес үлкен шиыршық галактика. Ол Жерден шамамен 2,5 миллион жарық жылы қашықтықта.','Galaxie v Andromedě je velká spirální galaxie sousedící s Mléčnou dráhou. Od Země je vzdálena asi 2,5 milionu světelných let.','The Andromeda Galaxy is a large spiral galaxy neighbouring the Milky Way. It is about 2.5 million light-years from Earth.','Die Andromedagalaxie ist eine große Spiralgalaxie in der Nachbarschaft der Milchstraße. Sie ist etwa 2,5 Millionen Lichtjahre von der Erde entfernt.','La galaxie d’Andromède est une grande galaxie spirale voisine de la Voie lactée. Elle se trouve à environ 2,5 millions d’années-lumière de la Terre.','La galaxia de Andrómeda es una gran galaxia espiral vecina de la Vía Láctea. Está a unos 2,5 millones de años luz de la Tierra.','La galassia di Andromeda è una grande galassia a spirale vicina alla Via Lattea. Si trova a circa 2,5 milioni di anni luce dalla Terra.','Galaktyka Andromedy to duża galaktyka spiralna sąsiadująca z Drogą Mleczną. Znajduje się około 2,5 miliona lat świetlnych od Ziemi.','Het Andromedastelsel is een groot spiraalstelsel naast de Melkweg. Het bevindt zich op ongeveer 2,5 miljoen lichtjaar van de aarde.'],
    ['🔬 Факт: Андромеда и Млечный Путь сближаются. Их будущее взаимодействие ожидается через миллиарды лет, но точный сценарий остаётся неопределённым.','🔬 Дерек: Андромеда мен Құс жолы бір-біріне жақындап келеді. Олардың өзара әрекеттесуі миллиардтаған жылдан кейін болуы мүмкін, бірақ нақты сценарий белгісіз.','🔬 Fakt: Andromeda a Mléčná dráha se k sobě přibližují. Jejich budoucí interakce se očekává za miliardy let, přesný scénář však není jistý.','🔬 Fact: Andromeda and the Milky Way are moving toward each other. Their future interaction is expected in billions of years, but the exact outcome remains uncertain.','🔬 Fakt: Andromeda und die Milchstraße nähern sich einander. Ihre künftige Wechselwirkung wird in Milliarden Jahren erwartet, der genaue Ablauf ist jedoch ungewiss.','🔬 Fait : Andromède et la Voie lactée se rapprochent. Leur interaction future est prévue dans plusieurs milliards d’années, mais son scénario exact reste incertain.','🔬 Dato: Andrómeda y la Vía Láctea se están acercando. Su interacción futura se espera dentro de miles de millones de años, aunque el desenlace exacto sigue siendo incierto.','🔬 Curiosità: Andromeda e la Via Lattea si stanno avvicinando. La loro futura interazione è prevista tra miliardi di anni, ma lo scenario preciso resta incerto.','🔬 Fakt: Andromeda i Droga Mleczna zbliżają się do siebie. Ich przyszłe oddziaływanie nastąpi za miliardy lat, lecz dokładny przebieg pozostaje niepewny.','🔬 Feit: Andromeda en de Melkweg bewegen naar elkaar toe. Hun toekomstige wisselwerking wordt over miljarden jaren verwacht, maar het precieze verloop is onzeker.'],
    ['ЦЕЛАЯ ГАЛАКТИКА?! Сколько там грядок?! Нужна ракета побольше и запас тако!','ТҰТАС ГАЛАКТИКА МА?! Онда қанша көкөніс қатары бар?! Үлкенірек зымыран мен тако қоры керек!','CELÁ GALAXIE?! Kolik je tam záhonů?! Potřebujeme větší raketu a zásobu tacos!','A WHOLE GALAXY?! How many garden beds are there?! We need a bigger rocket and a supply of tacos!','EINE GANZE GALAXIE?! Wie viele Beete gibt es dort?! Wir brauchen eine größere Rakete und einen Vorrat an Tacos!','UNE GALAXIE ENTIÈRE ?! Combien y a-t-il de potagers là-bas ?! Il nous faut une fusée plus grande et des tacos en réserve !','¿¡TODA UNA GALAXIA!? ¿Cuántos huertos habrá allí? ¡Necesitamos un cohete más grande y provisiones de tacos!','UN’INTERA GALASSIA?! Quanti orti ci saranno?! Ci serve un razzo più grande e una scorta di tacos!','CAŁA GALAKTYKA?! Ile jest tam grządek?! Potrzebujemy większej rakiety i zapasu tacos!','EEN HEEL STERRENSTELSEL?! Hoeveel tuinbedden zijn daar wel niet?! We hebben een grotere raket en een voorraad taco’s nodig!'],
    ['⚠️ ВНИМАНИЕ: ЗОМБИ В ЛАБОРАТОРИИ!','⚠️ НАЗАР АУДАР: ЗОМБИЛЕР ЗЕРТХАНАДА!','⚠️ POZOR: ZOMBÍCI V LABORATOŘI!','⚠️ WARNING: ZOMBIES IN THE LAB!','⚠️ ACHTUNG: ZOMBIES IM LABOR!','⚠️ ATTENTION : DES ZOMBIES DANS LE LABORATOIRE !','⚠️ ATENCIÓN: ¡ZOMBIS EN EL LABORATORIO!','⚠️ ATTENZIONE: ZOMBI NEL LABORATORIO!','⚠️ UWAGA: ZOMBIE W LABORATORIUM!','⚠️ LET OP: ZOMBIES IN HET LAB!'],
    ['Мо-о-озги-и-и...','Ми-и-иды...','Mo-zky-y-y...','Bra-a-a-ins...','Ge-hi-i-irne...','Des ce-e-erveaux...','Ce-e-erebros...','Ce-e-ervelli...','Móóó-zgi...','He-e-ersenen...'],
    ['Где тако?!','Тако қайда?!','Kde jsou tacos?!','Where are the tacos?!','Wo sind die Tacos?!','Où sont les tacos ?!','¿Dónde están los tacos?!','Dove sono i tacos?!','Gdzie są tacos?!','Waar zijn de taco’s?!'],
    ['Брррр...','Брррр...','Brrr...','Brrr...','Brrr...','Brrr...','Brrr...','Brrr...','Brrr...','Brrr...'],
    ['Космические зомби','Ғарыш зомбилері','Vesmírní zombíci','Space zombies','Weltraumzombies','Zombies spatiaux','Zombis espaciales','Zombi spaziali','Kosmiczne zombie','Ruimtezombies'],
    ['Зомби в скафандре','Ғарыш киіміндегі зомби','Zombie ve skafandru','Zombie in a spacesuit','Zombie im Raumanzug','Zombie en combinaison spatiale','Zombi con traje espacial','Zombi con tuta spaziale','Zombie w skafandrze','Zombie in ruimtepak'],
    ['🌻 Лаборатория Безумного Дэйва · Космос ещё не готов к Дэйву.','🌻 Ессіз Дэйв зертханасы · Ғарыш Дэйвке әлі дайын емес.','🌻 Laboratoř Šíleného Davea · Vesmír ještě není na Davea připraven.','🌻 Crazy Dave’s Lab · Space isn’t ready for Dave yet.','🌻 Labor des verrückten Dave · Das Weltall ist noch nicht bereit für Dave.','🌻 Laboratoire de Dave le Fou · L’espace n’est pas encore prêt pour Dave.','🌻 Laboratorio de Dave el Loco · El espacio aún no está preparado para Dave.','🌻 Laboratorio di Dave il Pazzo · Lo spazio non è ancora pronto per Dave.','🌻 Laboratorium Szalonego Dave’a · Kosmos nie jest jeszcze gotowy na Dave’a.','🌻 Lab van Gekke Dave · De ruimte is nog niet klaar voor Dave.'],
    ['← Вернуться в космическое приключение','← Ғарыштық оқиғаға оралу','← Zpět do vesmírného dobrodružství','← Return to the Space Adventure','← Zurück zum Weltraumabenteuer','← Retour à l’aventure spatiale','← Volver a la aventura espacial','← Torna all’avventura spaziale','← Wróć do kosmicznej przygody','← Terug naar het ruimteavontuur'],
    ['Зомби прорвались! 🧟 Нажми «Новая игра», чтобы начать заново.','Зомбилер бұзып кірді! 🧟 Қайта бастау үшін «Жаңа ойын» түймесін бас.','Zombíci prorazili! 🧟 Kliknutím na „Nová hra“ začneš znovu.','The zombies broke through! 🧟 Press “New Game” to start over.','Die Zombies sind durchgebrochen! 🧟 Klicke auf „Neues Spiel“, um neu zu beginnen.','Les zombies ont percé les défenses ! 🧟 Clique sur « Nouvelle partie » pour recommencer.','¡Los zombis han atravesado las defensas! 🧟 Pulsa «Nueva partida» para empezar de nuevo.','Gli zombi hanno sfondato! 🧟 Premi «Nuova partita» per ricominciare.','Zombie się przedarły! 🧟 Kliknij „Nowa gra”, aby zacząć od nowa.','De zombies zijn doorgebroken! 🧟 Klik op ‘Nieuw spel’ om opnieuw te beginnen.'],
    ['🏆 ПОБЕДА! Все 20 волн пройдены! Лаборатория Дэйва спасена! 🌻','🏆 ЖЕҢІС! Барлық 20 толқыннан өттің! Дэйвтің зертханасы құтқарылды! 🌻','🏆 VÍTĚZSTVÍ! Všech 20 vln je za tebou! Daveova laboratoř je zachráněna! 🌻','🏆 VICTORY! All 20 waves cleared! Dave’s lab is saved! 🌻','🏆 SIEG! Alle 20 Wellen geschafft! Daves Labor ist gerettet! 🌻','🏆 VICTOIRE ! Les 20 vagues sont terminées ! Le laboratoire de Dave est sauvé ! 🌻','🏆 ¡VICTORIA! ¡Has superado las 20 oleadas! ¡El laboratorio de Dave está a salvo! 🌻','🏆 VITTORIA! Tutte e 20 le ondate superate! Il laboratorio di Dave è salvo! 🌻','🏆 ZWYCIĘSTWO! Wszystkie 20 fal za nami! Laboratorium Dave’a jest uratowane! 🌻','🏆 OVERWINNING! Alle 20 golven zijn gehaald! Daves lab is gered! 🌻'],
    ['Чёрная дыра','Қара құрдым','Černá díra','Black hole','Schwarzes Loch','Trou noir','Agujero negro','Buco nero','Czarna dziura','Zwart gat'],
    ['⭐ Проксима Центавра','⭐ Проксима Центавра','⭐ Proxima Centauri','⭐ Proxima Centauri','⭐ Proxima Centauri','⭐ Proxima du Centaure','⭐ Próxima Centauri','⭐ Proxima Centauri','⭐ Proxima Centauri','⭐ Proxima Centauri'],
    ['🪐 Экзопланеты','🪐 Экзопланеталар','🪐 Exoplanety','🪐 Exoplanets','🪐 Exoplaneten','🪐 Exoplanètes','🪐 Exoplanetas','🪐 Esopianeti','🪐 Egzoplanety','🪐 Exoplaneten'],
    ['🌌 Туманность Ориона','🌌 Орион тұмандығы','🌌 Mlhovina v Orionu','🌌 Orion Nebula','🌌 Orionnebel','🌌 Nébuleuse d’Orion','🌌 Nebulosa de Orión','🌌 Nebulosa di Orione','🌌 Mgławica Oriona','🌌 Orionnevel'],
    ['🕳️ Чёрные дыры','🕳️ Қара құрдымдар','🕳️ Černé díry','🕳️ Black holes','🕳️ Schwarze Löcher','🕳️ Trous noirs','🕳️ Agujeros negros','🕳️ Buchi neri','🕳️ Czarne dziury','🕳️ Zwarte gaten'],
    ['🌠 Галактика Андромеды','🌠 Андромеда галактикасы','🌠 Galaxie v Andromedě','🌠 Andromeda Galaxy','🌠 Andromedagalaxie','🌠 Galaxie d’Andromède','🌠 Galaxia de Andrómeda','🌠 Galassia di Andromeda','🌠 Galaktyka Andromedy','🌠 Andromedastelsel'],
    ['Космический зомби','Ғарыш зомбилері','Vesmírný zombie','Space zombie','Weltraumzombie','Zombie spatial','Zombi espacial','Zombi spaziale','Kosmiczne zombie','Ruimtezombie'],
];

const normalize = text =>
  String(text ?? '').replace(/\s+/g, ' ').trim();

const translations = {};

for (const row of rows) {
  const original = normalize(row[0]);
  if (!original) continue;

  translations[original] = {};

  langs.forEach((lang, index) => {
    translations[original][lang] = row[index] || original;
  });
}


function detectDaveLabLanguage() {
  const candidates = [
    localStorage.getItem('siteLanguage'),
    localStorage.getItem('currentLanguage'),
    window.currentLanguage,
    window.siteLanguage,
    document.documentElement.lang
  ];
  

  for (const value of candidates) {
    if (!value) continue;

    const lang = String(value).toLowerCase().split('-')[0];

    if (langs.includes(lang)) {
      return lang;
    }
  }

  return 'ru';
}


const daveLabExtraTranslations = {
    "Планеты за пределами Солнечной системы. Есть ли там растения? А зомби?!": {
        cs: "Planety mimo Sluneční soustavu. Rostou tam rostliny? A co zombíci?!",
        pl: "Planety poza Układem Słonecznym. Czy są tam rośliny? A może zombie?!"
    },
    "Огромное облако газа и пыли, где рождаются звёзды. Дэйв уже ищет лейку.": {
        cs: "Obrovský oblak plynu a prachu, kde se rodí hvězdy. Dave už hledá konev.",
        pl: "Ogromny obłok gazu i pyłu, w którym rodzą się gwiazdy. Dave już szuka konewki."
    },
    "Экстремальная гравитация": {
        cs: "Extrémní gravitace",
        pl: "Ekstremalna grawitacja"
    },
    "Области пространства, из которых ничто, даже свет, не может выбраться за пределы горизонта событий.": {
        cs: "Oblasti prostoru, z nichž za horizont událostí nemůže uniknout nic, ani světlo.",
        pl: "Obszary przestrzeni, z których nic, nawet światło, nie może wydostać się poza horyzont zdarzeń."
    },
    "Соседняя большая галактика": {
        cs: "Velká sousední galaxie",
        pl: "Duża sąsiednia galaktyka"
    },
    "Гигантская галактика за пределами Млечного Пути. Дэйв собирается отправить туда межгалактический горшок.": {
        cs: "Obří galaxie za Mléčnou dráhou. Dave tam chce poslat mezigalaktický květináč.",
        pl: "Olbrzymia galaktyka poza Drogą Mleczną. Dave zamierza wysłać tam międzygalaktyczną doniczkę."
    },
    "Чёрная дыра": {
        cs: "Černá díra",
        pl: "Czarna dziura"
    },

    "⭐ Проксима Центавра": {
        cs: "⭐ Proxima Centauri",
        pl: "⭐ Proxima Centauri"
    },
    "🪐 Экзопланеты": {
        cs: "🪐 Exoplanety",
        pl: "🪐 Egzoplanety"
    },
    "🌌 Туманность Ориона": {
        cs: "🌌 Mlhovina v Orionu",
        pl: "🌌 Mgławica Oriona"
    },
    "🕳️ Чёрные дыры": {
        cs: "🕳️ Černé díry",
        pl: "🕳️ Czarne dziury"
    },
    "🌠 Галактика Андромеды": {
        cs: "🌠 Galaxie v Andromedě",
        pl: "🌠 Galaktyka Andromedy"
    },

    "Проксима Центавра — красный карлик, ближайшая к Солнцу звезда. Она находится примерно в 4,24 светового года от нас. Вокруг неё обращается как минимум одна известная планета — Проксима b.": {
        cs: "Proxima Centauri je červený trpaslík a hvězda nejbližší Slunci. Je asi 4,24 světelného roku daleko. Obíhá kolem ní nejméně jedna známá planeta — Proxima b.",
        pl: "Proxima Centauri to czerwony karzeł i gwiazda najbliższa Słońcu. Znajduje się około 4,24 roku świetlnego od nas. Krąży wokół niej co najmniej jedna znana planeta — Proxima b."
    },
    "🔬 Факт: Проксима Центавра значительно холоднее и тусклее Солнца.": {
        cs: "🔬 Fakt: Proxima Centauri je výrazně chladnější a méně jasná než Slunce.",
        pl: "🔬 Fakt: Proxima Centauri jest znacznie chłodniejsza i słabiej świeci niż Słońce."
    },
    "БРРРРР! Красная звезда! Может, это гигантский помидор?! Нужно отправить туда подсолнух и выяснить!": {
        cs: "BRRR! Červená hvězda! Není to obří rajče?! Musíme tam poslat slunečnici a zjistit to!",
        pl: "BRRR! Czerwona gwiazda! Czy to gigantyczny pomidor?! Wyślijmy tam słonecznik i sprawdźmy!"
    },

    "Экзопланеты — это планеты за пределами нашей Солнечной системы. Одни раскалены, другие могут быть холодными, а некоторые обращаются вокруг нескольких звёзд.": {
        cs: "Exoplanety jsou planety mimo naši Sluneční soustavu. Některé jsou rozpálené, jiné mohou být chladné a některé obíhají kolem několika hvězd.",
        pl: "Egzoplanety to planety poza naszym Układem Słonecznym. Jedne są rozpalone, inne mogą być zimne, a niektóre krążą wokół kilku gwiazd."
    },
    "🔬 Факт: Учёные часто находят экзопланеты, наблюдая, как их прохождение перед звездой немного уменьшает её яркость.": {
        cs: "🔬 Fakt: Vědci často objevují exoplanety sledováním mírného poklesu jasu hvězdy při přechodu planety před ní.",
        pl: "🔬 Fakt: Naukowcy często odkrywają egzoplanety, obserwując niewielki spadek jasności gwiazdy, gdy planeta przechodzi przed jej tarczą."
    },
    "МОЗГИ ИЗ ДРУГОЙ ПЛАНЕТЫ?! Сначала проверим, можно ли там выращивать горохострел!": {
        cs: "MOZKY Z JINÉ PLANETY?! Nejdřív zjistíme, jestli tam lze pěstovat hráškomet!",
        pl: "MÓZGI Z INNEJ PLANETY?! Najpierw sprawdzimy, czy da się tam wyhodować plujki!"
    },

    "Туманность Ориона — область газа и пыли, в которой формируются новые звёзды. Она находится примерно в 1 300–1 400 световых годах от Земли.": {
        cs: "Mlhovina v Orionu je oblast plynu a prachu, kde vznikají nové hvězdy. Nachází se asi 1 300–1 400 světelných let od Země.",
        pl: "Mgławica Oriona to obszar gazu i pyłu, w którym powstają nowe gwiazdy. Znajduje się około 1300–1400 lat świetlnych od Ziemi."
    },
    "🔬 Факт: Изображения туманности показывают газ, светящийся под действием излучения горячих молодых звёзд.": {
        cs: "🔬 Fakt: Na snímcích mlhoviny je vidět plyn, který září působením záření horkých mladých hvězd.",
        pl: "🔬 Fakt: Na zdjęciach mgławicy widać gaz świecący pod wpływem promieniowania gorących, młodych gwiazd."
    },
    "ОГРОМНАЯ КОСМИЧЕСКАЯ ТЕПЛИЦА! Где моя лейка? И почему тут нет таблички «Не топтать»?!": {
        cs: "OBROVSKÝ VESMÍRNÝ SKLENÍK! Kde mám konev? A proč tu není cedule „Nevstupovat na záhony“?!",
        pl: "OGROMNA KOSMICZNA SZKLARNIA! Gdzie jest konewka? I dlaczego nie ma tabliczki „Nie deptać”?!"
    },

    "Чёрная дыра — область пространства-времени с настолько сильной гравитацией, что за её горизонтом событий не может выбраться даже свет.": {
        cs: "Černá díra je oblast časoprostoru s tak silnou gravitací, že za jejím horizontem událostí neunikne ani světlo.",
        pl: "Czarna dziura to obszar czasoprzestrzeni o tak silnej grawitacji, że zza jej horyzontu zdarzeń nie może uciec nawet światło."
    },
    "🔬 Факт: Чёрные дыры обнаруживают, в частности, по влиянию на окружающее вещество и по гравитационным волнам от их слияний.": {
        cs: "🔬 Fakt: Černé díry lze odhalit podle jejich vlivu na okolní hmotu a podle gravitačních vln při jejich slučování.",
        pl: "🔬 Fakt: Czarne dziury wykrywa się na podstawie ich wpływu na otaczającą materię i fal grawitacyjnych powstających podczas łączenia."
    },
    "Э-Э-Э! МОЯ КАСТРЮЛЯ ЧУТЬ НЕ УЛЕТЕЛА ТУДА! Эксперимент отменяется. Отходим на безопасное расстояние!": {
        cs: "E-E-E! MÁLEM SE MI TAM NEODLETĚL HRNEC! Pokus se ruší. Ustupujeme do bezpečné vzdálenosti!",
        pl: "E-E-E! MÓJ GARNEK PRAWIE TAM POLECIAŁ! Eksperyment odwołany. Wycofujemy się na bezpieczną odległość!"
    },

    "Галактика Андромеды — большая спиральная галактика, соседняя с Млечным Путём. Она находится примерно в 2,5 миллиона световых лет от Земли.": {
        cs: "Galaxie v Andromedě je velká spirální galaxie sousedící s Mléčnou dráhou. Od Země je vzdálena asi 2,5 milionu světelných let.",
        pl: "Galaktyka Andromedy to duża galaktyka spiralna sąsiadująca z Drogą Mleczną. Znajduje się około 2,5 miliona lat świetlnych od Ziemi."
    },
    "🔬 Факт: Андромеда и Млечный Путь сближаются. Их будущее взаимодействие ожидается через миллиарды лет, но точный сценарий остаётся неопределённым.": {
        cs: "🔬 Fakt: Andromeda a Mléčná dráha se k sobě přibližují. Jejich budoucí interakce se očekává za miliardy let, přesný scénář však není jistý.",
        pl: "🔬 Fakt: Andromeda i Droga Mleczna zbliżają się do siebie. Ich przyszłe oddziaływanie nastąpi za miliardy lat, lecz dokładny przebieg pozostaje niepewny."
    },
    "ЦЕЛАЯ ГАЛАКТИКА?! Сколько там грядок?! Нужна ракета побольше и запас тако!": {
        cs: "CELÁ GALAXIE?! Kolik je tam záhonů?! Potřebujeme větší raketu a zásobu tacos!",
        pl: "CAŁA GALAKTYKA?! Ile jest tam grządek?! Potrzebujemy większej rakiety i zapasu tacos!"
    },

    "⚠️ ВНИМАНИЕ: ЗОМБИ В ЛАБОРАТОРИИ!": {
        cs: "⚠️ POZOR: ZOMBÍCI V LABORATOŘI!",
        pl: "⚠️ UWAGA: ZOMBIE W LABORATORIUM!"
    },
    "Мо-о-озги-и-и...": {
        cs: "Mo-zky-y-y...",
        pl: "Móóó-zgi..."
    },
    "Где тако?!": {
        cs: "Kde jsou tacos?!",
        pl: "Gdzie są tacos?!"
    },
    "Брррр...": {
        cs: "Brrr...",
        pl: "Brrr..."
    },
    "🌻 Лаборатория Безумного Дэйва · Космос ещё не готов к Дэйву.": {
        cs: "🌻 Laboratoř Šíleného Davea · Vesmír ještě není na Davea připraven.",
        pl: "🌻 Laboratorium Szalonego Dave’a · Kosmos nie jest jeszcze gotowy na Dave’a."
    },
    "← Вернуться в космическое приключение": {
        cs: "← Zpět do vesmírného dobrodružství",
        pl: "← Wróć do kosmicznej przygody"
    }
};

function translateDaveLabText(text, lang) {
    const activeLang = langs.includes(lang)
        ? lang
        : detectDaveLabLanguage();

    const raw = String(text ?? "");

    if (activeLang === "ru") {
        return raw;
    }

    // Описание и факт в окне эксперимента — разные абзацы.
    if (/\n\s*\n/.test(raw)) {
        return raw.split(/(\n\s*\n)/).map(part => {
            if (/^\n\s*\n$/.test(part)) {
                return part;
            }

            return translateDaveLabText(part, activeLang);
        }).join("");
    }

    const original = normalize(raw);

    const extra = daveLabExtraTranslations[original]?.[activeLang];

    if (extra) {
        return extra;
    }

    const existing = translations[original]?.[activeLang];

    if (existing) {
        return existing;
    }

    // Отдельно переводим имя Дэйва и его реплику.
    const daveMatch = original.match(/^🧔\s*Безумный Дэйв:\s*«(.+)»$/);

    if (daveMatch) {
        const name = translations["Безумный Дэйв"]?.[activeLang] ?? "Crazy Dave";
        const quote = translateDaveLabText(daveMatch[1], activeLang);
        const marks = activeLang === "pl"
            ? ["„", "”"]
            : ["„", "“"];

        return `🧔 ${name}: ${marks[0]}${quote}${marks[1]}`;
    }

    return raw;
}

const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();

function applyDaveLabLanguage(lang) {
  const activeLang = langs.includes(lang)
    ? lang
    : detectDaveLabLanguage();

  const root = document.body;
  if (!root) return;

  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT
  );

  let node;

  while ((node = walker.nextNode())) {
    if (
      !node.parentElement ||
      /^(SCRIPT|STYLE|NOSCRIPT)$/i.test(
        node.parentElement.tagName
      )
    ) {
      continue;
    }

    if (!originalTextNodes.has(node)) {
      originalTextNodes.set(node, node.nodeValue);
    }

    const original = originalTextNodes.get(node);
    const translated = translateDaveLabText(
      original,
      activeLang
    );

    if (node.nodeValue !== translated) {
      node.nodeValue = translated;
    }
  }

  root.querySelectorAll(
    '[placeholder], [title], [aria-label], img[alt]'
  ).forEach(el => {
    ['placeholder', 'title', 'aria-label', 'alt'].forEach(attr => {
      if (!el.hasAttribute(attr)) return;

      let saved = originalAttributes.get(el);

      if (!saved) {
        saved = {};
        originalAttributes.set(el, saved);
      }

      if (!(attr in saved)) {
        saved[attr] = el.getAttribute(attr);
      }

      const translated = translateDaveLabText(
        saved[attr],
        activeLang
      );

      if (el.getAttribute(attr) !== translated) {
        el.setAttribute(attr, translated);
      }
    });
  });

  document.documentElement.lang = activeLang;
  window.daveLabLanguage = activeLang;
}

window.applyDaveLabLanguage = applyDaveLabLanguage;
window.translateDaveLabText = function (text, lang) {
  const activeLang = langs.includes(lang)
    ? lang
    : detectDaveLabLanguage();

  return translateDaveLabText(text, activeLang);
};
function initDaveLabLocalization() {
  applyDaveLabLanguage();

  const observer = new MutationObserver(() => {
    applyDaveLabLanguage();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  const oldChangeLanguage = window.changeLanguage;

  if (
    typeof oldChangeLanguage === 'function' &&
    !oldChangeLanguage.__daveLabWrapped
  ) {
    const wrapped = function (lang, ...args) {
      const result = oldChangeLanguage.call(this, lang, ...args);

      setTimeout(() => {
        applyDaveLabLanguage(lang);
      }, 100);

      return result;
    };

    wrapped.__daveLabWrapped = true;
    window.changeLanguage = wrapped;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener(
    'DOMContentLoaded',
    initDaveLabLocalization,
    { once: true }
  );
} else {
  initDaveLabLocalization();
}

})();