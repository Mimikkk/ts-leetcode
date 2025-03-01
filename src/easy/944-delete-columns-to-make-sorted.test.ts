import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const minDeletionSize = (strs: string[]) => {
  let counter = 0;
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] < strs[j - 1][i]) {
        counter++;
        break;
      }
    }
  }
  return counter;
};

describe("delete columns to make sorted", () => {
  it("case 1", () => {
    expect(minDeletionSize(["cba", "daf", "ghi"])).toEqual(1);
  });
  it("case 2", () => {
    expect(minDeletionSize(["cb", "da", "gh"])).toEqual(1);
  });

  it("case 3", () => {
    expect(minDeletionSize(["rrjk", "furt", "guzm"])).toEqual(2);
  });

  it("case 4", () => {
    expect(minDeletionSize(["a", "b"])).toEqual(0);
  });
});
