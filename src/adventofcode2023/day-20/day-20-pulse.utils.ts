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
    | { type: "unknown" }
  ) & { name: string; destinations: Module[] };
  export namespace Module {
    export const Unknown: Module = { type: "unknown", name: "unknown", destinations: [] };
  }

  export const transmit = (transmitter: Module, signal: Signal): [Module, Module, Signal][] =>
    transmitter.destinations.map((destination) => [transmitter, destination, signal]);

  export const propagate = (from: Module | null, to: Module, signal: Signal): [Module, Module, Signal][] => {
    if (to.type === "broadcast") return transmit(to, signal);
    if (!from) return [];

    if (to.type === "flip-flop") {
      if (signal === "high") return [];

      to.value = !to.value;

      return transmit(to, to.value ? "high" : "low");
    }

    if (to.type === "conjunction") {
      to.memory.set(from.name, signal);

      return transmit(to, to.isEveryHigh ? "low" : "high");
    }

    return [];
  };

  export const parse = (input: string): Module[] => {
    const typeByPrefix = ([prefix]: string): Module["type"] =>
      prefix === "%" ? "flip-flop" : prefix === "&" ? "conjunction" : "broadcast";

    const moduleByType = (type: Module["type"], name: string): Module => {
      if (type === "unknown") return Module.Unknown;
      if (type === "broadcast") return { name, type, destinations: [] };
      if (type === "flip-flop") return { name, type, destinations: [], value: false };

      return {
        name,
        type,
        destinations: [],
        memory: new Map(),
        get isEveryHigh() {
          for (let signal of this.memory.values()) if (signal === "low") return false;
          return true;
        },
      };
    };

    const descriptors = input
      .split(/\r?\n/)
      .map((line) => line.trim().split(" -> "))
      .map(([name, names]) => [name, typeByPrefix(name), names.split(", ")] as const)
      .map(([name, type, names]) => [type === "broadcast" ? name : name.substring(1), type, names] as const)
      .map(([name, type, destinations]) => [moduleByType(type, name), destinations] as const);

    const map = new Map<string, Module>(descriptors.map(([module]) => [module.name, module]));

    const modules: Pulse.Module[] = descriptors.map(([module]) => module);
    for (const [module, destinations] of descriptors) {
      module.destinations = destinations.map((name) => map.get(name) ?? { destinations: [], type: "unknown", name });
    }

    const conjunctions = [];
    for (const module of modules) {
      if (module.type === "conjunction") conjunctions.push(module);
    }

    for (const conjunction of conjunctions) {
      for (const module of modules) {
        if (module.destinations.every(({ name }) => name !== conjunction.name)) continue;
        conjunction.memory.set(module.name, "low");
      }
    }

    return modules;
  };
}
