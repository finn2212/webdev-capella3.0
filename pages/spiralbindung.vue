<script lang="ts">
export default {
  name: "PageResolver",
};
</script>

<script setup lang="ts">
import { type Ref, resolveComponent } from "vue";
import { pascalCase } from "scule";
import {
  useNavigationContext,
  useNavigationSearch,
} from "@shopware-pwa/composables-next";
import { type SeoUrl } from "@shopware-pwa/types";
import { ref } from "vue";

const { clearBreadcrumbs } = useBreadcrumbs();

const NOT_FOUND_COMPONENT = "errors/RoutingNotFound";
const { resolvePath } = useNavigationSearch();
const route = useRoute();
const { locale } = useI18n();
const routePath = route.path.replace(`${locale.value}`, "").replace("//", "/");
</script>

<template>
  <div class="max-w-screen-xl mx-auto">
    <section class="pt-20">
      <div class="relative h-full w-full border-12 border-white">
        <!-- Hero Image -->
        <img src="@/assets/images/spiralheader.png" alt="Avatar" class="object-cover w-full max-h-[350px] mx-auto">
      </div>
    </section>
    <section class="pt-20">
      <div class="flex flex-col md:flex-row">
        <div class="flex flex-col md:w-3/9 w-full border-12 border-white">
          <h2>
            Notenbuch mit Spiralbindung günstig drucken lassen
          </h2>
          <p class="pt-4">
            Auch wer Großes vor hat, wird bei AURIOPRINT fündig: Mit unseren Spiralbindungen bekommt auch der dickste
            Klavierauszug festen Halt.
          </p>
          <p>
          <p class="pt-4">
            Spiralgebundene Partituren können sowohl im Hochformat als auch im Querformat hergestellt werden.
          </p>
          <p class="pt-4"> Mit einem Seitenumfang ab 2 bis zu 400 Seiten Innenteil (und ggf. einem farbigen Umschlag,
            wenn
            Sie möchten) sind es wahre Alleskönner in unserem Produktportfolio.
          </p>
          </p>
        </div>
        <div class="md:w-6/9 flex w-full border-12 border-white green p-5">
          <div class="sm:w-1/2 p-4 flex flex-col">
            <h1 class="flex items-center">
              <img src="@/assets/svg/info.svg" alt="Avatar" class="pr-3">
              Eigenschaften
            </h1>
            <p class="mt-5 flex-grow">
              Wir verwenden die für Musikalien besonders geeignete Coilbindung, die sich von der herkömmlichen
              Spiralbindung oder gar Plastikkammbindung nicht nur durch edleres Aussehen, sondern und vor allem auch
              durch
              leises Umblättern und dadurch bessere Nutzbarkeit im Konzert auszeichnet.
            </p>
            <a href="https://firebasestorage.googleapis.com/v0/b/pocselfpublish.appspot.com/o/uploads%2FDruckdaten_Print_data_2023.pdf?alt=media&token=e8196ae8-3679-4f5a-9445-48d46724fc65"
              target="_blank" class="mt-auto w-full">
              <button type="button"
                class="bg-black text-white border border-black rounded-full py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex items-center justify-center w-full">
                <img src="@/assets/svg/download.svg" alt="Download" style="height: 19px; margin-right: 10px;">
                <p>Maßvorgaben (PDF)</p>
              </button>
            </a>
          </div>

          <div class="md:w-1/2 p-4 space-y-4">
            <div class="flex items-center">
              <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-2">
              <p>Formate: DIN A4 / 19 x 27 cm / 22,8 x 30,5 cm / DIN B4 / DIN A3 / 31,5 x 46 cm</p>
            </div>
            <!-- Repeat for each item -->
            <div class="flex items-center">
              <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-2">
              <p> Für große Partituren (bspw. Dirigierpartituren), hervorragend geeignet</p>
            </div>
            <!-- Repeat for each item -->
            <div class="flex items-center">
              <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-2">
              <p>Seitenumfang bis 88 Seiten + Umschlag machbar</p>
            </div>
            <!-- Repeat for each item -->
            <div class="flex items-center">
              <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-2">
              <p> Seitenumfang von 2–400 Seiten + Umschlag möglich</p>
            </div>
            <!-- Repeat for each item -->
            <div class="flex items-center">
              <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-2">
              <p>Hochformat und Querformat möglich</p>
            </div>
            <!-- Repeat for each item -->
            <div class="flex items-center">
              <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-2">
              <p> 3–6 Werktage Produktionszeit</p>
            </div>
            <!-- Add more items as needed -->
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col md:flex-row mt-20">
      <div class="md:w-3/9 w-full border-12 border-white flex flex-col">
        <h2>
          Direkt zu den Topsellern
        </h2>
        <p class="mt-4">
          Starten Sie mit unseren meistgefragten Druckprodukten – diese Formate stellen wir täglich
          zigfach her.
        </p>
        <!-- New div that aligns at the bottom -->
        <div class="mt-auto beige p-5">
          <p> Weniger als 88 Seiten Inhalt? Günstigere Preise gesucht?</p>
          <NuxtLink to="/konfigurator">
            <h2 class="mt-3">
              Zu den
              Notenheften mit Klammerheftung
            </h2>
            <img src="@/assets/svg/arrow_circle_right.svg" alt="Avatar" class="mt-3">
          </NuxtLink>
        </div>
      </div>
      <div class="blue md:w-3/9 w-full border-12 border-white flex flex-col">
        <img src="@/assets/images/pic4.png" class="smmax-h-xs object-cover">
        <div class="flex flex-col flex-grow p-5"> <!-- Make this a flex container and let it grow -->
          <h2>Notenbuch DIN A4 Spiralbindung hoch</h2>
          <!-- Image and Text 1 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p> 2–400 Seiten Inhalt + Deckblatt und Rückwand möglich</p>
          </div>

          <!-- Image and Text 2 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Deckblatt zusätzlich mit transparenter Folie möglich</p>
          </div>

          <!-- Image and Text 3 -->
          <div class="flex items-center mt-4 mb-5">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p> Inhalt: 90g Notenpapier elfenbeinfarben, schwarzweiß bedruckbar</p>
          </div>

          <!-- Button -->
          <div class="mt-auto max-w-40">
            <NuxtLink to="/konfigurator"
              class="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex items-center justify-start">
              <img src="@/assets/svg/plus.svg" alt="Plus" class="mr-3" /> <!-- Icon -->
              Jetzt
              drucken
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="blue md:w-3/9 w-full border-12 border-white flex flex-col">
        <img src="@/assets/images/pic5.png" class="smmax-h-xs object-cover">
        <div class="flex flex-col flex-grow p-5"> <!-- Make this a flex container and let it grow -->
          <h2>Notenbuch DIN A4 Spiralbindung quer</h2>
          <!-- Image and Text 1 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Perfekt für Orgelnoten geeignet</p>
          </div>

          <!-- Image and Text 2 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Langlebige und praktikable Qualität der Bindung, geräuscharm umzublättern</p>
          </div>

          <!-- Image and Text 3 -->
          <div class="flex items-center mt-4 mb-5">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>2–400 Seiten Inhalt + Deckblatt und Rückwand möglich</p>
          </div>

          <!-- Button -->
          <div class="mt-auto max-w-40"> <!-- This will now be pushed to the bottom -->
            <NuxtLink to="/konfigurator"
              class="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex items-center justify-start">
              <img src="@/assets/svg/plus.svg" alt="Plus" class="mr-3" />
              Jetzt
              drucken
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col md:flex-row mt-20">
      <div class="md:w-3/9 w-full border-12 border-white flex flex-col">
        <h2>
          Notenbuch Spiralbindung
          <span class="text-red-500">Hochformat</span>
        </h2>
        <p class="pt-3">
          Sie können gängige Sonderformate für Musikalien produzieren lassen.
        </p>
      </div>
      <div class="green md:w-3/9 w-full border-12 border-white flex flex-col">
        <div class="flex flex-col flex-grow p-5"> <!-- Make this a flex container and let it grow -->
          <h2> Notenbuch »Peters« Spiralbindung hoch</h2>
          <!-- Image and Text 1 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p> Format 19 x 27 cm hoch</p>
          </div>

          <!-- Image and Text 2 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Das bekannte Format der Klavierauszüge der EDITION PETERS</p>
          </div>

          <!-- Image and Text 3 -->
          <div class="flex items-center mt-4 mb-5">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p> 88–400 Seiten Inhalt + Deckblatt und Rückwand möglich</p>
          </div>

          <!-- Button -->
          <div class="mt-auto max-w-40">
            <NuxtLink to="/konfigurator"
              class="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex items-center justify-start">
              <img src="@/assets/svg/plus.svg" alt="Plus" class="mr-3" /> <!-- Icon -->
              Jetzt
              drucken
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="pink md:w-3/9 w-full border-12 border-white flex flex-col">
        <div class="flex flex-col flex-grow p-5"> <!-- Make this a flex container and let it grow -->
          <h2>Notenbuch »Concert« Spiralbindung hoch</h2>
          <!-- Image and Text 1 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Format 22,8 x 30,5 cm hoch</p>
          </div>

          <!-- Image and Text 2 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Bekannt von EDITION PETERS, SCHOTT Music u.v.a.</p>
          </div>

          <!-- Image and Text 3 -->
          <div class="flex items-center mt-4 mb-5">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>88–400 Seiten Inhalt + Deckblatt und Rückwand möglich</p>
          </div>

          <!-- Button -->
          <div class="mt-auto max-w-40"> <!-- This will now be pushed to the bottom -->
            <NuxtLink to="/konfigurator"
              class="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex items-center justify-start">
              <img src="@/assets/svg/plus.svg" alt="Plus" class="mr-3" />
              Jetzt
              drucken
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col md:flex-row">
      <div class="yellow md:w-3/9 w-full border-12 border-white flex flex-col">
        <div class="flex flex-col flex-grow p-5"> <!-- Make this a flex container and let it grow -->
          <h2>Notenbuch DIN B4 Spiralbindung hoch</h2>
          <!-- Image and Text 1 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Format 25 x 35,3 cm hoch</p>
          </div>

          <!-- Image and Text 2 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Hervorragend für Dirigierpartituren geeignet</p>
          </div>

          <!-- Image and Text 3 -->
          <div class="flex items-center mt-4 mb-5">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>
              88–400 Seiten Inhalt + Deckblatt und Rückwand möglich</p>
          </div>

          <!-- Button -->
          <div class="mt-auto max-w-40"> <!-- This will now be pushed to the bottom -->
            <NuxtLink to="/konfigurator"
              class="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex items-center justify-start">
              <img src="@/assets/svg/plus.svg" alt="Plus" class="mr-3" />
              Jetzt
              drucken
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="orange md:w-3/9 w-full border-12 border-white flex flex-col">
        <div class="flex flex-col flex-grow p-5"> <!-- Make this a flex container and let it grow -->
          <h2> Notenbuch DIN A3 Spiralbindung hoch</h2>
          <!-- Image and Text 1 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Format 29,7 x 42 cm hoch</p>
          </div>

          <!-- Image and Text 2 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Für große Partituren und Stimmen</p>
          </div>

          <!-- Image and Text 3 -->
          <div class="flex items-center mt-4 mb-5">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p> 2–400 Seiten Inhalt + Deckblatt und Rückwand möglich</p>
          </div>

          <!-- Button -->
          <div class="mt-auto max-w-40">
            <NuxtLink to="/konfigurator"
              class="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex items-center justify-start">
              <img src="@/assets/svg/plus.svg" alt="Plus" class="mr-3" /> <!-- Icon -->
              Jetzt
              drucken
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="darkblue md:w-3/9 w-full border-12 border-white flex flex-col">
        <div class="flex flex-col flex-grow p-5"> <!-- Make this a flex container and let it grow -->
          <h2>Notenbuch »Dirigent« Spiralbindung hoch</h2>
          <!-- Image and Text 1 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Format 31,5 x 46 cm hoch</p>
          </div>

          <!-- Image and Text 2 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Der Gigant für die großen Werke!</p>
          </div>

          <!-- Image and Text 3 -->
          <div class="flex items-center mt-4 mb-5">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>2–400 Seiten Inhalt + Deckblatt und Rückwand möglich</p>
          </div>

          <!-- Button -->
          <div class="mt-auto max-w-40"> <!-- This will now be pushed to the bottom -->
            <NuxtLink to="/konfigurator"
              class="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex items-center justify-start">
              <img src="@/assets/svg/plus.svg" alt="Plus" class="mr-3" />
              Jetzt
              drucken
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col md:flex-row mt-20">
      <div class="md:w-3/9 w-full border-12 border-white flex flex-col">
        <h2>
          Notenbuch Spiralbindung
          <span class="text-red-500">Querformat</span>

        </h2>
        <p class="pt-3">
          Auch für Notendruck im Querformat ist unsere Spiralbindung hervorragend geeignet.
        </p>
      </div>
      <div class="green md:w-3/9 w-full border-12 border-white flex flex-col">
        <div class="flex flex-col flex-grow p-5"> <!-- Make this a flex container and let it grow -->
          <h2> Notenbuch »Peters« Spiralbindung quer</h2>
          <!-- Image and Text 1 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p> Format 27 x 19 cm quer</p>
          </div>

          <!-- Image and Text 2 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Das bekannte Format der Klavierauszüge der EDITION PETERS</p>
          </div>

          <!-- Image and Text 3 -->
          <div class="flex items-center mt-4 mb-5">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p> 2–400 Seiten Inhalt + Deckblatt und Rückwand möglich</p>
          </div>

          <!-- Button -->
          <div class="mt-auto max-w-40">
            <NuxtLink to="/konfigurator"
              class="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex items-center justify-start">
              <img src="@/assets/svg/plus.svg" alt="Plus" class="mr-3" /> <!-- Icon -->
              Jetzt
              drucken
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="pink md:w-3/9 w-full border-12 border-white flex flex-col">
        <div class="flex flex-col flex-grow p-5"> <!-- Make this a flex container and let it grow -->
          <h2>Notenbuch »Concert« Spiralbindung quer</h2>
          <!-- Image and Text 1 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Format 30,5 x 22,8 cm quer</p>
          </div>

          <!-- Image and Text 2 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Bekannt von EDITION PETERS, SCHOTT Music u.v.a.</p>
          </div>

          <!-- Image and Text 3 -->
          <div class="flex items-center mt-4 mb-5">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>2–400 Seiten Inhalt + Deckblatt und Rückwand möglich</p>
          </div>

          <!-- Button -->
          <div class="mt-auto max-w-40"> <!-- This will now be pushed to the bottom -->
            <NuxtLink to="/konfigurator"
              class="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex items-center justify-start">
              <img src="@/assets/svg/plus.svg" alt="Plus" class="mr-3" />
              Jetzt
              drucken
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col md:flex-row">
      <div class="yellow md:w-3/9 w-full border-12 border-white flex flex-col">
        <div class="flex flex-col flex-grow p-5"> <!-- Make this a flex container and let it grow -->
          <h2>Notenbuch DIN B4 Spiralbindung quer</h2>
          <!-- Image and Text 1 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Format 35,3 x 25 cm quer</p>
          </div>

          <!-- Image and Text 2 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Hervorragend für Dirigierpartituren geeignet</p>
          </div>

          <!-- Image and Text 3 -->
          <div class="flex items-center mt-4 mb-5">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>2–400 Seiten Inhalt + Deckblatt und Rückwand möglich</p>
          </div>

          <!-- Button -->
          <div class="mt-auto max-w-40"> <!-- This will now be pushed to the bottom -->
            <NuxtLink to="/konfigurator"
              class="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex items-center justify-start">
              <img src="@/assets/svg/plus.svg" alt="Plus" class="mr-3" />
              Jetzt
              drucken
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="orange md:w-3/9 w-full border-12 border-white flex flex-col">
        <div class="flex flex-col flex-grow p-5"> <!-- Make this a flex container and let it grow -->
          <h2> Notenbuch DIN A3 Spiralbindung quer</h2>
          <!-- Image and Text 1 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Format 42 x 29,7 cm quer</p>
          </div>

          <!-- Image and Text 2 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Für große Partituren und Stimmen</p>
          </div>

          <!-- Image and Text 3 -->
          <div class="flex items-center mt-4 mb-5">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p> 2–400 Seiten Inhalt + Deckblatt und Rückwand möglich</p>
          </div>

          <!-- Button -->
          <div class="mt-auto max-w-40">
            <NuxtLink to="/konfigurator"
              class="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex items-center justify-start">
              <img src="@/assets/svg/plus.svg" alt="Plus" class="mr-3" /> <!-- Icon -->
              Jetzt
              drucken
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="darkblue md:w-3/9 w-full border-12 border-white flex flex-col">
        <div class="flex flex-col flex-grow p-5"> <!-- Make this a flex container and let it grow -->
          <h2>Notenbuch »Dirigent« Spiralbindung quer</h2>
          <!-- Image and Text 1 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Format 46 x 31,5 cm quer</p>
          </div>

          <!-- Image and Text 2 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Der Gigant für die großen Werke!</p>
          </div>

          <!-- Image and Text 3 -->
          <div class="flex items-center mt-4 mb-5">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>2–400 Seiten Inhalt + Deckblatt und Rückwand möglich</p>
          </div>

          <!-- Button -->
          <div class="mt-auto max-w-40"> <!-- This will now be pushed to the bottom -->
            <NuxtLink to="/konfigurator"
              class="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex items-center justify-start">
              <img src="@/assets/svg/plus.svg" alt="Plus" class="mr-3" />
              Jetzt
              drucken
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style></style>
