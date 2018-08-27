// 
var todoList = {
    todos: [],

    addTodo: function(todoText) {
        // debugger;
        this.todos.push({
            todoText: todoText,
            complited: false
        });
    },
    changeTodo: function(position, todoText) {
        // debugger;
        this.todos[position].todoText = todoText;
    },
    deliteTodo: function(position) {
        // debugger;
        this.todos.splice(position, 1);
    },
    toggleComplited: function(position) {
        // debugger;
        var todo = this.todos[position];
        todo.complited = !todo.complited;
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
    }
};

var handlers = {
    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";

        view.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";

        view.displayTodos();
    },
    deliteTodo: function(position) {
        todoList.deliteTodo(position);
        view.displayTodos();
    },
    toggleComplited: function() {
        var toggleCompitedPositionInput = document.getElementById("toggleCompitedPositionInput");
        todoList.toggleComplited(toggleCompitedPositionInput.valueAsNumber);
        toggleCompitedPositionInput = "";

        view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();

        view.displayTodos();
    }
};

var view = {
    displayTodos: function() {

        var todosUl = document.querySelector("ul");
        todosUl.innerHTML = '';

        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement("li");
            var todo = todoList.todos[i];
            var todoTextWithCompletion = "";

            if (todo.complited === true) {
                todoTextWithCompletion = "(X) " + todo.todoText;
            } else {
                todoTextWithCompletion = "( ) " + todo.todoText;
            }

            // add id for all
            todoLi.id = i;

            todoLi.textContent = todoTextWithCompletion;
            // todoLi.textContent = todoList.todos[i].todoText;

            // adding btn to the dom
            todoLi.appendChild(this.createDeliteButton());

            todosUl.appendChild(todoLi);
        }

    },
    // create delite btn
    createDeliteButton: function () {
        var deliteButton = document.createElement("button");
        deliteButton.textContent = "Delite";
        deliteButton.className = "deliteButton";
        return deliteButton;
    },

    setUpEventListeners: function() {
        var todosUl = document.querySelector("ul");
        todosUl.addEventListener('click', function(event) {
            console.log(event.target.parentNode.id);
        
            // get the element that is cliced on
            var elementClicked = event.target;
        
            // check if elementClicked is a delite button
            if (elementClicked.className === 'deliteButton') {
                handlers.deliteTodo(parseInt(elementClicked.parentNode.id));
                
            }
        });
    }

};

view.setUpEventListeners();

