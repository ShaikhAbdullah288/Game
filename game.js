
let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses : 0,
  ties : 0
};

updateScoreElement();

//Or else we can use below code for not score

/*
if(!score) {
  score = {
    wins : 0,
    losses : 0,
    ties : 0
  };
}
*/

function playGame(playerMove) {
  
      const computerMove = game();


let result = '';
 if (playerMove === 'scissor') {
      if (computerMove === 'rock') {
    result = 'you lose.';
    }else if (computerMove === 'paper') {
    result = 'you win.';
    }else if (computerMove === 'scissor') {
    result = 'tie.';
    }

 } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
    result = 'you win.';
    }else if (computerMove === 'paper') {
    result = 'tie.';
    }else if (computerMove === 'scissor') {
    result = 'you lose.';
    }
    
 }else if(playerMove === 'rock') {
  if (computerMove === 'rock') {
result = 'tie.';
}else if (computerMove === 'paper') {
result = 'you lose.';
}else if (computerMove === 'scissor') {
result = 'you win.';
}
 }

 if (result === 'you win.') {
  score.wins += 1;
 }
 else if (result === 'you lose.') {
  score.losses += 1;
 }
 else if (result === 'tie.') {
  score.ties += 1;
 }

 localStorage.setItem('score', JSON.stringify(score));

 updateScoreElement();

 document.querySelector('.js-result').innerHTML = 
 result;

 document.querySelector('.js-moves').innerHTML =
 `You Pick ${playerMove} - Computer Pick ${computerMove}`;


}

function updateScoreElement (){
  document.querySelector('.js-score').innerHTML =
 `Wins: ${score.wins}, losses: ${score.losses}, ties: ${score. ties}`;
}

function game() {
        const randomNumber = Math.random();

        let computerMove ='';

if (randomNumber >= 0 && randomNumber < 1/3) {
computerMove = 'rock';
}else if (randomNumber >= 1/3 && randomNumber < 2/3) {
computerMove = 'paper';
}else if (randomNumber >= 2/3 && randomNumber <1) {
computerMove = 'scissor';
}
return computerMove;
}