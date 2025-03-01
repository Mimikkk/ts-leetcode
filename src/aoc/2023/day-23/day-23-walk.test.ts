import { exercise } from "@shared/utilities/exercise.ts";
const TestCase = await Deno.readTextFile("./day-23-walk.case.txt");
const UserCase = await Deno.readTextFile("./day-23-walk.user.txt");
import { createMatrix } from "../utils/utils.ts";
import { vi } from "vitest";

type Connection = {
  edgeA: [number, number];
  start: [number, number];
  distance: number;
  end: [number, number];
  edgeB: [number, number];
};
type Node = Map<string, number>;
type Graph = Map<string, Node> & { n: number; m: number };

const neighbours: Record<string, [number, number]> = {
  right: [0, 1],
  down: [1, 0],
  up: [-1, 0],
  left: [0, -1],
};

const movement = [neighbours.right, neighbours.down, neighbours.up, neighbours.left];

const directions: Record<string, [number, number]> = {
  ">": neighbours.right,
  "<": neighbours.left,
  "^": neighbours.up,
  v: neighbours.down,
};

const part1 = (lines: string[], n: number, m: number) => {
  const stack: [number, number, number, Set<string>][] = [[1, 1, 0, new Set<string>().add("0:1")]];

  let max = 0;
  while (stack.length) {
    const [x, y, distance, visited] = stack.pop()!;

    if (x === n && y === m) {
      max = Math.max(max, distance + 1);
      continue;
    }

    const cell = lines[x][y];
    for (const move of movement) {
      const [i, j] = move;
      const xi = x + i;
      const yj = y + j;

      const hash = `${xi}:${yj}`;
      if (lines[xi][yj] === "#" || visited.has(hash) || (cell !== "." && directions[cell] !== move)) continue;

      stack.push([xi, yj, distance + 1, new Set(visited).add(hash)]);
    }
  }

  return max;
};

const part2 = (graph: Graph, nk: string, tnk: string, visited: Set<string>, cd: number) => {
  if (nk === tnk) return cd + 1;

  let maxDistance = 0;
  for (const [connection, distance] of graph.get(nk)!) {
    if (visited.has(connection)) continue;

    maxDistance = Math.max(maxDistance, part2(graph, connection, tnk, new Set(visited).add(connection), cd + distance));
  }
  return maxDistance;
};

const createGraph = (lines: string[], n: number, m: number) => {
  const queue: [[number, number], [number, number]][] = [
    [
      [0, 1],
      [1, 1],
    ],
  ];
  const connections: Connection[] = [];

  const map = new Map() as Graph;
  map.n = n;
  map.m = m;

  const readNode = (key: string) => {
    let node = map.get(key);
    if (node === undefined) {
      node = new Map();
      map.set(key, node);
    }
    return node;
  };

  const setDistance = (f: string, t: string, d: number) => {
    const n = readNode(f);
    const cd = n.get(t);
    if (cd === undefined || cd < d) {
      n.set(t, d);
    }
  };

  while (queue.length) {
    const [[ar, ac], [sr, sc]] = queue.shift()!;
    if (
      connections.some(
        (c) =>
          (c.edgeB[0] === ar && c.edgeB[1] === ac && c.end[0] === sr && c.end[1] === sc) ||
          (c.edgeA[0] === ar && c.edgeA[1] === ac && c.start[0] === sr && c.start[1] === sc),
      )
    ) {
      continue;
    }
    let [cr, cc] = [sr, sc];
    let [pr, pc] = [ar, ac];
    let connectionLength = 1;
    let distance = 0;
    let next: number[][] = [];
    let targetFound = false;
    while (connectionLength === 1 && !targetFound) {
      next = [
        [cr - 1, cc],
        [cr, cc - 1],
        [cr, cc + 1],
        [cr + 1, cc],
      ].filter(([nr, nc]) => !(nr === pr && nc === pc) && lines[nr][nc] !== "#");
      connectionLength = next.length;
      if (connectionLength === 1) {
        [pr, pc] = [cr, cc];
        [cr, cc] = next[0];
      }
      distance = distance + 1;
      targetFound = cr === n && cc === m;
    }
    if (targetFound) {
      connections.push({
        edgeA: [ar, ac],
        start: [sr, sc],
        end: [pr, pc],
        edgeB: [cr, cc],
        distance: distance,
      });
      break;
    }
    if (connectionLength > 0) {
      connections.push({
        edgeA: [ar, ac],
        start: [sr, sc],
        end: [pr, pc],
        edgeB: [cr, cc],
        distance,
      });
      for (const [nr, nc] of next) {
        queue.push([
          [cr, cc],
          [nr, nc],
        ]);
      }
    }
  }

  for (const connection of connections) {
    const a = connection.edgeA.toString();
    const b = connection.edgeB.toString();
    setDistance(a, b, connection.distance);
    setDistance(b, a, connection.distance);
  }

  return map;
};

const walk = (input: string) => {
  const map = input.split(/\r?\n/);
  const n = map.length - 1;
  const m = map[0].length - 2;

  const p1 = part1(map, n, m);
  const graph = createGraph(map, n, m);
  const p2 = part2(graph, "0:1", `${n}:${m}`, new Set<string>().add("0:1"), 0);

  return [p1, p2];
};

exercise(walk, [
  [[TestCase], [94, 154]],
  [[UserCase], [2074, 6494]],
]);
