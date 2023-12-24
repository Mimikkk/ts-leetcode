from enum import Enum
from functools import reduce
from math import gcd


class ModuleType(Enum):
  FlipFlop = "%"
  Conjunction = "&"
  Broadcast = "broadcaster"


class PulseType(Enum):
  Low = False
  High = True


class Module(object):
  def __init__(self, line: str):
    name, destinations = line.split("->")
    name = name.strip()

    if name == "broadcaster":
      self.type = ModuleType.Broadcast
      self.name = name
    else:
      self.type = ModuleType(name[0])
      self.name = name[1:]

    self.destinations = [x.strip() for x in destinations.split(",")]
    self.memory = False if self.type == ModuleType.FlipFlop else {}


def lcm(a: int, b: int) -> int: return a * b // gcd(a, b)


def main():
  with open("./day-20-pulse.user.txt") as file:
    lines = file.readlines()

  modules = {}
  rx_feeder = ""

  for line in lines:
    module = Module(line)

    modules[module.name] = module

    if "rx" in module.destinations:
      rx_feeder = module.name

  for name, module in modules.items():
    for destination in module.destinations:
      if (
          destination in modules
          and modules[destination].type == ModuleType.Conjunction
      ):
        modules[destination].memory[name] = PulseType.Low

  lengths = {}
  visited = {
    name: False
    for (name, module) in modules.items()
    if rx_feeder in module.destinations
  }

  count = 0
  while True:
    count += 1
    queue = [
      ("broadcaster", destination, PulseType.Low)
      for destination in modules["broadcaster"].destinations
    ]

    while queue:
      (source, destination, pulse) = queue.pop(0)
      if destination not in modules: continue

      module = modules[destination]
      if module.name == rx_feeder and pulse == PulseType.High:
        visited[source] = True

        if source not in lengths: lengths[source] = count

        if all(visited.values()):
          product = reduce(lcm, lengths.values(), 1)
          print(product, lengths)
          return product

      if module.type == ModuleType.FlipFlop:
        if pulse == PulseType.Low:
          module.memory = not module.memory

          pulse = PulseType.High if module.memory else PulseType.Low

          queue.extend(
            (module.name, destination, pulse)
            for destination in module.destinations
          )

      else:
        module.memory[source] = pulse

        pulse = (
          PulseType.Low
          if all(pulse == PulseType.High for pulse in module.memory.values())
          else PulseType.High
        )

        queue.extend(
          (module.name, destination, pulse)
          for destination in module.destinations
        )


if __name__ == '__main__':
  main()
