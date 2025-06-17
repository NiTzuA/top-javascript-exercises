const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, arr) => sum + arr, 0);
};

const multiply = function(arr) {
  return arr.reduce((prod, arr) => prod * arr, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	if (num == 0) { return 1; } 
  let prod = 1;
  while (num > 0) {
    prod = prod * num;
    num--;
  }
  return prod;
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
