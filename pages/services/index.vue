<script setup>
import { DataTitleDesc } from "~/stores/data-titleDesc.js";
import { DataServices } from "~/stores/data-services.js";

const dataServices = DataServices();
const titleDesc = DataTitleDesc();

const titleResponse = await $fetch(
  "https://strapi.lymos.ru/api/title-descriptions/9",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
titleDesc.getTitleDesc(titleResponse);

useHead({
  title: () => titleDesc.titleDesc.title,
  meta: [
    {
      name: "description",
      content: () => titleDesc.titleDesc.description,
    },
  ],
});

const respServicesView = await $fetch(
  "https://strapi.lymos.ru/api/services-views/1 ",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
dataServices.getServices(respServicesView);
</script>
<template>
  <main>
    <TheSpots />
    <div class="wrapper">
      <div class="content amenities">
        <h1 class="title_amenities">{{ dataServices.servicesViewH1 }}</h1>
        <h4 class="description_amenities">
          {{ dataServices.servicesViewH4 }}
        </h4>
        <TheSerApplications />
      </div>
    </div>
  </main>
  <TheFooter />
</template>
