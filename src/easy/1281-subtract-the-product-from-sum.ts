import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const add = (a: number, b: number) => a + b;
const sum = (args: number[]) => args.reduce(add, 0);
const multiply = (a: number, b: number) => a * b;
const product = (args: number[]) => args.reduce(multiply, 1);

const digits = (n: number) => n.toString().split("").map(Number);

const subtractProductAndSum = (n: number) => product(digits(n)) - sum(digits(n));
