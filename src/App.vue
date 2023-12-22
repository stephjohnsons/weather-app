<template>
  <div class="bg-gradient-to-br from-sky-200 via-sky-400 to-sky-500 min-h-screen">
    <header class="text-sky-900 flex flex-row">
      <div>
        <h1 class="text-2xl font-bold px-4 py-2">Weather App</h1>
      </div>
      <div class="ms-auto">
        <Menu />
      </div>
    </header>
    <body class="pb-4">
      <RouterView />
    </body>
    <footer class="mx-4 text-center">
      <p class="text-sky-700 text-sm pb-4">2023 © Created by Stephen.</p>
    </footer>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Menu from './components/Menu.vue';
</script>
