import { exercise } from "@shared/utilities/exercise";

class ArrayWrapper {
  constructor(public nums: number[] = []) {}

  valueOf(): number {
    const {
      nums: { length: n },
      nums,
    } = this;

    let sum = 0;
    for (let i = 0; i < n; ++i) sum += nums[i];
    return sum;
  }

  toString(): string {
    const {
      nums: { length: n },
      nums,
    } = this;

    let values = "";
    for (let i = 0; i < n; ++i) {
      values += nums[i];
      if (i !== n - 1) values += ",";
    }

    return `[${values}]`;
  }
}

function handleWrapper(nums: [number[]] | [number[], number[]], operation: "Add" | "String"): number | string {
  if (operation === "String") {
    return new ArrayWrapper(nums[0]).toString();
  }

  return new ArrayWrapper(nums[0]).valueOf() + new ArrayWrapper(nums[1]!).valueOf();
}

exercise(handleWrapper, [
  [
    [
      [
        [4, 1],
        [3, 1],
      ],
      "Add",
    ],
    9,
  ],
  [[[[4, 1]], "String"], "[4,1]"],
]);
