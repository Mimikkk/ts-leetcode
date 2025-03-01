from collections import defaultdict
import numpy as np


def main():
  with open("./day-25.case.txt") as file:
    lines = [line.strip('\n') for line in file.readlines()]

  connections = defaultdict(lambda: set())
  connection_set = set()
  for line in lines:
    name, conns = line.split(": ")
    for c in conns.split(' '):
      connections[name].add(c)
      connections[c].add(name)
      connection_set.add(tuple(sorted([name, c])))

  indexes = {k: i for i, k in enumerate(connections.keys())}

  dimension = len(connections)
  degree = np.zeros((dimension, dimension))
  adj = np.zeros((dimension, dimension))

  for k, i in indexes.items():
    degree[i][i] = len(connections[k])

    for n in connections[k]:
      j = indexes[n]
      adj[i][j] = 1

  laplacian = degree - adj
  v = np.linalg.svd(laplacian)[2]
  fiedler = v[-2]

  size = len([value for value in fiedler if value > 0])

  return size * (dimension - size)


if __name__ == '__main__':
  print(main())
