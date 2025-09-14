const args = process.argv.slice(2); 
const x = Number(args[0]);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  let output = "";
  for (let i = 0; i < x; i++) {
    output += "C is fun\n";
  }
  console.log(output.trim());
}
