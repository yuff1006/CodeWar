// Build Tower

// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]
// Go challenge Build Tower Advanced once you have finished this :)

function towerBuilder(nFloors) {
  const strLen = 1 + (nFloors - 1) * 2;
  const result = [];
  for (let floorNum = 0; floorNum < nFloors; floorNum++) {
    const starLen = 1 + floorNum * 2;
    const spaceNumOnOneSide = (strLen - starLen) / 2;
    result.push(
      `${' '.repeat(spaceNumOnOneSide)}${'*'.repeat(starLen)}${' '.repeat(
        spaceNumOnOneSide
      )}`
    );
  }
  return result;
}
