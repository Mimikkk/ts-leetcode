import { describe, expect, it } from "vitest";

const problemRe = /src[\\/](easy|medium|hard)[\\/](\d+)-/;

export function exercise<Fn extends (...args: any) => any>(
  fn: Fn,
  cases: ({ input: Parameters<Fn>; output: ReturnType<Fn> } | [input: Parameters<Fn>, output: ReturnType<Fn>])[],
): void {
  const problemNo = problemRe.exec(
    new Error("reading stacktrace").stack!.split("\n").filter((line) => problemRe.test(line))[0],
  )?.[2]!;

  describe(problemNo, () =>
    it.each(
      cases
        .map((c) => (Array.isArray(c) ? { input: c[0], output: c[1] } : c))
        .map(({ input, output }, index) => ({
          input,
          output,
          index: index + 1,
          repr: `${JSON.stringify(input)} -> ${JSON.stringify(output)}`.substring(0, 200),
        })),
    )("case $index: $repr", async ({ input, output }) =>
      expect(await fn(...(input as Iterable<unknown>))).toEqual(await output),
    ),
  );
}

export namespace exercise {
  export type cases<fn extends (...args: any) => any> = Parameters<typeof exercise<fn>>[1];
}
