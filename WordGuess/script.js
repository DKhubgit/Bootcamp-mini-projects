const words = ['BELT', 'SWALLOW', 'CONDUCTOR', 'HOOK', 'SUIT', 'KNOWLEDGE', 'FAST', 'FOOD', 'VEHICLE', 'LOBBY', 'ESSENTIAL', 'BUCKET', 'COMMUNICATION', 'ACCESS', 'LONG', 'RELINQUISH', 'CABLE', 'WINNER', 'FADE', 'IDENTITY', 'RESPECTABLE']

function startGame() {
    let element = document.getElementById("main-box");
    element.remove();
    displayGame();
    return;
}

let randIndex = Math.floor(Math.random() * words.length);
let letters = words[randIndex].split('');
let finishCount = 0;
let timeLimit = 120; //sec


function displayGame() {
    setTime();
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
                newGame();
            }
            return;
}

function newGame() {
    randIndex = Math.floor(Math.random() * words.length);
    letters = words[randIndex].split('');

    let sub = document.getElementById('ulEl');
    sub.remove();

    let newUnorderEl = document.createElement('ul');
    newUnorderEl.setAttribute('id', 'ulEl')
    
    document.getElementById('letterBox').appendChild(newUnorderEl);

    let newListEl;

    for (let i = 0; i < letters.length; ++i) {
        newListEl = document.createElement('li')
        newListEl.innerText = "_";
        newListEl.setAttribute('id', i)
        newUnorderEl.appendChild(newListEl);
    }

    document.getElementById("letterInput").addEventListener("keydown", CheckLetter)

}

function setTime() {
    let interval = setInterval(function () {
        timeLimit--
        document.getElementById('timeEl').innerHTML = timeLimit + 'Sec';

        if (timeLimit == 0) {
            //quit game
            clearInterval(interval);
        }

    }, 1000)
}

document.getElementById("start").addEventListener('click', function (event) {
    event.preventDefault();
    startGame();
});