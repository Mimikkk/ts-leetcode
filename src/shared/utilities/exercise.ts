import { describe, expect, it } from "vitest";

export const exercise = <T, Y = any, Fn extends (...args: T[]) => Y = (...args: T[]) => Y>(
  number: number,
  fn: Fn,
  cases: ({ input: T[]; output: Y } | [T[], Y])[],
) =>
  describe(`${number}`, () =>
    it.each(
      cases.map((c) => (Array.isArray(c) ? { input: c[0], output: c[1] } : c)).map((c, i) => ({ ...c, index: i + 1 })),
    )("case $index: $input -> $output", ({ input, output }) => expect(fn(...input)).toEqual(output)));
