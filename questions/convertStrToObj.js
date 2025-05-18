


function convertStringToObject (str){

    const strArray = str.split('.');
    const lastValue = strArray.pop();

    const strObject = strArray.reduceRight((acc, current)=>

        {
            return {[current]: acc}},lastValue


    

        
    )

    console.log(strObject)




}



convertStringToObject('a.b.c.d.e');