<template>
  <div class="text-sky-900 flex flex-col items-center justify-center px-3 py-2">
    <Overview :city="city" :temperature="temperature" :today-data="todayData" />
  </div>
  <div class="border border-spacing-1 border-sky-900 mx-4 p-2 rounded-md my-4">
    <Forecast :forecast-data="forecastData" />
  </div>
  <div class="flex flex-row mb-4">
    <div class="border border-spacing-1 border-sky-900 ms-4 p-2 rounded-md w-1/2">
      <div class="border-b border-sky-900">
        <p class="pb-1 ps-1 uppercase text-sky-700">Wind</p>
      </div>
      <div class="text-sky-900 flex flex-row pt-2 overflow-auto">
        <div class="justify-items-center align-items-center p-2 rounded-md mx-2 text-sky-900">
          <p>{{ windData }}</p>
        </div>
      </div>
    </div>
    <div class="border border-spacing-1 border-sky-900 mx-4 p-2 rounded-md w-1/2">
      <div class="border-b border-sky-900">
        <p class="pb-1 ps-1 uppercase text-sky-700">Atmosphere</p>
      </div>
      <div class="justify-items-center align-items-center rounded-md mx-2 text-sky-900">
        <div id="progress-bar" class="mt-2">
          <p class="text-center">{{atmosphereData.humidity}}%</p>
          <div class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden" role="progressbar">
            <div 
              class="flex flex-col justify-center rounded-full overflow-hidden bg-sky-600 text-xs text-white text-center whitespace-nowrap transition duration-500" 
              :style="{ width: atmosphereData.humidity + '%' }"
            ></div>
          </div>
          <h3 class="text-sm font-semibold text-sky-900 mt-1 text-center">Humidity</h3>
        </div>
        <p>Visibility: {{ atmosphereData.visibility }}</p>
        <p>Pressure: {{ atmosphereData.pressure }}hPa</p>
      </div>
    </div>
  </div>
  <div class="flex flex-row">
    <div class="border border-spacing-1 border-sky-900 ms-4 p-2 rounded-md w-1/2">
      <div class="border-b border-sky-900">
        <p class="pb-1 ps-1 uppercase text-sky-700">Sunrise</p>
      </div>
      <div class="justify-items-center align-items-center p-2 rounded-md mx-2 text-sky-900">
        <h4 class="text-3xl ps-0">{{ astronomyData.sunrise }}</h4>
        <p>Sunset: {{ astronomyData.sunset }}</p>
      </div>
    </div>
    <div class="border border-spacing-1 border-sky-900 mx-4 p-2 rounded-md w-1/2">
      <div class="border-b border-sky-900">
        <p class="pb-1 ps-1 uppercase text-sky-700">Geography</p>
      </div>
      <div class="justify-items-center align-items-center p-2 rounded-md mx-2 text-sky-900">
        <p class="font-bold">Latitude: <span class="font-normal">{{ locationData.lat }}º</span></p>
        <p class="font-bold">Longitude: <span class="font-normal">{{ locationData.long }}º</span></p>
        <p class="font-bold">Country: <span class="font-normal">{{ locationData.country }}</span></p>
        <p class="font-bold">Timezone: <span class="font-normal">{{ locationData.timezone_id }}</span></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { data } from '../exampleData.js';

import Overview from '@/components/Overview.vue';
import Forecast from '@/components/Forecast.vue';

const city = computed(() => {
  return data.location.city;
})

const temperature = computed(() => {
  return data.current_observation.condition.temperature
})

const todayData = computed(() => {
  return data.forecasts[0]
})

const forecastData = computed(() => {
  return data.forecasts
})

const windData = computed(() => {
  return data.current_observation.wind
})

const atmosphereData = computed(() => {
  return data.current_observation.atmosphere
})

const locationData = computed(() => {
  return data.location
})

const astronomyData = computed(() => {
  return data.current_observation.astronomy
})

const location = ref("kuala_lumpur")
const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=c`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.VUE_APP_RAPIDAPI_KEY,
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

// watch(options.fetching, (value) => {
//   console.log(value);
// });

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
</script>

<style scoped>
</style>