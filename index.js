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
// is a concept in web development that represents the structure and content of a web page as a tree-like structure. 
// Through JavaScript, we can access and manipulate these nodes, allowing us to dynamically change the content, appearance, and behavior of the web page. The DOM serves as a bridge between the static HTML and dynamic JavaScript, enabling interactive and responsive web pages.

//b. Promises:
//Promises are a way of handling asynchronous operations in JavaScript.  
//Promises provide a neat way to deal with this uncertainty. A promise represents the eventual completion (or failure) of an asynchronous task and acts as a placeholder for the result. It can be in three states: pending, fulfilled, or rejected. With promises, you can attach callback functions to be executed when the promise is resolved or rejected, allowing you to handle the results and errors in a structured and readable way.

//c. Object-Oriented Programming (OOP):
//Object-Oriented Programming (OOP) is a programming paradigm centered around the concept of objects. 
//An object is like a container that holds data and the functions (methods) that operate on that data. 


//d. Callback:
//A callback is a function that is passed as an argument to another function and is executed at a later point in time or after a specific event occurs. 
//They allow us to manage non-blocking operations efficiently and define what to do with the result once the operation is completed.
  


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