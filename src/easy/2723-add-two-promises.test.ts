import { exercise } from "@shared/utilities/exercise.ts";

type P = Promise<number>;

const addTwoPromises = async (promise1: P, promise2: P): P => (await promise1) + (await promise2);
exercise(addTwoPromises, [[[Promise.resolve(2), Promise.resolve(2)], Promise.resolve(4)]]);
