import { describe } from "jsr:@std/testing/bdd";
import { Sol1_732, Sol2_732 } from "./732-my-calendar-iii.ts";

describe("732 - Bench - My Calendar III", () => {
  const ranges: [number, number][] = Array(1000)
    .fill(0)
    .map(() => [Math.random() * 10000, Math.random() * 10000]);

  const use = (ns: typeof Sol1_732 | typeof Sol2_732) => () => {
    const calendar = new ns.MyCalendarThree();

    for (let i = 1; i < ranges.length; ++i) calendar.book(ranges[i][0], ranges[i][1]);
  };

  Deno.bench("solution - 1", use(Sol1_732));

  Deno.bench("solution - 2", use(Sol2_732));
});
