import { createDay } from '../../utils/createDay.ts';

const intersectionSize = ([a, b]: [Set<string>, Set<string>]): number => {
  let count = 0;
  for (let value of a) count += b.has(value) ? 1 : 0;
  return count;
};

const scratchCards = (input: string): number =>
  input
    .split('\n')
    .filter((line) => line)
    .map(
      (line) =>
        line
          .split(':')[1]
          .split('|')
          .map((x) => new Set(x.trim().split(/ +/))) as [Set<string>, Set<string>],
    )
    .map(intersectionSize)
    .reduce((a, b) => a + b, 0);

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:4-scratchcards.case.txt',
        result: 13,
      },
      user: {
        input: 'file:4-scratchcards.user.txt',
        result: 18519,
      },
    },
    prepare: (x) => x,
    solve: (input) => scratchCards(input),
  },
});
