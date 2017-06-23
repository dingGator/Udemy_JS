



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




function sumAr(arr){
var sumArray= 0;
	arr.forEach(function(element){
		sumArray += element;
	}
	return total;
}
//	<li>"max()" - Accepts an array of numbers and returns the maximum number in the array</li>
//var numMaxArray = [2,9,8,7,2,6,5];


function maxNum(arr){
	var maxNum = arr[0];
	for(var i=1;i<arr.length;i++){
		if(arr[i]>maxNum){
			maxNum= arr[i];
		}else{
			numMaxArray[i+1]=  maxNum;
		}
	}
}