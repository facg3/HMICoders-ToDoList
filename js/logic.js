var todoFunctions = {
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },
  addTodo: function(todos, newTodo) {
    var ids = todoFunctions.generateId();
    var task = {
      id: ids,
      description: newTodo,
      done: false,
    }
    var newArr = todoFunctions.cloneArrayOfObjects(todos);
    newArr.push(task);
    return newArr;
  },
  deleteTodo: function(todos, idToDelete) {
    var newArr = todoFunctions.cloneArrayOfObjects(todos);
    var Arr = newArr.filter(function(item) {
      return item.id != idToDelete;
    });
    return Arr;
  },

  markTodo: function(todos, idToMark) {
    var newArr = todoFunctions.cloneArrayOfObjects(todos);
    var Arr = newArr.map(function(i) {
      if (i.id == idToMark) {
        i.done === true ? i.done = false : i.done = true;
      }
      return i;
    });
    return Arr;
  },
  sortTodos: function(todos) {
   var newArr = todoFunctions.cloneArrayOfObjects(todos);
   var sorted = newArr.sort(function(obj1,obj2){
     return obj1.done-obj2.done;
   })
   return sorted;
  },

};
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
