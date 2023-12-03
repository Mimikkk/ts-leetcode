import { exercise } from "@shared/utilities/exercise.js";

interface ICounter {
  increment(): number;
  decrement(): number;
  reset(): number;
}

class Counter implements ICounter {
  value: number;

  constructor(public init: number) {
    this.value = init;
  }

  increment() {
    return ++this.value;
  }

  decrement() {
    return --this.value;
  }

  reset() {
    return (this.value = this.init);
  }
}

const createCounter = (init: number): ICounter => new Counter(init);

const handleCounter = (init: number, calls: (keyof ICounter)[]): number[] => {
  const counter = createCounter(init);

  return calls.map((call) => counter[call]());
};

exercise(handleCounter, [
  [
    [5, ["increment", "reset", "decrement"]],
    [6, 5, 4],
  ],
]);
