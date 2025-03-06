import { createDay } from '../../utils/createDay.ts';
import { Maths } from '../../utils/ns/maths.ts';
import { Str } from '../../utils/ns/str.ts';

const enum Direction {
  Left = 0,
  Right = 1,
}

const easy = ([directions, pathways]: Input): number => {
  let i = 0;
  let count = 0;
  let current = 'AAA';
  do {
    ++count;

    const path = pathways.get(current)!;

    current = directions[i++] === Direction.Left ? path.left : path.right;

    if (i === directions.length) i = 0;
  } while (current !== 'ZZZ');

  return count;
};

const parse = (input: string): [Direction[], Map<string, { left: string; right: string }>, string[]] => {
  const lines = Str.trimlines(input).filter((x) => x);

  const pathways = new Map();

  const pathwayRe = /(\w+) = \((\w+), (\w+)\)/;
  for (let i = 1, it = lines.length; i < it; ++i) {
    const [, from, left, right] = lines[i].match(pathwayRe)!;

    pathways.set(from, { left, right });
  }

  const directions = [...lines[0]].map((x) => (x === 'L' ? Direction.Left : Direction.Right));

  const starts = [];
  for (const from of pathways.keys()) {
    if (from[2] === 'A') starts.push(from);
  }

  return [directions, pathways, starts];
};
type Input = ReturnType<typeof parse>;

const isEnd = (x: string) => x[2] === 'Z';
const hard = (input: string): number => {
  const [directions, pathways, starts] = parse(input);

  let count = 0;
  let direction = 0;
  const directionsCount = directions.length;

  const counts = Array(starts.length);
  counter: while (true) {
    ++count;

    for (let i = starts.length - 1; i >= 0; --i) {
      const path = pathways.get(starts[i])!;

      starts[i] = directions[direction] === Direction.Left ? path.left : path.right;

      if (isEnd(starts[i])) {
        starts.splice(i, 1);
        counts[i] = count;

        if (starts.every(isEnd)) break counter;
      }
    }

    if (++direction === directionsCount) direction = 0;
  }

  return counts.reduce(Maths.lcm);
};

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:8-haunted-wasteland.easy-case',
        result: 2,
      },
      user: {
        input: 'file:8-haunted-wasteland.user',
        result: 14429,
      },
    },
    prepare: parse,
    solve: easy,
  },
  hard: {
    cases: {
      test: {
        input: 'file:8-haunted-wasteland.hard-case',
        result: 6,
      },
      user: {
        input: 'file:8-haunted-wasteland.user',
        result: 10921547990923,
      },
    },
    prepare: (x) => x,
    solve: (input) => hard(input),
  },
});
