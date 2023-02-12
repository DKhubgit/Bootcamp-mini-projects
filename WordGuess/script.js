const words = ['BELT', 'SWALLOW', 'CONDUCTOR', 'HOOK', 'SUIT', 'KNOWLEDGE', 'FAST', 'FOOD', 'VEHICLE', 'LOBBY', 'ESSENTIAL', 'BUCKET', 'COMMUNICATION', 'ACCESS', 'LONG', 'RELINQUISH', 'CABLE', 'WINNER', 'FADE', 'IDENTITY', 'RESPECTABLE']

function startGame() {
    //remove all the elements in the body
    let body = document.body
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    displayGame();
    return;
}

let randIndex;
let letters;
let finishCount = 0;
let timeLimit = 20; //sec
let scores = {
    win: 0,
    lose: 0
}
let interval;

function displayGame() {
    setTime();
    randIndex = Math.floor(Math.random() * words.length);
    letters = words[randIndex].split('');
    //title
    let titleEl = document.createElement('h1');
    titleEl.innerText = "Guess the Word!"

    document.body.appendChild(titleEl);

    // box for the letters
    let letterBox = document.createElement('div');
    letterBox.setAttribute('id', 'letterBox');
    document.body.appendChild(letterBox);

    let unorderedEl = document.createElement('ul');
    unorderedEl.setAttribute('id', 'ulEl')
    letterBox.appendChild(unorderedEl);

    let listEl;

    for (let i = 0; i < letters.length; ++i) {
        listEl = document.createElement('li')
        listEl.innerText = "_";
        listEl.setAttribute('id', i)
        unorderedEl.appendChild(listEl);
    }

    //time title
    let time = document.createElement('h2');
    time.setAttribute('id', 'timeEl');
    time.innerHTML = timeLimit + ' Sec';
    document.body.appendChild(time);

    //box for the input
    let box = document.createElement('div');
    box.setAttribute('id', 'box')

    let inputBox = document.createElement('input');
    inputBox.setAttribute('type', 'text')
    inputBox.setAttribute('id', 'letterInput');

    document.body.appendChild(box);
    box.appendChild(inputBox);

    document.getElementById("letterInput").addEventListener("keydown", CheckLetter)

}

function CheckLetter(event) {
            let key = event.key.toUpperCase();
            let found = false;
            //checks for multiple letters
            while (!found) {
                if (letters.includes(key)) {
                    let space = document.getElementById(`${letters.indexOf(key)}`)
                    space.innerText = key;
                    letters.splice(letters.indexOf(key), 1, 'done');
                    finishCount++;
                } else {
                    found = true;
                }
            }
            document.getElementById('letterInput').value = "";
            if (finishCount == letters.length) {
                finishCount = 0;
                clearInterval(interval);
                endDisplay(true);
            }
            return;
}

function endDisplay(userWin) {
    //remove all the elements in the body
    let body = document.body
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }

    //replace with new display
    let finishHeader = document.createElement('h1');
    finishHeader.innerText =  "GAME END"
    body.appendChild(finishHeader);

    let winOrLoseHeader = document.createElement("h1");

    if (userWin) {
        winOrLoseHeader.innerText = "You Win!" 
        body.appendChild(winOrLoseHeader);
        scores.win++;
    } else {
        winOrLoseHeader.innerText = "You Lose..."
        body.appendChild(winOrLoseHeader);
        scores.lose++;
    }

    //show the word
    let guessedWord = document.createElement('h1');
    guessedWord.innerText = "The word was: " + words[randIndex];
    body.appendChild(guessedWord);

    //show score
    let scoreBoard = document.createElement('h1');
    scoreBoard.innerText = `Win: ${scores.win} | Loss: ${scores.lose}`;
    body.appendChild(scoreBoard);

    //new game Button
    let buttonBox = document.createElement('div')
    buttonBox.setAttribute('id', 'main-box')
    let newGameBtn = document.createElement('button');
    newGameBtn.setAttribute('id', 'newGame')
    newGameBtn.innerText = "New Game";
    buttonBox.appendChild(newGameBtn)
    body.appendChild(buttonBox);

    document.getElementById('newGame').addEventListener('click', startGame);
}

function setTime() {
    interval = setInterval(function () {
    timeLimit--
    document.getElementById('timeEl').innerText = timeLimit + ' Sec';

    if (timeLimit == 0) {
        //quit game
        clearInterval(interval);
        endDisplay(false);
    }
}, 1000)
}

document.getElementById("start").addEventListener('click', function (event) {
    event.preventDefault();
    startGame();
});