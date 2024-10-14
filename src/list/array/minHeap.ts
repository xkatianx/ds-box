export class MinHeap<T> {
  private heap: Array<T> = [null as unknown as T];

  constructor(private compare: (a: T, b: T) => number) {}

  get length() {
    return this.heap.length - 1;
  }

  get first() {
    return this.heap.at(1);
  }

  getSnapshot() {
    return this.heap.slice(1);
  }

  static from<T>(compare: (a: T, b: T) => number, arr: T[]) {
    const heap = new MinHeap(compare);
    arr.push(arr[0]);
    heap.heap = arr;
    for (let i = Math.floor(heap.length / 2); i > 0; i--) heap.siftDown(i);
    return heap;
  }

  private siftUp(i: number) {
    while (i > 1) {
      const parent = i >> 1;
      if (this.compareByIndex(i, parent) >= 0) break;
      this.swapByIndex(i, parent);
      i = parent;
    }
  }

  private siftDown(i: number) {
    while (i * 2 < this.heap.length) {
      const left = i * 2;
      const right = left + 1;
      const small = this.compareByIndex(left, right) > 0 ? right : left;
      if (this.compareByIndex(i, small) <= 0) break;
      this.swapByIndex(i, small);
      i = small;
    }
  }

  push(x: T) {
    let curr = this.heap.length;
    this.heap.push(x);
    this.siftUp(curr);
  }

  pop() {
    const out = this.first;
    if (out == null) return out;
    this.heap[1] = this.heap.at(-1)!;
    this.heap.pop();
    this.siftDown(1);
    return out;
  }

  private swapByIndex(a: number, b: number) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  /** `undefined` is larger than valid values. */
  private compareByIndex(a: number, b: number) {
    const left = this.heap[a];
    const right = this.heap[b];
    if (left === right) return 0;
    if (left == null) return 1;
    if (right == null) return -1;
    return this.compare(left, right);
  }
}
