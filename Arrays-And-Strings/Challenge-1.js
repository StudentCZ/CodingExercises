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

//What if you cannot use additional data structures?

const uniqueString2 = (string) => {
  const sortedString = string.split('').sort().join('');
  for (let i = 1; i <= sortedString.length - 1; i++) {
    const character = sortedString[i];
    const previousCharacter = sortedString[i - 1];
    if (character === previousCharacter) {
      return false;
    }
  }
  return true;
};

console.log(uniqueString2('pop')); //false
console.log(uniqueString2('apple')); // false
console.log(uniqueString2('abcdefwrr')); //false
console.log(uniqueString2('')); //true
console.log(uniqueString2('abcdefghijklmnopqrstuvwxyz')); // true
