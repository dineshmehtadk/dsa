function pairSum(arr, target) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] < target) {
      i++;
    } else if (arr[i] + arr[j] > target) {
      j--;
    } else {
      console.log(i, j);
      return;
    }
  }
}

pairSum([2, 7, 11, 15], 26);
