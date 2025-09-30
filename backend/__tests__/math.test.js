const sum = require('../src/math');

test('2 + 3 = 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('-1 + 1 = 0', () => {
  expect(sum(-1, 1)).toBe(0);
});
