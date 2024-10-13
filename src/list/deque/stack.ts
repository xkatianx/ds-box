export class Stack<T> extends Array<T> {
  get top() {
    return this.at(-1);
  }
}
