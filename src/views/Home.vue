<template>
  <div class="mx-4 my-1 flex flex-row bg-slate-200 bg-opacity-60 rounded-md align-items-center justify-items-center shadow-md mb-2">
    <img 
      @click="onInputChange"
      class="mx-3 search-icon"
      src="/assets/search.svg" 
      height="24" 
      width="24" 
    />
    <input 
      v-model="searchText"
      @keyup.enter="fetchWeatherData(searchText)"
      class="p-1.5 ps-2 rounded-md w-full opacity-70" 
      type="text" 
      placeholder="Search for your city" 
    />
    <button class="hidden sm:inline px-6 font-medium cursor-pointer transition-all hover:bg-sky-300 rounded-e-md" @click="fetchWeatherData(searchText)">
      Search
    </button>
  </div>
  <div 
    class="block sm:hidden bg-sky-700 text-white font-medium shadow-md mx-4 py-1 text-center cursor-pointer transition-all hover:bg-sky-900 rounded-md" 
    @click="fetchWeatherData(searchText)"
  >
    Search
  </div>
  <template v-if="loading">
    <div v-if="!searchText" class="mx-4">
      <p class="text-sky-900 text-2xl text-center py-10">👆🏻 Search a city and press enter to see the latest weather updates.</p>
    </div>
    <Loading v-else />
  </template>
  <template>
    <div class="text-sky-900 flex flex-col items-center justify-center px-3 py-2">
      <Overview :city="city" :temperature="temperature" :today-data="todayData" />
    </div>
    <div class="border border-spacing-1 border-sky-900 mx-4 p-2 rounded-md mb-2 sm:my-4">
      <Forecast :forecast-data="forecastData" />
    </div>
    <div class="flex flex-col sm:flex-row mb-2 sm:mb-4">
      <div class="border border-spacing-1 border-sky-900 mx-4 sm:ms-4 sm:me-2 mb-2 sm:mb-0 p-2 rounded-md w-auto sm:w-1/2">
        <Wind :wind-data="windData" />
      </div>
      <div class="border border-spacing-1 border-sky-900 mx-4 sm:me-4 sm:ms-2 p-2 rounded-md w-auto sm:w-1/2">
        <Atmosphere :atmosphere-data="atmosphereData" />
      </div>
    </div>
    <div class="flex flex-col sm:flex-row">
      <div class="border border-spacing-1 border-sky-900 mx-4 sm:ms-4 sm:me-2 mb-2 sm:mb-0 p-2 rounded-md w-auto sm:w-1/2">
        <Sunrise :astronomy-data="astronomyData" />
      </div>
      <div class="border border-spacing-1 border-sky-900 mx-4 sm:me-4 sm:ms-2 p-2 rounded-md w-auto sm:w-1/2">
        <Geography :location-data="locationData" />
      </div>
    </div>
  </template>
</template>

<script setup>
import axios from 'axios';
import { ref, computed } from 'vue';

import Loading from '../components/Loading.vue';
import Overview from '../components/Overview.vue';
import Forecast from '../components/Forecast.vue';
import Wind from '../components/Wind.vue';
import Atmosphere from '../components/Atmosphere.vue';
import Sunrise from '../components/Sunrise.vue';
import Geography from '../components/Geography.vue';

const searchText = ref("");
const weatherData = ref({});
const loading = ref(true);

const fetchWeatherData = async (searchQuery) => {
  loading.value = true;
  const queryLocation = searchQuery.trim(); 
  if (!queryLocation) return; 

  const options = {
    method: 'GET',
    url: 'https://yahoo-weather5.p.rapidapi.com/weather',
    params: {
      location: queryLocation,
      format: 'json',
      u: 'c'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    weatherData.value = response.data;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}

const city = computed(() => {
  return weatherData.value?.location?.city ?? 'Not available';
})

const temperature = computed(() => {
  return weatherData.value?.current_observation?.condition?.temperature ?? 'N/A';
})

const todayData = computed(() => {
  return weatherData.value?.forecasts?.[0] ?? {};
})

const forecastData = computed(() => {
  return weatherData.value?.forecasts ?? [];
})

const windData = computed(() => {
  return weatherData.value?.current_observation?.wind ?? {};
})

const atmosphereData = computed(() => {
  return weatherData.value?.current_observation?.atmosphere ?? {};
})

const locationData = computed(() => {
  return weatherData.value?.location ?? {};
})

const astronomyData = computed(() => {
  return weatherData.value?.current_observation?.astronomy ?? {};
})
</script>
