const removeDublicates = (arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  }
  return newArr;
};

module.exports = removeDublicates;
