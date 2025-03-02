import { createDay } from '../../utils/createDay.ts';

const waitforit = (input: string): number => {
  const [time, distance] = input
    .split(/\r?\n/)
    .filter((line) => line)
    .map((line) => +line.split(/ +/).slice(1).join(''));

  let count = 0;
  for (let i = 0; i < time; ++i) if (i * (time - i) > distance) ++count;
  return count;
};

createDay({
  hard: {
    cases: {
      test: {
        input: 'file:6-wait.case.txt',
        result: 71503,
      },
      user: {
        input: 'file:6-wait.user.txt',
        result: 28101347,
      },
    },
    prepare: (x) => x,
    solve: (input) => waitforit(input),
  },
});
