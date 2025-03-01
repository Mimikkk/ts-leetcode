import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


class MinStack {
  stack: number[];
  minStack: number[];
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push = (val: number) => {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(val);
    }
  };

  pop = () => {
    const val = this.stack.pop();
    if (val === this.minStack[this.minStack.length - 1]) this.minStack.pop();
  };

  top = () => this.stack[this.stack.length - 1];

  getMin = () => this.minStack[this.minStack.length - 1];
}

describe("155 - min stack", () => {
  it("should pass", () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toEqual(-3);
    minStack.pop();
    expect(minStack.top()).toEqual(0);
    expect(minStack.getMin()).toEqual(-2);
  });

  it("should pass", () => {
    const minStack = new MinStack();
    minStack.push(0);
    minStack.push(1);
    minStack.push(0);
    expect(minStack.getMin()).toEqual(0);
    minStack.pop();
    expect(minStack.top()).toEqual(1);
    expect(minStack.getMin()).toEqual(0);
  });
});
