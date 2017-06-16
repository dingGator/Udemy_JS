var num1 = -10;
var evenNum = 10;
var oddNum = 300;
var divisibleNum = 5;
console.log("Printing all numbers between -10 and 19");

while(num1<20){
	console.log(num1);
	num1++;
}
console.log("Printing all even numbers between 10 and 40")
while(evenNum<=40){
	console.log(evenNum);
	evenNum+=2;
}
console.log("Printing all odd numbers between 300 and 333")
while(oddNum<= 333){

	if(oddNum %2 !==0)
	console.log(oddNum);
	oddNum+=1;
}
console.log("Printing all numbers between 5 and 50 and divisible by 5 and 3")


while(divisibleNum<=50){
	if (divisibleNum%3 ===0 && divisibleNum%5===0){
		console.log(divisibleNum);
	}
	divisibleNum+=1;
}