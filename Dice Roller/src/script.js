function rollDice() {
const diceNumb = document.getElementById("diceNumb").value;
const diceResults = document.getElementById("diceResults");
const diceImages = document.getElementById("diceImages");

const values = [];
const image = [];

for (let i=0; i<diceNumb; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    image.push(`<img src="../images/dice_${value}.png" alt="Dice ${value}">`); 
}
    diceResults.textContent = `You have rolled: ${values.join(", ")}`
    diceImages.innerHTML = image.join('')

}