const n =10;

for(var i = 1; i< n+1; i++){
    
    
    for(var j=n-i; j>0; j--){
        process.stdout.write("  ")

    }
    
    for(var k=0; k<i + (i-1); k++){
        process.stdout.write(`${(parseInt(k)+1 ).toString()} `)

    }
      process.stdout.write("\n"); 
      
      
      

}