export {};

const lemonadeChange = (bills: number[]): boolean => {
  const change = { 5: 0, 10: 0 };

  return !bills.some((bill) => {
    switch (bill) {
      case 5:
        ++change[5];
        break;
      case 10:
        if (!change[5]) return true;
        --change[5];
        ++change[10];
        break;
      case 20:
        if (change[10] > 0 && change[5] > 0) {
          --change[10];
          --change[5];
        } else if (change[5] >= 3) change[5] -= 3;
        else return true;
        break;
    }
  });
};

describe("lemonade change", () => {
  it("case 1", () => {
    expect(lemonadeChange([5, 5, 5, 10, 20])).toBe(true);
  });

  it("case 2", () => {
    expect(lemonadeChange([5, 5, 10, 10, 20])).toBe(false);
  });
});