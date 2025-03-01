import { exercise } from "@shared/utilities/exercise.ts";
const TestCase = await Deno.readTextFile("./day-19-aplenty.case.txt");
const UserCase = await Deno.readTextFile("./day-19-aplenty.user.txt");
import { Aplenty } from "./day-19-aplenty.utils.ts";

const minv = 1;
const maxv = 4000;
const aplenty = (input: string): number => {
  const [, rules] = Aplenty.parse(input);

  const combinations = ({ x, m, a, s }: any) =>
    (x.max - x.min + 1) * (m.max - m.min + 1) * (a.max - a.min + 1) * (s.max - s.min + 1);

  let valid = {
    x: { min: minv, max: maxv },
    m: { min: minv, max: maxv },
    a: { min: minv, max: maxv },
    s: { min: minv, max: maxv },
  };

  let rule = rules.in;
  here: for (let i = 0; i < rule.length; ) {
    let r = rule[i];

    switch (r.length) {
      case 4: {
        const [operand, operator, value, target] = r;

        let isValid = false;

        if (operator === "less-than") {
          if (valid[operand].max < value) {
            isValid = true;
          } else if (valid[operand].max > value - 1) {
            valid[operand].max = value - 1;
          }
        }

        if (operator === "greater-than") {
          if (valid[operand].min > value) {
            isValid = true;
          } else if (valid[operand].min < value + 1) {
            valid[operand].min = value + 1;
          }
        }

        if (!isValid) break;
        rule = rules[target];
        console.log("a", { rule, target });
        i = 0;
        continue;
      }
      case 2: {
        const [, target] = r;
        rule = rules[target];
        console.log("b", { rule, target });
        i = 0;
        continue;
      }
      case 1: {
        const [target] = r;
        if (target === "accept") {
          break here;
        }
        if (target === "reject") {
          break here;
        }
        rule = rules[target];
        console.log("c", { rule, target });
        i = 0;
        continue;
      }
    }

    ++i;
  }

  return combinations(valid);
};

exercise(aplenty, [
  [[TestCase], 167409079868000],
  [[UserCase], 472630],
]);
