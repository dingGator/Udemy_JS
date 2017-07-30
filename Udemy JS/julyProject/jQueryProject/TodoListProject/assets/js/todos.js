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


//event listener to existing and future li
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
	console.log("li clicked toggleClass");

});
$("ul").on("click","span",function(event){
	console.log("span clicked");
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	console.log("keypress");
	if(event.which === 13){
		console.log("you hit enter");
		//grab new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span>X</span> "+todoText+"</li>");
	}

});
/*/show event bubbling effect
$("ul").click(function(){
	console.log("ul clicked");
});
$("#container").click(function(){
	console.log("container div clicked");
});
$("body").click(function(){
	console.log("body clicked");
})
/*change color of list item
//cross off item
$("li").click(function(){
	console.log("clicked li");
	//if li is gray
	if($(this).css("color")==="rgb(128, 128, 128)"){
		console.log("It is currently gray!")
		//turn it black
		$(this).css({
		color: "black",
		textDecoration: "none"
		});
		console.log("no line through");
		console.log("color black");

	}else{
		//turn it gray
	$(this).css({
		color: "gray",
		textDecoration: "line-through"
	});
	console.log("line through");
	console.log("color gray");


	}



});
*/