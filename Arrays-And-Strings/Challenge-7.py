# O(N^2) time complexity and O(1) space

def rotate_image(matrix):
  matrix_length = len(matrix)

  for i in range(matrix_length):
    for j in range(i + 1, matrix_length):
      matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

  for i in range(matrix_length):
    matrix[i].reverse()
  return matrix

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(rotate_image(matrix))
