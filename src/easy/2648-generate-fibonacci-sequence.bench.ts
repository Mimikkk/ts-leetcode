import { bench } from "vitest";

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

describe("abc", () => {
  const gen1 = fibGenerator1();
  const gen2 = fibGenerator2();

  bench(
    "1",
    () => {
      for (let i = 0; i < 100000; ++i) gen1.next().value;
    },
    {
      teardown: (a, mode) => {
        if (mode === "run") {
          memoryUsage();
          console.log(a, "here");
        }
      },
    },
  );

  bench("2", () => {
    for (let i = 0; i < 100000; ++i) gen2.next().value;
  });
});
