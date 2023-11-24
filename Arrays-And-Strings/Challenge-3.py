def replace_string(string,true_length):
  new_string = []

  for i in range(true_length):
    character = string[i]
    if character == " ":
      new_string.append('$7')
    else:
      new_string.append(character)
  return "".join(new_string)


