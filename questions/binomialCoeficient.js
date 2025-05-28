function factorial(n) {
  let product = 1;
  let value = n;

  while (value > 1) {
    product = product * value;
    value = value - 1;
  }

  return product;
}

function bionomialCoffefient(n, r) {
  const numirator = factorial(n);
  const denominator1 = factorial(r);
  const denominator2 = factorial(n - r);

  const result = Math.floor(numirator / (denominator1 * denominator2));

  console.log(result);
}

bionomialCoffefient(6, 3);
