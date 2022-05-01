export {};

const minOperations = (logs: string[]): number => {
  let count = 0;

  for (const log of logs) {
    switch (log) {
      case "../":
        count = Math.max(0, count - 1);
        break;
      case "./":
        break;
      default:
        count++;
    }
  }

  return count;
};

describe("crawler log folder", () => {
  it("case 1", () => {
    expect(minOperations(["d1/", "d2/", "../", "d21/", "./"])).toEqual(2);
  });

  it("case 2", () => {
    expect(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"])).toEqual(3);
  });

  it("case 3", () => {
    expect(minOperations(["d1/", "../", "../", "../"])).toEqual(0);
  });
});