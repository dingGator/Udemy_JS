var todos =["buy new turtle"];
var input = prompt("what would you like to do?");


while(input !=="quit"){
	//handle input
	if (input === "list"){
		listTodos();
	} else if (input ==="new"){
		addTodo();

	} else if (input=== "delete"){
		deleteTodo();
	}
	//ask again fo new input

input = prompt("what would you like to do?");
}
console.log("OK you quit the app");


function listTodos(){
	console.log("****************")
	todos.forEach(function(todo, i){
	console.log(i +" : "+ todo);
	});
		console.log("****************")
}

function addTodo(){
	//ask for new todo
		var newTodo = prompt("Enter new todo");
	//add to todos array
		todos.push(newTodo);
		console.log("Added Todo");
}

function deleteTodo(){
	var index = prompt("Enter index of todo to delete");
		todos.splice(index,1);
		console.log("Todo Removed");
}