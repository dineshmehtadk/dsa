function xPower(value, pow) {
  let binForm = pow;
  let x = value;
  let ans = 1;
    const decimalPlaces = (x.toString().split('.'));

    
console.log(value.toString())

  if(binForm<0){
    x = 1/x;
    binForm=-binForm;
    console.log(binForm)

  }

  while (binForm > 0) {
    if (binForm % 2 === 1) {
      ans *= x;
    }
    x *= x;
    binForm = Math.trunc(binForm / 2);
  }

//   console.log(ans.toFixed(decimalPlaces));
}

xPower( 2.00000, -2);
