const soma = require('../src/math');

test('2 + 3 = 5', () => {
  expect(soma(2, 3)).toBe(5);
});

test('-1 + 1 = 0', () => {
  expect(soma(-1, 1)).toBe(0);
});
