<template>
  <div class="text-center">
    <h1 class="text-3xl">My Location</h1>
    <h2 class="text-md -mt-1 uppercase text-sky-700">
      {{ props.city }}
    </h2>
    <h3 class="text-8xl">
      {{ props.temperature }}º
    </h3>
    <div class="flex flex-row space-x-4 font-light">
      <h3 class="text-xl text-sky-800">
        High: {{ props.todayData.high }}º
      </h3>
      <h3 class="text-xl text-sky-800">
        Low: {{ props.todayData.low }}º
      </h3>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

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