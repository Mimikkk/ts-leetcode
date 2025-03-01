import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const divmod = (n: number, mod: number) => [~~(n / mod), n % mod];

const addBinary = (a: string, b: string): string => {
  const a_ = [...a].reverse();
  const b_ = [...b].reverse();
  const result = [];

  let carry = 0;
  while (a_.length || b_.length || carry) {
    const a_i = Number(a_.shift()) || 0;
    const b_i = Number(b_.shift()) || 0;

    let sum = a_i + b_i + carry;
    [carry, sum] = divmod(sum, 2);
    result.push(sum);
  }

  return result.reverse().join("");
};

describe("67 - add binary", () => {
  it("case 1", () => {
    expect(addBinary("11", "1")).toBe("100");
  });

  it("case 2", () => {
    expect(addBinary("1010", "1011")).toBe("10101");
  });

  it("case 3", () => {
    expect(addBinary("111", "111")).toBe("1110");
  });

  it("case 4", () => {
    expect(addBinary("01", "01")).toBe("10");
  });
});
