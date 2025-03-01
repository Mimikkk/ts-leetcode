import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const ord = (n: string) => n.charCodeAt(0);
const char = (n: number) => String.fromCharCode(n);
const cell = (row: string, col: number) => `${row}${col}`;

const cellsInRange = (s: string): string[] => {
  const [start, end] = s.split(":");
  const [startRow, startCol] = start;
  const [endRow, endCol] = end;

  const rows = ord(endRow) - ord(startRow) + 1;
  const cols = ord(endCol) - ord(startCol) + 1;

  const result = [];
  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      result.push(cell(char(ord(startRow) + x), +startCol + y));
    }
  }
  return result;
};

describe("cells in a range on an excel sheet", () => {
  it("case 1", () => {
    expect(cellsInRange("A1:A1")).toEqual(["A1"]);
  });

  it("case 2", () => {
    expect(cellsInRange("A1:B2")).toEqual(["A1", "A2", "B1", "B2"]);
  });

  it("case 3", () => {
    expect(cellsInRange("A1:C3")).toEqual(["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]);
  });

  it("case 3", () => {
    expect(cellsInRange("C1:D3")).toEqual(["C1", "C2", "C3", "D1", "D2", "D3"]);
  });
});