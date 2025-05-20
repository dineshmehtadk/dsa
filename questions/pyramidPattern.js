

const n =10;

for(var i = 1; i< n+1; i++){
    
    
    for(var j=n-i; j>0; j--){
        console.log("  ")

    }
    
    for(var k=0; k<i; k++){
        console.log(`${(parseInt(k)+1 ).toString()} `)

    }
      console.log("\n"); 
      
      
      

}