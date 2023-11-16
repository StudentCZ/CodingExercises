# O(N) time complexity and 0(N) space complexity

def unique_string(string):
  dictionary = {}
  for character in string:
    if dictionary.get(character):
      return False
    else:
      dictionary[character] = True
  return True

print(unique_string('')) # True
print(unique_string('aab')) # False

#O(N log N) time complexity and O(N) space complexity

def unique_string2(string):
  sorted_string = ''.join(sorted(string))
  for i in range(1, len(sorted_string)):
    character = sorted_string[i]
    previous_character = sorted_string[i-1]
    if (character == previous_character):
      return False
  return True

print(unique_string2('')) # True
print(unique_string2('happy')) # False
