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

const NOT_FOUND_COMPONENT = "errors/RoutingNotFound";
const { resolvePath } = useNavigationSearch();
const route = useRoute();
const { locale } = useI18n();
const routePath = route.path.replace(`${locale.value}`, "").replace("//", "/");


const { data: seoResult } = await useAsyncData(
  "cmsResponse" + routePath,
  async () => {
    // For client links if the history state contains seo url information we can omit the api call
    if (process.client) {
      if (history.state?.routeName) {
        return {
          routeName: history.state?.routeName,
          foreignKey: history.state?.foreignKey,
        };
      }
    }
    const seoUrl = await resolvePath(routePath);
    return seoUrl;
  },
);
const { routeName, foreignKey } = useNavigationContext(
  seoResult as Ref<SeoUrl>,
);

function render() {
  const componentName = routeName.value;
  if (!componentName)
    return h("div", h(resolveComponent(pascalCase(NOT_FOUND_COMPONENT))));

  const componentNameToResolve = pascalCase(componentName as string);
  const cmsPageView = routeName && resolveComponent(componentNameToResolve);
  if (cmsPageView) {
    if (cmsPageView === componentNameToResolve)
      return h("div", {}, "Problem resolving component: " + componentName);
    return h("div", h(cmsPageView, { navigationId: foreignKey.value }));
  }
  return h("div", {}, "Loading...");
}
</script>
  <!-- Your content here -->
<template>
  <div class="max-w-screen-xl mx-auto">
    <div>

    </div>
    <section>
      <div class="flex flex-col md:flex-row">
        <div class="md:w-6/9 w-full border-12 border-white">
          <!-- Replace with your image -->
          <img src="@/assets/images/pic1.png" alt="Avatar" class="w-full h-full object-cover">
        </div>
        <div class="flex flex-col md:w-3/9 w-full green p-5 border-12 border-white">
          <h2>
            Ihre Partituren, perfekt gedruckt
          </h2>
          <div class="w-full max-w-64">
            <p>
              Jetzt neu:
            </p>
            <p>
              Mit Ihrer capella-Software sind Sie es gewohnt, Partituren in bester Notensatzmanier erstellen zu können;
              mit capellaprint lassen Sie diese künftig auch in Musikverlagsqualität drucken.
            </p>
          </div>
          <div class="mt-auto max-w-40">
            <NuxtLink to="/your-target-path"
              class="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex items-center justify-start">
              <img src="@/assets/svg/plus.svg" alt="Plus" class="mr-3" /> <!-- Icon -->
              {{ $t("startNow") }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="flex flex-col md:flex-row">
      <div class="flex flex-col p-5 grey md:w-3/9 w-full border-12 border-white">
        <img src="@/assets/svg/function.svg" class="max-w-12" alt="Avatar">
        <h2>
          Schritt 1:
          Notenprojekt kalkulieren.
        </h2>
        <p class="mb-5">
          Es ist ganz einfach: Mit unserem Konfigurator stellen Sie sich die perfekte Notenausgabe zusammen.
        </p>
        <div class="mt-auto mt-5 max-w-40">
          <NuxtLink to="/your-target-path"
            class="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex items-center justify-start">
            <img src="@/assets/svg/plus.svg" alt="Plus" class="mr-3" /> <!-- Icon -->
            {{ $t("startNow") }}
          </NuxtLink>
        </div>
      </div>
      <div class="p-5 grey md:w-3/9 w-full border-12 border-white">
        <img src="@/assets/svg/backup.svg" alt="Avatar">
        <h2>
          Schritt 2:
          Laden Sie Ihre Noten-PDF hoch.
        </h2>
        <p>
          Als zweiten Schritt übermitteln Sie uns die PDF-Datei(en) Ihres Werks, die Sie in capella erstellt haben.
        </p>
      </div>
      <div class="p-5 grey md:w-3/9 w-full border-12 border-white">
        <img src="@/assets/svg/flight.svg" alt="Avatar">
        <h2>
          Schritt 3:
          Bestellen – schon fertig!
        </h2>
        <p>
          Zuletzt bestellen Sie Ihre Noten ganz bequem online. Ein paar Tage später ist die Musikpost schon da!
        </p>
      </div>
    </section>
    <section class="flex flex-col xl:flex-row">
      <!-- Left Column -->
      <div class="xl:w-6/9 w-full">
        <!-- Top Div with Text -->
        <div class="border-12 border-white p-9 yellow">
          <h5>»Die Partituren sind übrigens sensationell in Haptik, <br> Aussehen und Nutzbarkeit.«</h5>
          <p>
            Alexander Mottok
          </p>
          – Chefdirigent, Deutsches Ärzteorchester

        </div>

        <!-- Bottom Div with Image -->
        <div class="border-12 border-white">
          <img src="@/assets/images/pic2.png" alt="Bildbeschreibung" class="w-full h-full object-cover">
        </div>
      </div>

      <!-- Right Column -->
      <div class="xl:w-3/9 w-full flex flex-col justify-between border-12 border-white p-5 green">
        <div>
          <div class="flex items-start mb-15">
            <!-- Image on the Left -->
            <img src="@/assets/svg/verified.svg" alt="Avatar" class="mr-4">

            <!-- Text Container on the Right -->
            <div>
              <h2>

                Ihre Vorteile
              </h2>
            </div>
          </div>

          <div class="flex items-start">
            <!-- Image on the Left -->
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-4">

            <!-- Text Container on the Right -->
            <div>
              <p class="font-bold">Erstklassiger Notendruck</p> <!-- Bold text for the first paragraph -->
              <p>
                Mit elfenbeinfarbigem Notenpapier, einer praktikablen und langlebigen Bindung und einer gestochen
                scharfen Druckqualität erhalten Sie eine rundum professionelle Partitur.
              </p>
            </div>
          </div>
          <div class="flex items-start">
            <!-- Image on the Left -->
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-4">

            <!-- Text Container on the Right -->
            <div>
              <p class="font-bold">Musikalientypische Papierformate</p> <!-- Bold text for the first paragraph -->
              <p>
                Musikalientypische Formate vom Klavierauszug (19 x 27 cm), DIN A4, Concertformat / NE (22,8 x 30,5 cm)
                und darüber hinaus sind unser tägliches Geschäft.
              </p>
            </div>
          </div>
          <div class="flex items-start">
            <!-- Image on the Left -->
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-4">

            <!-- Text Container on the Right -->
            <div>
              <p class="font-bold">Versandfertig in kürzester Zeit</p> <!-- Bold text for the first paragraph -->
              <p>
                Wir versenden prestissimo: Die meisten unserer Notenausgaben verlassen innerhalb von 48 bis 72 Stunden
                nach Bestellung unser Haus.
              </p>
            </div>
          </div>
          <div class="flex items-start">
            <!-- Image on the Left -->
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-4">

            <!-- Text Container on the Right -->
            <div>
              <p class="font-bold">Kauf auf Rechnung & Lastschrift</p> <!-- Bold text for the first paragraph -->
              <p>
                Die beliebteste Zahlart in Deutschland – natürlich auch bei capellaprint! Mit unserem Paymentpartner
                genießen Sie 14 Tage Zahlungsziel nach Warenerhalt.
              </p>
            </div>
          </div>
        </div>
        <!-- Add more <p> tags as needed -->
      </div>
    </section>
    <section>
      <div class="pink p-5 border-12 border-white">
        <h2>
          Beste Druckqualität für Ihre Noten – made in Germany.
        </h2>
        <div>
          <div class="col-7">
            <p class="p-grid">
              Für capellaprint haben sich capella-software und die spezialisierte Musikaliendruckerei AURIOPRINT aus
              Bayern zusammengeschlossen. AURIOPRINT fertigt für Musikverlage, Orchester und Komponisten weltweit
              Noten. Unter der Marke capellaprint bieten wir Ihnen gemeinsam ab sofort die bestmögliche Druckqualität
              für Ihre eigenen Partituren.
            </p>
          </div>
          <div>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col xl:flex-row">
      <!-- Left Column -->
      <div class="xl:w-6/9 w-full">
        <!-- Top Div with Text -->
        <div class="border-12 border-white p-9 yellow">
          <h3 class="font-bold">»capellaprint ist ein attraktiver Service und hervorragend
            geeignet, um aus
            Ihren Partituren das
            Optimum herauszuholen.«</h3>
          <div class="flex flex-col md:flex-row items-start mt-4">
            <p class="font-bold mr-2">
              Dr. Dominik Hörnel,
            </p>
            <p>
              Vorstandsvorsitzender, capella-software AG
            </p>
          </div>

        </div>

        <!-- Bottom Div with Image -->
        <div class="border-12 border-white">
          <img src="@/assets/images/pic3.png" alt="Bildbeschreibung" class="w-full h-full object-cover">
        </div>
      </div>

      <!-- Right Column -->
      <div class="xl:w-3/9 w-full flex flex-col justify-between border-12 border-white p-5 blue">
        <div>
          <div class="flex items-start mb-15">
            <!-- Image on the Left -->
            <img src="@/assets/svg/verified.svg" alt="Avatar" class="mr-4">

            <!-- Text Container on the Right -->
            <div>
              <h2>

                Ihre Vorteile
              </h2>
            </div>
          </div>

          <div class="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div class="collapse-title text-xl font-medium">
              Gehe ich ein Abonnement ein?
            </div>
            <div class="collapse-content">
              <p>Nein, capellaprint ist nicht mit einem Abonnement verbunden. Für den
                Bestellprozess können Sie auf Wunsch zwar ein kostenfreies Kundenkonto erstellen, dies
                verpflichtet
                Sie aber zu nichts und ist jederzeit wieder deaktivierbar.</p>
            </div>
          </div>
          <div class="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div class="collapse-title text-xl font-medium">
              Werden meine Druckdaten kontrolliert?
            </div>
            <div class="collapse-content">
              <p>Ja. Jede hochgeladene PDF-Datei wird von unseren Systemen standardisiert kontrolliert und ggf.
                gleich korrigiert, um ein professionelles Druckbild zu gewährleisten. Sollten Datenfehler ein
                manuelles Eingreifen notwendig machen, wird sich ein Mitarbeiter vor Ausführung der Produktion mit
                Ihnen per E-Mail in Verbindung setzen. Bitte beachten Sie unbedingt unsere Druckdatenvorgaben!</p>
            </div>
          </div>
          <div class="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div class="collapse-title text-xl font-medium">
              Wie erfolgt die Bestellung, was kostet es?
            </div>
            <div class="collapse-content">
              <p>
                Transparenz für unsere Kunden ist unser Leitmotiv. capellaprint garantiert
                Ihnen dauerhaft niedrige Preise ohne versteckte Zusatzkosten. Die Nutzung unseres Druckportals ist
                selbstverständlich kostenfrei.</p>
              <br>
              <p>
                Sie bezahlen, wie im normalen Online-Shopping auch, bei der Bestellung Ihrer Notenausgaben. Hierfür
                haben Sie die Wahl zwischen den sicheren Zahlungsarten PayPal, Klarna Rechnung und Kreditkarte.
              </p>
            </div>
          </div>
          <div class="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div class="collapse-title text-xl font-medium">
              Kann ich gedruckte Noten zurückgeben?
            </div>
            <div class="collapse-content">
              <p>
                Ihre Partituren werden nach Ihren Vorgaben individuell für Sie gefertigt. Ein Rückgaberecht ist
                deshalb leider nicht möglich. Sollten wir trotz korrekter Druckdaten von Ihnen fehlerhaft drucken,
                liefern wir selbstverständlich kostenfrei Ersatz.
              </p>
            </div>
          </div>
        </div>
        <!-- Add more <p> tags as needed -->
      </div>
    </section>
    <section class="flex flex-col md:flex-row">
      <div class="blue md:w-3/9 w-full border-12 border-white flex flex-col">
        <img src="@/assets/images/pic6.png">
        <div class="flex flex-col flex-grow p-5"> <!-- Make this a flex container and let it grow -->
          <h2>Notenheft DIN A4
            Klammerheftung</h2>
          <!-- Image and Text 1 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p> Umschlag aus matt-brillantem Chromokarton mit 260g Stärke</p>
          </div>

          <!-- Image and Text 2 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Innenteil mit klassisch gelblichem Notenpapier</p>
          </div>

          <!-- Image and Text 3 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p> Rechteckiger Heftrücken für ein hochprofessionelles Aussehen</p>
          </div>
          <div class="mt-auto max-w-40">
            <NuxtLink to="/your-target-path"
              class="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex items-center justify-start">
              <img src="@/assets/svg/plus.svg" alt="Plus" class="mr-3" /> <!-- Icon -->
              {{ $t("startNow") }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="pink md:w-3/9 w-full border-12 border-white flex flex-col">
        <img src="@/assets/images/pic6.png">
        <div class="flex flex-col flex-grow p-5"> <!-- Make this a flex container and let it grow -->
          <h2>Stimmenheft DIN A4 Klammerheftung ohne Umschlag</h2>
          <!-- Image and Text 1 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Blendfreies & raschelarmes Notenpapier mit gelblicher Färbung</p>
          </div>

          <!-- Image and Text 2 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Gestochen scharfer Notentext in sattem Schwarz</p>
          </div>

          <!-- Image and Text 3 -->
          <div class="flex items-center mt-4 mb-5">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Hergestellt nach den strengen Regularien der Deutschen Orchestervereinigung e.V.</p>
          </div>

          <!-- Button -->
          <div class="mt-auto max-w-40">
            <NuxtLink to="/your-target-path"
              class="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex items-center justify-start">
              <img src="@/assets/svg/plus.svg" alt="Plus" class="mr-3" /> <!-- Icon -->
              {{ $t("startNow") }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="pink md:w-3/9 w-full border-12 border-white flex flex-col">
        <img src="@/assets/images/pic6.png">
        <div class="flex flex-col flex-grow p-5"> <!-- Make this a flex container and let it grow -->
          <h2>Notenbuch DIN A4 Spiralbindung hoch</h2>
          <!-- Image and Text 1 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Blendfreies & raschelarmes Notenpapier mit gelblicher Färbung</p>
          </div>

          <!-- Image and Text 2 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Gestochen scharfer Notentext in sattem Schwarz</p>
          </div>

          <!-- Image and Text 3 -->
          <div class="flex items-center mt-4">
            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
            <p>Hergestellt nach den strengen Regularien der Deutschen Orchestervereinigung e.V.</p>
          </div>
          <div class="mt-auto max-w-40"> <!-- This will now be pushed to the bottom -->
            <NuxtLink to="/your-target-path"
              class="bg-black text-white rounded-full py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex items-center justify-start">
              <img src="@/assets/svg/plus.svg" alt="Plus" class="mr-3" />
              {{ $t("startNow") }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
