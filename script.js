// Call a function randomizeNumber, take the value and append it to the img src attribute 
function diceRoller() {
    randomizeNumber();
    var dice = document.querySelector("#dice-1");
    dice.setAttribute("src", "images/dice-" + randomNumber + ".svg");
    randomizeNumber();
    var dice = document.querySelector("#dice-2");
    dice.setAttribute("src", "images/dice-" + randomNumber + ".svg");
}

// Generate a random number (((0-1) * 6) + 1) and then floor it
function randomizeNumber() {
    return randomNumber = Math.floor(Math.random() * 6 + 1);
}