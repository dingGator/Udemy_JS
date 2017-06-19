//function isEven(num1){
	// return true if even
	//return false otherwise
//
//	if (num1 %2 ===0){
//		return true;
//	} else{
//		return false;
//	}
//  }
function isEven(num1) {
	return num1 %2===0;
	// body...
}

function factorial(num2){
	//define a result variable
	var result =1;
	//calculate factorial and store value in result
	for(var i =2;i<=num; i++){
		result *=i;
	}
	//return the result variable
	return result;
}

function kebabToSnake(str){
	//replace all '-' with "_" 's
	var newStr = str.replace(/-/g, "_");
	//return str
	return newStr;
}