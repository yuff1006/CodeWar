// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsCount = 0;
  str.split("").forEach((char) => {
    if (isVowel(char)) {
      vowelsCount++;
    }
  });

  return vowelsCount;
}

function isVowel(char) {
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    return true;
  }
  return false;
}
