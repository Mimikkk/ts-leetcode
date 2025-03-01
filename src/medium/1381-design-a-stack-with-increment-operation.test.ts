import { it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

class CustomStack {
  stack: number[];
  index: number;

  constructor(size: number) {
    this.stack = Array(size);
    this.index = 0;
  }

  push(x: number): void {
    if (this.index < this.stack.length) this.stack[this.index++] = x;
  }

  pop(): number {
    if (this.index === 0) return -1;
    return this.stack[--this.index];
  }

  increment(bottomK: number, value: number): void {
    for (let i = 0, it = Math.min(bottomK, this.index); i < it; i++) this.stack[i] += value;
  }
}

it("1381-design-a-stack-with-increment-operation", () => {
  const stack = new CustomStack(3);
  stack.push(1);
  stack.push(2);
  expect(stack.pop()).toBe(2);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.increment(5, 100);
  stack.increment(2, 100);
  expect(stack.pop()).toBe(103);
  expect(stack.pop()).toBe(202);
  expect(stack.pop()).toBe(201);
  expect(stack.pop()).toBe(-1);
});
