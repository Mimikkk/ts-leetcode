import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


class MyQueue {
  second: number[];
  first: number[];

  constructor() {
    this.first = [];
    this.second = [];
  }

  push = (x: number): void => {
    this.first.push(x);
  };

  pop = (): number => {
    if (!this.second.length) while (this.first.length > 0) this.second.push(this.first.pop()!);
    return this.second.pop()!;
  };

  peek = (): number => {
    if (this.second.length === 0) while (this.first.length > 0) this.second.push(this.first.pop()!);
    return this.second[this.second.length - 1];
  };

  empty = (): boolean => !(this.first.length || this.second.length);
}

describe("232 - implement queues using stack", () => {
  it("should do some operations", () => {
    const queue = new MyQueue();
    queue.push(1);
    queue.push(2);
    queue.push(3);
    expect(queue.peek()).toEqual(1);
    expect(queue.pop()).toEqual(1);
    expect(queue.empty()).toEqual(false);
  });
});