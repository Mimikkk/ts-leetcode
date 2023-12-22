import { exercise } from "@shared/utilities/exercise.js";
import TestCase from "./day-20-pulse.case.txt?raw";

namespace Pulse {
  export type Signal = "low" | "high";
  export type Module = (
    | {
        type: "conjunction";
        memory: Map<string, Signal>;
        get isEveryHigh(): boolean;
      }
    | { type: "flip-flop"; value: boolean }
    | { type: "broadcast" }
  ) & { name: string; destinations: string[] };
  export type ModuleType = Module["type"];
  type ModuleMap = Map<string, Module>;

  export const transmit = (map: ModuleMap, transmitter: Module, signal: Signal): [Module, Module, Signal][] =>
    transmitter.destinations.map((name) => map.get(name)!).map((destination) => [transmitter, destination, signal]);

  export const propagate = (map: ModuleMap, from: Module, to: Module, signal: Signal): [Module, Module, Signal][] => {
    if (to.type === "broadcast") return transmit(map, to, signal);

    if (to.type === "flip-flop") {
      if (signal === "high") return [];

      to.value = !to.value;

      return transmit(map, to, to.value ? "high" : "low");
    }

    if (to.type === "conjunction") {
      to.memory.set(from.name, signal);

      console.log(to.memory);

      return transmit(map, to, to.isEveryHigh ? "low" : "high");
    }

    return [];
  };

  export const parse = (input: string): ModuleMap =>
    new Map(
      input
        .split(/\r?\n/)
        .map((line) => line.trim().split(" -> "))
        .map(([name, names]) => [name, typeByPrefix(name), names.split(", ")] as const)
        .map(([name, type, names]) => [type === "broadcast" ? name : name.substring(1), type, names] as const)
        .map(([name, type, names]) => [name, moduleByType(type, name, names)]),
    );

  const typeByPrefix = ([prefix]: string): ModuleType =>
    prefix === "%" ? "flip-flop" : prefix === "&" ? "conjunction" : "broadcast";

  const moduleByType = (type: ModuleType, name: string, destinations: string[]): Module => {
    if (type === "broadcast") return { name, type, destinations };
    if (type === "flip-flop") return { name, type, value: false, destinations };
    return {
      name,
      type,
      destinations,
      memory: new Map(destinations.map((n) => [n, "low"])),
      get isEveryHigh() {
        for (let signal of this.memory.values()) if (signal === "low") return false;
        return true;
      },
    };
  };
}

const pulse = (input: string): number => {
  const map = Pulse.parse(input);

  const stack: [Pulse.Module, Pulse.Module, Pulse.Signal][] = [[undefined!, map.get("broadcaster")!, "low"]];

  while (stack.length) {
    let [from, to, signal] = stack.shift()!;
    console.log(`${from ? `${from.name} ${from.type} ` : ""}-${signal}-> ${to.name}`);
    stack.push(...Pulse.propagate(map, from, to, signal));
  }

  return 0;
};

exercise(pulse, [
  [[TestCase], 5],
  // [[UserCase], 3617],
]);
