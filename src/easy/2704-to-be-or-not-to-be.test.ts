import { exercise } from "@shared/utilities/exercise";

interface ToBeOrNotToBe {
  toBe(val: any): boolean;
  notToBe(val: any): boolean;
}

const expect = (val: any): ToBeOrNotToBe => ({
  toBe(value: any) {
    if (val === value) return true;
    throw Error("Not Equal");
  },

  notToBe(value: any) {
    if (val !== value) return true;
    throw Error("Equal");
  },
});

exercise((x) => expect(5).toBe(x), [[[5], true]]);
