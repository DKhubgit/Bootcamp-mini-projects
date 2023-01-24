

document.getElementById("button").addEventListener("click", function(event) {
    event.preventDefault();
    startGame();
})

function startGame() {
    let userChoice = prompt("Rock, Paper, or Scissors? \n R = Rock | P = Paper | S = Scissors")
    alert(userChoice);
}
