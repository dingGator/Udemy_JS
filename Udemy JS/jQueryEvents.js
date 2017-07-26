var path= document.scripts[document.scripts.length -1].src;
var fileName = path.substring(path.lastIndexOf('/')+1);
function clearTop(){

	console.clear();
console.log( " JS  filename  Connected:  "+ fileName );
}
clearTop();


if(jQuery){
	console.log("jQuery Loaded");
}else{
	console.log("No jQuery :( ");
};

$("h1").click(function(){
	console.log("h1 clicked!");
});
$("button").click(function(){
	console.log("button clicked!");
	var text=$(this).text();
	$(this).css("background", "pink");
	console.log("You clicked:  "+ text);
});

$("input").keypress(function(){
 console.log("You pressed a key!  ");
});

//$("input").keypress(function(event){
// console.log("event You pressed a key!  "+ event);
//});
$("input").keypress(function(event){
 if(event.which ===13){
 console.log("you hit enter!  "+ $(event.which.keycode));
}});

$("h1").on("click", function(){
	$(this).css("color","purple");
});

$("input").on("keypress", function(){
	console.log("Keypress");
});
$("button").on("mouseenter",function(){
	console.log("mouse hover");
	$(this).css("font-weight","bold");
});

$("button").on("mouseleave",function(){
	console.log("mouse leave");
	$(this).css("font-weight","normal");
});




