<script setup lang="ts">
import {
  getTranslatedProperty,
  getCategoryRoute,
} from "@shopware-pwa/helpers-next";
import { getSessionContext } from "@shopware-pwa/api-client";
import { SessionContext } from "@shopware-pwa/types";

const { navigationElements } = useNavigation({ type: "footer-navigation" });
const localePath = useLocalePath();
const { formatLink } = useInternationalization(localePath);
const {
  paymentMethods,
  shippingMethods,
  getPaymentMethods,
  getShippingMethods,
  createOrder,
} = useCheckout();
const {
  refreshSessionContext,
} = useSessionContext();
const isLoading = reactive<{ [key: string]: boolean }>({});

onMounted(async () => {
  await refreshSessionContext();

  isLoading["shippingMethods"] = true;
  isLoading["paymentMethods"] = true;

  Promise.any([
    getPaymentMethods(),
    getShippingMethods()
  ]).finally(() => {
    isLoading["shippingMethods"] = false;
    isLoading["paymentMethods"] = false;
    console.log(paymentMethods.value)
  });
});

// Define getImageUrl method
function getImageUrl(method: any) {
  return method.media?.url || 'path/to/your/default/image.svg'; // Provide a fallback image URL
}


const gridColumns = computed<number>(() =>
  navigationElements.value
    ? Object.keys(navigationElements.value).length + 2
    : 2,
);
</script>
<template>
  <footer>
    <div class="grey pt-5 pb-5 mt-20">
      <div class="max-w-screen-xl mx-auto">
        <section class="flex flex-col md:flex-row">
          <div class="p-3 grey md:w-3/9 w-full">
            <img src="@/assets/svg/phone_forwarded.svg">
            <h2 class="mt-3 font-bold">
              Service-Hotline
            </h2>
            <p>
              Unterstützung und Beratung unter:
              <br>
            <h2>
              08294 / 8604974
            </h2>
            <br>

            Mo-Fr, 10:00 - 14:00 Uhr

            <br>
            Oder über unser Kontaktformular.
            </p>
          </div>
          <div>


          </div>
          <div class="p-3 grey md:w-3/9 w-full">
            <img src="@/assets/svg/local_police.svg">
            <h2 class="mt-3 font-bold">
              Rechtliches
            </h2>
            <div>
              <div>
                <NuxtLink class="a" to="/contact">
                  Impressum
                </NuxtLink>
              </div>
            </div>
            <div>
              <div>
                <NuxtLink class="a" to="/agb">
                  AGB
                </NuxtLink>
              </div>
            </div>
            <div>
              <div>
                <NuxtLink class="a" to="/shipping">
                  Zahlung & Versand
                </NuxtLink>
              </div>
            </div>
            <div>
              <div>
                <NuxtLink class="a" to="/datenschutz">
                  Datenschutz
                </NuxtLink>
              </div>
            </div>
            <div>
              <div>
                <NuxtLink class="a" to="/wiederrufsrecht">
                  Widerrufserklärung
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="p-3 grey md:w-3/9 w-full">
            <img src="@/assets/svg/award_star.svg">
            <h2 class="mt-3 font-bold">
              Sicher einkaufen
            </h2>
            <p>
              Bei capellaprint kaufen Sie sicher ein. Dies wird ermöglicht durch SSL-Verschlüsselung, bei der eine
              sichere Verbindung zwischen unserem Server und Ihrem Browser aufgebaut wird.
            </p>
            <p class="thick">
              Sicheres Einkaufen nach DSGVO Standards
            </p>
          </div>
        </section>
        <section class="flex flex-col md:flex-row mt-3">
          <div class="p-3 grey md:w-3/9 w-full">
            <img src="@/assets/svg/local_shipping1.svg">
            <h2 class="mt-3 font-bold">
              Versandarten
            </h2>
            <div v-if="isLoading.shippingMethods">
              Loading payment methods...
            </div>
            <div v-else-if="shippingMethods">
              <div class="flex mt-3">
                <img v-for="method in shippingMethods" :src="getImageUrl(method)" :key="method.id"
                  class="mr-3 max-w-15">
              </div>
            </div>
          </div>
          <div>
          </div>
          <div class="p-3 grey md:w-3/9 w-full">
            <img src="@/assets/svg/credit_score.svg">
            <h2 class="mt-3 font-bold">
              Zahlungsarten
            </h2>
            <div v-if="isLoading.paymentMethods">
              Loading payment methods...
            </div>
            <div v-else-if="paymentMethods">
              <div class="flex mt-3">
                <img v-for="method in paymentMethods" :src="getImageUrl(method)" :key="method.id" class="mr-3">
              </div>
            </div>
          </div>
          <div class="p-3 grey md:w-3/9 w-full mt-10">
            <h2 class="mt-3 font-bold">
              Wir sind Mitglied im:
            </h2>
            <img src="@/assets/svg/bdm.svg">
          </div>
        </section>
        <div class="mt-25">
          * Alle Preise inkl. gesetzl. Mehrwertsteuer zzgl. Versandkosten, wenn nicht anders angegeben.
          © 2024 AURIOPRINT – Alle Rechte vorbehalten.
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.payment-method-icon {
  width: 50px;
  /* Adjust size as needed */
  margin-right: 10px;
  /* Spacing between icons */
}
</style>