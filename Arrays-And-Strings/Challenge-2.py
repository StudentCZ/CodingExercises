# O(N log N) time complexity and O(N) space complexity

def permutation_checker(string1, string2):
  if len(string1) is not len(string2):
    return False

  sorted_string_one = "".join(sorted(string1))
  sorted_string_two = "".join(sorted(string2))

  return sorted_string_one == sorted_string_two

print(permutation_checker('sbd','dbbs')) # False
print(permutation_checker('abc','cba')) # True

def permutation_checker2(string1,string2):
  if len(string1) is not len(string2):
    return False

  dictionary = {}

  for character in string2:
    if character in dictionary:
      dictionary[character] += 1
    else:
      dictionary[character] = 1

  for character in string1:
    if character in dictionary:
      dictionary[character] -= 1
    else:
      return False
  return True

print(permutation_checker2('sbd','dbbs')) # False
print(permutation_checker2('abc','cba')) # True

