function checkIsPrime(n) {
  const validation = /^[+]?\d+([.]\d+)?$/;

  if (!validation.test(n)) {
    console.log('Not a valid number');
    return;
  }

  let isPrime = true;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;

      console.log('Not a Prime');
      return;
    }
  }

  if (isPrime) {
    console.log('Number is Prime');
  }
}

checkIsPrime(7);
