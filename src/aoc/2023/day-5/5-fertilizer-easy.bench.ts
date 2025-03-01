import { iterFertilizer, funcFertilizer } from "./5-fertilizer-easy.test.ts";
import { describe } from "jsr:@std/testing/bdd";

const TestCase = await Deno.readTextFile("./5-fertilizer.case.txt");
const UserCase = await Deno.readTextFile("./5-fertilizer.user.txt");
describe("Benchmark - Easy Fertilizer - Test", () => {
  Deno.bench("Functional", () => {
    funcFertilizer(TestCase);
  });

  Deno.bench("Iterative", () => {
    iterFertilizer(TestCase);
  });
});

describe("Benchmark - Easy Fertilizer - User", () => {
  Deno.bench("Functional", () => {
    funcFertilizer(UserCase);
  });

  Deno.bench("Iterative", () => {
    iterFertilizer(UserCase);
  });
});
