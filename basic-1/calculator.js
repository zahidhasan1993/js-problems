function calculator(a, b, operator) {
    if (operator === "+") {
      return a + b;
    } else if (operator === "-") {
      return a - b;
    } else if (operator === "*") {
      return a * b;
    } else if (operator === "/") {
      return a / b;
    } else {
      throw new Error("INVALID Operator");
    }
  };


  module.exports = calculator;