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
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

let scores, currentScore, activePlayer, playing;

const init = function () {
  score0.textContent = 0;
  score1.textContent = 0;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  dice.classList.add("hidden");

  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player1.classList.remove("player--active");
  document.querySelector(".player--0").classList.add("player--active");
};
init();

const switchplayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
  currentScore = 0;
};
//Rolling dice fuctionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    //getting dice roll
    const diceNum = Math.trunc(Math.random() * 6) + 1;

    //displaing dice
    dice.classList.remove("hidden");
    dice.src = `images/dice-${diceNum}.png`;

    //check for dice 1 or not
    if (diceNum !== 1) {
      //add to current score
      currentScore += diceNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch next player
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      switchplayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    if (scores[activePlayer] >= 100) {
      playing = false;
      dice.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    }
    switchplayer();
  }
});
btnNew.addEventListener("click", init);
