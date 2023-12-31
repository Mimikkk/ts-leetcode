export namespace Chalk {
  export type Color =
    | "black"
    | "red"
    | "green"
    | "yellow"
    | "blue"
    | "magenta"
    | "cyan"
    | "white"
    | "gray"
    | "grey"
    | "blackBright"
    | "redBright"
    | "greenBright"
    | "yellowBright"
    | "blueBright"
    | "magentaBright"
    | "cyanBright"
    | "whiteBright"
    | "bgBlack"
    | "bgRed"
    | "bgGreen"
    | "bgYellow"
    | "bgBlue"
    | "bgMagenta"
    | "bgCyan"
    | "bgWhite"
    | "bgBlackBright"
    | "bgRedBright"
    | "bgGreenBright"
    | "bgYellowBright"
    | "bgBlueBright"
    | "bgMagentaBright"
    | "bgCyanBright"
    | "bgWhiteBright";

  const colors = new Map<Color, number>([
    ["black", 30],
    ["red", 31],
    ["green", 32],
    ["yellow", 33],
    ["blue", 34],
    ["magenta", 35],
    ["cyan", 36],
    ["white", 37],
    ["gray", 90],
    ["grey", 90],
    ["blackBright", 90],
    ["redBright", 91],
    ["greenBright", 92],
    ["yellowBright", 93],
    ["blueBright", 94],
    ["magentaBright", 95],
    ["cyanBright", 96],
    ["whiteBright", 97],
    ["bgBlack", 40],
    ["bgRed", 41],
    ["bgGreen", 42],
    ["bgYellow", 43],
    ["bgBlue", 44],
    ["bgMagenta", 45],
    ["bgCyan", 46],
    ["bgWhite", 47],
    ["bgBlackBright", 100],
    ["bgRedBright", 101],
    ["bgGreenBright", 102],
    ["bgYellowBright", 103],
    ["bgBlueBright", 104],
    ["bgMagentaBright", 105],
    ["bgCyanBright", 106],
    ["bgWhiteBright", 107],
  ]);

  export const chalk = (text: string | number, color: Color) => `\x1b[${colors.get(color)}m${text}\x1b[0m`;

  export const clear = (text: string) => text.replace(/\x1b\[\d+m/g, "");
}
