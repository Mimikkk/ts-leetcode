import { exercise } from "@shared/utilities/exercise";

const equalFrequency = (word: string): boolean => {
  for (let i = 0; i < word.length; i++) {
    const counter = new Map<string, number>();

    for (let j = 0; j < word.length; j++) {
      if (j == i) continue;
      counter.set(word[j], (counter.get(word[j]) || 0) + 1);
    }

    if (new Set(counter.values()).size == 1) return true;
  }

  return false;
};

exercise(equalFrequency, [
  [["abcc"], true],
  [["aazz"], false],
]);
