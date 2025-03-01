const TestCase = await Deno.readTextFile("./8-haunted-wasteland.hard-case.txt");
const UserCase = await Deno.readTextFile("./8-haunted-wasteland.user.txt");
import { iterWasteland, funcWasteland } from "./8-haunted-wasteland-hard.test.ts";
import { describe } from "jsr:@std/testing/bdd";

describe("Benchmark - Hard Wasteland - Test", () => {
  Deno.bench("Functional", () => {
    funcWasteland(TestCase);
  });

  Deno.bench("Iterative", () => {
    iterWasteland(TestCase);
  });
});

describe("Benchmark - Hard Wasteland - User", () => {
  Deno.bench("Functional", () => {
    funcWasteland(UserCase);
  });

  Deno.bench("Iterative", () => {
    iterWasteland(UserCase);
  });
});
