"use strict";

const number = Math.trunc(Math.random() * 20) +1;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(guess);

  if(!guess){
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!!🎉';
  } else if (guess > number){
    document.querySelector('.message').textContent = 'Too High! 🔴';
  } else if (guess < number){
    document.querySelector('.message').textContent = 'Too low! 🔴';
  }



});
