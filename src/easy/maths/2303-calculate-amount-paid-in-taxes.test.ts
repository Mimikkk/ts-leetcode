const calculateTax = (brackets: [number, number][], income: number): number => {
  let totalTax: number = 0;
  let totalIncome: number = 0;

  while (income > 0) {
    const [upper, percent] = brackets.shift()!;

    const taxable = Math.min(income, upper - totalIncome);
    const tax = taxable * (percent / 100);

    totalTax += tax;
    totalIncome = upper;
    income -= taxable;
  }

  return totalTax;
};

describe("calculateTax", () => {
  it("case 1", () => {
    expect(
      calculateTax(
        [
          [0, 0],
          [1000, 10],
          [3000, 20],
          [5000, 30],
        ],
        4000,
      ),
    ).toEqual(120);
  });
});