//create secretNumber
var secretNumber = 4;
//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
alert(guess);
//check if guess is right
if(guess === secretNumber){
	alert("You got it right.")
}
//check if number is higher
else if (guess > secretNumber){
	alert("too high.  guess again")
}
//check if number is lower

else{

	alert("too low. guess again!")
}