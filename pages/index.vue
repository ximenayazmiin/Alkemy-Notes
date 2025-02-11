<template>
    <div class="flex flex-col items-center gap-4 full-page justify-center">   
        <h2 class="text-5xl font-medium">Crear tarea</h2>
        <textarea placeholder="Escribe tu tarea" tile="Escribe tu tarea" class="h-40 md:w-96 max-w-80  border-2 border-solid  rounded-xl p-2 focus-within:outline-2 focus-within:outline-gray-600 ..."></textarea>
        <button class="bg-black rounded-3xl px-4 py-2 text-white hover:bg-gray-700 ">Crear tarea</button>
    </div>
  
</template>

<script>
export default {

}
</script>

<style>
.full-page{
        height: calc(100vh - 84px );
}
</style>