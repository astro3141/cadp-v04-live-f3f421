export function mean(xs) {
  if (xs.length === 0) return 0;
  return xs.reduce((a, b) => a + b, 0) / xs.length;
}

export function clamp(x, lo, hi) {
  if (lo > hi) throw new RangeError("lo must not exceed hi");
  if (x < lo) return lo;
  if (x > hi) return hi;
  return x;
}
