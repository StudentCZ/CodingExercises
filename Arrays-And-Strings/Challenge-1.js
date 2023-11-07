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

console.log(uniqueString('')); // true
console.log(uniqueString('happy')); // false
console.log(uniqueString('abc')); // true
console.log(uniqueString('translate')); // false
