import { Sol1_2642, Sol2_2642, T2642 } from "./2642-design-graph-with-shortest-path-calculator.js";
import { bench, describe } from "vitest";

describe("2642 - Design Graph with Shortest Path Calculator", () => {
  const first = T2642.use(Sol1_2642);
  const second = T2642.use(Sol2_2642);

  const [[warmup], [easy], [hard]] = T2642.cases;
  describe("Warmup", () => {
    bench("First Solution", () => {
      const [a, b] = warmup;
      first(a, b);
    });

    bench("Second Solution", () => {
      const [a, b] = warmup;
      second(a, b);
    });
  });

  describe("Easy", () => {
    bench("First Solution", () => {
      const [a, b] = easy;
      first(a, b);
    });

    bench("Second Solution", () => {
      const [a, b] = easy;
      second(a, b);
    });
  });

  describe("Hard", () => {
    bench("First Solution", () => {
      const [a, b] = hard;
      first(a, b);
    });

    bench("Second Solution", () => {
      const [a, b] = hard;
      second(a, b);
    });
  });
});
