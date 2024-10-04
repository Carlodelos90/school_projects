const prompt = require('prompt-sync')({ sigint: true})


// Fråga 1
//let usertext = prompt()
// for (i = 0; i < userstext; i++)
//     {
//         console.log(i);
//     }



//fråga 2
//let usertext = prompt()
// i = 0
// while (i < userstext) {
    //     console.log(i)
    //     i++
    // }
    
    

//Fråga 3
// for (let usertext = prompt(); usertext != 0; usertext--)
//     {
//         if (usertext % 2 == 0) {
//             console.log(usertext)
//         }
//     }


//Fråga 4

// let usertext = prompt()

// while (usertext < 1) {
//         console.log("Please write a positive numbuhhh!")
//         usertext = prompt();
// } 

//         for (let index = 0; index <= usertext; index++) {

//             if (index % 2 === 0) {
//                 console.log(index)
//         }
//             // console.log(index);
//         }

//Fråga 5

// let userinput = prompt("write the number that you want to multiply: ")

// for (let index = 0; index <= userinput; index++) {
//     console.log(userinput * index)    
// }


//Frågra 6

// let userinput = prompt("write the number that you want to multiply: ")
// let userinput2 = prompt("write how many times do you want the multiplyer to multiply: ")

// for ( let index = 1; index <= userinput2; index++) {
//     console.log(index, " * ", userinput, " = ", index * userinput)
// }

//Fråga 7 

// let userinput = prompt("write the number that you want to multiply: ")
// //let userinput2 = prompt("write how many times do you want the multiplyer to multiply: ")

// for ( let index = 0; index <= userinput; index++) {
//     console.log(index * 3)
// }

//Fråga 8_a 

// let numbers = []; 

// for (let i = 0; i < 10; i++) {
//     let userInput = prompt("Enter a number: ");
//     numbers.push(userInput);
// }

// let largestNumber = Math.max(...numbers);

// console.log("The largest number is: " + largestNumber);




//Fråga 8_b

// let numbers = []; 
// let times = prompt("How many numbers do you want to write? " )

// for (let i = 0; i < times; i++) {
//     let userInput = prompt("Enter a number: ");
//     numbers.push(userInput);
// }

// let largestNumber = Math.max(...numbers);

// console.log("The largest number is: " + largestNumber);


//Fråga 8_c

// let numbers = [];  
// let userInput;

// while (true) {
//     userInput = prompt("Enter a number (type 0 to stop): ");

//     if (userInput == 0) {
//         break;
//     }

//     numbers.push(userInput);
// }
// if (numbers.length > 0) {
//     let largestNumber = Math.max(...numbers);
//     console.log("The largest number is: " + largestNumber);
// } else {
//     console.log("No numbers were entered.");
// }
