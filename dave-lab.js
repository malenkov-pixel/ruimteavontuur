
// 🌻 КОСМИЧЕСКАЯ ЛАБОРАТОРИЯ БЕЗУМНОГО ДЭЙВА

const experiments = {
    proxima: {
        title: "⭐ Проксима Центавра",
        description:
            "Проксима Центавра — красный карлик, ближайшая к Солнцу звезда. " +
            "Она находится примерно в 4,24 светового года от нас. " +
            "Вокруг неё обращается как минимум одна известная планета — Проксима b.",
        fact:
            "🔬 Факт: Проксима Центавра значительно холоднее и тусклее Солнца.",
        dave:
            "БРРРРР! Красная звезда! Может, это гигантский помидор?! " +
            "Нужно отправить туда подсолнух и выяснить!"
    },

    exoplanets: {
        title: "🪐 Экзопланеты",
        description:
            "Экзопланеты — это планеты за пределами нашей Солнечной системы. " +
            "Одни раскалены, другие могут быть холодными, а некоторые " +
            "обращаются вокруг нескольких звёзд.",
        fact:
            "🔬 Факт: Учёные часто находят экзопланеты, наблюдая, " +
            "как их прохождение перед звездой немного уменьшает её яркость.",
        dave:
            "МОЗГИ ИЗ ДРУГОЙ ПЛАНЕТЫ?! " +
            "Сначала проверим, можно ли там выращивать горохострел!"
    },

    orion: {
        title: "🌌 Туманность Ориона",
        description:
            "Туманность Ориона — область газа и пыли, в которой формируются " +
            "новые звёзды. Она находится примерно в 1 300–1 400 световых годах " +
            "от Земли.",
        fact:
            "🔬 Факт: Изображения туманности показывают газ, светящийся " +
            "под действием излучения горячих молодых звёзд.",
        dave:
            "ОГРОМНАЯ КОСМИЧЕСКАЯ ТЕПЛИЦА! " +
            "Где моя лейка? И почему тут нет таблички «Не топтать»?!"
    },

    blackhole: {
        title: "🕳️ Чёрные дыры",
        description:
            "Чёрная дыра — область пространства-времени с настолько сильной " +
            "гравитацией, что за её горизонтом событий не может выбраться " +
            "даже свет.",
        fact:
            "🔬 Факт: Чёрные дыры обнаруживают, в частности, по влиянию " +
            "на окружающее вещество и по гравитационным волнам от их слияний.",
        dave:
            "Э-Э-Э! МОЯ КАСТРЮЛЯ ЧУТЬ НЕ УЛЕТЕЛА ТУДА! " +
            "Эксперимент отменяется. Отходим на безопасное расстояние!"
    },

    andromeda: {
        title: "🌠 Галактика Андромеды",
        description:
            "Галактика Андромеды — большая спиральная галактика, соседняя " +
            "с Млечным Путём. Она находится примерно в 2,5 миллиона световых лет " +
            "от Земли.",
        fact:
            "🔬 Факт: Андромеда и Млечный Путь сближаются. Их будущее " +
            "взаимодействие ожидается через миллиарды лет, но точный сценарий " +
            "остаётся неопределённым.",
        dave:
            "ЦЕЛАЯ ГАЛАКТИКА?! Сколько там грядок?! " +
            "Нужна ракета побольше и запас тако!"
    }
};


function showExperiment(objectId) {
    const experiment = experiments[objectId];

    if (!experiment) {
        return;
    }

    const panel = document.getElementById("experiment-panel");
    const title = document.getElementById("experiment-title");
    const description = document.getElementById("experiment-description");
    const note = document.getElementById("dave-note");

    if (!panel || !title || !description || !note) {
        console.error("Не найдены элементы панели эксперимента.");
        return;
    }

    const lang = window.daveLabLanguage || "ru";

    const translate = text => {
        if (typeof window.translateDaveLabText === "function") {
            return window.translateDaveLabText(text, lang);
        }

        return text;
    };

    title.textContent = translate(experiment.title);

    description.textContent =
        translate(experiment.description) +
        "\n\n" +
        translate(experiment.fact);

    description.style.whiteSpace = "pre-line";

    note.textContent =
        "🧔 " +
        translate("Безумный Дэйв:") +
        " «" +
        translate(experiment.dave) +
        "»";

    panel.hidden = false;

    panel.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


function closeExperiment() {
    const panel = document.getElementById("experiment-panel");

    if (panel) {
        panel.hidden = true;
    }
}
/* ========================================
   🌻 ЗАЩИТА ЛАБОРАТОРИИ БЕЗУМНОГО ДЭЙВА
======================================== */

const gardenPlants = {
    peashooter: {
        name: "Горохострел",
        emoji: "🟢",
        cost: 100,
        hp: 3,
        damage: 1,
        reload: 10
    },
    sunflower: {
        name: "Подсолнух",
        emoji: "🌻",
        cost: 50,
        hp: 3
    },
    wallnut: {
        name: "Орехостена",
        emoji: "🥔",
        cost: 75,
        hp: 12
    }
};

let gardenSun = 150;
let selectedGardenPlant = null;
let gardenWave = 1;
let gardenStarted = false;
let gardenTimer = null;
let gardenTick = 0;
let gardenZombies = [];
let gardenProjectiles = [];
let gardenZombieId = 0;


const GARDEN_ROWS = 5;
const GARDEN_COLS = 9;

// ☀️ Переменные собираемых солнц
let fallingGardenSuns = [];
let gardenSunTimer = null;

function createGarden() {
    const board = document.getElementById("garden-board");
    if (!board) return;

    // Остальной код функции оставь без изменений

    clearInterval(gardenTimer);
    gardenTimer = null;
    board.innerHTML = "";

    gardenZombies = [];
    gardenProjectiles = [];
    gardenTick = 0;
    gardenStarted = false;

    for (let row = 0; row < GARDEN_ROWS; row++) {
        for (let col = 0; col < GARDEN_COLS; col++) {
            const cell = document.createElement("button");

            cell.className = "garden-cell";
            cell.type = "button";
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.setAttribute(
                "aria-label",
                `Ряд ${row + 1}, клетка ${col + 1}`
            );

            cell.addEventListener("click", () => plantInCell(cell));
            board.appendChild(cell);
        }
    }

    updateGardenStatus();
}

function updateGardenStatus() {
    const sun = document.getElementById("sun-count");
    const wave = document.getElementById("wave-count");

    if (sun) sun.textContent = gardenSun;
    if (wave) wave.textContent = gardenWave;
}

function gardenMessage(message) {
    const element = document.getElementById("game-message");
    if (element) element.textContent = message;
}

function selectPlant(plantId) {
    if (gardenStarted) {
        gardenMessage("Дождись окончания волны!");
        return;
    }

    if (!gardenPlants[plantId]) return;

    selectedGardenPlant = plantId;

    document.querySelectorAll(".plant-choice").forEach(button => {
        button.classList.remove("selected");
    });

    const buttons = [...document.querySelectorAll(".plant-choice")];
    const ids = ["peashooter", "sunflower", "wallnut"];
    const index = ids.indexOf(plantId);

    if (buttons[index]) buttons[index].classList.add("selected");

    gardenMessage(
        `${gardenPlants[plantId].name}: ${gardenPlants[plantId].cost} ☀️. Выбери клетку.`
    );
}

function plantInCell(cell) {
    if (gardenStarted) {
        gardenMessage("Во время волны новые растения пока сажать нельзя!");
        return;
    }

    if (!selectedGardenPlant) {
        gardenMessage("Сначала выбери растение!");
        return;
    }

    if (cell.dataset.plant) {
        gardenMessage("Эта клетка уже занята!");
        return;
    }

    const plant = gardenPlants[selectedGardenPlant];

    if (gardenSun < plant.cost) {
        gardenMessage("Не хватает солнца!");
        return;
    }

    gardenSun -= plant.cost;
    cell.dataset.plant = selectedGardenPlant;
    cell.dataset.hp = plant.hp;
    cell.dataset.cooldown = "0";
    cell.textContent = plant.emoji;
    cell.title = `${plant.name} — здоровье: ${plant.hp}`;

    updateGardenStatus();
    gardenMessage(`${plant.name} посажен! 🌱`);
}

function startWave() {
    if (gardenStarted) return;

    const board = document.getElementById("garden-board");
    if (!board) return;

    gardenStarted = true;
    startGardenSunProduction();
    gardenTick = 0;
    gardenZombies = [];
    gardenProjectiles = [];

    board.querySelectorAll(".garden-zombie, .garden-pea").forEach(item => {
        item.remove();
    });

    const startButton = document.getElementById("start-wave");
    if (startButton) startButton.disabled = true;

    document.querySelectorAll(".plant-choice").forEach(button => {
        button.disabled = true;
    });

    const zombieCount = Math.min(3 + gardenWave, 10);

    for (let i = 0; i < zombieCount; i++) {
        const row = i % GARDEN_ROWS;
        const zombie = document.createElement("div");


        zombie.className = "garden-zombie";
        zombie.dataset.row = row;

        // Сам зомби
        const zombieFace = document.createElement("span");
        zombieFace.className = "garden-zombie-face";
        zombieFace.textContent = "🧟";
        zombie.appendChild(zombieFace);

        // Полоска здоровья
        const healthBar = document.createElement("div");
        healthBar.className = "garden-health-bar";

        const healthFill = document.createElement("div");
        healthFill.className = "garden-health-fill";

        healthBar.appendChild(healthFill);
        zombie.appendChild(healthBar);


        const isBucketZombie = gardenWave >= 3 && i % 3 === 2;
        const isFastZombie = gardenWave >= 2 && i % 3 === 1 && !isBucketZombie;

        const health = isBucketZombie
            ? 9 + gardenWave
            : isFastZombie
                ? 2 + Math.floor((gardenWave - 1) / 2)
                : 3 + Math.floor((gardenWave - 1) / 2);

        if (isBucketZombie) {
            zombie.classList.add("bucket-zombie");
            zombieFace.textContent = "🪣";
            zombie.title = `Зомби с ведром — здоровье: ${health}`;
        } else if (isFastZombie) {
            zombie.classList.add("fast-zombie");
            zombieFace.textContent = "🏃";
            zombie.title = `Быстрый зомби — здоровье: ${health}`;
        } else {
            zombie.title = `Обычный зомби — здоровье: ${health}`;
        }

        const data = {
            id: ++gardenZombieId,
            element: zombie,
            row,
            x: 94 + Math.floor(i / GARDEN_ROWS) * 5,
            hp: health,
            maxHp: health,
            attackCooldown: 0
        };

        zombie.title = `Здоровье: ${health}`;
        zombie.dataset.hp = health;
        zombie.dataset.maxHp = health;
        zombie.style.top = `${row * 20}%`;
        zombie.style.left = `${data.x}%`;

        board.appendChild(zombie);
        gardenZombies.push(data);
    }

    gardenMessage(`Волна ${gardenWave}! Зомби идут справа налево! 🧟`);
    gardenTimer = setInterval(updateGardenBattle, 100);
}

function createPea(row, x) {
    const board = document.getElementById("garden-board");
    if (!board) return;

    const pea = document.createElement("div");
    pea.className = "garden-pea";
    pea.textContent = "🟢";
    pea.style.left = `${x}%`;
    pea.style.top = `${row * 20}%`;

    board.appendChild(pea);

    gardenProjectiles.push({
        element: pea,
        row,
        x,
        damage: 1
    });
}


function damagePlant(cell, amount) {
    let hp = Number(cell.dataset.hp || 0);
    const maxHp = gardenPlants[cell.dataset.plant]?.hp || hp;

    hp -= amount;

    if (hp <= 0) {
        const plantName =
            gardenPlants[cell.dataset.plant]?.name || "Растение";

        cell.textContent = "";
        delete cell.dataset.plant;
        delete cell.dataset.hp;
        delete cell.dataset.cooldown;
        delete cell.dataset.damage;

        cell.classList.remove(
            "wallnut-damaged",
            "wallnut-cracked",
            "plant-bitten"
        );

        cell.title = "";
        gardenMessage(`${plantName} съеден! Защищай газон!`);
        return;
    }

    cell.dataset.hp = hp;

    if (cell.dataset.plant === "wallnut") {
        const damagePercent = 1 - hp / maxHp;

        cell.classList.toggle(
            "wallnut-damaged",
            damagePercent >= 0.25
        );

        cell.classList.toggle(
            "wallnut-cracked",
            damagePercent >= 0.6
        );

        cell.dataset.damage = damagePercent >= 0.6
            ? "heavy"
            : damagePercent >= 0.25
                ? "light"
                : "none";

        cell.title = `Орехостена — здоровье: ${hp}/${maxHp}`;
  
    } else {
        cell.classList.add("plant-bitten");
        cell.title =
            `${gardenPlants[cell.dataset.plant].name} — здоровье: ${hp}/${maxHp}`;
    }
} // ← ДОБАВЬ ЭТУ СКОБКУ

function updateGardenBattle() {
        const board = document.getElementById("garden-board");
        if (!board || !gardenStarted) return;

        gardenTick++;

        const cells = [...board.querySelectorAll(".garden-cell")];

        // 🌻 Подсолнухи производят солнце.
        if (gardenTick % 50 === 0) {
            let produced = 0;

            cells.forEach(cell => {
                if (cell.dataset.plant === "sunflower") produced += 25;
            });

            if (produced > 0) {
                gardenSun += produced;
                updateGardenStatus();
                gardenMessage(`Подсолнухи произвели ${produced} ☀️!`);
            }
        }

        // 🟢 Горохострелы стреляют по зомби в своём ряду.
        cells.forEach(cell => {
            if (cell.dataset.plant !== "peashooter") return;

            let cooldown = Number(cell.dataset.cooldown || 0);

            if (cooldown > 0) {
                cell.dataset.cooldown = cooldown - 1;
                return;
            }

            const row = Number(cell.dataset.row);
            const col = Number(cell.dataset.col);
            const plantX = ((col + 0.5) / GARDEN_COLS) * 100;

            const targetExists = gardenZombies.some(zombie =>
                zombie.row === row && zombie.x > plantX
            );

            if (targetExists) {
                createPea(row, plantX);
                cell.dataset.cooldown = gardenPlants.peashooter.reload;
            }
        });

        // 🟢 Горошины летят вправо и наносят настоящий урон.
        for (const pea of [...gardenProjectiles]) {
            pea.x += 3.5;
            pea.element.style.left = `${pea.x}%`;

            const target = gardenZombies.find(zombie =>
                zombie.row === pea.row &&
                zombie.x >= pea.x - 2 &&
                zombie.x <= pea.x + 5
            );

            if (target) {

                target.hp -= pea.damage;

                target.element.title =
                    `Здоровье: ${Math.max(0, target.hp)}/${target.maxHp}`;

                const healthFill =
                    target.element.querySelector(".garden-health-fill");

                if (healthFill) {
                    const healthPercent = Math.max(
                        0,
                        (target.hp / target.maxHp) * 100
                    );

                    healthFill.style.width = `${healthPercent}%`;
                }

                pea.element.remove();
                gardenProjectiles = gardenProjectiles.filter(item => item !== pea);

                if (target.hp <= 0) {
                    target.element.remove();
                    gardenZombies = gardenZombies.filter(item => item !== target);
                    gardenSun += 10;
                    updateGardenStatus();
                    gardenMessage("Зомби побеждён! +10 ☀️");
                } else {
                    gardenMessage(`Горошина попала! Осталось здоровья зомби: ${target.hp}`);
                }

                continue;
            }

            if (pea.x > 103) {
                pea.element.remove();
                gardenProjectiles = gardenProjectiles.filter(item => item !== pea);
            }
        }

        // 🧟 Зомби идут влево и грызут растения на своём пути.
        for (const zombie of [...gardenZombies]) {
            if (!gardenZombies.includes(zombie)) continue;

            const rowCells = cells.filter(cell =>
                Number(cell.dataset.row) === zombie.row &&
                cell.dataset.plant
            );

            const blockingPlant = rowCells.find(cell => {
                const col = Number(cell.dataset.col);
                const plantX = ((col + 0.5) / GARDEN_COLS) * 100;
                return plantX >= zombie.x - 2 && plantX <= zombie.x + 2;
            });

            if (blockingPlant) {
                zombie.element.classList.add("garden-zombie-biting");
                zombie.attackCooldown++;

                if (zombie.attackCooldown >= 10) {
                    zombie.attackCooldown = 0;
                    damagePlant(blockingPlant, 1);
                }

                continue;
            }
            zombie.element.classList.remove("garden-zombie-biting");
            zombie.x -= zombie.element.classList.contains("fast-zombie")
                ? 0.75
                : 0.35;
            zombie.element.style.left = `${zombie.x}%`;

            if (zombie.x <= 1) {
                endGardenBattle(false);
                return;
            }
        }

        if (gardenZombies.length === 0) {
            endGardenBattle(true);
        }
    }

   

function endGardenBattle(victory) {
    clearInterval(gardenTimer);
    gardenTimer = null;
    gardenStarted = false;
    stopGardenSunProduction();

    const board = document.getElementById("garden-board");

    if (board) {
        board.querySelectorAll(
            ".garden-zombie, .garden-pea"
        ).forEach(item => item.remove());
    }

    gardenZombies = [];
    gardenProjectiles = [];

    const startButton = document.getElementById("start-wave");

    if (!victory) {
        if (startButton) startButton.disabled = false;

        document.querySelectorAll(".plant-choice").forEach(button => {
            button.disabled = false;
        });

        gardenMessage(
            "Зомби прорвались! 🧟 Нажми «Новая игра», чтобы начать заново."
        );

        updateGardenStatus();
        return;
    }

    if (gardenWave === 20) {
        const victoryScreen = document.getElementById("campaign-victory");

        if (victoryScreen) {
            victoryScreen.hidden = false;
        }

        gardenMessage(
            "🏆 ПОБЕДА! Все 20 волн пройдены! Лаборатория Дэйва спасена! 🌻"
        );

        if (startButton) startButton.disabled = true;

        document.querySelectorAll(".plant-choice").forEach(button => {
            button.disabled = true;
        });

        const message = document.getElementById("game-message");

        if (message) {
            message.classList.add("campaign-victory");
        }

        updateGardenStatus();
        return;
    }

    if (startButton) startButton.disabled = false;

    document.querySelectorAll(".plant-choice").forEach(button => {
        button.disabled = false;
    });

    gardenSun += 50;
    gardenWave++;

    gardenMessage(
        `Победа! 🌻 +50 солнц. Подготовься к волне ${gardenWave}!`
    );

    updateGardenStatus();
}

function resetGame() {
    clearInterval(gardenTimer);
    gardenTimer = null;

    gardenSun = 150;
    gardenWave = 1;
    selectedGardenPlant = null;
    gardenStarted = false;

    stopGardenSunProduction();

    gardenZombies = [];
    gardenProjectiles = [];
    gardenTick = 0;

    const victoryScreen = document.getElementById("campaign-victory");

    if (victoryScreen) {
        victoryScreen.hidden = true;
    }

    const message = document.getElementById("game-message");

    if (message) {
        message.classList.remove("campaign-victory");
    }

    document.querySelectorAll(".plant-choice").forEach(button => {
        button.disabled = false;
        button.classList.remove("selected");
    });

    const startButton = document.getElementById("start-wave");

    if (startButton) {
        startButton.disabled = false;
    }

    gardenMessage(
        "Новая игра! Выбери растения и подготовь газон. 🌱"
    );

    updateGardenStatus();
    createGarden();
}


   /* ☀️ СОБИРАЕМЫЕ СОЛНЦА */



    function spawnGardenSun() {
        if (!gardenStarted) return;

        const board = document.getElementById("garden-board");
        if (!board) return;

        const sun = document.createElement("button");
        sun.type = "button";
        sun.className = "garden-sun";
        sun.textContent = "☀️";
        sun.title = "Собрать 25 солнц";
        sun.setAttribute("aria-label", "Собрать 25 солнц");

        const col = Math.floor(Math.random() * 9);
        const row = Math.floor(Math.random() * 5);

        sun.style.left = `${col * (100 / 9) + 2}%`;
        sun.style.top = `${row * 20 + 3}%`;

        sun.addEventListener("click", () => {
            gardenSun += 25;
            updateGardenStatus();
            sun.remove();
            fallingGardenSuns = fallingGardenSuns.filter(item => item !== sun);
            gardenMessage("Солнце собрано! +25 ☀️");
        });

        board.appendChild(sun);
        fallingGardenSuns.push(sun);
    }

    function startGardenSunProduction() {
        clearInterval(gardenSunTimer);
        gardenSunTimer = setInterval(spawnGardenSun, 5000);
    }

    function stopGardenSunProduction() {
        clearInterval(gardenSunTimer);
        gardenSunTimer = null;

        fallingGardenSuns.forEach(sun => sun.remove());
        fallingGardenSuns = [];
    }
    // 🌱 Создаём газон после объявления всех переменных
createGarden();