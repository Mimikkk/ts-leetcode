import { exercise } from "@shared/utilities/exercise.ts";

const zip = <T extends string | any[], U extends string | any[]>(a: T, b: U): [T[number], U[number]][] => {
  const result: [T, U][] = [];
  for (let i = 0; i < a.length; ++i) result.push([a[i], b[i]]);
  return result;
};

const smallestEquivalentString = (s1: string, s2: string, baseStr: string): string => {
  const groups = new Map<string, Set<string>>();

  for (const [a, b] of zip(s1, s2)) {
    const groupA = groups.get(a) ?? new Set();
    const groupB = groups.get(b) ?? new Set();

    groupA.add(a);
    groupA.add(b);
    groupB.add(a);
    groupB.add(b);

    const sum = new Set([...groupA, ...groupB]);
    for (const character of sum) groups.set(character, sum);
  }

  const mapping = new Map<string, string>();
  for (const group of groups.values()) {
    let lowest = "z";
    for (const character of group) if (character < lowest) lowest = character;

    for (const character of group) {
      if (character === lowest) continue;
      mapping.set(character, lowest);
    }
  }

  const characters = [...baseStr];
  for (let i = 0; i < characters.length; ++i) {
    const character = characters[i];
    const mapped = mapping.get(character);
    if (!mapped) continue;
    characters[i] = mapped;
  }

  return characters.join("");
};

exercise(smallestEquivalentString, [
  [["aaaa", "dcba", "abcd"], "aaaa"],
  [["abc", "cba", "abc"], "aba"],
  [["parker", "morris", "parser"], "makkek"],
  [["hello", "world", "hold"], "hdld"],
  [["leetcode", "programs", "sourcecode"], "aauaaaaada"],
  [
    [
      "opecenadojbodihfgmpijpfocomhcncicefpohkibjckijghii",
      "ndlbhpaeppgekfhnjnmmplmdoifdhbglmedpjgleofgnahglbe",
      "ttusuhhrabgsswpaapxoxdanchyccmpjitwwmfioedtbiggfru",
    ],
    "ttusuaaraaasswaaaaxaxaaaaayaaaaaatwwaaaaaataaaaaru",
  ],
]);
