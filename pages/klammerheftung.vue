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
            <div class="container justify-center">
                <div class="row">
                    <div class="col" style="max-height: 350px;">
                        <img src="@/assets/images/Booklet_machine.png" alt="Avatar" class="img" style="height: 100%;">
                    </div>

                </div>

            </div>
        </section>
        <!--Sektion Heading-->

        <section>
            <div class="container justify-center">
                <div class="row pt-4">
                    <div class="col-12 col-xl-4 customBorder blockStart">
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
                        <p class="inline thick">
                            Da wir unzählige Hefte produzieren, sind die Kosten so gering, dass wir diese Art der Bindung
                            ohne
                        </p>

                        Aufpreis anbieten können. Das macht das Notenbuch mit Klammerheftung zum absoluten
                        Bestsellerprodukt!
                        </p>

                    </div>
                    <div class="col customBorder yellow p-4">
                        <div class="row">
                            <div class="col-12 col-md">
                                <h1 class="pb-3">
                                    <img src="@/assets/svg/info.svg" alt="Avatar" class="pr-3">
                                    Eigenschaften
                                </h1>
                                <p class="mt-5">
                                    Ihr Notenheft wird mit einem Squarefold, einem rechteckigen Broschürenrücken versehen,
                                    der dem Heft das Aussehen eines klebegebundenen Buchs verleiht.
                                    Der Qualitätsunterschied zur normalen Heftung ist enorm!
                                </p>
                                <a href=" https://firebasestorage.googleapis.com/v0/b/pocselfpublish.appspot.com/o/uploads%2FDruckdaten_Print_data_2023.pdf?alt=media&token=e8196ae8-3679-4f5a-9445-48d46724fc65"
                                    target="_blank">
                                    <button type="button" class="btn btn-dark p-2 mt-5" style="width: 100%;">
                                        <img src="@/assets/svg/download.svg" alt="Avatar"
                                            style="height: 19px; margin-right: 10px; padding-left: 5px;">
                                        <p class="inline mt-2">Maßvorgaben (PDF)</p>
                                    </button>
                                </a>
                            </div>
                            <div class="col">
                                <div class="row mt-4">
                                    <div class="col-1">
                                        <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                                    </div>
                                    <div class="col">
                                        <p class="">
                                            Formate: DIN A4 / 19 x 27 cm / 22,8 x 30,5 (»Concertformat«)
                                        </p>
                                    </div>
                                    <div class="w-100 pt-1"></div>
                                    <div class="col-1">
                                        <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                                    </div>
                                    <div class="col">
                                        <p class="">
                                            Für Notenhefte als Broschüre im Hochformat mit und ohne Umschlag
                                        </p>
                                    </div>
                                    <div class="w-100 pt-1"></div>
                                    <div class="col-1">
                                        <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                                    </div>
                                    <div class="col">
                                        <p class="">
                                            Seitenumfang bis 88 Seiten + Umschlag machbar
                                        </p>
                                    </div>
                                    <div class="w-100 pt-1"></div>
                                    <div class="col-1">
                                        <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                                    </div>
                                    <div class="col">
                                        <p class="">
                                            Hervorragendes Aufschlagverhalten
                                        </p>
                                    </div>
                                    <div class="w-100 pt-1"></div>
                                    <div class="col-1">
                                        <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                                    </div>
                                    <div class="col">
                                        <p class="">
                                            Auflage 1 bis 250 Exemplare günstig drucken
                                        </p>
                                    </div>
                                    <div class="w-100 pt-1"></div>
                                    <div class="col-1">
                                        <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                                    </div>
                                    <div class="col">
                                        <p class="">
                                            1–3 Werktage Produktionszeit
                                        </p>
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
            <div class="container justify-center">
                <div class="row pt-4">

                    <div class="col-12 col-lg-4  customBorder blockStart">
                        <div class="row align-items-start">
                            <h2>
                                Direkt zu den Topsellern

                            </h2>
                            <p>
                                Starten Sie mit unseren meistgefragten Druckprodukten – diese Formate stellen wir täglich
                                zigfach her.
                            </p>

                        </div>
                    </div>
                    <div class="col-12 col-lg-4  customBorder blue"
                        style="padding-left: 0px !important; padding-right: 0px !important;">
                        <div class="row">
                            <img class="card-img-top" src="@/assets/images/pic4.png" alt="Card image cap">
                        </div>
                        <div class="row p-4">
                            <h2 class="mb-4">Notenheft DIN A4
                                Klammerheftung</h2>
                            <div class="row mt-5">
                                <div class="col-1">
                                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                                </div>
                                <div class="col">
                                    <p class="">
                                        Umschlag aus matt-brillantem Chromokarton mit 260g Stärke
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1">
                                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                                </div>
                                <div class="col">
                                    <p class="">
                                        Innenteil mit klassisch gelblichem Notenpapier
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1">
                                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                                </div>
                                <div class="col">

                                    <p class="">
                                        Rechteckiger Heftrücken für ein hochprofessionelles Aussehen
                                    </p>

                                </div>
                                <div class="row">
                                    <div class="col-12 col-xl-9 mt-1">
                                        <NuxtLink class="a" to="/productCustomizer">
                                            <button type="button" class="btn btn-dark" style="margin-top: 55px !important">
                                                <img src="@/assets/svg/plus.svg" alt="Avatar"
                                                    style="margin-right: 10px;">Jetzt
                                                drucken
                                            </button>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4  customBorder blue"
                        style="padding-left: 0px !important; padding-right: 0px !important;">
                        <div class="row">
                            <img class="card-img-top" src="@/assets/images/pic5.png" alt="Card image cap">
                        </div>
                        <div class="row p-4">
                            <h2>Stimmenheft DIN A4
                                Klammerheftung
                                ohne Umschlag</h2>
                            <div class="row mt-4">
                                <div class="col-1">
                                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                                </div>
                                <div class="col">
                                    <p class="">
                                        Blendfreies & raschelarmes Notenpapier mit gelblicher Färbung
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1">
                                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                                </div>
                                <div class="col">
                                    <p class="">
                                        Gestochen scharfer Notentext in sattem Schwarz
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1">
                                    <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                                </div>
                                <div class="col">
                                    <p class="">
                                        Hergestellt nach den strengen Regularien der Deutschen Orchestervereinigung e.V.
                                    </p>

                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 col-xl-9  mt-4">
                                    <NuxtLink class="a" to="/productCustomizer">
                                        <button type="button" class="btn btn-dark mt-3">
                                            <img src="@/assets/svg/plus.svg" alt="Avatar" class="plusBtn">Jetzt
                                            drucken
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
            <div class="container justify-center">
                <div class="row">
                    <div class="col-12 col-lg  p-4" style="padding: 0px !important; margin-right:30px ">
                        <div class="row pb-3">
                            <h2 class="heading-grid">
                                Weitere Heftformate
                            </h2>
                            <p class="p-grid pb-4">
                                Sie können gängige Sonderformate für Musikalien produzieren lassen.
                            </p>
                        </div>
                        <div class="row  p-4 pt-2 pt-lg-5 colfreeKlammer">
                            <div class="beige pt-4">
                                <p>Mehr als 88 Seiten Inhalt? Querformat gesucht? Notenheft in DIN A3 oder größer?</p>
                                <div class="col-12 col-lg-9">
                                    <NuxtLink class="a" to="/productCustomizer">
                                        <h3>
                                            Zu den
                                            Notenheften mit Spiralbindung
                                        </h3>
                                    </NuxtLink>
                                </div>
                                <div class="col mb-2 align-self-end">
                                    <NuxtLink class="a" to="/productCustomizer">
                                        <img src="@/assets/svg/arrow_circle_right.svg" alt="Avatar"
                                            style="margin-left: 10px;">
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col customBorder pl-5  p-4 green">

                        <h2 class="heading-grid">
                            Notenheft 19 x 27 cm
                            »Peters«
                        </h2>
                        <div class="row mt-4">
                            <div class="col-1">
                                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                            </div>
                            <div class="col">
                                <p>
                                    Klammerheftung, hervorragend geeignet bspw. für Chorpartituren
                                </p>

                            </div>
                            <div class="w-100 pt-3"></div>
                            <div class="col-1">
                                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                            </div>
                            <div class="col">
                                <p>
                                    Das bekannte Format der Klavierauszüge der EDITION PETERS
                                </p>
                            </div>
                            <div class="w-100 pt-3"></div>
                            <div class="col-1">
                                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                            </div>
                            <div class="col">
                                <p>
                                    Innenteil mit klassisch gelblichem Notenpapier
                                </p>
                            </div>
                            <div class="row">
                                <div class="col-12 col-xl-9 mt-4">
                                    <NuxtLink class="a" to="/productCustomizer">
                                        <button type="button" class="btn btn-dark mt-3">
                                            <img src="@/assets/svg/plus.svg" alt="Avatar" class="plusBtn">Jetzt
                                            drucken
                                        </button>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col pl-5  p-4 customBorder pink">
                        <h2 class="heading-grid">
                            Notenheft 22,8 x 30,5 cm
                            »Concert«
                        </h2>
                        <div class="row mt-4">
                            <div class="col-1">
                                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                            </div>
                            <div class="col">
                                <p class="">
                                    Klassisches Musikalien-Überformat, geeignet für Solo- und Kammermusik
                                </p>
                            </div>
                            <div class="w-100 pt-3"></div>
                            <div class="col-1">
                                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                            </div>
                            <div class="col">
                                <p class="">
                                    Beliebt auch für Orchesterstimmen & ähnliche Zwecke
                                </p>
                            </div>
                            <div class="w-100 pt-3"></div>
                            <div class="col-1">
                                <img src="@/assets/svg/heart_plus.svg" class="mr-2" alt="Avatar">
                            </div>
                            <div class="col">
                                <p class="">
                                    Bekannt von EDITION PETERS, SCHOTT Music u.v.a.
                                </p>
                            </div>
                            <div class="row mt-4">
                                <div class="col-12 col-xl-9 ">
                                    <NuxtLink class="a" to="/productCustomizer">
                                        <button type="button" class="btn btn-dark mt-3">
                                            <img src="@/assets/svg/plus.svg" alt="Avatar" class="plusBtn">Jetzt
                                            drucken
                                        </button>
                                    </NuxtLink>
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
    box-sizing: border-box
}


@media only screen and (max-width: 1024px) {
    .btn {
        margin-top: 0%;
    }
}
</style>