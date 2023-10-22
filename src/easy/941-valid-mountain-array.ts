export {};

const validMountainArray = (arr: number[]): boolean => {
  if (arr.length < 3) return false;
  const last = arr.length - 1;
  const increase = () => {
    while (i < last && arr[i] < arr[i + 1]) ++i;
  };
  const decrease = () => {
    while (i < last && arr[i] > arr[i + 1]) ++i;
  };

  let i = 0;
  increase();
  if (i === 0 || i === last) return false;
  decrease();
  return i === last;
};

describe("valid mountain", () => {
  it("Case 1", () => {
    expect(validMountainArray([2, 1])).toEqual(false);
  });

  it("Case 2", () => {
    expect(validMountainArray([3, 5, 5])).toEqual(false);
  });

  it("Case 3", () => {
    expect(validMountainArray([0, 3, 2, 1])).toEqual(true);
  });
});