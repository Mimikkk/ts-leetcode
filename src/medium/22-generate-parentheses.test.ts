import { exercise } from "@shared/utilities/exercise.js";

const generateParenthesis = (n: number): string[] => {
  const result: string[] = [];
  const generate = (s: string, open: number, close: number) => {
    if (s.length === n * 2) return result.push(s);

    if (open < n) generate(`${s}(`, open + 1, close);
    if (close < open) generate(`${s})`, open, close + 1);
  };

  generate("", 0, 0);

  return result;
};

exercise(generateParenthesis, [
  [[3], ["((()))", "(()())", "(())()", "()(())", "()()()"]],
  [[1], ["()"]],
]);
