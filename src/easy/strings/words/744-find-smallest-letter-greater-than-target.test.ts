export {};

const nextGreatestLetter = (letters: string[], target: string): string => {
  let [left, right] = [0, letters.length - 1];

  let smallest;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (letters[mid] > target) {
      smallest = letters[mid];
      right = mid - 1;
    } else left = mid + 1;
  }

  return smallest || letters[0];
};

describe("next greatest letter", () => {
  it("case 1", () => {
    expect(nextGreatestLetter(["c", "f", "j"], "a")).toEqual("c");
  });

  it("case 2", () => {
    expect(nextGreatestLetter(["c", "f", "j"], "c")).toEqual("f");
  });

  it("case 3", () => {
    expect(nextGreatestLetter(["c", "f", "j"], "d")).toEqual("f");
  });

  it("case 4", () => {
    expect(nextGreatestLetter(["a", "b"], "z")).toEqual("a");
  });
});
