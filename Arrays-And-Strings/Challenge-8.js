const zeroMatrix = (matrix) => {
  const rows = matrix.length;
  const columns = matrix[0].length;

  const zeroRows = Array(rows).fill(false);
  const zeroColumns = Array(columns).fill(false);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === 0) {
        zeroRows[i] = true;
        zeroColumns[j] = true;
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    if (zeroRows[i] === true) {
      for (let j = 0; j < columns; j++) {
        matrix[i][j] = 0;
      }
    }
  }

  for (let j = 0; j < columns; j++) {
    if (zeroColumns[j] === true) {
      for (let i = 0; i < rows; i++) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

console.log(
  zeroMatrix([
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9],
  ])
);
