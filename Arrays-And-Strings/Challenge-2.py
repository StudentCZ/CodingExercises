def permutation_checker(string1, string2):
  if len(string1) is not len(string2):
    return False

  sorted_string_one = "".join(sorted(string1))
  sorted_string_two = "".join(sorted(string2))

  return sorted_string_one == sorted_string_two


