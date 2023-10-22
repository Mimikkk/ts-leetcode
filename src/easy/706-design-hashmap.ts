export {};

class MyHashMap {
  private readonly hash: number[] = new Array(1e6 + 1).fill(-1);

  put = (key: number, value: number) => (this.hash[key] = value);
  get = (key: number) => this.hash[key];
  remove = (key: number) => (this.hash[key] = -1);
}
