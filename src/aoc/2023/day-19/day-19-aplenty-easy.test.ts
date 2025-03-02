import { Aplenty } from './day-19-aplenty.utils.ts';
import { createDay } from '../../utils/createDay.ts';

const aplenty = (input: string): number => {
  const [workflows, rules] = Aplenty.parse(input);

  const decide = (workflow: Aplenty.Workflow, stack: Aplenty.Rule[]) => {
    for (let i = 0; i < stack.length;) {
      const rule = stack[i];

      const decision = Aplenty.Rule.evaluate(rule, workflow);

      if (decision === 'rejected') return false;
      if (decision === 'accepted') return true;
      if (decision === 'continue') ++i;
      else {
        stack = rules[decision];
        i = 0;
      }
    }

    return false;
  };

  return workflows
    .filter((workflow) => decide(workflow, rules.in))
    .map(Aplenty.Workflow.value)
    .reduce((a, b) => a + b, 0);
};

createDay({
  easy: {
    cases: {
      test: {
        input: 'file:day-19-aplenty.case.txt',
        result: 19114,
      },
      user: {
        input: 'file:day-19-aplenty.user.txt',
        result: 472630,
      },
    },
    prepare: (x) => x,
    solve: (input) => aplenty(input),
  },
});
