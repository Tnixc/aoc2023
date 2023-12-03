const input =`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

const spl = input.split('\n')
console.log(spl)

const board = spl.map((row) => row.split(''))
console.log(board)

for (const row of board){
  for(var counter = 0; counter < row.length; counter++){
    var thiscell = row[counter]
    var thisgroup = []
    if (+thiscell >= 0 ){
      thisgroup.push(thiscell)
      if (row[counter+1] >= 0){
        thisgroup.push(row[counter+1])
        if (row[counter+2] >= 0){
          thisgroup.push(row[counter+2])
        }
      }
      console.log(thisgroup)
    }
  }
}