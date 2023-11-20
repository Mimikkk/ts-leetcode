import { exercise } from "@shared/utilities/exercise";

const minimizedStringLength = (s: string): number => new Set(s).size;

exercise(minimizedStringLength, [
  [["aaabc"], 3],
  [["cbbd"], 3],
  [["dddaaa"], 2],
]);
