

document.getElementById("button").addEventListener("click", function(event) {
    event.preventDefault();
    startGame();
})

function startGame() {
    let userChoice = prompt("Rock, Paper, or Scissors? \n r = Rock | p = Paper | s = Scissors")
    //R = 0, P = 1, S = 2
    let array = ['r', 'p', 's'];
    let compChoice = array[Math.floor(Math.random() * 3)];

    if (userChoice == 'r' && compChoice == 'p') {
        alert(`You-${userChoice}, Computer-${compChoice} \n Computer Wins!`)
    } else if (userChoice == 'p' && compChoice == 's') {
        alert(`You-${userChoice}, Computer-${compChoice} \n Computer Wins!`)
    } else if (userChoice == 's' && compChoice == 'r') {
        alert(`You-${userChoice}, Computer-${compChoice} \n Computer Wins!`)
    } else if (userChoice == compChoice) {
        alert(`You-${userChoice}, Computer-${compChoice} \n Draw!`)
    } else if (userChoice == null) {
        alert ("Thanks for Playing!")
        return;
    } else {
        alert(`You-${userChoice}, Computer-${compChoice} \n YOU Win!`)
    }

    if (confirm("Play Again?")) {
        startGame();
    } else {
        alert("Thanks for Playing!")
    }

    return;
}
