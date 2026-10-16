export default defineEventHandler(async (event) => {
    const body = await readBody(event)

  if(body.listNumbers){
    var result = operation(body.listNumbers)
     return {
    success: true,
    data:result
  }
  }
 
})

 export function operation(value:String) {
    return  Array.from(new Set(value.split(",").map(Number))).filter((it) => it % 2 === 0);

}