<template>
  <div>
    <h1>Nuxt</h1>
    {{ titleServise }}
  </div>
</template>
<script setup lang="ts">
const { data, error } = await useFetch("https://strapi.lymos.ru/api/forms/1", {
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
const dataTwice = await $fetch("https://strapi.lymos.ru/api/forms/1", {
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
const response = data.value.data;
const titleServise = response.attributes.titleService;

onMounted(() => {
  data;
});
</script>
