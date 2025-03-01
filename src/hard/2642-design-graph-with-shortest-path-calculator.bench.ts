import { Sol1_2642, Sol2_2642, Sol3_2642, T2642 } from "./2642-design-graph-with-shortest-path-calculator.ts";
import { describe } from "jsr:@std/testing/bdd";

const first = T2642.use(Sol1_2642);
const second = T2642.use(Sol2_2642);
const third = T2642.use(Sol3_2642);

const [[warmup], [easy], [hard]] = T2642.cases;
describe("2642 - Warmup - Design Graph with Shortest Path Calculator", () => {
  Deno.bench("Sol1", () => {
    const [a, b] = warmup;
    first(a, b);
  });

  Deno.bench("Sol2", () => {
    const [a, b] = warmup;
    second(a, b);
  });

  Deno.bench("Sol3", () => {
    const [a, b] = warmup;
    third(a, b);
  });
});

describe("2642 - Easy - Design Graph with Shortest Path Calculator", () => {
  Deno.bench("Sol1", () => {
    const [a, b] = easy;
    first(a, b);
  });

  Deno.bench("Sol2", () => {
    const [a, b] = easy;
    second(a, b);
  });

  Deno.bench("Sol3", () => {
    const [a, b] = easy;
    third(a, b);
  });
});

describe("2642 - Hard - Design Graph with Shortest Path Calculator", () => {
  Deno.bench("Sol1", () => {
    const [a, b] = hard;
    first(a, b);
  });

  Deno.bench("Sol2", () => {
    const [a, b] = hard;
    second(a, b);
  });

  Deno.bench("Sol3", () => {
    const [a, b] = hard;
    third(a, b);
  });
});
