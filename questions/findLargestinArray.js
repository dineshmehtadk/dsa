function findLargest(list) {
  let largest = -Infinity;

  for (let i = 0; i < list.length; i++) {
    if (largest < list[i]) {
      largest = list[i];
    }
  }

  console.log(largest);
}

findLargest([2, 3, 6, 1, 0, 7, -4, 5, 6, 2, 9, 6]);
