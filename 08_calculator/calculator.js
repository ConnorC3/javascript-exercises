const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, curr) => sum + curr, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, curr) => sum * curr);
};

const power = function(n, pow) {
	return n**pow;
};

const factorial = function(num) {
  let fact = 1;
  
  for (let i = num; i > 0; i--){
    fact *= i;
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
