function rotateImage(matrix) {
  const n = matrix.length;

  // Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // Swap matrix[i][j] with matrix[j][i]
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Reverse each row of the transposed matrix
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}

// Example usage:
const imageMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

rotateImage(imageMatrix);
console.log(imageMatrix);
