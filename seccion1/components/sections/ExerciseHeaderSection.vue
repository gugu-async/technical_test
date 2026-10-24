<template>
    <div class="flex  justify-between items-center mb-2">
        <div class="text-xl xl:text-2xl ">{{ title }}</div>
        <div class="flex justify-end gap-3">
            <button type="button" class="hover:bg-blue-600 
                     bg-blue-700  inline-block
                      text-white font-bold 
                       px-2
                      rounded-md
                      lg:text-md xl:text-lg
                     " v-on:click="$emit('button-action')">
                {{ buttonTag }}

                <!-- <img src="/core/assets/svg/send.svg" class="h-5 block lg:hidden"> -->
            </button>
            <button class="border-2 border-red-400
                   rounded-full 
                   w-9 lg:w-9 xl:w-11 
                   h-9 lg:h-9 xl:h-11 
                   p-1.5" type="button" @click="$emit('clear-variables')"><img
                    src="/core/assets/svg/clean.svg"></button>
        </div>
    </div>
</template>

<script setup>
defineEmits(['button-action', 'clear-variables'])
defineProps({
    title: String,
    buttonTag: String
})
</script>