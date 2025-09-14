const args = process.argv.slice(2);
const x = Number(args[0]);

while (isNaN(x) || args[0] === undefined){
    console.log("Missing size");
}
    let i = 0; 
    while(i < x){
        let row = "";
        for(let j = 0; j < x; j++){
           row += "x";
        }
         console.log(row);
         i++;
    }
