export {};

module R {
  export const empty = <Key extends KeyType, Value>() =>
    ({} as Record<Key, Value>);

  export const isEmpty = <Key extends KeyType, Value>(
    record: Record<Key, Value>,
  ): boolean =>
    record &&
    Object.keys(record).length === 0 &&
    Object.getPrototypeOf(record) === Object.prototype;

  export const values = <Key extends KeyType, Value>(
    record: Record<Key, Value>,
  ): Value[] => Object.values(record);

  const keyify = <Key extends KeyType>(x: Key): Key =>
    (Number.isNaN(Number(x)) ? x : Number(x)) as Key;

  export const keys = <Key extends KeyType, Value>(
    record: Record<Key, Value>,
  ): Key[] => Object.keys(record).map(keyify) as Key[];

  const entrify = <Key extends KeyType, Value>([key, value]: Entry<
    string,
    unknown
  >): Entry<Key, Value> => [keyify(key), value] as Entry<Key, Value>;

  export const entries = <Key extends KeyType, Value>(
    record: Record<Key, Value>,
  ): Entry<Key, Value>[] =>
    Object.entries(record).map(entrify) as Entry<Key, Value>[];

  export const from = <Key extends KeyType, Value>(
    entries: Entry<Key, Value>[],
  ) =>
    entries.reduce<Record<Key, Value>>((record, [key, value]) => {
      record[key] = value;
      return record;
    }, R.empty());

  export const find = <Key extends KeyType, Value>(
    record: Record<Key, Value>,
    fn: (
      entry: Entry<Key, Value>,
      index: number,
      record: Record<Key, Value>,
      entries: Entry<Key, Value>[],
    ) => boolean,
  ): Entry<Key, Value> | undefined =>
    entries(record).find((entry, index, entries) =>
      fn(entry, index, record, entries),
    );

  export const filter = <Key extends KeyType, Value>(
    record: Record<Key, Value>,
    fn: MapFn<Entry<Key, Value>, Key, Value, boolean>,
  ): Record<Key, Value> =>
    from(
      entries(record).filter((entry, index, entries) =>
        fn(entry, index, record, entries),
      ),
    );

  export const findKey = <Key extends KeyType, Value>(
    record: Record<Key, Value>,
    fn: MapFn<Key, Key, Value, boolean>,
  ): Key | undefined =>
    keys(record).find((key, index, keys) => fn(key, index, record, keys));

  export const findValue = <Key extends KeyType, Value>(
    record: Record<Key, Value>,
    fn: MapFn<Value, Key, Value, boolean>,
  ): Value | undefined =>
    values(record).find((value, index, values) =>
      fn(value, index, record, values),
    );

  export const filterKeys = <Key extends KeyType, Value>(
    record: Record<Key, Value>,
    fn: MapFn<Key, Key, Value, boolean>,
  ): Key[] =>
    keys(record).filter((key, index, keys) => fn(key, index, record, keys));

  export const filterValues = <Key extends KeyType, Value>(
    record: Record<Key, Value>,
    fn: MapFn<Value, Key, Value, boolean>,
  ): Value[] =>
    values(record).filter((value, index, values) =>
      fn(value, index, record, values),
    );

  export const filterByKey = <Key extends KeyType, Value>(
    record: Record<Key, Value>,
    fn: MapFn<Key, Key, Value, boolean>,
  ): Record<Key, Value> => {
    const keys = R.keys(record);

    return filter(record, ([key], index, record) =>
      fn(key, index, record, keys),
    );
  };

  export const filterByValue = <Key extends KeyType, Value>(
    record: Record<Key, Value>,
    fn: MapFn<Value, Key, Value, boolean>,
  ): Record<Key, Value> => {
    const values = R.values(record);

    return filter(record, ([, value], index, record) =>
      fn(value, index, record, values),
    );
  };

  export const counter = <
    Key extends KeyType,
    Iter extends Iterable<Key> = Iterable<Key>,
  >(
    iterable?: Iter,
  ): Record<Key, number> => {
    const counter = R.empty<Key, number>();
    for (const item of iterable || []) counter[item] = (counter[item] || 0) + 1;
    return counter;
  };

  export const maxValue = <Key extends KeyType>(record: Record<Key, number>) =>
    Math.max(...values(record));

  export const minValue = <Key extends KeyType>(record: Record<Key, number>) =>
    Math.min(...values(record));

  export const maxKey = <Value>(record: Record<number, Value>) =>
    Math.max(...keys(record));

  export const minKey = <Value>(record: Record<number, Value>) =>
    Math.min(...keys(record));

  export const countValues = <Key extends KeyType, Value>(
    record: Record<Key, Value>,
    fn: MapFn<Value, Key, Value, boolean>,
  ) => filterValues(record, fn).length;

  export const countKeys = <Key extends KeyType, Value>(
    record: Record<Key, Value>,
    fn: MapFn<Key, Key, Value, boolean>,
  ) => filterKeys(record, fn).length;

  export const sorted = <Key extends KeyType, Value>(
    record: Record<Key, Value>,
    fn: (first: Entry<Key, Value>, second: Entry<Key, Value>) => number,
  ) => from(entries(record).sort(fn));

  export const sortedByKey = <Key extends KeyType, Value>(
    record: Record<Key, Value>,
    fn: (first: Key, second: Key) => number,
  ): Record<Key, Value> => sorted(record, ([k1], [k2]) => fn(k1, k2));

  export const sortedByValue = <Key extends KeyType, Value>(
    record: Record<Key, Value>,
    fn: (first: Value, second: Value) => number,
  ): Record<Key, Value> => sorted(record, ([, v1], [, v2]) => fn(v1, v2));

  export const sortedKeys = <Key extends KeyType, Value>(
    record: Record<Key, Value>,
    fn: (first: Key, second: Key) => number,
  ): Key[] => keys(record).sort(fn);

  export const sortedValues = <Key extends KeyType, Value>(
    record: Record<Key, Value>,
    fn: (first: Value, second: Value) => number,
  ): Value[] => values(record).sort(fn);

  export type MapFn<Input, Key extends KeyType, Value, Output> = (
    item: Input,
    index: number,
    record: Record<Key, Value>,
    items: Input[],
  ) => Output;
  export type KeyType = string | number | symbol;
  export type Entry<Key extends KeyType, Value> = [Key, Value];
}
