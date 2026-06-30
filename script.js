const humanScoreSpan = document.getElementById('humanScore');
const computerScoreSpan = document.getElementById('computerScore');
const humanChoiceDisplay = document.getElementById('humanChoiceDisplay');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
const resultMessage = document.getElementById('resultMessage');

let humanScore = 0;
let computerScore = 0;

// Emojis for each choice
const emojis = {
    rock: '🪨',
    paper: '📄',
    scissors: '✂️'
};

// step 1 computer generates number 

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3 );
    if(randomNumber === 0){
        return 'rock';
    }else if(randomNumber === 1)
    {    return 'paper';
    }else {
        return 'scissors';
    }
}
//step 2 we tell comptuer winning conditions 

function getWinner(human,computer){
    if(human === computer){
        return 'tie'
    }
    if(human=== 'rock' && computer ==='scissors'){
        return 'human';
    }
    if(human === 'paper' && computer ==='rock'){
        return 'human';
    }else if (human === 'scissors' && computer === 'paper'){
        return 'human';}

        return 'computer';
}
// STEP 3: Play a round 
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    humanChoiceDisplay.textContent = emojis[humanChoice];
    computerChoiceDisplay.textContent = emojis[computerChoice];

    const winner = getWinner(humanChoice, computerChoice);

    if (winner === 'human') {
        humanScore++;
        resultMessage.textContent = '🎉 You win!';
        resultMessage.style.color = '#7ddf9a';
    } else if (winner === 'computer') {
        computerScore++;
        resultMessage.textContent = '😵 Computer wins!';
        resultMessage.style.color = '#f77f7f';
    } else {
        resultMessage.textContent = '🤝 It\'s a tie!';
        resultMessage.style.color = '#f5c542';
    }

    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;
}

// STEP 4: Connect buttons
const moveButtons = document.querySelectorAll('[data-move]');

moveButtons.forEach(button => {
    button.addEventListener('click', function () {
        const move = this.getAttribute('data-move');
        playRound(move);
    });
});

// Reset button
document.getElementById('resetBtn').addEventListener('click', function () {
    humanScore = 0;
    computerScore = 0;
    humanScoreSpan.textContent = '0';
    computerScoreSpan.textContent = '0';
    humanChoiceDisplay.textContent = '🤚';
    computerChoiceDisplay.textContent = '🤖';
    resultMessage.textContent = '🔄 Game reset!';
    resultMessage.style.color = '#f0e9d8';
});
