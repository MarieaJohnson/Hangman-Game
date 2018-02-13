// Hangman-Game
console.log("Javascript is connected");

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var puzzles = ["horse", "cat", "dog", "chicken", "cow", "sheep"];
var guess = [];
var noOfGuesses = 0;
var noOfLetters = ["_"];
var chosenLetters = [];
// Track wins/losses - Restart counter after 5 wins or losses
var wins = 0;
var losses = 0;

// Choose random word from puzzles array
var newPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
console.log(newPuzzle);

var dashedWord = [];

// Create placeholders for number of letters in puzzle
for (var i = 0; i < newPuzzle.length; i++) {
  dashedWord.push("_");
}
console.log(dashedWord)
// Displaying dashes for puzzle
console.log(dashedWord.join(" "));
document.getElementById("puzzleGuess").innerHTML = dashedWord.join(" ");

// Display puzzle word with letter placeholders the # of letters in puzzle  
// function logArray(arr) {
//   for (i = 0; i < puzzle.length; i++) {
//     console.log(puzzle[i]);
//     document.write(noOfLetters[i]
//         }
// }

// for (let index = 0; index < array.length; index++) {
// const element = array[index];
// }

while (chosenLetters > 0) {

  document.onkeyup = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
console.log(userGuess letter)
    document.getElementById(userGuess);

    // Compare userGuess to letters in puzzle

    // If userGuess = Letter in Puzzle
    if (userGuess === "a letter in the puzzle");

    // If correct show userGuess placement in puzzle
    document.getElementById(userGuess);



    // If userGuess <> letter in puzzle.
    //  Show wrong letters chosen at the bottom of the page.
    alert("Please select another letter.")

    // If user completes puzzle
    wins++;
    ("Wins: " + wins);

    // If user chooses to autocomplete puzzle
    losses++;
    ("Losses: " + losses);

    // Show number of remaining guesses
    var noOfGuesses = document.getElementById("guessesLeft");

    comments = function () {
      noOfGuesses.innerHTML = "You have " + noOfGuesses + " guesses left.";
      if (noOfGuesses < 1) {
        noOfGuesses.innerHTML = "Game Over";
      }
      for (var i = 0; i < puzzle.length; i++) {
        if (counter + space === puzzle.length) {
          noOfGuesses.innerHTML = "You Win!";
        }
      }
    }
  }
}
// Once puzzle is solved, reveal new puzzle
