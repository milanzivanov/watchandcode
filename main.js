// 
var todoList = {
    todos: [],
    displayTodos: function() {

        if (this.todos.length === 0) {
            console.log('Your todo list is empty');
        } else {
            console.log('My todos');
            for (var i = 0; i < this.todos.length; i++) {
                if( this.todos[i].complited === true ) {
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    console.log('( )',this.todos[i].todoText);
                }
            }
        }


    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            complited: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deliteTodo: function(position) {
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

todoList.addTodo("first");
todoList.addTodo("second");
todoList.addTodo("third");

todoList.toggleComplited(1);
todoList.toggleComplited(1);
todoList.toggleComplited(0);