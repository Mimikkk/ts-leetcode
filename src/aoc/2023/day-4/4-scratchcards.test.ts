import { createDay } from '../../utils/createDay.ts';
import { Iter } from '../../utils/ns/iter.ts';
import { Maths } from '../../utils/ns/maths.ts';
import { Str } from '../../utils/ns/str.ts';

const numberRe = /\d+/g;
const parseInput = (input: string) =>
  Str.trimlines(input)
    .map((line) => {
      const valuesStr = line.split(':')[1];
      const [cardValuesStr, userValuesStr] = valuesStr.split('|');
      const cardValues = cardValuesStr.match(numberRe)!;
      const userValues = userValuesStr.match(numberRe)!;

      return [cardValues, userValues];
    })
    .map(([card, user]) => countMatches(card, user));

const countMatches = (card: string[], user: string[]) => Iter.count(card, (v) => user.includes(v));

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:4-scratchcards.case',
        result: 13,
      },
      user: {
        input: 'file:4-scratchcards.user',
        result: 18519,
      },
    },
    prepare: parseInput,
    solve: (counts) => Maths.sum(counts.map((count) => (count ? 1 << (count - 1) : 0))),
  },
  hard: {
    cases: {
      test: {
        input: 'file:4-scratchcards.case',
        result: 30,
      },
      user: {
        input: 'file:4-scratchcards.user',
        result: 11787590,
      },
    },
    prepare: parseInput,
    solve: (counts) => {
      const cards = counts.map((count) => ({ occurences: 1, count }));

      let total = 0;
      for (let i = 0; i < cards.length; ++i) {
        const { occurences, count } = cards[i];

        for (let j = i + 1, it = i + count + 1; j < it; ++j) {
          cards[j].occurences += occurences;
        }

        total += occurences;
      }

      return total;
    },
  },
});
