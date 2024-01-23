import { exercise } from "@shared/utilities/exercise.js";

const regex = /(\w)\1*/g;
const createMapping = (word: string): [number, number][] => {
  const mapping = new Map<string, number>();

  return (
    word.match(regex)?.map(({ 0: c, length }) => {
      let value = mapping.get(c);
      if (value !== undefined) return [value, length];

      value = mapping.size;
      mapping.set(c, value);
      return [value, length];
    }) ?? []
  );
};

const findAndReplacePattern = (words: string[], pattern: string): string[] => {
  words = words.filter((w) => w.length === pattern.length);

  const patternMapping = createMapping(pattern);
  const compareMapping = (word: string): boolean => {
    const wordMapping = createMapping(word);
    if (wordMapping.length !== patternMapping.length) return false;

    for (let i = 0; i < wordMapping.length; i++) {
      if (wordMapping[i][0] !== patternMapping[i][0]) return false;
      if (wordMapping[i][1] !== patternMapping[i][1]) return false;
    }

    return true;
  };
  words = words.filter(compareMapping);

  return words;
};

exercise(findAndReplacePattern, [
  [
    [["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb"],
    ["mee", "aqq"],
  ],
  [
    [["abcc", "degq", "meee", "aqqa", "dkkd", "cccc"], "abba"],
    ["aqqa", "dkkd"],
  ],
  [
    [["a", "b", "c"], "a"],
    ["a", "b", "c"],
  ],
]);
