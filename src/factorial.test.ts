import { factorial } from "./factorial.ts";

test("factorial-5", () => {
  expect(factorial(5)).toBe(120);
});

test("factorial-minus", () => {
  const will_throw = () => {
    factorial(-1);
  };
  expect(will_throw).toThrow("Negative numbers not supported");
});

test("factorial-0", () => {
  expect(factorial(0)).toBe(1);
});

test("factorial-1", () => {
  expect(factorial(1)).toBe(1);
});

test("factorial-10", () => {
  expect(factorial(10)).toBe(3628800);
});

test("factorial-1.5", () => {
  expect(() => factorial(1.5)).toThrow("Negative numbers not supported");
});