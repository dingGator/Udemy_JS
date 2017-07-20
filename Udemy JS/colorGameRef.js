var path= document.scripts[document.scripts.length -1].src;
var fileName = path.substring(path.lastIndexOf('/')+1);
function clearTop(){

	console.clear();
console.log( " JS  filename  Connected:  "+ fileName );
}
clearTop();

/*
var colors =[
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
];
*/
var numSquares =6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 =document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons =document.querySelectorAll(".mode");

for(var i=0;i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
	})
}
function reset(){

}


resetButton.addEventListener("click",function(){
	//generate all new colors
	colors =generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	this.textContent ="New Colors";
	messageDisplay.textContent="";
	//change colors of squares
	for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor = colors[i];
}
h1.style.backgroundColor ="steelblue";
});
colorDisplay.textContent = pickedColor;
for(var i=0;i<squares.length;i++){
//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		//console.log(clickedColor + "  1  "+ pickedColor);
		if (clickedColor === pickedColor){
		//console.log(clickedColor + "  2  "+ pickedColor);

			messageDisplay.textContent ="Correct!";
			resetButton.textContent ="Play Again?"
			changeColors(clickedColor);
			h1.style.backgroundColor= clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent ="Try Again";
		};
	});
}

function changeColors(color){
	//loop through all squares
	for(var i =0;i<squares.length;i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr =[];
	//repeat num times
	for(var i =0; i<num; i++){
		arr.push(randomColor());
		// get random color and push into array
	}
	// return that array
	return arr;
}

function randomColor(){
	// pick a "red" from 0-255
	var r =Math.floor(Math.random()*256);
	// pick a "green" from 0-255
	var g =Math.floor(Math.random()*256);
	// pick a "blue" from 0-255
	var b =Math.floor(Math.random()*256);
	return 	"rgb(" + r +", " + g +", "+ b + ")";
}

