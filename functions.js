const prompt = require('prompt-sync')({ sigint: true})


//Fråga 1
// function myName() {
//     console.log("Carlo")
// }
// myName();


//Fråga 2
// let number1 = prompt("Write a number: ")
// console.log(number1, "+")
// let number2 = prompt("Write a number: ")
// console.log(number2)

// number1 = parseFloat(number1);
// number2 = parseFloat(number2);

// addsnum(number1, number2);

// function addsnum(a, b) {
//     let sum = (a + b)
//     console.log("The ", number1 ,"+ ", number2, "= ", sum);
// }

//Fråga 3
// console.log("-------- multiplication machine --------")
// let number1 = prompt("Write a number: ")
// console.log(number1, "*")
// let number2 = prompt("Write a number: ")
// console.log(number2)

// number1 = parseFloat(number1);
// number2 = parseFloat(number2);

// addsnum(number1, number2);

// function addsnum(a, b) {
//     let sum = (a * b)
//     console.log("The ", number1 ,"* ", number2, "= ", sum);
// }

//Fråga 4
// console.log("-------- divison machine --------")
// let number1 = prompt("Write a number: ")
// console.log(number1, "/")
// let number2 = prompt("Write a number: ")
// console.log(number2)

// number1 = parseFloat(number1);
// number2 = parseFloat(number2);


// let sum = addsnum(number1, number2) //Calls the function

// console.log("The ", number1 ," / ", number2, "=", sum);

// addsnum(number1, number2);

// function addsnum(a, b) {
//     let sum = (a / b)
//     return sum;
// }


//Fråga 5
// Skriv en funktion som tar emot namn och ålder i parameter-fältet. 
// Använd dig av värdena och skriv ut ”Hej jag heter [namn] och är [ålder] år gammal”. 
// Glöm inte att anropa funktionen med värden!

// let name = prompt("Write your name: ")
// let age = prompt("Write your age: ")



// let result = greeting(name, age);

// console.log(result);

// function greeting(name, age) {
    
//     return `Hej, jag heter ${name} och är ${age} år gammal.`;
    
// }


//Fråga 6 

let numbah = prompt("Write your number: ")

function fiftyfifty (numbah) {
    if (numbah == 55)
    {
        console.log("the number is 55")
    } else if (numbah < 50) {
        console.log("the number is under 50")
    } else {
        console.log("Värdet är större än 55")
    }
}

fiftyfifty(numbah);