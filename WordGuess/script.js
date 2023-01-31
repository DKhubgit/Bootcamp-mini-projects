

function startGame() {
    let element = document.getElementById("main-box");
    element.remove();
    return;
}

document.getElementById("start").addEventListener('click', function (event) {
    event.preventDefault();
    startGame();
});