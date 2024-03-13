<script setup>
import { DataTitleDesc } from "~/stores/data-titleDesc.js";
import { DataMvp } from "~/stores/data-mvp";

const dataMvp = DataMvp();
const titleDesc = DataTitleDesc();

const titleResponse = await $fetch(
  "https://strapi.lymos.ru/api/title-descriptions/4",
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

const respArcHeaders = await $fetch(
  "https://strapi.lymos.ru/api/mvp-arc-headers?sort=id",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
const respStepsDev = await $fetch(
  "https://strapi.lymos.ru/api/mvp-steps-devs?sort=id",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);

const respArcFooters = await $fetch(
  "https://strapi.lymos.ru/api/mvp-arc-footers?sort=id",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);

const respPageTitle = await $fetch(
  "https://strapi.lymos.ru/api/mvp-page-titles?sort=id",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);

const respSpotsFores = await $fetch(
  "https://strapi.lymos.ru/api/mvp-spots-fores?sort=id",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
const respMvpViews = await $fetch(
  "https://strapi.lymos.ru/api/mvp-views?sort=id",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
dataMvp.getMvpData(
  respArcHeaders,
  respStepsDev,
  respArcFooters,
  respPageTitle,
  respSpotsFores,
  respMvpViews
);
</script>
<template>
  <main class="mvp">
    <ThePageTitle :pageTitles="dataMvp.pageTitle" />
    <TheSpotsFore :pageSlogans="dataMvp.spotsFores" />
    <div v-for="mvpView in dataMvp.mvpViews" :key="mvpView.id" class="wrapper">
      <div class="content product_dev">
        <h4 class="product_h4">{{ mvpView.attributes.h4 }}</h4>
        <ThePageSteps
          :arcHeaders="dataMvp.arcHeaders"
          :stepsDev="dataMvp.stepsDev"
          :arcFooters="dataMvp.arcFooters"
        />
        <p class="p_description">{{ mvpView.attributes.pDescription }}</p>
      </div>

      <div class="content">
        <div class="service_description">
          <h2>{{ mvpView.attributes.h2 }}</h2>
          <p>{{ mvpView.attributes.p }}</p>
        </div>
      </div>
    </div>
  </main>
  <TheFooter />
</template>
