import { exercise } from "@shared/utilities/exercise";

const swap = <T>(a: T[], b: T[], i: number, j: number) => {
  const temp = a[i];
  a[i] = b[j];
  b[j] = temp;
};

const isEqual = <T>(a: T[], b: T[]): boolean => {
  for (let i = 0; i < a.length; ++i) if (a[i] !== b[i]) return false;
  return true;
};

const canBeEqual = (s1: string, s2: string): boolean => {
  const a1 = [...s1];
  const a2 = [...s2];
  if (s1 == s2) return true;

  if (a1[0] !== a2[0]) swap(a1, a1, 0, 2);
  if (isEqual(a1, a2)) return true;

  if (a1[1] !== a2[1]) swap(a1, a1, 1, 3);
  return isEqual(a1, a2);
};

exercise(canBeEqual, [
  [["abcd", "cdab"], true],
  [["abcd", "dacb"], false],
]);
