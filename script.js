'use strict';

let num = Math.trunc(Math.random() * 20) + 1;
// console.log(num);

let score = 20;

if (!localStorage.getItem('highScore')) {
  localStorage.setItem('highScore', 0);
}

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = "Let's play!!";

console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', () => {
  if (score > 1) {
    const currValue = Number(document.querySelector('.guess').value);
    console.log(typeof currValue, currValue);
    if (currValue > num) {
      console.log('curr > num');
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (currValue < num) {
      console.log('curr < num');
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Win!';
      console.log('You win!');
      document.querySelector('.number').textContent = num;
      document.querySelector('body').style.backgroundColor = '#60b347';
      const highScore = Number(localStorage.getItem('highScore'));
      console.log('highScore', highScore, typeof highScore);

      if (highScore) {
        if (score > highScore) {
          localStorage.setItem('highScore', score);
        }
      } else {
        localStorage.setItem('highScore', score);
      }

      document.querySelector('.highscore').textContent =
        localStorage.getItem('highScore');
    }
  } else {
    document.querySelector('.message').textContent = 'You Loose.';
  }
});

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.score').textContent = '20';
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = "Let's Play!";
  num = Math.trunc(Math.random() * 20) + 1;
  //   localStorage.setItem('highScore', 0);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
});
