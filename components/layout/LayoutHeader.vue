<script setup lang="ts">
const { count } = useCart();
const { count: wishlistCount } = useWishlist();
const localePath = useLocalePath();
const { formatLink } = useInternationalization(localePath);

const sidebarController = useModal();
</script>

<template>
  <header class="relative bg-white" aria-label="top-navigation">
    <div class="mx-auto px-4 sm:px-6 max-w-screen-xl">
      <div class="flex items-center justify-between border-b-2 border-gray-100 py-6">
        <div class="order-1 lg:order-2 flex justify-start items-center">
          <LayoutSideMenu />
        </div>
        <!-- Left side of the header: logo and menu -->
        <div class="flex items-center">
          <!-- Logo -->
          <NuxtLink to="/">
            <img src="@/assets/svg/capella_AURIOPRINT.svg" alt="Avatar" class="w-3/4 lg:w-auto">
          </NuxtLink>

          <!-- Menu Items -->
          <div class="hidden lg:flex space-x-4 ml-10">
            <NuxtLink to="/konfigurator" class="text-gray-600 hover:text-brand-primary">
              Notenheft konfigurieren
            </NuxtLink>
            <NuxtLink to="/klammerheftung" class="text-gray-600 hover:text-brand-primary">
              Noten mit Klammerheftung
            </NuxtLink>
            <NuxtLink to="/spiralbindung" class="text-gray-600 hover:text-brand-primary">
              Noten mit Spiralbindung
            </NuxtLink>
            <NuxtLink to="/good-to-know" class="text-gray-600 hover:text-brand-primary">
              Wissenswertes
            </NuxtLink>
            <NuxtLink to="/contact" class="text-gray-600 hover:text-brand-primary">
              Kontakt
            </NuxtLink>
          </div>
        </div>

        <!-- Right side of the header: account and cart -->
        <div class="flex justify-end items-center space-x-4 ml-auto mr-5">
          <AccountMenu />
          <!-- Cart -->
          <div class="flow-root justify-self-end">
            <button class="group bg-transparent -m-2 p-2 flex items-center relative" aria-label="Mini cart"
              @click="sidebarController.open">
              <div class="w-7 h-7 i-carbon-shopping-bag text-gray-600 hover:text-brand-primary"></div>
              <span v-if="count > 0"
                class="text-sm text-white absolute bg-blue-600 rounded-full min-w-5 min-h-5 top-0 right-0 leading-5">
                {{ count || "" }}
              </span>
              <span class="sr-only">{{ $t("cart.itemsInCart") }}, {{ $t("cart.viewCart") }}</span>
            </button>
          </div>
          <CheckoutSideCart :controller="sidebarController" />
        </div>
      </div>
    </div>
  </header>
</template>
