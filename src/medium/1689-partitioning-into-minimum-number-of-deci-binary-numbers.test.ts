const minPartitions = (n: string) => Math.max(...n.split('').map(Number));


describe('1689 - partitioning-into-minimum-number-of-deci-binary-numbers', () => {
  it('case 1', () => {
    expect(minPartitions('32')).toEqual(3);
  });

  it('case 2', () => {
    expect(minPartitions('82734')).toEqual(8);
  });

  it('case 3', () => {
    expect(minPartitions('27346209830709182346')).toEqual(9);
  });

  it('case 4', () => {
    expect(minPartitions('1234567890')).toEqual(9);
  });
});
