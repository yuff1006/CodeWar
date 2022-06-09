// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(callback) {
  return typeof callback === "function" ? callback(0) : 0;
}
function one(callback) {
  return typeof callback === "function" ? callback(1) : 1;
}
function two(callback) {
  return typeof callback === "function" ? callback(2) : 2;
}
function three(callback) {
  return typeof callback === "function" ? callback(3) : 3;
}
function four(callback) {
  return typeof callback === "function" ? callback(4) : 4;
}
function five(callback) {
  return typeof callback === "function" ? callback(5) : 5;
}
function six(callback) {
  return typeof callback === "function" ? callback(6) : 6;
}
function seven(callback) {
  return typeof callback === "function" ? callback(7) : 7;
}
function eight(callback) {
  return typeof callback === "function" ? callback(8) : 8;
}
function nine(callback) {
  return typeof callback === "function" ? callback(9) : 9;
}

function plus(a) {
  return function (b) {
    return a + b;
  };
}
function minus(a) {
  return function (b) {
    return b - a;
  };
}
function times(a) {
  return function (b) {
    return a * b;
  };
}
function dividedBy(a) {
  return function (b) {
    return Math.trunc(b / a);
  };
}
