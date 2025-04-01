const p1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2Display')
}

const resetBtn = document.querySelector('#reset');
const winScoreSelector= document.querySelector('#playto');

let winningScore = 3;
let isGameOver = false;
winScoreSelector.value=3;


winScoreSelector.addEventListener('change',() =>{
    winningScore = parseInt(winScoreSelector.value);
    // not using 'this' keyword here because 'this' doesnt work with arrow function.
    reset();
})


function updateScores(player, opponent){
        if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled=true;
            opponent.button.disabled=true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', () => {
    updateScores(p1,p2)
})


p2.button.addEventListener('click', () => {
    updateScores(p2,p1)
})

resetBtn.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for(p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled=false;
    }
}
