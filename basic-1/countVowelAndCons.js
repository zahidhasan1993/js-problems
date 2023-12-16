function countVC(str) {
  let a = 0;
  let b = 0;
  let newStr = str.toLowerCase();
  for (let i = 0; i < newStr.length; i++) {
    const element = newStr[i];
    // console.log(element);
    if (
      element === "a" ||
      element === "e" ||
      element === "i" ||
      element === "o" ||
      element === "u"
    ) {
      a++;
    } else {
      b++;
    }
  }

  return { vowels: a, consonant: b };
}

module.exports = countVC;
