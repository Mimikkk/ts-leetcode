class SubrectangleQueries {
  private readonly rectangle: number[][];

  constructor(rectangle: number[][]) {
    this.rectangle = structuredClone(rectangle);
  }

  updateSubrectangle(row1: number, col1: number, row2: number, col2: number, newValue: number): void {
    for (let row = row1; row <= row2; ++row) {
      for (let col = col1; col <= col2; ++col) {
        this.rectangle[row][col] = newValue;
      }
    }
  }

  getValue = (row: number, col: number) => this.rectangle[row][col];
}

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */