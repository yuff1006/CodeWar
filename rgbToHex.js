// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b) {
  return convert(r) + convert(g) + convert(b);
}

function convert(val) {
  if (val <= 0) {
    return "00";
  } else if (val >= 255) {
    return "FF";
  }
  let hexArr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let firstChar = hexArr[Math.trunc(val / 16)];
  let secondChar = hexArr[(val / 16 - Math.trunc(val / 16)) * 16];
  return firstChar + secondChar;
}
