export {};

const strStr = (haystack: string, needle: string): number =>
  needle.length ?[...haystack].findIndex((c, i) => {
    if (c === needle[0]) {
      let j = 1;
      while (j < needle.length && i + j < haystack.length && haystack[i + j] === needle[j]) j++;
      return j === needle.length;
    }
  }):0;

describe("28 - implement strstr", () => {
  it("should pass", () => {
    expect(strStr("hello", "ll")).toEqual(2);
  });

  it("should pass", () => {
    expect(strStr("aaaaa", "bba")).toEqual(-1);
  });

  it("should pass", () => {
    expect(strStr("aaaaa", "")).toEqual(0);
  });

  it("should pass", () => {
    expect(strStr("", "")).toEqual(0);
  });

  it("should pass", () => {
    expect(strStr("a", "a")).toEqual(0);
  });

  it("should pass", () => {
    expect(strStr("aaa", "a")).toEqual(0);
  });
});
