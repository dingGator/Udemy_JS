


var input = prompt("what would you like to do?");


while(input !=="quit"){
	//handle input
	if (input === "printReverse"){
		var eleArray =[2, "hi", 3, "feed Nate", "eat dinner", 6];
		printReverse(eleArray);
	} else if (input ==="isUniform"){
		var uniformArray =[2,2,2,2,2,2,2,2];
		isUniform(uniformArray);
		var notUniArray =[2,3,4,2,2,2,6,2];
		isUniform(notUniArray);

	} else if (input=== "sumArray"){
		sumArray();

	} else if (input=== "max"){
		max();

	}
	//ask again fo new input

input = prompt("what would you like to do?");
}
console.log("OK you quit the app");

//<li>"printReverse()" - Takes an array as an argument and prints out the elements in the array in reverse order(don't actually reverse the array itself)</li>
function printReverse(arrayPrint){


	for(var i = arrayPrint.length -1; i>=0 ; i--){
		console.log(arrayPrint[i]);
	}
}
//	<li>"isUniform()" - Takes an array as an argument and returns true if all elements in the array are identical</li>

function isUniform(arrayUni){
	var first = arrayUni[0];

	for(var i =1; i< arrayUni.length; i++){

	if (arrayUni[i] !== first) {
		return false;
	}}
	 return true;

}
//	<li>"sumArray()" - Accepts an array of numbers and returns the sum of all numbers in the array</li>
//var numSumArray=[3,6,2,5,8,10];
function sumArray(){
createArray();
sumAr();
}
function createArray(){
var accArray =[];
var input = prompt("Please enter a number ");

while(input !=="quit"){
	//handle input
	if (input === "list"){
		listArray();
	} else if (input ==="new"){
		addToArray();

	} else if (input=== "delete"){
		deleteArray();
	}
	//ask again fo new input

input = prompt("Please enter a number");
}}
function listArray(){
	console.log("****************")
	accArray.forEach(function(accAr, i){
	console.log(i +" : "+ accAr);
	});
		console.log("****************")
}

function addToArray(){
	//ask for new todo
		var newToArray = prompt("Enter new todo");
	//add to todos array
		accArray.push(newToArray);
		console.log("Added To Array");
}

function deleteArray(){
	var index = prompt("Enter index of Element in Array to delete");
		accArray.splice(index,1);
		console.log("Element Removed");
}
function sumAr(){
var sumArray= 0;
	for(var i =0; i< accArray.length; i++){
		sumArray = sumArray + accArray[i];
	}
	console.log("The sum of the array you entered is:  "+ sumArray)

}
//	<li>"max()" - Accepts an array of numbers and returns the maximum number in the array</li>
//var numMaxArray = [2,9,8,7,2,6,5];
function max(){
	createArray();

}

function maxNum(){
	var maxNum =0;
	for(var i=0;i<numMaxArray.length;i++){
		if(numMaxArray[i]>numMaxArray[i+1]){
			numSumArray[i]= maxNum;
		}else{
			numMaxArray[i+1]=  maxNum;
		}
	}
}