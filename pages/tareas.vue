<template>
    <div class="flex flex-col   gap-4 full-page p-4">
        <h2 class="text-5xl font-medium">Tareas</h2>
        <div class="flex flex-wrap gap-2">  
            <nuxt-link to="/" class="bg-black rounded-3xl px-4 py-2 text-white hover:bg-gray-700 ">Crear tarea</nuxt-link>

            <button class="border-2 border-black px-4 py-2 rounded-3xl  hover:bg-gray-100 ">Borrar todas las tareas</button>
        </div>
        <div class=" flex gap-2 divide-x-2 divide-black">
            <label class=" flex gap-2 items-center font-medium">Completas <span class="flex items-center justify-center w-5 h-5 bg-black text-white rounded-full text-sm">{{ tareasCompletas }}</span></label>
            <label class=" flex gap-2 items-center px-2 font-medium">Pendientes <span class="flex items-center justify-center w-5 h-5 bg-black text-white rounded-full text-sm">{{tareasInompletas}}</span></label>
        </div>
        <div class="grid sm:grid-cols-4 grid-cols-2 gap-4  ">
            <TareasCard v-for="(tarea) in tareas" :key="tarea.id" :tarea="tarea"></TareasCard>
        </div>
    </div>
</template>

<script  setup>

import { ref, computed } from 'vue';

const tareasCompletas = computed(() => {
    return tareas.value.filter(tarea => tarea.estado).length;
});
const tareasInompletas = computed(() => {
    return tareas.value.filter(tarea => tarea.estado == false).length;
});

const tareas = ref([
    {   id:1,
        texto: 'Traer leche',
        estado: false
    },
    {
        id:2,
        texto: 'Sacar al perro',
        estado: true
    },
    {
        id:3,
        texto: 'Hacer la tarea',
        estado: false
    },
    {
        id:4,
        texto: 'Estudiar',
        estado: true
    },
    {
        id:5,
        texto: 'Estudiar frances',
        estado: false
    }
]);


</script>

<style>

</style>