function findSmallest(list) {
  let smallest = Infinity;

  for (let i = 0; i < list.length; i++) {
    if (smallest > list[i]) {
      smallest = list[i];
    }
  }

  console.log(smallest);
}

findSmallest([2, 3, 6, 1, 0, 7, -4, 5, 6, 2, 9, 6]);
