export {};
const minNumberOfHours = (
  initialEnergy: number,
  initialExperience: number,
  energy: number[],
  experience: number[],
) => {
  let hours = 0;
  let totalEnergy = initialEnergy;
  let totalExp = initialExperience;

  for (let i in experience) {
    if (totalExp <= experience[i]) {
      hours += experience[i] - totalExp + 1;
      totalExp = experience[i] + 1;
    }

    if (totalEnergy <= energy[i]) {
      hours += energy[i] - totalEnergy + 1;
      totalEnergy = energy[i] + 1;
    }

    totalEnergy -= energy[i];
    totalExp += experience[i];
  }

  return hours;
};

describe("min num of hours", () => {
  it("case 1", () => {
    expect(minNumberOfHours(5, 3, [1, 4, 3, 2], [2, 6, 3, 1])).toEqual(8);
  });
});
