var path= document.scripts[document.scripts.length -1].src;
var fileName = path.substring(path.lastIndexOf('/')+1);
function clearTop(){

	console.clear();
console.log( " JS  filename  Connected:  "+ fileName );
}
clearTop();


if(jQuery){
	console.log("jQuery Loaded")
}else{
	console.log("No jQuery :( ")
}

$("div").css("background","purple");
$(".highlight").css("width","200px");
$("#third").css("border","2px solid orange");
$("div:first-of-type").css("color","pink");