<script setup>
const titleResponse = await $fetch(
  "https://strapi.lymos.ru/api/title-descriptions/9",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
const title = titleResponse.data.attributes.title;
const description = titleResponse.data.attributes.description;

useHead({
  title: () => title,
  meta: [
    {
      name: "description",
      content: () => description,
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
let tmp = respServicesView.data;
const servicesViewH1 = tmp.attributes.h1;
const servicesViewH4 = tmp.attributes.h4;
</script>
<template>
  <main>
    <TheSpots />
    <div class="wrapper">
      <div class="content amenities">
        <h1 class="title_amenities">{{ servicesViewH1 }}</h1>
        <h4 class="description_amenities">
          {{ servicesViewH4 }}
        </h4>
        <TheSerApplications />
      </div>
    </div>
  </main>
  <TheFooter />
</template>
