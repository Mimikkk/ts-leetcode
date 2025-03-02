import { findGalaxies, manhattan, parse } from './day-11-cosmic-expansion.utils.ts';
import { createDay } from '../../utils/createDay.ts';

const expansion = (input: string): number => {
  const map = parse(input);
  const galaxies = findGalaxies(map, 1_000_000);

  let distance = 0;
  for (let i = 0; i < galaxies.length; ++i) {
    for (let j = i + 1; j < galaxies.length; ++j) {
      distance += manhattan(galaxies[i], galaxies[j]);
    }
  }

  return distance;
};

createDay({
  hard: {
    cases: {
      test: {
        input: 'file:day-11-cosmic-expansion.case',
        result: 82000210,
      },
      user: {
        input: 'file:day-11-cosmic-expansion.user',
        result: 377318892554,
      },
    },
    prepare: (x) => x,
    solve: (input) => expansion(input),
  },
});
