export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (body) {
    var result = operation(body.listNumbers, body.search);
    return {
      success: true,
      data: result,
    };
  }
});

export function operation(numbers: String, seachrNumber: number) {
  var listNumbers = numbers
    .split(",")
    .map(Number)
    .filter((it) => it < seachrNumber);
  let n = listNumbers.length;
  let totalNumberComb = 1 << n;
  let usedIndex = new Set<Number>();
  let result: string[] = [];

  for (let index = 1; index < totalNumberComb; index++) {
    var sum = 0;
    let tem: number[] = [];
    let tempIndex: number[] = [];

    for (let j = 0; j < n; j++) {
      if ((index & (1 << j)) !== 0) {
        sum += listNumbers[j];
        tem.push(listNumbers[j]);
        tempIndex.push(j);
      }
    }
    if (sum === Number(seachrNumber)) {
      const used = tempIndex.some((it) => usedIndex.has(it));
      if (!used) {
        result.push(tem.join("+") + `=${sum}`);
        tempIndex.forEach((it) => usedIndex.add(it));
      }
    }
  }
  return result;
}
