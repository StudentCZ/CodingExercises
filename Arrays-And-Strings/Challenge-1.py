def unique_string(string):
  dictionary = {}
  for character in string:
    if dictionary.get(character):
      return False
    else:
      dictionary[character] = True
  return True
