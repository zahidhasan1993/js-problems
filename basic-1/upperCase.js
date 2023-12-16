function upperCase(str) {
  const strArr = str.toLowerCase().split(" ");
  //   console.log(strArr);
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
    // console.log();
  }
  return strArr.join(" ")
}

module.exports = upperCase;
