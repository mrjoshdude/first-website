let score = 0;
let clickValue = 1;
let upgradeCost = 10;
let upgradeLevel = 0;

const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');
const upgradeLevelDisplay = document.getElementById('upgradeLevel');

clickButton.addEventListener('click', () => {
    score += clickValue;
    updateScore();
});

upgradeButton.addEventListener('click', () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        upgradeLevel++;
        clickValue += 1;
        upgradeCost = Math.floor(upgradeCost * 1.5);
        updateScore();
        updateUpgrade();
    }
});

function updateScore() {
    scoreDisplay.textContent = score;
}

function updateUpgrade() {
    upgradeLevelDisplay.textContent = upgradeLevel;
    upgradeButton.textContent = `Buy Upgrade (Cost: ${upgradeCost})`;
}