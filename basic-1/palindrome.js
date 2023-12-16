function palindrome(str) {
  const reverseStr = str.split("").reverse().join("");
  //   const palindrome = "is palindrome";
  //   const notPalindrome = "is not palindrome";
  if (str !== reverseStr) {
    return { str, status: "not a palindrome" };
  }
  return { str, status: "is a palindrome" };
}

module.exports = palindrome;
