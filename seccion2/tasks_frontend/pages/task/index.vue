<template>
    <div class="bg-slate-100 min-h-screen">

        <template v-if="pending">
            <div>Cargando...!!</div>
        </template>
        <template v-else-if="error">
            {{ error }}
        </template>
        <div v-else>
            <div class="justify-center flex p-3">
                <button type="button"
                    class="  hover:bg-sky-700  bg-blue-700 text-white font-bold rounded-xl px-3 ">Invertir
                    Texto</button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div v-for="item in tasks">
                    <div class="bg-white shadow-sm flex flex-col rounded-xl p-3">
                        <div class="flex justify-end ">

                            <div class="rounded-full p-2 bg-orange-500 border-2">✏️</div>
                            <div class="rounded-full p-2 bg-orange-500 border-2">X</div>
                        </div>
                        <div class="text-md">{{ item.title }}</div>

                        <div class="text-sm">{{ item.description }}</div>
                        <div class="border p-">
                            <div class="bg-green-400 " v-if="item.completed">
                                Completada
                            </div>
                            <div class="bg-red-200 " v-else>
                                No completada
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
const { data: tasks, pending, error } = await useFetch('http://localhost:4000/task', {
})

</script>

<style></style>