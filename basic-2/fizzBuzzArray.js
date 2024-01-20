const fizzBuzz = (arr) => {
  // console.log(arr);
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
    if (element % 5 === 0 && element % 3 === 0) {
      newArr.push('Fizz Buzz')
    } else if (element % 5 === 0) {
      newArr.push("Buzz")
    } else if (element % 3 === 0) {
      newArr.push("Fizz")
    }else{
        newArr.push(element);
    }
  }

  return newArr;
};

module.exports = fizzBuzz;
