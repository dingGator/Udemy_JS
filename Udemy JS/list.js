var todos =["buy new turtle"];
var input = prompt("what would you like to do?");


while(input !=="quit"){
	//handle input
	if (input === "list"){
		console.log(todos);
	} else if (input ==="new"){
	//ask for new todo
		var newTodo = prompt("Enter new todo");
	//add to todos array
		todos.push(newTodo);
	}
	//ask again fo new input

input = prompt("what would you like to do?");
}
console.log("OK you quit the app")