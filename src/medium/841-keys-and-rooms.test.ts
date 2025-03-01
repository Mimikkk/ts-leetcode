import { exercise } from "@shared/utilities/exercise.ts";

const canVisitAllRooms = (rooms: number[][]): boolean => {
  const visited = new Set<number>();
  const toVisit = [0];

  while (toVisit.length) {
    const room = toVisit.pop()!;

    visited.add(room);

    for (let i = 0; i < rooms[room].length; i++) {
      if (!visited.has(rooms[room][i])) toVisit.push(rooms[room][i]);
    }
  }

  return visited.size === rooms.length;
};

exercise(canVisitAllRooms, [
  [[[[1], [2], [3], []]], true],
  [[[[1, 3], [3, 0, 1], [2], [0]]], false],
]);
