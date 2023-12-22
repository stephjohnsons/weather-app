<template>
  <div class="mx-4 my-1 text-xl font-bold text-sky-900">
    <h1>Contact</h1>
    <p class="font-normal text-lg">
      Send an email to: 
      <a :href="'mailto:' + contactEmail" class="hover:underline transition-1">{{ contactEmail }}</a>
    </p>
  </div>
</template>

<script setup>
const contactEmail = "info@stephjohnsons.com"
</script>