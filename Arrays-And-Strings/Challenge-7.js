const rotateImage = (matrix) => {
  const matrixLength = matrix.length;

  for (let i = 0; i < matrixLength; i++) {
    for (let j = i; j < matrixLength; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrixLength; i++) {
    matrix[i].reverse();
  }
};

rotateImage([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
