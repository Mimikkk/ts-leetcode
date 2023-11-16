import { setFlagsFromString } from "v8";
import { bench } from "vitest";
import { Analyser } from "@shared/utilities/analyser";
import { runInNewContext } from "vm";

function* fibGenerator1(): Generator<number, any, number> {
  let current = 0;
  let next = 1;

  let temp;
  while (true) {
    yield current;
    temp = current;
    current = next;
    next = temp + next;
  }
}
function* fibGenerator2(): Generator<number, any, number> {
  let current = 0;
  let next = 1;

  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

describe("swapping variables with descructuring", async () => {
  let analyser = Analyser.create({ format: "B" });
  setFlagsFromString("--expose-gc");

  const gc = runInNewContext("gc");

  // bench(
  //   "1",
  //   () => {
  //     const gen = fibGenerator1();
  //     for (let i = 0; i < 1e5; ++i) gen.next().value;
  //   },
  //   {
  //     ...Analyser.inject(analyser, "classic-swap"),
  //     iterations: 1,
  //     warmupIterations: 100,
  //   },
  // );

  // bench(
  //   "2",
  //   () => {
  //     const gen = fibGenerator2();
  //     for (let i = 0; i < 1e5; ++i) gen.next().value;
  //   },
  //   {
  //     ...Analyser.inject(analyser, "destruct-swap"),
  //     iterations: 1,
  //     warmupIterations: 100,
  //   },
  // );
  const gen = fibGenerator2();
  await gc();

  analyser.start();
  // for (let i = 0; i < 1e5; ++i) gen.next().value;
  analyser.end();

  console.log(analyser.difference);
});
