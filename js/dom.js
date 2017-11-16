// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener
     todoNode.addEventListener('click',function(){
      var markState = todoFunctions.markTodo(state,todo.id);
      update(markState);
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
      update(newState);
    });


    // add markTodo button
    var markTodoButton = document.createElement('button');
    var buttonName = document.createTextNode("Done");
    markTodoButton.appendChild(buttonName);
     todoNode.appendChild(markTodoButton);
    //add classes for css
    if(todo.done){
        todoSpan.classList.add("line-through");
        todoNode.classList.add("list-item-color");
    }
    return todoNode;
  };

  // bind create todo form
  console.log(addTodoForm);
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      var description = event.target.description.value; // event.target ....
      // hint: todoFunctions.addTodo
      if(description===""){
            alert("Please add your task description")
          }
          else{
      var newState =todoFunctions.addTodo(state,description); // ?? change this!
      update(newState);
     event.target.description.value="";
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
