export {};
const convert = (s: string, numRows: number): string => {
  if (numRows === 1) return s;
  const rows = Array(numRows).fill("");

  let row = 0;
  let isGoingDown = false;
  for (let i = 0; i < s.length; i++) {
    rows[row] += s[i];
    if (row === 0 || row === numRows - 1) isGoingDown = !isGoingDown;
    row += isGoingDown ? 1 : -1;
  }

  return rows.join("");
};

describe("zigzag", () => {
  it("case 1", () => {
    expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
  });

  it("case 2", () => {
    expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
  });
});
