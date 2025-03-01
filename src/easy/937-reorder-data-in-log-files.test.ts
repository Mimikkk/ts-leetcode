import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const splitLog = (log: string) => {
  const firstSpaceIdx = log.indexOf(" ");
  const identifier = log.slice(0, firstSpaceIdx);
  const content = log.slice(firstSpaceIdx + 1);

  return [identifier, content, content[0]];
};

const comparator = (a: string, b: string) => {
  const [identifierA, contentA, firstcharA] = splitLog(a);
  const [identifierB, contentB, firstcharB] = splitLog(b);

  if (firstcharA <= "9")
    if (firstcharB <= "9") return 0;
    else return 1;
  if (firstcharB <= "9") return -1;

  const comparison = contentA.localeCompare(contentB);
  return comparison === 0 ? identifierA.localeCompare(identifierB) : comparison;
};

const reorderLogFiles = (logs: string[]) => logs.sort(comparator);

describe("reorder log files", () => {
  it("case 1", () => {
    expect(reorderLogFiles(["dig1 8 1 5 1", "let1 art can", "dig2 3 6", "let2 own kit dig", "let3 art zero"])).toEqual([
      "let1 art can",
      "let3 art zero",
      "let2 own kit dig",
      "dig1 8 1 5 1",
      "dig2 3 6",
    ]);
  });

  it("case 2", () => {
    expect(reorderLogFiles(["a1 9 2 3 1", "g1 act car", "zo4 4 7", "ab1 off key dog", "a8 act zoo"])).toEqual([
      "g1 act car",
      "a8 act zoo",
      "ab1 off key dog",
      "a1 9 2 3 1",
      "zo4 4 7",
    ]);
  });
});