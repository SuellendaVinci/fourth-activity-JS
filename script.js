// EXERCISE 01

for(let i = 0; i <= 50; i++) {
    if(i%2 != 0) {
        console.log(i)
    }
}

// EXERCISE 02

let number = parseInt(prompt("Type a integer number: "));

for(let i = 0; i <=10; i++) {
    console.log(`${number} x ${i} = ${number*i}`);
}

// EXERCISE 03 

alert("You should type 5 intengers numbers")

let number1 = parseInt(prompt("Number 1: "));
let number2 = parseInt(prompt("Number 2: "));
let number3 = parseInt(prompt("Number 3: "));
let number4 = parseInt(prompt("Number 4: "));
let number5 = parseInt(prompt("Number 5: "));

let array = [number1, number2, number3, number4, number5];

let smallestNumber = array[0];

for(let i = 0; i < array.length; i++) {
    if(array[i] < smallestNumber) {
        smallestNumber = array[i];
    }
}
console.log(`The smallest number is: ${smallestNumber}`);

let biggestNumber = array[0];

for(let i = 0; i < array.length; i++) {
if(array[i] > biggestNumber) {
    biggestNumber = array[i];
}
}
console.log(`The biggest number is: ${biggestNumber}`);


//OUTRO MÉTODO

// array.sort(function(a, b) {
//   return a - b;
// });

// console.log(`The smallest number is: ${array[0]}`);
// console.log(`The biggest number is: ${array[array.length -1]}`);
