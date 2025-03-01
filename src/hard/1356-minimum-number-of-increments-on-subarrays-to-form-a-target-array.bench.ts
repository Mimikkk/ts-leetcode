import { describe } from "jsr:@std/testing/bdd";
import { S1_1356, S2_1356, T1356 } from "./1356-minimum-number-of-increments-on-subarrays-to-form-a-target-array.ts";

describe("Sol_1356", () => {
  const [[in_]] = T1356.cases.at(-1)! as [[number[]], number];

  Deno.bench("Sol1", () => {
    S1_1356.minNumberOperations(in_);
  });

  Deno.bench("Sol2", () => {
    S2_1356.minNumberOperations(in_);
  });
});
