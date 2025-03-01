import { Chalk } from "./chalk.ts";
import { findMaxWidth, splitlines } from "./text.ts";
import { Pipe } from "./pipe.ts";

export const box = (text: string, left: number = 0, right: number = left): string => {
  const { TopLeft, TopRight, BottomRight, BottomLeft, Vertical, horizontal } = Pipe;

  const lines = splitlines(text);
  const width = findMaxWidth(splitlines(Chalk.clear(text)));

  const line = horizontal(width + left + right);
  const leftPad = " ".repeat(left);
  const rightPad = " ".repeat(right);

  return [
    TopLeft + line + TopRight,
    ...lines.map((line) => Vertical + leftPad + line + rightPad + Vertical),
    BottomLeft + line + BottomRight,
  ].join("\n");
};
