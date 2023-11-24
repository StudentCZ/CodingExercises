def replace_string(string,true_length):
  new_string = []

  for i in range(true_length):
    character = string[i]
    if character == " " and string[i+1] is not " ":
      new_string.append('$7')
    elif character == " " and string[i+1] == " ":
      continue
    else:
      new_string.append(character)
  return "".join(new_string)

print(replace_string('', 0))
print(replace_string('psd0', 4))
print(replace_string('a b c ', 5))
print(replace_string('a  b d  c f', 9))

