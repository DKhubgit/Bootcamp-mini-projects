const words = ['BELT', 'SWALLOW', 'CONDUCTOR', 'HOOK', 'SUIT', 'KNOWLEDGE', 'FAST', 'FOOD', 'VEHICLE', 'LOBBY', 'ESSENTIAL', 'BUCKET', 'COMMUNICATION', 'ACCESS', 'LONG', 'RELINQUISH', 'CABLE', 'WINNER', 'FADE', 'IDENTITY', 'RESPECTABLE']

function startGame() {
    let element = document.getElementById("main-box");
    element.remove();
    displayGame();
    return;
}

let randIndex = Math.floor(Math.random() * words.length);
let letters = words[randIndex].split('');

function displayGame() {
    let titleEl = document.createElement('h1');
    titleEl.innerText = "Guess the Word!"

    document.body.appendChild(titleEl);

    let unorderedEl = document.createElement('ul')
    document.body.appendChild(unorderedEl);

    let listEl;

    for (let i = 0; i < letters.length; ++i) {
        listEl = document.createElement('li')
        listEl.innerText = "_";
        listEl.setAttribute('id', i)
        unorderedEl.appendChild(listEl);
    }
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
            while (!found) {
                if (letters.includes(key)) {
                    let space = document.getElementById(`${letters.indexOf(key)}`)
                    space.innerText = key;
                    letters.splice(letters.indexOf(key), 1, 'done');
                } else {
                    found = true;
                }
            }
            document.getElementById('letterInput').value = "";
}

document.getElementById("start").addEventListener('click', function (event) {
    event.preventDefault();
    startGame();
});