export {};

const asc = (a: number, b: number) => a - b;

type Pair = [number, number];
const minimumAbsDifference = (arr: number[]): Pair[] => {
  arr.sort(asc);
  let min = Infinity;
  for (let i = 1; i < arr.length; i++) min = Math.min(min, arr[i] - arr[i - 1]);


  const result: Pair[] = [];
  for (let i = 1; i < arr.length; i++) if (arr[i] - arr[i - 1] === min) result.push([arr[i - 1], arr[i]]);

  return result;
};

describe("minimumAbsDifference", () => {
  it("case 1", () => {
    expect(minimumAbsDifference([4, 2, 1, 3])).toEqual([[1, 2], [2, 3], [3, 4]]);
  });

  it("case 2", () => {
    expect(minimumAbsDifference([1, 3, 6, 10, 15])).toEqual([[1, 3]]);
  });

  it("case 3", () => {
    expect(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27])).toEqual([[-14, -10], [19, 23], [23, 27]]);
  });
});