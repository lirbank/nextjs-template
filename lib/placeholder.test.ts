import { expect, test } from "vitest";

test("test", () => {
  expect({
    a: "a",
    b: "b",
  }).toStrictEqual({
    a: "a",
    b: expect.any(String),
  });
});
