export {};

const strongPasswordCheckerII = (password: string) =>
  /^(?=.*\d)(?=.*[!@#$%^&*)(+-])(?=.*[a-z])(?=.*[A-Z])(?!.*([A-Za-z0-9!@#$%^&*)(+-])\1).{8,}$/.test(
    password,
  );

describe("is strong ii", () => {
  it("case 1", () => {
    expect(strongPasswordCheckerII("IloveLe3tcode!")).toBe(true);
  });
});
