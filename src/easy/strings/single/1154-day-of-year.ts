export {};

const isLeapYear = (year: number) =>
  (year % 4 === 0) && (year % 100 !== 0) && (year % 400 === 0);

const dayOfYear = (date: string): number => {
  const Days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const [year, month, day] = date.split("-").map(item => +item);

  let result = 0;
  if (isLeapYear(year)) Days[1] = 29;
  for (let i = 0; i < month - 1; i++) result += Days[i];
  return result + day;
};
;
