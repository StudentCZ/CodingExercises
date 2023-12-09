// O(N) time complexity and 0(N) space complexity

const compressed = (string) => {
  let pointerOne = 0;
  let pointerTwo = 1;
  const result = [];

  while (pointerOne < string.length) {
    if (string[pointerOne] === string[pointerTwo]) {
      pointerTwo += 1;
    } else {
      let repeat = pointerTwo - pointerOne;
      result.push(`${string[pointerOne]}${repeat}`);
      pointerOne = pointerTwo;
      pointerTwo += 1;
    }
  }
  return result.join('').length < string.length ? result.join('') : string;
};

console.log(compressed('aabcccccaaa'));
console.log(compressed('ab'));
