import { describe, it } from "vitest";
import { trimlines } from "./text.js";
import { ListNode } from "@shared/structures/index.js";
import { Line } from "./line.js";
import { Chalk } from "./chalk.js";

describe("Draw - Line-Node", () => {
  describe("Base Suite", () => {
    it("should draw a line", () => {
      const line = ListNode.node([1, 2, 3, 4, 5, 6, 7]);

      expect(Line.repr(line)).toBe("1─2─3─4─5─6─7");
    });

    it("should draw a line with long numbers", () => {
      const line = ListNode.node([1, 20, 300]);

      expect(Line.repr(line)).toBe("1─20─300");
    });
  });

  describe("Cycle Suite", () => {
    it("should draw a line with a cycle at beginning", () => {
      const line = ListNode.node([1, 2, 3, 4, 5, 6, 7]);
      const list = ListNode.list(line);
      list[list.length - 1].next = list[0];

      expect(Line.repr(line)).toBe(trimlines`
        1─2─3─4─5─6─7╮
        ╰────────────╯
    `);
    });

    it("should draw a line with a cycle at any other point", () => {
      const line = ListNode.node([1, 2, 3, 4, 5, 6, 7]);
      const list = ListNode.list(line);
      list[list.length - 1].next = list[1];

      expect(Line.repr(line)).toBe(trimlines`
        1─2─3─4─5─6─7╮
          ╰──────────╯
    `);
    });

    it("should draw a line with a cycle at end", () => {
      const line = ListNode.node([1, 2, 3, 4, 5, 6, 7]);
      const list = ListNode.list(line);
      list[list.length - 1].next = list[list.length - 1];

      expect(Line.repr(line)).toBe(trimlines`
        1─2─3─4─5─6─7╮
                    ╰╯
    `);
    });

    it("should draw a line with a cycle at start and long numbers", () => {
      const line = ListNode.node([123, 321]);
      const list = ListNode.list(line);
      list[list.length - 1].next = list[0];

      expect(Line.repr(line)).toBe(
        trimlines(`
        123─321╮
         ╰─────╯
    `),
      );
    });

    it("should draw a line with a cycle at end and long numbers", () => {
      const line = ListNode.node([123, 321]);
      const list = ListNode.list(line);
      list[1].next = list[1];

      expect(Line.repr(line)).toBe(
        trimlines(`
        123─321╮
             ╰─╯
    `),
      );
    });

    it("should draw a line with a cycle at end and even long numbers", () => {
      const line = ListNode.node([1230, 3210]);
      const list = ListNode.list(line);
      list[1].next = list[1];

      expect(Line.repr(line)).toBe(
        trimlines(`
        1230─3210╮
              ╰──╯
    `),
      );
    });

    it("should draw a line with a cycle at end and even long numbers", () => {
      const line = ListNode.node([1230, 3210]);
      const list = ListNode.list(line);
      list[1].next = list[0];

      expect(Line.repr(line)).toBe(
        trimlines(`
        1230─3210╮
         ╰───────╯
    `),
      );
    });
  });

  describe("Pointer Suite", () => {
    it("should draw a line with pointers", () => {
      const line = ListNode.node([1, 2, 3, 4, 5, 6, 7]);
      const list = ListNode.list(line);

      expect(Line.repr(line, [list[0], list[5]])).toEqual(trimlines`
        1─2─3─4─5─6─7
        ^         ^  
    `);
    });
    it("should draw a line with stacking pointers", () => {
      const line = ListNode.node([1, 2, 3, 4, 5, 6, 7]);
      const list = ListNode.list(line);

      expect(Line.repr(line, [list[0], list[0], list[5]])).toEqual(trimlines`
        1─2─3─4─5─6─7
        ^         ^  
        ^  
    `);
    });
    it("should draw a line with pointers and even long numbers", () => {
      const line = ListNode.node([1230, 3210]);
      const list = ListNode.list(line);

      expect(Line.repr(line, [list[0], list[1]])).toEqual(trimlines`
        1230─3210
         ^    ^  
    `);
    });

    it("should draw a line with pointers and odd long numbers", () => {
      const line = ListNode.node([123, 321]);
      const list = ListNode.list(line);

      expect(Line.repr(line, [list[0], list[1]])).toEqual(trimlines`
        123─321
         ^   ^  
    `);
    });

    it("should draw a line with many number", () => {
      const line = ListNode.node([12, 123, 1234, 1, 2, 3]);
      const list = ListNode.list(line);

      expect(
        Line.repr(line, [
          list[0],
          list[1],
          list[2],
          list[3],
          list[4],
          list[5],
          list[0],
          list[1],
          list[2],
          list[3],
          list[4],
          list[5],
        ]),
      ).toEqual(trimlines`
        12─123─1234─1─2─3
        ^   ^   ^   ^ ^ ^
        ^   ^   ^   ^ ^ ^
    `);
    });
  });

  describe("Cycle Pointer Suite", () => {
    it("should draw a line with a cycle at beginning and pointers", () => {
      const line = ListNode.node([1, 2, 3, 4, 5, 6, 7]);
      const list = ListNode.list(line);
      list[list.length - 1].next = list[0];

      expect(Line.repr(line, [list[0], list[5]])).toEqual(trimlines`
        1─2─3─4─5─6─7╮
        ╰────────────╯
        ^         ^
    `);
    });
  });

  describe("Cycle Color Pointer Suite", () => {
    it("should draw a line with a cycle at beginning and pointers", () => {
      const line = ListNode.node([123, 2, 3, 4, 5, 6, 7]);
      const list = ListNode.list(line);
      list[list.length - 1].next = list[0];

      expect(Line.repr(line, [[list[0], "red"]])).toEqual(
        trimlines(`
        123─2─3─4─5─6─7╮
         ╰─────────────╯
         ${Chalk.chalk("^", "red")}
    `),
      );
    });
  });
});
