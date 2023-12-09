import TestCase from "./8-haunted-wasteland.hard-case.txt?raw";
import UserCase from "./8-haunted-wasteland.user.txt?raw";
import { bench } from "vitest";
import { iterWasteland, funcWasteland } from "./8-haunted-wasteland-hard.test.js";

describe("Benchmark - Hard Wasteland - Test", () => {
  bench("Functional", () => {
    funcWasteland(TestCase);
  });

  bench("Iterative", () => {
    iterWasteland(TestCase);
  });
});

describe("Benchmark - Hard Wasteland - User", () => {
  bench("Functional", () => {
    funcWasteland(UserCase);
  });

  bench("Iterative", () => {
    iterWasteland(UserCase);
  });
});
