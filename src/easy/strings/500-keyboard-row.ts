export {};

const firstRow = "qwertyuiop";
const secondRow = "asdfghjkl";
const thirdRow = "zxcvbnm";

const findWords = (words: string[]): string[] => {
  return words.filter(word => {
    let inFirst = false;
    let inSecond = false;
    let inThird = false;

    for (const char of word.toLowerCase()) {
      if (firstRow.includes(char)) inFirst = true;
      else if (secondRow.includes(char)) inSecond = true;
      else if (thirdRow.includes(char)) inThird = true;

      if ((+inFirst + +inSecond + +inThird) > 1) return false;
    }

    return inFirst || inSecond || inThird;
  });
};
