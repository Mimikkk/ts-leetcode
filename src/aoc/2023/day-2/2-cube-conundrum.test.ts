import { createDay } from '../../utils/createDay.ts';
import { Maths } from '../../utils/ns/maths.ts';
import { Str } from '../../utils/ns/str.ts';

type Color = 'red' | 'green' | 'blue';
const counts: Record<Color, number> = { red: 12, green: 13, blue: 14 };
const isInvalid = (entries: [number, Color][]) => entries.some(([count, color]) => count > counts[color]);

const parseInput = (input: string): [number, Color][][] =>
  Str
    .trimlines(input)
    .map((line) =>
      line.match(/(\d+) (\w+)/g)!.map((x) => {
        const [count, color] = x.split(' ');

        return [+count, color] as [number, Color];
      })
    );

createDay(
  {
    easy: {
      cases: {
        test: {
          input: 'file:2-cube-conundrum.case',
          result: 8,
        },
        user: {
          input: 'file:2-cube-conundrum.user',
          result: 2476,
        },
      },
      prepare: parseInput,
      solve: (contents) => {
        let invalidIdSum = 0;

        for (let i = 0; i < contents.length; i++) {
          if (isInvalid(contents[i])) continue;
          invalidIdSum += i + 1;
        }

        return invalidIdSum;
      },
    },
    hard: {
      cases: {
        test: {
          input: 'file:2-cube-conundrum.case',
          result: 2286,
        },
        user: {
          input: 'file:2-cube-conundrum.user',
          result: 54911,
        },
      },
      prepare: parseInput,
      solve: (contents) =>
        Maths.sum(
          contents.map((entries) => {
            const bag: Record<Color, number> = { red: 0, green: 0, blue: 0 };

            for (const [count, color] of entries) {
              if (bag[color] < count) bag[color] = count;
            }

            return bag;
          }).map(({ red, green, blue }) => red * green * blue),
        ),
    },
  },
);
