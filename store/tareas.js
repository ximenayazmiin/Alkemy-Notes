import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTareasStore = defineStore('tareas', () => {
    const tareas_data = ref(null);

    async function getTareas2() {
        let result = null;
        const { data, status } = await useFetch(`http://localhost:5000/tareas`, {
            method: "GET",
        });
        if (status.value == "success") {
            result = data.value.length > 0 ? data.value : 1;
        } else {
            result = 1;
        }
        tareas_data.value = result; // Actualiza directamente tareas_data

        return result;
    }

    return {
        tareas_data,
        getTareas2,
    };
});