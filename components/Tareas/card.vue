<template>
  <div
    class="h-40 rounded-3xl relative flex flex-col justify-center items-center p-2 gap-4 border-2 border-gray-200"
    v-if="tarea != null"
  >
    <div class="absolute right-2 top-2">
      <i @click="ver_opciones = !ver_opciones" class="fa-solid fa-ellipsis-vertical"></i>
      <span
        class="overflow-hidden bg-white absolute right-3 top-3 gap-4 border-2 border-gray-200 rounded-3xl"
        v-if="ver_opciones"
      >
        <button @click="editar()" class="px-6 py-2 w-full hover:bg-gray-100 rouder">
          Editar
        </button>
        <button @click="eliminar()" class="px-6 py-2 w-full hover:bg-gray-100">
          Eliminar
        </button>
      </span>
    </div>

    <label :class="tarea.estatus ? 'line-through' : ''">{{ tarea.descripcion }}</label>
    <template v-if="tarea.estatus == true">
      <button
        @click="marcar(false)"
        class="border-2 border-black px-4 py-2 rounded-3xl hover:bg-gray-100"
      >
        Desmarcar
      </button>
    </template>
    <template v-else>
      <button
        @click="marcar(true)"
        class="border-2 border-black px-4 py-2 rounded-3xl hover:bg-gray-100"
      >
        Marcar
      </button>
    </template>
  </div>
</template>

<script setup>
import { useTareasStore } from "~/store/tareas";
const { getTareas2, tareas_data } = useTareasStore()
const {
  public: { apiBaseUrl },
} = useRuntimeConfig();

const props = defineProps({
  tarea: {
    type: Object,
    required: true,
  },
});

const ver_opciones = ref(false);
function marcar(nuevoEstado) {
  props.tarea.estatus = nuevoEstado;
  editarTarea();
}

async function editarTarea() {
  const { data, status } = await useFetch(
    `${apiBaseUrl}/tarea/${props.tarea.id_tarea}`,
    {
      method: "PUT",
      body: { descripcion: props.tarea.descripcion, estatus: props.tarea.estatus },
    }
  );
}

async function eliminar() {
  let { data, status } = await useFetch(
    `${apiBaseUrl}/tarea/${props.tarea.id_tarea}`,
    { method: "Delete"});
    ver_opciones.value = false;
  if (data) {
     tareas_data.value =  getTareas2();
    }
    
 
}

function editar() {
  const router = useRouter();
  router.push(`/editar/${props.tarea.id_tarea}`);
}
</script>

<style></style>
