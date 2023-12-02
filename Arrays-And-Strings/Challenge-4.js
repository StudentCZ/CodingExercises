// time complexity is O(N) and the space complexity is O(1).

const permutationPalindrome = (string) => {
  const hashMap = {};

  for (let i = 0; i < string.length; i++) {
    const character = string[i];

    if (character === ' ') {
      continue;
    }

    if (hashMap[character]) {
      hashMap[character] += 1;
    } else {
      hashMap[character] = 1;
    }
  }
  const characterCount = Object.values(hashMap);
  let oddCount = 0;

  for (let i = 0; i < characterCount.length; i++) {
    const value = characterCount[i];
    if (value % 2 === 1) {
      oddCount += 1;
    }
  }
  return oddCount <= 1;
};

console.log(permutationPalindrome('')); // true
console.log(permutationPalindrome('acer rac')); // true
console.log(permutationPalindrome('aaa')); // true
console.log(permutationPalindrome('abc')); // false
console.log(permutationPalindrome('a b p a s d')); // false
console.log(permutationPalindrome('dede de de')); // true
