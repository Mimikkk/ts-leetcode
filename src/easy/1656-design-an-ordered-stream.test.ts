import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


class OrderedStream {
  private pointer: number;
  private readonly stream: string[];

  constructor(n: number) {
    this.pointer = 0;
    this.stream = new Array(n);
  }

  insert(id: number, value: string) {
    let { pointer, stream } = this;
    stream[id - 1] = value;

    let chunk = [];
    while (stream[pointer]) chunk.push(stream[pointer++]);

    this.pointer = pointer;

    return chunk;
  }
}

describe("ordered stream", () => {
  it("should return the correct chunk", () => {
    expect(new OrderedStream(5).insert(1, "a")).toEqual(["a"]);
  });
});