import { exercise } from "@shared/utilities/exercise.ts";

const deckRevealedIncreasing = (deck: number[]): number[] => {
  const stack = deck.sort((a, b) => b - a);
  const queue = [stack.shift()!];

  while (stack.length > 0) {
    queue.unshift(queue.pop()!);
    queue.unshift(stack.shift()!);
  }

  return queue;
};

exercise(deckRevealedIncreasing, [
  [[[17, 13, 11, 2, 3, 5, 7]], [2, 13, 3, 11, 5, 17, 7]],
  [[[1, 1000]], [1, 1000]],
]);
