let cookies = 0;
let upgrades = 0;
let cost = 50;

const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgradeBtn = document.getElementById("upgrade");
const costText = document.getElementById("cost");
const upgradeCount = document.getElementById("upgrades");

cookie.addEventListener("click", () => {
    cookies += 1 + upgrades;
    counter.textContent = cookies;
});

upgradeBtn.addEventListener("click", () => {
    if (cookies >= cost) {
        cookies -= cost;
        upgrades++;
        cost = Math.floor(cost * 1.25);

        counter.textContent = cookies;
        upgradeCount.textContent = upgrades;
        costText.textContent = cost;
    }
});

// Automātiska sīkdatēs ģenerēšana
setInterval(() => {
    cookies += upgrades;
    counter.textContent = cookies;
}, 1000);
