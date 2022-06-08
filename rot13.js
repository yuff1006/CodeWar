// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  let arr = message.split("");
  let cipheredArr = arr.map((el) => {
    let asciiCode = asciiCode;
    if (asciiCode >= 65 && asciiCode <= 90) {
      if (asciiCode + 13 > 90) {
        return String.fromCharCode(asciiCode + 13 - 26);
      }
      return String.fromCharCode(asciiCode + 13);
    } else if (asciiCode >= 97 && asciiCode <= 122) {
      if (asciiCode + 13 > 122) {
        return String.fromCharCode(asciiCode + 13 - 26);
      }
      return String.fromCharCode(asciiCode + 13);
    }
    return el;
  });
  return cipheredArr.join("");
}
