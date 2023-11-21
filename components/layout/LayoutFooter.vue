<script setup lang="ts">
import {
  getTranslatedProperty,
  getCategoryRoute,
} from "@shopware-pwa/helpers-next";

const { navigationElements } = useNavigation({ type: "footer-navigation" });
const localePath = useLocalePath();
const { formatLink } = useInternationalization(localePath);

const gridColumns = computed<number>(() =>
  navigationElements.value
    ? Object.keys(navigationElements.value).length + 2
    : 2,
);
</script>

<template>
  <footer class="px-4 sm:px-6 mt-2 lg:mt-8">
    <div class="grey" style="margin-top: 100px;">
      <div class="container justify-content-center">
        <div class="row pt-4">
          <div class="col-12 col-md-4">
            <img src="@/assets/svg/phone_forwarded.svg" style="margin-right: 10px;" alt="Avatar">
            <h5 class="thick pt-4">
              Service-Hotline
            </h5>
            <p>
              Unterstützung und Beratung unter:
              <br>
            <h5 class="inline">
              08294 / 8601888
            </h5>
            <br>

            Mo-Fr, 10:00 - 14:00 Uhr

            <br>
            Oder über unser Kontaktformular.
            </p>
          </div>
          <div class="col-12 col-md-4">
            <img src="@/assets/svg/local_police.svg" style="margin-right: 10px;" alt="Avatar">
            <h5 class="pt-4 thick">
              Rechtliches
            </h5>
            <div class="row justify-content-start">
              <div class="col align-self-start">
                <NuxtLink class="a" to="/contact">

                  Impressum

                </NuxtLink>
              </div>
            </div>
            <div class="row justify-content-start">
              <div class="col align-self-start">
                <NuxtLink class="a" to="/agb">

                  AGB

                </NuxtLink>
              </div>
            </div>
            <div class="row justify-content-start">
              <div class="col align-self-start">
                <NuxtLink class="a" to="/shipping">

                  Zahlung & Versand

                </NuxtLink>
              </div>
            </div>
            <div class="row justify-content-start">
              <div class="col-12 col-md-4 align-self-start">
                <NuxtLink class="a" to="/datenschutz">

                  Datenschutz

                </NuxtLink>
              </div>
            </div>
            <div class="row justify-content-start">
              <div class="col-12 col-md-4 align-self-start">
                <NuxtLink class="a" to="/wiederrufsrecht">

                  Widerrufserklärung

                </NuxtLink>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <img src="@/assets/svg/award_star.svg" style="margin-right: 10px;" alt="Avatar">
            <h5 class="pt-4">
              Sicher einkaufen
            </h5>
            <p>
              Bei capellaprint kaufen Sie sicher ein. Dies wird ermöglicht durch SSL-Verschlüsselung, bei der eine
              sichere Verbindung zwischen unserem Server und Ihrem Browser aufgebaut wird.
            </p>
            <p class="thick">
              Sicheres Einkaufen nach DSGVO Standards
            </p>
          </div>
        </div>
        <div class="row pt-4">
          <div class="col-12 col-md-4">
            <div class="col">
              <img src="@/assets/svg/local_shipping1.svg" style="margin-right: 10px;" alt="Avatar">
              <h5 class="pt-2">
                Versandarten
              </h5>
              <div class="row">
                <div class="col-auto" style="padding: 0px !important">
                  <!-- <img src="@/assets/svg/rhweb-dhl 1.svg" alt="Avatar"> -->
                </div>
                <div class="col-auto" style="padding: 0px !important">
                  <!-- <img src="@/assets/svg/rhweb-post-germany 1.svg" alt="Avatar"> -->
                </div>
                <div class="col-auto" style="padding: 0px !important">
                  <!-- <img src="@/assets/svg/rhweb-gogreen 1.svg" alt="Avatar"> -->
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="col">
              <img src="@/assets/svg/credit_score.svg" style="margin-right: 10px;" alt="Avatar">
              <h5 class="pt-2">
                Zahlungsarten
              </h5>
              <div class="row">
                <div class="col-auto" v-for="paymentMethod in paymentMethods"
                  style="padding: 0px !important; margin-right: 10px;">
                  <img :src="paymentMethod.media.url" alt="Avatar" style="height: 45px;">
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="col">
              <h5 class="mt-4 pt-4">Wir sind Mitglied im:</h5>
              <img src="@/assets/svg/bvdm_logo_transparent 1.svg" style="margin-top: 10px;" alt="Avatar">

            </div>
          </div>
        </div>
        <div class="row" style="margin-top: 100px; padding-bottom: 40px; text-align: center;">
          <div class="col">
            * Alle Preise inkl. gesetzl. Mehrwertsteuer zzgl. Versandkosten, wenn nicht anders angegeben.
            © 2023 AURIOPRINT – Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
