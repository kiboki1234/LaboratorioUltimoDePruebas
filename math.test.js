// math.test.js
const { factorial, fibonacci } = require('./math');

describe('factorial', () => {
  test('factorial(0) = 1', () => {
    expect(factorial(0)).toBe(1);
  });

  test('factorial(1) = 1', () => {
    expect(factorial(1)).toBe(1);
  });

  test('factorial(5) = 120', () => {
    expect(factorial(5)).toBe(120);
  });

  test('lanza error si n es negativo', () => {
    expect(() => factorial(-1)).toThrow(TypeError);
  });

  test('lanza error si n no es entero', () => {
    expect(() => factorial(3.5)).toThrow(TypeError);
  });
});

describe('fibonacci', () => {
  test('fibonacci(0) = 0', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('fibonacci(1) = 1', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('fibonacci(10) = 55', () => {
    expect(fibonacci(10)).toBe(55);
  });

  test('lanza error si n es negativo', () => {
    expect(() => fibonacci(-2)).toThrow(TypeError);
  });

  test('lanza error si n no es entero', () => {
    expect(() => fibonacci(2.2)).toThrow(TypeError);
  });
});
