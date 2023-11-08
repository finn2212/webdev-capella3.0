<script setup lang="ts">
import { getSessionContext } from "@shopware-pwa/api-client";
import { SessionContext } from "@shopware-pwa/types";
import { getPrefix } from "./i18n/src/helpers/prefix";

/**
 * Init breadcrumbs context
 */
useBreadcrumbs();

useHead({
  title: "Shopware Demo store",
  meta: [{ name: "description", content: "Shopware Demo store" }],
  htmlAttrs: {
    lang: "en",
  },
});

const { apiInstance } = useShopwareContext();
const sessionContextData = ref();
sessionContextData.value = await getSessionContext(apiInstance);

// If you enable runtimeConfig.shopware.useUserContextInSSR, then you can use this code to share session between server and client.
// const { data: sessionContextData } = await useAsyncData(
//   "sessionContext",
//   async () => {
//     return await getSessionContext(apiInstance);
//   }
// );

// read the locale/lang code from accept-language header (i.e. en, en-GB or de-DE)
// and set configuration for price formatting globally
const headers = useRequestHeaders();
// Extract the first (with highest priority order) locale or lang code from accept-language header
// for example: "en-US;q=0.7,en;q=0.3" will return "en-US"
const localeFromHeader = headers?.["accept-language"]
  ?.split(",")
  ?.map(
    (languageConfig) => languageConfig.match(/^([a-z]{2}(?:-[A-Z]{2})?)/)?.[0],
  )
  .find(Boolean);

usePrice({
  currencyCode: sessionContextData.value?.currency?.isoCode || "",
  localeCode: localeFromHeader,
});

useSessionContext(sessionContextData.value as SessionContext);

const { getWishlistProducts } = useWishlist();
const { refreshCart } = useCart();

useNotifications();
useAddress();

const { locale, availableLocales, defaultLocale } = useI18n();
const router = useRouter();
const {
  getAvailableLanguages,
  getLanguageCodeFromId,
  getLanguageIdFromCode,
  changeLanguage,
  languages: storeLanguages,
} = useInternationalization();
const { languageIdChain, refreshSessionContext } = useSessionContext();

const { data: languages } = await useAsyncData("languages", async () => {
  return await getAvailableLanguages();
});

if (languages.value?.elements.length && router.currentRoute.value.name) {
  storeLanguages.value = languages.value?.elements;
  // Prefix from url
  const prefix = getPrefix(
    availableLocales,
    router.currentRoute.value.name as string,
    defaultLocale,
  );

  // Language set on the backend side
  const sessionLanguage = getLanguageCodeFromId(languageIdChain.value);
  // If languages are not the same, set one from prefix
  if (sessionLanguage !== prefix) {
    await changeLanguage(
      getLanguageIdFromCode(prefix ? prefix : defaultLocale),
    );
    await refreshSessionContext();
  }

  locale.value = prefix ? prefix : defaultLocale;
  // Set prefix from CMS components
  provide("urlPrefix", prefix);
}

onMounted(() => {
  refreshCart();
  getWishlistProducts();
});
</script>

<template>
  
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
h2 {
  @apply text-4xl py-4;
}

select {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9J25vbmUnIHZpZXdCb3g9JzAgMCAyMCAyMCc+PHBhdGggc3Ryb2tlPScjNmI3MjgwJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMS41JyBkPSdNNiA4bDQgNCA0LTQnLz48L3N2Zz4=");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  appearance: none;
}


.img {
  width: 100%;
  height: 100%;
}

.btnfooter {
  background-color: #F5F5F5;
  border: 0px;
}

.customBorder {
  border-style: solid;
  border-width: 15px;
  border-color: white;
}

.blockStart {
  padding-left: 0px !important;
  padding-right: 10px !important;
}

.blockStartMarign {
  padding-left: 0px !important;
  padding-right: 10px !important;
  margin-right: 40px !important;
}

.btn {
  background: #000000 !important;
  border-radius: 100px;
  font-weight: bold !important;
  color: white !important;
}

.table>:not(caption)>*>* {
  border-bottom-width: 0px !important;
}

.plusBtn {
  height: 13px;
  margin-right: 5px;
  display: inline-block;
}

.a {
  color: black !important;
  text-decoration: none !important;
}


.heading-grid {

  align-items: center;
  line-height: 36px;
  text-align: left;
  font-size: 30px;
}

.p-grid {
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.2px;
  text-align: left;
}

.pdc {
  padding: 20px;
}

.card {
  margin: 0px;
  border-radius: 0px;
  padding: 0px;
  border-width: 0px !important;
}

.card-img-top {
  border-radius: 0px;
}

.dropdownStyle {
  background: white !important;
  color: black !important;
  border: 0px !important;
}

.colfreeKlammer {
  margin-top: 18% !important;
  padding-right: 0px !important;
  width: 425px;
}

@media only screen and (max-width: 1400px) {
  .colfreeKlammer {
    margin-top: 10% !important;
    padding-right: 0px !important;
    width: 363px
  }
}

@media only screen and (max-width: 1200px) {
  .colfreeKlammer {
    margin-top: 150px !important;
    padding-right: 0px !important;

  }
}

@media only screen and (max-width: 991px) {
  .colfreeKlammer {
    padding-right: 10px !important;
    margin-top: 5px !important;

  }
}


.btn {
  background: #000000;
  border-radius: 100px !important;
  margin-top: 0px !important;
}

.inline {
  display: inline;
}

.fit {
  object-fit: cover;
}


.darkblue {
  background: #93AEBF;
}

.brwon {
  background: #EDEADE;

}

.green {
  background: #CCD96A;
}

.btn {
  background: #000000;
  border-radius: 100px;
}

.blue {
  background: #D5E7F2;
}

.beige {
  background: #EDEADE;
}

.midNightBlue {
  background: #696E8B;

}

.orange {
  background: #F29C50;
}



.pink {
  background: #F2CED5;
}

.yellow {
  background: #F2CF63;
}

.grey {
  background: #F5F5F5;
}

.uploadBtn {
  background-color: #F5F5F5 !important;
  color:#000000;
  border-style: solid !important;
  border-width: 1px !important;
  border-color: black !important;
}

.selectBtn {
  background-color: #F5F5F5 !important;
  border-radius: 7px;
  padding-left: 3px;
  padding-right: 3px;
}

.red {
  background: #D95A4E;
}

.bred {
  background-color: #D5E7F2 !important;
}

.accordion-item {
  color: var(--bs-accordion-color);
  background-color: #D5E7F2 !important;
  border: 0 !important;
}

.noborder {
  border: 0px
}

.small {

  font-size: 13px;
}

.accordion-body {
  padding-top: 0px;
  padding-bottom: 0px;
}

.top {
  margin-top: 140px !important;
}

@media only screen and (max-width: 1024px) {
  .top {
    margin-top: 40px !important;
  }
}
.red-font{
  color: red
}

.hidden{
  display: none;
}
.btnMenu {
  border: 0px;
  background-color: transparent;
}

.h1,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Noto Sans', sans-serif !important;
  font-weight: 700 !important;
}

.h2 {
  font-size: 30px !important;
  font-family: 'Noto Sans', sans-serif !important;
  font-weight: 700 !important;
}

.thick {
  font-weight: 700;
  color: #000000;
}

.p-5 {
  padding: 35px !important;
}
</style>
