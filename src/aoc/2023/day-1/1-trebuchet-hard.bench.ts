const TestCase = await Deno.readTextFile("./1-trebuchet-hard.case.txt");
const UserCase = await Deno.readTextFile("./1-trebuchet.user.txt");
import { funcTrebuchet, iterTrebuchet } from "./1-trebuchet-hard.test.ts";
import { describe } from "jsr:@std/testing/bdd";

describe("Benchmark - Hard Trebuchet - Test", () => {
  Deno.bench("Functional", () => {
    funcTrebuchet(TestCase);
  });

  Deno.bench("Iterative", () => {
    iterTrebuchet(TestCase);
  });
});

describe("Benchmark - Hard Trebuchet - User", () => {
  Deno.bench("Functional", () => {
    funcTrebuchet(UserCase);
  });

  Deno.bench("Iterative", () => {
    iterTrebuchet(UserCase);
  });
});
