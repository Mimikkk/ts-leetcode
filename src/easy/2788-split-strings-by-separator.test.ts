import { exercise } from "@shared/utilities/exercise";

const splitWordsBySeparator = (words: string[], separator: string): string[] => {
  const splat: string[] = [];

  for (let k = words.length - 1; k >= 0; --k) {
    let end = words[k].length;

    characters: for (let i = words[k].length - 1; i >= 0; --i) {
      let start = i;

      for (let j = separator.length - 1; j >= 0; --j) {
        if (words[k][start] !== separator[j]) continue characters;
        --start;
      }

      if (i + 1 !== end) splat.unshift(words[k].substring(i + 1, end));
      end = start + 1;
      i = start + 1;
    }

    if (0 !== end) splat.unshift(words[k].substring(0, end));
  }

  console.log(X);
  return splat;
};

exercise(splitWordsBySeparator, [
  [
    [["one.two.three", "four.five", "six"], "."],
    ["one", "two", "three", "four", "five", "six"],
  ],
  [[[";;"], ";"], []],
  [[[";;;;"], ";;"], []],
  [
    [["abc;;def"], ";;"],
    ["abc", "def"],
  ],
  [
    [["abc;;;;;def;;"], ";;"],
    ["abc;", "def"],
  ],
]);
