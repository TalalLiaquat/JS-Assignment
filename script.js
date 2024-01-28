//Greeting With Your Name
function greetUser(name) {
    return "Hello, " + name + " Welcome!";
}

var userName = prompt("Enter your name:");

var greeting = greetUser(userName);
alert(greeting);



//Prime Number
function isPrime(number) {
    
    if (number < 2) {
        return false;
    }
   
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}


var userInput = parseInt(prompt("Enter a positive integer to check if it's prime:"));


var isPrimeResult = isPrime(userInput);


if (isPrimeResult) {
    alert(userInput + " is a prime number.");
} else {
    alert(userInput + " is not a prime number.");
}