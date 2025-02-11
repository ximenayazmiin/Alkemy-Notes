<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Menu, X } from "lucide-vue-next";

const isMobile = ref(false);
const menuOpen = ref(false);

// Función para detectar si es móvil
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

// Detecta cambios en la pantalla
onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>

<template>
  <nav class="bg-white p-4  flex justify-between items-center border-b-2 border-gray-200 ">
    <nuxt-link to="/"><h1 class="text-xl font-bold">Alkemy Notes</h1></nuxt-link>

    <!-- Botón de menú hamburguesa en móviles -->
    <button v-if="isMobile" @click="menuOpen = !menuOpen" class="md:hidden">
      <component :is="menuOpen ? X : Menu" size="28" />
    </button>

    <!-- Menú -->
    <ul
      :class="[
        isMobile ? (menuOpen ? 'block' : 'hidden') : 'flex gap-6',
        'absolute md:static top-16 left-0 w-full md:w-auto  bg-slate-100 border-gray-200 md:bg-transparent md:flex',
      ]"
    >
      <li>
        <NuxtLink class=" flex p-2 md:p-0 hover:bg-slate-400 md:hover:bg-transparent" to="/">Inicio</NuxtLink>
      </li>
      <li >
        <NuxtLink class=" flex p-2 md:p-0 hover:bg-slate-400 md:hover:bg-transparent" to="/tareas">Tareas</NuxtLink>
      </li>
      <li>
        <NuxtLink class=" flex p-2 md:p-0 hover:bg-slate-400 md:hover:bg-transparent" to="/">ximena@yazmin.com</NuxtLink>
      </li>
    </ul>
  </nav>
</template>