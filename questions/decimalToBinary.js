function decimalToBinary(n) {
  let binary = 0;
  let quotient = n;
  let i = 0;

  while (quotient > 0) {
    let temp;

    temp = quotient % 2;

    quotient = Math.floor(quotient / 2);

    binary = binary + temp * Math.pow(10, i);
    i = i + 1;
  }

  console.log(binary);
}

decimalToBinary(10);
