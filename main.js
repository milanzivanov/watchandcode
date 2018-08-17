var todos = ['item1', 'item2', 'item3'];

// It should have a function to display todos
function displayTodos() {
    console.log("My todos:", todos);
};
// displayTodos();
// It should have a function to add todos
function addTodos(todo) {
    todos.push(todo);
    displayTodos();
};
// addTodos("added item");
// It should have a function to change todos
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
};
// changeTodo(2, 'item3-changed');

// It should have a function to delete todos
function deleteTodos(position) {
    todos.splice(position, 1);
    displayTodos();
}

deleteTodos(2);

