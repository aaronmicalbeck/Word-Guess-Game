# Word-Guess-Game

> This is a simple JavaScript based game based on Hang-Man.  Use your keyboard to guess a letter, if the letter in the mystery word is found, it will be revealed, if not, that's one strike! Reveal all letters to guess the word and gain a point!


[Visit Demo Site](https://aaronmicalbeck.github.io/Word-Guess-Game/)


## Example

```javascript
// code away!

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
```

---

## Installation

### Clone

- Clone this repo to your local machine using `https://github.com/aaronmicalbeck/Word-Guess-Game`

### Startup

- Run in your desired browser

