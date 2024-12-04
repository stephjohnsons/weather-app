<template>
  <div class="text-center">
    <h1 class="text-3xl text-sky-900">{{ props.city }}</h1>
    <h3 id="temperature" class="text-8xl">
      {{ props.temperature }}º
    </h3>
    <div class="flex flex-row space-x-4 font-light">
      <h3 class="text-xl text-sky-600">
        Low: {{ props.todayData.low }}º
      </h3>
      <h3 class="text-xl text-sky-900">
        High: {{ props.todayData.high }}º
      </h3>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  city: {
    type: String,
    required: true,
  },
  temperature: {
    type: Number,
    required: true,
  }, 
  todayData: {
    type: Array,
    required: true,
  }
})
</script>