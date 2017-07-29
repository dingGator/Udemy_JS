//var answer = prompt("Are we there yet?");
//while(answer !=="yes"&& answer!== "YAY"){
//	var answer = prompt("are we there yet?");
//}
//alert("YAY, we made it!");
//if (answer === "yes"){
//	alert("YAY, we made it!")
//} else{
//	var answer = prompt("are we there yet?");
//}


//version 2
var answer = prompt("Are we there yet?");
while(answer.indexOf("yes") === -1){
	var answer = prompt("are we there yet?");
}
alert("YAY, we made it!");