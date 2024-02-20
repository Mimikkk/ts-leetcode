import { exercise } from "@shared/utilities/exercise.js";

const displayTable = (orders: [string, string, string][]): string[][] => {
  const map = new Map<string, Map<string, number>>();

  for (const [, table, food] of orders) {
    if (!map.has(table)) map.set(table, new Map());
    const tableMap = map.get(table)!;

    tableMap.set(food, (tableMap.get(food) ?? 0) + 1);
  }

  const foods = [...new Set([...map.values()].flatMap((map) => [...map.keys()]))].sort();

  return [["Table", ...foods]].concat(
    [...map.entries()]
      .sort(([a], [b]) => +a - +b)
      .map(([table, tableMap]) => [table, ...foods.map((food) => `${tableMap.get(food) ?? 0}`)]),
  );
};

exercise(displayTable, [
  [
    [
      [
        ["David", "3", "Ceviche"],
        ["Corina", "10", "Beef Burrito"],
        ["David", "3", "Fried Chicken"],
        ["Carla", "5", "Water"],
        ["Carla", "5", "Ceviche"],
        ["Rous", "3", "Ceviche"],
      ],
    ],
    [
      ["Table", "Beef Burrito", "Ceviche", "Fried Chicken", "Water"],
      ["3", "0", "2", "1", "0"],
      ["5", "0", "1", "0", "1"],
      ["10", "1", "0", "0", "0"],
    ],
  ],
]);
