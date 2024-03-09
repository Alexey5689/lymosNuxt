<template>
  <div v-for="SwData in swiperData" :key="SwData.id">
    <NuxtLink
      :to="`/services/${SwData.attributes.url}`"
      class="services__slide swiper-slide"
      :class="'slide-' + SwData.id"
    >
      <div class="bg_img_slide">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="250"
          height="250"
          viewBox="0 0 250 250"
          fill="none"
        >
          <path :d="SwData.attributes.d" fill="white" fill-opacity="0.4" />
        </svg>
      </div>
      <div class="services__top-block">
        <h5>{{ SwData.attributes.title }}</h5>
        <TheIconCard />
      </div>
      <p>
        {{ SwData.attributes.body }}
      </p>
    </NuxtLink>
  </div>
</template>
<script setup>
const response = await $fetch("https://strapi.lymos.ru/api/swipers?sort=id", {
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

const swiperData = response.data;
</script>
<style scoped>
@media (max-width: 990px) {
  .swiper-slide {
    height: 250px;
  }
}

@media (max-width: 600px) {
  .swiper-slide {
    height: 150px;
  }
}
.services__slide {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
</style>
