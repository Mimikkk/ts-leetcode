import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

const problemRe = /src[\\/](easy|medium|hard)[\\/](\d+)-/;

export function exercise<Fn extends (...args: any) => any>(
  fn: Fn,
  cases: ({ input: Parameters<Fn>; output: ReturnType<Fn> } | [input: Parameters<Fn>, output: ReturnType<Fn>])[],
): void {
  const problemNo = problemRe.exec(
    new Error("reading stacktrace").stack!.split("\n").filter((line) => problemRe.test(line))[0],
  )?.[2]!;

  describe(`Problem - ${problemNo}`, () => {
    for (const { input, output, index, repr } of cases
      .map((c) => (Array.isArray(c) ? { input: c[0], output: c[1] } : c))
      .map(({ input, output }, index) => ({
        input,
        output,
        index: index + 1,
        repr: `${JSON.stringify(input)} -> ${JSON.stringify(output)}`.substring(0, 200),
      }))) {
        it(`case ${index}: ${repr}`, async () =>
          expect(await fn(...(input as Iterable<unknown>))).toEqual(await output),
        );
      }
    }
  );
}

export namespace exercise {
  export type cases<fn extends (...args: any) => any> = Parameters<typeof exercise<fn>>[1];
}

export const exercises = <const Fn extends (...args: any) => any, Cases extends exercise.cases<Fn>>(
  solutions: Fn[],
  cases: Cases,
): void => solutions.forEach((solution) => exercise(solution, cases));

export type TypedKey<R, T> = { [K in keyof R]: R[K] extends T ? K : never }[keyof R];

export const exercisesNs = <
  Cases extends Record<"cases", exercise.cases<Fn>>,
  Namespace extends Record<Name, Fn>,
  Name extends TypedKey<Namespace, Fn>,
  Fn extends (...args: any) => any,
>(
  [{ cases }, ...solutions]: [Cases, ...Namespace[]],
  key: Name,
): void =>
  exercises(
    solutions.map((ns) => ns[key]),
    cases,
  );

export const benches = <
  Cases extends Record<"cases", exercise.cases<Fn>>,
  Namespace extends Record<Name, Fn>,
  Name extends TypedKey<Namespace, Fn>,
  Fn extends (...args: any) => any,
>(
  input: [Cases, ...Namespace[]],
  key: Name,
): void => {
  exercisesNs(input, key as never);

  const [{ cases }, ...solutions] = input;
  cases.forEach((case_, j) => {
    const [input] = Array.isArray(case_) ? case_ : [case_.input, case_.output];

    describe(`case ${j + 1}`, () => {
      solutions.forEach((solution, i) => {
        Deno.bench(`${key.toString()} - Solution ${i + 1}`, () => solution[key](...(input as unknown[])));
      });
    });
  });
};
