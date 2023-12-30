import { splitlines } from "./text.js";
import { Pipe } from "./pipe.js";

export namespace Tree {
  const justLeft = (text: string, width: number, fill: string = " ") =>
    text + fill.repeat(Math.max(0, width - text.length));

  const join = (parent: string[], left: string[], right: string[], leftWidth: number, gapWidth: number): string => {
    const gap = " ".repeat(gapWidth);

    const lines = [...parent];
    let max = Math.max(left.length, right.length);
    for (let i = 0; i < max; ++i) lines.push(justLeft(left[i] ?? "", leftWidth) + gap + right[i] ?? "");

    return lines.map((line) => line.trimEnd()).join("\n");
  };

  const findLeftPad = (text: string): number => text.length - text.trimStart().length;
  const findRightPad = (text: string): number => text.trimEnd().length;
  const findTextSpan = (text: string): [left: number, center: number, right: number] => {
    const right = text.replace(endRegexp, "").length;
    const left = text.length - text.replace(startRegexp, "").length;

    return [left, ~~((left + right) / 2), right];
  };

  const padSentences = (lines: string[], padLeft: number, padRight: number): string[] => {
    const nonEmptyLines = lines.filter((line) => line.trim());
    const columnLeft = nonEmptyLines.length ? Math.min(...nonEmptyLines.map(findLeftPad)) : 0;
    const columnRight = nonEmptyLines.length ? Math.max(...nonEmptyLines.map(findRightPad)) : 0;

    const trimLeft = Math.max(columnLeft - padLeft, 0);
    const pad = " ".repeat(Math.max(padLeft - columnLeft, 0));

    return lines.map((line) => pad + justLeft(line.slice(trimLeft).trimEnd(), columnRight + padRight));
  };

  const _str = Pipe.Horizontal + Pipe.TopLeft + Pipe.TopRight + " ";
  const startRegexp = new RegExp(`^[${_str}]+`, "g");
  const endRegexp = new RegExp(`[${_str}]+$`, "g");

  export const edge = (parent: string, left?: string, right?: string): string => {
    const hasLeft = left !== undefined;
    const hasRight = right !== undefined;
    left ??= "";
    right ??= "";

    const linesLeft = padSentences(splitlines(left), 0, 1);
    const linesRight = padSentences(splitlines(right), 1, 0);
    let linesParent = splitlines(parent);

    const widthLeft = linesLeft[0]?.length ?? 0;
    const widthGap = 1;
    const [a_l, a_c] = findTextSpan(linesLeft[0] ?? "");
    const [, b_c, b_r] = findTextSpan(linesRight[0] ?? "");

    const widthParent = Math.max(...linesParent.map((line) => line.length));
    const leftPadParent = ~~((a_l + widthLeft + b_r) / 2) - ~~(widthParent / 2);
    linesParent = padSentences(linesParent, leftPadParent, 0);

    let leftTop = justLeft(" ".repeat(a_c) + Pipe.TopLeft, leftPadParent, Pipe.Horizontal);
    leftTop = hasLeft ? leftTop : justLeft("", leftPadParent);

    let rightTop = Pipe.Horizontal.repeat(widthLeft + widthGap + b_c - leftPadParent - widthParent) + Pipe.TopRight;
    rightTop = hasRight ? rightTop : "";

    const skip = leftTop.length;

    linesParent[linesParent.length - 1] =
      leftTop + linesParent[linesParent.length - 1].slice(skip, skip + widthParent) + rightTop;

    return join(linesParent, linesLeft, linesRight, widthLeft, widthGap);
  };
}
