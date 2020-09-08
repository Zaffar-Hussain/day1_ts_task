// In two diemsnional string array sort each row data. Each row represent the team members.
var teams:string[][] = new Array(["Zafar", "Muriel"], ["Ashwin", "Alfonsa"], ["Sameeha", "Maimuna", "Thashina"]);
console.log("\n");
for(var i=0; i<teams.length; i++)
{
    console.log("team"+(i+1)+ " " +teams[i].sort());
}
