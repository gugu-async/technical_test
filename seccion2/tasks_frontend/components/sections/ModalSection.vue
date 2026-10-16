<template>
    <Teleport to="body">
        <Transition name="fade">
            <div v-if="isOpen" @click.self="close"
                class="fixed inset-0 z-50 flex items-center justify-center bg-(--color-modal-water) p-4">
                <div class="bg-white border-2 p-3 w-full max-w-md rounded-xl place-items-center  ">

                    <div class="flex items-center justify-center rounded-full
                        bg-[#feefe5] w-15 h-15
                         sm:w-19 sm:h-19">
                        <component :is="infoIcon" class="text-(--color-primary) w-10 h-10 " />
                    </div>

                    <div class="text-(--color-title) font-bold pt-2 text-md">{{ action == 'new' ? ' Nueva Tarea' :
                        'Editar Tarea'
                        }}</div>
                    <div class="mb-5">
                        <label for="name" class="block text-sm font-medium text-slate-700">Titulo</label>
                        <input type="text" id="name" required
                            class="mt-1 w-full rounded-md border border-slate-300 px-3.5 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            placeholder="Titulo" v-model="titleInput" />
                    </div>
                    <div>
                        <label for="name" class="block text-sm font-medium text-slate-700">Descripcion</label>
                        <textarea type="text" id="name" required class="ft-1 w-full rounded-md border border-slate-300 px-3.5 py-2 text-slate-900 focus:border-indigo-500 
                            focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="Descripcion"
                            v-model="descriptionInput">
                        </textarea>
                    </div>
                    <div class="mb-5">
                        <label for="name" class="block text-sm font-medium text-slate-700 pb-3">Estatus
                            Completado</label>
                        <div class="flex justify-center">
                            <button class="border rounded-xl border-gray-300 mr-5 px-5 " @click="status = 0"
                                :class="status === 0 ? 'bg-blue-700 text-white' : ''"> NO</button>
                            <button class="border rounded-xl border-gray-300 mr-5 px-5 "
                                :class="status === 1 ? 'bg-blue-700 text-white' : ''" v-on:click="status = 1"> SI
                            </button>
                        </div>
                    </div>

                    <div class="mb-5 mt-7 flex justify-cent">
                        <button type="button" class=" hover:bg-sky-700 px-10 py-1  text-white rounded-md"
                            :class="action == 'new' ? 'bg-blue-700' : 'bg-amber-500'"
                            v-on:click="action == 'new' ? newItem() : close()">Guardar</button>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>

import { ref } from 'vue'

const urlServer = 'http://localhost:4000'

const titleInput = ref('')
const descriptionInput = ref('')
const status = ref(0)
const action = ref()
const isOpen = ref(false)

const open = (value, data) => {
    isOpen.value = true
    action.value = value
    if (data != null) {
        titleInput.value = data.title
        descriptionInput.value = data.description
        status.value = data.completed
    }
}

const close = () => {
    isOpen.value = false
}


const newItem = async () => {
    try {
        await fetch(urlServer + "/task", {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    title: titleInput.value,
                    description: descriptionInput.value,
                    completed: status.value
                }
            )
        }
        )
        console.log("REGISTRO GUARDADO")
        close()
    } catch (error) {
        console.log(error)
    }
}

defineExpose({
    open,
    close
})
</script>