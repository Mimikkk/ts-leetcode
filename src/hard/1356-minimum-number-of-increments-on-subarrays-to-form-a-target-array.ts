import { exercise } from "@shared/utilities/exercise.ts";
import testcases from "./1356-minimum-number-of-increments-on-subarrays-to-form-a-target-array.cases.json" with { type: "json" };

export namespace S1_1356 {
  export const minNumberOperations = (target: number[]): number => {
    target = [...target];
    let operations = 0;

    while (true) {
      let left = 0;
      while (target[left] === 0) ++left;
      if (left === target.length) break;

      let min = target[left];
      let right = left + 1;
      while (target[right] !== 0 && target[right] !== undefined) {
        if (target[right] < min) min = target[right];
        ++right;
      }
      --right;

      for (let i = left; i <= right; i++) target[i] -= min;
      operations += min;
    }

    return operations;
  };
}

export namespace S2_1356 {
  export const minNumberOperations = (target: number[]): number => {
    target = [...target];
    let operations = 0;

    while (true) {
      let left = 0;
      while (target[left] === 0) ++left;
      if (left === target.length) break;

      let min = target[left];
      let right = left + 1;
      while (target[right] !== 0 && target[right] !== undefined) {
        if (target[right] < min) min = target[right];
        ++right;
      }
      --right;

      for (let i = left; i <= right; i++) target[i] -= min;
      operations += min;
    }

    return operations;
  };
}

export namespace T1356 {
  export const cases = testcases as exercise.cases<typeof S1_1356.minNumberOperations>;
}
