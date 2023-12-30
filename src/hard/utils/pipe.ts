export enum Pipe {
  Horizontal = "─",
  Vertical = "│",
  TopLeft = "╭",
  TopRight = "╮",
  BottomRight = "╯",
  BottomLeft = "╰",
}

export namespace Pipe {
  export const horizontal = (width: number) => Pipe.Horizontal.repeat(width);
}
