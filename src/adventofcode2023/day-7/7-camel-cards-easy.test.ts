import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./7-camel-cards.case.txt?raw";
import UserCase from "./7-camel-cards.user.txt?raw";

const cards = "AKQJT98765432";
type Hand = Record<string, number>;

const readHand = (hand: string): Hand => {
  let counter: Hand = {};
  for (let card of hand) counter[card] = (counter[card] || 0) + 1;
  return counter;
};

const rankHand = (hand: Hand): number => {
  let [first, second] = Object.values(hand).sort((a, b) => b - a);

  const rank = () => {
    if (first === 5) return 6;
    if (first === 4) return 5;
    if (first === 3) return second === 2 ? 4 : 3;
    if (first === 2) return second === 2 ? 2 : 1;
    return 0;
  };

  return rank();
};

const camelCards = (input: string): number => {
  const hands = input
    .split(/\r?\n/)
    .filter((line) => line)
    .map((line) => line.split(/ +/))
    .map(([cards, pot]) => [cards, +pot] as const)
    .sort(([a], [b]) => {
      let aRank = rankHand(readHand(a));
      let bRank = rankHand(readHand(b));
      if (aRank !== bRank) return aRank - bRank;

      for (let i = 0; i < 5; ++i) {
        const aIndex = cards.indexOf(a[i]);
        const bIndex = cards.indexOf(b[i]);
        if (aIndex === bIndex) continue;
        return bIndex - aIndex;
      }

      return 0;
    })
    .map(([, pot], index) => [pot, index + 1] as const);

  return hands.reduce((a, [value, rank]) => a + value * rank, 0);
};

exercise(camelCards, [
  [[TestCase], 6440],
  [[UserCase], 249638405],
]);
