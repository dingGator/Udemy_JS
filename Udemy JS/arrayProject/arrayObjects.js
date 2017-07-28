
var someObject ={
	friends:[
	{name:"Malfoy"},
	{name:"Crabbe"},
	{name: "Goyle"}
	],
	color: "baby blue",
	isEvil: true
};

console.log(" someObject.friends[0].name: " + someObject.friends[0].name);



var movies =[
{
	title: "In Bruges",
	hasWatched: true,
	rating: 5
},
{
	title:"Frozen",
	hasWatched: false,
	rating: 4.5,
},
{
	title: "Mad Max Fury Road",
	hasWatched: true,
	rating: 5,
},
{
	title: "Les Miserables",
	hasWatched: false,
	rating: 3.5
}
];

console.log("this is with in-lay function ");

movies.forEach(function(movie){
	var result = "You have ";
	if (movie.hasWatched){
		result += "watched ";
	}else{
		result +="not seen ";
	}
	result +="\""+ movie.title + "\" - ";
	result += movie.rating + " stars";

	console.log(result);

});

function buildString(movie){
var result = "You have ";
	if (movie.hasWatched){
		result += "watched ";
	}else{
		result +="not seen ";
	}
	result +="\""+ movie.title + "\" - ";
	result += movie.rating + " stars";
	return result;
};

console.log("this is with buildString ");
movies.forEach(function(movie){
	console.log(buildString(movie));
});