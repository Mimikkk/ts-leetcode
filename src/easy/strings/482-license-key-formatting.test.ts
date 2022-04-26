export {};

const licenseKeyFormatting = (s: string, k: number): string => {
  const arr = [...s.split("-").join("")];
  for (let i = arr.length - k - 1; i >= 0; i -= k) arr[i] += "-";
  return arr.join("").toUpperCase();
};

describe("License Key Formatting", () => {
  it("should pass default test", () => {
    expect(licenseKeyFormatting("5F3Z-2e-9-w", 4)).toEqual("5F3Z-2E9W");
  });

  it("should pass default test", () => {
    expect(licenseKeyFormatting("2-5g-3-J", 2)).toEqual("2-5G-3J");
  });
});