const args = process.argv.slice(2);

function add(a, b) {
  return a + b;
}

const a = Number(args[0]);
const b = Number(args[1]);

if (!isNaN(a) && !isNaN(b)) {
  console.log(add(a, b));
} else {
  console.log(NaN);
}
