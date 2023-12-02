import TestCase from "./1-trebuchet-hard.case.txt?raw";
import UserCase from "./1-trebuchet.user.txt?raw";
import { bench } from "vitest";
import { funcTrebuchet, iterTrebuchet } from "./1-trebuchet-hard.test";

describe("Benchmark - Hard Trebuchet - Test", () => {
  bench("Functional", () => {
    funcTrebuchet(TestCase);
  });

  bench("Iterative", () => {
    iterTrebuchet(TestCase);
  });
});

describe("Benchmark - Hard Trebuchet - User", () => {
  bench("Functional", () => {
    funcTrebuchet(UserCase);
  });

  bench("Iterative", () => {
    iterTrebuchet(UserCase);
  });
});
