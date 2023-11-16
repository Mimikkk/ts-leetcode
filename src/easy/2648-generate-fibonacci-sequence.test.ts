import { exercise } from "@shared/utilities/exercise";

function* fibGenerator(): Generator<number, any, number> {
  let current = 0;
  let next = 1;

  let temp;
  while (true) {
    yield current;
    temp = current;
    current = next;
    next = temp + next;
  }
}

exercise(
  (n: number): number[] => {
    const generator = fibGenerator();

    const result = [];
    for (let i = 0; i < n; ++i) result.push(generator.next().value);

    return result;
  },
  [[[4], [0, 1, 1, 2]]],
);
