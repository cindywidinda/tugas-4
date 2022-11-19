function searchName(callback){
    const prosess = [];
 
    for(let i = 0; i < this.length;i++){
        const ceknama = callback(this[i],i,this);
        if(ceknama){
           prosess.push(this[i]);
     }
 } 
  return prosess;
 }
const names= ['Abigail', 'Alexandra', 'Alison',
'Amanda', 'Angela', 'Bella',
'Carol', 'Caroline', 'Carolyn',
'Deirdre', 'Diana', 'Elizabeth',
'Ella', 'Faith', 'Olivia', 'Penelope'];
  
 //search name & total
 const array1 = names.filter((name,nameIndex) => name.includes("ol"));
 const total = array1.filter((name,nameIndex) => nameIndex < 2);
 console.log(total);