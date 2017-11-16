var test = require('tape');
var logic = require('./logic');
var deleteTodo = logic.deleteTodo;
var addTodo = logic.addTodo;
var markTodo = logic.markTodo;
var todos = [
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
id: 2, // this is a unique number, it will be needed to find a to-do in a to-do list
description: "make sss", // this is a string that describes what you need to do
done: true, // This is true or false, it tells us whether a todo is done or not
}
];
var todos0 = [
{
id: 1, // this is a unique number, it will be needed to find a to-do in a to-do list
description: "make ddd", // this is a string that describes what you need to do
done: true, // This is true or false, it tells us whether a todo is done or not
},
{
id: 2, // this is a unique number, it will be needed to find a to-do in a to-do list
description: "make sss", // this is a string that describes what you need to do
done: true, // This is true or false, it tells us whether a todo is done or not
}
];
var todos1 = [
{
id: 0, // this is a unique number, it will be needed to find a to-do in a to-do list
description: "make tea", // this is a string that describes what you need to do
done: false, // This is true or false, it tells us whether a todo is done or not
},
{
id: 2, // this is a unique number, it will be needed to find a to-do in a to-do list
description: "make sss", // this is a string that describes what you need to do
done: true, // This is true or false, it tells us whether a todo is done or not
}
];
var todos2 = [
{
id: 0, // this is a unique number, it will be needed to find a to-do in a to-do list
description: "make tea", // this is a string that describes what you need to do
done: false, // This is true or false, it tells us whether a todo is done or not
},
{
id: 1, // this is a unique number, it will be needed to find a to-do in a to-do list
description: "make ddd", // this is a string that describes what you need to do
done: true, // This is true or false, it tells us whether a todo is done or not
}
];
var todosA = [
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
id: 2, // this is a unique number, it will be needed to find a to-do in a to-do list
description: "make sss", // this is a string that describes what you need to do
done: true, // This is true or false, it tells us whether a todo is done or not
}
,{
id: 1,
description: "ismail",
done: false,
}
];
var todosB = [
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
id: 2, // this is a unique number, it will be needed to find a to-do in a to-do list
description: "make sss", // this is a string that describes what you need to do
done: true, // This is true or false, it tells us whether a todo is done or not
},
{
id: 2,
description: "ismail",
done: false,
}
];
var todosC = [
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
id: 2, // this is a unique number, it will be needed to find a to-do in a to-do list
description: "make sss", // this is a string that describes what you need to do
done: true, // This is true or false, it tells us whether a todo is done or not
},
{
id: 3,
description: "ismaioslm",
done: false,
}
];

var todosM = [
{
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
id: 2, // this is a unique number, it will be needed to find a to-do in a to-do list
description: "make sss", // this is a string that describes what you need to do
done:true, // This is true or false, it tells us whether a todo is done or not
}
];
var todosM1 = [
{
id: 0,
description: "make tea",
done: false,
},
{
id: 1,
description: "make ddd",
done: false,
},
{
id: 2, // this is a unique number, it will be needed to find a to-do in a to-do list
description: "make sss", // this is a string that describes what you need to do
done:true, // This is true or false, it tells us whether a todo is done or not
}
];
var todosM2 = [
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
id: 2, // this is a unique number, it will be needed to find a to-do in a to-do list
description: "make sss", // this is a string that describes what you need to do
done:false, // This is true or false, it tells us whether a todo is done or not
}
];

test('deleteTodo test', function(t) {
t.deepEqual(deleteTodo(todos,0),todos0,'should delete first todo');
t.deepEqual(deleteTodo(todos,1),todos1,'should delete second todo');
t.deepEqual(deleteTodo(todos,2),todos2,'should delete third todo');
t.end();
});
test('addTodo test', function(t) {
t.deepEqual(addTodo(todos,"ismail"),todosA,'should add first todo');
t.deepEqual(addTodo(todos,"ismail"),todosB,'should add second todo');
t.deepEqual(addTodo(todos,"ismaioslm"),todosC,'should add third todo');
t.end();
});


test('markTodo test', function(t) {
t.deepEqual(markTodo(todos,0),todosM,'should mark first todo');
t.deepEqual(markTodo(todos,1),todosM1,'should mark second todo');
t.deepEqual(markTodo(todos,2),todosM2,'should mark third todo');
t.end();
});
