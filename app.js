const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const resetBtn = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winScoreSelector= document.querySelector('#playto');

let winningScore = 3;
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;
winScoreSelector.value=3;


winScoreSelector.addEventListener('change',() =>{
    winningScore = parseInt(winScoreSelector.value);
    // not using 'this' keyword here because 'this' doesnt work with arrow function.
    reset();
})


p1button.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
        }
        p1Display.textContent = p1Score;
    }
})


p2button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
        }
        p2Display.textContent = p2Score;
    }
})

resetBtn.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
}
