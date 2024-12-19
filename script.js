function fizzBuzz(input){
    if ((input % 3 === 0) && (input % 5 === 0)) alert ("FizzBuzz");
    if (input % 3 === 0) alert ("Fizz");
    if (input % 5 === 0) alert ("Buzz");
    // if (typeof input !== "number") return NaN
    return input;
}
fizzBuzz(prompt("Enter your number"));