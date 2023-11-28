def permutation_palindrome(string):
  hash_map = {}

  for character in string:
    if character == ' ':
      continue
    if character in hash_map:
      hash_map[character] += 1
    else:
      hash_map[character] = 1

  character_count = list(hash_map.values())
  odd_count = 0

  for value in character_count:
    if value % 2 == 1:
      odd_count += 1
  return odd_count <= 1

print(permutation_palindrome('acer rac'))
print(permutation_palindrome('abc'))
