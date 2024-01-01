export namespace Sol1_732 {
  export class SegmentTree {
    bookings: number = 0;
    lazy: number = 0;

    left: SegmentTree | null = null;
    right: SegmentTree | null = null;
  }

  export class MyCalendarThree {
    segments: SegmentTree = new SegmentTree();

    update(start: number, end: number, left: number, right: number, node: SegmentTree) {
      if (left !== right) {
        if (node.left === null) node.left = new SegmentTree();
        if (node.right === null) node.right = new SegmentTree();
        node.left.lazy += node.lazy;
        node.right.lazy += node.lazy;
      }

      if (node.lazy !== 0) {
        node.bookings += node.lazy;
        node.lazy = 0;
      }

      if (left > end || right < start) return;

      if (left >= start && right <= end) {
        ++node.bookings;
        if (left !== right) {
          ++node.left!.lazy;
          ++node.right!.lazy;
        }
        return;
      }

      const mid = (left + right) >> 1;
      this.update(start, end, left, mid, node.left!);
      this.update(start, end, mid + 1, right, node.right!);

      node.bookings = Math.max(node.left!.bookings, node.right!.bookings);
    }

    book(startTime: number, endTime: number): number {
      this.update(startTime, endTime - 1, 0, 1_000_000_000 - 1, this.segments);
      return this.segments.bookings;
    }
  }
}

export namespace Sol2_732 {
  export class MyCalendarThree {
    times: Record<number, number> = {};

    book(startTime: number, endTime: number): number {
      this.times[startTime] = (this.times[startTime] ?? 0) + 1;
      this.times[endTime] = (this.times[endTime] ?? 0) - 1;

      let max = 0;
      let overlaps = 0;
      for (const time in this.times) {
        overlaps += this.times[time];
        if (overlaps > max) max = overlaps;
      }

      return max;
    }
  }
}
