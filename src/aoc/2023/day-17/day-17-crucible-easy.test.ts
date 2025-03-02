import { Crucible } from './day-17-crucible.utils.ts';
import { createDay } from '../../utils/createDay.ts';

const crucible = (input: string): number => Crucible.search(Crucible.parse(input), 1, 3);

createDay({
  easy: {
    cases: {
      test1: {
        input: 'file:day-17-crucible.case-1.txt',
        result: 3,
      },
      test2: {
        input: 'file:day-17-crucible.case-2.txt',
        result: 102,
      },
      user: {
        input: 'file:day-17-crucible.user.txt',
        result: 665,
      },
    },
    prepare: (x) => x,
    solve: (input) => crucible(input),
  },
});
