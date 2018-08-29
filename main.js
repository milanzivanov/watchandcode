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
    // 11
    toggleAll: function() {
        // debugger;
        var totalTodos = this.todos.length;
        var complitedTodos = 0;

        // get number of complited todos
        this.todos.forEach(function(todo) {
            if( todo.complited === true ) {
                complitedTodos++;
            }
        });

        // same but better way 111
        this.todos.forEach(function(todo) {
            // Case1: if everything true, make everything false
            if (complitedTodos === totalTodos) {
                todo.complited = false;
            } 
            // case2: otherwisemake everything true
            else {
                todo.complited = true;
            }
        });
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

        // objasnjenje
        // this // refers to the view object
        // forEach(callback, this)

        todoList.todos.forEach(function(todo, position) {
            var todoLi = document.createElement("li");
            var todoTextWithCompletion = "";
            if (todo.complited === true) {
                todoTextWithCompletion = "(X) " + todo.todoText;
            } else {
                todoTextWithCompletion = "( ) " + todo.todoText;
            }

            // add id for all
            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            // adding btn to the dom
            todoLi.appendChild(this.createDeliteButton());
            todosUl.appendChild(todoLi);
        }, this);

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

