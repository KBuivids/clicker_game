let score = 0;
let cps = 0;

const scoreEl = document.getElementById("score");
const cpsEl = document.getElementById("cps");
const cookie = document.getElementById("cookie");
const shop = document.getElementById("shop");

const upgrades = [
    {
        name: "Crimping Tool",
        cost: 50,
        power: 1
    },
    {
        name: "RJ-45 Connectors",
        cost: 200,
        power: 5
    },
    {
        name: "Jack",
        cost: 1000,
        power: 20
    },
    {
        name: "Optiskā Šķiedra",
        cost: 5000,
        power: 100
    },
    {
        name: "Switch",
        cost: 20000,
        power: 500
    },
    {
        name: "Server Rack",
        cost: 100000,
        power: 2000
    }
];

cookie.addEventListener("click", () => {
    score++;
    updateUI();
});

function updateUI() {
    scoreEl.innerText = Math.floor(score) + " Bald Coins";
    cpsEl.innerText = cps + " per second";
}

function createShop() {
    upgrades.forEach(upgrade => {
        const item = document.createElement("div");
        item.className = "shop-item";

        item.innerHTML = `
            <h3>${upgrade.name}</h3>
            <p>Cost: ${upgrade.cost}</p>
            <p>+${upgrade.power} cps</p>
        `;

        item.addEventListener("click", () => {
            if(score >= upgrade.cost) {
                score -= upgrade.cost;
                cps += upgrade.power;

                upgrade.cost = Math.floor(upgrade.cost * 1.5);

                item.innerHTML = `
                    <h3>${upgrade.name}</h3>
                    <p>Cost: ${upgrade.cost}</p>
                    <p>+${upgrade.power} cps</p>
                `;

                updateUI();
            }
        });

        shop.appendChild(item);
    });
}

setInterval(() => {
    score += cps;
    updateUI();
}, 1000);

createShop();
updateUI();