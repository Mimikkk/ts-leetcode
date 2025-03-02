import { Pulse } from './day-20-pulse.utils.ts';
import { createDay } from '../../utils/createDay.ts';

const pulse = (input: string): number => {
  const modules = Pulse.parse(input);
  const broadcaster = modules.find(({ name }) => name === 'broadcaster')!;

  let lowCount = 0;
  let highCount = 0;
  const handleClick = () => {
    const stack: [Pulse.Module | null, Pulse.Module, Pulse.Signal][] = [[null, broadcaster, 'low']];

    while (stack.length) {
      const [from, to, signal] = stack.shift()!;

      if (signal === 'high') ++highCount;
      else ++lowCount;

      stack.push(...Pulse.propagate(from, to, signal));
    }
  };

  let count = 1000;
  while (count--) handleClick();

  return lowCount * highCount;
};

createDay({
  easy: {
    cases: {
      test1: {
        input: 'file:day-20-pulse.case-1',
        result: 32000000,
      },
      test2: {
        input: 'file:day-20-pulse.case-2',
        result: 11687500,
      },
      user: {
        input: 'file:day-20-pulse.user',
        result: 788081152,
      },
    },
    prepare: (x) => x,
    solve: (input) => pulse(input),
  },
});
