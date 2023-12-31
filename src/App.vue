<template>
  <div class="bg-gradient-to-br from-sky-200 via-sky-400 to-sky-500 min-h-screen">
    <header class="text-sky-900 flex flex-row">
      <div class="flex items-center">
        <h1 class="text-2xl font-bold px-4 py-2">Weather App</h1>
      </div>
      <div class="ms-auto">
        <div class="flex flex-row py-3 me-2">
          <router-link
            v-for="(item, index) in navigation"
            :key="index"
            :to="item.href"
            class="px-3 py-2 rounded-md text-sm font-medium transition-all mx-1 text-sky-700 hover:bg-sky-300 hover:text-sky-800"
            active-class="text-sky-900 bg-sky-200"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </header>
    <body class="pb-4">
      <RouterView />
    </body>
    <footer class="mx-4 text-center">
      <p class="text-sky-700 text-sm">
        2023 © Created by 
        <a href="stephjohnsons.com/page/" class="underline">Stephen.</a>
      </p>
      <p class="text-sky-600 text-sm pb-4">
        Weather favicon by 
        <a href="https://dribbble.com/laurareen" class="underline">Laura Reen.</a>
      </p>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';

const navigation = [
  { name: 'Weather', href: '/' },
  { name: 'Contact', href: '/contact' },
];
</script>