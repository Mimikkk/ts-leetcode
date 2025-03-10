import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void;

const cancellable = (fn: Fn, args: JSONValue[], t: number): Function => {
  fn(...args);
  const cancel = setInterval(() => fn(...args), t);

  return () => clearInterval(cancel);
};
