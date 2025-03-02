import { Counter } from './day-21-counter.utils.ts';
import { Position } from '../day-10/10-pipe-maze.utils.ts';
import { createDay } from '../../utils/createDay.ts';

const counter = (input: string, steps: number): number => {
  const [start, map] = Counter.parse(input);

  let level: Position[] = [start];

  const hash = ([x, y]: Position) => `${x},${y}`;
  for (let i = 0; i < steps; ++i) {
    const hashes = new Set<string>();
    const next = [];

    while (level.length) {
      const position = level.shift()!;

      for (const move of Counter.movement(map, position)) {
        const key = hash(move);
        if (hashes.has(key)) continue;
        hashes.add(key);

        next.push(move);
      }
    }

    level = next;
  }

  return level.length;
};

createDay({
  easy: {
    cases: {
      test1: {
        input: 'file:day-21-counter.case-1',
        result: 5,
        arguments: [6],
      },
      test2: {
        input: 'file:day-21-counter.case-2',
        result: 16,
        arguments: [6],
      },
      user: {
        input: 'file:day-21-counter.user',
        result: 3617,
        arguments: [64],
      },
    },
    prepare: (x) => x,
    solve: (input, steps) => counter(input, steps),
  },
});
