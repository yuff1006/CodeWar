// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  let arr = message.split("");
  let cipheredArr = arr.map((el) => {
    if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) {
      if (el.charCodeAt(0) + 13 > 90) {
        return String.fromCharCode(el.charCodeAt(0) + 13 - 26);
      }
      return String.fromCharCode(el.charCodeAt(0) + 13);
    } else if (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
      if (el.charCodeAt(0) + 13 > 122) {
        return String.fromCharCode(el.charCodeAt(0) + 13 - 26);
      }
      return String.fromCharCode(el.charCodeAt(0) + 13);
    }
    return el;
  });
  return cipheredArr.join("");
}
