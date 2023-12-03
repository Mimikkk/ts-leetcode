import { exercise } from "@shared/utilities/exercise.js";

const countSeniors = (details: string[]): number => {
  let count = 0;

  for (const detail of details) if (+detail.substring(11, 13) > 60) ++count;

  return count;
};

exercise(countSeniors, [
  [[["7868190130M7522", "5303914400F9211", "9273338290F4010"]], 2],
  [[["1313579440F2036", "2921522980M5644"]], 0],
  [
    [
      [
        "9751302862F0693",
        "3888560693F7262",
        "5485983835F0649",
        "2580974299F6042",
        "9976672161M6561",
        "0234451011F8013",
        "4294552179O6482",
      ],
    ],
    4,
  ],
]);
