export {};

const swap = (arr: number[], i: number, j: number) => [arr[i], arr[j]] = [arr[j], arr[i]];

class KthLargest {
  private readonly nums: number[];
  private readonly k: number;
  constructor(k: number, nums: number[]) {
    this.nums = [];
    this.k = k;

    nums.forEach((n) => this.add(n));
  }

  add = (val: number) => {
    this.nums.push(val);
    this.#heapify();
    return this.nums[0] ?? null;
  };

  #heapify = () => {
    this.#bottomUp(this.nums.length - 1);
    if (this.nums.length > this.k) this.#shift();
  };

  #bottomUp = (index: number) => {
    if (index === 0) return;
    const parent = Math.floor((index - 1) / 2);

    if (this.nums[parent] > this.nums[index]) {
      this.#swap(parent, index);
      this.#bottomUp(parent);
    }
  };
  #topDown = (index: number) => {
    let smallest = index;
    const left = index * 2 + 1;
    const right = left + 1;

    if (this.nums[left] < this.nums[smallest]) smallest = left;
    if (this.nums[right] < this.nums[smallest]) smallest = right;

    if (smallest !== index) {
      this.#swap(index, smallest);
      this.#topDown(smallest);
    }
  };

  #shift = () => {
    this.nums[0] = this.nums.pop()!;
    this.#topDown(0);
  };
  #swap = (i: number, j: number) => swap(this.nums, i, j);
}

describe("kth largest", () => {
  it("case 1", () => {
    const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
    expect(kthLargest.add(3)).toEqual(4);
    expect(kthLargest.add(5)).toEqual(5);
    expect(kthLargest.add(10)).toEqual(5);
    expect(kthLargest.add(9)).toEqual(8);
    expect(kthLargest.add(4)).toEqual(8);
  });
});
