const uniqueString = (string) => {
  const dictionary = {};
  for (i = 0; i < string.length; i++) {
    const character = string[i];
    if (dictionary[character]) {
      return false;
    } else {
      dictionary[character] = true;
    }
  }
  return true;
};
