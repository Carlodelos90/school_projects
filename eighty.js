const prompt = require('prompt-sync')({ sigint: true})

//Fråga 1 

let cube = prompt("write the size of your cube!")


function calc (cube) {
    return cube * cube
}

console.log(calc(cube))