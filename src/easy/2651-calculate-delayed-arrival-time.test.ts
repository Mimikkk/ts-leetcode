import { exercise } from "@shared/utilities/exercise";

const findDelayedArrivalTime = (arrivalTime: number, delayedTime: number): number => (arrivalTime + delayedTime) % 24;

exercise(findDelayedArrivalTime, [
  [[15, 5], 20],
  [[13, 11], 0],
]);
