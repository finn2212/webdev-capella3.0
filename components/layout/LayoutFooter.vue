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
  <footer>
    <div class="grey pt-5 pb-5 mt-3">
      <div class="max-w-screen-xl mx-auto">
        <section class="flex flex-col md:flex-row">
          <div class="p-3 grey md:w-3/9 w-full">
            <img src="@/assets/svg/phone_forwarded.svg">
            <h5>
              Service-Hotline
            </h5>
            <p>
              Unterstützung und Beratung unter:
              <br>
            <h5>
              08294 / 8601888
            </h5>
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
            <h5>
              Rechtliches
            </h5>
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
        </section>
        <div class="mt-25">
          * Alle Preise inkl. gesetzl. Mehrwertsteuer zzgl. Versandkosten, wenn nicht anders angegeben.
          © 2023 AURIOPRINT – Alle Rechte vorbehalten.
        </div>
      </div>
    </div>
  </footer>
</template>
