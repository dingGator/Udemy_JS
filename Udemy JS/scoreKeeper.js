var path= document.scripts[document.scripts.length -1].src;
var fileName = path.substring(path.lastIndexOf('/')+1);
function clearTop(){

	console.clear();
console.log( " JS  filename  Connected:  "+ fileName );
}
clearTop();

var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p1");
var p1Display = document.querySelector("#p1Display");

var p1Score = 0;

console.log(p1Display);
p1Button.addEventListener("click", function(){
	p1Score++;
	console.log(p1Score);
	h1.textContent = p1Score;
});