<script setup lang="ts">
const { count } = useCart();
const { count: wishlistCount } = useWishlist();
const localePath = useLocalePath();
const { formatLink } = useInternationalization(localePath);

const sidebarController = useModal();
</script>

<template>
  <header class="relative bg-white" aria-label="top-navigation">
    <div class="mx-auto px-4 sm:px-6">
      <div class="flex items-center border-b-2 border-gray-100 py-6 space-x-4">
        <div class="flex justify-start items-center min-w-10 lg:min-w-12">
          <div class="order-2 lg:order-1 ml-4 lg:ml-0">
            <div class="row mt-2 mb-3">
              <div class="col-1 col-xl-2">
               
                  <NuxtLink class="a" to="/">
                    <img src="@/assets/svg/capella_AURIOPRINT.svg" alt="Avatar" style="width: 75%;">
                  </NuxtLink>
   
              </div>
              <div class="col-auto mt-3">
                <button type="button" id="menuBtn1" class="btnMenu p-0" @click="setActive(1)">
                  <NuxtLink class="a" to="/konfigurator">
                    Notenheft konfigurieren
                  </NuxtLink>
                </button>
              </div>
              <div class="col-auto mt-3">
                <button type="button" id="menuBtn2" class="btnMenu p-0" @click="setActive(2)">
                  <NuxtLink class="a" to="/klammerheftung">
                    Noten mit Klammerheftung
                  </NuxtLink>
                </button>
              </div>
              <div class="col-auto mt-3 me-1">
                <button type="button" id="menuBtn3" class="btnMenu p-0" @click="setActive(3)">
                  <NuxtLink class="a" to="/spiralbindung">
                    Noten mit Spiralbindung
                  </NuxtLink>
                </button>
              </div>
              <div class="col-auto mt-3">
                <button type="button" id="menuBtn4" class="btnMenu p-0" @click="setActive(4)">
                  <NuxtLink class="a" to="/good-to-know">
                    Wissenswertes
                  </NuxtLink>
                </button>
              </div>
              <div class="col-auto mt-3">
                <button type="button" id="menuBtn5" class="btnMenu p-0" @click="setActive(5)">
                  <NuxtLink class="a" to="/contact">
                    Kontakt
                  </NuxtLink>
                </button>
              </div>
            </div>
        
          </div>
          <div class="order-1 lg:order-2 flex justify-start items-center">
            <LayoutSideMenu />
          </div>
        </div>

        <LayoutTopNavigation />
        <div class="flex flex-1"></div>

        <div class="hidden md:flex md:min-w-1/4">
          <LayoutStoreSearch />
        </div>

        <div class="flex items-center justify-end">
          <AccountMenu />
          <div class="flex ml-4 flow-root lg:ml-6">
            <NuxtLink class="group -m-2 p-2 flex items-center relative text-center" aria-label="wishlist"
              data-testid="wishlist-button" :to="formatLink(`/wishlist`)">
              <div
                class="w-7 h-7 i-carbon-favorite text-gray-600 hover:text-brand-primary hover:animate-count-infinite hover:animate-heart-beat" />
              <span v-if="wishlistCount > 0"
                class="text-3 font-sm text-white absolute bg-red-600 rounded-full min-w-5 min-h-5 top-0 right-0 leading-5">
                {{ wishlistCount }}
              </span>
            </NuxtLink>
          </div>
          <!-- Cart -->
          <div class="flex ml-4 flow-root lg:ml-6">
            <button class="group bg-transparent -m-2 p-2 flex items-center relative" aria-label="Mini cart"
              data-testid="cart-button" @click="sidebarController.open">
              <!-- Heroicon name: outline/shopping-bag -->
              <div class="w-7 h-7 i-carbon-shopping-bag text-gray-600 hover:text-brand-primary" />
              <span v-if="count > 0"
                class="text-3 font-sm text-white absolute bg-blue-600 rounded-full min-w-5 min-h-5 top-0 right-0 leading-5">
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
