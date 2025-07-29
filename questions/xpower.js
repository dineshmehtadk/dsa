function xPower(value, pow) {
  let binForm = pow;
  let x = value;
  let ans = 1;

  while (binForm > 0) {
    if (binForm % 2 === 1) {
      ans *= x;
    }
    x *= x;
    binForm = Math.trunc(binForm / 2);
  }

  console.log(ans);
}

xPower(3, 5);
