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

$("button").on("click",function(){
	$('div').fadeOut(1000,function(){
		console.log("out fade");
	});

	console.log("fade Completed");
	$('div').fadeIn(1000,function(){
		console.log("in fade");
	});
	console.log("fade Completed");
	$('div').fadeOut(1000,function(){
		console.log("out fade");
	});

	console.log("fade Completed");

	$('div').fadeToggle(500);
	console.log("fade Completed");

	$('div').slideDown();
	$('div').slideUp();
	$('div').slideToggle();
	$('div').slideToggle(1000,function(){
		console.log("Slide is done");
	});

	console.log("slide Completed");

	$(this).remove();

});
