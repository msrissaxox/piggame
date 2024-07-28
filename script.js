'use strict';
//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const rollDice = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const scores =[0, 0]; 

let currentScore = 0;
let activePlayer = 0;

let playing = true;

score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');



const switchPlayer = function(){
activePlayer = activePlayer === 0 ? 1 : 0;
}



rollDice.addEventListener('click', function(){
  if(playing){
  const randomNumber = Math.trunc(Math.random() * 6 + 1);
  diceEl.setAttribute(`src`, `dice-${randomNumber}.png`);
  diceEl.classList.remove('hidden');



  if(randomNumber !== 1){
  //add dice to current score
currentScore += randomNumber;
//this code is giving an error
document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    // document.getElementById(`score--${activePlayer}`).textContent = currentScore;
   currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
    switchPlayer();
  }

//switch to next player
if(playing){
if(activePlayer === 0){
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  console.log('Player 1 is active');
  console.log(currentScore);
} else {
  document.querySelector('.player--0').classList.remove('player--active');
  document.querySelector('.player--1').classList.add('player--active');
  console.log('Player 2 is active');
  console.log(currentScore);
}
}}})

;



btnHold.addEventListener('click', function(){
  if(playing){
//1. Add current score to active player's score
//2. Check is player's score in >=100
//3.Finish game
//if not, switch to next player


if(scores[activePlayer] < 10){
  scores[activePlayer] += currentScore;

document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
currentScore = 0;
document.getElementById(`current--${activePlayer}`).textContent = 0;
switchPlayer();
}


if (scores[activePlayer] >= 10){
  playing = false;
  scores[activePlayer] += currentScore;
  console.log('I won!!');
  document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
  currentScore = 0;
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  switchPlayer();

}
}})
;

btnNew.addEventListener('click', function(){

  playing = true;
  let currentScore = 0;
let activePlayer = 0;
document.getElementById('current--0').textContent = 0;
document.getElementById('current--1').textContent = 0;

document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;
document.querySelector('.player--0').classList.remove('player--winner');
document.querySelector('.player--1').classList.remove('player--winner');
document.querySelector('.player--0').classList.add('player--active');
diceEl.classList.add('hidden');
})

