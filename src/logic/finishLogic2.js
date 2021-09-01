export const getColumn = (col, occupier) => {
  return occupier.map((item, index) => occupier[index][col]);
};

export const getDiagonal1 = (y, x, occupier) => {
  return occupier
    .map((item, index) => occupier[index][index - (y - x)])
    .filter(item => item !== undefined);
};

export const getDiagonal2 = (y, x, occupier, tableSize) => {
  return occupier
    .map((item, index) => {
      return occupier[index][((tableSize - 1) - index) - (- (y - ((tableSize - 1) - x)))]
    }).filter(item => item !== undefined);
};

export const checkSingleRow = (row, currentPlayer, x, y = null) => {
  let result = {
    result: false,
    winners: []
  };
  row.map((item, index, array) => {
    if (
      [item, array[index + 1], array[index + 2], array[index + 3], array[index + 4]]
        .every(element => element === currentPlayer)) {
      result.result = true;
      result.winners = y === null ? [index, x, index + 4, x] : [x, y, index, y];
    }
  });
  return result;
};

export const checkWinner = (y, x, currentPlayer, occupier, tableSize) => {
  let result = {
    result: false,
    winners: []
  };

  result = checkSingleRow(occupier[y], currentPlayer, y);

  if (!result.result) {
    let singleColumn = getColumn(x, occupier);
    result = checkSingleRow(singleColumn, currentPlayer, x);
    const [a, b, c, d] = result.winners;
    result.winners = [b, a, d, c]
  };

  if (!result.result) {
    let singleDiagonal1 = getDiagonal1(y, x, occupier);
    result = checkSingleRow(singleDiagonal1, currentPlayer, x, y);
    const [a, b, c, d] = result.winners;
    result.winners = a > c ? [a, b, c, d ] : [a, b, c, d]
  };

  if (!result.result) {
    let singleDiagonal2 = getDiagonal2(y, x, occupier, tableSize);
    result = checkSingleRow(singleDiagonal2, currentPlayer, x, y);
    const [a, b, c, d] = result.winners;
    console.log('abcd', a,b,c,d)
    result.winners = a > c ? [a,a,a,a] : [a , b , c, d]
  };
 // console.log('result: ', result);
  return result
};