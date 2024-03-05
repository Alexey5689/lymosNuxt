<script setup>
import { DataMvp } from "~/stores/data-mvp";
import { DataTitleDesc } from "~/stores/data-titleDesc.js";

const titleDesc = DataTitleDesc();
const dataMvp = DataMvp();

onMounted(() => {
  dataMvp.getMvpData();
  titleDesc.getMvpTitDesc();
});

// useHead({
//   title: () => titleDesc.mvpTitleDesc.title,
//   meta: [
//     {
//       name: "description",
//       content: () => titleDesc.mvpTitleDesc.description,
//     },
//   ],
// });
useHead({
  title: () => titleDesc.titleDesc.title,
  meta: [
    {
      name: "description",
      content: () => titleDesc.titleDesc.description,
    },
  ],
});
</script>
<template>
  <main class="mvp">
    <!-- <PageTitle :pageTitles="dataMvp.pageTitle" />
    <TheSpotsFore :pageSlogans="dataMvp.spotsFores" /> -->
    <div v-for="mvpView in dataMvp.mvpViews" :key="mvpView.id" class="wrapper">
      <div class="content product_dev">
        <h4 class="product_h4">{{ mvpView.attributes.h4 }}</h4>
        <!-- <PageSteps
          :arcHeaders="dataMvp.arcHeaders"
          :stepsDev="dataMvp.stepsDev"
          :arcFooters="dataMvp.arcFooters"
        /> -->
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
  <!-- <TheFooter /> -->
</template>
