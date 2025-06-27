function kadaneFunc(arr) {
  let maxSum = -Infinity;
  let currentSum = 0;

  arr.forEach((value) => {
    currentSum += value;

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  });

  return maxSum;
}
