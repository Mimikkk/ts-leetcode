import { createDay } from '../../utils/createDay.ts';
import { Str } from '../../utils/ns/str.ts';

const Digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'] as const;
const DigitCount = 10;

const createSolver = (find: (line: string, i: number) => number | undefined) => {
  const first = (line: string): number | undefined => {
    for (let i = 0; i < line.length; ++i) {
      const result = find(line, i);
      if (result !== undefined) return result;
    }
  };

  const last = (line: string): number | undefined => {
    for (let i = line.length - 1; i >= 0; --i) {
      const result = find(line, i);
      if (result !== undefined) return result;
    }
  };

  return (input: string[]): number => {
    let result = 0;

    for (const line of input) {
      const a = first(line);
      const b = last(line);
      if (a === undefined || b === undefined) continue;

      result += 10 * a + b;
    }

    return result;
  };
};

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:1-trebuchet-easy.case',
        result: 142,
      },
      user: {
        input: 'file:1-trebuchet.user',
        result: 55538,
      },
    },
    prepare: Str.trimlines,
    solve: createSolver((s, i) => (Str.isDigit(s[i]) ? +s[i] : undefined)),
  },
  hard: {
    cases: {
      test: {
        input: 'file:1-trebuchet-hard.case',
        result: 281,
      },
      user: {
        input: 'file:1-trebuchet.user',
        result: 54875,
      },
    },
    prepare: Str.trimlines,
    solve: createSolver((s, i) => {
      if (Str.isDigit(s[i])) return +s[i];

      for (let j = 0; j < DigitCount; ++j) {
        const end = i + Digits[j].length - 1;
        if (end >= s.length) continue;

        let start = i;
        while (start <= end && s[start] === Digits[j][start - i]) ++start;
        if (start <= end) continue;

        return j;
      }
    }),
  },
});
