export {};

const replaceElements = (arr: number[]) => {
  const len = arr.length;
  let max = arr[len - 1];
  arr[len - 1] = -1;

  for (let i = len - 2; i >= 0; --i) [arr[i], max] = [max, max < arr[i] ?arr[i]:max];

  return arr;
};

describe("replace element greatest on right side", () => {
  it("case 1", () => {
    expect(replaceElements([17, 18, 5, 4, 6, 1])).toEqual([18, 6, 6, 6, 1, -1]);
  });

  it("case 2", () => {
    expect(replaceElements([400])).toEqual([-1]);
  });
});
