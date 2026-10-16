export default defineEventHandler(async (event) => {
    const body = await readBody(event)

  if(body.word){
    var result = operation(body.word)
     return {
    success: true,
    data:result
  }
  }
 
})

export function operation(value:String) {
    return value.trim().replace(/ {2,}/g, " ").split(" ").map(item => item.split("").reverse().join("")).join(" ")
}