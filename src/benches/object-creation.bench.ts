import { describe } from "jsr:@std/testing/bdd";

const random = () => [{ a: Math.random() }, { b: Math.random() }] as const;

describe("Benchmark - Object-creation", () => {
  Deno.bench(
    "Object.assign (reuse)",
    () => {
      const [a, b] = random();

      const c = Object.assign(a, b);
    },
  );

  Deno.bench(
    "Object.assign (new)",
    () => {
      const [a, b] = random();

      const c = Object.assign({}, a, b);
    },
  );

  Deno.bench(
    "Spread",
    () => {
      const [a, b] = random();

      const c = { ...a, ...b };
    },
  );

  Deno.bench(
    "Object direct",
    () => {
      const [a, b] = random();

      const c = { a: a.a, b: b.b };
    },
  );
});
