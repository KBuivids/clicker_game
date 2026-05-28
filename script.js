let score = 0;
let cps = 0;

const scoreEl = document.getElementById("score");
const cpsEl = document.getElementById("cps");
const cookie = document.getElementById("cookie");
const shop = document.getElementById("shop");

const upgrades = [
    {
        name: "Personal Area Network",
        cost: 50,
        power: 1,
        image: "PAN.png"
    },
    {
        name: "Local Area Network​",
        cost: 200,
        power: 5,
        image: "LAN.png"
    },
    {
        name: "Campus Area Network​",
        cost: 1000,
        power: 20,
        image: "CAN.png"
    },
    {
        name: "Metropolian Area Network​",
        cost: 5000,
        power: 100,
        image: "MAN.png"
    },
    {
        name: "Wide Area Network",
        cost: 20000,
        power: 500,
        image: "WAN.png"
    },
    {
        name: "Global Area Network​",
        cost: 100000,
        power: 2000,
        image: "GAN.png"
    },
    {
        name: "World Wide Web​",
        cost: 1000000,
        power: 20000,
        image: "WWW.png"
    }
];

cookie.addEventListener("click", () => {
    score++;
    updateUI();
});

function updateUI() {
    scoreEl.innerText = Math.floor(score) + " Jurija odekaloni";
    cpsEl.innerText = cps + " sekundē";
}

function createShop() {

    upgrades.forEach(upgrade => {

        const item = document.createElement("div");
        item.className = "shop-item";

        function render() {
            item.innerHTML = `
                <div class="upgrade">

                    <img src="${upgrade.image}" class="upgrade-img">

                    <div>
                        <h3>${upgrade.name}</h3>
                        <p>Cena: ${upgrade.cost}</p>
                        <p>+${upgrade.power} sekundē</p>
                    </div>

                </div>
            `;
        }

        render();

        item.addEventListener("click", () => {

            if(score >= upgrade.cost) {

                score -= upgrade.cost;
                cps += upgrade.power;

                upgrade.cost = Math.floor(upgrade.cost * 1.5);

                render();
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