import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


class MyHashMap {
  private readonly hash: number[] = new Array(1e6 + 1).fill(-1);

  put = (key: number, value: number) => (this.hash[key] = value);
  get = (key: number) => this.hash[key];
  remove = (key: number) => (this.hash[key] = -1);
}
