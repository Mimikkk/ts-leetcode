type Fn = (...args: any[]) => any;
type CancelFn = { unsubscribe: () => void };
import { it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

class EventEmitter {
  subscribers: Map<string, Fn[]> = new Map();

  subscribe<Fn extends (...args: any[]) => any>(name: string, fn: Fn): CancelFn {
    const callbacks = this.subscribers.get(name) ?? [];
    callbacks.push(fn);
    this.subscribers.set(name, callbacks);

    return {
      unsubscribe: () => {
        let callbacks = this.subscribers.get(name);
        if (!callbacks) return;
        callbacks = callbacks.filter((cb) => cb !== fn);

        if (callbacks.length) {
          this.subscribers.set(name, callbacks);
        } else {
          this.subscribers.delete(name);
        }
      },
    };
  }

  emit<Fn extends (...args: any[]) => any>(name: string, args?: Parameters<Fn>): ReturnType<Fn>[] {
    return this.subscribers.get(name)?.map((callback) => (args ? callback(...args) : callback())) ?? [];
  }
}

it("S2694", () => {
  const emitter = new EventEmitter();

  const handleClick1 = () => 1;
  const handleClick2 = () => 2;
  const handleClick3 = () => 3;
  const sub1 = emitter.subscribe("onClick", handleClick1);
  const sub2 = emitter.subscribe("onClick", handleClick2);
  const sub3 = emitter.subscribe("onClick", handleClick3);
  expect(emitter.emit("onClick")).toEqual([1, 2, 3]);
  sub1.unsubscribe();
  expect(emitter.emit("onClick")).toEqual([2, 3]);
  sub2.unsubscribe();
  expect(emitter.emit("onClick")).toEqual([3]);
  sub3.unsubscribe();
  expect(emitter.emit("onClick")).toEqual([]);
});
