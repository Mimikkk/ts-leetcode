export module N {
  type digit = number;
  export const divmod = (n: number, mod: number) => [Math.floor(n / mod), n % mod];
  export const add = (a: number, b: number) => a + b;
  export const sub = (a: number, b: number) => a - b;

  export const isOdd = (a: number, b: number) => +(a & 1);
  export const isEven = (a: number, b: number) => !(a & 1);

  export const toDigits = (n: number): digit[] => {
    let [sum, mod]: [number[], number] = [[], 0];

    while (n > 0) ([n, mod] = divmod(n, 10)), sum.push(mod);

    return sum.reverse();
  };

  export const fromDigits = (digits: digit[]) => {
    let n = 0;
    for (let d of digits) n = n * 10 + d;
    return n;
  };

  export const fromStr = (str: string) => +str;
  export const fromStrs = (str: string[]) => +str.join("");
}
