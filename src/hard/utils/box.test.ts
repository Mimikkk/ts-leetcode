import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";

import { box } from "./box.ts";
import { trimlines } from "./text.ts";

describe("Draw - Box", () => {
  it("should box a string", () => {
    expect(box("Hello, world!")).toBe(
      trimlines`
      ╭─────────────╮
      │Hello, world!│
      ╰─────────────╯
      `,
    );
  });

  it("should box a string with padding", () => {
    expect(box("Hello, world!", 2)).toBe(
      trimlines`
      ╭─────────────────╮
      │  Hello, world!  │
      ╰─────────────────╯
      `,
    );
  });

  it("should box a string with multiple lines", () => {
    expect(box("Hello,\nworld!")).toBe(
      trimlines(`
      ╭──────╮
      │Hello,│
      │world!│
      ╰──────╯
      `),
    );
  });

  it("should box a string with multiple lines and padding", () => {
    expect(box("Hello,\nworld!", 2)).toBe(
      trimlines`
      ╭──────────╮
      │  Hello,  │
      │  world!  │
      ╰──────────╯
      `,
    );
  });

  it("should box a string with left justification", () => {
    expect(box("Hello world!", 2, 0)).toBe(
      trimlines`
      ╭──────────────╮
      │  Hello world!│
      ╰──────────────╯
      `,
    );
  });

  it("should box a string with right justification", () => {
    expect(box("Hello world!", 0, 2)).toBe(
      trimlines`
      ╭──────────────╮
      │Hello world!  │
      ╰──────────────╯
      `,
    );
  });

  it("should box a string with left and right justification", () => {
    expect(box("Hello world!", 2, 2)).toBe(
      trimlines`
      ╭────────────────╮
      │  Hello world!  │
      ╰────────────────╯
      `,
    );
  });
});
