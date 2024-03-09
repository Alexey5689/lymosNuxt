<script setup>
const titleResponse = await $fetch(
  "https://strapi.lymos.ru/api/title-descriptions/1",
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

const homeResponse = await $fetch("https://strapi.lymos.ru/api/home-views/1", {
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
const respBenefits = await $fetch(
  "https://strapi.lymos.ru/api/home-view-benefits-h4s",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
const respAbout = await $fetch(
  "https://strapi.lymos.ru/api/home-view-about-ps",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
const aboutPs = respAbout.data;
const respAboutBlock = await $fetch(
  "https://strapi.lymos.ru/api/home-view-about-block-ps",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);
let tmpAboutBlock1 = respAboutBlock.data[0];
let tmpAboutBlock2 = respAboutBlock.data[1];
let tmpAboutBlock3 = respAboutBlock.data[2];
const aboutBlockPs = respAboutBlock.data;
const aboutBlockP1 = tmpAboutBlock1.attributes.p;
const aboutBlockSpan1 = tmpAboutBlock1.attributes.span;
const aboutBlockP2 = tmpAboutBlock2.attributes.p;
const aboutBlockSpan2 = tmpAboutBlock2.attributes.span;
const aboutBlockP3 = tmpAboutBlock3.attributes.p;
const aboutBlockSpan3 = tmpAboutBlock3.attributes.span;
const benefitsh4 = respBenefits.data;
let tmp = homeResponse.data;
const introH1Span = tmp.attributes.introH1Span;
const introH1 = tmp.attributes.introH1;
const introH4 = tmp.attributes.introH4;
const servicesH4 = tmp.attributes.servicesH4;
const servicesRouterLink = tmp.attributes.servicesRouterLink;
const servicesP = tmp.attributes.servicesP;
const benefitsH2 = tmp.attributes.benefitsH2;
const benefitsSpan = tmp.attributes.benefitsSpan;
const aboutH4 = tmp.attributes.aboutH4;
</script>

<template>
  <main>
    <section class="intro">
      <div class="wrapper">
        <h1>
          <!-- <span data-text="{Строим}">{Строим}</span> будущее ИТ-развития вместе -->
          <span>{{ introH1Span }}</span> {{ introH1 }}
        </h1>

        <h4>
          {{ introH4 }}
        </h4>
      </div>
    </section>
    <section class="services">
      <div class="wrapper">
        <h4>{{ servicesH4 }}</h4>

        <div class="services__container">
          <div class="services__pre">
            <NuxtLink to="/services" class="services__btn primary-btn"
              >{{ servicesRouterLink }}
              <TheIconPrimaryBtn />
            </NuxtLink>
            <p class="services__text">{{ servicesP }}</p>
          </div>
          <div class="services__slider-container swiper-container">
            <TheSwiper />
          </div>
          <div class="services__mobile">
            <TheServicesMobile />
          </div>
        </div>
      </div>
    </section>
    <section class="benefits">
      <div class="wrapper">
        <h2>
          <span>{{ benefitsSpan }}</span>
          {{ benefitsH2 }}
        </h2>
        <span class="divider"></span>
        <h4 v-for="benefith4 in benefitsh4" :key="benefith4.id">
          {{ benefith4.attributes.h4 }}
        </h4>
      </div>
    </section>
    <section class="about">
      <div class="wrapper">
        <h4>{{ aboutH4 }}</h4>
        <div class="about__container">
          <div class="about__pre">
            <!-- <button class="about__btn primary-btn">
              О компании
              <IconPrimaryBtn />
            </button> -->
            <!-- aboutPs -->
            <div>
              <p v-for="aboutP in aboutPs" :key="aboutP.id" class="about__text">
                {{ aboutP.attributes.p }}
              </p>
            </div>
          </div>
          <div class="about__blocks">
            <div class="about__block">
              <span class="about__block-num">{{ aboutBlockSpan1 }}</span>
              <p>{{ aboutBlockP1 }}</p>
            </div>
            <div class="about__divider"></div>
            <div class="about__block">
              <span class="about__block-num"> {{ aboutBlockSpan2 }}</span>
              <p>{{ aboutBlockP2 }}</p>
            </div>
            <div class="about__divider"></div>
            <div class="about__block">
              <span class="about__block-num">{{ aboutBlockSpan3 }}</span>
              <p>{{ aboutBlockP3 }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <TheFooter />
</template>

<style scoped>
/* добавил для корректной работы swiper */
.swiper {
  height: 26.0416667vw;
}

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

.primary-btn {
  font-size: 16px;
  color: #1e1e1e;
  text-decoration: none;
}

@media (max-width: 1440px) {
  .primary-btn {
    font-size: 14px;
  }
}

@media (max-width: 990px) {
  .primary-btn {
    font-size: 12px;
  }
}

.indicates {
  width: 16.40625vw;
}
</style>
