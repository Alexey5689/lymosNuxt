<script setup>
import { DataPremiumPipe } from "~/stores/data-premium-pipe.js";
const dataAboutProject = DataPremiumPipe();
onMounted(() => {
  dataAboutProject.getPermPipeAbout();
});
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
