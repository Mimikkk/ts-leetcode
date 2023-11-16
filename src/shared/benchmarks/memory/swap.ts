import { Analyser } from "@shared/utilities/analyser";
import { setFlagsFromString } from "v8";

export namespace Swap {
  export const byDestruction = (numbers: { a: number; b: number }) => {
    [numbers.a, numbers.b] = [numbers.b, numbers.a];
  };
  export const byTemporary = (numbers: { a: number; b: number }) => {
    const temp = numbers.a;
    numbers.a = numbers.b;
    numbers.b = temp;
  };
}

const analyser = Analyser.create({ format: "KiB" });
const values = { a: 1, b: 2 };

setFlagsFromString("--gc-global");
setFlagsFromString("--expose-gc");
setFlagsFromString("--trace-gc");

console.log(analyser.bench(() => Swap.byDestruction(values), { iterations: 1e5, warmups: 1e5, withGc: true }));
console.log(analyser.bench(() => Swap.byTemporary(values), { iterations: 1e5, warmups: 1e5, withGc: true }));
