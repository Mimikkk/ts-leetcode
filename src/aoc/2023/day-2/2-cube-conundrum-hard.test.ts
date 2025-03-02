import { createDay } from '../../utils/createDay.ts';

namespace FuncBag {
  export type Color = 'red' | 'green' | 'blue';

  export const minimums = (entries: [number, Color][]): Record<Color, number> => {
    const bag: Record<Color, number> = { red: 0, green: 0, blue: 0 };
    for (const [count, color] of entries) if (bag[color] < count) bag[color] = count;
    return bag;
  };
  export const power = ({ red, green, blue }: Record<Color, number>): number => red * green * blue;
}

const add = (a: number, b: number) => a + b;
const { minimums, power } = FuncBag;
const funcConundrum = (input: string): number =>
  input
    .split('\r\n')
    .filter((Line) => Line)
    .map((line) =>
      line.match(/(\d+) (\w+)/g)!.map((x) => {
        const [count, color] = x.split(' ');

        return [+count, color] as [number, FuncBag.Color];
      })
    )
    .map(minimums)
    .map(power)
    .reduce(add, 0);

createDay({
  hard: {
    cases: {
      test: {
        input: 'file:2-cube-conundrum.case.txt',
        result: 2286,
      },
      user: {
        input: 'file:2-cube-conundrum.user.txt',
        result: 54911,
      },
    },
    prepare: (x) => x,
    solve: (input) => funcConundrum(input),
  },
});
