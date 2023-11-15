import { exercise } from "@shared/utilities/exercise";

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn<T extends JSONValue, Y> = (...args: T[]) => Y;

const cancellable = <T extends JSONValue, Y>(fn: Fn<T, Y>, args: T[], t: number): (() => Y) => {
  return () => fn(...args);
};

const sleep = (timeMs: number) => new Promise((resolve) => setTimeout(resolve, timeMs));
const handleCancelable = async <T extends JSONValue, Y>(
  fn: Fn<T, Y>,
  args: T[],
  t: number,
  cancelT: number,
): Promise<[{ time: number; returned: number }] | []> => {
  let result: [{ time: number; returned: Y }] | [] = [];

  let start = performance.now();
  const handleFn = (...args: T[]) => (result = [{ time: ~~(performance.now() - start), returned: fn(...args) }]);

  setTimeout(cancellable(handleFn, args, t), cancelT);
  await sleep(t);

  return result;
};

exercise(handleCancelable, [
  [
    [(x) => (x as number) * 5, [2], 20, 50],
    Promise.resolve([{ time: 20, returned: 10 }]) as Promise<[{ time: number; returned: number }]>,
  ],
  [[(x) => (x as number) ** 2, [2], 100, 50], Promise.resolve([]) as Promise<[]>],
  [
    [(x, y) => (x as number) * (y as number), [2, 4], 30, 100],
    Promise.resolve([{ time: 30, returned: 8 }]) as Promise<[{ time: number; returned: number }]>,
  ],
]);
