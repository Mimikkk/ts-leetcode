import { exercise } from "@shared/utilities/exercise.js";
import Test1Case from "./day-17-crucible.case-1.txt?raw";
import Test2Case from "./day-17-crucible.case-2.txt?raw";
import UserCase from "./day-17-crucible.user.txt?raw";
import { Crucible } from "./day-17-crucible.utils.js";

const crucible = (input: string): number => Crucible.search(Crucible.parse(input), 1, 3);

exercise(crucible, [
  [[Test1Case], 3],
  [[Test2Case], 102],
  [[UserCase], 665],
]);
