export default defineEventHandler(async (event) => {
    const body = await readBody(event)

  if(body){
    var result = operation(body.listNumbers, body.search)
     return {
    success: true,
    data:result
  }
  }
 
})

export function operation(numbers:String,seachrNUmber:number ) {
    var suma; 
    var listNumbers = numbers.split(',').map(Number).filter((it) => it < seachrNUmber);

    let result = []
    // var temp = false;
    for (let index = 0; index < listNumbers.length; index++) {
        // temp = false;
        for (let tempIndex = index + 1; tempIndex < listNumbers.length; tempIndex++) {
            // suma = (valorLimpio[index] + valorLimpio[tempIndex]);
            // temp = suma == seachrNUmber
            // console.log("[" + index + "," + tempIndex, "] => " + valorLimpio[index] + " + " + valorLimpio[tempIndex] + " = " + suma + " " + temp)
            
            suma =listNumbers[index] + listNumbers[tempIndex];

            if (suma == seachrNUmber) {
                result.push(listNumbers[index] + "+" + listNumbers[tempIndex] + "="+suma)
                // temp = true
            }
        }
    }
    return result;
}