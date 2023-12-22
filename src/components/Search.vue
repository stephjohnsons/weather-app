<template>
  <div class="mx-4 my-1 flex flex-row bg-slate-200 bg-opacity-60 rounded-md align-items-center justify-items-center shadow-md">
    <img 
      class="mx-3"
      src="../assets/search.svg" 
      height="24" 
      width="24" 
    />
    <input 
      v-model="searchText"
      class="p-1.5 ps-2 rounded-md w-full opacity-70" 
      type="text" 
      placeholder="Search for your city" 
    />
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

</script>