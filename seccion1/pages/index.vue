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

// EJERCIO 4
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

</script>
