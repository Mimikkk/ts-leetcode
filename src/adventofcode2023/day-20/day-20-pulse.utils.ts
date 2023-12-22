export namespace Pulse {
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

      return transmit(map, to, to.isEveryHigh ? "low" : "high");
    }

    return [];
  };

  export const parse = (input: string): ModuleMap => {

    const map = new Map(
      input
        .split(/\r?\n/)
        .map((line) => line.trim().split(" -> "))
        .map(([name, names]) => [name, typeByPrefix(name), names.split(", ")] as const)
        .map(([name, type, names]) => [type === "broadcast" ? name : name.substring(1), type, names] as const)
        .map(([name, type, names]) => [name, moduleByType(type, name, names)]),
    );

    const conjunctions = [];
    for (let module of map.values()) if (module.type === "conjunction") conjunctions.push(module);

    for (let conjunction of conjunctions) {
      for (let module of map.values()) {
        if (module.destinations.some((name) => name === conjunction.name)) {
          conjunction.memory.set(module.name, "low");
        }
      }

    }

    return map;
  };

  const typeByPrefix = ([prefix]: string): ModuleType =>
    prefix === "%" ? "flip-flop" : prefix === "&" ? "conjunction" : "broadcast";

  const moduleByType = (type: ModuleType, name: string, destinations: string[]): Module => {
    if (type === "broadcast") return { name, type, destinations };
    if (type === "flip-flop") return { name, type, value: false, destinations };
    return {
      name,
      type,
      destinations,
      memory: new Map(),
      get isEveryHigh() {
        for (let signal of this.memory.values()) if (signal === "low") return false;
        return true;
      },
    };
  };
}

