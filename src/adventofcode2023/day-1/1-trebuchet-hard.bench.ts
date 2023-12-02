import TestCase from "./1-trebuchet-hard.case.txt?raw";
import { bench } from "vitest";

namespace IterDigit {
  const digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"] as const;
  const DigitCount = 10;
  const is = (c: string): boolean => c >= "0" && c <= "9";

  const find = (line: string, i: number): number | undefined => {
    if (is(line[i])) return +line[i];

    for (let j = 0; j < DigitCount; ++j) {
      const end = i + digits[j].length - 1;
      if (end >= line.length) continue;

      let start = i;
      while (start <= end && line[start] === digits[j][start - i]) ++start;
      if (start <= end) continue;

      return j;
    }
  };

  export const first = (line: string): number => {
    for (let i = 0; i < line.length; ++i) {
      let result = find(line, i);
      if (result !== undefined) return result;
    }

    return undefined!;
  };

  export const last = (line: string): number => {
    for (let i = line.length; i >= 0; --i) {
      let result = find(line, i);
      if (result !== undefined) return result;
    }

    return undefined!;
  };
}

const iterTrebuchet = (input: string): number => {
  const lines = input.split("\r\n").filter((Line) => Line);

  let result = 0;
  const { first, last } = IterDigit;
  for (const line of lines) result += 10 * first(line) + last(line);

  return result;
};

namespace FuncDigit {
  const DigitStrings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"] as const;
  const Characters = "0123456789";

  export const first = (line: string): number => {
    for (let i = 0; i < line.length; ++i) {
      if (Characters.includes(line[i])) return +line[i];

      let digit = DigitStrings.findIndex((digit) => line.substring(i).startsWith(digit));
      if (digit !== -1) return digit;
    }

    return undefined!;
  };

  export const last = (line: string): number => {
    for (let i = line.length; i >= 0; --i) {
      if (Characters.includes(line[i])) return +line[i];

      let digit = DigitStrings.findIndex((digit) => line.substring(i).startsWith(digit));
      if (digit !== -1) return digit;
    }

    return undefined!;
  };
}
const funcTrebuchet = (input: string): number =>
  input
    .split("\r\n")
    .filter((Line) => Line)
    .reduce((result, line) => result + 10 * FuncDigit.first(line) + FuncDigit.last(line), 0);

describe("Benchmark - Trebuchet", () => {
  bench("Functional", () => {
    funcTrebuchet(TestCase);
  });

  bench("Iterative", () => {
    iterTrebuchet(TestCase);
  });
});
