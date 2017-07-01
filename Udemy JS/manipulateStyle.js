var path= document.scripts[document.scripts.length -1].src;
var fileName = path.substring(path.lastIndexOf('/')+1);
function clearTop(){

	console.clear();
console.log( " JS  filename  Connected:  "+ fileName );
}
clearTop();
var imgStyle = document.querySelector("img");
//console.log("imgStyle.style = "+ imgStyle.style);
imgStyle.style.height="350px";
imgStyle.style.width="350px";


var h2 = document.querySelector("h2");
h2.style.color = "red";

var h1 = document.querySelector("h1");
console.log("h1.classList  " + h1.classList);

h1.classList.add("blue");
console.log("h1.classList  " + h1.classList);
var h1Blue = document.getElementsByClassName("blue");
console.log("h1Blue  "+ h1Blue)
h1.style.color = "blue";
var ul =document.querySelector("ul");
console.log("ul.textContent  "+ ul.textContent);
var li = document.querySelector("li");
console.log("li.textContent  " + li.textContent);

console.log("h2.textContent  " + h2.textContent);
console.log("h2.innerHTML  " + h2.innerHTML);

console.log("document.querySelector('h1').textContent  "+
 document.querySelector("h1").textContent);


var img1 = document.getElementsByTagName("img")[1];
console.log("img1  "+ img1);
img1.getAttribute("src");
img1.setAttribute("src", "images/IMG_20160227_143017.jpg");
img1.style.width ="350px";
img1.style.height ="350px";

var a = document.querySelector("a");
a.setAttribute("href", "http:www.cnn.com");
a.textContent= "LINK TO CNN.COM";
