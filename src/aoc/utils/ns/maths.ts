export namespace Maths {
  export const add = (a: number, b: number) => a + b;
  export const mul = (a: number, b: number) => a * b;
  export const sub = (a: number, b: number) => a - b;
  export const div = (a: number, b: number) => a / b;
  export const mod = (a: number, b: number) => a % b;
  export const pow = (a: number, b: number) => a ** b;
  export const sqrt = (a: number) => Math.sqrt(a);
  export const cbrt = (a: number) => Math.cbrt(a);
  export const gcd = (a: number, b: number) => {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };
  export const lcm = (a: number, b: number) => (a * b) / gcd(a, b);

  export const sum = (nums: number[]): number => {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
      result += nums[i];
    }

    return result;
  };
  export const product = (nums: number[]): number => {
    let result = 1;

    for (let i = 0; i < nums.length; i++) {
      result *= nums[i];
    }

    return result;
  };
}
