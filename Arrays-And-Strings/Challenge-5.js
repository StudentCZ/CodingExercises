const oneAway = (string1, string2) => {
  if (Math.abs(string1.length - string2.length) > 1) {
    return false;
  }
  const hashMap = {};
  let extraCharacterCount = 0;

  for (let i = 0; i < string1.length; i++) {
    const character = string1[i];

    if (hashMap[character]) {
      hashMap[character] += 1;
    } else {
      hashMap[character] = 1;
    }
  }

  for (let i = 0; i < string2.length; i++) {
    const character = string2[i];

    if (hashMap[character]) {
      hashMap[character] -= 1;
    } else {
      extraCharacterCount += 1;
    }
  }
  let count = 0;
  const characterValues = Object.values(hashMap);

  for (let i = 0; i < characterValues.length; i++) {
    const value = characterValues[i];

    count += value;
  }

  return count + extraCharacterCount <= 2;
};
