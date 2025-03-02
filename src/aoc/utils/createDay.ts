import { dirname, resolve } from 'jsr:@std/path';
import { beforeAll, describe, it } from 'jsr:@std/testing/bdd';
import { expect } from 'jsr:@std/expect/expect';

const readLocalDirectory = (): string | undefined => {
  const error = new Error();
  const stackLines = error.stack?.split('\n');

  const fileLine = stackLines?.find((line) => line.includes('  at file:///'));
  if (!fileLine) return;

  const path = fileLine.split('at file:///')[1]?.split(':');
  if (!path) return;

  path.splice(-2);

  return dirname(path.join(':'));
};

interface Case<R, A extends any[]> {
  input: string;
  arguments?: A;
  result: R;
}

interface Challenge<I, R, A extends any[]> {
  cases: Record<string, Case<R, A>>;
  prepare: (input: string) => I;
  solve: (...args: [I, ...A]) => R;
}

const itChallenge = <I, R, A extends any[]>(challenge: Challenge<I, R, A>, name: string, directory: string) => {
  const entries = Object.entries(challenge.cases);

  const names = entries.map(([name]) => name);
  const results = entries.map(([, { result }]) => result);
  const inputs: I[] = [];

  beforeAll(async () => {
    const raw = await Promise.all(entries.map(([, { input }]) => {
      if (input.startsWith('file:')) {
        return Deno.readTextFile(resolve(directory, input.substring(5) + '.txt'));
      }

      return input;
    }));

    inputs.push(...raw.map(challenge.prepare));
  });

  for (let i = 0; i < entries.length; i++) {
    it(`${name}-case: ${names[i]}`, () => {
      const expected = results[i];
      const prepared = inputs[i];
      const solution = challenge.solve(prepared, ...(entries[i][1]?.arguments ?? []) as A);

      expect(solution).toBe(expected);
    });
  }
};

const readParams = (directory: string): { year: number; day: number } => {
  const parts = directory.split('/');
  const year = parts.at(-2);
  if (!year) throw Error('Failed to read year from directory');

  const day = parts.at(-1)?.split('-').at(-1);
  if (!day) throw Error('Failed to read day from directory');

  return { year: +year, day: +day };
};

export const createDay = <I1, I2, R1, R2, A1 extends any[], A2 extends any[]>(
  { easy, hard }: { easy?: Challenge<I1, R1, A1>; hard?: Challenge<I2, R2, A2> },
) => {
  const directory = readLocalDirectory();
  if (!directory) throw Error('Failed to read directory name from error');

  const { year, day } = readParams(directory);

  describe(`AOC:Advent of Code: ${year} - ${day}`, () => {
    if (easy) itChallenge(easy, 'easy', directory);
    if (hard) itChallenge(hard, 'hard', directory);
  });
};
