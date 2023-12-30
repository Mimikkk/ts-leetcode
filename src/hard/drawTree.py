import itertools
import math

def find_width(lines: list[str]) -> int:
  return max(map(len, lines))

class Pipe:
  Horizontal = '\u2500'
  Vertical = '\u2502'
  TopLeft = '\u256d'
  TopRight = '\u256e'
  BottomRight = '\u256f'
  BottomLeft = '\u2570'
  NewLine = '\n'

def pad_sentences(lines: list[str], left_pad: int, right_pad: int) -> list[str]:
  left_column = min((
    find_leftpad(line)
    for line in lines
    if not line.isspace()
  ), default=math.inf)
  right_column = max((
    find_rightpad(line)
    for line in lines
    if not line.isspace()
  ), default=0)

  trim_left = max(left_column - left_pad, 0)
  pad = ' ' * max(left_pad - left_column, 0)
  return [pad + line[trim_left:].rstrip().ljust(right_column + right_pad) for line in lines]

_str = Pipe.Horizontal + Pipe.TopLeft + Pipe.TopRight + ' '
def find_text_span(text: str) -> tuple[int, int, int]:
  right = len(text.rstrip(_str))
  left = len(text) - len(text.lstrip(_str))
  return left, (left + right) // 2, right

def find_rightpad(text: str) -> int:
  return len(text.rstrip())

def find_leftpad(text: str) -> int:
  return len(text) - len(text.lstrip())

def remove_lines_leftpad(lines: list[str]) -> list[str]:
  pad = min(map(find_leftpad, lines))

  return [line[pad:] for line in lines]

def join_horizontal(parent: list[str], left: str, right: str, left_width: int, gap_width: int) -> str:
  gap = ' ' * gap_width

  lines = tuple(filter(lambda line: not line.isspace(), (
    *parent,
    *(
      a.ljust(left_width) + gap + b
      for a, b in itertools.zip_longest(left, right, fillvalue='')
    )
  )))

  return '\n'.join(remove_lines_leftpad(lines))

def binary_edge(parent: str, left: None | str, right: None | str):
  has_left = left is not None
  has_right = right is not None

  left = (left or '').splitlines()
  right = (right or '').splitlines()
  parent = parent.splitlines()

  left = pad_sentences(left, 0, 1)
  right = pad_sentences(right, 1, 0)

  left_first = left[0] if left else ''
  right_first = right[0] if right else ''

  width_left = len(left_first)

  (a_l, a_c, a_r) = find_text_span(left_first)
  (b_l, b_c, b_r) = find_text_span(right_first)

  width_gap = 1
  width_parent = find_width(parent)
  left_pad_parent = (a_l + width_left + b_r) // 2 - width_parent // 2
  print(a_l, a_c, a_r, b_l, b_c, b_r, width_parent, left_pad_parent)

  parent = pad_sentences(parent, left_pad_parent, 0)

  left_top = (' ' * a_c + Pipe.TopLeft).ljust(left_pad_parent, Pipe.Horizontal)
  left_top = left_top if has_left else ''.ljust(left_pad_parent)

  right_top = Pipe.Horizontal * (width_left + width_gap + b_c - left_pad_parent - width_parent) + Pipe.TopRight
  right_top = right_top if has_right else ''

  skip = len(left_top)
  parent[-1] = left_top + parent[-1][skip:skip + width_parent] + right_top

  print(parent[-1])

  return join_horizontal(parent, left, right, left_width=width_left, gap_width=width_gap)

def main():
  # print(binary_edge('p', 'a', binary_edge('q', None, binary_edge('q', 'b', 'c'))))
  # print(binary_edge('p', None, binary_edge('q', 'b', binary_edge('q', 'b', None))))
  # print(binary_edge('p', None, None))
  # print(binary_edge('p', None, None))
  # print(binary_edge('p', 'a', binary_edge('q', 'b', binary_edge('q', 'b', 'c'))))
  print(binary_edge('p', 'a', 'b'))

if __name__ == '__main__':
  main()
