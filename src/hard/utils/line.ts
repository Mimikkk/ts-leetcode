import { Pipe } from './pipe.ts';
import { ListNode } from '@shared/structures/index.ts';
import { Chalk } from './chalk.ts';
import { Color, createCounter, createMatrix } from '../../aoc/2023/utils/utils.ts';

export namespace Line {
  export const repr = (node: ListNode | null, nodes?: ([ListNode, Color] | ListNode)[]): string => {
    if (!node) return '';
    if (!nodes) return repr(node, []);

    const { Horizontal, BottomRight, BottomLeft, horizontal, TopRight } = Pipe;
    const array: ListNode[] = ListNode.list(node);
    const positionsMap = new Map<ListNode, number>();

    let offset = 0;
    for (const [node, length] of array.map((node) => [node, `${node.val}`.length] as const)) {
      positionsMap.set(node, offset + ~~((length - 1) / 2));
      offset += length + 1;
    }

    const pointers = nodes
      .map((node) => (Array.isArray(node) ? node : ([node] as const)))
      .map(([node, color]) => [positionsMap.get(node)!, color ? Chalk.chalk('^', color) : '^'] as const);

    const arrows = [array.map((node) => node.val).join(Horizontal)];

    if (ListNode.hasCycle(node)) {
      arrows[0] = arrows[0] + TopRight;
      const i = positionsMap.get(ListNode.cycleAt(node)!)!;
      arrows[1] = ' '.repeat(i) + BottomLeft + horizontal(Chalk.clear(arrows[0]).length - i - 2) + BottomRight;
    }

    const counter = createCounter(pointers.map(([pointer]) => pointer));
    const cursors = createMatrix(Math.max(...counter.values(), 0), Chalk.clear(arrows[0]).length, ' ');
    for (const [pointer, cursor] of pointers) {
      for (let i = 0; i < counter.get(pointer)!; ++i) {
        if (cursors[i][pointer] !== ' ') continue;
        cursors[i][pointer] = cursor;
        break;
      }
    }

    return arrows.concat(cursors.map((c) => c.join('').trimEnd())).join('\n');
  };
}
