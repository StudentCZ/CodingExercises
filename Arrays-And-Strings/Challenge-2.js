const permutationChecker = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }
  const sortedStringOne = string1.split('').sort().join('');
  const sortedStringTwo = string2.split('').sort().join('');

  return sortedStringOne === sortedStringTwo ? true : false;
};

console.log(permutationChecker('abd', 'dba')); //true
console.log(permutationChecker('abcsdaease', 'ffe')); //false
console.log(permutationChecker('', '')); // true
