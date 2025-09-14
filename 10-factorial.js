const args = process.argv.slice(2);
const a = Number(args[0]);

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

if (!isNaN(a)) {
  console.log(factorial(a));
} else {
  console.log("1");
}
