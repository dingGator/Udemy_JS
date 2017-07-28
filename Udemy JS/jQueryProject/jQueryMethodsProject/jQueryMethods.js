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

console.log("h1:    "+ $("h1"));
console.log("h1  .text:  " + $("h1").text());
console.log("ul  .text:  " + $("ul").text());
console.log("li  .text:  " + $("li").text());
//console.log("h1.text(New text):  " + $("h1").text("New Text!!!"));
console.log("li.text(Rusty,Colt's dog is adorable):  " + $("li").text("Rusty,Colt's dog is adorableS"));

console.log("ul.html:  "+ $('ul').html());
console.log("ul.html(<li>I hacked your UL!</li><li>Rusty is still adorable </li>):  "+ $('ul').html("<li>I hacked your UL!</li><li>Rusty is still adorable </li>"));

console.log("li.html(<a href='google.com'>CLICK ME TO GO TO GOOGLE</a>):  ");
$('li').html("<a href='google.com'>CLICK ME TO GO TO GOOGLE</a>");

$('img').css("width", "500px");
//$('img').attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");
$('img').css("width", "200px");
console.log("image:first-of-type:   " +$("img:first-of-type"));
$("img:first-of-type").attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");
$("img").last().attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");
$("img").attr("src", "https://upload.wikimedia.org/wikipedia/commons/8/8e/Newfoundland_Pine_Marten.jpg");
$("img:first-of-type").attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");

$("input").val("Rusty Steele");
console.log("input.val:  "+ $("input").val());
console.log("select.val:  "+ $("select").val());
$('h1').addClass("correct");

$('h1').removeClass("correct");
$('li').addClass("wrong");
$('li').removeClass("wrong");
$('li').addClass("correct");

$('li').toggleClass("correct");

$('li').first().toggleClass("done");




