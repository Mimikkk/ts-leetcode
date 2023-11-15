import { exercise } from "@shared/utilities/exercise";

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

const argumentsLength = (...args: JSONValue[]): number => args.length;
exercise(argumentsLength, [
  [[5], 1],
  [[{}, null, "3"], 3],
]);
