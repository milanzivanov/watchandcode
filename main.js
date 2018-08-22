// 
var todoList = {
    todos: [],
    displayTodos: function() {
        // debugger;
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
        // debugger;
        this.todos.push({
            todoText: todoText,
            complited: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        // debugger;
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deliteTodo: function(position) {
        // debugger;
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleComplited: function(position) {
        // debugger;
        var todo = this.todos[position];
        todo.complited = !todo.complited;
        this.displayTodos();
    },
    toggleAll: function() {
        // debugger;
        var totalTodos = this.todos.length;
        var complitedTodos = 0;

        // get number of complited todos
        for(var i = 0; i < totalTodos; i++) {
            if( this.todos[i].complited === true ) {
                complitedTodos++;
            }
        }
        // Case1: if everything true, make everything false 
        if (complitedTodos === totalTodos) {
            for(var i = 0; i < totalTodos; i++) {
                this.todos[i].complited = false;
            }
        } 
        // case2: otherwisemake everything true
        else {
            for(var i = 0; i < totalTodos; i++) {
                this.todos[i].complited = true;
            }
        }

        this.displayTodos();
    }
};


var displayTodosButton = document.getElementById("displayTodosButton");
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function() {
    todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function() {
    todoList.toggleAll();
});


// todoList.addTodos('adding item object');

todoList.addTodo("first");
todoList.addTodo("second");
todoList.changeTodo(1, "changed");

todoList.deliteTodo(0);

todoList.toggleComplited(0);
// todoList.toggleComplited(1);

todoList.toggleAll();
