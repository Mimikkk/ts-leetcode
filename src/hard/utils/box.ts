import { Chalk } from "./chalk.js";
import { findMaxWidth, splitlines } from "./text.js";

enum Pipe {
  Horizontal = "─",
  Vertical = "│",
  TopLeft = "╭",
  TopRight = "╮",
  BottomRight = "╯",
  BottomLeft = "╰",
}

namespace Pipe {
  export const horizontal = (width: number) => Pipe.Horizontal.repeat(width);
}

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
