// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [];
  var newSortedState = todoFunctions.sortTodos(state);
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    todoNode.addEventListener('click', function() {
      var markState = todoFunctions.markTodo(state, todo.id);
      var newSortedState = todoFunctions.sortTodos(markState);
      update(newSortedState);
    });
    //  add span holding description
    var todoSpan = document.createElement('span');
    var todoDisc = document.createTextNode(todo.description);
    todoSpan.appendChild(todoDisc);
    todoNode.appendChild(todoSpan);
    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    var buttonName2 = document.createTextNode("Delete");
    deleteButtonNode.appendChild(buttonName2);
    todoNode.appendChild(deleteButtonNode);
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      var newSortedState = todoFunctions.sortTodos(newState);
      update(newSortedState);
    });


    // add markTodo button
    var markTodoButton = document.createElement('button');
    var buttonName = document.createTextNode("Done");
    markTodoButton.appendChild(buttonName);
    todoNode.appendChild(markTodoButton);
    //add classes for css
    if (todo.done) {
      todoSpan.classList.add("line-through");
      todoNode.classList.add("list-item-color");
    }
    return todoNode;
  };

  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {

      event.preventDefault();
      var description = event.target.description.value;
      if (!(/^[^-\s][\w\s-]+$/.test(description))) {
        alert("Please add your task description")
      } else {
        var newState = todoFunctions.addTodo(state, description);
        var newSortedState = todoFunctions.sortTodos(newState);
        update(newSortedState);
        event.target.description.value = "";
      }
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
