import { bench, BenchOptions, describe } from "vitest";

const random = () => [{ a: Math.random() }, { b: Math.random() }] as const;

describe("Benchmark - Object-creation", () => {
  const options: BenchOptions = {
    iterations: 100,
    warmupTime: 500,
  };

  bench(
    "Object.assign (reuse)",
    () => {
      const [a, b] = random();

      const c = Object.assign(a, b);
    },
    options,
  );

  bench(
    "Object.assign (new)",
    () => {
      const [a, b] = random();

      const c = Object.assign({}, a, b);
    },
    options,
  );

  bench(
    "Spread",
    () => {
      const [a, b] = random();

      const c = { ...a, ...b };
    },
    options,
  );

  bench(
    "Object direct",
    () => {
      const [a, b] = random();

      const c = { a: a.a, b: b.b };
    },
    options,
  );
});
