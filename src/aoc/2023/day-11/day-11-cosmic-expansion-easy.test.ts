import { findGalaxies, manhattan, parse } from './day-11-cosmic-expansion.utils.ts';
import { createDay } from '../../utils/createDay.ts';

const expansion = (input: string): number => {
  const map = parse(input);
  const galaxies = findGalaxies(map, 2);

  let distance = 0;
  for (let i = 0; i < galaxies.length; ++i) {
    for (let j = i + 1; j < galaxies.length; ++j) {
      distance += manhattan(galaxies[i], galaxies[j]);
    }
  }

  return distance;
};

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:day-11-cosmic-expansion.case',
        result: 374,
      },
      user: {
        input: 'file:day-11-cosmic-expansion.user',
        result: 9647174,
      },
    },
    prepare: (x) => x,
    solve: (input) => expansion(input),
  },
});
