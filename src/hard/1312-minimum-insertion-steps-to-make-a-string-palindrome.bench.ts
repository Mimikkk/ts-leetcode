import { bench, describe } from "vitest";
import { Sol1_1312, Sol2_1312, Sol3_1312, T1312 } from "./1312-minimum-insertion-steps-to-make-a-string-palindrome.js";

describe("Sol_1312", () => {
  const [[in_]] = T1312.cases.at(-1)!;

  bench("Sol1", () => {
    Sol1_1312.minInsertions(in_);
  });
  bench("Sol2", () => {
    Sol2_1312.minInsertions(in_);
  });
  bench("Sol3", () => {
    Sol3_1312.minInsertions(in_);
  });
});
