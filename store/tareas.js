import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useTareasStore = defineStore('tareas', {
    state: () => ({
        tareas_data: ref(null),
    }),
    actions: {
        async getTareas2() {
            const { data, status } = await useFetch("http://localhost:3002/tareas", {
                method: "GET",
            });
            if (status.value == "success") {
                this.tareas_data = data.value;
            } else {
                this.tareas_data = 1;
            }
        }
    },
})