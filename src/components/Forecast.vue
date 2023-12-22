<template>
  <div class="border-b border-sky-900">
    <p class="pb-1 ps-1 uppercase text-sky-700">10-day forecast</p>
  </div>
  <div class="text-sky-900 flex flex-row pt-2 overflow-auto">
    <div 
      v-for="(item, index) in props.forecastData" 
      :key="index" 
      class="justify-items-center align-items-center p-2 rounded-md mx-2"
      :class="index === 0 ? 'bg-sky-600 bg-opacity-40 ms-0' : ''"
    >
      <p class="font-bold text-center">{{ item.day }}</p>
      <p class="text-center">{{ item.text }}</p>
      <div class="flex flex-row space-x-2 font-light">
        <p class="text-sky-600">L:{{ item.low }}º</p>
        <p>H:{{ item.high }}º</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  forecastData: {
    type: Array,
    required: true,
  },
})

const date = new Date();

function calcDate(date, index) {
  let day = date.getDate() + index;
  const options = { day: '2-digit', month: 'short' };
  return new Intl.DateTimeFormat('en-SG', options).format(day)
}
</script>