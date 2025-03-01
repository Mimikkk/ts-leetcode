import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const timeRequiredToBuy = (tickets: number[], k: number) => {
  let time = 0;
  for (let i = 0; i < tickets.length; i++) {
    if (i === k || tickets[i] < tickets[k]) {
      time += tickets[i];
    } else if (i > k) {
      time += tickets[k] - 1;
    } else {
      time += tickets[k];
    }
  }

  return time;
};

describe("time required to buy", () => {
  it("case 1", () => {
    expect(timeRequiredToBuy([2, 3, 2], 2)).toEqual(6);
  });

  it("case 2", () => {
    expect(timeRequiredToBuy([5, 1, 1, 1], 0)).toEqual(8);
  });
});