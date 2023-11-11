const replaceString = (string, length) => {
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

console.log(replaceString('')); // ""
console.log(replaceString('psd0')); // psd0
console.log(replaceString('a b c '), 6); //a$7b$7c
console.log(replaceString('a  b d  c f'), 9); //a$7b$7d$7c$7f
