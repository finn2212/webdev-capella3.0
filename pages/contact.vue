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
        <section class="flex flex-col md:flex-row mt-20">
            <div class="md:w-3/9 w-full border-12 border-white flex flex-col">
                <h2 class="font-bold">
                    Herzlich willkommen!
                </h2>
                <p class="pt-10">
                    Vielen Dank für Ihr Interesse an capellaprint. Wir bieten Ihnen nicht nur erstklassige
                    Druckqualität,
                    sondern sind auch bei Fragen und Anregungen rund um das Thema Musikaliendruck gerne Ihre
                    Gesprächspartner.
                </p>
            </div>
            <div class="green md:w-3/9 w-full border-12 border-white flex flex-col">
                <div class="flex flex-col flex-grow p-5"> <!-- Make this a flex container and let it grow -->
                    <img src="@/assets/svg/shopping_cart_checkout.svg" class="max-w-12" alt="Avatar">
                    <h2 class="font-bold mt-3"> Fragen zur Bestellung?</h2>
                    <!-- Image and Text 1 -->
                    <p class="mt-5">Bei allgemeinen Fragen rund ums Thema Bestellung wenden Sie sich bitte an:</p>
                    <p class="font-bold mt-3">
                        <a href="mailto:fragen@capellaprint.com">fragen@capellaprint.com</a>
                    </p>
                    <p class="mt-3">Wir melden uns baldmöglichst bei Ihnen zurück. Gemeinsam finden wir eine
                        Lösung!
                    </p>
                </div>
            </div>
            <div class="darkblue md:w-3/9 w-full border-12 border-white flex flex-col">
                <div class="flex flex-col flex-grow p-5"> <!-- Make this a flex container and let it grow -->
                    <img src="@/assets/svg/audio_file.svg" class="max-w-12" alt="Avatar">
                    <h2 class="font-bold mt-3"> Fragen zu Ihren gedruckten Noten?</h2>
                    <!-- Image and Text 1 -->
                    <p class="mt-5">Falls Sie Fragen zur korrekten Vorbereitung Ihrer Noten zum Druck haben, möchten wir
                        Sie
                        bitten, sich zunächst unsere Druckdatenvorgaben herunterzuladen und aufmerksam durchzulesen:</p>
                    <a href=" https://firebasestorage.googleapis.com/v0/b/pocselfpublish.appspot.com/o/uploads%2FDruckdaten_Print_data_2023.pdf?alt=media&token=e8196ae8-3679-4f5a-9445-48d46724fc65"
                        target="_blank">
                        <button type="button" class="btn border border-black bg-black text-white rounded-full mt-3"
                            style="width: 100%;">
                            <img src="@/assets/svg/download.svg" alt="Avatar"
                                style="height: 19px; margin-right: 10px; padding-left: 5px;">
                            <p>Maßvorgaben (PDF)</p>
                        </button>
                    </a>
                </div>
            </div>
        </section>
        <section class="mt-20">
            <div class="flex flex-col md:flex-row">
                <div class="flex flex-col md:w-3/9 w-full border-12 border-white pink p-5">
                    <img src="@/assets/svg/unknown_document.svg" class="max-w-12" alt="Avatar">
                    <h2 class="font-bold mt-5">
                        Tipp:
                        Nutzen Sie unsere capella-Vorlagen!
                    </h2>
                    <p class="pt-3">
                        Wir haben für Sie in capella fertige Mustervorlagen erstellt, die exakt auf die Vorgaben für
                        capellaprint abgestimmt sind. Diese Vorlagen finden Sie direkt in Ihrer capella Software.
                    </p>

                </div>
                <div class="md:w-6/9 flex w-full border-12 border-white grey p-5">
                    <div class="sm:w-1/2 p-4 flex flex-col">
                        <img src="@/assets/svg/call_quality.svg" class="max-w-12" alt="Avatar">
                        <h2 class="mt-5">Telefonkontakt</h2>
                        <p class="mt-3">Für den Fall, dass jetzt noch Fragen offen sind, steht Ihnen unser Partner
                            AURIOPRINT aus gerne
                            telefonisch zur Verfügung:</p>
                        <p class="mt-3 font-bold">+49 08294 / 8604974</p>
                        <p class="mt-3">Mo–Do, 10–14 Uhr</p>
                    </div>

                    <div class="sm:w-1/2 p-4 flex flex-col">
                        <img src="@/assets/svg/local_post_office.svg" class="max-w-12" alt="Avatar">
                        <h2 class="mt-5">Postanschrift</h2>
                        <p class="mt-3">Wir freuen uns auch über einen Brief von Ihnen. Diesen senden Sie bitte an:
                        </p>
                        <p class="mt-3 font-bold">capellaprint</p>
                        <p class="mt-0 font-bold">c/o AURIOPRINT</p>
                        <p class="mt-3">Augsburger Straße 9</p>
                        <p>D-86497 Horgau</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style></style>
