export const splitlines = (text: string) => text.split("\n");
export const trimlines = (text: string) =>
  splitlines(text)
    .map((line) => line.trim())
    .filter((line) => line)
    .join("\n");

export const findMaxWidth = (lines: string[]): number => Math.max(...lines.map((line) => line.length));
