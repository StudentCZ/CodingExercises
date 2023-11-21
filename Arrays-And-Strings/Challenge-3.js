const replaceString = (string, trueLength) => {
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

console.log(replaceString('', 0)); // ""
console.log(replaceString('psd0', 4)); // psd0
console.log(replaceString('a b c ', 5)); //a$7b$7c
console.log(replaceString('a  b d  c f', 9)); //a$7b$7d$7c$7f

const replaceString2 = (string, trueLength) => {
  const newString = [];

  for (let i = 0; i < trueLength; i++) {
    let character = string[i];
    if (character === ' ') {
      newString.push('$7');
    } else {
      newString.push(character);
    }
  }
  return newString.join('');
};

console.log(replaceString('', 0));
console.log(replaceString2('psd0', 4)); // psd0
console.log(replaceString('a b c ', 5)); //a$7b$7c
console.log(replaceString('a  b d  c f', 9)); //a$7b$7d$7c$7f
