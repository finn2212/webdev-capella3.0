// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    shopware: {
      shopwareEndpoint: process.env.SHOPWARE_ENDPOINT,
    },
    public: {
      shopware: {
        shopwareEndpoint: process.env.SHOPWARE_ENDPOINT,
        shopwareAccessToken: process.env.SHOPWARE_ACCESS_TOKEN,
      },
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap",
        },
      ],
    },
  },
  routeRules: {
    "/": {
      isr: 60 * 60 * 24,
    },
    "/checkout": {
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    },
    "/checkout/**": {},
    "/login": {},
    "/register": {},
    "/reset-password": {},
    "/wishlist": {},
    "/account": {},
    "/account/**": {},
    "/search": {},
    "/search/**": {},
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
    "nuxt-headlessui",
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@shopware-pwa/nuxt3-module",
    "@shopware-pwa/cms-base",
    "@nuxt/devtools",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
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
    "~/assets/css/tailwind.css",
    "~/assets/css/styles.css",
    // 'bootstrap/dist/css/bootstrap.min.css' // needed to reset styles see https://unocss.dev/guide/style-reset (@unocss/reset)
  ],
  plugins: [
    "~/plugins/firebase.js", // Make sure the path matches your file's location
    "~/plugins/cookiebot.js",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  headlessui: {
    prefix: "",
  },

  router: {
    options: {
      linkExactActiveClass: "text-brand-primary",
    },
  },

  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "de-DE",
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

  devtools: {
    timeline: {
      enabled: true,
    },
  },
});
