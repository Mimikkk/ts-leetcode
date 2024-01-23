import { exercise } from "@shared/utilities/exercise.js";

const removeOccurrences = (s: string, part: string): string => {
  const partLength = part.length;
  const stack: string[] = [];

  for (let i = 0; i < s.length; ++i) {
    stack.push(s[i]);

    if (stack.length >= partLength) {
      const top = stack.slice(-partLength).join("");
      if (top === part) stack.splice(-partLength);
    }
  }

  return stack.join("");
};

exercise(removeOccurrences, [
  [["daabcbaabcbc", "abc"], "dab"],
  [["axxxxyyyyb", "xy"], "ab"],
]);
