import { describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";


class ParkingSystem {
  constructor(private big: number, private medium: number, private small: number) {}

  addCar(type: 1 | 2 | 3) {
    switch (type) {
      case 3:
        return !!this.small && (this.small--, true);
      case 2:
        return !!this.medium && (this.medium--, true);
      case 1:
        return !!this.big && (this.big--, true);
    }
  }
}

describe("parking system", () => {
  it("should return true", () => {
    expect(new ParkingSystem(1, 1, 0).addCar(1)).toBe(true);
    expect(new ParkingSystem(1, 1, 0).addCar(3)).toBe(false);
  });
});
