import { exercise } from "@shared/utilities/exercise";
import UserCase from "./1-trebuchet.user.txt?raw";
import TestCase from "./1-trebuchet-easy.case.txt?raw";

namespace Digit {
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

const trebuchet = (input: string): number => {
  const lines = input.split("\r\n").filter((Line) => Line);

  let result = 0;
  const { first, last } = Digit;
  for (const line of lines) {
    result += +`${first(line)}${last(line)}`;
  }

  return result;
};

exercise(trebuchet, [
  [[TestCase], 142],
  [[UserCase], 55538],
]);
