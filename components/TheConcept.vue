<script setup>
import { DataPremiumPipe } from "~/stores/data-premium-pipe.js";
const dataConcept = DataPremiumPipe();

const response = await $fetch(
  "https://strapi.lymos.ru/api/premium-pipe-concepts?sort=id",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
dataConcept.getPermPipeConcepts(response);
</script>

<template>
  <template v-for="concept in dataConcept.concepts" :key="concept.id">
    <section class="concept">
      <h2>{{ concept.attributes.h2 }}</h2>
      <p>{{ concept.attributes.p }}</p>
      <img :src="concept.attributes.img" alt="foto-concept" />
    </section>
  </template>
</template>
