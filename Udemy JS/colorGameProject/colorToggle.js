
var path= document.scripts[document.scripts.length -1].src;
var fileName = path.substring(path.lastIndexOf('/')+1);
function clearTop(){

	console.clear();
console.log( " JS  filename  Connected:  "+ fileName );
}
clearTop();


var button = document.querySelector("button");
//var isPurple = false;

//button.addEventListener("click", function(){
//	if(isPurple){
//		document.body.style.background = "white";
//		isPurple = "false";
//	}else{
//		document.body.style.background = "purple";
//		isPurple = true;
//	}

	//isPurple =!isPurple;
//if white
//make it purple
//else
// make it white
//});

button.addEventListener("click",function(){
	document.body.classList.toggle("purple");
})