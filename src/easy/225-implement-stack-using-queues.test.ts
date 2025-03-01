import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


class MyStack {
  first: number[];
  second: number[];

  constructor() {
    this.first = [];
    this.second = [];
  }

  push = (x: number): void => {
    this.first.push(x);
  };

  pop = (): number => {
    while (this.first.length > 1) this.second.push(this.first.shift()!);

    const element = this.first.shift();
    [this.first, this.second] = [this.second, []];
    return element!;
  };

  top = (): number => {
    while (this.first.length > 1) this.second.push(this.first.shift()!);

    const element = this.first.shift();
    this.second.push(element!);

    [this.first, this.second] = [this.second, []];
    return element!;
  };

  empty = (): boolean => !(this.first.length || this.second.length);
}

describe("225 - implement stack using queues", () => {
  it("should handle empty stack", () => {
    const stack = new MyStack();
    expect(stack.empty()).toEqual(true);
    expect(stack.top()).toEqual(undefined);
    expect(stack.pop()).toEqual(undefined);
  });
});