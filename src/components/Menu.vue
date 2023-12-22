<template>
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
</template>

<script setup>
const navigation = [
  { name: 'Weather', href: '/' },
  { name: 'Contact', href: '/contact' },
];
</script>
