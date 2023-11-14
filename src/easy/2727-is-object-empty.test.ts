import { exercise } from "@shared/utilities/exercise";

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Object = Record<string, JSONValue> | JSONValue[];

const isEmpty = (object: Object): boolean => Object.keys(object).length === 0;

exercise(isEmpty, [
  [[{ x: 5, y: 42 }], false],
  [[{}], true],
]);
