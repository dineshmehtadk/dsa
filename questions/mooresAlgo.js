function moojsAlgo(arr) {
  const n = arr.length;

  let mjValue = 0;
  let freq = 0;

  for (let i = 0; i < n; i++) {
    if (freq === 0) {
      mjValue = arr[i];
    }

    if (mjValue === arr[i]) {
      mjValue = arr[i];
      freq++;
    } else {
      freq--;
    }
  }

  let count = 0;

  arr.forEach((val) => {
    if (val === mjValue) {
      count++;
    }
  });

  if (count > n / 2) {
    console.log(mjValue);
  } else {
    console.log('There is no Majority Element !');
  }
}

moojsAlgo([1, 2, 3, 4, 1, 1, 1]);
