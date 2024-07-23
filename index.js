// Gera um número aleatório entre 1 e 10
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber); // Apenas para fins de depuração

const guessForm = document.getElementById('guessForm');
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');


guessForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const guess = parseInt(guessInput.value.trim());

  try {
    if (isNaN(guess)) {
      throw new Error('Por favor, insira apenas números.');
    }

    if (guess < 1 || guess > 10) {
      throw new Error('Por favor, insira um número entre 1 e 10.');
    }

    if (guess === randomNumber) {
      showMessage('Parabéns! Você acertou.');
      guessInput.disabled = true;
      reloadButton.style.display = 'block'
    } else if (guess < randomNumber) {
      showMessage('Errado. O número é maior.');
    } else {
      showMessage('Errado. O número é menor.');
    }
  } catch (error) {
    showMessage(error.message);
  }

  // Limpar o campo de entrada após cada tentativa
  guessInput.value = '';
});

function showMessage(msg) {
  message.textContent = msg;
}