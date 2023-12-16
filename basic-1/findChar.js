function findChar(str, c) {
  let a = 0;

  for (let i = 0; i < str.length; i++) {
    // console.log(str[i]);
    if (str[i] === c) {
      a = a + 1;
    }
  }
  return a;
  //   console.log(str,c);
}

module.exports = findChar;
