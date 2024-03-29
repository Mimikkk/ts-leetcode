type MyPick<T, K extends keyof T> = { [R in K]: T[R] };

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  Expect<Equal<Expected3, MyPick<Todo, "title" | "completed" | "description">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">,
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

interface Expected3 extends Todo {}
