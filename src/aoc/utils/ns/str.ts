export namespace Str {
  export const trimlines = (input: string): string[] => input.split('\r\n').map((x) => x.trim());
}
