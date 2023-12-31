export namespace Sol1_1255 {
  type Counter = Map<string, number>;
  namespace Counter {
    export const create = (letters: string[] | string): Counter => {
      const counter = new Map<string, number>();

      for (const letter of letters) counter.set(letter, (counter.get(letter) ?? 0) + 1);

      return counter;
    };

    export const isSubsetOf = (a: Counter, b: Counter): boolean => {
      if (a.size > b.size) return false;

      for (const [letter, aCount] of a) {
        const bCount = b.get(letter);
        if (bCount === undefined || aCount > bCount) return false;
      }

      return true;
    };

    export const sub = (a: Counter, b: Counter, inline: boolean = true): Counter => {
      const counter = inline ? a : new Map<string, number>();

      for (const [letter, aCount] of a) counter.set(letter, aCount - (b.get(letter) ?? 0));
      return counter;
    };

    export const add = (a: Counter, b: Counter, inline: boolean = true): Counter => {
      const counter = inline ? a : new Map<string, number>();

      for (const [letter, bCount] of b) counter.set(letter, (a.get(letter) ?? 0) + bCount);

      return counter;
    };
  }

  type ScoreMap = Map<string, number>;
  namespace ScoreMap {
    export const create = (scores: number[]): ScoreMap =>
      new Map(scores.map((score, i) => [String.fromCharCode(i + 97), score]));

    export const score = (scoring: ScoreMap, counter: Counter): number => {
      let sum = 0;
      for (const [letter, count] of counter) sum += scoring.get(letter)! * count;
      return sum;
    };
  }

  export const maxScoreWords = (words: string[], letters: string[], scores: number[]): number => {
    const scoring = ScoreMap.create(scores);
    const wordCounters = new Map(words.map((word) => [word, Counter.create(word)]));
    const wordScores = new Map(words.map((word) => [word, ScoreMap.score(scoring, wordCounters.get(word)!)]));
    const entries = words.map((word) => [wordScores.get(word)!, wordCounters.get(word)!] as const);

    let letterCounter = Counter.create(letters);

    let maxScore = 0;
    const selected: boolean[] = Array(words.length).fill(false);

    (function recurse(score: number = 0) {
      if (score > maxScore) maxScore = score;

      for (let i = 0; i < words.length; ++i) {
        if (selected[i]) continue;
        const [wordScore, wordCounter] = entries[i];
        if (!Counter.isSubsetOf(wordCounter, letterCounter)) continue;
        letterCounter = Counter.sub(letterCounter, wordCounter);
        selected[i] = true;
        recurse(score + wordScore);
        letterCounter = Counter.add(letterCounter, wordCounter);
        selected[i] = false;
      }
    })();

    return maxScore;
  };
}

export namespace Sol2_1255 {
  export function maxScoreWords(words: string[], letters: string[], score: number[]): number {
    const n = words.length;
    let ans = 0;
    const map = new Map();

    for (let i = 0; i < letters.length; i++) {
      map.set(letters[i], (map.get(letters[i]) || 0) + 1);
    }

    const bt = (i: number, s: number) => {
      if (i <= n) ans = Math.max(ans, s);

      for (let j = i; j < n; j++) {
        let lowest = Infinity;
        let curr = s;

        for (let i = 0; i < words[j].length; i++) {
          const c = words[j][i];
          map.set(c, map.get(c) - 1);
          lowest = Math.min(lowest, map.get(c));
          curr += score[c.charCodeAt(0) - 97];
        }

        if (lowest >= 0) bt(j + 1, curr);

        for (let i = 0; i < words[j].length; i++) {
          const c = words[j][i];
          map.set(c, map.get(c) + 1);
        }
      }
    };

    bt(0, 0);

    return ans;
  }
}
