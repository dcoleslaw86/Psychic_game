var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 7;
var chosenLetters = [];

var randomizedLetter = Math.floor(Math.random() * choices.length);
var computerPicks = choices[randomizedLetter];
console.log(computerPicks + " picked by the computer.");

function reset() {
    guessesLeft = 7;
    document.getElementById("guessesLeft").innerText = "Guesses Left: " + guessesLeft;
    chosenLetters = [];
    document.getElementById("userGuesses").innerText = "Your Guesses so far: ";
    randomizedLetter = Math.floor(Math.random() * choices.length);
    computerPicks = choices[randomizedLetter];
    console.log(computerPicks + " picked by the computer.");
}
document.onkeyup = function (event) {
    var userInput = event.key;
    var validChoices = /[a-z]/;
    if (!validChoices.test(userInput)) {
        alert("please enter a valid letter that is not a symbol.");
    }
    else {
        console.log(userInput);
    }
    if (userInput !== computerPicks) {
        guessesLeft--;
        document.getElementById("guessesLeft").innerText = "Guesses Left: " + guessesLeft;
        chosenLetters.push(userInput);
        document.getElementById("userGuesses").innerText = "Your Guesses so far: " + chosenLetters;
    }
    else if (userInput === computerPicks) {
        wins++;
        alert("You WIN! Excellent! Your skills far surpass mine.");
        document.getElementById("wins").innerText = "Wins: " + wins;
        reset();
    }
    if (guessesLeft === 0) {
        losses++;
        document.getElementById("lose").innerText = "Loses: " + losses;
        alert("Such a shame, you lost. Try harder next time.");
        reset();
    }
};