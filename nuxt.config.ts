// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    shopware: {
      shopwareEndpoint: "https://s23511.creoline.cloud/webdev-staging"
    },
    public: {
      shopware: {
        shopwareEndpoint: "https://s23511.creoline.cloud/webdev-staging",
        shopwareAccessToken: "SWSCUHZMWDM2TTLINJFXMKG3TW",
        devStorefrontUrl: "",
      }
    },
  },
  routeRules: {
    "/": {
      isr: 60 * 60 * 24,
    },
    "/checkout": {
      ssr: true,
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    },
    "/checkout/**": {
      ssr: true,
    },
    "/login": {
      ssr: false,
    },
    "/register": {
      ssr: true,
    },
    "/reset-password": {
      ssr: true,
    },
    "/wishlist": {
      ssr: true,
    },
    "/account": {
      ssr: true,
    },
    "/account/**": {
      ssr: true,
    },
    "/search": {
      ssr: true,
    },
    "/search/**": {
      ssr: true,
    },
    "/**": {
      isr: 60 * 60 * 24,
    },
  },
  /**
   * Commented because of the StackBlitz error
   * Issue: https://github.com/shopware/frontends/issues/88
   */
  typescript: {
    // typeCheck: true,
    strict: true,
  },
  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@shopware-pwa/nuxt3-module",
    "@shopware-pwa/cms-base",
    "@nuxt/devtools",
    "@nuxtjs/i18n",
  ],
  // components: true,
  components: {
    dirs: [
      {
        path: "~/components",
        priority: 2,
      },
    ],
    global: true,
  },
  vueuse: {
    ssrHandlers: true,
  },
  nitro: {
    compressPublicAssets: true,
  },
  unocss: {
    // for presets, theme config, ... look at the uno.config.ts file
  },
  css: [
    "@unocss/reset/tailwind-compat.css",
    'bootstrap/dist/css/bootstrap.min.css' // needed to reset styles see https://unocss.dev/guide/style-reset (@unocss/reset)
  ],
  router: {
    options: {
      linkExactActiveClass: "text-brand-primary",
    },
  },
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en-GB",
    detectBrowserLanguage: false,
    langDir: "./i18n/src/langs/",
    vueI18n: "./i18n/config",
    compilation: {
      jit: false,
    },
    locales: [
      {
        code: "en-GB",
        iso: "en-GB",
        file: "en-GB.ts",
      },
      {
        code: "pl-PL",
        iso: "pl-PL",
        file: "pl-PL.ts",
      },
      {
        code: "de-DE",
        iso: "de-DE",
        file: "de-DE.ts",
      },
    ],
    experimental: {
      jsTsFormatResource: true,
    },
  },
});
