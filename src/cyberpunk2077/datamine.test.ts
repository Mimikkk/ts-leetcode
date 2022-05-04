export {};

type Tuple<T, N extends number> = N extends N ?number extends N ?T[]:_TupleOf<T, N, []>:never;
type _TupleOf<T, N extends number, R extends unknown[]> = R["length"] extends N ?R:_TupleOf<T, N, [T, ...R]>;

type Hex = "55" | "bd" | "e9" | "1c" | "7a";
type Datamine<SS extends number> = Tuple<Tuple<Hex, SS>, SS>;

type Point = Tuple<number, 2>;
type Pattern<T, S extends number> = Tuple<T, S>;


const range = (start: number, end: number) =>
  Array.from({ length:end - start }, (_, i) => i + start);

const matrix = <T>(m: number, n: number, fill: T): T[][] => Array.from(Array(m), () => Array(n).fill(fill));

const breachDatamine = <SS extends number, PS extends number>
(datamine: Datamine<SS>, patterns: Pattern<Hex, PS>[]): [Pattern<Point, SS>, Tuple<boolean, PS>] => {
  const minesize = datamine.length;
  const visited = matrix(minesize, minesize, false);

  

  return [[[0, 0], [0, 0], [0, 0]], [true]] as any;
};

describe("breach datamine", () => {
  it("should breach effectively", () => {
    expect(breachDatamine([
      ["55", "bd", "e9", "1c", "1c"],
      ["e9", "e9", "55", "55", "bd"],
      ["e9", "e9", "bd", "e9", "55"],
      ["bd", "bd", "bd", "e9", "e9"],
      ["1c", "1c", "1c", "1c", "1c"],
    ], [
      ["bd", "e9", "e9"],
    ])).toEqual([
        [[0, 1], [2, 1], [2, 3]],
        [true],
      ],
    );
  });

  it("should breach effectively", () => {
    expect(breachDatamine([
      ["e9", "e9", "7a", "bd", "55", "55"],
      ["1c", "1c", "1c", "7a", "55", "e9"],
      ["1c", "7a", "7a", "1c", "55", "1c"],
      ["bd", "e9", "55", "7a", "55", "7a"],
      ["55", "55", "55", "7a", "55", "1c"],
      ["bd", "bd", "e9", "1c", "55", "e9"],
    ], [
      ["55", "55", "7a"],
      ["bd", "bd", "bd"],
      ["55", "e9", "55"],
    ])).toEqual([
        [0, 5], [5, 5], [4, 5], [3, 4], [3, 3],
        [true, false, true],
      ],
    );
  });
});
