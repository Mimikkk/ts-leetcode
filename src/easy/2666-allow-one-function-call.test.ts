import { exercise } from "@shared/utilities/exercise";

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

const once = (fn: Function): OnceFn => {
  let wasCalled = false;

  return (...args) => {
    if (wasCalled) return undefined;
    wasCalled = true;
    return fn(...args);
  };
};

export const handleOnce = (fn: () => number) => {
  const onceFn = once(fn);

  let count = 0;

  if (onceFn() === 0) ++count;
  if (onceFn() === 0) ++count;

  return count;
};

exercise(handleOnce, [[[() => 0], 1]]);
