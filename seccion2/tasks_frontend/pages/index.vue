<template>
    <div class="bg-slate-100 min-h-screen p-5">
        <div class=""> Mis Tareas</div>
        <template v-if="pending">
            <div>Cargando...!!</div>
        </template>
        <template v-else-if="error">
            Ocurrio un error, vuelve a itentarlo
        </template>
        <div v-else>
            <div class="justify-center flex p-3 mb-5">
                <button type="button"
                    class="  hover:bg-sky-700 p-1 bg-blue-700 text-white  rounded-lg px-3  hover:scale-125 transition"
                    @click="modal.open('new')">Nuevo Registro</button>
            </div>

            <div class=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div v-for="item in tasks">
                    <div class="bg-white shadow-sm flex flex-col rounded-xl p-3">
                        <div class="flex justify-end ">

                            <button class="rounded-full p-2 bg-orange-500 border-2"
                                v-on:click="modal.open('edit', item)">✏️</button>
                            <button class="rounded-full p-2 bg-orange-500 border-2" v-on:click="deteleItem(item.id)">X
                            </button>
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

    <ModalSection ref="modal"></ModalSection>

</template>

<script setup>
import ModalSection from '../components/sections/ModalSection.vue';

const modal = ref(null)

const urlServer = 'http://localhost:4000'

const { data: tasks, pending, error } = await useFetch(urlServer + '/task', {
})

const deteleItem = async (id) => {
    try {
        await fetch(urlServer + "/task/dTask", {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    id: id,
                }
            )
        }
        )
        tasks.value = tasks.value.filter(task => task.id !== id)
    } catch (error) {
        console.log(error)
    }
}

</script>