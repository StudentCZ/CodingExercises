// O(N^2) time complexity and O(1) space

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
  return matrix;
};

console.log(
  rotateImage([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
