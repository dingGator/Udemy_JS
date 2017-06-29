console.log("connected");

var obj ={
	name:"Chuck",
	age: 45,
	isCool: false,
	friends:["bob", "tina"],
	add:function(x,y){
		return x+y;
	}
}

console.log("obj.add(10,5)=  " + obj.add(10,5));

var dogSpace ={};
dogSpace.speak = function(){
	return "WOOF!";
}
var catSpace ={};
catSpace.speak = function(){
	return "MEOW!";
}

console.log("dogSpace.speak = " + dogSpace.speak());
console.log("catSpace.speak = " + catSpace.speak());

var comments ={};
comments.data =	["good job",
				 "bye",
				 "lame"];


comments.print= function(){
	this.data.forEach(function(el){
		console.log(el);
	});
}


