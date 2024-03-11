<script setup>
import { DataHeaderFooter } from "~/stores/data-headerFooter.js";
import { FormControl } from "~/stores/form-control.js";

const dataHeader = DataHeaderFooter();
const form = FormControl();

const response = await $fetch("https://strapi.lymos.ru/api/headers/1", {
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

const respSocials = await $fetch("https://strapi.lymos.ru/api/header-socials", {
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
const respNavigation = await $fetch("https://strapi.lymos.ru/api/header-navs", {
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

dataHeader.getHeaderFooter(response, respSocials, respNavigation);
</script>
<script>
export default {
  data() {
    return {
      isDropdownOpened: false,
    };
  },
  methods: {
    toggleDropdown() {
      if (process.client) {
        this.isDropdownOpened = !this.isDropdownOpened;
        document.body.classList.add("stop");

        const doc = document.documentElement;
        doc.style.setProperty("--app-height", `${window.innerHeight}px`);

        window.addEventListener("resize", () => {
          doc.style.setProperty("--app-height", `${window.innerHeight}px`);
        });
      }
    },
    closeDropdown() {
      this.isDropdownOpened = false;
      if (process.client) {
        document.body.classList.remove("stop");
      }
    },
  },
};
</script>
<template>
  <header class="header">
    <div class="header__dropdown" :class="{ opened: isDropdownOpened }">
      <div class="left">
        <div class="left-part">
          <nav>
            <ul>
              <li
                v-for="navigation in dataHeader.navigations"
                :key="navigation.id"
              >
                <NuxtLink
                  :to="`/${navigation.attributes.routerLink_to}`"
                  @click="closeDropdown"
                  >{{ navigation.attributes.routerLink }}</NuxtLink
                >
              </li>
            </ul>
          </nav>
          <p>{{ dataHeader.copyrightP }}</p>
        </div>
        <div class="right-part">
          <nav>
            <ul>
              <li>
                <a class="btn-order" @click="form.changActivForm"
                  >{{ dataHeader.a_orderProject }}
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.8027 8L12.5 23.3027M27.8027 8L27.8027 21.3456M27.8027 8L14.4816 8"
                      stroke="#FD8B93"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>

          <div class="right-contacts">
            <a :href="`tel:${dataHeader.a_href_tel}`">{{ dataHeader.a_tel }}</a>
            <span class="dropdown__divider"></span>
            <a :href="`mailto:${dataHeader.a_href_mail}`">{{
              dataHeader.a_mail
            }}</a>
          </div>
        </div>
      </div>

      <div class="left-mobile">
        <nav>
          <ul>
            <li>
              <a class="btn-order" @click="form.changActivForm"
                >{{ dataHeader.a_orderProject }}
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.8027 8L12.5 23.3027M27.8027 8L27.8027 21.3456M27.8027 8L14.4816 8"
                    stroke="#FD8B93"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </li>
            <li
              v-for="navigation in dataHeader.navigations"
              :key="navigation.id"
              class="mobile_li"
            >
              <NuxtLink
                :to="`/${navigation.attributes.routerLink_to}`"
                @click="closeDropdown"
                >{{ navigation.attributes.routerLink }}</NuxtLink
              >
            </li>
          </ul>
        </nav>
        <div class="left-mobile-contacts">
          <a :href="`tel:${dataHeader.a_href_tel}`">{{ dataHeader.a_tel }}</a>
          <a :href="`mailto:${dataHeader.a_href_mail}`">{{
            dataHeader.a_mail
          }}</a>
          <!-- info@lymos.ru -->
        </div>

        <p class="left-mobile-rights lmr-601">
          {{ dataHeader.copyrightP }}
        </p>
      </div>
      <div class="right">
        <button class="close-menu" @click="closeDropdown">
          <img src="~/assets/img/icons/icons.svg#x" alt="Закрыть" />
        </button>
        <div class="dropdown__links">
          <a
            v-for="social in dataHeader.socials"
            :key="social.id"
            :href="social.attributes.a_href"
            target="_blank"
            >{{ social.attributes.a_social }}</a
          >
        </div>
      </div>

      <p class="left-mobile-rights lmr-600">
        {{ dataHeader.copyrightP }}
      </p>
    </div>

    <!--  -->
    <div class="wrapper">
      <ul class="header__left-side">
        <li class="header__menu" @click="toggleDropdown">
          <p>{{ dataHeader.menuButtonP }}</p>
          <button>
            <span></span>
          </button>
        </li>
        <li
          v-for="navigation in dataHeader.headerMenues"
          :key="navigation.id"
          class="header__left-item"
        >
          <NuxtLink
            :to="`/${navigation.attributes.routerLink_to}`"
            @click="closeDropdown"
            >{{ navigation.attributes.routerLink }}</NuxtLink
          >
        </li>
      </ul>
      <div class="header__logo">
        <NuxtLink to="/">
          <img src="~/assets/img/icons/icons.svg#logo" alt="Логотип" />
        </NuxtLink>
      </div>
      <ul class="header__right-side">
        <li class="header__right-item">
          <a :href="`tel:${dataHeader.a_href_tel}`">{{ dataHeader.a_tel }}</a>
        </li>
        <li>
          <a class="btn-order" @click="form.changActivForm"
            >{{ dataHeader.a_orderProject }}
            <TheIconOrderProject />
          </a>
        </li>
      </ul>
    </div>

    <TheForm v-if="form.getFormState" />
    <TheFormThanks v-if="form.getThanksFormState" />
  </header>
</template>

<style scoped>
.header__menu button {
  cursor: pointer;
}

.header__left-item a,
.header__logo a,
.header .left-part nav ul li a,
.mobile_li a {
  text-decoration: none;
  color: #1e1e1e;
}

@media (max-width: 600px) {
  .mobile_li a {
    font-size: 28px;
  }
}

.header__logo a img {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
</style>
