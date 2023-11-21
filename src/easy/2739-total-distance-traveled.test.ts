import { exercise } from "@shared/utilities/exercise";

const distanceTraveled = (mainTank: number, additionalTank: number): number => {
  let distance = 0;

  let overflow = 0;
  while (mainTank > 0) {
    distance += mainTank;

    let extra = Math.min(~~(mainTank / 5), additionalTank);
    const extraOverflow = mainTank % 5;

    if (extraOverflow + overflow >= 5) {
      overflow = (extraOverflow + overflow) % 5;
      extra = Math.min(extra + 1, additionalTank);
    } else {
      overflow += extraOverflow;
    }

    additionalTank -= extra;
    mainTank = extra;
  }

  return distance * 10;
};

exercise(distanceTraveled, [
  [[5, 10], 60],
  [[1, 2], 10],
  [[9, 2], 110],
]);
