import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const calPoints = (ops: string[]): number => {
  const stack: number[] = [];

  for (const op of ops) {
    switch (op) {
      case "+":
        stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
        break;
      case "D":
        stack.push(stack[stack.length - 1] << 1);
        break;
      case "C":
        stack.pop();
        break;
      default:
        stack.push(+op);
    }
  }

  return stack.reduce((a, b) => a + b, 0);
};

describe("baseball game", () => {
  it("case 1", () => {
    expect(calPoints(["5", "2", "C", "D", "+"])).toEqual(30);
  });

  it("case 2", () => {
    expect(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"])).toEqual(27);
  });

  it("case 3", () => {
    expect(calPoints(["1", "C"])).toEqual(0);
  });
});