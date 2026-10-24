<template>
    <div class="bg-slate-50 min-h-screen w-full pt-4
        px-7 lg:px-7 xl:px-10 
        pb-7 lg:pb-7 xl:pb-10">
        <div class="pb-5 text-2xl">Pensamiento Logico Matematico</div>

        <div class="grid gap-6
        grid-cols-1 md:grid-cols-12 lg:grid-cols-8 ">

            <div class="col-span-1 md:col-span-6 lg:col-span-3">

                <div class=" bg-white border-2 rounded-md p-5 mb-5  h-fit">
                    <ExerciseHeaderSection title="Ejercio 1" buttonTag="Invertir Palabra" @button-action="invertedWord"
                        @clear-variables="clean('exercise1')" />

                    <div class="flex justify-center mt-4">
                        <input class="p-1 rounded-md text-center border 
                            sm:text-xl xl:text-2xl
                          placeholder:text-gray-500 placeholder:italic mr-2 mt-2" placeholder="Ingrese las palabras"
                            type="text" v-model="invertedWordInput" />
                    </div>

                    <div class="flex justify-center pt-2">
                        <div v-if="reversedWordResult" class="w-fit mt-2 rounded-lg
                         bg-lime-500 text-white py-1 
                         text-lg sm:text-xl
                         px-3 lg:px-4 xl:px-8 ">{{ reversedWordResult }}</div>
                    </div>
                </div>

                <div class=" bg-white border-2 rounded-md p-5 h-fit">
                    <ExerciseHeaderSection title="Ejercio 2" buttonTag="Unicos Pares" @button-action="uniquePairs"
                        @clear-variables="clean('exercise2')" />


                    <div class="flex flex-wrap gap-2 mt-4">
                        <div v-for="(item, index) in uniquePairsInputs" :key="index" class=" flex ">
                            <input class=" text-2xl shadow-lg rounded-lg text-center
                            w-[47px] sm:w-[57px] xl:w-[65px] 
                            h-[47px] sm:h-[57px] xl:h-[65px]" v-model="item.value" type="text" placeholder="0" />
                            <button class=" shadow-lg ml-2 border px-4 text-2xl rounded-md border-blue-600 
                               w-[47px] sm:w-[57px] xl:w-[65px] 
                               h-[47px] sm:h-[57px] xl:h-[65px]" v-if="index === uniquePairsInputs.length - 1"
                                @click="addInput('uniquePairsInputs')">
                                +
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-wrap">
                        <div class="bg-lime-500 text-white px-8 py-1 shadow-md rounded-md 
                            justify-center items-center flex mx-1 my-4
                            sm:text-xl  xl:text-3xl" v-for="(item) in uniquePairsResult">
                            {{ item }}</div>
                    </div>
                </div>
            </div>

            <div class="col-span-1 md:col-span-6 lg:col-span-5 bg-white border-2 rounded-md p-5 mx-2 mb-5 h-fit">
                <ExerciseHeaderSection title="Ejercio 4" buttonTag="Validar" @button-action="findNumberSum"
                    @clear-variables="clean('exercise4')" />

                <div class="flex flex-wrap gap-2 items-end">
                    <div class="flex flex-col">
                        <samp class="text-md xl:text-lg">Objetivo</samp>
                        <input class="text-2xl shadow-lg rounded-lg text-center border border-lime-400
                           w-[50px] sm:w-[60px] xl:w-[75px] 
                           h-[50px] sm:h-[60px] xl:h-[75px]" v-model="searchInput" type="text" placeholder="0" />
                    </div>
                    <div v-for="(item, index) in listNumbersInputs" :key="index" >
                        <input class="text-2xl shadow-lg rounded-lg text-center
                        w-[45px] sm:w-[55px] xl:w-[65px] 
                        h-[45px] sm:h-[55px] xl:h-[65px]" v-model="item.value" type="text" placeholder="0" />
                        <button class="shadow-lg ml-2 border px-4 text-2xl rounded-md border-blue-600 
                            w-[45px] sm:w-[55px] xl:w-[65px] 
                            h-[45px] sm:h-[55px] xl:h-[65px]" v-if="index === listNumbersInputs.length - 1"
                            @click="addInput('listNumbersInputs')">
                            +
                        </button>
                    </div>
                </div>

                <div v-if="findNumberSumResult != null && findNumberSumResult.length === 0">
                    <div class="shadow-md bg-red-500 text-white px-4 py-1 
                        justify-center items-center flex rounded-md mx-3 my-3 w-fit">
                        No hay Objectivo</div>
                </div>
                <div v-if="findNumberSumResult != [] && findNumberSumResult != null">
                    <div class="flex flex-row pt-2">
                        <div class="bg-lime-500 text-white px-8 py-1 l shadow-md rounded-md 
                            justify-center items-center flex mx-1 my-4
                            text-xl xl:text-3xl" v-for="(item) in findNumberSumResult">
                            {{ item }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ExerciseHeaderSection from '../components/sections/ExerciseHeaderSection.vue'

// EJERCIO 1
const invertedWordInput = ref('')
const reversedWordResult = ref('')

// EJERCIO 2
const uniquePairsInputs = ref([
    { value: '' }
]);
const uniquePairsResult = ref('')

// EJERCIO 4
const listNumbersInputs = ref([
    { value: '' }
]);

const searchInput = ref('')
const findNumberSumResult = ref(null)

const addInput = (value) => {
    if (value === 'uniquePairsInputs')
        uniquePairsInputs.value.push({ value: '' });
    if (value === 'listNumbersInputs')
        listNumbersInputs.value.push({ value: '' });
};

const clean = (value) => {
    if (value === 'exercise1') {
        invertedWordInput.value = '';
        reversedWordResult.value = ''
    } else if (value === 'exercise2') {
        uniquePairsInputs.value = [
            { value: '' }
        ]
        uniquePairsResult.value = ''
    } else if (value === 'exercise4') {
        listNumbersInputs.value = [
            { value: '' }
        ]
        searchInput.value = ''
        findNumberSumResult.value = null
    } else {

    }
}

const invertedWord = async () => {
    try {
        const response = await $fetch('/api/mathFunctions/inverted_word', {
            method: 'POST',
            body: {
                word: invertedWordInput.value
            }
        })
        reversedWordResult.value = response.data;
        console.log("Resultado: " + response.value)
    } catch (error) {
        console.log("errorororoor")
    }
}

const uniquePairs = async () => {
    try {
        var list = uniquePairsInputs.value.map(it => it.value).join(",")
        const response = await $fetch('/api/mathFunctions/unique_pairs', {
            method: 'POST',
            body: {
                listNumbers: list
            }
        })
        uniquePairsResult.value = response.data;
        console.log("Resultado: " + response.value)
    } catch (error) {
        console.log("errorororoor")
    }
}

const findNumberSum = async () => {
    try {
        var list = listNumbersInputs.value.map(it => it.value).join(",")

        const response = await $fetch('/api/mathFunctions/find_number_sum', {
            method: 'POST',
            body: {
                listNumbers: list,
                search: searchInput.value
            }
        })
        findNumberSumResult.value = response.data
        console.log("Resultado1: " + response.value)
    } catch (error) {
        console.log("errorororoor")
    }
}

</script>
