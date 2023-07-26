// Question 1
function fizzBuzz(n) {
    const answer = [];
  
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        answer.push("FizzBuzz");
      } else if (i % 3 === 0) {
        answer.push("Fizz");
      } else if (i % 5 === 0) {
        answer.push("Buzz");
      } else {
        answer.push(i.toString());
      }
    }
  
    return answer;
}
  
 
  
  
// Question 4
// How many bytes make a Gigabyte?
  
// Ans: 1 Gigabyte = 1,000,000,000 bytes



//Question 3
//a. DOM (Document Object Model):
//The DOM, short for Document Object Model, is a concept in web development that represents the structure and content of a web page as a tree-like structure. 
//Every element on a web page, such as headings, paragraphs, images, buttons, etc., is represented as a node in this tree.
// Through JavaScript, we can access and manipulate these nodes, allowing us to dynamically change the content, appearance, and behavior of the web page. The DOM serves as a bridge between the static HTML and dynamic JavaScript, enabling interactive and responsive web pages.

//b. Promises:
//Promises are a way of handling asynchronous operations in JavaScript. 
//Imagine you have to wait for a server response or a file to load, and you don't know exactly when it will be available. 
//Promises provide a neat way to deal with this uncertainty. A promise represents the eventual completion (or failure) of an asynchronous task and acts as a placeholder for the result. It can be in three states: pending, fulfilled, or rejected. With promises, you can attach callback functions to be executed when the promise is resolved or rejected, allowing you to handle the results and errors in a structured and readable way.

//c. Object-Oriented Programming (OOP):
//Object-Oriented Programming (OOP) is a programming paradigm centered around the concept of objects. 
//An object is like a container that holds data and the functions (methods) that operate on that data. 
//It's like modeling real-world entities in code. OOP promotes the idea of creating blueprints for objects called classes, and then creating instances of those classes (objects) with specific properties and behaviors. 
//This approach helps with code organization, reusability, and maintainability. OOP also introduces concepts like encapsulation, which hides the internal details of objects, and inheritance, where objects can inherit properties and behaviors from other objects.

//d. Callback:
//A callback is a function that is passed as an argument to another function and is executed at a later point in time or after a specific event occurs. 
//It's like saying, "Hey, when you're done with that task, call this function to let me know." Callbacks are widely used in JavaScript, especially for handling asynchronous operations like making API calls, reading files, or responding to user interactions. 
//They allow us to manage non-blocking operations efficiently and define what to do with the result once the operation is completed. Callbacks are essential for writing asynchronous code and controlling the flow of our programs.
  
  


// Question 5
// ascending
function ascendingSort(arr) {
    const compareAscending = (a, b) => a - b;
    return arr.slice().sort(compareAscending);
}
  
const unsortedArrayA = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const sortedAscending = ascendingSort(unsortedArray);


// descending
function descendingSort(arr) {
    const compareDescending = (a, b) => b - a;
    return arr.slice().sort(compareDescending);
}

const unsortedArrayD = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const sortedDescending = descendingSort(unsortedArray);