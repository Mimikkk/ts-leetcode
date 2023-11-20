import { exercise } from "@shared/utilities/exercise";

class Calculator {
  constructor(public value: number) {}

  add(value: number): Calculator {
    this.value += value;
    return this;
  }
  subtract(value: number): Calculator {
    this.value -= value;
    return this;
  }
  multiply(value: number): Calculator {
    this.value *= value;
    return this;
  }
  divide(value: number): Calculator {
    if (value === 0) throw Error("Division by zero is not allowed");
    this.value /= value;
    return this;
  }
  power(value: number): Calculator {
    this.value **= value;
    return this;
  }
  getResult(): number {
    return this.value;
  }
}
type Operation = "multiply" | "add" | "subtract" | "divide" | "power";
exercise(
  (operations: ["Calculator", ...Operation[], "getResult"], values: number[]) => {
    const calculator = new Calculator(values[0]);

    try {
      for (let i = 1; i < operations.length; ++i) {
        const operation = operations[i];
        const value = values[i];

        if (operation === "getResult") return calculator.getResult();
        else calculator[operation as Operation](value);
      }
    } catch (error: any) {
      return error.message;
    }

    return 0;
  },
  [
    [
      [
        ["Calculator", "add", "subtract", "getResult"],
        [10, 5, 7],
      ],
      8,
    ],
    [
      [
        ["Calculator", "multiply", "power", "getResult"],
        [2, 5, 2],
      ],
      100,
    ],
    [
      [
        ["Calculator", "divide", "getResult"],
        [20, 0],
      ],
      "Division by zero is not allowed",
    ],
  ],
);
