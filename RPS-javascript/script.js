

document.getElementById("button").addEventListener("click", function(event) {
    event.preventDefault();
    startGame();
})

let results = {
    wins: 0,
    draws: 0,
    losses: 0
}
function startGame() {
    let userChoice = prompt("Rock, Paper, or Scissors? \n r = Rock | p = Paper | s = Scissors")
    //R = 0, P = 1, S = 2
    let array = ['r', 'p', 's'];
    let compChoice = array[Math.floor(Math.random() * 3)];

    if (userChoice == 'r' && compChoice == 'p') {
        alert(`You-${userChoice}, Computer-${compChoice} \n Computer Wins!`)
        ++results.losses;
    } else if (userChoice == 'p' && compChoice == 's') {
        alert(`You-${userChoice}, Computer-${compChoice} \n Computer Wins!`)
        ++results.losses;
    } else if (userChoice == 's' && compChoice == 'r') {
        alert(`You-${userChoice}, Computer-${compChoice} \n Computer Wins!`)
        ++results.losses;
    } else if (userChoice == compChoice) {
        alert(`You-${userChoice}, Computer-${compChoice} \n Draw!`)
        ++results.draws;
    } else if (userChoice == null) {
        alert ("Thanks for Playing!")
        return;
    } else if (array.includes(userChoice)){
        alert(`You-${userChoice}, Computer-${compChoice} \n YOU Win!`)
        ++results.wins;
    } else {
        // if none of the if statements executes then the only reason would be that user chose a unappropriate letter
        alert("Please choose an appropriate letter")
    }

    if (confirm(`Play Again? \n Wins: ${results.wins} | Draws: ${results.draws} | Losses: ${results.losses}`)) {
        startGame();
    } else {
        alert("Thanks for Playing!")
    }

    return;
}
