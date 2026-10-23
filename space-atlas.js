const spaceObjects = {
    "Солнце": {
        description: "Солнце — звезда в центре Солнечной системы. Его свет и тепло важны для жизни на Земле."
    },
    "Земля": {
        description: "Земля — третья планета от Солнца. На ней существуют океаны, материки и известная нам жизнь."
    },
    "Марс": {
        description: "Марс — четвёртая планета от Солнца. На нём есть гигантские вулканы, каньоны и полярные ледяные шапки."
    },
    "Плутон": {
        description: "Плутон — карликовая планета в поясе Койпера. У него пять известных спутников."
    },
    "Луна": {
        description: "Луна — естественный спутник Земли. Её поверхность покрыта кратерами, а гравитация влияет на приливы и отливы."
    },
    "Юпитер": {
        description: "Юпитер — крупнейшая планета Солнечной системы. На нём находится Большое красное пятно — гигантский атмосферный вихрь."
    },
    "Сатурн": {
        description: "Сатурн — газовый гигант со знаменитой системой колец."
    },
    "Нептун": {
        description: "Нептун — восьмая планета от Солнца. Это ледяной гигант с очень быстрыми ветрами."
    },
    "Меркурий": {
        description: "Меркурий — ближайшая к Солнцу и самая маленькая планета Солнечной системы. У него почти нет атмосферы."
    },
    "Венера": {
        description: "Венера — вторая планета от Солнца. Её плотная атмосфера удерживает тепло, делая её самой горячей планетой Солнечной системы."
    },
    "Уран": {
        description: "Уран — ледяной гигант с голубовато-зелёным цветом. Его ось вращения сильно наклонена, поэтому кажется, что планета вращается на боку."
    }
};

const achievements = [
    {
        id: "first-explorer",
        name: "Первый исследователь",
        icon: "🔭",
        description: "Изучи любые три объекта.",
        check: explored => explored.length >= 3
    },
    {
        id: "planet-explorer",
        name: "Исследователь планет",
        icon: "🌍",
        description: "Изучи Солнце, Землю, Марс и Юпитер.",
        check: explored =>
            ["Солнце", "Земля", "Марс", "Юпитер"]
                .every(name => explored.includes(name))
    },
    {
        id: "giant-expert",
        name: "Знаток гигантов",
        icon: "🪐",
        description: "Изучи Юпитер, Сатурн и Нептун.",
        check: explored =>
            ["Юпитер", "Сатурн", "Нептун"]
                .every(name => explored.includes(name))
    },
    {
        id: "space-traveler",
        name: "Путешественник",
        icon: "🌌",
        description: "Исследуй семь объектов.",
        check: explored => explored.length >= 7
    },
    {
        id: "solar-expert",
        name: "Солнечный знаток",
        icon: "☀️",
        description: "Изучи Солнце и все восемь планет.",
        check: explored =>
            ["Солнце", "Меркурий", "Венера", "Земля",
             "Марс", "Юпитер", "Сатурн", "Уран", "Нептун"]
                .every(name => explored.includes(name))
    },
    {
        id: "ice-hunter",
        name: "Охотник за ледяными мирами",
        icon: "🧊",
        description: "Изучи Плутон и Нептун.",
        check: explored =>
            ["Плутон", "Нептун"].every(name => explored.includes(name))
    },
    {
        id: "moon-keeper",
        name: "Хранитель спутников",
        icon: "🌙",
        description: "Изучи Луну.",
        check: explored => explored.includes("Луна")
    },
    {
        id: "grand-explorer",
        name: "Великий исследователь",
        icon: "🚀",
        description: "Изучи все объекты, представленные в атласе.",
        check: explored =>
            Object.keys(spaceObjects).every(name => explored.includes(name))
    }
     ,{
        id: "space-genius",
        name: "Гений космоса",
        icon: "🌟",
        description: "Ответь правильно на все 10 вопросов викторины.",
        check: () => false
    },
    {
        id: "boss-slayer",
        name: "Покоритель космоса",
        icon: "⚔️",
        description: "Победи космического босса.",
        check: () => false
    }
];

let exploredObjects = [];
let unlockedAchievements = [];

try {
    const savedProgress = JSON.parse(
        localStorage.getItem("papyrusAtlasProgress") || "[]"
    );

    if (Array.isArray(savedProgress)) {
        exploredObjects = [...new Set(savedProgress)].filter(name =>
            Object.prototype.hasOwnProperty.call(spaceObjects, name)
        );
    }

    const savedAchievements = JSON.parse(
        localStorage.getItem("papyrusAtlasAchievements") || "[]"
    );

    if (Array.isArray(savedAchievements)) {
        unlockedAchievements = savedAchievements.filter(id =>
            achievements.some(item => item.id === id)
        );
    }
} catch (error) {
    console.warn("Не удалось загрузить прогресс:", error);
}

function showInfo(name) {
    const object = spaceObjects[name];

    if (!object) return;

    document.getElementById("info-title").textContent = name;
    document.getElementById("info-description").textContent =
        object.description;
    document.getElementById("info-panel").hidden = false;

    if (!exploredObjects.includes(name)) {
        exploredObjects.push(name);
        saveProgress();
    }

    updateProgress();

    document.getElementById("info-panel").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}

function closeInfo() {
    document.getElementById("info-panel").hidden = true;
}

function saveProgress() {
    try {
        localStorage.setItem(
            "papyrusAtlasProgress",
            JSON.stringify(exploredObjects)
        );
    } catch (error) {
        console.warn("Не удалось сохранить прогресс:", error);
    }
}

function saveAchievements() {
    try {
        localStorage.setItem(
            "papyrusAtlasAchievements",
            JSON.stringify(unlockedAchievements)
        );
    } catch (error) {
        console.warn("Не удалось сохранить достижения:", error);
    }
}

function updateProgress() {
    const target = 7;
    const count = Math.min(exploredObjects.length, target);
    const percent = Math.round((count / target) * 100);

    document.getElementById("progress").textContent =
        `Исследовано объектов: ${count} из ${target}`;

    document.getElementById("achievement").hidden =
        !unlockedAchievements.includes("first-explorer");

    renderProgressBar(percent);
    checkAchievements();
    renderAchievements();
}

function renderProgressBar(percent) {
    let container = document.getElementById("atlas-progress-bar");

    if (!container) {
        container = document.createElement("div");
        container.id = "atlas-progress-bar";
        container.style.cssText = "margin-top:16px";

        const progressText = document.getElementById("progress");
        progressText.insertAdjacentElement("afterend", container);
    }

    container.innerHTML = "";

    const track = document.createElement("div");
    track.style.cssText =
        "height:16px;background:#171b3b;border:1px solid #7166c9;" +
        "border-radius:12px;overflow:hidden";

    const fill = document.createElement("div");
    fill.style.cssText =
        `width:${percent}%;height:100%;` +
        "background:linear-gradient(90deg,#6652d9,#55c9ff);" +
        "transition:width .3s";

    track.appendChild(fill);

    const label = document.createElement("p");
    label.textContent = `Общий прогресс: ${percent}%`;
    label.style.color = "#b9e8ff";

    container.append(track, label);
}


function checkAchievements() {
    achievements.forEach(achievement => {
        
if (
    achievement.id !== "space-genius" &&
    achievement.check(exploredObjects) &&
    !unlockedAchievements.includes(achievement.id)
) {
    unlockedAchievements.push(achievement.id);
    playSpaceSound("unlock");

    console.log(
        `🏆 Новое достижение открыто: ${achievement.name}!`
    );
}


    });

    // Проверяем сохранённое секретное достижение
    try {
        const saved = JSON.parse(
            localStorage.getItem("papyrusAtlasAchievements") || "[]"
        );

        if (
            Array.isArray(saved) &&
            saved.includes("space-genius") &&
            !unlockedAchievements.includes("space-genius")
        ) {
            unlockedAchievements.push("space-genius");
        }
    } catch (error) {
        console.warn("Не удалось загрузить достижения:", error);
    }
    try {
        const saved = JSON.parse(
            localStorage.getItem("papyrusAtlasAchievements") || "[]"
        );

        if (
            Array.isArray(saved) &&
            saved.includes("boss-slayer") &&
            !unlockedAchievements.includes("boss-slayer")
        ) {
            unlockedAchievements.push("boss-slayer");
        }
    } catch (error) {
        console.warn("Не удалось загрузить награду босса:", error);
    }
    saveAchievements();
}
 


function renderAchievements() {
    let section = document.getElementById("all-achievements");

    if (!section) {
        section = document.createElement("section");
        section.id = "all-achievements";
        section.className = "mission";

        const mission = document.querySelector(".mission");

        if (mission) {
            mission.insertAdjacentElement("afterend", section);
        } else {
            document.querySelector("main").appendChild(section);
        }
    }

    section.innerHTML = "<h2>🏆 Космические достижения</h2>";

    achievements.forEach(achievement => {
        const unlocked =
            unlockedAchievements.includes(achievement.id);

        const card = document.createElement("div");
        card.className = "achievement-card";
        card.style.cssText =
            "padding:12px;margin:12px 0;border-radius:12px;" +
            "border:1px solid " +
            (unlocked ? "#e9c95b" : "#45476b") + ";" +
            "background:" +
            (unlocked ? "rgba(105,77,20,.2)" : "rgba(20,24,55,.6)");

        const title = document.createElement("h3");
        title.textContent =
            `${achievement.icon} ${achievement.name}` +
            (unlocked ? " — открыто!" : " — закрыто");

        const description = document.createElement("p");
        description.textContent = achievement.description;

        card.append(title, description);
        section.appendChild(card);
    });
}

document.getElementById("search").addEventListener("input", function () {
    const query = this.value.trim().toLocaleLowerCase("ru");

    document.querySelectorAll(".object-card").forEach(card => {
        card.hidden = !card.dataset.name
            .toLocaleLowerCase("ru")
            .includes(query);
    });
});

updateProgress();

// 🎮 КОСМИЧЕСКАЯ ВИКТОРИНА

const quizQuestions = [
    {
        question: "Какая звезда находится в центре Солнечной системы?",
        answers: ["Сириус", "Солнце", "Полярная звезда", "Бетельгейзе"],
        correct: 1
    },
    {
        question: "Какая планета известна своими знаменитыми кольцами?",
        answers: ["Марс", "Земля", "Сатурн", "Меркурий"],
        correct: 2
    },
    {
        question: "Какая планета является крупнейшей в Солнечной системе?",
        answers: ["Юпитер", "Нептун", "Венера", "Уран"],
        correct: 0
    },
    {
        question: "Как называется естественный спутник Земли?",
        answers: ["Титан", "Европа", "Луна", "Фобос"],
        correct: 2
    },
    {
        question: "Какая планета находится ближе всего к Солнцу?",
        answers: ["Венера", "Меркурий", "Земля", "Марс"],
        correct: 1
    },
    {
        question: "Какую планету называют Красной планетой?",
        answers: ["Юпитер", "Уран", "Марс", "Нептун"],
        correct: 2
    },
    {
        question: "Какая из этих планет является ледяным гигантом?",
        answers: ["Меркурий", "Земля", "Венера", "Нептун"],
        correct: 3
    },
    {
        question: "Как называется карликовая планета в поясе Койпера?",
        answers: ["Плутон", "Сатурн", "Марс", "Юпитер"],
        correct: 0
    },
    {
        question: "На какой планете находится Большое красное пятно?",
        answers: ["Венера", "Юпитер", "Уран", "Меркурий"],
        correct: 1
    },
    {
        question: "Какая планета вращается почти на боку?",
        answers: ["Уран", "Марс", "Земля", "Сатурн"],
        correct: 0
    }
];

let quizOrder = [];
let quizIndex = 0;
let quizPoints = 0;
let quizAnswered = false;

function startQuiz() {
    quizOrder = quizQuestions.map((_, index) => index);

    // Перемешиваем вопросы
    for (let i = quizOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizOrder[i], quizOrder[j]] = [quizOrder[j], quizOrder[i]];
    }

    quizIndex = 0;
    quizPoints = 0;
    quizAnswered = false;

    document.getElementById("quiz-start").hidden = true;
    document.getElementById("quiz-next").hidden = true;
    document.getElementById("quiz-feedback").textContent = "";

    showQuizQuestion();
}

function showQuizQuestion() {
    const question = quizQuestions[quizOrder[quizIndex]];

    quizAnswered = false;

    document.getElementById("quiz-question").textContent =
        `Вопрос ${quizIndex + 1} из ${quizOrder.length}: ${question.question}`;

    document.getElementById("quiz-score").textContent =
        `Очки: ${quizPoints}`;

    document.getElementById("quiz-feedback").textContent = "";
    document.getElementById("quiz-answers").innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.textContent = answer;
        button.style.cssText =
            "display:block;width:100%;margin:8px 0;padding:12px;" +
            "border:1px solid #7166c9;border-radius:10px;" +
            "background:#202044;color:white;cursor:pointer;";

        button.onclick = () => checkQuizAnswer(index);

        document.getElementById("quiz-answers").appendChild(button);
    });
}

function checkQuizAnswer(answerIndex) {
    if (quizAnswered) return;

    quizAnswered = true;

    const question = quizQuestions[quizOrder[quizIndex]];
    const buttons = document.querySelectorAll("#quiz-answers button");
    const feedback = document.getElementById("quiz-feedback");

    buttons.forEach(button => {
        button.disabled = true;
        button.style.cursor = "default";
    });

    if (answerIndex === question.correct) {
    playSpaceSound("correct");
    quizPoints++;
        feedback.textContent = "✅ Верно! Отличная работа!";
        feedback.style.color = "#7dffad";
        buttons[answerIndex].style.background = "#176b43";
    }  else {
    playSpaceSound("wrong");
    feedback.textContent =
            `❌ Не совсем! Правильный ответ: ${question.answers[question.correct]}.`;
        feedback.style.color = "#ffaaaa";
        buttons[answerIndex].style.background = "#783747";
        buttons[question.correct].style.background = "#176b43";
    }

    document.getElementById("quiz-score").textContent =
        `Очки: ${quizPoints}`;

    const nextButton = document.getElementById("quiz-next");
    nextButton.hidden = false;

    nextButton.textContent =
        quizIndex === quizOrder.length - 1
            ? "🏆 Посмотреть результат"
            : "Следующий вопрос →";
}

function nextQuestion() {
    if (!quizAnswered) return;

    quizIndex++;

    if (quizIndex >= quizOrder.length) {
        showQuizResult();
        return;
    }

    showQuizQuestion();
}


function showQuizResult() {
    const perfectScore = quizPoints === quizQuestions.length;
    const secretId = "space-genius";

    document.getElementById("quiz-question").textContent =
        `🏆 Викторина завершена! Твой результат: ${quizPoints} из ${quizQuestions.length}.`;

    document.getElementById("quiz-answers").innerHTML = "";

    const feedback = document.getElementById("quiz-feedback");

    if (perfectScore) {
        playSpaceSound("victory");
        feedback.textContent =
            "🌟 НЕВЕРОЯТНО! Ты ответил правильно на все вопросы!";
        feedback.style.color = "#ffe66d";

        // Сохраняем секретное достижение
        try {
            const saved = JSON.parse(
                localStorage.getItem("papyrusAtlasAchievements") || "[]"
            );

            if (Array.isArray(saved) && !saved.includes(secretId)) {
                saved.push(secretId);
                localStorage.setItem(
                    "papyrusAtlasAchievements",
                    JSON.stringify(saved)
                );
            }
        } catch (error) {
            console.warn("Не удалось сохранить секретное достижение:", error);
        }
    } else if (quizPoints >= 7) {
        feedback.textContent =
            "🚀 Отличный результат! Ты много знаешь о космосе!";
        feedback.style.color = "#b9e8ff";
    } else if (quizPoints >= 4) {
        feedback.textContent =
            "🪐 Хорошее начало! Продолжай исследовать космос!";
        feedback.style.color = "#b9e8ff";
    } else {
        feedback.textContent =
            "🌌 Впереди ещё много открытий. Попробуй снова!";
        feedback.style.color = "#b9e8ff";
    }

    document.getElementById("quiz-score").textContent =
        `Итоговые очки: ${quizPoints} из ${quizQuestions.length}`;

    document.getElementById("quiz-next").hidden = true;
    document.getElementById("quiz-start").hidden = false;
    document.getElementById("quiz-start").textContent = "🔄 Играть снова";

    renderAchievements();
}

    document.getElementById("quiz-question").textContent =
        `🏆 Викторина завершена! Твой результат: ${quizPoints} из ${quizQuestions.length}.`;

    document.getElementById("quiz-answers").innerHTML = "";

    const feedback = document.getElementById("quiz-feedback");

    if (quizPoints === quizQuestions.length) {
        feedback.textContent = "🌟 Великолепно! Ты настоящий мастер космоса!";
    } else if (quizPoints >= 7) {
        feedback.textContent = "🚀 Отличный результат! Ты много знаешь о космосе!";
    } else if (quizPoints >= 4) {
        feedback.textContent = "🪐 Хорошее начало! Продолжай исследовать космос!";
    } else {
        feedback.textContent = "🌌 Впереди ещё много открытий. Попробуй снова!";
    }

    feedback.style.color = "#b9e8ff";
    document.getElementById("quiz-score").textContent =
        `Итоговые очки: ${quizPoints} из ${quizQuestions.length}`;

    document.getElementById("quiz-next").hidden = true;
    document.getElementById("quiz-start").hidden = false;
    document.getElementById("quiz-start").textContent = "🔄 Играть снова";

// 🔊 ЗВУКОВЫЕ ЭФФЕКТЫ КОСМИЧЕСКОГО АТЛАСА

let spaceAudioContext = null;
let spaceSoundEnabled = true;

function getSpaceAudio() {
    if (!spaceAudioContext) {
        const AudioContextClass =
            window.AudioContext || window.webkitAudioContext;

        if (!AudioContextClass) return null;

        spaceAudioContext = new AudioContextClass();
    }

    if (spaceAudioContext.state === "suspended") {
        spaceAudioContext.resume();
    }

    return spaceAudioContext;
}

function playSpaceSound(type = "click") {
    if (!spaceSoundEnabled) return;

    const audio = getSpaceAudio();
    if (!audio) return;

    const presets = {
        click:   { frequency: 520, duration: 0.07, wave: "sine" },
        correct: { frequency: 740, duration: 0.16, wave: "sine" },
        wrong:   { frequency: 220, duration: 0.20, wave: "triangle" },
        victory: { frequency: 880, duration: 0.45, wave: "sine" },
        unlock:  { frequency: 660, duration: 0.30, wave: "triangle" }
    };

    const sound = presets[type] || presets.click;
    const now = audio.currentTime;
    const oscillator = audio.createOscillator();
    const volume = audio.createGain();

    oscillator.type = sound.wave;
    oscillator.frequency.setValueAtTime(sound.frequency, now);

    if (type === "victory") {
        oscillator.frequency.setValueAtTime(1046, now + 0.15);
        oscillator.frequency.setValueAtTime(1318, now + 0.30);
    }

    volume.gain.setValueAtTime(0.0001, now);
    volume.gain.exponentialRampToValueAtTime(0.16, now + 0.02);
    volume.gain.exponentialRampToValueAtTime(
        0.0001,
        now + sound.duration
    );

    oscillator.connect(volume);
    volume.connect(audio.destination);

    oscillator.start(now);
    oscillator.stop(now + sound.duration);
}

// Включение и выключение звука
function toggleSpaceSound() {
    spaceSoundEnabled = !spaceSoundEnabled;

    const button = document.getElementById("space-sound-toggle");

    if (button) {
        button.textContent = spaceSoundEnabled
            ? "🔊 Звук включён"
            : "🔇 Звук выключен";
    }

    if (spaceSoundEnabled) {
        playSpaceSound("click");
    }
}

// Кнопка управления звуком

function createSpaceSoundButton() {
    if (document.getElementById("space-sound-toggle")) return;

    const panel = document.createElement("div");

    panel.style.cssText =
        "position:fixed;right:16px;bottom:16px;z-index:9999;" +
        "display:flex;flex-direction:column;gap:8px;";

    const soundButton = document.createElement("button");
    soundButton.id = "space-sound-toggle";
    soundButton.type = "button";
    soundButton.textContent = "🔊 Звук включён";

    soundButton.style.cssText =
        "padding:12px 16px;border:1px solid #9285ff;" +
        "border-radius:14px;background:#201b48;color:white;" +
        "cursor:pointer;box-shadow:0 0 16px #6254aa;";

    soundButton.addEventListener("click", toggleSpaceSound);

    const testButton = document.createElement("button");
    testButton.type = "button";
    testButton.textContent = "🧪 Проверить звуки";

    testButton.style.cssText = soundButton.style.cssText;

    testButton.addEventListener("click", async () => {
        if (!spaceSoundEnabled) {
            spaceSoundEnabled = true;
            soundButton.textContent = "🔊 Звук включён";
        }

        getSpaceAudio();

        const sounds = ["click", "correct", "wrong", "unlock", "victory"];

        for (const sound of sounds) {
            playSpaceSound(sound);
            await new Promise(resolve => setTimeout(resolve, 650));
        }
    });

    panel.append(soundButton, testButton);
    document.body.appendChild(panel);
}


if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        createSpaceSoundButton
    );
} else {
    createSpaceSoundButton();
}

// 👾 БИТВА С КОСМИЧЕСКИМ БОССОМ

const bossQuestions = [
    {
        question: "Почему Венера горячее Меркурия, хотя находится дальше от Солнца?",
        answers: [
            "Из-за сильного парникового эффекта",
            "Из-за более близкой орбиты",
            "Из-за постоянных вулканических извержений",
            "Из-за отсутствия атмосферы"
        ],
        correct: 0
    },
    {
        question: "Что находится за орбитой Нептуна и содержит множество ледяных тел?",
        answers: [
            "Главный пояс астероидов",
            "Пояс Койпера",
            "Облака Венеры",
            "Солнечная корона"
        ],
        correct: 1
    },
    {
        question: "Почему на Луне почти не сохраняются следы жидкой воды на поверхности?",
        answers: [
            "Луна слишком близка к Земле",
            "У Луны нет океанов из-за магнитного поля Земли",
            "На поверхности почти нет атмосферного давления",
            "Луна постоянно покрыта облаками"
        ],
        correct: 2
    },
    {
        question: "Как учёные определяют состав атмосферы далёких планет по свету?",
        answers: [
            "По цвету фотографий без дополнительных измерений",
            "По спектральным линиям света",
            "По скорости вращения планеты вокруг оси",
            "По количеству спутников"
        ],
        correct: 1
    },
    {
        question: "Почему газовые гиганты могут иметь меньшую среднюю плотность, чем каменистые планеты?",
        answers: [
            "Они состоят преимущественно из лёгких веществ",
            "У них нет гравитации",
            "Они не имеют внутреннего строения",
            "Они находятся вне Солнечной системы"
        ],
        correct: 0
    }
];

let bossOrder = [];
let bossIndex = 0;
let bossLives = 3;
let bossAnswered = false;
let bossFinished = false;

function startBossBattle() {
    bossOrder = bossQuestions.map((_, index) => index);

    for (let i = bossOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bossOrder[i], bossOrder[j]] =
            [bossOrder[j], bossOrder[i]];
    }

    bossIndex = 0;
    bossLives = 3;
    bossAnswered = false;
    bossFinished = false;

    document.getElementById("boss-start").hidden = true;
    document.getElementById("boss-next").hidden = true;
    document.getElementById("boss-feedback").textContent = "";
    document.getElementById("boss-avatar").textContent = "👾";

    showBossQuestion();
}

function showBossQuestion() {
    const question = bossQuestions[bossOrder[bossIndex]];

    bossAnswered = false;

    document.getElementById("boss-status").textContent =
        `Вопрос ${bossIndex + 1} из ${bossQuestions.length}`;

    document.getElementById("boss-lives").textContent =
        "❤️ ".repeat(bossLives).trim() || "💔 Жизни закончились";

    document.getElementById("boss-question").textContent =
        question.question;

    document.getElementById("boss-feedback").textContent = "";
    document.getElementById("boss-answers").innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.textContent = answer;
        button.style.cssText =
            "display:block;width:100%;margin:8px 0;padding:12px;" +
            "border:1px solid #9285ff;border-radius:10px;" +
            "background:#201b48;color:white;cursor:pointer;";

        button.addEventListener("click", () => {
            answerBossQuestion(index);
        });

        document.getElementById("boss-answers").appendChild(button);
    });
}

function answerBossQuestion(answerIndex) {
    if (bossAnswered || bossFinished) return;

    bossAnswered = true;

    const question = bossQuestions[bossOrder[bossIndex]];
    const buttons =
        document.querySelectorAll("#boss-answers button");

    buttons.forEach(button => {
        button.disabled = true;
        button.style.cursor = "default";
    });

    const feedback = document.getElementById("boss-feedback");

    if (answerIndex === question.correct) {
        feedback.textContent = "✨ Попадание! Ты нанёс боссу урон!";
        feedback.style.color = "#7dffad";
        buttons[answerIndex].style.background = "#176b43";

        playSpaceSound("correct");
    } else {
        bossLives--;

        feedback.textContent =
            `💥 Ошибка! Правильный ответ: ${question.answers[question.correct]}.`;
        feedback.style.color = "#ffaaaa";
        buttons[answerIndex].style.background = "#783747";
        buttons[question.correct].style.background = "#176b43";

        playSpaceSound("wrong");
    }

    document.getElementById("boss-lives").textContent =
        "❤️ ".repeat(bossLives).trim() || "💔 Жизни закончились";

    if (bossLives <= 0) {
        finishBossBattle(false);
        return;
    }

    document.getElementById("boss-next").hidden = false;
    document.getElementById("boss-next").textContent =
        bossIndex === bossQuestions.length - 1
            ? "🏆 Завершить битву"
            : "Следующий вопрос →";
}

function nextBossQuestion() {
    if (!bossAnswered || bossFinished) return;

    bossIndex++;

    if (bossIndex >= bossQuestions.length) {
        finishBossBattle(true);
        return;
    }

    document.getElementById("boss-next").hidden = true;
    showBossQuestion();
}

function finishBossBattle(victory) {
    bossFinished = true;

    document.getElementById("boss-answers").innerHTML = "";
    document.getElementById("boss-next").hidden = true;
    document.getElementById("boss-start").hidden = false;
    document.getElementById("boss-start").textContent =
        "🔄 Сразиться снова";

    if (victory) {
        document.getElementById("boss-avatar").textContent = "💫";
        document.getElementById("boss-status").textContent =
            "БОСС ПОБЕЖДЁН!";
        document.getElementById("boss-question").textContent =
            "Ты выдержал все пять вопросов!";
        document.getElementById("boss-feedback").textContent =
            "🏆 Победа! Ты настоящий покоритель космоса!";
        document.getElementById("boss-feedback").style.color =
            "#ffe66d";

        playSpaceSound("victory");

        try {
            const saved = JSON.parse(
                localStorage.getItem("papyrusAtlasAchievements") || "[]"
            );

            if (Array.isArray(saved) &&
                !saved.includes("boss-slayer")) {
                saved.push("boss-slayer");

                localStorage.setItem(
                    "papyrusAtlasAchievements",
                    JSON.stringify(saved)
                );
            }
        } catch (error) {
            console.warn("Не удалось сохранить награду босса:", error);
        }
    } else {
        document.getElementById("boss-avatar").textContent = "👾";
        document.getElementById("boss-status").textContent =
            "БИТВА ПРОИГРАНА";
        document.getElementById("boss-question").textContent =
            "Босс оказался сильнее на этот раз.";
        document.getElementById("boss-feedback").textContent =
            "💫 Передохни и попробуй ещё раз!";
        document.getElementById("boss-feedback").style.color =
            "#b9e8ff";
    }
}
