import { defineStore } from 'pinia';
const config = useRuntimeConfig();

export const useTareasStore = defineStore('tareas', {
    state: () => ({
        tareas_data: null,
    }),
    actions: {
        async getTareas2() {
            const config = useRuntimeConfig(); // Acceder a la configuración de Nuxt
            const apiBaseUrl = config.public.apiBaseUrl; // Obtener la URL de la API
            const { data, status } = await useFetch(`${apiBaseUrl}/tareas`, {
                method: "GET",
            });
            if (status.value == "success") {
                this.tareas_data = data.value;
            } else {
                this.tareas_data = 1;
            }
        },

        async editarTarea(tarea) {
            const config = useRuntimeConfig(); // Acceder a la configuración de Nuxt
            const apiBaseUrl = config.public.apiBaseUrl; // Obtener la URL de la API
            const { data, status } = await useFetch(`${apiBaseUrl}/tareas/${id}`, {
                method: "PUT",
                body: JSON.stringify(tarea),
            });
            if (status.value == "success") {
                this.tareas_data = data.value;
            } else {
                this.tareas_data = 1;
            }
            return data.value
        }
    },
})