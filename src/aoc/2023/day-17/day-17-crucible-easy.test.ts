import { exercise } from "@shared/utilities/exercise.ts";
const Test1Case = await Deno.readTextFile("./day-17-crucible.case-1.txt");
const Test2Case = await Deno.readTextFile("./day-17-crucible.case-2.txt");
const UserCase = await Deno.readTextFile("./day-17-crucible.user.txt");
import { Crucible } from "./day-17-crucible.utils.ts";

const crucible = (input: string): number => Crucible.search(Crucible.parse(input), 1, 3);

exercise(crucible, [
  [[Test1Case], 3],
  [[Test2Case], 102],
  [[UserCase], 665],
]);
