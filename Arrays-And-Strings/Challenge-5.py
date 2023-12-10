def one_away(string1,string2):
  if abs(len(string1) - len(string2) > 1):
    return False

  hash_map = {}
  extra_character_count = 0

  for char in string1:
    if hash_map.get(char):
      hash_map[char] += 1
    else:
      hash_map[char] = 1

  for char in string2:
    if hash_map.get(char):
      hash_map[char] -= 1
    else:
      extra_character_count += 1

  count = 0
  character_values = list(hash_map.values())

  for value in character_values:
    count += value

  return count + extra_character_count <= 2

print(one_away('abc', 'ab')) # True
print(one_away('aaa', 'bbb')) # False
