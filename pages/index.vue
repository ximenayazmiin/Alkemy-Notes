<template>
  <div class="flex flex-col items-center gap-4 full-page justify-center">
    <h2 class="text-5xl font-medium">Crear tarea</h2>
    <textarea
      v-model="tarea.descripcion"
      placeholder="Escribe tu tarea"
      tile="Escribe tu tarea"
      class="h-40 md:w-96 max-w-80 border-2 border-solid rounded-xl p-2 focus-within:outline-2 focus-within:outline-gray-600 ..."
    ></textarea>
    <button
      @click="createTask()"
      class="bg-black rounded-3xl px-4 py-2 text-white hover:bg-gray-700"
    >
      Crear tarea
    </button>
  </div>
</template>

<script setup>
const router = useRouter();
const {
  public: { apiBaseUrl },
} = useRuntimeConfig();

const tarea = ref({
  descripcion: null,
  estatus: false,
});

async function createTask() {
  if (tarea.value.descripcion === null || tarea.value.descripcion == "") {
    alert("Debes escribir una tarea");
    return;
  }

  const { data, status } = await useFetch(`${apiBaseUrl}/tarea`, {
    method: "POST",
    body: tarea.value,
  });
  if (status.value == "success") {
    router.push("/tareas");
  } else {
    alert("Ocurrió un error al crear la tarea");
  }
}
</script>

<style>
.full-page {
  min-height: calc(100vh - 84px);
}
</style>
