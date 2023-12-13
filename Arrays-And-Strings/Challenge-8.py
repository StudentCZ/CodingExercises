# O(N*M) time complexity and 0(N*M) space complexity

def zero_matrix(matrix):
  rows, cols = len(matrix), len(matrix[0])
  zero_rows, zero_cols = set(), set()

  for i in range(rows):
    for j in range(cols):
      if matrix[i][j] == 0:
        zero_rows.add(i)
        zero_cols.add(j)

  for row in zero_rows:
    for j in range(cols):
      matrix[row][j] = 0

  for col in zero_cols:
    for i in range(rows):
      matrix[i][col] = 0

  return matrix

matrix = [
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9]
]

print(zero_matrix(matrix))
