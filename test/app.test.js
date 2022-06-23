const sum = require('../app');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(10, 2)).toBe(12);
  });


  test('adds 1 + 2 to equal 3', () => {
    expect(sum(100, 28)).toBe(12);
  });