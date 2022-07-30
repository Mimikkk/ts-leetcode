export {};

module R {
  export const create = <T, Key extends symbol | string | number>() =>
    ({} as Record<Key, T>);

  export const isEmpty = <T, Key extends symbol | string | number>(
    record: Record<Key, T>,
  ): boolean =>
    record &&
    Object.keys(record).length === 0 &&
    Object.getPrototypeOf(record) === Object.prototype;

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
