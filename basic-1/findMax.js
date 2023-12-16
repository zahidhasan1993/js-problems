const findMax = (arr) => {
  // return Math.max(...arr);
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

module.exports = findMax;
