<script setup lang="ts">
import { getSessionContext } from "@shopware-pwa/api-client";
import { SessionContext } from "@shopware-pwa/types";
import { getPrefix } from "./i18n/src/helpers/prefix";

/**
 * Init breadcrumbs context
 */
useBreadcrumbs();

useHead({
  title: "capellaprint - günstig Musiknoten drucken lassen",
  meta: [{ name: "capellaprint", content: "günstig Musiknoten drucken lassen" }],
  htmlAttrs: {
    lang: "de",
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
.red {
  background: #D95A4E;
}

.bred {
  background-color: #D5E7F2 !important;
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
</style>
