import { exercise } from "@shared/utilities/exercise.js";

const enum MatchResult {
  Draw = 0,
  First = 1,
  Second = 2,
}

const scoreMatch = (scores: number[]) => {
  let timeSinceStrike = 3;
  let result = 0;

  for (const score of scores) {
    if (timeSinceStrike <= 2) result += 2 * score;
    else result += score;

    if (score === 10) timeSinceStrike = 0;
    ++timeSinceStrike;
  }

  return result;
};

const isWinner = (player1: number[], player2: number[]): MatchResult => {
  const firstScore = scoreMatch(player1);
  const secondScore = scoreMatch(player2);

  return firstScore === secondScore
    ? MatchResult.Draw
    : firstScore > secondScore
      ? MatchResult.First
      : MatchResult.Second;
};

exercise(isWinner, [
  [
    [
      [4, 10, 7, 9],
      [6, 5, 2, 3],
    ],
    MatchResult.First,
  ],
  [
    [
      [3, 6, 10, 8], // 35
      [9, 9, 9, 9], // 36
    ],
    MatchResult.Second,
  ],
  [
    [
      [3, 5, 7, 6],
      [8, 10, 10, 2],
    ],
    MatchResult.Second,
  ],
  [
    [
      [2, 3],
      [4, 1],
    ],
    MatchResult.Draw,
  ],
  [
    [
      [10, 2, 2, 3],
      [3, 8, 4, 5],
    ],
    MatchResult.First,
  ],
]);
