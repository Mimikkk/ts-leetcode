export {};

class MyHashSet {
  private readonly hash: boolean[] = new Array(1e6 + 1).fill(false);

  add = (key: number) => (this.hash[key] = true);
  remove = (key: number) => (this.hash[key] = false);
  contains = (key: number) => this.hash[key];
}
