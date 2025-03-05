export namespace Str {
  export const trimlines = (input: string): string[] => {
    const lines = input.split('\r\n').map((x) => x.trim());

    if (lines[lines.length - 1] === '') lines.pop();

    return lines;
  };

  export const isDigit = (char: string): boolean => char >= '0' && char <= '9';
}
