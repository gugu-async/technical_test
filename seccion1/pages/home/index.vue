<template>
    <div class="bg-slate-50 min-h-screen w-full p-10">

        <div class="grid grid-flow-col grid-rows-3 ">

            <div class="col-span-2 bg-white border-2 rounded-md p-5 mx-2 mb-5">
                <div>Ejercicio 1</div>
                <input class="placeholder:text-gray-500 placeholder:italic border-2 rounded-md mr-2"
                    placeholder="Ingrese las palabras" type="text" name="search" v-model="invertedWordInput" />
                <button type="button" class="  hover:bg-sky-700  bg-blue-700 text-white font-bold rounded-md px-3 "
                    v-on:click="invertedWord(invertedWordInput)">Invertir Texto</button>
                <div>{{ reversedWordResult }}</div>
            </div>

            <div class="col-span-2 bg-white border-2 rounded-md p-5 mx-2 mb-5">
                <div>Ejercicio 2</div>
                <input class="placeholder:text-gray-500 placeholder:italic border-2 rounded-md mr-2"
                    placeholder="Ingrese una descripcion" type="text" name="search" v-model="uniquePairsInput" />
                <button type="button" class="  hover:bg-sky-700  bg-blue-700 text-white font-bold rounded-md px-3 "
                    v-on:click="uniquePairs(uniquePairsInput)">Unicos Pares</button>

                <div class="flex flex-wrap" v-for="(item) in uniquePairsResult">
                    <div
                        class="shadow-md bg-green- bg-lime-500 text-white h-7 w-7 justify-center items-center flex rounded-md mx-3 my-3">
                        {{ item }}</div>
                </div>

            </div>


            <div class="col-span-2 bg-white border-2 rounded-md p-5 mx-2 mb-5">
                <div>Ejercicio 4</div>

                <input class="placeholder:text-gray-500 placeholder:italic border-2 rounded-md mr-2"
                    placeholder="Ingrese una descripcion" type="text" name="search" v-model="listNumbersInput" />

                <input class="placeholder:text-gray-500 placeholder:italic border-2 rounded-md mr-2"
                    placeholder="Buscar objetivo" type="text" name="search" v-model="searchInput" />

                <button type="button" class="  hover:bg-sky-700  bg-blue-700 text-white font-bold rounded-md px-3 "
                    v-on:click="findNumberSum(listNumbersInput, searchInput)">Validar</button>

                <div v-if="findNumberSumResult != [] && findNumberSumResult != null">
                    TRUE (Porque {{ findNumberSumResult }} )
                   
                </div>

                <div v-if="findNumberSumResult == []">
                    <div
                        class="shadow-md bg-green- bg-red-500 text-white h-7 w-7 justify-center items-center flex rounded-md mx-3 my-3">
                        FALSE</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

// EJERCIO 1
const invertedWordInput = ref('')
const reversedWordResult = ref('')

// EJERCIO 2
const uniquePairsInput = ref('')
const uniquePairsResult = ref('')

// EJERCIO 3
const listNumbersInput = ref('')
const searchInput = ref('')
const findNumberSumResult = ref('')



const invertedWord = async (value) => {
    try {
        const response = await $fetch('/api/mathFunctions/inverted_word', {
            method: 'POST',
            body: {
                word: value
            }
        })
        reversedWordResult.value = response.data;
        console.log("Resultado: " + response.value)
    } catch (error) {
        console.log("errorororoor")
    }
}
const uniquePairs = async (value) => {
    try {
        const response = await $fetch('/api/mathFunctions/unique_pairs', {
            method: 'POST',
            body: {
                listNumbers: value
            }
        })
        uniquePairsResult.value = response.data;
        console.log("Resultado: " + response.value)
    } catch (error) {
        console.log("errorororoor")
    }
}

const findNumberSum = async (paramNumbers, paramSearch) => {
    try {
        const response = await $fetch('/api/mathFunctions/find_number_sum', {
            method: 'POST',
            body: {
                listNumbers: paramNumbers,
                search: paramSearch
            }
        })
        findNumberSumResult.value = response.data.join(" o ")
        console.log("Resultado: " + response.value)
    } catch (error) {
        console.log("errorororoor")
    }
}

onMounted(() => {

    // var valor = '2,7,9,12,33,15,22,12,4,2,7';
    // valor.trim().replace(/^,+|,+$/g,"").replace(/ {1,}/g, "")
    // var oki = Array.from(new Set(valor.split(","))).filter((it) => it % 2 === 0);

    // console.log(oki)
    // var listNumbers = [4,8,48,44,1];
    // var seachrNUmber = 11;

    // var suma;
    // var valorLimpio = listNumbers.filter((it) => it < seachrNUmber);
    // let candidatos = []
    // var temp = false;
    // for (let index = 0; index < valorLimpio.length; index++) {
    //     temp = false;
    //     for (let tempIndex = index + 1; tempIndex < valorLimpio.length; tempIndex++) {
    //         // suma = (valorLimpio[index] + valorLimpio[tempIndex]);
    //         // temp = suma == seachrNUmber
    //         // console.log("[" + index + "," + tempIndex, "] => " + valorLimpio[index] + " + " + valorLimpio[tempIndex] + " = " + suma + " " + temp)

    //         if ((valorLimpio[index] + valorLimpio[tempIndex]) == seachrNUmber) {
    //             candidatos.push(valorLimpio[index] + "+" + valorLimpio[tempIndex] + "")
    //             temp = true
    //         }
    //     }
    // }
    // console.log("RESULTADO ", candidatos)

    // for (let index = 0; index < valorLimpio.length; index++) {
    //     temp = false;
    //     for (let tempIndex = index + 1; tempIndex < valorLimpio.length; tempIndex++) {

    //         suma = (valorLimpio[index] + valorLimpio[tempIndex]);
    //         temp = suma == seachrNUmber
    //         console.log("[" + index + "," + tempIndex, "] => " + valorLimpio[index] + " + " + valorLimpio[tempIndex] + " = " + suma + " " + temp)

    //         if ((valorLimpio[index] + valorLimpio[tempIndex]) == seachrNUmber) {
    //             candidatos.push("[" + valorLimpio[index] + "," + valorLimpio[tempIndex] + "]")
    //             temp = true
    //         }
    //     }
    // }
    // console.log("RESULTADO ", candidatos)

    // for (let index = 0, reverIndex = listNumbers.length; index < listNumbers.length && reverIndex == -1; index++, reverIndex--) {
    //     if (listNumbers[1]) {

    //     }
    //     console.log()

    // }

})
</script>
