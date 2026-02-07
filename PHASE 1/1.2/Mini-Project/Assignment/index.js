let count = 1;

const counterElement = document.getElementById('counter');

function updateDisplay() {
    counterElement.textContent = `Count: ${count}`;
}

document.getElementById("double").addEventListener('click', () => {
    count *= 2;
    updateDisplay();
});