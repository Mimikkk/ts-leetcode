import { Lens } from './day-15-lens.utils.ts';
import { range } from '../../utils/utils.ts';
import { createDay } from '../../utils/createDay.ts';

const lens = (input: string): number => {
  const operations = Lens.operations(Lens.parse(input));
  const boxes = range(0, 255).map<[string, number][]>(() => []);

  for (const [label, operation, focus] of operations) {
    const box = boxes[Lens.hash(label)];

    switch (operation) {
      case '=': {
        const index = box.findIndex(([l]) => l === label);
        if (index !== -1) box[index] = [label, focus];
        else box.push([label, focus]);
        break;
      }
      case '-': {
        const index = box.findIndex(([l]) => l === label);
        if (index !== -1) box.splice(index, 1);
        break;
      }
    }
  }

  let total = 0;
  for (let i = 0, it = boxes.length; i < it; ++i) {
    for (let j = 0, jt = boxes[i].length; j < jt; ++j) {
      total += (i + 1) * (j + 1) * boxes[i][j][1];
    }
  }

  return total;
};

createDay({
  hard: {
    cases: {
      test: {
        input: 'file:day-15-lens.case',
        result: 145,
      },
      user: {
        input: 'file:day-15-lens.user',
        result: 244461,
      },
    },
    prepare: (x) => x,
    solve: (input) => lens(input),
  },
});
