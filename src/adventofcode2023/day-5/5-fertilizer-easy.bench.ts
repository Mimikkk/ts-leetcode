import TestCase from "./5-fertilizer.case.txt?raw";
import UserCase from "./5-fertilizer.user.txt?raw";
import { bench } from "vitest";
import { iterFertilizer, funcFertilizer } from "./5-fertilizer-easy.test.js";

describe("Benchmark - Easy Fertilizer - Test", () => {
  bench("Functional", () => {
    funcFertilizer(TestCase);
  });

  bench("Iterative", () => {
    iterFertilizer(TestCase);
  });
});

describe("Benchmark - Easy Fertilizer - User", () => {
  bench("Functional", () => {
    funcFertilizer(UserCase);
  });

  bench("Iterative", () => {
    iterFertilizer(UserCase);
  });
});
