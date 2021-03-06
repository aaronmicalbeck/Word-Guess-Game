// Global Vars
var characters = ["towel", "sunscreen", "surf", "waves", "beachball", "bikini",
    "seagull", "jetski", "summer", "sandbar", "castle", "frisbee", "shark", "dolphin", "tsunami", "jellyfish", "umbrella"];
var wordChoice = " ";
var lettersinWord = [];
var blanks = 0;
var blanksandLetters = [];
var wrongLetters = [];
var winCounter = 0;
var lossCounter = 0;
var guessesRemaining = 5;
var winsound = new Audio("sweep.wav");
var losesound = new Audio("shutdown.wav");



// functions

// computer chooses word from characters array

function newGame() {
    wordChoice = characters[Math.floor(Math.random() * characters.length)];
    lettersinWord = wordChoice.split("");
    blanks = lettersinWord.length;


    guessesRemaining = 10;
    wrongLetters = [];
    blanksandLetters = [];



    for (var i = 0; i < blanks; i++) {
        blanksandLetters.push("_");

    }

    document.getElementById("wordtoguess").textContent = blanksandLetters.join(" ");
    document.getElementById("guessesLeft").textContent = guessesRemaining;
    document.getElementById("wins").textContent = winCounter;
    document.getElementById("losses").textContent = lossCounter;




}

// checks to see if letter is in chosen word

function check(letter) {
    var letterinWord = false;

    for (var i = 0; i < blanks; i++) {
        if (wordChoice[i] == letter) {
            letterinWord = true;

        }
    }

// if user guesses a letter in the word, add letter to blank
    
if (letterinWord) {
        for (var i = 0; i < blanks; i++) {
            if (wordChoice[i] == letter) {
                blanksandLetters[i] = letter;
            }
        }

    }

    // if letter is not in chosen word, decrease guesses remaining and display user guess

    else {
        wrongLetters.push(letter);
        guessesRemaining--

    }



}

// user wins & loses

function gameOver() {
    

    document.getElementById("guessesLeft").textContent = guessesRemaining;
    document.getElementById("wordtoguess").textContent = blanksandLetters.join(" ");
    document.getElementById("lettersGuessed").textContent = wrongLetters.join("");

    if (lettersinWord.toString() == blanksandLetters.toString()) {
        winsound.play();
        winCounter++;
        document.getElementById("wins").textContent = winCounter;
        document.getElementById("instructions").textContent = ("YOU WIN. Choose another letter to begin game.");
        alert("YOU WIN. The word was " + wordChoice);
        newGame();




    }

    else if (guessesRemaining == 0) {
        losesound.play();
        lossCounter++;
        document.getElementById("losses").textContent = lossCounter;
        document.getElementById("instructions").textContent = ("LOSER. Choose another letter to begin game...");
        newGame();



    }





}

newGame();



document.onkeyup = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    check(userGuess);
    gameOver();


}







