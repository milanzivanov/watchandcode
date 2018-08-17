// 
var todoList = {
    todos: ['item1', 'item2', 'item3'],
    displayTodos: function() {
        console.log('My todos', this.todos);
    },
    addTodos: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodos: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
    deliteTodos: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    }
};
todoList.displayTodos();
todoList.addTodos('adding item new');
todoList.changeTodos(1, "changed");
todoList.deliteTodos(0);