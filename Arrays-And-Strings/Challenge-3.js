const replaceString = (string) => {
  const result = [];

  for (let i = 0; i < string.length; i++) {
    const currentCharacter = string[i];
    const nextCharacter = string[i + 1];

    if (currentCharacter !== ' ') {
      result.push(currentCharacter);
    } else {
      if (
        currentCharacter === ' ' &&
        nextCharacter !== ' ' &&
        i + 1 !== string.length
      ) {
        result.push('$7');
      } else {
        continue;
      }
    }
  }

  return result.join('');
};

console.log(replaceString('a b c '));
