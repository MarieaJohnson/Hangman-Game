// Hangman-Game
console.log("Javascript is connected");

  // src="http://code.jquery.com/jquery-3.3.1.js"
  // integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  // crossorigin="anonymous"

  // $(document).ready(function(){

document.write("Press any key to get started!");  

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
var puzzles = ["horse", "cat", "dog", "chicken", "cow", "sheep"];
var userGuess;
//var guesses = [];
var noOfGuesses = 0;
var noOfLetters = ["_"];
var chosenLetters = [];

//Create letter buttons
// for (var m=0; m<options.length; m++) {
//   var m = $("<button>");
//   m.addClass("letter-button letter letter-button-color");
//   m.attr("data-let", letters[m]);
//   $("#buttons").apprend(m);
// }

// $(".letter-button").on("click",function(){
//   var userGuess = $('<div class="chosenLetters">').text($(this).data("let"));

//   $("#display").append(newPuzzle);
// });

// $("#new-game").on("click", function(){
//   $("#display").empty();
// });

// Choose random word from puzzles array
var newPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
console.log(newPuzzle);

var dashedWord = [];

// Create placeholders for number of letters in puzzle
for (var i = 0; i < newPuzzle.length; i++) {
      dashedWord.push("_");
    }
console.log(dashedWord)

//Display placeholder lines for puzzle
console.log(dashedWord.join(" "));
document.getElementById("puzzleGuess").innerHTML = dashedWord.join(" ");

// User presses button of letter
    // document.addEventListener("keydown", function(event){
    
// Change input to lowercase    
    // var userGuess = String.fromCharCode(event.keyCode).toLowerCase()
      //console.log(userGuess)
    
    // document.getElementById(userGuess.join(" "));
    // If userGuess = Letter in Puzzle
    // if (userGuess === "a letter in the puzzle");

// If correct show userGuess placement in puzzle
    //document.getElementById(userGuess);

// If userGuess <> letter in puzzle.
// Show wrong letters chosen at the bottom of the page.
    // alert("Please select another letter.")

// Compare userGuess to letters in puzzle
  // if (userGuess === null){

  // }
  // else if (userGuess.length !== 1) {
  // }
  // else {

// Update the blanks with the guess 
//   for (var k = 0; k < newPuzzle.length; k++) {
//     if (newPuzzle[k] === userGuess) {
//       dashedWord[k] = userGuess;
//       remainingLetters--;
//     }
//   }
// }
// }

// If user completes puzzle
  //   wins++;
  //   ("Wins: " + wins);

  //   // If user does not solve puzzle
  //   losses++;
  //   ("Losses: " + losses);

  // Show number of remaining guesses
    // var noOfGuesses = document.getElementById("guessesLeft");
    // });

    // comments = function () {
    //     noOfGuesses.innerHTML = "You have " + noOfGuesses + " guesses left.";

    //   if (noOfGuesses < 1) {
    //       noOfGuesses.innerHTML = "Game Over";
    //     }
    //       for (var l = 0; l < puzzle.length; l++){
    //         if (counter + space === puzzle.length) {
    //           noOfGuesses.innerHTML = "You Win!";
    //         }
    //     }
// Once puzzle is solved, reveal new puzzle
