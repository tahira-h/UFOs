//Declare a variable, 'tableData', using 'const'

//import the data from data.js
const tableData = data;

// Tell JS what type of element the data will be displayed in ('a table')
// reference the 'tbody' HTML tag using D3

//NOTE: 
// D3 is a JS library that produces sophisticated & highly dynamic graphics in an HTML webpage.
// It is often used by data professionals to create dashboards, or a collection of visual data (i.e. graphs and maps), for presentation.

// Let's return code editor (below):

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Functions can call other functions
//function doubleAddition(c, d) {
//    var total = addition(c, d) * 2;
//    return total;
//  }

// Arrow Functions

// Any standard function in JS can be refactored into arrow function.
// Arrow functions complete the same functions as regular functions, but they use more compact and concise syntax that makes code shorter and easier to Read.
// Arrow functions are also known as fat arrow functions because they are introduced with a familiar "fat arrow": =>

//Let's break down the differences in a bit more detail.

// 1. The arrow function collapses the function from 3 lines to 1 line, which is a significant reduction in characters.
// 2. The function keyword is not part of the arrow function. This is because the arrow symbol (=>) indicates that this block (or line) of code is a function.
// 3. The return keyword and console.log() are removed because with this new syntax, JavaScript inherently knows what will be returned.

//Example

// Original addition function           vs.     // Converted to an arrow function
//function addition(a, b) {                     //  addition = (a, b) => a + b;
//    return a + b;
//  }


// For Loops

//To iterate through each name in JS, create a 'for' loop.
function listLoop(userList) {
    for (var i=0; i < userList.length; i++) {
        console.log(userList[i]);
    }
}

// Create a 'for' loop to iterate through an array of vegetables.
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

// Build the 'for' loop.
for (var i = 0; i < vegetables.length; i++) {
}

// Print each item to the console, add a message to go with each item.
var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

// Loop through numbers without using an array.
for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
} 
