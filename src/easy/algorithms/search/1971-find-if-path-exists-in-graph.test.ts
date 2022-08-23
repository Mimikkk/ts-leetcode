export {};

type Edge = [number, number];
const validPath = (
  n: number,
  edges: Edge[],
  source: number,
  destination: number,
) => {
  if (!edges.length) return true;

  const visited: boolean[] = [];
  const queue = [source];
  while (queue.length > 0) {
    const start = queue.shift()!;
    visited[start] = true;

    for (const i in edges) {
      const index = edges[i].indexOf(start);
      if (index == -1) continue;

      const end = edges[i][1 - index];
      if (end == destination) return true;
      else if (!visited[end]) queue.push(end);
    }
  }

  return false;
};

describe("valid path", () => {
  it("case 1", () => {
    expect(
      validPath(
        4,
        [
          [0, 1],
          [0, 2],
          [1, 3],
        ],
        0,
        3,
      ),
    ).toEqual(true);
  });
});