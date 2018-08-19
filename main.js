// 
var todoList = {
    todos: [],
    displayTodos: function() {
        console.log('My todos', this.todos);
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            complited: false
        });
        this.displayTodos();
    },
    changeTodos: function(position, todoText) {
        this.addTodos[position].todoText = todoText;
        this.displayTodos();
    },
    deliteTodos: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleComplited: function(position) {
        var todo = this.todos[position];
        todo.complited = !todo.complited;
        this.displayTodos();
    }
};
// todoList.displayTodos();
// todoList.addTodos('adding item object');
// todoList.changeTodos(1, "changed");
// todoList.deliteTodos(0);
todoList.addTodo("boolian testing");
todoList.toggleComplited(0);