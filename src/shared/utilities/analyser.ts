import { memoryUsage } from "process";
import { runInNewContext } from "vm";

type Format = "B" | "KiB" | "MiB" | "GiB";
const precise = (n: number, precision: number) => Math.round((n + Number.EPSILON) * 2 ** precision) / 2 ** precision;
const formatted = (format: Format, n: number, precision: number): number => {
  switch (format) {
    case "KiB":
      return precise(n / 1024, precision);
    case "MiB":
      return precise(n / 1024 / 1024, precision);
    case "GiB":
      return precise(n / 1024 / 1024 / 1024, precision);
    case "B":
    default:
      return n;
  }
};

export interface Analyser {
  get state(): Analyser.State;
  internal: {
    start: NodeJS.MemoryUsage;
    end: NodeJS.MemoryUsage;
  };
  start(): void;
  end(): void;
  get differences(): Analyser.State["usage"];
  difference: {
    heap: {
      get total(): number;
      get used(): number;
    };
    get rss(): number;
    get external(): number;
    get arrayBuffers(): number;
  };
  bench(
    fn: () => void,
    options?: {
      iterations?: number;
      warmups?: number;
      withGc?: boolean;
    },
  ): number;
}

export namespace Analyser {
  export interface State {
    usage: NodeJS.MemoryUsage;
    meta: {
      format: Format;
      precision: number;
    };
  }

  export const create = ({ format, precision }: { format?: Format; precision?: number } = {}): Analyser => {
    const state: State = {
      usage: { rss: 0, heapTotal: 0, heapUsed: 0, external: 0, arrayBuffers: 0 },
      meta: { precision: precision ?? 2, format: format ?? "MiB" },
    };

    const internal = <Analyser["internal"]>{};

    return {
      get state() {
        return state;
      },
      internal,
      start() {
        internal.start = memoryUsage();
      },
      end() {
        internal.end = memoryUsage();

        const {
          meta: { format, precision },
          usage,
        } = state;

        usage.arrayBuffers = formatted(format, internal.end.arrayBuffers - internal.start.arrayBuffers, precision);
        usage.external = formatted(format, internal.end.external - internal.start.external, precision);
        usage.heapTotal = formatted(format, internal.end.heapTotal - internal.start.heapTotal, precision);
        usage.heapUsed = formatted(format, internal.end.heapUsed - internal.start.heapUsed, precision);
        usage.rss = formatted(format, internal.end.rss - internal.start.rss, precision);
      },
      get differences() {
        return state.usage;
      },
      difference: {
        heap: {
          get total() {
            return state.usage.heapTotal;
          },
          get used() {
            return state.usage.heapUsed;
          },
        },
        get rss() {
          return state.usage.rss;
        },
        get external() {
          return state.usage.external;
        },
        get arrayBuffers() {
          return state.usage.arrayBuffers;
        },
      },
      bench(fn, { iterations, warmups, withGc } = {}) {
        iterations ??= 1;
        warmups ??= 0;
        withGc ??= false;

        const gc = runInNewContext("gc");
        let i = 0;

        if (withGc) gc();
        for (; i < warmups; ++i) fn();

        i = 0;
        if (withGc) gc();

        this.start();
        for (; i < iterations; ++i) fn();
        this.end();
        if (withGc) gc();

        return this.difference.heap.used;
      },
    };
  };

  interface InjectionOptions {
    description?: string;
  }

  export const inject = (analyser: Analyser, { description }: InjectionOptions = {}) => {
    description ??= "unnamed";

    return {
      setup: analyser.start,
      teardown(_: unknown, mode: "run" | "warmup") {
        analyser.end();

        console.info(`analysis:${mode}:${description}`, analyser.difference);
      },
    };
  };
}
