const horizontalWinners = (y, x, ind) => {
  return [y, x + (ind - 4), y, x + ind]
}

const verticalWinners = (y, x, ind) => {
  return [y + (ind - 4), x, y + ind, x]
}

const diagonalWinners1 = (y, x, ind) => {
  return [y + (ind - 4), x + (ind - 4), y + ind, x + ind]
}

const diagonalWinners2 = (y, x, ind) => {
  return [y - (ind + 4), x + (ind + 4), y - ind, x - ind]
}

const getHorizontalArray = (y, x, occupier) => {
  let row = [];
  for (let i = 4; i >= -4; i--) {
    row.push(occupier[y][x - i])
  }
  return row;
}

const getVerticalArray = (y, x, occupier) => {
  let row = [];
  for (let i = 4; i >= -4; i--) {
    row.push(occupier[y - i][x])
  }
  return row;
}

const getDiagonalArray1 = (y, x, occupier) => {
  let row = [];
  for (let i = 4; i >= -4; i--) {
    row.push(occupier[y - i][x - i])
  }
  return row;
}
const getDiagonalArray2 = (y, x, occupier) => {
  let row = [];
  for (let i = 4; i >= -4; i--) {
    row.push(occupier[y - i][x + i])
  }
  console.log('diag2: ', row)
  return row;
}

const checkSingleRow = (array, currentPlayer) => {
  let result = false;
  let ind;
  array.map((item, index, array) => {
    if ((index > 5) || item !== currentPlayer) return
    if (
      [item, array[index + 1], array[index + 2], array[index + 3], array[index + 4]]
        .every(element => element === currentPlayer)) {
      result = true;
      ind = index;
    }
  })
  return { result, ind }
}

const rowFunctionsArray = [
  [getHorizontalArray, horizontalWinners],
  [getVerticalArray, verticalWinners],
  [getDiagonalArray1, diagonalWinners1],
  [getDiagonalArray2, diagonalWinners2]
];

export const checkWinner = (y, x, currentPlayer, occupier) => {
  let winners = [];
  let finalResult = false;

  rowFunctionsArray.forEach(rowFunctions => {
    let { result, ind } = checkSingleRow(rowFunctions[0](y, x, occupier), currentPlayer)
    if (result) {
      finalResult = true;
      winners.push(rowFunctions[1](y, x, ind));
    }
  })

  return { finalResult, winners }
};