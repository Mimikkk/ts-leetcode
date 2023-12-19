export namespace Aplenty {
  export type CategoryName = "x" | "m" | "a" | "s";
  export type Workflow = Record<CategoryName, number>;
  export type Rule =
    | [CategoryName, "greater-than" | "less-than", number, string]
    | ["reject" | "accept"]
    | ["jump", string];

  export namespace Workflow {
    export const from = (input: string[]): Workflow[] => input.map(parse);
    export const value = ({ x, m, a, s }: Workflow): number => x + m + a + s;

    const parse = (line: string): Workflow => {
      const [, x, m, a, s] = line.match(/x=(\d+),m=(\d+),a=(\d+),s=(\d+)/i)!;

      return { x: +x, m: +m, a: +a, s: +s };
    };
  }

  export namespace Rule {
    export const from = (input: string[]): Record<string, Rule[]> =>
      Object.fromEntries(
        input
          .map((raw) => raw.match(/(.+)?\{(.+)}/)!)
          .map(([, name, rulesRaw]) => [name, parse(rulesRaw)])
          .concat([
            ["R", [["reject"]]],
            ["A", [["accept"]]],
          ]),
      );

    const parse = (line: string): Rule[] =>
      line.split(",").map((line) => {
        const [, operand, operator, value, target] = line.match(/(.+)([<>])(\d+):(.+)|(.+)/)!;

        if (operand)
          return [operand as CategoryName, operator === "<" ? "less-than" : "greater-than", +value, target] as const;

        switch (line) {
          case "R":
            return ["reject"];
          case "A":
            return ["accept"];
          default:
            return ["jump", line];
        }
      });

    export const evaluate = (workflow: Rule, category: Workflow): string | "rejected" | "accepted" | "continue" => {
      switch (workflow.length) {
        case 4: {
          const [operand, operator, value, target] = workflow;
          let v = category[operand];

          if (operator === "less-than" && v < value) return target;
          if (operator === "greater-than" && v > value) return target;
          return "continue";
        }
        case 2: {
          const [, target] = workflow;

          return target;
        }
        case 1: {
          const [operator] = workflow;

          if (operator === "reject") return "rejected";
          if (operator === "accept") return "accepted";
          return operator;
        }
      }
    };
  }

  export const parse = (input: string): [Workflow[], Record<string, Rule[]>] => {
    const lines = input.split(/\r?\n/);
    const categoriesRaw = lines.splice(lines.findIndex((line) => line === "") + 1);
    const workflowsRaw = lines;
    workflowsRaw.length = workflowsRaw.length - 1;

    return [Workflow.from(categoriesRaw), Rule.from(workflowsRaw)];
  };
}
