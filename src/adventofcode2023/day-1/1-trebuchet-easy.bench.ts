import TestCase from "./1-trebuchet-hard.case.txt?raw";
import UserCase from "./1-trebuchet.user.txt?raw";
import { bench } from "vitest";
import { funcTrebuchet, iterTrebuchet } from "./1-trebuchet-easy.test";

describe("Benchmark - Easy Trebuchet - Test", () => {
  bench("TestCase - Functional", () => {
    funcTrebuchet(TestCase);
  });

  bench("TestCase - Iterative", () => {
    iterTrebuchet(TestCase);
  });
});

describe("Benchmark - Easy Trebuchet - User", () => {
  bench("UserCase - Functional", () => {
    funcTrebuchet(UserCase);
  });

  bench("UserCase - Iterative", () => {
    iterTrebuchet(UserCase);
  });
});
