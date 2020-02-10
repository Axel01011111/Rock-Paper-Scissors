var buttons = document.getElementsByClassName("btn");
var playerSelect;
var randomNum = Math.floor(Math.random() * 3);

var human;
var computer;

for (var i = 0; i < buttons.length; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function() {
    secondScene();
    playerSelect = event.target;
    playerSelection();
    setTimeout(function() {
      computerSelection(randomNum)
    }, 2000);

    setTimeout(function() {
      whoWin(human, computer);
    }, 3000);
  });
}




/*---FUNCTIONS---*/
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
  } else if (num1 == 0 && num2 == 2) {
    document.querySelector(".decision").innerHTML = "You Win";
  } else if (num1 == 1 && num2 == 0) {
    document.querySelector(".decision").innerHTML = "You Win";
  } else if (num1 == 1 && num2 == 2) {
    document.querySelector(".decision").innerHTML = "You Lose";
  } else if (num1 == 2 && num2 == 0) {
    document.querySelector(".decision").innerHTML = "You Lose";
  } else if (num1 == 2 && num2 == 1) {
    document.querySelector(".decision").innerHTML = "You Win";
  } else {
    document.querySelector(".decision").innerHTML = "Draw";
  }
  document.querySelector(".play-again").innerHTML = "Play again";
  document.querySelector(".play-again").style.display = "block";
}
