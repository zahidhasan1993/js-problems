//reverse string
const reverseString = (str) => {
    let a = "";
    for (let i = str.length - 1; i >= 0; i--) {
      const element = str[i];
      a += element;
    }
    return a;
  };
  
  // function reverseString(str) {
  //   return str.split("").reverse().join("");
  // }

  module.exports = reverseString;