export {};

module R {
  export const createCounter = <
    Key extends symbol | string | number,
    T extends Iterable<Key> = Iterable<Key>,
  >(
    items: T,
  ): Record<Key, number> => {
    const counter = {} as Record<Key, number>;
    for (const item of items) counter[item] = (counter[item] || 0) + 1;
    return counter;
  };

  export const values = <T extends string | number | symbol>(
    record: Record<T, number>,
  ): number[] => Object.values(record);

  export const keys = <T extends string | number | symbol>(
    record: Record<T, number>,
  ): T[] =>
    Object.keys(record).map((x) => (Number.isNaN(x) ? x : Number(x))) as T[];

  export const maxValue = <T extends string | number | symbol>(
    record: Record<T, number>,
  ) => Math.max(...values(record));

  export const minValue = <T extends string | number | symbol>(
    record: Record<T, number>,
  ) => Math.min(...values(record));

  export const maxKey = (record: Record<number, number>) =>
    Math.max(...keys(record));

  export const minKey = (record: Record<number, number>) =>
    Math.min(...keys(record));

  export const countValues = <T extends string | number | symbol>(
    record: Record<T, number>,
    fn: (n: number) => boolean,
  ) => values(record).filter(fn).length;

  export const countKeys = <T extends string | number | symbol>(
    record: Record<T, number>,
    fn: (n: number) => boolean,
  ) => values(record).filter(fn).length;
}

const sum = (nums: number[]): number => nums.reduce((a, b) => a + b, 0);
const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => i + start);

const specialArray = (nums: number[]): number => {
  const counter = R.createCounter<number>(nums);

  return (
    range(0, nums.length + 1).find(
      (n) =>
        sum(
          R.keys(counter)
            .filter((key) => key >= n)
            .map((k) => counter[k]),
        ) === n,
    ) ?? -1
  );
};

describe("special array with x elements greater or equal to x", () => {
  it("case 1", () => {
    expect(specialArray([3, 5])).toBe(2);
    expect(specialArray([])).toBe(0);
    expect(specialArray([0, 0])).toBe(-1);
    expect(specialArray([0, 4, 3, 0, 4])).toBe(3);
    expect(specialArray([1])).toBe(1);
    expect(specialArray([2])).toBe(1);
  });
});
