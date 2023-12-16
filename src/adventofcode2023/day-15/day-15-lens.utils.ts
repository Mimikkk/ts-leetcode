export namespace Lens {
  export const hash = (str: string): number => str.split("").reduce((a, b) => ((a + b.charCodeAt(0)) * 17) % 256, 0);

  export const parse = (input: string) =>
    input
      .split(/\r?\n/)
      .filter((line) => line)
      .flatMap((line) => line.split(","));

  export const operations = (labels: string[]) =>
    labels.map((label) => label.match(/(\w+)([=-])(\d)?/)!).map(([, l, o, f]) => [l, o, +f] as const);
}
