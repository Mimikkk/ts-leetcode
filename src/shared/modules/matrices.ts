import { A } from "./arrays";

export module M {
  export const create = <T>(
    m: number,
    n: number,
    fn: (i: number, j: number) => T,
  ): T[][] => A.create(n, (i) => A.create(n, (j) => fn(i, j)));
}
