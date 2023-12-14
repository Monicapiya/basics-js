"use strict";

/*
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
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess);

  // when there is no output
  if (!guess) {
    displayMessage("⛔ No Number!");
  }
  // if player wins
  else if (guess === secretNumber) {
    displayMessage("Correct Number!!🎉");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High! 🔴" : "Too low! 🔴");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

