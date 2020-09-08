

var two_dim_arr:string[][] = new Array(["Zafar", "Muriel"], ["Ashwin", "Alfonsa"], ["Sameeha", "Maimuna", "Thashina"]);
console.log("rows before insertion:")
for(var i=0; i<two_dim_arr.length; i++)
{
    console.log("row"+(i+1)+ " " +two_dim_arr[i].sort());
}
var input_ele:string = "kattappa";
var row_pos:number = 1; 
var insert = two_dim_arr[row_pos].push(input_ele);
console.log("rows after insertion:")
for(var i=0; i<two_dim_arr.length; i++)
{
    console.log("row"+(i+1)+ " " +two_dim_arr[i].sort());
}
