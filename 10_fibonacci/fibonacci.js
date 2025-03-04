const fibonacci = function(n) {
    n = +n; // convert to int
    if (n < 0) return "OOPS"; // check for negatives

    if (n === 1 || n === 2) return 1; 


    let fib1 = 1, fib2 = 1;
    let sum = 0;

    for (let i = 2; i < n; i++){
        sum = fib1 + fib2;
        fib1 = fib2;
        fib2 = sum;
    }

    return sum;

};

// Do not edit below this line
module.exports = fibonacci;
