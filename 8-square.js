const args = process.argv.slice(2);
const x = Number(args[0]);

if (isNaN(x) || args[0] === undefined) {
  console.log("Missing size");
} else {

    let i = 0; 
    while(i < x){
        let row = "";
        for(let j = 0; j < x; j++){
           row += "x";
        }
         console.log(row);
         i++ ;
    }
}
