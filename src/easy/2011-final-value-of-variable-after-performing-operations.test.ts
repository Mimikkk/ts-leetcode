export {};

const enum Operation {
  IncrementRight = "X++",
  IncrementLeft = "++X",
  DecrementRight = "X--",
  DecrementLeft = "--X",
}

const finalValueAfterOperations = (operations: string[]): number => {
  let value = 0;
  for (const operation of operations) {
    switch (operation) {
      case Operation.IncrementRight:
      case Operation.IncrementLeft:
        ++value;
        break;
      case Operation.DecrementRight:
      case Operation.DecrementLeft:
        --value;
        break;
    }
  }

  return value;
};

describe("final value", () => {
  it("should return the final value", () => {
    expect(finalValueAfterOperations(["--X", "X++", "X++"])).toBe(1);
  });
});