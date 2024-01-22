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
  <div class="container top">
    <!--Sektion Heading-->
    <section>
      <div class="container justify-content-center">
        <div class="row">
          <div class="col" style="max-height: 350px">
            <img
              src="@/assets/images/spiralheader.png"
              alt="Avatar"
              class="img"
              style="height: 100%"
            />
          </div>
        </div>
        <!--  <div class="row">
                    <div class="col-12 col-md-3 col-xl-2 p-2 p-md-4 pink customBorder">
                        <h1>
                            Carpe diem!
                        </h1>
                        <img src="@/assets/svg/wb_twilight.svg" alt="Avatar" class="pt-md-5" style="">
                        <h2 class="pt-1 pt-md-3">
                            10% Rabatt
                            6–10 Uhr
                        </h2>
                    </div>
                    <div class="col customBorder" style="min-height: 300px;"
                        v-bind:style="{ 'background-image': 'url(' + require('../assets/images/spiralheader.png') + ')' }">
                        <div class="row align-items-end" style="height: 100%">
                            <div class="col align-self-end">
                                <h1 style="color: white;" class="pb-3 ms-4">
                                    Notenbuch mit Spiralbindung
                                </h1>
                            </div>
                        </div>
                    </div>
                </div> -->
      </div>
    </section>
    <!--Sektion Heading-->
    <section>
      <div class="container justify-content-center">
        <div class="row pt-4">
          <div class="col-12 col-xl-4 customBorder blockStart">
            <h2>Notenbuch mit Spiralbindung günstig drucken lassen</h2>
            <p>
              Auch wer Großes vor hat, wird bei AURIOPRINT fündig: Mit unseren
              Spiralbindungen bekommt auch der dickste Klavierauszug festen
              Halt.
            </p>
            <p>
              Spiralgebundene Partituren können sowohl im Hochformat als auch im
              Querformat hergestellt werden.
            </p>
            <p>
              Mit einem Seitenumfang ab 2 bis zu 400 Seiten Innenteil (und ggf.
              einem farbigen Umschlag, wenn Sie möchten) sind es wahre
              Alleskönner in unserem Produktportfolio.
            </p>
          </div>
          <div class="col customBorder green p-5">
            <div class="row">
              <div class="col-12 col-md">
                <h1 class="pb-3">
                  <img src="@/assets/svg/info.svg" alt="Avatar" class="pr-3" />
                  Eigenschaften
                </h1>
                <p>
                  Wir verwenden die für Musikalien besonders geeignete
                  Coilbindung, die sich von der herkömmlichen Spiralbindung oder
                  gar Plastikkammbindung nicht nur durch edleres Aussehen,
                  sondern und vor allem auch durch leises Umblättern und dadurch
                  bessere Nutzbarkeit im Konzert auszeichnet.
                </p>
                <a
                  href=" https://firebasestorage.googleapis.com/v0/b/pocselfpublish.appspot.com/o/uploads%2FDruckdaten_Print_data_2023.pdf?alt=media&token=e8196ae8-3679-4f5a-9445-48d46724fc65"
                  target="_blank"
                >
                  <button
                    type="button"
                    class="btn btn-dark p-2"
                    style="width: 100%"
                  >
                    <img
                      src="@/assets/svg/download.svg"
                      alt="Avatar"
                      style="
                        height: 19px;
                        margin-right: 10px;
                        padding-left: 5px;
                      "
                    />
                    <p class="inline mt-2">Maßvorgaben (PDF)</p>
                  </button>
                </a>
              </div>
              <div class="col">
                <div class="row mt-4">
                  <div class="col-1">
                    <img
                      src="@/assets/svg/heart_plus.svg"
                      class="mr-2"
                      alt="Avatar"
                    />
                  </div>
                  <div class="col">
                    <p class="card-text">
                      Formate: DIN A4 / 19 x 27 cm / 22,8 x 30,5 cm / DIN B4 /
                      DIN A3 / 31,5 x 46 cm
                    </p>
                  </div>
                  <div class="w-100 pt-3"></div>
                  <div class="col-1">
                    <img
                      src="@/assets/svg/heart_plus.svg"
                      class="mr-2"
                      alt="Avatar"
                    />
                  </div>
                  <div class="col">
                    <p class="card-text">
                      Für große Partituren (bspw. Dirigierpartituren),
                      hervorragend geeignet
                    </p>
                  </div>
                  <div class="w-100 pt-3"></div>
                  <div class="col-1">
                    <img
                      src="@/assets/svg/heart_plus.svg"
                      class="mr-2"
                      alt="Avatar"
                    />
                  </div>
                  <div class="col">
                    <p class="card-text">
                      Seitenumfang bis 88 Seiten + Umschlag machbar
                    </p>
                  </div>
                  <div class="w-100 pt-3"></div>
                  <div class="col-1">
                    <img
                      src="@/assets/svg/heart_plus.svg"
                      class="mr-2"
                      alt="Avatar"
                    />
                  </div>
                  <div class="col">
                    <p class="card-text">
                      Seitenumfang von 2–400 Seiten + Umschlag möglich
                    </p>
                  </div>
                  <div class="w-100 pt-3"></div>
                  <div class="col-1">
                    <img
                      src="@/assets/svg/heart_plus.svg"
                      class="mr-2"
                      alt="Avatar"
                    />
                  </div>
                  <div class="col">
                    <p class="thick" style="display: inline">
                      Hochformat und Querformat
                    </p>
                    möglich
                  </div>
                  <div class="w-100 pt-3"></div>
                  <div class="col-1">
                    <img
                      src="@/assets/svg/heart_plus.svg"
                      class="mr-2"
                      alt="Avatar"
                    />
                  </div>
                  <div class="col">
                    <p class="card-text">3–6 Werktage Produktionszeit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--TSektion Schrift mit 2 Karten-->
    <section>
      <div class="container justify-content-center">
        <div class="row pt-4">
          <div class="col-12 col-lg-4 customBorder blockStart">
            <div class="row align-items-start">
              <h2>Direkt zu den Topsellern</h2>
              <p>
                Starten Sie mit unseren meistgefragten Druckprodukten – diese
                Formate stellen wir täglich zigfach her.
              </p>
            </div>
            <div class="row align-items-end" v-bind:style="dynamicHeight">
              <div class="col p-4 beige" style="margin-left: 10px">
                <NuxtLink class="a" to="/productCustomizer">
                  <p>
                    Weniger als 88 Seiten Inhalt? Günstigere Preise gesucht?
                    Instrumentalstimmen?
                  </p>
                  <div class="col-8">
                    <h3>Zu den Notenheften mit Klammerheftung</h3>
                  </div>
                  <div class="col mb-2 align-self-end">
                    <img
                      src="@/assets/svg/arrow_circle_right.svg"
                      alt="Avatar"
                    />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-lg-4 customBorder blue"
            id="boxHeight"
            style="padding-left: 0px !important; padding-right: 0px !important"
          >
            <div class="row">
              <img
                class="card-img-top"
                src="@/assets/images/pic7.png"
                alt="Card image cap"
              />
            </div>
            <div class="row p-4">
              <h2>Notenbuch DIN A4 Spiralbindung hoch</h2>
              <div class="row mt-2">
                <div class="col-1">
                  <img
                    src="@/assets/svg/heart_plus.svg"
                    class="mr-2"
                    alt="Avatar"
                  />
                </div>
                <div class="col">
                  <p class="">
                    2–400 Seiten Inhalt + Deckblatt und Rückwand möglich
                  </p>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-1">
                  <img
                    src="@/assets/svg/heart_plus.svg"
                    class="mr-2"
                    alt="Avatar"
                  />
                </div>
                <div class="col">
                  <p class="">
                    Deckblatt zusätzlich mit transparenter Folie möglich
                  </p>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-1">
                  <img
                    src="@/assets/svg/heart_plus.svg"
                    class="mr-2"
                    alt="Avatar"
                  />
                </div>
                <div class="col">
                  <p class="">
                    Inhalt: 90g Notenpapier elfenbeinfarben, schwarzweiß
                    bedruckbar
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-8 mt-1">
                  <NuxtLink class="a" to="/productCustomizer">
                    <button type="button" class="btn btn-dark mt-3">
                      <img
                        src="@/assets/svg/plus.svg"
                        alt="Avatar"
                        class="plusBtn"
                      />Jetzt drucken
                    </button>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-12 col-lg-4 customBorder blue"
            style="padding-left: 0px !important; padding-right: 0px"
          >
            <div class="row">
              <img
                class="card-img-top"
                src="@/assets/images/pic8.png"
                alt="Card image cap"
              />
            </div>
            <div class="row p-4">
              <h2>Notenbuch DIN A4 Spiralbindung quer</h2>
              <div class="row mt-5">
                <div class="col-1">
                  <img
                    src="@/assets/svg/heart_plus.svg"
                    class="mr-2"
                    alt="Avatar"
                  />
                </div>
                <div class="col">
                  <p class="">Perfekt für Orgelnoten geeignet</p>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-1">
                  <img
                    src="@/assets/svg/heart_plus.svg"
                    class="mr-2"
                    alt="Avatar"
                  />
                </div>
                <div class="col">
                  <p class="">
                    Langlebige und praktikable Qualität der Bindung, geräuscharm
                    umzublättern
                  </p>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-1">
                  <img
                    src="@/assets/svg/heart_plus.svg"
                    class="mr-2"
                    alt="Avatar"
                  />
                </div>
                <div class="col">
                  <p class="">
                    2–400 Seiten Inhalt + Deckblatt und Rückwand möglich
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-8">
                  <NuxtLink class="a" to="/productCustomizer">
                    <button type="button" class="btn btn-dark">
                      <img
                        src="@/assets/svg/plus.svg"
                        alt="Avatar"
                        class="plusBtn"
                      />Jetzt drucken
                    </button>
                  </NuxtLink>
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
        <div class="row">
          <div class="col customBorder blockStartMarign">
            <div class="row pb-3">
              <h2 class="heading-grid">
                Notenbuch Spiralbindung
                <p style="color: #d95a4e">Hochformat</p>
              </h2>
              <p class="p-grid pb-4">
                Mit unserer hochwertigen Coilbindung für Musiknoten sind Sie
                größtmöglich flexibel.
              </p>
            </div>
          </div>
          <div class="col customBorder pl-5 p-4 green">
            <h2 class="heading-grid">Notenbuch »Peters« Spiralbindung hoch</h2>
            <div class="row mt-4">
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>Format 19 x 27 cm hoch</p>
              </div>
              <div class="w-100 pt-2"></div>
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>Das bekannte Format der Klavierauszüge der EDITION PETERS</p>
              </div>
              <div class="w-100 pt-2"></div>
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>2–400 Seiten Inhalt + Deckblatt und Rückwand möglich</p>
              </div>
              <div class="row">
                <div class="col-8 mt-3">
                  <NuxtLink class="a" to="/productCustomizer">
                    <button type="button" class="btn btn-dark mt-3">
                      <img
                        src="@/assets/svg/plus.svg"
                        alt="Avatar"
                        class="plusBtn"
                      />Jetzt drucken
                    </button>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col customBorder pl-5 p-4 pink">
            <h2 class="heading-grid">Notenbuch »Concert« Spiralbindung hoch</h2>
            <div class="row mt-4">
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p class="">Format 22,8 x 30,5 cm hoch</p>
              </div>
              <div class="w-100 pt-2"></div>
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p class="">Bekannt von EDITION PETERS, SCHOTT Music u.v.a.</p>
              </div>
              <div class="w-100 pt-2"></div>
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p class="">
                  2–400 Seiten Inhalt + Deckblatt und Rückwand möglich
                </p>
              </div>
              <div class="row">
                <div class="col-8">
                  <NuxtLink class="a" to="/productCustomizer">
                    <button
                      type="button"
                      class="btn btn-dark"
                      style="margin-top: 30px !important"
                    >
                      <img
                        src="@/assets/svg/plus.svg"
                        alt="Avatar"
                        class="plusBtn"
                      />Jetzt drucken
                    </button>
                  </NuxtLink>
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
        <div class="row">
          <div class="col customBorder pl-5 p-4 yellow">
            <h2 class="heading-grid">Notenbuch DIN B4 Spiralbindung hoch</h2>
            <div class="row mt-4">
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>Format 25 x 35,3 cm hoch</p>
              </div>
              <div class="w-100 pt-2"></div>
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>Hervorragend für Dirigierpartituren geeignet</p>
              </div>
              <div class="w-100 pt-2"></div>
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>2–400 Seiten Inhalt + Deckblatt und Rückwand möglich</p>
              </div>
              <div class="row">
                <div class="col-8 mt-2">
                  <NuxtLink class="a" to="/productCustomizer">
                    <button type="button" class="btn btn-dark mt-3">
                      <img
                        src="@/assets/svg/plus.svg"
                        alt="Avatar"
                        class="plusBtn"
                      />Jetzt drucken
                    </button>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col customBorder pl-5 p-4 orange">
            <h2 class="heading-grid">Notenbuch DIN A3 Spiralbindung hoch</h2>
            <div class="row mt-4">
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>Format 29,7 x 42 cm hoch</p>
              </div>
              <div class="w-100 pt-2"></div>
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>Für große Partituren und Stimmen</p>
              </div>
              <div class="w-100 pt-2"></div>
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>2–400 Seiten Inhalt + Deckblatt und Rückwand möglich</p>
              </div>
              <div class="row">
                <div class="col-8 mt-4">
                  <NuxtLink class="a" to="/productCustomizer">
                    <button type="button" class="btn btn-dark mt-3">
                      <img
                        src="@/assets/svg/plus.svg"
                        alt="Avatar"
                        class="plusBtn"
                      />Jetzt drucken
                    </button>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col customBorder pl-5 p-4 darkblue">
            <h2 class="heading-grid">
              Notenbuch »Dirigent« Spiralbindung hoch
            </h2>
            <div class="row mt-4">
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>Format 31,5 x 46 cm hoch</p>
              </div>
              <div class="w-100 pt-2"></div>
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>Der Gigant für die großen Werke!</p>
              </div>
              <div class="w-100 pt-2"></div>
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>2–400 Seiten Inhalt + Deckblatt und Rückwand möglich</p>
              </div>
              <div class="row">
                <div class="col-8 mt-4">
                  <NuxtLink class="a" to="/productCustomizer">
                    <button type="button" class="btn btn-dark mt-3">
                      <img
                        src="@/assets/svg/plus.svg"
                        alt="Avatar"
                        class="plusBtn"
                      />Jetzt drucken
                    </button>
                  </NuxtLink>
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
        <div class="row">
          <div class="col customBorder blockStartMarign">
            <div class="row pb-3">
              <h2 class="heading-grid">
                Notenbuch Spiralbindung
                <p style="color: #d95a4e">Querformat</p>
              </h2>
              <p class="p-grid pb-4">
                Auch für Notendruck im Querformat ist unsere Spiralbindung
                hervorragend geeignet.
              </p>
            </div>
          </div>
          <div class="col customBorder pl-5 p-4 green">
            <h2 class="heading-grid">Notenbuch »Peters« Spiralbindung quer</h2>
            <div class="row mt-4">
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>Format 27 x 19 cm quer</p>
              </div>
              <div class="w-100 pt-2"></div>
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>Das bekannte Format der Klavierauszüge der EDITION PETERS</p>
              </div>
              <div class="w-100 pt-2"></div>
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>2–400 Seiten Inhalt + Deckblatt und Rückwand möglich</p>
              </div>
              <div class="row">
                <div class="col-8 mt-3">
                  <NuxtLink class="a" to="/productCustomizer">
                    <button type="button" class="btn btn-dark mt-3">
                      <img
                        src="@/assets/svg/plus.svg"
                        alt="Avatar"
                        class="plusBtn"
                      />Jetzt drucken
                    </button>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="col pl-5 p-4 customBorder pink">
            <h2 class="heading-grid">Notenbuch »Concert« Spiralbindung quer</h2>
            <div class="row mt-4">
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p class="">Format 30,5 x 22,8 cm quer</p>
              </div>
              <div class="w-100 pt-3"></div>
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p class="">Bekannt von EDITION PETERS, SCHOTT Music u.v.a.</p>
              </div>
              <div class="w-100 pt-3"></div>
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p class="">
                  2–400 Seiten Inhalt + Deckblatt und Rückwand möglich
                </p>
              </div>
              <div class="row">
                <div class="col-8">
                  <NuxtLink class="a" to="/productCustomizer">
                    <button type="button" class="btn btn-dark mt-3">
                      <img
                        src="@/assets/svg/plus.svg"
                        alt="Avatar"
                        class="plusBtn"
                      />Jetzt drucken
                    </button>
                  </NuxtLink>
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
        <div class="row">
          <div class="col customBorder pl-5 p-4 yellow">
            <h2 class="heading-grid">Notenbuch DIN B4 Spiralbindung quer</h2>
            <div class="row mt-4">
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>Format 35,3 x 25 cm quer</p>
              </div>
              <div class="w-100 pt-2"></div>
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>Hervorragend für Dirigierpartituren geeignet</p>
              </div>
              <div class="w-100 pt-2"></div>
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>2–400 Seiten Inhalt + Deckblatt und Rückwand möglich</p>
              </div>
              <div class="row">
                <div class="col-8 mt-2">
                  <button type="button" class="btn btn-dark mt-4">
                    <img
                      src="@/assets/svg/plus.svg"
                      alt="Avatar"
                      class="plusBtn"
                    />Jetzt drucken
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col customBorder pl-5 p-4 orange">
            <h2 class="heading-grid">Notenbuch DIN A3 Spiralbindung quer</h2>
            <div class="row mt-4">
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>Format 42 x 29,7 cm quer</p>
              </div>
              <div class="w-100 pt-3"></div>
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>Für große Partituren und Stimmen</p>
              </div>
              <div class="w-100 pt-3"></div>
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>2–400 Seiten Inhalt + Deckblatt und Rückwand möglich</p>
              </div>
              <div class="row">
                <div class="col-8 mt-4">
                  <button type="button" class="btn btn-dark mt-3">
                    <img
                      src="@/assets/svg/plus.svg"
                      alt="Avatar"
                      class="plusBtn"
                    />Jetzt drucken
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col customBorder pl-5 p-4 darkblue">
            <h2 class="heading-grid">
              Notenbuch »Dirigent« Spiralbindung quer
            </h2>
            <div class="row mt-4">
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>Format 46 x 31,5 cm quer</p>
              </div>
              <div class="w-100 pt-2"></div>
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>Der Gigant für die großen Werke!</p>
              </div>
              <div class="w-100 pt-2"></div>
              <div class="col-1">
                <img
                  src="@/assets/svg/heart_plus.svg"
                  class="mr-2"
                  alt="Avatar"
                />
              </div>
              <div class="col">
                <p>2–400 Seiten Inhalt + Deckblatt und Rückwand möglich</p>
              </div>
              <div class="row">
                <div class="col-8 mt-2">
                  <button type="button" class="btn btn-dark mt-5">
                    <img
                      src="@/assets/svg/plus.svg"
                      alt="Avatar"
                      class="plusBtn"
                    />Jetzt drucken
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
* {
  box-sizing: border-box;
}

@media only screen and (min-width: 1024px) {
  .imgcard {
    width: 100%;
  }
}

@media only screen and (max-width: 1024px) {
  .imgcard {
    float: left;
    margin-right: 25px;
    max-height: 300px;
  }
}

.p-5 {
  padding: 35px !important;
}

.btn-primary {
  border-color: black;
}

.card-img-top {
  border-radius: 0px;
}

@media only screen and (max-width: 1024px) {
  .card-img-top {
    margin-top: 0%;
    height: 300px;
    object-fit: cover;
  }
}

.card {
  margin: 0px;
  border-radius: 0px;
  padding: 0px;
}

.imgsmall {
  text-align: left;
  width: 100%;
}

* {
  box-sizing: border-box;
}

@media only screen and (max-width: 1024px) {
  .btn {
    margin-top: 0%;
  }
}
</style>
