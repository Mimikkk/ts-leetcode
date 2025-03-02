import { Crucible } from './day-17-crucible.utils.ts';
import { createDay } from '../../utils/createDay.ts';

const crucible = (input: string): number => Crucible.search(Crucible.parse(input), 4, 10);

createDay({
  hard: {
    cases: {
      test1: {
        input: 'file:day-17-crucible.case-1',
        result: Infinity,
      },
      test2: {
        input: 'file:day-17-crucible.case-2',
        result: 94,
      },
      user: {
        input: 'file:day-17-crucible.user',
        result: 809,
      },
    },
    prepare: (x) => x,
    solve: (input) => crucible(input),
  },
});
