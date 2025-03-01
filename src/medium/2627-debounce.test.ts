import { exercise } from "@shared/utilities/exercise.ts";

import { sleep } from "../easy/2621-sleep.test.ts";

const debounce = <Fn extends (...args: any) => void>(fn: Fn, timeMs: number): Fn => {
  let timer: number;

  return <Fn>((...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), timeMs);
  });
};

exercise(async () => {
  let calls = 0;
  const increment = debounce(() => ++calls, 100);

  await sleep(100);
  increment();
  increment();
  increment();
  await sleep(100);
  increment();
  increment();
  increment();
  await sleep(100);

  return calls;
}, [[[], Promise.resolve(2)]]);
