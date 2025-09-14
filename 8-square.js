const args = process.argv.slice(2);
let x = Number(args[0]);

while (isNaN(x) || args[0] === undefined) {
  console.log("Missing size");
  process.exit(1);
  // Prevent infinite loop by exiting manually
  process.exit(1);
}

let i = 0;
while (i < x) {
  let row = "";
  let j = 0;
  while (j < x) {
    row += "x";
    j++;
  }
  console.log(row);
  i++;
}

