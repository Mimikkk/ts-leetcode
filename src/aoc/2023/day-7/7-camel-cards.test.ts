import { createDay } from '../../utils/createDay.ts';
import { Str } from '../../utils/ns/str.ts';

const read = (cards: string): Hand => {
  const hand: Hand = { cards, values: {} };
  for (const card of cards) {
    hand.values[card] = (hand.values[card] || 0) + 1;
  }
  return hand;
};

const compareBy = (options: { rank: (hand: Hand) => number; cards: string }) => (a: Hand, b: Hand): number => {
  const aRank = options.rank(a);
  const bRank = options.rank(b);
  if (aRank !== bRank) return aRank - bRank;

  for (let i = 0; i < 5; ++i) {
    const aIndex = options.cards.indexOf(a.cards[i]);
    const bIndex = options.cards.indexOf(b.cards[i]);

    if (aIndex === bIndex) continue;
    return bIndex - aIndex;
  }

  return 0;
};

type Hand = { cards: string; values: Record<string, number> };

namespace Easy {
  export const rank = (hand: Hand): number => {
    const [first, second] = Object.values(hand.values).sort((a, b) => b - a);

    if (first === 5) return 6;
    if (first === 4) return 5;
    if (first === 3) return second === 2 ? 4 : 3;
    if (first === 2) return second === 2 ? 2 : 1;
    return 0;
  };
}

namespace Hard {
  const score = (hand: Hand) => {
    const [first, second] = Object.entries(hand.values)
      .filter(([card]) => card !== 'J')
      .map(([, count]) => count)
      .sort((a, b) => b - a);

    if (first === 5) return 6;
    if (first === 4) return 5;
    if (first === 3) return second === 2 ? 4 : 3;
    if (first === 2) return second === 2 ? 2 : 1;
    return 0;
  };

  export const rank = (hand: Hand): number => {
    const { values } = hand;

    const jokers = values.J;
    const [ak, bk, ck, dk, ek] = Object.keys(values);
    const [av = 0, bv = 0, cv = 0, dv = 0, ev = 0] = Object.values(values);

    let max = 0;
    for (let a = 0; a <= jokers; ++a) {
      for (let b = 0; b <= jokers; ++b) {
        for (let c = 0; c <= jokers; ++c) {
          for (let d = 0; d <= jokers; ++d) {
            for (let e = 0; e <= jokers; ++e) {
              if (a + b + c + d + e > jokers) break;

              hand.values[ak] = av + a;
              hand.values[bk] = bv + b;
              hand.values[ck] = cv + c;
              hand.values[dk] = dv + d;
              hand.values[ek] = ev + e;

              const value = score(hand);
              if (value > max) max = value;
            }
          }
        }
      }
    }

    values[ak] = av;
    values[bk] = bv;
    values[ck] = cv;
    values[dk] = dv;
    values[ek] = ev;

    const value = score(hand);
    if (value > max) max = value;
    return max;
  };
}

const prepare = (input: string) => Str.trimlines(input).map((line) => line.split(/ +/));
type Input = ReturnType<typeof prepare>;

const solve = (options: { rank: (hand: Hand) => number; cards: string }) => (input: Input): number => {
  const compare = compareBy(options);

  return input
    .map(([cards, pot]) => [read(cards), +pot] as const)
    .sort(([a], [b]) => compare(a, b))
    .map(([, pot], index) => [pot, index + 1] as const)
    .reduce((a, [value, rank]) => a + value * rank, 0);
};

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:7-camel-cards.case',
        result: 6440,
      },
      user: {
        input: 'file:7-camel-cards.user',
        result: 249638405,
      },
    },
    prepare,
    solve: solve({ rank: Easy.rank, cards: 'AKQJT98765432' }),
  },
  hard: {
    cases: {
      test: {
        input: 'file:7-camel-cards.case',
        result: 5905,
      },
      user: {
        input: 'file:7-camel-cards.user',
        result: 249776650,
      },
    },
    prepare,
    solve: solve({ rank: Hard.rank, cards: 'AKQT98765432J' }),
  },
});
