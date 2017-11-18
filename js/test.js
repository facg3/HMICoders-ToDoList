var test = require('tape');
var logic = require('./logic');
var deleteTodo = logic.deleteTodo;
var addTodo = logic.addTodo;
var markTodo = logic.markTodo;
var sortTodos = logic.sortTodos;
var todos = [{
    id: 0,
    description: "make tea",
    done: false,
  },
  {
    id: 1,
    description: "make ddd",
    done: true,
  },
  {
    id: 2,
    description: "make sss",
    done: true,
  }
];
var todosDeleteTest = [{
    id: 1,
    description: "make ddd",
    done: true,
  },
  {
    id: 2,
    description: "make sss",
    done: true,
  }
];
var todosAddTest = [{
    id: 0,
    description: "make tea",
    done: false,
  },
  {
    id: 1,
    description: "make ddd",
    done: true,
  },
  {
    id: 2,
    description: "make sss",
    done: true,
  }, {
    id: 1,
    description: "ismail",
    done: false,
  }
];

var todosMarkTest = [{
      id: 0,
      description: "make tea",
      done: true,
    },
  {
    id: 1,
    description: "make ddd",
    done: true,
  },
  {
    id: 2,
    description: "make sss",
    done: true,
  }
];
var todoSort = [
  {
    id: 0,
    description: "make tea",
    done: false,
  },
  {
    id: 1,
    description: "make ddd",
    done: true,
  },
  {
    id: 2,
    description: "make sss",
    done: true,
  }

];


test('deleteTodo test', function(t) {
  t.deepEqual(deleteTodo(todos, 0), todosDeleteTest, 'should delete  todo');
  t.end();
});
test('addTodo test', function(t) {
  t.deepEqual(addTodo(todos, "ismail"), todosAddTest, 'should add  todo');
  t.end();
});


test('markTodo test', function(t) {
  t.deepEqual(markTodo(todos, 0), todosMarkTest, 'should mark  todo');
  t.end();
});
test('Sort test', function(t) {
  t.deepEqual(sortTodos(todos), todoSort, 'should sort  todo');
  t.end();
});
