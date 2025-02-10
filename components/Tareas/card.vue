<template>
  <div class="h-40 rounded-3xl relative flex flex-col justify-center items-center p-2 gap-4 border-2 border-gray-200" v-if="tarea != null ">
    <div class="absolute right-2 top-2">
         <i @click="ver_opciones=!ver_opciones" class="fa-solid fa-ellipsis-vertical"></i>
         <span class=" overflow-hidden bg-white absolute right-3 top-3   gap-4 border-2 border-gray-200 rounded-3xl" v-if="ver_opciones">
            <button @click="editar(tarea.id)" class="px-6 py-2 w-full hover:bg-gray-100 rouder">Editar</button>
            <button @click="eliminar(tarea.id)" class="px-6 py-2 w-full hover:bg-gray-100">Eliminar</button>
         </span>
    </div>
   
    <label :class="tarea.estado?'line-through':''">{{tarea.texto}}</label>
    <template v-if="tarea.estado == true">
        <button @click="marcar(false)" class="border-2 border-black px-4 py-2 rounded-3xl  hover:bg-gray-100 ">Desmarcar</button>
    </template>
    <template v-else>
        <button @click="marcar(true)" class="border-2 border-black px-4 py-2 rounded-3xl  hover:bg-gray-100 ">Marcar</button>
    </template>
    
  </div>
</template>

<script setup>

const props = defineProps({
    tarea: {
        type: Object,
        required: true
    }
});


const ver_opciones = ref(false);
function marcar(nuevoEstado) {
    props.tarea.estado = nuevoEstado;
}

function eliminar(id) {
    console.log('eliminar',id);
}  

function editar(id) {
const router = useRouter();
router.push(`/editar/${id}`);
}   

</script>

<style>

</style>