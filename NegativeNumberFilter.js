//If you're running this without the proper
//node module installed, comment out lines
//4 to 36 and uncomment line 40 

const ps = require("prompt-sync");
const prompt = ps();

console.log("Hello, we will demostrate how this code filters out negative values! Please enter 6 positive or negative values.")
let firstElement = prompt("Enter 1st element in the array: ");
parseInt(firstElement);
console.log(`You have chosen ${firstElement}`);

let secondElement = prompt("Enter 2nd element in the array: ");
parseInt(secondElement);
console.log(`You have chosen ${secondElement}`);

let thirdElement = prompt("Enter 3rd element in the array: ");
parseInt(thirdElement);
console.log(`You have chosen ${thirdElement}`);

let fourthElement = prompt("Enter 4th element in the array: ");
parseInt(fourthElement);
console.log(`You have chosen ${fourthElement}`);

let fifthElement = prompt("Enter 5th element in the array: ");
parseInt(fifthElement);
console.log(`You have chosen ${fifthElement}`);

let sixthElement = prompt("Enter 6th element in the array: ");
parseInt(sixthElement);
console.log(`You have chosen ${sixthElement}`);



const arrName = [firstElement, secondElement, thirdElement, fourthElement, fifthElement, sixthElement];

const otroArr = [];
const cinco = [];

//const arrName = [3, -7, 10 -14, 21, -34];

const positiveNumbers = arrName.map(arrName => {
    cinco.push(arrName);
    if (arrName >= 0){
        return otroArr.push(arrName);
    } 
});



console.log(`Your original array is: `);
console.log(cinco);

console.log("The array without negative values is: ")
console.log(otroArr);
