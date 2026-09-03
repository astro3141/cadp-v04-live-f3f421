import assert from "node:assert/strict";
import test from "node:test";
import { clamp, mean } from "../src/stats.mjs";

test("mean of empty is 0", () => assert.equal(mean([]), 0));
test("mean averages", () => assert.equal(mean([2, 4]), 3));

test("clamp returns the lower bound when below it", () =>
  assert.equal(clamp(1, 2, 4), 2));
test("clamp returns the upper bound when above it", () =>
  assert.equal(clamp(5, 2, 4), 4));
test("clamp returns the value when within the bounds", () =>
  assert.equal(clamp(3, 2, 4), 3));
test("clamp throws when the lower bound exceeds the upper bound", () =>
  assert.throws(() => clamp(3, 4, 2), RangeError));
