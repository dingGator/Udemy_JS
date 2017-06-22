

//<li>"printReverse()" - Takes an array as an argument and prints out the elements in the array in reverse order(don't actually reverse the array itself)</li>
var eleArray =[2, "hi", 3, "feed Nate", "eat dinner", 6];
function printReverse(){

	for(var i = eleArray.length -1; i=0 ; i-1){
		console.log(eleArray[i]);
	}
}
//	<li>"isUniform()" - Takes an array as an argument and returns true if all elements in the array are identical</li>
var uniformArray =[2,2,2,2,2,2,2,2];
var notUniArray =[2,3,4,2,2,2,6,2];
//	<li>"sumArray()" - Accepts an array of numbers and returns the sum of all numbers in the array</li>
var numSumArray=[3,6,2,5,8,10];
//	<li>"max()" - Accepts an array of numbers and returns the maximum number in the array</li>
var numMaxArray = [2,9,8,7,2,6,5];