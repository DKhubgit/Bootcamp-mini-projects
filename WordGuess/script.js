

function startGame() {
    let element = document.getElementById("main-box");
    element.remove();
    displayGame();
    return;
}

function displayGame() {
    let titleEl = document.createElement('h1');
    titleEl.innerText = "Guess the Word!"

    document.body.appendChild(titleEl);

    let unorderedEl = document.createElement('ul')
    document.body.appendChild(unorderedEl);

    let listEl;

    for (let i = 0; i < 6; ++i) {
        listEl = document.createElement('li')
        listEl.innerText = "_";
        unorderedEl.appendChild(listEl);
    }
    let box = document.createElement('div');
    box.setAttribute('id', 'box')

    let inputBox = document.createElement('input');
    inputBox.setAttribute('type', 'text')
    inputBox.setAttribute('id', 'letterInput');

    document.body.appendChild(box);
    box.appendChild(inputBox);
    
}

document.getElementById("start").addEventListener('click', function (event) {
    event.preventDefault();
    startGame();
});