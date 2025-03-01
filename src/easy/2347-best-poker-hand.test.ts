import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


type Suit = "a" | "b" | "c" | "d";
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
type Card = [Rank, Suit];
type Hand = Tuple<Card, 5>;

export type Tuple<T, N extends number> = N extends N ? (number extends N ? T[] : _TupleOf<T, N, []>) : never;

type _TupleOf<T, N extends number, R extends unknown[]> = R["length"] extends N ? R : _TupleOf<T, N, [T, ...R]>;

namespace Hand {
  export const from = (ranks: Tuple<Rank, 5>, suits: Tuple<Suit, 5>): Hand =>
    ranks.map((rank, index) => [rank, suits[index]]) as Hand;

  export const isFlush = (hand: Hand) => {
    const [, firstSuit] = hand[0];
    return hand.every(([, suit]) => suit === firstSuit);
  };

  export const isThreeOfAKind = (hand: Hand) => {
    for (let i = 0; i < hand.length; ++i) {
      for (let j = i + 1; j < hand.length; ++j) {
        for (let k = j + 1; k < hand.length; ++k) {
          if (hand[i][0] === hand[j][0] && hand[i][0] === hand[k][0]) return true;
        }
      }
    }

    return false;
  };

  export const isPair = (hand: Hand) => {
    for (let i = 0; i < hand.length; ++i) {
      for (let j = i + 1; j < hand.length; ++j) {
        if (hand[i][0] === hand[j][0]) return true;
      }
    }

    return false;
  };
}

const bestHand = (ranks: Tuple<Rank, 5>, suits: Tuple<Suit, 5>) => {
  const hand = Hand.from(ranks, suits);

  if (Hand.isFlush(hand)) return "Flush";
  if (Hand.isThreeOfAKind(hand)) return "Three of a Kind";
  if (Hand.isPair(hand)) return "Pair";
  return "High Card";
};

describe("best hand", () => {
  it("case 1", () => {
    expect(bestHand([1, 2, 3, 4, 5], ["a", "a", "a", "a", "a"])).toEqual("Flush");
  });

  it("case 2", () => {
    expect(bestHand([1, 2, 3, 4, 5], ["a", "b", "c", "d", "a"])).toEqual("High Card");
  });

  it("case 3", () => {
    expect(bestHand([1, 1, 3, 4, 5], ["a", "b", "c", "d", "d"])).toEqual("Pair");
  });

  it("case 4", () => {
    expect(bestHand([1, 1, 1, 4, 5], ["a", "b", "c", "d", "d"])).toEqual("Three of a Kind");
  });
});