import { exercise } from "@shared/utilities/exercise.ts";

const minAddToMakeValid = (s: string): number => {
  let hangingRight = 0;
  let hangingLeft = 0;

  for (const c of s) {
    switch (c) {
      case "(":
        ++hangingLeft;
        break;
      case ")":
        if (hangingLeft > 0) --hangingLeft;
        else ++hangingRight;
        break;
    }
  }

  return hangingRight + hangingLeft;
};

exercise(minAddToMakeValid, [
  [["())"], 1],
  [["((("], 3],
]);
