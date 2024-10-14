import { assertN, fatal, unreachable } from "./error.js";

describe("fatal", () => {
  test("should throw an error with the correct message", () => {
    expect(() => fatal("Test error")).toThrow("Test error");
  });
});

describe("unreachable", () => {
  test("should throw 'Unreachable!'", () => {
    expect(() => unreachable()).toThrow("Unreachable!");
  });
});

describe("assertN", () => {
  test("should return the number if it is positive and an integer", () => {
    expect(assertN(1)).toBe(1);
    expect(assertN(100)).toBe(100);
  });

  test("should throw an error for non-positive numbers", () => {
    expect(() => assertN(-5)).toThrow("-5 is not positive.");
    expect(() => assertN(0)).toThrow("0 is not positive.");
    expect(() => assertN(NaN)).toThrow("NaN is not positive.");
  });

  test("should throw an error for fractional numbers", () => {
    expect(() => assertN(1.5)).toThrow("1.5 is not an integer.");
  });
});
