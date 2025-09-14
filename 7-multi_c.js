const args = process.argv.slice(2); 
const x = Number(args[0]);

if ( isNaN(x) ) {
  console.log("Missing number of occurrences");
} else 
    {
  let output = "C is fun";
  for ( i = 0; i < x; i++) {
     console.log(output);
  }
  
}
