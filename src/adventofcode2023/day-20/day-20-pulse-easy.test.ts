import { exercise } from "@shared/utilities/exercise.js";
import Test1Case from "./day-20-pulse.case-1.txt?raw";
import Test2Case from "./day-20-pulse.case-2.txt?raw";
import UserCase from "./day-20-pulse.user.txt?raw";
import { Pulse } from "./day-20-pulse.utils.js";

const pulse = (input: string): number => {
  const map = Pulse.parse(input);


  let lowCount = 0;
  let highCount = 0;
  const pushbutton = () => {
    const stack: [Pulse.Module, Pulse.Module, Pulse.Signal][] = [[undefined!, map.get("broadcaster")!, "low"]];

    while (stack.length) {
      let [from, to, signal] = stack.shift()!;

      if (signal === "high") ++highCount;
      else ++lowCount;

      if (to) stack.push(...Pulse.propagate(map, from, to, signal));
    }
  };

  let count = 1000;
  while (count--) pushbutton();
  return lowCount * highCount;
};


exercise(pulse, [
  [[Test1Case], 32000000],
  [[Test2Case], 11687500],
  [[UserCase], 788081152],
]);
