export function fatal(message: string): never {
  throw new Error(message);
}

export function unreachable(): never {
  fatal("Unreachable!");
}

/** Assert `num` in ℤ+. */
export function assertN(num: number) {
  if (!(num > 0)) fatal(`${num} is not positive.`);
  if (!Number.isInteger(num)) fatal(`${num} is not an integer.`);
  return num;
}
