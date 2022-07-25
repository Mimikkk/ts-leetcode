export {};

const lengthOfLongestSubstring = (s: string): number => {
  let max = 0;
  const seen: Record<string, number> = {};

  let left = 0;

  for (let right = 0; right < s.length; ++right) {
    const char = s[right];
    if (char in seen)
      if (seen[char] < left) max = Math.max(max, right - left);
      else left = seen[char] + 1;
    else max = Math.max(max, right - left + 1);

    seen[char] = right;
  }

  return max;
};

describe("length of longest substring", () => {
  it("case 1", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
  });

  it("case 2", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
  });

  it("case 3", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
  });
});
