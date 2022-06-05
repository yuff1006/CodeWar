// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
  if (/\d$/.test(strng)) {
    let nonNumberStr = strng.replace(/[^a-zA-Z]+/g, "");
    let numberStr = strng.match(/\d+/)[0];

    if (numberStr.includes("0")) {
      let length = numberStr.length;
      let number = Number(numberStr);
      number++;
      if (length - number.toString().length > 0) {
        return (
          nonNumberStr + "0".repeat(length - number.toString().length) + number
        );
      }
    }
    let number = Number(numberStr);
    number++;
    return nonNumberStr + number;
  } else {
    return strng + "1";
  }
}
