const timeLimit =
  <AsyncFn extends (...params: any[]) => Promise<any>>(fn: AsyncFn, time: number) =>
  async (...args: Parameters<AsyncFn>): Promise<Awaited<ReturnType<AsyncFn>>> =>
    Promise.race([new Promise((_, reject) => setTimeout(() => reject("Time Limit Exceeded"), time)), fn(...args)]);
