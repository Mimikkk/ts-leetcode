export {};

const monthsNumber: Record<string, string> = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};
const reformatDate = (date: string): string => {
  const [day, month, year] = date.split(" ");
  const dayNum = day.length === 3 ? `0${day.slice(0, 1)}` : day.slice(0, 2);
  const monthNum = month.slice(0, 3);

  return `${year}-${monthsNumber[monthNum]}-${dayNum}`;
};

describe("reformat date", () => {
  it("case 1", () => {
    expect(reformatDate("20th Oct 2052")).toBe("2052-10-20");
  });
});
