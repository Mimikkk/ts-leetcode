import { describe, expect, it } from "vitest";

const problemRe = /src[\\/](easy|medium|hard)[\\/](\d+)-/;
export const exercise = <T, Y = any, Fn extends (...args: T[]) => Y = (...args: T[]) => Y>(
  fn: Fn,
  cases: ({ input: T[]; output: Y } | [T[], Y])[],
) => {
  const problemNo = problemRe.exec(
    new Error("reading stacktrace").stack!.split("\n").filter((line) => problemRe.test(line))[0],
  )?.[2]!;

  return describe(problemNo, () =>
    it.each(
      cases
        .map((c) => (Array.isArray(c) ? { input: c[0], output: c[1] } : c))
        .map(({ input, output }, index) => ({
          input,
          output,
          index: index + 1,
          repr: `${JSON.stringify(input)} -> ${JSON.stringify(output)}`,
        })),
    )("case $index: $repr", ({ input, output }) => expect(fn(...input)).toEqual(output)),
  );
};