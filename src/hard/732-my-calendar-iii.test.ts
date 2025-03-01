import { exercise } from "@shared/utilities/exercise.ts";
import { Sol1_732, Sol2_732 } from "./732-my-calendar-iii.ts";

const use =
  (namespace: typeof Sol1_732 | typeof Sol2_732) =>
  (calls: ["MyCalendarThree", ..."book"[]], bookings: Parameters<typeof Sol1_732.MyCalendarThree.prototype.book>[]) => {
    let calendar = new namespace.MyCalendarThree();

    let result: [null, ...number[]] = [null];
    for (let i = 1; i < calls.length; ++i) result.push(calendar.book(...bookings[i]));

    return result;
  };

exercise(use(Sol1_732), [
  [
    [
      ["MyCalendarThree", "book", "book", "book", "book", "book", "book"],
      [
        [0, 0],
        [10, 20],
        [50, 60],
        [10, 40],
        [5, 15],
        [5, 10],
        [25, 55],
      ],
    ],
    [null, 1, 1, 2, 3, 3, 3],
  ],
]);

exercise(use(Sol2_732), [
  [
    [
      ["MyCalendarThree", "book", "book", "book", "book", "book", "book"],
      [
        [0, 0],
        [10, 20],
        [50, 60],
        [10, 40],
        [5, 15],
        [5, 10],
        [25, 55],
      ],
    ],
    [null, 1, 1, 2, 3, 3, 3],
  ],
]);
