import { exercise } from "@shared/utilities/exercise.ts";
const UserCase = await Deno.readTextFile("./day-20-pulse.user.txt");
import { Pulse } from "./day-20-pulse.utils.ts";
import { memoize } from "../utils/utils.ts";

const gcd = memoize((a: number, b: number): number => (b ? gcd(b, a % b) : a));
const lcd = memoize((a: number, b: number): number => (a * b) / gcd(a, b));
const lcds = (...nums: number[]): number => nums.reduce(lcd, 1);

const pulse = (input: string): number => {
  const modules = Pulse.parse(input);

  const broadcaster = modules.find(({ name }) => name === "broadcaster")!;
  const rxFeeder = modules.find(({ destinations }) => destinations.some(({ name }) => name === "rx"))!;

  const lengths = new Map(
    modules.filter(({ destinations }) => destinations.includes(rxFeeder)).map((module) => [module, 0]),
  );

  type State = [Pulse.Module | null, Pulse.Module, Pulse.Signal];
  const initial = [null, broadcaster, "low"] as State;

  const stack: State[] = [];

  let count = 0;
  while (true) {
    ++count;
    stack.push(initial);

    while (stack.length) {
      const [from, to, signal] = stack.shift()!;

      if (from && to === rxFeeder && signal === "high" && !lengths.get(from)) {
        lengths.set(from, count);

        const values = [...lengths.values()];
        if (values.every((v) => v)) return lcds(...values);
      }

      stack.push(...Pulse.propagate(from, to, signal));
    }
  }
};

exercise(pulse, [[[UserCase], 224602011344203]]);
