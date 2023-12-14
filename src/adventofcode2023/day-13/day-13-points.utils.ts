export namespace Points {
  export enum Cell {
    Rock = "#",
    Ash = ".",
  }

  export type Map = string[];

  export const parse = (input: string): [Map, Map][] => {
    const lines = input.split(/\r?\n/).concat("");

    const maps = [];
    for (let i = 0, map = []; i < lines.length; ++i) {
      if (!lines[i]) {
        maps.push(map);
        map = [];

        continue;
      }

      map.push(lines[i]);
    }

    const withTranspose = (map: Map): [Map, Map] => {
      const result = [];
      for (let i = 0; i < map[0].length; ++i) result.push(map.map((row) => row[i]).join(""));
      return [map, result] as const;
    };

    return maps.map(withTranspose);
  };
}
