



//<li>"printReverse()" - Takes an array as an argument and prints out the elements in the array in reverse order(don't actually reverse the array itself)</li>
function printReverse(arrayPrint){


	for(var i = arrayPrint.length -1; i>=0 ; i--){
		console.log(arrayPrint[i]);
	}
}
printReverse([3,6,2,5]);
//	<li>"isUniform()" - Takes an array as an argument and returns true if all elements in the array are identical</li>



function isUniform(arrayUni){
	var first = arrayUni[0];

	for(var i =1; i< arrayUni.length; i++){

	if (arrayUni[i] !== first) {
		console.log("arrayUni[i] !==first "+ arrayUni[i])
		return false;
	}}return true;
}
console.log("isUniform([6,6,6,6,6,6]) " + isUniform([6,6,6,6,6,6]));
console.log("isUniform([2,5,2,2,3,2,2]) "+ isUniform([2,5,2,2,3,2,2]));
//	<li>"sumArray()" - Accepts an array of numbers and returns the sum of all numbers in the array</li>
//var numSumArray=[3,6,2,5,8,10];




function sumArray(arr){
var total= 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;

}
console.log("sumArray(3,6,2,5,8,10) "+ sumArray([3,6,2,5,8,10]));
//	<li>"max()" - Accepts an array of numbers and returns the maximum number in the array</li>
//var numMaxArray = [2,9,8,7,2,6,5];


function maxNum(arr){
	var maxNum = arr[0];
	for(var i=1;i<arr.length;i++){
		if(arr[i]>maxNum){
			maxNum= arr[i];
		}
		} return maxNum;
	}




console.log("maxNum([2,8,7,2,6,5] "+ maxNum([2,8,7,2,6,5]));