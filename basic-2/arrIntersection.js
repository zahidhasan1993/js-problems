function arrIntersection(arr1, arr2) {
  const newArr = [];
  // console.log(arr1,arr2);
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    if (arr2.includes(element)) {
      newArr.push(element);
    }
  }
  return newArr;
}

module.exports = arrIntersection;
