function myGuessingGame() {
    var numberToGuess = 10;
    var totalGuesses = 0;
    var userGuess = prompt("Guess a number between 1 and 100");
    while (userGuess != numberToGuess ) {
      totalGuesses++;
      if (userGuess > numberToGuess) {
        alert(+userGuess+ " is too large! Enter a smaller number: ");
      } else {
        alert(+userGuess+ " is too low! Enter a larger number: ");
      }
      userGuess = prompt("Please enter a number between 1 and 100: ");
      if (isNaN(userGuess) || userGuess.trim().length===0) {
        alert("Please enter a number");
        userGuess = prompt("Please enter a number: ");
      }
    }
    alert("Correct! You guessed the number in " + totalGuesses + " guesses.");
  }