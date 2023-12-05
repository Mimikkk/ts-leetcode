import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./5-fertilizer.case.txt?raw";
import UserCase from "./5-fertilizer.user.txt?raw";
import { parseFertilizer } from "./5-fertilizer-easy.test.js";

export const iterFertilizer = (input: string): number => {
  let [seeds, maps] = parseFertilizer(input);

  let ranges: [number, number][] = Array(seeds.length / 2);
  for (let i = 0; i < seeds.length; i += 2) ranges[i / 2] = [seeds[i], seeds[i + 1]];

  for (const map of maps) {
    const next: [number, number][] = [];

    inner: for (const [start, end] of ranges) {
      for (const [destination, source, range] of map) {
        if (!(start < source + range && source < start + end)) continue;
        const max = Math.max(start, source);
        const min = Math.min(start + end, source + range) - max;

        next.push([max - source + destination, min]);
        if (max > start || max + min < start + end)
          ranges.push([start, max - start], [max + min, start + end - max - min]);

        continue inner;
      }

      next.push([start, end]);
    }

    ranges = next;
  }

  return Math.min(...ranges.map(([s]) => s));
};

exercise(iterFertilizer, [
  [[TestCase], 46],
  [[UserCase], 2254686],
]);
