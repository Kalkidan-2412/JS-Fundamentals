const args = process.argv.slice(2);
const pro = "is" ;
if (args[0]=== undefined) {
  console.log("undefined is undefined");
} else if (args[1]=== undefined ) {
  console.log(args[0]+ " " + pro);
} else if(args[2] === undefined) {
    console.log(args[0]+" " + pro + " " + args[1]);
}