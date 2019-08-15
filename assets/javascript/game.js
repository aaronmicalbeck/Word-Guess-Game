// Global Vars
var characters = ["lloyd", "harry", "mary", "mental", "shay", "beth", "seabass"];
var wordChoice = " ";
var lettersinWord = [];
var blanks = 0;
var blanksandLetters = [];
var wrongLetters = [];
var winCounter = 0;
var lossCounter = 0;
var guessesRemaining = 5;


// functions

function newGame() {
    wordChoice = characters[Math.floor(Math.random() * characters.length)];
    lettersinWord = wordChoice.split("");
    blanks = lettersinWord.length;


    guessesRemaining = 5;
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


function check(letter) {
    var letterinWord = false;

    for (var i = 0; i < blanks; i++) {
        if (wordChoice[i] == letter) {
            letterinWord = true;

        }
    }


    if (letterinWord) {
        for (var i = 0; i < blanks; i++) {
            if (wordChoice[i] == letter) {
                blanksandLetters[i] = letter;
            }
        }

    }

    else {wrongLetters.push(letter);
    guessesRemaining--

}
    


}

function gameOver(){
    console.log("WIN COUNT: " + winCounter + " | Loss Count: " + lossCounter + " | Guesses Left" + guessesRemaining);

    document.getElementById("guessesLeft").textContent = guessesRemaining;
    document.getElementById("wordtoguess").textContent = blanksandLetters.join(" ");
    document.getElementById("lettersGuessed").textContent = wrongLetters.join("");

    if(lettersinWord.toString() == blanksandLetters.toString()) {
        winCounter++;
        alert("WINNER!");

        document.getElementById("wins").textContent = winCounter;
        newGame();

    }

else if (guessesRemaining == 0) {
    lossCounter++;
    alert("LOSER");
    document.getElementById("losses").textContent = lossCounter;
    
    newGame();

}


    


}

newGame();



document.onkeyup = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    check(userGuess);
    gameOver();

    console.log(userGuess);

}








