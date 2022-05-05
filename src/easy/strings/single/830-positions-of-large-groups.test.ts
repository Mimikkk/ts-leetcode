export {};

const createGroupPairs = () => {
}


const largeGroupPositions = (s: string): [number, number][] => {

  let groups: [number, number][] = [];
  let size = 1;
  for (let i = 1; i < s.length; ++i) {
    if (s[i] === s[i - 1]) ++size;
    else {
      groups.push([i - size, i - 1]);
      size = 1;
    }
  }
  groups.push([s.length - size, s.length - 1]);

  return groups.filter(([start, end]) => end - start >= 2);
};

describe("large group position", () => {
  it("case 1", () => {
    expect(largeGroupPositions("abbxxxxzzy")).toEqual([[3, 6]]);
  });

  it("case 2", () => {
    expect(largeGroupPositions("abc")).toEqual([]);
  });
});
