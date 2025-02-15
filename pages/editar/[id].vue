<template>
  <div class="flex flex-col items-center gap-4 full-page justify-center">
    <h2 class="text-5xl font-medium">Editar tarea</h2>
    <textarea
      v-model="descripcion"
      :disabled="isDisabled"
      :placeholder="isDisabled ? 'No encontramos la tarea' : 'Escribe tu tarea'"
      tile="Escribe tu tarea"
      class="disabled:border-gray-200 h-40 w-96 border-2 border-solid rounded-xl p-2 focus-within:outline-2 focus-within:outline-gray-600"
    ></textarea>
    <template v-if="!isDisabled">
      <button
        @click="editarTarea()"
        class="bg-black rounded-3xl px-4 py-2 text-white hover:bg-gray-700"
      >
        Guardar tarea
      </button>
    </template>
    <template v-else>
      <NuxtLink
        to="/tareas"
        class="bg-black rounded-3xl px-4 py-2 text-white hover:bg-gray-700"
        >Volver</NuxtLink
      >
    </template>
  </div>
</template>

<script setup>
const router = useRouter();
const { public: { apiBaseUrl } } = useRuntimeConfig();
const tarea_id = router.currentRoute.value.params.id;

async function getTarea() {
  const { data, status } = await useFetch(`${apiBaseUrl}/tarea/${tarea_id}`, {
    method: "GET",
  });
  if (status.value) {
    if (data.value != "") {
      return data.value;
    } else {
      return 1;
    }
  } else {
    return 1;
  }
}

const tarea = ref(null);
tarea.value = await getTarea();

const isDisabled = computed(() => tarea.value === 1);

const descripcion = ref(null);
if (!isDisabled.value) {
  descripcion.value = tarea.value.descripcion;
}

async function editarTarea() {
  const { data, status } = await useFetch(
    `${apiBaseUrl}/tarea/${tarea_id}`,
    {
      method: "PUT",
      body: { descripcion: descripcion.value, estatus: tarea.value.estatus },
    }
  );
   if (status.value == "success")
    {router.push("/tareas") }
  else {alert("Ocurrió un error al editar la tarea");}
}
</script>

<style>
.full-page {
  min-height: calc(100vh - 84px);
}
</style>
