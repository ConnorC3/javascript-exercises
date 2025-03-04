const sumAll = function(min, max) {
    // initial solution
    // if (num1 < 0 || num2 < 0 ||
    //     Math.floor(num1) !== num1 ||
    //     Math.floor(num2) !== num2 ||
    //     typeof num1 !== "number" ||
    //     typeof num2 !== "number"
    // ) { 
    //     return "ERROR";
    // }

    // lower = Math.min(num1, num2);
    // upper = Math.max(num1, num2);

    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";

    if (min > max){
        const temp = min;
        min = max;
        max = temp;
    }

    let sum = 0;
    for (i = min; i <= max; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
