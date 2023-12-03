const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

const spl = input.split("\n");

const board = spl.map((row) => row.split(""));

var INCORRTOTAL = 0;
var line = 0;
var thestack = [];
for (const row of board) {
  var nextline = line + 1;
  var prevline = line - 1;
  if (nextline >= board.length - 1) {
    nextline = board.length - 1;
  }
  if (prevline < 0) {
    prevline = 0;
  }
  for (var counter = 0; counter < row.length; ) {
    var thiscell = row[counter];
    var thisgroup = [];
    if (+thiscell >= 0) {
      thisgroup.push(thiscell);
      if (+row[counter + 1] >= 0) {
        thisgroup.push(row[counter + 1]);
        if (+row[counter + 2] >= 0) {
          thisgroup.push(row[counter + 2]);
        }
      }
    }
    if (thisgroup.length > 0){
      thestack.push(thisgroup);
    }
    if (thisgroup.length === 1) {
      if (
        row[counter + 1] !== "." ||
        row[counter - 1] !== "." ||
        !board[nextline].slice(counter - 1, counter + 1).includes(".") ||
        !board[prevline].slice(counter - 1, counter + 1).includes(".")
      ) {
        console.log("adding", thisgroup[0])
        INCORRTOTAL = INCORRTOTAL + +thisgroup[0];
      }
      counter += 0;
    }
    if (thisgroup.length === 2) {
      counter += 1;
      if (
        row[counter + 1] !== "." ||
        row[counter - 2] !== "." ||
        !board[nextline].slice(counter - 2, counter + 1).includes(".") ||
        !board[prevline].slice(counter - 2, counter + 1).includes(".")
      ) {
        console.log("adding", thisgroup[0], thisgroup[1])
        INCORRTOTAL = INCORRTOTAL + +`${thisgroup[0]}${thisgroup[1]}`;
      }
    }
    if (thisgroup.length === 3) {
      counter += 2;
      if (
        row[counter - 3] !== "." ||
        row[counter + 1] !== "." ||
        !board[nextline].slice(counter - 3, counter + 1).includes(".") ||
        !board[prevline].slice(counter - 3, counter + 1).includes(".")
      ) {
        console.log("adding", thisgroup[0], thisgroup[1], thisgroup[2])
        INCORRTOTAL = INCORRTOTAL + +`${thisgroup[0]}${thisgroup[1]}${thisgroup[2]}`;
      }
    }
    counter += 1;
  }
  line += 1;
}
// console.log(thestack)
console.log(thestack.map((x) => (x.join(""))).map(x => +x).reduce((a, b) => a + b, 0))
console.log(INCORRTOTAL);