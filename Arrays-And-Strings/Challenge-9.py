# 0(N) time complexity and 0(N) space complexity

def is_substring(string1,string2):
  if len(string1) != len(string2):
    return False

  sub_string_checker = string1 + string1
  return string2 in sub_string_checker

print(is_substring('Waterbottle', 'erbottleWat')) # True
print(is_substring('abc', 'cba')) # False
