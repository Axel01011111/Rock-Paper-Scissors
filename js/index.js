//function variables
var buttons = document.getElementsByClassName("btn");
var playerSelect;

var gameStart = false;

//What players choose
var human;
var computer;

//score
var humanScore = 0;


//MAIN GAME
for (var i = 0; i < buttons.length; i++) {
  score();
  document.querySelectorAll(".btn")[i].addEventListener("click", function() {
    //starting game
    gameStart = true;

    //setting variables
    var randomNum = Math.floor(Math.random() * 3);


    if (gameStart == true) {
      secondScene();
      playerSelect = event.target;
      playerSelection();
      setTimeout(function() {
        computerSelection(randomNum)
      }, 2000);

      setTimeout(function() {
        whoWin(human, computer);
      }, 3000);

      reset();
    }

  });
}




/*---FUNCTIONS---*/
function reset() {
  document.querySelector(".play-again").addEventListener("click", function() {
    //reseting window
    document.querySelector(".container").style.display = "block";
    document.querySelector(".second-scene").style.display = "none";
    gameStart = false;

    //Reseting players
    document.querySelector("#computer-pick").className = "loading-round";
    document.querySelector("#player-pick").className = "";

    //Reseting results
    document.querySelector(".play-again").style.display = "none";
    document.querySelector(".decision").innerHTML = "";
  });
}

function score() {
  document.querySelector(".score-points").innerHTML = humanScore;
}

function secondScene() {
  document.querySelector(".container").style.display = "none";
  document.querySelector(".second-scene").style.display = "block";
}

function playerSelection() {
  switch (playerSelect.className) {
    case buttons[0].className:
      document.querySelector("#player-pick").classList.add("paper", "round");
      human = 0;
      break;
    case buttons[1].className:
      document.querySelector("#player-pick").classList.add("scissors", "round");
      human = 1;
      break;
    case buttons[2].className:
      document.querySelector("#player-pick").classList.add("rock", "round");
      human = 2;
      break;
    default:
      console.log("Nothing Happened");
  }
}

function computerSelection(num) {
  switch (num) {
    case 0:
      document.querySelector("#computer-pick").classList.remove("loading-round");
      document.querySelector("#computer-pick").classList.add("paper", "round");
      computer = 0;
      break;
    case 1:
      document.querySelector("#computer-pick").classList.remove("loading-round");
      document.querySelector("#computer-pick").classList.add("scissors", "round");
      computer = 1;
      break;
    case 2:
      document.querySelector("#computer-pick").classList.remove("loading-round");
      document.querySelector("#computer-pick").classList.add("rock", "round");
      computer = 2;
      break;
    default:
      console.log("Nothing Happened");
  }
}

function whoWin(num1, num2) {
  if (num1 == 0 && num2 == 1) {
    document.querySelector(".decision").innerHTML = "You Lose";
    document.querySelector("#computer-pick").classList.add("aura");
    humanScore--;
  } else if (num1 == 0 && num2 == 2) {
    document.querySelector(".decision").innerHTML = "You Win";
    document.querySelector("#player-pick").classList.add("aura");
    humanScore++;
  } else if (num1 == 1 && num2 == 0) {
    document.querySelector(".decision").innerHTML = "You Win";
    document.querySelector("#player-pick").classList.add("aura");
    humanScore++;
  } else if (num1 == 1 && num2 == 2) {
    document.querySelector(".decision").innerHTML = "You Lose";
    document.querySelector("#computer-pick").classList.add("aura");
    humanScore--;
  } else if (num1 == 2 && num2 == 0) {
    document.querySelector(".decision").innerHTML = "You Lose";
    document.querySelector("#computer-pick").classList.add("aura");
    humanScore--;
  } else if (num1 == 2 && num2 == 1) {
    document.querySelector(".decision").innerHTML = "You Win";
    document.querySelector("#player-pick").classList.add("aura");
    humanScore++;
  } else {
    document.querySelector(".decision").innerHTML = "Draw";
  }
  score();
  document.querySelector(".play-again").innerHTML = "Play again";
  document.querySelector(".play-again").style.display = "block";
}
