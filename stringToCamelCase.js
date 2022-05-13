// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  screenForEdgeCase(str);
  let arr = str.split(/[-_]/);
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
    } else {
      arr[i] = arr[i].charAt(0) + arr[i].slice(1).toLowerCase();
    }
  }
  return arr.join("");
}

function screenForEdgeCase(str) {
  if (str.length === 0) {
    return str;
  }
}
