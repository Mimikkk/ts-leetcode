import { createDay } from '../../utils/createDay.ts';

namespace Hand {
  const cards = 'AKQJT98765432';
  type Hand = { cards: string; values: Record<string, number> };

  const rank = (hand: Hand): number => {
    let [first, second] = Object.values(hand.values).sort((a, b) => b - a);

    switch (first) {
      case 5:
        return 6;
      case 4:
        return 5;
      case 3:
        return second === 2 ? 4 : 3;
      case 2:
        return second === 2 ? 2 : 1;
      default:
        return 0;
    }
  };

  export const read = (cards: string): Hand => {
    let hand: Hand = { cards, values: {} };
    for (let card of cards) hand.values[card] = (hand.values[card] || 0) + 1;
    return hand;
  };

  export const compare = (a: Hand, b: Hand): number => {
    let aRank = rank(a);
    let bRank = rank(b);
    if (aRank !== bRank) return aRank - bRank;

    for (let i = 0; i < 5; ++i) {
      const aIndex = cards.indexOf(a.cards[i]);
      const bIndex = cards.indexOf(b.cards[i]);
      if (aIndex === bIndex) continue;
      return bIndex - aIndex;
    }

    return 0;
  };
}

const camelCards = (input: string): number =>
  input
    .split(/\r?\n/)
    .filter((line) => line)
    .map((line) => line.split(/ +/))
    .map(([cards, pot]) => [Hand.read(cards), +pot] as const)
    .sort(([a], [b]) => Hand.compare(a, b))
    .map(([, pot], index) => [pot, index + 1] as const)
    .reduce((a, [value, rank]) => a + value * rank, 0);

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
    prepare: (x) => x,
    solve: (input) => camelCards(input),
  },
});
