import { createDay } from '../../utils/createDay.ts';
import { Str } from '../../utils/ns/str.ts';

type FindFn = (s: string, i: number) => number | undefined;

class NumberSearch {
  static create(find: FindFn) {
    return new this(find);
  }

  private constructor(
    private readonly find: FindFn,
  ) {}

  last(s: string): number | undefined {
    for (let i = s.length - 1; i >= 0; --i) {
      const result = this.find(s, i);
      if (result !== undefined) return result;
    }
  }

  first(s: string): number | undefined {
    for (let i = 0; i < s.length; ++i) {
      const result = this.find(s, i);
      if (result !== undefined) return result;
    }

    return;
  }
}

const isDigit = (c: string): boolean => c >= '0' && c <= '9';

const charNumberSearch = NumberSearch.create((s, i) => isDigit(s[i]) ? +s[i] : undefined);

const Digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'] as const;
const DigitCount = 10;
const wordNumberSearch = NumberSearch.create(
  (s, i) => {
    if (isDigit(s[i])) return +s[i];

    for (let j = 0; j < DigitCount; ++j) {
      const end = i + Digits[j].length - 1;
      if (end >= s.length) continue;

      let start = i;
      while (start <= end && s[start] === Digits[j][start - i]) ++start;
      if (start <= end) continue;

      return j;
    }
  },
);

const createSolver = (search: NumberSearch) => (input: string[]): number => {
  let result = 0;

  for (const line of input) {
    const first = search.first(line);
    const last = search.last(line);
    if (first === undefined || last === undefined) continue;

    result += 10 * first + last;
  }

  return result;
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
    solve: createSolver(charNumberSearch),
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
    solve: createSolver(wordNumberSearch),
  },
});
