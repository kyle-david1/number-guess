'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!'

// document.querySelector('.number').textContent = 13; 
// document.querySelector('.score').textContent = 20; 

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  
// No input present
  if(!guess) {
  document.querySelector('.message').textContent = '🎉 No Number!'

// When player wins 
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';

// When guess is too high    
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📈 Too High';
    score --;
    document.querySelector('.score').textContent = score; 
    } else {
      document.querySelector('.message').textContent = ' You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

// When guess is too low    
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too Low';
    score --;
    document.querySelector('.score').textContent = score; 
  }
})