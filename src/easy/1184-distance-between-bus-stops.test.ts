export {};

const distanceBetweenBusStops = (distance: number[], start: number, destination: number) => {
  if (start > destination) [start, destination] = [destination, start];

  let result = 0;
  let total = 0;

  distance.forEach((distance, i) => {
    if (i >= start && i < destination) result += distance;
    total += distance;
  });

  return Math.min(result, total - result);
};

describe("distance between bus stops", () => {
  it("case 1", () => {
    expect(distanceBetweenBusStops([1, 2, 3, 4], 0, 1)).toEqual(1);
  });

  it("case 1", () => {
    expect(distanceBetweenBusStops([1, 2, 3, 4], 0, 2)).toEqual(3);
  });

  it("case 1", () => {
    expect(distanceBetweenBusStops([1, 2, 3, 4], 0, 3)).toEqual(4);
  });
});