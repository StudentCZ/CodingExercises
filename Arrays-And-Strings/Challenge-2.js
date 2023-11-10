const permutationChecker = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }
  const sortedStringOne = string1.split('').sort().join('');
  const sortedStringTwo = string2.split('').sort().join('');

  return sortedStringOne === sortedStringTwo ? true : false;
};

// console.log(permutationChecker('abd', 'dba')); //true
// console.log(permutationChecker('abcsdaease', 'ffe')); //false
// console.log(permutationChecker('', '')); // true

//Using a hashmap

const permutationChecker2 = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }
  const hashMap = {};
  for (let i = 0; i < string2.length; i++) {
    const character = string2[i];
    if (hashMap[character]) {
      hashMap[character] += 1;
    } else {
      hashMap[character] = 1;
    }
  }
  for (let i = 0; i < string1.length; i++) {
    const character = string1[i];
    if (!hashMap[character]) {
      return false;
    } else if (hashMap[character] > 0) {
      hashMap[character] -= 1;
    } else {
      return false;
    }
  }
  return true;
};
