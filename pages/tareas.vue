<template>
  <div class="flex flex-col gap-4 full-page p-4">
    <h2 class="text-5xl font-medium">Tareas</h2>
    <div class="flex flex-wrap gap-2">
      <nuxt-link
        to="/"
        class="bg-black rounded-3xl px-4 py-2 text-white hover:bg-gray-700"
      >
        Crear tarea
      </nuxt-link>

      <button
        :disabled="isDisabled"
        @click="borrarTodas()"
        class="disabled:cursor-not-allowed border-2 border-black px-4 py-2 rounded-3xl hover:bg-gray-100"
      >
        Borrar todas las tareas
      </button>
    </div>
    <div class="flex gap-2 divide-x-2 divide-black">
      <label class="flex gap-2 items-center font-medium"
        >Completas
        <span
          class="flex items-center justify-center w-5 h-5 bg-black text-white rounded-full text-sm"
          >{{ tareasCompletas }}</span
        ></label
      >
      <label class="flex gap-2 items-center px-2 font-medium"
        >Pendientes
        <span
          class="flex items-center justify-center w-5 h-5 bg-black text-white rounded-full text-sm"
          >{{ tareasInompletas }}</span
        ></label
      >
    </div>
    <template v-if="tareas_data != null && tareas_data != 1">
      <div class="grid sm:grid-cols-4 grid-cols-2 gap-4">
        <TareasCard v-for="tarea in tareas" :key="tarea.id" :tarea="tarea"></TareasCard>
      </div>
    </template>
    <template v-else-if="tareas_data == 1">
      <div class="flex justify-center items-center h-96">
        <h2 class="text-2xl font-medium">No hay tareas</h2>
      </div>
    </template>
    <template v-else>
      <div class="flex justify-center items-center h-96">
        <h2 class="text-2xl font-medium">Cargando...</h2>
      </div>
    </template>
  </div>
</template>

<script setup>
import { useTareasStore } from "~/store/tareas";
const { getTareas2, tareas_data } = useTareasStore();

const tareasCompletas = computed(() => {
  if (tareas_data == 1 || tareas_data == null) return 0;
  else return tareas_data.filter((tarea) => tarea.estatus).length;
});
const tareasInompletas = computed(() => {
  if (tareas_data == 1 || tareas_data == null) return 0;
  else return tareas_data.filter((tarea) => tarea.estatus == false).length;
});

await getTareas2();

function borrarTodas() {
  console.log("Todas las tareas eliminadas");
}

const isDisabled = computed(() => tareas_data === 1 || tareas_data === null);
</script>

<style></style>
