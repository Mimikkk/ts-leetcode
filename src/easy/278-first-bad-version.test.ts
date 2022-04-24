export {};

const solution = (isBadVersion: (n: number) => boolean) => (n: number): number => {
  let left = 1;
  let right = n;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (isBadVersion(mid)) right = mid;
    else left = mid + 1;
  }
  return left;
};


describe("278 - implement queues using stack", () => {
  test("case 1", () => {
    expect(true).toEqual(true);
  });
});