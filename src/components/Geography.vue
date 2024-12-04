<template>
  <div class="border-b border-sky-900 flex flex-row">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt fill-sky-900" viewBox="0 0 16 16">
      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </svg>
    <p class="pb-1 ps-1 uppercase text-sky-700">
      Geography
    </p>
  </div>
  <div class="text-sky-900 pt-2 mx-2 overflow-auto">
    <p class="font-bold">Latitude: <span class="font-normal">{{ props.locationData.lat }}º</span></p>
    <p class="font-bold">Longitude: <span class="font-normal">{{ props.locationData.long }}º</span></p>
    <p class="font-bold">Country: <span id="country" class="font-normal">{{ props.locationData.country }}</span></p>
    <p class="font-bold">Timezone: <span id="timezone" class="font-normal">{{ props.locationData.timezone_id }}</span></p>
  </div>
</template>

<script setup>
const props = defineProps({
  locationData: {
    type: Array,
    required: true,
  },
})
</script>