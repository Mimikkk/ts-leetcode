import { exercise } from "@shared/utilities/exercise";
import UserCase from "./1-trebuchet.user.txt?raw";
import TestCase from "./1-trebuchet-easy.case.txt?raw";

namespace IterDigit {
  const is = (c: string): boolean => c >= "0" && c <= "9";

  export const first = (s: string): string => {
    let i = 0;
    while (i < s.length && !is(s[i])) ++i;
    return s[i];
  };
  export const last = (s: string): string => {
    let i = s.length - 1;
    while (i >= 0 && !is(s[i])) --i;
    return s[i];
  };
}

const iterTrebuchet = (input: string): number => {
  const lines = input.split("\r\n").filter((Line) => Line);

  let result = 0;
  for (const line of lines) {
    result += 10 * +IterDigit.first(line) + +IterDigit.last(line);
  }

  return result;
};

namespace FuncDigit {
  const is = (c: string): boolean => c >= "0" && c <= "9";

  export const first = (s: string[]): string => s.find(is)!;
  export const last = (s: string[]): string => s.reverse().find(is)!;
}
const funcTrebuchet = (input: string): number =>
  input
    .split("\r\n")
    .filter((Line) => Line)
    .map((line) => [...line])
    .map((line) => 10 * +FuncDigit.first(line) + +FuncDigit.last(line))
    .reduce((a, b) => a + b, 0);

exercise(iterTrebuchet, [
  [[TestCase], 142],
  [[UserCase], 55538],
]);

exercise(funcTrebuchet, [
  [[TestCase], 142],
  [[UserCase], 55538],
]);
