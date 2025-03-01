import { exercise } from "@shared/utilities/exercise.ts";
const Test1Case = await Deno.readTextFile("./day-20-pulse.case-1.txt");
const Test2Case = await Deno.readTextFile("./day-20-pulse.case-2.txt");
const UserCase = await Deno.readTextFile("./day-20-pulse.user.txt");
import { Pulse } from "./day-20-pulse.utils.ts";

const pulse = (input: string): number => {
  const modules = Pulse.parse(input);
  const broadcaster = modules.find(({ name }) => name === "broadcaster")!;

  let lowCount = 0;
  let highCount = 0;
  const handleClick = () => {
    const stack: [Pulse.Module | null, Pulse.Module, Pulse.Signal][] = [[null, broadcaster, "low"]];

    while (stack.length) {
      const [from, to, signal] = stack.shift()!;

      if (signal === "high") ++highCount;
      else ++lowCount;

      stack.push(...Pulse.propagate(from, to, signal));
    }
  };

  let count = 1000;
  while (count--) handleClick();

  return lowCount * highCount;
};

exercise(pulse, [
  [[Test1Case], 32000000],
  [[Test2Case], 11687500],
  [[UserCase], 788081152],
]);
