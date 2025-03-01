import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn<T extends JSONValue, Y> = (...args: T[]) => Y;

const cancellable = <T extends JSONValue, Y>(fn: Fn<T, Y>, args: T[], t: number): (() => void) => {
  const cancel = setTimeout(() => fn(...args), t);

  return () => clearTimeout(cancel);
};
