function BinaryToDecimail(n) {
  let decimal = 0;
  let quotient = n;
  let i = 0;

  while (quotient > 0) {
    let temp;

    temp = quotient % 10;

    quotient = Math.floor(quotient / 10);

    decimal = decimal + temp * Math.pow(2, i);
    i = i + 1;
  }

  console.log(decimal);
}
