<template>
  <div class="expertise">
    <TheStrategy />
    <TheProdaction />
    <TheStaff />
    <TheInformation />
  </div>
</template>
<script setup>
import { DataExpertise } from "~/stores/data-expertise.js";
const dataExpertise = DataExpertise();
const responseCart1 = await $fetch(
  "https://strapi.lymos.ru/api/carts/1?populate=*",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
const responseCart2 = await $fetch(
  "https://strapi.lymos.ru/api/carts/2?populate=*",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
const responseCart3 = await $fetch(
  "https://strapi.lymos.ru/api/carts/3?populate=*",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
const responseCart4 = await $fetch(
  "https://strapi.lymos.ru/api/carts/4?populate=*",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
dataExpertise.cart(responseCart1, responseCart2, responseCart3, responseCart4);
</script>
<style scoped></style>
