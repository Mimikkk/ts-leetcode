import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


const distributeCandies = (candies: number[]): number => Math.min(candies.length / 2, [...new Set(candies)].length);
