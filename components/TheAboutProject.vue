<script setup>
import { DataPremiumPipe } from "~/stores/data-premium-pipe.js";
const dataAboutProject = DataPremiumPipe();

const response = await $fetch(
  "https://strapi.lymos.ru/api/premium-pipe-abouts",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
dataAboutProject.getPermPipeAbout(response);
</script>

<template>
  <template
    v-for="aboutProject in dataAboutProject.aboutProjects"
    :key="aboutProject.attributes.id"
  >
    <div class="about_project">
      <h2>{{ aboutProject.attributes.h2 }}</h2>
      <p>{{ aboutProject.attributes.p }}</p>
    </div>
  </template>
</template>
