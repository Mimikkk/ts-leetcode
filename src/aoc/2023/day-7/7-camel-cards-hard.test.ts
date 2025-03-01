import { exercise } from "@shared/utilities/exercise.ts";
const TestCase = await Deno.readTextFile("./7-camel-cards.case.txt");
const UserCase = await Deno.readTextFile("./7-camel-cards.user.txt");

namespace Hand {
  const ranks = "AKQT98765432J";
  type Hand = { cards: string; values: Record<string, number> };

  const score = (hand: Hand) => {
    const [first, second] = Object.entries(hand.values)
      .filter(([card]) => card !== "J")
      .map(([, count]) => count)
      .sort((a, b) => b - a);

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

  const rank = (hand: Hand): number => {
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

              values[ak] = av + a;
              values[bk] = bv + b;
              values[ck] = cv + c;
              values[dk] = dv + d;
              values[ek] = ev + e;

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

    let value = score(hand);
    if (value > max) max = value;
    return max;
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

    for (let i = 0, it = a.cards.length; i < it; ++i) {
      aRank = ranks.indexOf(a.cards[i]);
      bRank = ranks.indexOf(b.cards[i]);
      if (aRank === bRank) continue;
      return bRank - aRank;
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

exercise(camelCards, [
  [[TestCase], 5905],
  [[UserCase], 249776650],
]);
