import { expect, it } from "vitest";

class BrowserHistory {
  stack: string[];
  current: number;

  constructor(homepage: string) {
    this.stack = [homepage];
    this.current = 0;
  }

  visit(url: string): void {
    this.stack.length = ++this.current;
    this.stack.push(url);
  }

  back(steps: number): string {
    this.current = Math.max(0, this.current - steps);
    return this.stack[this.current];
  }

  forward(steps: number): string {
    this.current = Math.min(this.stack.length - 1, this.current + steps);
    return this.stack[this.current];
  }
}

it("1472-design-browser-history", () => {
  const browserHistory = new BrowserHistory("leetcode.com");
  browserHistory.visit("google.com");
  browserHistory.visit("facebook.com");
  browserHistory.visit("youtube.com");
  expect(browserHistory.back(1)).toBe("facebook.com");
  expect(browserHistory.back(1)).toBe("google.com");
  expect(browserHistory.forward(1)).toBe("facebook.com");
  browserHistory.visit("linkedin.com");
  expect(browserHistory.forward(2)).toBe("linkedin.com");
  expect(browserHistory.back(2)).toBe("google.com");
  expect(browserHistory.back(7)).toBe("leetcode.com");
});
