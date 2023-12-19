import re
import functools

from copy import deepcopy


def main():
  file_name = 'day-19-aplenty.case.txt'
  workflow_text, _ = open(file_name).read().split('\n\n')

  WorkflowRegex = re.compile("(\w+)\{(.*)}")
  RuleRegex = re.compile('(\w+)([<>])(\d+):(\w+)')

  workflows = {}
  for line in workflow_text.splitlines():
    (name, rules_raw) = WorkflowRegex.match(line).groups()

    rules = [
      (cat, op, int(val), dest) for cat, op, val, dest in
      [RuleRegex.match(rule).groups() for rule in rules_raw.split(',') if ':' in rule]
    ]

    workflows[name] = (rules, rules_raw.split(',')[-1])

  def sum_ranges(ranges: dict[str, list[int]]):
    [[x0, y0], [x1, y1], [x2, y2], [x3, y3]] = ranges.values()
    return (y0 - x0 + 1) * (y1 - x1 + 1) * (y2 - x2 + 1) * (y3 - x3 + 1)

  def traverse_ranges(ranges: dict[str, list[int]], workflow):
    leftover = {k: v[:] for (k, v) in ranges.items()}
    for cat, op, val, target in workflow[0]:
      ranges = deepcopy(leftover)

      if op == '<':
        ranges[cat][1] = val - 1
        leftover[cat][0] = val
      else:
        ranges[cat][0] = val + 1
        leftover[cat][1] = val

      if target == 'A':
        yield sum_ranges(ranges)
      elif target != 'R':
        yield from traverse_ranges(ranges, workflows[target])

    if workflow[1] == 'A':
      yield sum_ranges(leftover)
    elif workflow[1] != 'R':
      yield from traverse_ranges(leftover, workflows[workflow[1]])

  start_ranges = dict(zip(list('xmas'), [[1, 4000]] * 4))
  return sum(traverse_ranges(start_ranges, workflows['in']))


if __name__ == '__main__':
  print(main(), 167409079868000)
  print(main(), 116738260946855)
