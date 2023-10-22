export {};

const createCounter = (nums: number[]) => {
  const counter: Record<number, number> = {};
  nums.forEach((n) => (counter[n] = (counter[n] || 0) + 1));
  return counter;
};

type Entry<K, V> = [K, V];
module Entry {
  export const key = <K, V>(entry?: Entry<K, V>) => entry?.[0];
  export const isOver =
    (threshold: number) =>
    <K>([, count]: Entry<K, number>) =>
      count > threshold;
}
const entries = (obj: Record<string, number>): Entry<number, number>[] => Object.entries(obj).map(([k, v]) => [+k, v]);

const { key, isOver } = Entry;
const findSpecialInteger = (nums: number[]): number =>
  key(entries(createCounter(nums)).find(isOver(Math.floor(nums.length / 4)))) ?? -1;

describe("find appearing more than 25% times", () => {
  it("case 1", () => {
    expect(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])).toEqual(6);
  });

  it("case 2", () => {
    expect(findSpecialInteger([1, 1, 1, 2, 2])).toEqual(1);
  });
});
