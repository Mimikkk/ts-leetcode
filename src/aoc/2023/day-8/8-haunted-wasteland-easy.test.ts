import { createDay } from '../../utils/createDay.ts';

const enum Direction {
  Left = 0,
  Right = 1,
}

const parse = (input: string): [Direction[], Map<string, [string, string]>] => {
  const lines = input.split(/\r?\n/).filter((x) => x);

  return [
    [...lines[0]].map((x) => (x === 'L' ? Direction.Left : Direction.Right)),
    new Map(
      lines
        .slice(1)
        .map((line) => line.match(/(\w+) = \((\w+), (\w+)\)/)!)
        .map(([, from, left, right]) => [from, [left, right]]),
    ),
  ];
};

const wasteland = (input: string): number => {
  const [directions, pathways] = parse(input);

  let i = 0;
  let count = 0;
  let current = 'AAA';
  do {
    ++count;
    current = pathways.get(current)![directions[i++]];
    if (i === directions.length) i = 0;
  } while (current !== 'ZZZ');

  return count;
};

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:8-haunted-wasteland.case.txt',
        result: 2,
      },
      user: {
        input: 'file:8-haunted-wasteland.user.txt',
        result: 14429,
      },
    },
    prepare: (x) => x,
    solve: (input) => wasteland(input),
  },
});
