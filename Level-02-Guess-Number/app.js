
const randomNumber = Math.round(Math.random() * 100);
const input = document.getElementById('input');
const submitBtn = document.getElementById('submit-btn');
const yourGuess = document.getElementById('Your-Guess');
const output = document.getElementById('out-put');

let attempts = 0;
const maxAttempts = 10;
const userGuesses = [];

submitBtn.addEventListener('click', checkGuess);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

function checkGuess() {
    const userGuess = parseInt(input.value);
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        output.textContent = 'Please enter a valid number between 1 and 100';
        output.style.color = 'red';
        return;
    }
    userGuesses.push(userGuess);
    attempts++;

    yourGuess.textContent = `Your guess: ${userGuess}`;

    if (userGuess === randomNumber) {
        output.textContent = `Congratulations! You guessed the number in ${attempts} attempts!`;
        output.style.color = 'green';
        showGameHistory();
        disableGame();
    } else if (attempts >= maxAttempts) {
        output.textContent = `Game Over! You've used all ${maxAttempts} attempts.`;
        output.style.color = 'red';
        showGameHistory();
        disableGame();
    } else if (userGuess < randomNumber) {
        output.textContent = `Too low! Try a higher number. (Attempts left: ${maxAttempts - attempts})`;
        output.style.color = 'red';
    } else {
        output.textContent = `Too high! Try a lower number. (Attempts left: ${maxAttempts - attempts})`;
        output.style.color = 'red';
    }

    input.value = '';
    input.focus();
}

function showGameHistory() {

    const gameHistory = document.createElement('div');
    gameHistory.style.marginTop = '20px';
    gameHistory.style.padding = '10px';
    gameHistory.style.backgroundColor = '#f0f0f0';
    gameHistory.style.borderRadius = '5px';
    
    gameHistory.innerHTML = `
        <p><strong>Computer's Number:</strong> ${randomNumber}</p>
        <p><strong>Your Guesses:</strong> ${userGuesses.join(', ')}</p>
    `;
    
    document.querySelector('.container').appendChild(gameHistory);
}

function disableGame() {
    
    input.disabled = true;
    submitBtn.disabled = true;
    
    const restartBtn = document.createElement('button');
    restartBtn.textContent = 'Play Again';
    restartBtn.style.marginTop = '10px';
    restartBtn.addEventListener('click', () => {
        location.reload();
    });
    document.querySelector('.container').appendChild(restartBtn);
}
