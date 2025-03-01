import { exercise } from "@shared/utilities/exercise.ts";
const TestCase = await Deno.readTextFile("./5-fertilizer.case.txt");
const UserCase = await Deno.readTextFile("./5-fertilizer.user.txt");

type SeedMap = [number, number, number];

export const parseFertilizer = (input: string): [number[], SeedMap[][]] => {
  const lines = input.split(/\r?\n/);

  const seeds = lines[0]
    .split(" ")
    .map((s) => +s)
    .slice(1);

  const maps: SeedMap[][] = Array(7);
  for (let i = 0; i < 7; ++i) maps[i] = [];
  for (let i = 3, j = 0, it = lines.length; i < it; i += 2, ++j) {
    while (lines[i] !== "" && i < it) maps[j].push(lines[i++].split(" ").map((s) => +s) as SeedMap);
  }

  return [seeds, maps] as const;
};

export const iterFertilizer = (input: string): number => {
  const [seeds, maps] = parseFertilizer(input);

  for (let i = 0, it = maps.length; i < it; ++i) {
    let map = maps[i];

    for (let j = 0, jt = seeds.length; j < jt; ++j) {
      let seed = seeds[j];

      let value: number | undefined = undefined;
      for (let k = 0, kt = map.length; k < kt; ++k) {
        const [destination, source, range] = map[k];

        if (seed < source || seed >= source + range) continue;
        value = destination + (seed - source);
      }
      if (value === undefined) value = seed;
      seeds[j] = value;
    }
  }

  let min = seeds[0];
  for (let i = 1, it = seeds.length; i < it; ++i) if (seeds[i] < min) min = seeds[i];

  return min;
};

const canMap = (seed: number, [, source, range]: SeedMap): boolean => seed >= source && seed < source + range;
const mapRange = (seed: number, [destination, source]: SeedMap): number => destination + (seed - source);

export const funcFertilizer = (input: string): number => {
  let [seeds, maps] = parseFertilizer(input);

  return Math.min(
    ...maps.reduce(
      (seeds, map) => seeds.map((seed) => mapRange(seed, map.find((range) => canMap(seed, range)) ?? [seed, seed, 0])),
      seeds,
    ),
  );
};

exercise(iterFertilizer, [
  [[TestCase], 35],
  [[UserCase], 199602917],
]);

exercise(funcFertilizer, [
  [[TestCase], 35],
  [[UserCase], 199602917],
]);
