import Big from "big.js";

export function operate(num1, num2, operator) {
  if (num2 === "0" && operator === "÷") {
    alert("Divided by 0 error");
    return "0";
  }
  const one = Big(num1 || "0");
  const two = Big(num2 || (operator === "÷" || operator === "x" ? "1" : "0"));
  //   console.log(one, "two: ", two, operator);
  if (operator === "+") {
    return one.plus(two).toString();
  }

  if (operator === "-") {
    return one.minus(two).toString();
  }

  if (operator === "x") {
    return one.times(two).toString();
  }

  if (operator === "÷") {
    const result = one.div(two);
    if (result.c.length > 15) {
      return result.toPrecision(15).toString();
    }
    return result.toString();
  }
}
