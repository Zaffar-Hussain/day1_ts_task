// Deleteing particular name for the 2-D array 

var two_dim_arr:string[][] = new Array(["Zafar", "Muriel"], ["Ashwin", "Alfonsa"], ["Sameeha", "Maimuna", "Thashina"]);
console.log("rows before deletion:")
for(var i=0; i<two_dim_arr.length; i++)
{
    console.log("\trow"+(i+1)+ " " +two_dim_arr[i].sort());
}
var del_item:string = "Zafar";

for(var i=0;i<two_dim_arr.length;i++)
{
    for(var j=0;j<two_dim_arr[i].length;j++)
    {
        if (two_dim_arr[i][j] == del_item) {
            var row:string[] = two_dim_arr[i];
            var deleted = row.splice(j, 1); 
            break;
        }
    }
}
console.log("rows after deletion:")
for(var i=0; i<two_dim_arr.length; i++)
{
    console.log("\trow"+(i+1)+ " " +two_dim_arr[i].sort());
}
