import { exercise } from "@shared/utilities/exercise.js";
import UserCase from "./day-20-pulse.user.txt?raw";
import { Pulse } from "./day-20-pulse.utils.js";
import { memoize } from "../utils/utils.js";

const gcd = memoize((a: number, b: number): number => (b === 0 ? a : gcd(b, a % b)));
const lcm = memoize((a: number, b: number): number => (a * b) / gcd(a, b));

const pulse = (input: string): number => {
  const map = Pulse.parse(input);

  let rxFeeder: Pulse.Module;
  for (const module of map.values()) {
    if (module.destinations.some(({ name }) => name === "rx")) {
      rxFeeder = module;
      break;
    }
  }

  let times: number[] = [];
  const pushbutton = () => {
    const stack: [Pulse.Module, Pulse.Module, Pulse.Signal][] = [[undefined!, map.get("broadcaster")!, "low"]];

    let count = 0;
    let timeToHit = 0;
    while (stack.length) {
      const [from, to, signal] = stack.shift()!;

      ++count;
      if (to?.name === "rx" && timeToHit === 0) timeToHit = count;

      if (to) stack.push(...Pulse.propagate(map, from, to, signal));
    }

    times.push(timeToHit);
  };

  pushbutton();
  console.log(times);

  return Math.min(...times);
};

exercise(pulse, [[[UserCase], 788081152]]);
