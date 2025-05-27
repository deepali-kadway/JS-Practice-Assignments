const counterValue = document.getElementById('counterValue');
const decreaseButton = document.getElementById('decreaseButton');
const resetButton = document.getElementById('resetButton');
const increaseButton = document.getElementById('increaseButton');

let count = 0;

increaseButton.onclick = function() {
    count++;
    counterValue.textContent = count;
}

decreaseButton.onclick = function() {
    count--;
    counterValue.textContent = count;
}

resetButton.onclick = function() {
    count = 0;
    counterValue.textContent = count;
}