function checkIsPrime(n) {
  let isPrime = true;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;

      // console.log("Not a Prime")
      return isPrime;
    }
  }

  if (isPrime) {
    // console.log("Number is Prime")
    return isPrime;
  }
}

function FindPrimeNumbers(n) {
  const validation = /^[+]?\d+([.]\d+)?$/;

  if (!validation.test(n)) {
    console.log('Not a valid number');
    return;
  }

  for (let i = 2; i <= n; i++) {
    if (checkIsPrime(i)) {
      console.log('Prime Number', i);
    }
  }
}

FindPrimeNumbers(50);
