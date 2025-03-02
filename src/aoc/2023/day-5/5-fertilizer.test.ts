import { createDay } from '../../utils/createDay.ts';
import { Str } from '../../utils/ns/str.ts';

type SeedMap = [number, number, number];

export const parseInput = (input: string): [number[], SeedMap[][]] => {
  const lines = Str.trimlines(input);

  const seeds = lines[0]
    .split(' ')
    .map((s) => +s)
    .slice(1);

  const maps: SeedMap[][] = Array(7);
  for (let i = 0; i < 7; ++i) maps[i] = [];
  for (let i = 3, j = 0, it = lines.length; i < it; i += 2, ++j) {
    while (lines[i] !== '' && i < it) maps[j].push(lines[i++].split(' ').map((s) => +s) as SeedMap);
  }

  return [seeds, maps] as const;
};
type Input = ReturnType<typeof parseInput>;

export const easy = ([seeds, maps]: Input): number => {
  for (let i = 0, it = maps.length; i < it; ++i) {
    const map = maps[i];

    for (let j = 0, jt = seeds.length; j < jt; ++j) {
      const seed = seeds[j];

      let value: number | undefined;
      for (let k = 0, kt = map.length; k < kt; ++k) {
        const [destination, source, range] = map[k];

        if (seed < source || seed >= source + range) continue;
        value = destination + (seed - source);
      }
      if (value === undefined) value = seed;
      seeds[j] = value;
    }
  }

  return Math.min(...seeds);
};

export const hard = ([seeds, maps]: Input): number => {
  let ranges: [number, number][] = Array(seeds.length / 2);
  for (let i = 0; i < seeds.length; i += 2) ranges[i / 2] = [seeds[i], seeds[i + 1]];

  for (const map of maps) {
    const next: [number, number][] = [];

    ranges: for (const [start, end] of ranges) {
      for (const [destination, source, range] of map) {
        if (!(start < source + range && source < start + end)) continue;
        const max = Math.max(start, source);
        const min = Math.min(start + end, source + range) - max;

        next.push([max - source + destination, min]);
        if (max > start || max + min < start + end) {
          ranges.push([start, max - start], [max + min, start + end - max - min]);
        }

        continue ranges;
      }

      next.push([start, end]);
    }

    ranges = next;
  }

  return Math.min(...ranges.map(([s]) => s));
};

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:5-fertilizer.case',
        result: 35,
      },
      user: {
        input: 'file:5-fertilizer.user',
        result: 199602917,
      },
    },
    prepare: parseInput,
    solve: easy,
  },
  hard: {
    cases: {
      test: {
        input: 'file:5-fertilizer.case',
        result: 46,
      },
      user: {
        input: 'file:5-fertilizer.user',
        result: 2254686,
      },
    },
    prepare: parseInput,
    solve: hard,
  },
});
