import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const rules: Record<string, number> = {
  type: 0,
  color: 1,
  name: 2,
};

const countMatches = (items: [string, string, string][], ruleKey: string, ruleValue: string) =>
  items.filter((item) => item[rules[ruleKey]] === ruleValue).length;

describe("count matches", () => {
  it("case 1", () => {
    expect(
      countMatches(
        [
          ["phone", "blue", "pixel"],
          ["computer", "silver", "lenovo"],
          ["phone", "gold", "iphone"],
        ],
        "color",
        "silver",
      ),
    ).toEqual(1);
  });
});