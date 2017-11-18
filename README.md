# HMICoders-ToDoList

## Who are we :
- Hanan Qwaider .
- Dalal Saleem .
- Ismail AlSaleh.
- Mahmoud Hmaid .


# What is TDD?

Test-driven development is a programming methodology with which one can tackle the design, implementation, and testing of units of code, and to some extent the expected functionality of a program.

## How we work ?
in our time we work Pair programming , we divide the function 3 functions , 2 take 2 function and 2 take the one function ,and switch between pairs to make test for every function .

## The files in our project:-
logic.js     : functions .

test.js      : test for the functions in logic.js.

dom.js       :access and change all the elements of an HTML document.

style.css    : To give our project a nice form .

index.html   : To write a paragraph and tittle .


## Our-work :
-  Hanan and Dalal make a add function and Test for other pairs function and Do the Style for the project by CSS .

-  Mahmoud and Ismail make delete and mark function and test our added function .
  and Do define the function inside the Dom file to create complete function .

  We hava taken in our project the issue of Accessibility and mobile first .

## Our-Stories:

   * As a busy person  you  can now :

- Enter tasks you need to do into a web page so you will never forget them.

- View the tasks you have added in a list .

- Mark tasks as complete so you can focus on the tasks that's have't done .

- Delete the task that's you dont want it .


## What we doing :
- We Create  pure functions(add && delete && mark ).
- We Use the TDD functions to build the app .
- We Try to make it look pretty using CSS .
- We create To do Node .
- We Create new todoaddTodoForm.addEventListener('submit', function(event) {} .

## Callback function

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
## Example:

function greeting(name) {
alert('Hello ' + name);
}

function processUserInput(callback) {
var name = prompt('Please enter your name.');
callback(name);
}

processUserInput(greeting)

The above example is a synchronous callback, as it is executed immediately.

Note however that callbacks are often used to continue code execution after an asynchronous operation has completed — these are called asynchronous callbacks.


## The importance of pure functions in testing :

-They’re easier to reason about

-They’re easier to combine

-They’re easier to test

-They’re easier to debug

-They’re easier to parallelize


## Ping pong code in pairs :

PairProgramming works in my team like :

-A writes a new test and sees that it fails.

-B implements the code needed to pass the test.

-B writes the next test and sees that it fails.

-A implements the code needed to pass the test.


## The difference between unit & integration tests:

A unit test is a test written by the programmer to verify that a relatively small piece of code is doing what it is intended to do. They are narrow in scope, they should be easy to write and execute, and their effectiveness depends on what the programmer considers to be useful.

But

An integration test is done to demonstrate that different pieces of the system work together. Integration tests cover whole applications, and they require much more effort to put together. They usually require resources like database instances and hardware to be allocated for them.
_
