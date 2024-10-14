import { Stack } from "./stack.js";

export class MinStack<T> extends Stack<T> {
  protected mins = new Stack<T>();

  constructor(private compare: (a: T, b: T) => number) {
    super();
  }

  get min() {
    return this.mins.at(-1);
  }

  push(val: T) {
    super.push(val);
    if (this.min == null) this.mins.push(val);
    else if (this.compare(this.min, val) > 0) this.mins.push(val);
    else this.mins.push(this.min);
    return this;
  }

  pop() {
    this.mins.pop();
    return super.pop();
  }
}
