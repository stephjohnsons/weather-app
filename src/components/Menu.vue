<template>
  <div class="flex flex-row py-3 me-2">
    <nav v-for="item in navigation">
    <a 
      href="#" 
      class="px-3 py-2 rounded-md text-sm font-medium transition-all mx-1"
      :class="item.current ? ' text-sky-900 bg-sky-200' : 'text-sky-700 hover:bg-sky-300 hover:text-sky-800'"
      @click="changePage(index)"
    >
      {{ item.name }}
    </a>
  </nav>
  </div>
</template>

<script setup>
const navigation = [
  { name: 'Weather', href: '/', current: true },
  { name: 'Contact', href: '/contact', current: false },
]

const changePage = (index) => {
  navigation.forEach((item, i) => {
    item.current = i === index;
  });
}
</script>