const args = process.argv.slice(2); 

if (args.length === 0) {
  console.log("No argument");
} else {
  console.log(args[0]);
}