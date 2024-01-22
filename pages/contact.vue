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
    <div class="container justify-content-center top">
        <!--Sektion mit 3 Karten und Bider-->
        <!--Sektion mit 3 Karten und Bider-->
        <section>
            <div class="container justify-content-center">
                <div class="row">
                    <div class="col customBorder blockStartMarign ">
                        <div class="row pb-3">
                            <h2 class="heading-grid">
                                Herzlich willkommen! </h2>
                        </div>
                        <div>
                            <p class="mt-5">Vielen Dank für Ihr Interesse an capellaprint. Wir bieten Ihnen nicht nur
                                erstklassige
                                Druckqualität, sondern sind auch bei Fragen und Anregungen rund um das Thema Musikaliendruck
                                gerne Ihre Gesprächspartner.
                            </p>

                        </div>


                    </div>
                    <div class="col customBorder pl-5  p-4 green">
                        <div class="col-1">
                            <img src="@/assets/svg/shopping_cart_checkout.svg" class="mr-2" style="margin-bottom: 25px;"
                                alt="Avatar">
                        </div>

                        <h2 class="heading-grid">
                            Fragen zur Bestellung?
                        </h2>
                        <div class="row mt-5 pt-3">
                            <p>
                                Bei allgemeinen Fragen rund ums Thema Bestellung wenden Sie sich bitte an:
                            <h5> fragen@capellaprint.com</h5>


                            </p>
                            <p>
                                Wir melden uns baldmöglichst bei Ihnen zurück. Gemeinsam finden wir eine Lösung!</p>

                        </div>
                    </div>
                    <div class="col customBorder pl-5  p-4  darkblue">
                        <div class="col-1">
                            <img src="@/assets/svg/audio_file.svg" class="mr-2" style="margin-bottom: 25px;" alt="Avatar">
                        </div>

                        <h2 class="heading-grid">
                            Fragen zu Ihren gedruckten Noten?
                        </h2>
                        <div class="row mt-3 pt-3">

                            <p>Falls Sie Fragen zur korrekten Vorbereitung Ihrer Noten zum Druck haben, möchten wir Sie
                                bitten, sich zunächst unsere Druckdatenvorgaben herunterzuladen und aufmerksam durchzulesen:

                            </p>
                            <a href=" https://firebasestorage.googleapis.com/v0/b/pocselfpublish.appspot.com/o/uploads%2FDruckdaten_Print_data_2023.pdf?alt=media&token=e8196ae8-3679-4f5a-9445-48d46724fc65"
                                target="_blank">
                                <button type="button" class="btn btn-dark p-2" style="width: 100%;">
                                    <img src="@/assets/svg/download.svg" alt="Avatar"
                                        style="height: 19px; margin-right: 10px; padding-left: 5px;">
                                    <p class="inline mt-2">Maßvorgaben (PDF)</p>
                                </button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container justify-content-center">
                <div class="row pt-4">
                    <div class="col-12 col-lg-4 pink customBorder p-4">
                        <div class="col-1">
                            <img src="@/assets/svg/unknown_document.svg" class="mr-2" style="margin-bottom: 25px;"
                                alt="Avatar">
                        </div>
                        <h2>
                            Tipp: <br>
                            Nutzen Sie unsere capella-Vorlagen!
                        </h2>
                        <p>
                            Wir haben für Sie in capella fertige Mustervorlagen erstellt, die exakt auf die Vorgaben für
                            capellaprint abgestimmt sind. Diese Vorlagen finden Sie direkt in Ihrer capella Software.
                        </p>


                    </div>
                    <div class="col customBorder grey p-5">
                        <div class="row">
                            <div class="col">
                                <img src="@/assets/svg/call_quality.svg" alt="Avatar" style="margin-bottom: 25px;">
                                <h2>

                                    Telefonkontakt
                                </h2>
                                <p class="pt-5 mt-3">Für den Fall, dass jetzt noch Fragen offen sind, steht Ihnen unser
                                    Partner AURIOPRINT aus
                                    gerne telefonisch zur Verfügung:
                                </p>
                                <h5>+49 (0)8294 – 8601888

                                </h5>
                                <p>Mo–Do, 10–16 Uhr</p>

                            </div>
                            <div class="col">
                                <div class="row">
                                    <div class="col">
                                        <img src="@/assets/svg/local_post_office.svg" style="margin-bottom: 25px;"
                                            alt="Avatar">


                                        <h2>

                                            Postanschrift
                                        </h2>


                                        <p class="pt-5 mt-3">Wir freuen uns auch über einen Brief von Ihnen. Diesen senden
                                            Sie
                                            bitte an:

                                            capellaprint

                                        </p>
                                        <p class="thick m-0">
                                            capellaprint
                                            <br>
                                            c/o AURIOPRINT
                                        </p>
                                        <p class="m-0">
                                            Augsburger Straße 9
                                            <br>
                                            D-86497 Horgau
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container justify-content-center">
                <div class="row" style="margin-top: 100px;">
                    <div class="col-4">
                        <h2>Impressum</h2>
                        <p>
                        <p class="thick">AURIO GmbH</p>
                        Augsburger Straße 9 <br>
                        86497 Horgau<br>
                        Deutschland<br>
                        Tel.: 08294 / 8604974<br>
                        E-Mail: office@aurioprint.com<br><br>

                        Registergericht: Augsburg<br>
                        Registernummer: HRB 33832<br>
                        Geschäftsführer: Sebastian Gabriel<br>

                        Umsatzsteuer-Identifikationsnummer: DE326155106<br>
                        Verantwortliche/r i.S.d. § 18 Abs. 2 MStV:<br>
                        Sebastian Gabriel, c/o AURIO GmbH, Augsburger Straße 9, 86497 Horgau<br><br>

                        Plattform der EU-Kommission zur Online-Streitbeilegung: https://ec.europa.eu/odr<br>
                        Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
                        Verbraucherschlichtungsstelle<br>
                        weder verpflichtet noch bereit.<br>
                        </p>
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


