<script setup>
import { DataContact } from "~/stores/data-contacts.js";
import { DataTitleDesc } from "~/stores/data-titleDesc.js";
import { DataHeaderFooter } from "~/stores/data-headerFooter.js";

const dataContact = DataContact();
const titleDesc = DataTitleDesc();
const contacts = DataHeaderFooter();

const titleResponse = await $fetch(
  "https://strapi.lymos.ru/api/title-descriptions/8",
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

const respContacts = await $fetch("https://strapi.lymos.ru/api/contacts/1", {
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

dataContact.getContacts(respContacts);
</script>
<template>
  <main>
    <TheSpots />
    <div class="wrapper">
      <div class="content contacts">
        <h1 class="title_contacts">{{ dataContact.title_contacts_h1 }}</h1>
        <h3>{{ dataContact.title_contacts_h3 }}</h3>
        <div class="map">
          <iframe
            :src="dataContact.iframe"
            width="100%"
            height="720"
            frameborder="0"
          >
          </iframe>
        </div>
        <div class="contact_us">
          <div class="social_network">
            <h4>{{ dataContact.social_network_h4 }}</h4>
            <ul>
              <li
                v-for="socialNetwork in contacts.socialNetworks"
                :key="socialNetwork.id"
              >
                <a :href="socialNetwork.attributes.a_href" target="_blank">{{
                  socialNetwork.attributes.a_social
                }}</a>
              </li>
            </ul>
          </div>
          <div class="messengers">
            <h4>{{ dataContact.messengers_h4 }}</h4>
            <ul>
              <li v-for="messenger in contacts.messengers" :key="messenger.id">
                <a :href="messenger.attributes.a_href" target="_blank">{{
                  messenger.attributes.a_social
                }}</a>
              </li>
            </ul>
          </div>
          <div class="phone_number">
            <!-- target="_blank" -->
            <h4>{{ dataContact.phone_number_h4 }}</h4>
            <a :href="`tel:${contacts.a_href_tel}`">{{ contacts.a_tel }}</a>
          </div>
          <div class="email">
            <h4>{{ dataContact.email_h4 }}</h4>
            <a :href="`mailto:${contacts.a_href_mail}`">{{
              contacts.a_mail
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
