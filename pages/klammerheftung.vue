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
                <img src="@/assets/images/Booklet_machine.png" alt="Avatar"
                    class="object-cover w-full max-h-[350px] mx-auto">
            </div>
        </section>
        <section class="pt-20">
            <div class="flex flex-col md:flex-row">
                <div class="flex flex-col md:w-3/9 w-full border-12 border-white">
                    <h2>
                        Notenheft mit Klammerheftung günstig drucken lassen
                    </h2>
                    <p>
                        Der Klassiker: Notenhefte mit Klammerheftung sind der alltägliche Begleiter von Musikern in
                        aller
                        Welt.
                        Die Klammerheftung, auch Rückstichheftung genannt, punktet mit hervorragendem
                        Aufschlagverhalten.
                    </p>
                    <p>
                        Da wir unzählige Hefte produzieren, sind die Kosten so gering, dass wir diese Art der Bindung
                        ohne
                        Aufpreis anbieten können. Das macht das Notenbuch mit Klammerheftung zum absoluten
                        Bestsellerprodukt!
                    </p>
                </div>
                <div class="md:w-6/9 flex w-full border-12 border-white yellow p-5">
                    <div class="sm:w-1/2 p-4 flex flex-col">
                        <h1 class="flex items-center font-bold">
                            <img src="@/assets/svg/info.svg" alt="Avatar" class="pr-3">
                            Eigenschaften
                        </h1>
                        <p class="mt-5 flex-grow">
                            Ihr Notenheft wird mit einem Squarefold, einem rechteckigen Broschürenrücken versehen, der
                            dem
                            Heft das Aussehen eines klebegebundenen Buchs verleiht. Der Qualitätsunterschied zur
                            normalen
                            Heftung ist enorm!
                        </p>
                        <a href="https://firebasestorage.googleapis.com/v0/b/pocselfpublish.appspot.com/o/uploads%2FDruckdaten_Print_data_2023.pdf?alt=media&token=e8196ae8-3679-4f5a-9445-48d46724fc65"
                            target="_blank" class="mt-auto w-full">
                            <button type="button"
                                class="bg-black text-white rounded-full border border-black py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex items-center justify-center w-full">
                                <img src="@/assets/svg/download.svg" alt="Download"
                                    style="height: 19px; margin-right: 10px;">
                                <p>Maßvorgaben (PDF)</p>
                            </button>
                        </a>
                    </div>

                    <div class="md:w-1/2 p-4 space-y-4">
                        <div class="flex items-center">
                            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-2">
                            <p>Formate: DIN A4 / 19 x 27 cm / 22,8 x 30,5 (»Concertformat«)</p>
                        </div>
                        <!-- Repeat for each item -->
                        <div class="flex items-center">
                            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-2">
                            <p>Für Notenhefte als Broschüre im Hochformat mit und ohne Umschlag</p>
                        </div>
                        <!-- Repeat for each item -->
                        <div class="flex items-center">
                            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-2">
                            <p> Seitenumfang bis 88 Seiten + Umschlag machbar</p>
                        </div>
                        <!-- Repeat for each item -->
                        <div class="flex items-center">
                            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-2">
                            <p> Hervorragendes Aufschlagverhalten</p>
                        </div>
                        <!-- Repeat for each item -->
                        <div class="flex items-center">
                            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-2">
                            <p> Auflage 1 bis 250 Exemplare günstig drucken</p>
                        </div>
                        <!-- Repeat for each item -->
                        <div class="flex items-center">
                            <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-2">
                            <p> 1–3 Werktage Produktionszeit</p>
                        </div>
                        <!-- Add more items as needed -->
                    </div>
                </div>
            </div>
        </section>
        <section class="flex flex-col md:flex-row">
            <div class="md:w-3/9 w-full border-12 border-white flex flex-col">
                <h2>
                    Direkt zu den Topsellern
                </h2>
                <p class="mt-4">
                    Starten Sie mit unseren meistgefragten Druckprodukten – diese Formate stellen wir täglich
                    zigfach her.
                </p>
            </div>
            <div class="blue md:w-3/9 w-full border-12 border-white flex flex-col">
                <img src="@/assets/images/pic4.png" class="smmax-h-xs object-cover">
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
                    <div class="flex items-center mt-4 mb-5">
                        <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
                        <p> Rechteckiger Heftrücken für ein hochprofessionelles Aussehen</p>
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
                    <h2>Stimmauszug DIN A4 Klammerheftung hoch</h2>
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
            <div class="md:w-3/9 w-full border-12 border-white flex flex-col">
                <h2>
                    Weitere Heftformate
                </h2>
                <p class="flex-grow">
                    Sie können gängige Sonderformate für Musikalien produzieren lassen.
                </p>
                <!-- New div that aligns at the bottom -->
                <div class="mt-auto beige p-5">
                    <p>Mehr als 88 Seiten Inhalt? Querformat gesucht? Notenheft in DIN A3 oder größer?</p>
                    <NuxtLink to="/spiralbindung">
                        <h2 class="mt-3">
                            Zu den
                            Notenheften mit Spiralbindung
                        </h2>
                        <img src="@/assets/svg/arrow_circle_right.svg" alt="Avatar" class="mt-3">
                    </NuxtLink>
                </div>
            </div>
            <div class="green md:w-3/9 w-full border-12 border-white flex flex-col">
                <div class="flex flex-col flex-grow p-5"> <!-- Make this a flex container and let it grow -->
                    <h2> Notenheft 19 x 27 cm
                        »Peters«</h2>
                    <!-- Image and Text 1 -->
                    <div class="flex items-center mt-4">
                        <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
                        <p> Klammerheftung, hervorragend geeignet bspw. für Chorpartituren</p>
                    </div>

                    <!-- Image and Text 2 -->
                    <div class="flex items-center mt-4">
                        <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
                        <p>Das bekannte Format der Klavierauszüge der EDITION PETERS</p>
                    </div>

                    <!-- Image and Text 3 -->
                    <div class="flex items-center mt-4 mb-5">
                        <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
                        <p> Innenteil mit klassisch gelblichem Notenpapier</p>
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
                    <h2> Notenheft 22,8 x 30,5 cm
                        »Concert«</h2>
                    <!-- Image and Text 1 -->
                    <div class="flex items-center mt-4">
                        <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
                        <p>Klassisches Musikalien-Überformat, geeignet für Solo- und Kammermusik</p>
                    </div>

                    <!-- Image and Text 2 -->
                    <div class="flex items-center mt-4">
                        <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
                        <p>Beliebt auch für Orchesterstimmen & ähnliche Zwecke</p>
                    </div>

                    <!-- Image and Text 3 -->
                    <div class="flex items-center mt-4 mb-5">
                        <img src="@/assets/svg/heart_plus.svg" alt="Avatar" class="mr-3">
                        <p>Innenteil mit klassisch gelblichem Notenpapier</p>
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
<style>
* {
    box-sizing: border-box;
}

@media (max-width: 767px) {
    .smmax-h-xs {
        max-height: 300px;
        /* Example max-height for extra-small screens */
    }
}


* {
    box-sizing: border-box
}


@media only screen and (max-width: 1024px) {
    .btn {
        margin-top: 0%;
    }
}
</style>