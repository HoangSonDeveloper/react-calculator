import Big from "big.js";
import { isNumber } from "./isNumber";
import { operate } from "./operation";

export function calculate(state, btnName) {
  if (btnName === "AC") {
    return {
      value: null,
      operation: null,
      total: null,
    };
  }

  if (isNumber(parseInt(btnName))) {
    if (btnName === "0" && state.value === "0") {
      return {};
    }

    if (state.operation) {
      if (state.value && state.value !== "0") {
        return {
          value: state.value + btnName,
        };
      }
      return { value: btnName };
    }

    if (state.value) {
      const value = state.value === "0" ? btnName : state.value + btnName;
      return {
        value,
        total: null,
      };
    }
    return { value: btnName, total: null };
  }

  if (btnName === "%") {
    if (state.operation && state.value) {
      const result = operate(state.total, state.value, state.operation);
      return {
        total: Big(result).div(Big("100")).toString(),
        value: null,
        operation: null,
      };
    }
    if (state.value) {
      return {
        value: Big(state.value).div(Big("100")).toString(),
      };
    }
    return {};
  }

  if (btnName === ".") {
    if (state.value) {
      if (state.value.includes(".")) {
        return {};
      }
      return {
        value: state.value + ".",
      };
    }
    return {
      value: "0.",
    };
  }

  if (btnName === "+/-") {
    if (state.value) {
      return {
        value: (-1 * parseFloat(state.value)).toString(),
      };
    }
    if (state.total) {
      return {
        value: (-1 * parseFloat(state.total)).toString(),
      };
    }
    return {};
  }

  if (btnName === "=") {
    if (state.value && state.operation) {
      return {
        total: operate(state.total, state.value, state.operation),
        value: null,
        operation: null,
      };
    } else {
      return {};
    }
  }

  if (state.operation) {
    return {
      value: null,
      total: operate(state.value, state.total, state.operation),
      operation: btnName,
    };
  }

  if (!state.value) {
    return {
      operation: btnName,
    };
  }

  return {
    total: state.value,
    value: null,
    operation: btnName,
  };
}
