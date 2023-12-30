import itertools
import math

def find_width(text: str) -> int:
  return max(map(len, text.splitlines()))

class Pipe:
  Horizontal = '\u2500'
  Vertical = '\u2502'
  TopLeft = '\u256d'
  TopRight = '\u256e'
  BottomRight = '\u256f'
  BottomLeft = '\u2570'
  NewLine = '\n'

  @classmethod
  def line(cls, width: int) -> str:
    return cls.Horizontal * width

  @classmethod
  def top(cls, width: int) -> str:
    return cls.TopLeft + cls.line(width) + cls.TopRight

  @classmethod
  def pad(cls, text: str, width: int, left: int, right: int) -> str:
    return cls.Vertical + ' ' * left + text.ljust(width) + ' ' * right + cls.Vertical

  @classmethod
  def bottom(cls, width: int) -> str:
    return cls.BottomLeft + cls.line(width) + cls.BottomRight

def pad_sentences(text: str, left_pad: int, right_pad: int) -> list[str]:
  lines = text.splitlines()

  right_column = max((
    find_rightpad(line)
    for line in lines
    if not line.isspace()
  ), default=0)

  left_column = min((
    find_leftpad(line)
    for line in lines
    if not line.isspace()
  ), default=math.inf)

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

  left = left or ''
  right = right or ''

  left = pad_sentences(left, 0, 1) or ['']
  right = pad_sentences(right, 1, 0) or ['']

  left_first = left[0]
  right_first = right[0]

  width_left = len(left_first)

  (a_l, a_c, a_r) = find_text_span(left_first)
  (b_l, b_c, b_r) = find_text_span(right_first)

  width_gap = 1
  width_parent = find_width(parent)
  left_pad_parent = (a_l + width_left + b_r) // 2 - width_parent // 2
  parent = pad_sentences(parent, left_pad_parent, 0)

  left_top = (' ' * a_c + Pipe.TopLeft).ljust(left_pad_parent, Pipe.Horizontal)
  left_top = left_top if has_left else ''.ljust(left_pad_parent)

  right_top = Pipe.Horizontal * (width_left + width_gap + b_c - left_pad_parent - width_parent) + Pipe.TopRight
  right_top = right_top if has_right else ''

  skip = len(left_top)
  parent[-1] = left_top + parent[-1][skip:skip + width_parent] + right_top

  return join_horizontal(parent, left, right, left_width=width_left, gap_width=width_gap)

def box(value: str, pad: int = 0):
  width = find_width(value)

  return '\n'.join((
    Pipe.top(width + 2 * pad),
    *(
      Pipe.pad(line, width, pad, pad)
      for line in value.splitlines()
    ),
    Pipe.bottom(width + 2 * pad)
  ))

def main():
  print(box('123', 2))
  print(binary_edge('p', 'a', binary_edge('q', 'b', binary_edge('q', 'b', 'c'))))
  print(binary_edge('p', None, binary_edge('q', 'b', binary_edge('q', 'b', None))))
  print(binary_edge('p', None, None))
  print(binary_edge('p', None, None))
  print(binary_edge('p', None, None))

if __name__ == '__main__':
  main()
