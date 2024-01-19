import { exercise } from "@shared/utilities/exercise.js";
import { it, suite } from "vitest";

type Tensor = (Tensor | number)[];

function* inorderTraversal(tensor: Tensor): Generator<number, void, unknown> {
  for (const value of tensor) {
    if (Array.isArray(value)) {
      yield* inorderTraversal(value);
    } else {
      yield value;
    }
  }
}

it("should traverse a nested array", () => {
  const tensor: Tensor = [1, [2, 3], 4, [5, [6, 7, [8, 9]]]];
  const values = [...inorderTraversal(tensor)];
  expect(values).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
