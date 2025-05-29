function fibonacci(n) {
  let firstValue = 0;
  let secondValue = 1;
  let tempValue = 0;

  for (let i = 1; i <= n; i++) {
    console.log(tempValue);

    tempValue = secondValue;

    secondValue = secondValue + firstValue;
    firstValue = tempValue;
  }
}

fibonacci(15);
