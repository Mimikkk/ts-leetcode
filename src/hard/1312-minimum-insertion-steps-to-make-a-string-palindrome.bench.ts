import { describe } from "jsr:@std/testing/bdd";
import { Sol1_1312, Sol2_1312, Sol3_1312, T1312 } from "./1312-minimum-insertion-steps-to-make-a-string-palindrome.ts";

describe("Sol_1312", () => {
  const [[in_]] = T1312.cases.at(-1)!;

  Deno.bench("Sol1", () => {
    Sol1_1312.minInsertions(in_);
  });
  Deno.bench("Sol2", () => {
    Sol2_1312.minInsertions(in_);
  });
  Deno.bench("Sol3", () => {
    Sol3_1312.minInsertions(in_);
  });
});
