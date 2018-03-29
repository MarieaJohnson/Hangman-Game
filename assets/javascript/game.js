// Hangman-Game
console.log("Javascript is connected");

// $(document).ready(function(){

document.write("Press any key to get started!");

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var puzzles = ["horse", "cat", "dog", "chicken", "cow", "sheep"];
var userGuess = [];
//var guesses = [];
var noOfGuesses = 0;
var noOfLetters = ["_"];
var chosenLetters = [];

// Choose random word from puzzles array
var newPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
console.log(newPuzzle);

var dashedWord = [];

// Create placeholders for number of letters in puzzle
for (var i = 0; i < newPuzzle.length; i++) {
  dashedWord.push("_");
}
// console.log(dashedWord)
showDashed();
renderButtons();

//Display placeholder lines for puzzle
function showDashed(){
  console.log(dashedWord.join(" "));
  document.getElementById("puzzleGuess").innerHTML = dashedWord.join(" ");
}

//Create letter buttons
// var buttons = function () {
//   a
//   myButtons = document.getElementById("buttons");
//   letters = document.createElement("ul");
// }
function renderButtons(){
  for (var i = 0; i < letters.length; i++) {
    var newButton = $("<button>");
    newButton.addClass("letter-button letter letter-button-color");
    newButton.attr("data-let", letters[i]);
    newButton.text(letters[i])
    $("#buttons").append(newButton);
  }
}

$(document).on("click", ".letter-button", function (){
  console.log("click");
  var userGuess = $(this).attr("data-let");
  console.log(userGuess);
  // $("#display").append(newPuzzle);
  for (let i = 0; i <letters.length; i++) {
    const element = letters[i];
    if (element === userGuess) {
      letters.splice(i, 1);
    }
  }
  $("#buttons").empty();
  renderButtons();

  if (newPuzzle.indexOf(userGuess) > -1) {
    for (var i = 0; i<newPuzzle.length; i++) {
      if (newPuzzle[i] === userGuess) {
        dashedWord[i] = userGuess
      }
    }
    showDashed();
  }
});

$("#new-game").on("click", function () {
  $("#display").empty();
});



// User presses button of letter
// document.addEventListener("keydown", function (event) {

//   // Change input to lowercase    
//   var userGuess = String.fromCharCode(event.keyCode).toLowerCase()
//   console.log(userGuess)

//   document.getElementById(userGuess.join(" "));

//   // If userGuess = Letter in Puzzle
//   if (userGuess === "a letter in the puzzle");

//   // If correct show userGuess placement in puzzle
//   document.getElementById(userGuess);

//   // If userGuess <> letter in puzzle.
//   // Show wrong letters chosen at the bottom of the page.
//   alert("Please select another letter.")

//   // Compare userGuess to letters in puzzle
//   if (userGuess === null) {

//   }
//   else if (userGuess.length !== 1) {


//   }
//   else {

//     // Update the blanks with the guess 
//     for (var k = 0; k < newPuzzle.length; k++) {
//       if (newPuzzle[k] === userGuess) {
//         dashedWord[k] = userGuess;
//         remainingLetters--;
//       }
//     }
//   }

//   // If user completes puzzle
//   if (remainingLetters === 0) {
//     wins++;
//     $("#Wins").html(wins);
//   } else {
//       // If user does not solve puzzle
//       losses++;
//       $("#Losses".html(losses))
//     }

//     // If user does not solve puzzle
//     losses++;
//     ("Losses: " + losses);

//     // Show number of remaining guesses
//     var noOfGuesses = document.getElementById("guessesLeft");

//     comments = function () {
//       noOfGuesses.innerHTML = "You have " + noOfGuesses + " guesses left.";

//       if (noOfGuesses < 1) {
//         noOfGuesses.innerHTML = "Game Over";
//       }
//       for (var l = 0; l < puzzle.length; l++) {
//         if (counter + space === puzzle.length) {
//           noOfGuesses.innerHTML = "You Win!";
//         }
//         // Once puzzle is solved, reveal new puzzle
//       }
//     }
//   })
