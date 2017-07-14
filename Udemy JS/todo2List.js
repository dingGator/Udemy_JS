var path= document.scripts[document.scripts.length -1].src;
var fileName = path.substring(path.lastIndexOf('/')+1);
function clearTop(){

	console.clear();
console.log( " JS  filename  Connected:  "+ fileName );
}
clearTop();

var lis =document.querySelectorAll("li");
for (var i = 0; i <lis.length;i++) {
	lis[i].addEventListener("mouseover", function(){
	this.classList.add( "selected");
});
lis[i].addEventListener("mouseout", function(){
	this.classList.remove("selected");
});
lis[i].addEventListener("click", function(){
	this.classList.toggle("done");
});

}