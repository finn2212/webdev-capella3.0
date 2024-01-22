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
import { ref } from 'vue'
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/vue/24/solid";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/vue/24/solid';

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/vue/24/solid'
const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' }
]

const selectedPerson = ref(people[0])
const { clearBreadcrumbs } = useBreadcrumbs();

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

onBeforeRouteLeave(() => {
  clearBreadcrumbs();
});

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
<template>
  <div class="carousel w-full">
    <div id="slide1" class="carousel-item relative w-full">
      <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" class="w-full" />
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" class="btn btn-circle">❮</a>
        <a href="#slide2" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide2" class="carousel-item relative w-full">
      <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" class="w-full" />
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" class="btn btn-circle">❮</a>
        <a href="#slide3" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide3" class="carousel-item relative w-full">
      <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" class="w-full" />
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" class="btn btn-circle">❮</a>
        <a href="#slide4" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide4" class="carousel-item relative w-full">
      <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" class="w-full" />
      <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" class="btn btn-circle">❮</a>
        <a href="#slide1" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
  <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
    <div class="carousel-item">
      <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" class="rounded-box" />
    </div>
    <div class="carousel-item">
      <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" class="rounded-box" />
    </div>
    <div class="carousel-item">
      <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" class="rounded-box" />
    </div>
    <div class="carousel-item">
      <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" class="rounded-box" />
    </div>
    <div class="carousel-item">
      <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" class="rounded-box" />
    </div>
    <div class="carousel-item">
      <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" class="rounded-box" />
    </div>
    <div class="carousel-item">
      <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" class="rounded-box" />
    </div>
  </div>
  <section>
    <div class="container justify-content-center">
      <div class="row">
        <div class="lg:w-8/12 p-0 customBorder">
          <img src="@/assets/images/pic1.png" alt="Avatar" class="img">
        </div>
        <div class="col green p-5 customBorder">
          <h2 class="heading-grid">
            Ihre Partituren, perfekt gedruckt
          </h2>
          <p class="thick" style="margin:0p">
            Jetzt neu:
          </p>
          <p class="p-grid">

            Mit Ihrer capella-Software sind Sie es gewohnt, Partituren in bester Notensatzmanier erstellen zu können;
            mit
            capellaprint lassen Sie diese künftig auch in Musikverlagsqualität drucken.
          </p>

          <div class="row align-items-end">
            <div class="col">
              <NuxtLink class="a" to="/konfigurator">
                <button type="button" class="btn btn-dark mt-2">
                  <img src="@/assets/svg/plus.svg" alt="Avatar" class="plusBtn">
                  {{ $t("startNow") }}
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--Sektion mit 3 Karten und Bider-->
  <section class="pt-5">
    <div class="container justify-content-center">
      <div class="row mt-4">
        <div class="col-8">
          <h2>
            So einfach geht’s
          </h2>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col customBorder p-5 grey">
          <img src="@/assets/svg/function.svg" alt="Avatar" style="margin-bottom: 25px;">
          <h2 class="heading-grid">
            Schritt 1:
            Notenprojekt kalkulieren.
          </h2>
          <p class="p-grid">
            Es ist ganz einfach: Mit unserem Konfigurator stellen Sie sich die perfekte Notenausgabe zusammen.
          </p>
          <NuxtLink class="a" to="/konfigurator">
            <button type="button" class="btn btn-dark mt-xl-3">
              <img src="@/assets/svg/plus.svg" alt="Avatar" class="plusBtn">
              {{ $t("startNow") }}
            </button>
          </NuxtLink>
        </div>
        <div class="col customBorder pl-5  p-5 grey">
          <img src="@/assets/svg/backup.svg" alt="Avatar" style="margin-bottom: 25px;">
          <h2 class="heading-grid">
            Schritt 2:
            Laden Sie Ihre Noten-PDF hoch.
          </h2>
          <p class="p-grid">
            Als zweiten Schritt übermitteln Sie uns die PDF-Datei(en) Ihres Werks, die Sie in capella erstellt haben.
          </p>
        </div>
        <div class="col pl-5  p-5 grey customBorder">
          <img src="@/assets/svg/flight.svg" alt="Avatar" style="margin-bottom: 25px;">
          <h2 class="heading-grid">
            Schritt 3:
            Bestellen – schon fertig!
          </h2>
          <p class="p-grid">
            Zuletzt bestellen Sie Ihre Noten ganz bequem online. Ein paar Tage später ist die Musikpost schon da!
          </p>
        </div>
      </div>
    </div>
  </section>
  <!--Sektion mit 3 Karten und Bider-->
  <section class="pt-5">
    <div class="container justify-content-center">
      <div class="row mt-4">
        <div class="col blockStart customBorder">
          <h2>
            Was ist capellaprint?
          </h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-xl-8">
          <div class="row justify-content-center">
            <div class="col customBorder  yellow">
              <img src="@/assets/svg/format_quote.svg" alt="Avatar" class="ms-5 mt-5">
              <div class="slideshow-container mb-5">
                <div class="mySlides">
                  <div class="ps-5">
                    <p class="p-grid">
                    <h5>»Die Partituren sind übrigens sensationell in Haptik, <br> Aussehen und Nutzbarkeit.«</h5>
                    <p class="thick" style="margin:0px;  display: inline;">
                      Alexander Mottok
                    </p>
                    – Chefdirigent, Deutsches Ärzteorchester
                    </p>
                  </div>
                </div>
                <div class="mySlides">
                  <div>
                    <div class="ps-5 ">
                      <p class="p-grid">
                      <h5>»Spitzenqualität zu hervorragenden Preisen. Wir drucken nur noch hier«</h5>
                      <p class="thick" style="margin:0px;  display: inline;">
                        Dieter Viehweider
                      </p>
                      – MUNODI Edition
                      </p>
                    </div>
                  </div>

                </div>
                <a class="prev" style="color: black; font-size: 15px;" @click="plusSlides(-1)">❮</a>
                <a class="next" style="color: black; font-size: 15px;" @click="plusSlides(-1)">❯</a>
              </div>

            </div>
          </div>
          <div class="row justify-content-center" style="min-height: fit-content;">
            <div class="col  p-0 customBorder">

              <img src="@/assets/images/pic2.png" alt="Avatar" class="img" style="width: 100%; height: 100%;">

            </div>
          </div>
        </div>
        <div class="col customBorder green p-4">
          <h2 class="heading-grid">
            <img src="@/assets/svg/verified.svg" class="mr-2" alt="Avatar">
            Ihre Vorteile
          </h2>
          <div class="row" style="margin-top: 50px">
            <div class="col-2">
              <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
            </div>
            <div class="col">
              <p class="thick" style="margin: 0px;"> Erstklassiger Notendruck </p>
              <p>
                Mit elfenbeinfarbigem Notenpapier, einer praktikablen und langlebigen Bindung und einer gestochen
                scharfen Druckqualität erhalten Sie eine rundum professionelle Partitur.
              </p>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-2">
              <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
            </div>
            <div class="col">
              <p class="thick" style="margin: 0px;">Musikalientypische Papierformate</p>
              <p>
                Musikalientypische Formate vom Klavierauszug (19 x 27 cm), DIN A4, Concertformat / NE (22,8 x 30,5 cm)
                und darüber hinaus sind unser tägliches Geschäft.
              </p>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-2">
              <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
            </div>
            <div class="col">
              <p class="thick" style="margin: 0px;">Versandfertig in kürzester Zeit</p>
              <p>
                Wir versenden prestissimo: Die meisten unserer Notenausgaben verlassen innerhalb von 48 bis 72 Stunden
                nach Bestellung unser Haus.
              </p>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-2">
              <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
            </div>
            <div class="col">
              <p class="thick" style="margin: 0px;">Kauf auf Rechnung & Lastschrift</p>
              <p>
                Die beliebteste Zahlart in Deutschland – natürlich auch bei capellaprint! Mit unserem Paymentpartner
                genießen Sie 14 Tage Zahlungsziel nach Warenerhalt.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col customBorder pink p-4">
          <h2 class="heading-grid">
            Beste Druckqualität für Ihre Noten – made in Germany.
          </h2>




          <div class="row mt-3">
            <div class="col-7">
              <p class="p-grid">
                Für capellaprint haben sich capella-software und die spezialisierte Musikaliendruckerei AURIOPRINT aus
                Bayern zusammengeschlossen. AURIOPRINT fertigt für Musikverlage, Orchester und Komponisten weltweit
                Noten. Unter der Marke capellaprint bieten wir Ihnen gemeinsam ab sofort die bestmögliche Druckqualität
                für Ihre eigenen Partituren.
              </p>
            </div>
            <div class="col">

            </div>



          </div>

          <div class="row justify-content-end">
            <div class="col">
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  <!--Sektion mit 3 Karten und Bider-->
  <section class="pt-5">
    <div class="container justify-content-center">

      <div class="row mt-4">
        <div class="col-12 col-xl-8">
          <div class="row">
            <div class="col customBorder p-0">
              <h2 class="heading-grid">
                »Ein attraktiver Service für Musiker«
              </h2>
              <div class="yellow p-4">
                <img src="@/assets/svg/format_quote.svg" alt="Avatar">
                <div class="slideshow-container">
                  <div class="mySlides2">
                    <div style="padding: 15px">
                      <p class="p-grid">
                      <div class="row ms-3 me-3">
                        <h5 style="line-height: 1.5;">»capellaprint ist ein attraktiver Service und hervorragend
                          geeignet, um aus
                          Ihren Partituren das
                          Optimum herauszuholen.«</h5>
                      </div>

                      <p class="thick ms-4 ps-1" style="margin:0px;  display: inline;">
                        Dr. Dominik Hörnel,
                      </p>
                      Vorstandsvorsitzender, capella-software AG
                      </p>
                    </div>
                  </div>
                  <div class="mySlides2">
                    <div>
                      <div style="padding: 15px">
                        <p class="p-grid">
                        <div class="row ms-3 me-3">
                          <h5 style="line-height: 1.5;">»Es macht mich stolz, mit unserer Musikaliendruckerei einen
                            echten Mehrwert für alle capella-Nutzer:innen bieten zu können.«</h5>
                        </div>

                        <p class="thick ms-4 ps-1" style="margin:0px;  display: inline;">
                          Sebastian Gabriel,
                        </p>
                        Geschäftsführer AURIOPRINT
                        </p>
                      </div>
                    </div>
                  </div>
                  <a class="prev" style="color: black; font-size: 15px;" @click="plusSlides(-1)">❮</a>
                  <a class="next" style="color: black; font-size: 15px;" @click="plusSlides(-1)">❯</a>
                </div>

              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col p-0 customBorder">

              <!-- <div v-if="slideIndex == 1">
                <img src="@/assets/images/pic3.png" alt="Avatar" class="img" style="width: 100%; height: 100%;">
              </div>
              <div v-if="slideIndex == 2">
                <img src="@/assets/images/sebastianQuote.jpeg" alt="Avatar" class="img"
                  style="width: 100%; height: 100%;">
              </div> -->


            </div>
          </div>
        </div>
        <div class="col p-0">
          <h2 class="heading-grid ms-3">
            Unser Tipp
          </h2>
          <div class="customBorder blue p-4">

            <img src="@/assets/svg/redeem.svg" alt="Avatar">
            <h1 class="mt-5" style="font-size: 60px;">
              Musterheft
              anfordern
            </h1>
            <p class="">
              Damit Sie nicht die Katze im Sack kaufen, haben wir ein Musterheft vorbereitet, mit dem Sie sich von der
              Qualität unseres Notendrucks überzeugen können.
            </p>
            <div class="row justify-content-end">
              <div class="col mt-2 ">
                <button type="button" class="btn btn-dark" @click="addToCart">
                  <img src="@/assets/svg/plus.svg" alt="Avatar" class="plusBtn">Musterheft
                  kostenfrei bestellen
                </button>

              </div>
            </div>

            <img src="@/assets/svg/contact_support.svg" alt="Avatar" class="mt-4">
            <div class="accordion  accordion-flush" id="accordionFlushExample">
              <div class="join join-vertical w-full">
                <div class="collapse show collapse-arrow join-item border border-base-300">
                  <input type="radio" name="my-accordion-4" />
                  <div class="collapse-title text-xl font-medium">
                    Gehe ich ein Abonnement ein?
                  </div>
                  <div class="collapse-content">
                    <p> Nein, capellaprint ist nicht mit einem Abonnement verbunden. Für den
                      Bestellprozess können Sie auf Wunsch zwar ein kostenfreies Kundenkonto erstellen, dies
                      verpflichtet
                      Sie aber zu nichts und ist jederzeit wieder deaktivierbar.</p>
                  </div>
                </div>
                <div class="collapse show collapse-arrow join-item border border-base-300">
                  <input type="radio" name="my-accordion-4" />
                  <div class="collapse-title text-xl font-medium">
                    Werden meine Druckdaten kontrolliert?
                  </div>
                  <div class="collapse-content">
                    <p> Ja. Jede hochgeladene PDF-Datei wird von unseren Systemen standardisiert kontrolliert und ggf.
                      gleich korrigiert, um ein professionelles Druckbild zu gewährleisten. Sollten Datenfehler ein
                      manuelles Eingreifen notwendig machen, wird sich ein Mitarbeiter vor Ausführung der Produktion mit
                      Ihnen per E-Mail in Verbindung setzen. Bitte beachten Sie unbedingt unsere Druckdatenvorgaben!</p>
                  </div>
                </div>
                <div class="collapse show collapse-arrow join-item border border-base-300">
                  <input type="radio" name="my-accordion-4" />
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
                <div class="collapse show collapse-arrow join-item border border-base-300">
                  <input type="radio" name="my-accordion-4" />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Sektion mit 3 Karten und Bider-->
  <section class="pt-5">
    <div class="container justify-content-center">
      <div class="row mt-4">
        <div class="col-8">
          <h2>
            Unsere Topseller
          </h2>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12 col-lg-4  cardcol customBorder">
          <div class="card">
            <img class="card-img-top" src="@/assets/images/pic4.png" alt="Card image cap">
            <div class="card-body blue p-5" style="min-height: 290px;">
              <h2 class="card-title">Notenheft DIN A4
                Klammerheftung</h2>
              <div class="row mt-5">
                <div class="col-1">
                  <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                </div>
                <div class="col">
                  <p class="card-text">
                    Umschlag aus matt-brillantem Chromokarton mit 260g Stärke
                  </p>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-1">
                  <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                </div>
                <div class="col">
                  <p class="card-text">
                    Innenteil mit klassisch gelblichem Notenpapier
                  </p>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-1">
                  <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                </div>
                <div class="col">
                  <p class="card-text">
                    Rechteckiger Heftrücken für ein hochprofessionelles Aussehen
                  </p>
                </div>
              </div>
              <NuxtLink class="a pt-5" to="/konfigurator">
                <button type="button" class="btn btn-dark mt-5" style="margin-top: 53px !important;">
                  <img src="@/assets/svg/plus.svg" alt="Avatar" class="plusBtn">
                  {{ $t("startNow") }}
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4  cardcol customBorder">
          <div class="card">
            <img class="card-img-top" src="@/assets/images/pic5.png" alt="Card image cap">
            <div class="card-body blue p-5" style="min-height: 290px;">
              <h2 class="card-title">Stimmenheft DIN A4
                Klammerheftung
                ohne Umschlag</h2>
              <div class="row mt-4">
                <div class="col-1">
                  <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                </div>
                <div class="col">
                  <p class="card-text">
                    Blendfreies & raschelarmes Notenpapier mit gelblicher Färbung
                  </p>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-1">
                  <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                </div>
                <div class="col">
                  <p class="card-text">
                    Gestochen scharfer Notentext in sattem Schwarz
                  </p>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-1">
                  <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                </div>
                <div class="col">
                  <p class="card-text">
                    Hergestellt nach den strengen Regularien der Deutschen Orchestervereinigung e.V.
                  </p>
                </div>
              </div>
              <NuxtLink class="a" to="/konfigurator">
                <button type="button" class="btn btn-dark mt-3">
                  <img src="@/assets/svg/plus.svg" alt="Avatar" class="plusBtn">
                  {{ $t("startNow") }}
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4  cardcol customBorder">
          <div class="card">
            <img class="card-img-top" src="@/assets/images/pic6.png" alt="Card image cap">
            <div class="card-body pink p-5 " style="min-height: 290px;">
              <h2 class="card-title">Notenbuch DIN A4
                Spiralbindung hoch</h2>

              <div class="row mt-5">
                <div class="col-1">
                  <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                </div>
                <div class="col">
                  <p class="card-text">
                    2–400 Seiten Inhalt + Deckblatt und Rückwand möglich
                  </p>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-1">
                  <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                </div>
                <div class="col">
                  <p class="card-text">
                    Deckblatt zusätzlich mit transparenter Folie möglich
                  </p>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-1">
                  <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                </div>
                <div class="col">
                  <p class="card-text">
                    Inhalt: 90g Notenpapier elfenbeinfarben, schwarzweiß bedruckbar
                  </p>
                </div>
              </div>
              <NuxtLink class="a" to="/konfigurator">
                <button type="button" class="btn btn-dark mt-4" style="margin-bottom: 5px;">
                  <img src="@/assets/svg/plus.svg" alt="Avatar" class="plusBtn">
                  {{ $t("startNow") }}
                </button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
