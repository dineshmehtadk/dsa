const arr = [-2, 3, 1, -5, 10, 12];
const n = 5;
let max = -Infinity;

for (let st = 0; st < n; st++) {
  let sum = 0;

  for (let end = st; end < n; end++) {
    // for (let i = st; i <= end; i++) {
    //     lst.push(arr[i])

    // }

    sum = +sum + arr[end];
  }
  max = Math.max(sum, max);
}

console.log(max);
