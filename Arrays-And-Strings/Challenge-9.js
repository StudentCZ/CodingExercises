const isSubString = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }
  let subStringChecker = `${string1}${string1}`;
  return subStringChecker.includes(string2);
};
