export const splitlines = (text: string) => text.split("\n");
export const trimlines = (text: string | TemplateStringsArray) => {
  if (Array.isArray(text)) text = text.join("\n");
  const lines = splitlines(text as string).filter((line) => line.trim());

  const start = lines
    .map((line) => {
      for (let i = 0; i < line.length; ++i) if (line[i] !== " ") return i;
      return Infinity;
    })
    .reduce((a, b) => Math.min(a, b));

  return lines.map((line) => line.slice(start).trimEnd()).join("\n");
};

export const findMaxWidth = (lines: string[]): number => Math.max(...lines.map((line) => line.length));
