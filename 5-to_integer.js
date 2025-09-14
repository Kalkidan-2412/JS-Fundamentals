const args = process.argv.slice(2); 
const  num = Math.trunc(Number(args[0]));

if (args[0]=== undefined ) {
  console.log("Not a number");

}else if (isNaN(num))
 console.log("Not a number");
else {
    console.log("My number:"+" " + num )
}

