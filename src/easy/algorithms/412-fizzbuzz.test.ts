export {};

const createFizzBuzz = (n: number) => {
  if (!(n % 15)) return "FizzBuzz";
  else if (!(n % 3)) return "Fizz";
  else if (!(n % 5)) return "Buzz";
  return `${n}`;
};

const range = (start: number, end: number) =>
  Array.from({ length:end - start }, (_, i) => i + start);
const fizzBuzz = (n: number): string[] => range(1, n + 1).map(createFizzBuzz);

describe("412. Fizz Buzz", () => {
  it("Case 1", () => {
    expect(fizzBuzz(15))
      .toEqual(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
  });
});