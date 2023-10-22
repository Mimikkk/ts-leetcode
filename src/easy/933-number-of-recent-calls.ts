export {};

const MaxLatency = 3000;
class RecentCounter {
  queue: number[] = [];

  constructor() {
    this.queue = [];
  }

  ping(timestamp: number) {
    this.queue.push(timestamp);
    while (this.queue[0] < timestamp - MaxLatency) this.queue.shift();
    return this.queue.length;
  }
}
