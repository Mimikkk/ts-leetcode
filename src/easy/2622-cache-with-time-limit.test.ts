import { describe, expect, it } from "vitest";

class TimeLimitedCache {
  #valueByKey: Map<number, number> = new Map();
  #timerByKey: Map<number, number> = new Map();

  set(key: number, value: number, duration: number): boolean {
    const wasDefined = this.#valueByKey.has(key);

    let timerId = this.#timerByKey.get(key);
    if (timerId !== undefined) clearTimeout(timerId);

    timerId = setTimeout(() => {
      this.#valueByKey.delete(key);
      this.#timerByKey.delete(key);
    }, duration);

    this.#valueByKey.set(key, value);
    this.#timerByKey.set(key, timerId);

    return wasDefined;
  }

  get(key: number): number {
    return this.#valueByKey.get(key) ?? -1;
  }

  count(): number {
    return this.#valueByKey.size;
  }
}

describe("TimeLimitedCache", () => {
  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  it("should set a value with a time limit", async () => {
    const cache = new TimeLimitedCache();

    expect(cache.set(1, 42, 1000)).toBe(false);
    expect(cache.get(1)).toBe(42);
    expect(cache.count()).toBe(1);
    sleep(1000);
    expect(cache.get(1)).toBe(0);
    expect(cache.count()).toBe(0);
  });

  it("should set a value with a time limit", async () => {
    const cache = new TimeLimitedCache();

    expect(cache.set(1, 42, 1000)).toBe(false);
    expect(cache.get(1)).toBe(42);
    expect(cache.count()).toBe(1);
    expect(cache.set(1, 19, 500)).toBe(true);
    expect(cache.get(1)).toBe(19);
    expect(cache.count()).toBe(1);
    sleep(1000);
    expect(cache.count()).toBe(0);
  });
});
