import { exercise } from "@shared/utilities/exercise.ts";
import { Heap } from "heap-js";

export namespace Sol1_2642 {
  export type Edge = [from: number, to: number, weight: number];
  export class Graph {
    declare ["constructor"]: (n: number, edges: Edge[]) => Graph;

    adjacency: Map<number, Map<number, number>> = new Map();

    constructor(_: number, edges: Edge[]) {
      for (const edge of edges) this.addEdge(edge);
    }

    addEdge([from, to, weight]: Edge): void {
      let map = this.adjacency.get(from);
      if (map === undefined) {
        map = new Map();

        this.adjacency.set(from, map);
      }
      map.set(to, weight);
    }

    shortestPath(from: number, to: number): number {
      const memory = new Map<number, number>();
      const queue = [from];
      memory.set(from, 0);

      while (queue.length > 0) {
        const node = queue.pop()!;

        const map = this.adjacency.get(node);
        if (!map) continue;

        for (const [next, weight] of map) {
          const value = memory.get(node)! + weight;
          if (memory.has(next) && memory.get(next)! <= value) continue;

          memory.set(next, value);
          queue.push(next);
        }
      }

      return memory.get(to) ?? -1;
    }
  }
}

export namespace Sol2_2642 {
  export type Edge = [from: number, to: number, weight: number];
  export class Graph {
    declare ["constructor"]: (n: number, edges: Edge[]) => Graph;

    adjacency: Map<number, Map<number, number>> = new Map();

    constructor(_: number, edges: Edge[]) {
      for (const edge of edges) this.addEdge(edge);
    }

    addEdge([from, to, weight]: Edge): void {
      let map = this.adjacency.get(from);
      if (map === undefined) {
        map = new Map();

        this.adjacency.set(from, map);
      }
      map.set(to, weight);
    }

    shortestPath(from: number, to: number): number {
      const memory = new Map<number, number>();
      memory.set(from, 0);
      const queue = new Heap<number>(Heap.maxComparator);
      queue.init([from]);

      while (queue.length) {
        const node = queue.pop()!;

        const map = this.adjacency.get(node);
        if (!map) continue;

        for (const [next, weight] of map) {
          const value = memory.get(node)! + weight;
          if (memory.has(next) && memory.get(next)! <= value) continue;

          memory.set(next, value);
          queue.push(next);
        }
      }

      return memory.get(to) ?? -1;
    }
  }
}

export namespace Sol3_2642 {
  export type Edge = [from: number, to: number, weight: number];

  export class Graph {
    declare ["constructor"]: (n: number, edges: Edge[]) => Graph;
    declare n: number;
    declare adjacency: [number, number][][];

    constructor(n: number, edges: Edge[]) {
      this.adjacency = Array(n)
        .fill(0)
        .map(() => []);
      this.n = n;
      for (const edge of edges) this.addEdge(edge);
    }

    addEdge([from, to, weight]: Edge): void {
      this.adjacency[from].push([to, weight]);
    }

    shortestPath(from: number, to: number): number {
      const memory = Array(this.n).fill(Infinity);
      memory[from] = 0;

      const queue = [from];
      while (queue.length) {
        const node = queue.pop()!;

        const adj = this.adjacency[node];
        if (!adj) continue;

        for (const [next, weight] of adj) {
          const value = memory[node] + weight;
          if (memory[next] <= value) continue;

          memory[next] = value;
          queue.push(next);
        }
      }

      return memory[to] ?? -1;
    }
  }
}

export namespace T2642 {
  type ParameterMap = {
    Graph: Parameters<Sol1_2642.Graph["constructor"]>;
    addEdge: Parameters<Sol1_2642.Graph["addEdge"]>;
    shortestPath: Parameters<Sol1_2642.Graph["shortestPath"]>;
  };
  export const use =
    (ns: typeof Sol1_2642 | typeof Sol2_2642) =>
    (
      [, ...calls]: ["Graph", ...("addEdge" | "shortestPath")[]],
      [constructor, ...parameters]: [ParameterMap["Graph"], ...ParameterMap["addEdge" | "shortestPath"][]],
    ) => {
      const graph = new ns.Graph(...constructor);

      const result: [null, ...(number | null)[]] = [null];
      for (let i = 0; i < calls?.length; ++i) {
        const call = calls[i];

        switch (call) {
          case "addEdge": {
            const params = parameters[i] as unknown as ParameterMap["addEdge"];
            graph.addEdge(...params);
            result.push(null);
            break;
          }
          case "shortestPath": {
            const params = parameters[i] as unknown as ParameterMap["shortestPath"];
            const path = graph.shortestPath(...params);
            result.push(path);
            break;
          }
        }
      }

      return result;
    };

  export const cases = [
    [[["Graph"], [[0, []]]], [null]],
    [
      [
        ["Graph", "shortestPath", "shortestPath", "addEdge", "shortestPath"],
        [
          [
            4,
            [
              [0, 2, 5],
              [0, 1, 2],
              [1, 2, 1],
              [3, 0, 3],
            ],
          ],
          [3, 2],
          [0, 3],
          [[1, 3, 4]],
          [0, 3],
        ],
      ],
      [null, 6, -1, null, 6],
    ],
    [
      [
        [
          "Graph",
          "addEdge",
          "shortestPath",
          "addEdge",
          "shortestPath",
          "addEdge",
          "addEdge",
          "addEdge",
          "addEdge",
          "addEdge",
          "shortestPath",
          "shortestPath",
          "addEdge",
          "shortestPath",
          "shortestPath",
          "shortestPath",
          "addEdge",
          "shortestPath",
          "addEdge",
          "addEdge",
          "addEdge",
          "addEdge",
          "addEdge",
          "shortestPath",
          "shortestPath",
          "shortestPath",
          "shortestPath",
          "addEdge",
          "shortestPath",
          "addEdge",
          "shortestPath",
          "addEdge",
          "addEdge",
          "shortestPath",
          "addEdge",
          "shortestPath",
          "shortestPath",
          "addEdge",
          "shortestPath",
          "shortestPath",
          "addEdge",
          "addEdge",
          "shortestPath",
          "addEdge",
          "shortestPath",
          "shortestPath",
          "shortestPath",
          "shortestPath",
          "addEdge",
          "shortestPath",
          "addEdge",
          "addEdge",
          "shortestPath",
          "shortestPath",
          "shortestPath",
          "shortestPath",
          "addEdge",
          "shortestPath",
          "shortestPath",
          "shortestPath",
          "shortestPath",
          "addEdge",
          "addEdge",
          "addEdge",
          "addEdge",
          "addEdge",
          "shortestPath",
          "shortestPath",
          "shortestPath",
          "shortestPath",
          "shortestPath",
          "addEdge",
          "shortestPath",
          "shortestPath",
          "shortestPath",
          "shortestPath",
          "shortestPath",
          "shortestPath",
          "shortestPath",
          "addEdge",
          "shortestPath",
          "shortestPath",
          "addEdge",
        ],
        [
          [
            18,
            [
              [8, 12, 835881],
              [6, 1, 886222],
              [8, 9, 152139],
              [4, 15, 475979],
              [5, 15, 903985],
              [12, 7, 435256],
              [3, 11, 115877],
              [14, 2, 669007],
              [15, 12, 503987],
              [13, 9, 773256],
              [2, 13, 643974],
              [12, 5, 42565],
              [0, 9, 726934],
              [9, 8, 369110],
              [13, 10, 727485],
              [16, 0, 842868],
              [0, 13, 836101],
              [4, 12, 645669],
              [12, 14, 353649],
              [0, 1, 501402],
              [3, 13, 131383],
              [15, 9, 919433],
              [13, 11, 652190],
              [9, 4, 501551],
              [13, 12, 772479],
              [13, 1, 602418],
              [5, 3, 192091],
              [12, 0, 66326],
              [8, 4, 841136],
              [3, 1, 305879],
              [2, 9, 953806],
              [6, 13, 690575],
              [1, 12, 901363],
              [1, 5, 658225],
              [0, 2, 751532],
              [14, 16, 17590],
              [15, 3, 665278],
              [2, 8, 784019],
              [4, 3, 586413],
              [3, 12, 631462],
              [5, 13, 360949],
              [1, 17, 686861],
              [9, 3, 112100],
              [4, 1, 159862],
              [7, 13, 863940],
              [1, 3, 859524],
              [10, 6, 795021],
              [17, 2, 489450],
              [3, 8, 930965],
              [4, 10, 573998],
              [1, 15, 60334],
              [2, 0, 624060],
              [8, 6, 708518],
              [17, 13, 446713],
              [7, 4, 361258],
              [14, 5, 489098],
              [1, 4, 147944],
              [0, 7, 987717],
              [6, 5, 518191],
              [13, 16, 301057],
              [0, 6, 725177],
              [3, 17, 515457],
              [16, 3, 456018],
              [3, 15, 871393],
              [11, 14, 584427],
              [17, 8, 569473],
              [8, 16, 598786],
              [8, 1, 961881],
              [12, 16, 51206],
              [15, 10, 622641],
              [10, 14, 573146],
            ],
          ],
          [[9, 2, 775475]],
          [12, 0],
          [[1, 8, 10688]],
          [16, 16],
          [[7, 10, 194719]],
          [[6, 15, 10240]],
          [[4, 8, 7274]],
          [[5, 1, 5126]],
          [[14, 12, 230]],
          [3, 11],
          [8, 4],
          [[13, 8, 126]],
          [3, 16],
          [13, 3],
          [9, 12],
          [[5, 17, 311469]],
          [7, 0],
          [[11, 2, 659004]],
          [[12, 3, 470391]],
          [[11, 5, 112]],
          [[3, 0, 771142]],
          [[14, 11, 88]],
          [12, 4],
          [17, 17],
          [16, 4],
          [15, 8],
          [[9, 6, 176760]],
          [10, 11],
          [[17, 9, 293661]],
          [10, 13],
          [[9, 12, 54]],
          [[17, 12, 49]],
          [4, 2],
          [[2, 11, 598588]],
          [5, 17],
          [5, 10],
          [[10, 7, 472952]],
          [0, 15],
          [2, 3],
          [[12, 1, 5]],
          [[9, 16, 147239]],
          [10, 12],
          [[6, 3, 337163]],
          [10, 7],
          [8, 3],
          [17, 10],
          [15, 2],
          [[1, 13, 362779]],
          [3, 14],
          [[8, 17, 112504]],
          [[16, 2, 2]],
          [13, 17],
          [2, 2],
          [15, 12],
          [14, 0],
          [[16, 1, 1]],
          [11, 6],
          [0, 9],
          [12, 5],
          [0, 15],
          [[3, 5, 1]],
          [[6, 14, 1]],
          [[13, 15, 1]],
          [[17, 3, 1]],
          [[8, 2, 1]],
          [5, 1],
          [2, 12],
          [7, 8],
          [6, 2],
          [12, 5],
          [[7, 0, 962638]],
          [7, 13],
          [13, 12],
          [13, 9],
          [6, 13],
          [15, 12],
          [0, 16],
          [3, 5],
          [[5, 0, 730643]],
          [9, 16],
          [13, 9],
          [[15, 11, 1]],
        ],
      ],
      [
        null,
        null,
        66326,
        null,
        0,
        null,
        null,
        null,
        null,
        null,
        115877,
        653690,
        null,
        432440,
        264365,
        743562,
        null,
        834421,
        null,
        null,
        null,
        null,
        null,
        195635,
        0,
        725077,
        562366,
        null,
        573234,
        null,
        896820,
        null,
        null,
        934888,
        null,
        311469,
        688101,
        null,
        561736,
        790791,
        null,
        null,
        573376,
        null,
        472952,
        264239,
        630024,
        1321845,
        null,
        637351,
        null,
        null,
        112630,
        0,
        503987,
        66556,
        null,
        344825,
        664229,
        42565,
        561736,
        null,
        null,
        null,
        null,
        null,
        5126,
        727067,
        368532,
        10925,
        42565,
        null,
        612420,
        112679,
        152265,
        254812,
        503987,
        675849,
        1,
        null,
        51260,
        152265,
        null,
      ],
    ],
  ] satisfies Parameters<typeof exercise<ReturnType<typeof use>>>[1];
}
