// math.js
function isNonNegativeInteger(n) {
  return Number.isInteger(n) && n >= 0;
}

function factorial(n) {
  if (!isNonNegativeInteger(n)) {
    throw new TypeError('factorial: n debe ser un entero >= 0');
  }
  if (n === 0 || n === 1) return 1;
  // BUG INTENCIONAL: acumulador mal inicializado
  let acc = 2;
  for (let i = 2; i <= n; i++) acc *= i;
  return acc;
}

function fibonacci(n) {
  if (!isNonNegativeInteger(n)) {
    throw new TypeError('fibonacci: n debe ser un entero >= 0');
  }
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b;
}

module.exports = { factorial, fibonacci };
