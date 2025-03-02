export namespace Iter {
  export const count = <T>(iter: Iterable<T>, predicate: (value: T) => boolean) => {
    let count = 0;

    for (const value of iter) {
      if (predicate(value)) count += 1;
    }
    return count;
  };

  export const total = <T>(iter: Iterable<T>) => count(iter, () => true);
}
