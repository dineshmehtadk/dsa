const n = 4;

let lastOdd = n;
if (n % 2 === 0) {
  lastOdd = n - 1;
}

for (let i = 0; i < n; i++) {
  for (let j = n - i - 1; j > 0; j--) {
    process.stdout.write('    ');
  }
  process.stdout.write('  *  ');

  if (i > 0) {
    for (let k = 0; k < i * 2 - 1; k++) {
      process.stdout.write('    ');
    }
  }

  if (i > 0) {
    process.stdout.write('  *  ');
  }
  console.log('\n');
}

for (let z = 0; z < n - 1; z++) {
  for (let m = 0; m <= z; m++) {
    process.stdout.write('    ');
  }
  process.stdout.write('  *  ');

  for (let l = lastOdd - 2 * z; l > 0; l--) {
    process.stdout.write('    ');
  }

  if (z < 2) {
    process.stdout.write('  *  ');
  }
  console.log('\n');
}
