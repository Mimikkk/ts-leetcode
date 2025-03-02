import { createDay } from '../../utils/createDay.ts';

const zip = function* <T, Y>(a: T[], b: Y[]): Generator<[T, Y]> {
  const container = Array(2) as [T, Y];
  for (let i = 0, it = Math.min(a.length, b.length); i < it; ++i) {
    container[0] = a[i];
    container[1] = b[i];

    yield container;
  }
};

const waitforit = (input: string): number => {
  const races = zip(
    ...(input
      .split(/\r?\n/)
      .filter((line) => line)
      .map((line) =>
        line
          .split(/ +/)
          .slice(1)
          .map((x) => +x)
      ) as [number[], number[]]),
  );

  let product = 1;
  for (const [time, distance] of races) {
    let count = 0;

    for (let i = 0; i < time; ++i) if (i * (time - i) > distance) ++count;

    product *= count;
  }

  return product;
};

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:6-wait.case',
        result: 288,
      },
      user: {
        input: 'file:6-wait.user',
        result: 861300,
      },
    },
    prepare: (x) => x,
    solve: (input) => waitforit(input),
  },
});
