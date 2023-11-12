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
