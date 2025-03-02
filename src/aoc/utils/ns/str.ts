export namespace Str {
  export const trimlines = (input: string): string[] => input.split('\r\n').map((x) => x.trim());

  export const isDigit = (char: string): boolean => char >= '0' && char <= '9';
}
