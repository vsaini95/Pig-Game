"use strict";
//Selecting Elements
const score0 = document.querySelector("#score--0");
const score1 = document.getElementById("score--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");

score0.textContent = 0;
score1.textContent = 0;
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
dice.classList.add("hidden");

//Rolling dice fuctionality
btnRoll.addEventListener("click", function () {
  //getting dice roll
  const diceNum = Math.trunc(Math.random() * 6) + 1;

  //displaing dice
  dice.classList.remove("hidden");
  dice.src = `images/dice-${diceNum}.png`;

  //check for rolled 1
  if (diceNum !== 1) {
    //add to current score
    currentScore += diceNum;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch next player
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
