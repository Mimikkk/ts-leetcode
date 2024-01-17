import { splitlines } from "./text.js";
import { Pipe } from "./pipe.js";
import { ListNode, TreeNode } from "@shared/structures/index.js";
import { Chalk } from "./chalk.js";
import { Color, createMatrix } from "../../adventofcode2023/utils/utils.js";

export namespace Tree {
  const justLeft = (text: string, width: number, fill: string = " ") =>
    text + fill.repeat(Math.max(0, width - text.length));

  const join = (parent: string[], left: string[], right: string[], leftWidth: number, gapWidth: number): string => {
    const gap = " ".repeat(gapWidth);

    const lines = [...parent];
    let max = Math.max(left.length, right.length);
    for (let i = 0; i < max; ++i) lines.push(justLeft(left[i] ?? "", leftWidth) + gap + (right[i] ?? ""));
    return lines
      .map((line) => line.trimEnd())
      .filter((line) => line)
      .join("\n");
  };

  const findLeftPad = (text: string): number => {
    const clear = Chalk.clear(text);

    return clear.length - clear.trimStart().length;
  };
  const findRightPad = (text: string): number => Chalk.clear(text).trimEnd().length;
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

  const { Horizontal, TopLeft, TopRight, horizontal } = Pipe;
  const _str = Horizontal + TopLeft + TopRight + " ";
  const startRegexp = new RegExp(`^[${_str}]+`, "g");
  const endRegexp = new RegExp(`[${_str}]+$`, "g");

  const edge = (parent: string, left?: string, right?: string): string => {
    const hasLeft = left !== undefined;
    const hasRight = right !== undefined;
    left ??= "";
    right ??= "";

    const originalParent = parent;

    parent = Chalk.clear(parent);
    const linesLeft = padSentences(splitlines(left), 0, 1);
    const linesRight = padSentences(splitlines(right), 1, 0);
    let linesParent = splitlines(parent);

    const clearLeft = Chalk.clear(linesLeft[0] ?? "");
    const clearRight = Chalk.clear(linesRight[0] ?? "");

    const widthLeft = clearLeft.length;
    const [a_l, a_c] = findTextSpan(clearLeft);
    const [, b_c, b_r] = findTextSpan(clearRight);

    const widthParent = Math.max(...linesParent.map((line) => line.length));
    const leftPadParent = ~~((a_l + widthLeft + b_r) / 2) - ~~(widthParent / 2);
    linesParent = padSentences(linesParent, leftPadParent, 0);

    const leftTop = hasLeft
      ? justLeft(" ".repeat(a_c) + TopLeft, leftPadParent, Horizontal)
      : justLeft("", leftPadParent);

    const widthGap = 1;
    const rightTop = hasRight ? horizontal(widthLeft + widthGap + b_c - leftPadParent - widthParent) + TopRight : "";

    linesParent[linesParent.length - 1] = leftTop + originalParent + rightTop;

    return join(linesParent, linesLeft, linesRight, widthLeft, widthGap);
  };

  export namespace Color {
    export type ColorFn = (node: TreeNode, depth: number) => string;

    export const natural: ColorFn = ({ val }) => `${val}`;

    export const create =
      (color: Chalk.Color): ColorFn =>
      ({ val }) =>
        Chalk.chalk(`${val}`, color);
  }

  export const repr = (
    root: null | TreeNode,
    valueFn: (node: TreeNode, depth: number) => string = Color.natural,
  ): string => {
    const traverse = (node: null | TreeNode, depth: number): string | undefined =>
      node ? edge(valueFn(node, depth), traverse(node.left, depth + 1), traverse(node.right, depth + 1)) : undefined;

    return traverse(root, 0) ?? "";
  };
}

export namespace Line {
  export const repr = (line: ListNode, nodes: [ListNode, Color][]) => {
    const array: ListNode[] = [];
    let current: ListNode | null = line;
    while (current) {
      array.push(current);
      current = current.next;
    }

    const cursors = nodes.map(([node, color]) => [array.indexOf(node) * 3, color] as const);
    const arrowLine = array.map((node) => node.val).join("->");
    const pointers = cursors.map(([pointer, color]) => [pointer, Chalk.chalk("^", color)] as const);

    let counter = new Map<number, number>();
    pointers.forEach(([pointer]) => counter.set(pointer, (counter.get(pointer) ?? 0) + 1));

    let lineCount = Math.max(...counter.values());

    const result = createMatrix(lineCount, arrowLine.length, " ");

    for (const [pointer, cursor] of pointers) {
      for (let i = 0; i < counter.get(pointer)!; ++i) {
        if (result[i][pointer] !== " ") continue;
        result[i][pointer] = cursor;
        break;
      }
    }

    return [arrowLine, ...result.map((line) => line.join(""))].join("\n");
  };
}
