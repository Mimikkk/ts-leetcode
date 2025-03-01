
import { exercise } from '@shared/utilities/exercise.ts';


const asMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":");

  return +hours * 60 + +minutes;
};

const haveConflict = (event1: [string, string], event2: [string, string]): boolean => {
  const [aStart, aEnd] = event1.map(asMinutes);
  const [bStart, bEnd] = event2.map(asMinutes);

  return aStart <= bStart && bEnd <= aEnd;
};

exercise(haveConflict, [
  [[["01:15", "02:00"], ["02:00", "03:00"]], true],
  [[["01:00", "02:00"], ["01:20", "03:00"]], true],
  [[["10:00", "11:00"], ["14:00", "15:00"]], false],
]);

