import { exercise } from "@shared/utilities/exercise.js";
import UserCase from "./day-20-pulse.user.txt?raw";
import { Pulse } from "./day-20-pulse.utils.js";

const pulse = (input: string): number => {
  const map = Pulse.parse(input, true);


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

  let count = 1000;
  while (count--) pushbutton();
  return Math.min(...times);
};


exercise(pulse, [
  [[UserCase], 788081152],
]);
