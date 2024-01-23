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
    <!--Sektion mit 3 Karten und Bider-->
    <section>
      <div class="container justify-center">
        <div class="row">
          <div class="col-12 col-xl-8 p-0 customBorder">
            <img src="@/assets/images/pic11.png" alt="Avatar" class="img" />
          </div>
          <div class="col customBorder red p-5">
            <div class="row">
              <div class="col-2">
                <img src="@/assets/svg/help.svg" alt="Avatar" class="img" />
              </div>
              <div class="col">
                <h2 class="heading-grid">Wissenswertes</h2>
              </div>
            </div>

            <p class="p-grid mt-5">
              Bitte beachten Sie unbedingt unsere Druckdatenvorgaben, die Sie
              hier herunterladen können. <br />
              In Ihrem capella-Notensatzprogramm finden Sie zusätzlich
              Mustervorlagen, mit denen beim Duck nichts mehr schiefgehen kann.
              <br />
              Bei Nichtbeachtung kann keine Gewähr für Fehldrucke übernommen
              werden!
            </p>
            <div class="row align-items-end">
              <a href=" https://firebasestorage.googleapis.com/v0/b/pocselfpublish.appspot.com/o/uploads%2FDruckdaten_Print_data_2023.pdf?alt=media&token=e8196ae8-3679-4f5a-9445-48d46724fc65"
                target="_blank">
                <button type="button" class="btn btn-dark p-2" style="width: 100%">
                  <img src="@/assets/svg/download.svg" alt="Avatar"
                    style="height: 19px; margin-right: 10px; padding-left: 5px" />
                  <p class="inline mt-2">Maßvorgaben (PDF)</p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--Sektion mit Karten und Text unten-->
    <section>
      <div class="container justify-center">
        <div class="row mt-5">
          <div class="col-12 col-md-6 p-4 grey customBorder">
            <img src="@/assets/svg/history_edu.svg" style="margin-bottom: 25px" alt="Avatar" />
            <h2>Unser</h2>
            <h2>Notenpapier</h2>

            <div class="row" style="padding-top: 110px">
              <div class="col">
                <h2>90g/m&#178;</h2>
                <p class="thick">Inhaltspapier</p>
              </div>
              <div class="col">
                <h2>260g/m&#178;</h2>
                <p class="thick">Umschlagkarton</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 align-self-end">
            <p class="thick m-0">Notenpapier für Partitur & Stimmen</p>
            <p class="">
              Bei AURIOPRINT legen wir Wert auf erprobte, klassische
              Notenpapiere mit leicht gelblicher Färbung, wie man sie aus der
              Musikverlagswelt kennt. Unser Notenpapier hat ein Flächengewicht
              von 90g/m&#178; und ist raschelarm beim Umblättern. Zudem blendet
              es nicht im Bühnenlicht und ist somit ein hervorragendes
              »Arbeitspferd« für zigtausende Notenausgaben, die jährlich
              gefertigt werden.
            </p>
            <p class="thick m-0">Umschlagkarton</p>
            <p class="m-0">
              Ursprünglich für die Luxus-Kosmetikindustrie entwickelt (und dort
              noch immer eingesetzt), gibt der von uns verwendete hochweiße
              Umschlagkarton Farben brillant wieder und besitzt ein
              hervorragendes Aufschlagverhalten. Mit einem Flächengewicht von
              260g/m&#178; verleiht er auch umfangreichen Partituren Stabilität.
              Die einseitig matte Oberfläche lässt sich hervorragend bedrucken
              und bricht auch bei starker Beanspruchung nicht auf.
            </p>
            <p class="mt-2 thick">
              Kurz: Der beste Karton, den Sie für Ihre Partituren bekommen
              können.
            </p>
          </div>

          <div class="w-100"></div>
        </div>
      </div>
    </section>
    <!--Sektion mit Karten und Text unten-->
    <section>
      <div class="container justify-center">
        <div class="row mt-5">
          <div class="col-12 col-md-6 p-4 darkblue customBorder">
            <img src="@/assets/svg/print.svg" style="margin-bottom: 25px" alt="Avatar" />
            <h2>Unser</h2>
            <h2>Druckverfahren</h2>

            <div class="row" style="padding-top: 100px">
              <h2>100+</h2>
              <p class="thick">Druckseiten in Vollfarbe pro Minute</p>
            </div>
          </div>
          <div class="col-12 col-md-6 align-self-end">
            <p class="thick m-0">Schnell, effizient, erstklassig</p>
            <p class="">
              Mit diesen Worten kann man die Maschinen beschreiben, auf denen
              Ihre Partituren entstehen werden: Wir produzieren auf hoch
              leistungsfähigen Tonerfarbmaschinen der Canon-Produktionsklasse,
              die mit Druckgeschgwindigkeiten von über 100 Seiten pro Minute
              auch bei hohen Auflagen oder zeitkritischen Bestellungen nicht
              ansatzweise nervös werden.
            </p>
            <p>
              Ein integriertes Spektralphotometer misst unermüdlich die
              ausgegebenen Farbwerte und justiert ggf. automatisch nach, sodass
              Sie auch bei hohen Auflagen stets konsistent hohe Qualität
              erhalten.
            </p>

            <p>
              Der exzellente Consistently-Vivid-Toner lässt die Druckfarben
              dabei leuchtend zur Geltung kommen.
            </p>
          </div>

          <div class="w-100"></div>
        </div>
      </div>
    </section>
    <!--Sektion mit Karten und Text unten-->
    <section>
      <div class="container justify-center">
        <div class="row mt-5">
          <div class="col-12 col-md-6 p-4 yellow customBorder">
            <img src="@/assets/svg/iron.svg" style="margin-bottom: 25px" alt="Avatar" />
            <h2>Das</h2>
            <h2>i-Tüpfelchen</h2>

            <div class="row" style="padding-top: 100px">
              <h2>700 kg</h2>
              <p class="thick">Pressdruck für den perfekten Buchrücken</p>
            </div>
          </div>
          <div class="col-12 col-md-6 align-self-end">
            <p class="thick m-0">
              Ein rechteckiger Buchrücken für Ihre Notenhefte
            </p>

            <p>
              Die Weiterverarbeitung, die vollständig bei uns im Haus
              stattfindet, ist ausgelegt auf Effizienz und Qualität. Hierbei
              darf eine ganz besondere Maschine nicht fehlen: Eine sogenannte
              Squarefoldpresse. Diese presst den nach dem Heften leicht
              v-förmigen Heftfalz zu einem quadratischen, dem Aussehen eines
              normalen Buchrücken nahekommenden Falz zusammen.
            </p>
            <p class="p-0">
              Diese Nachbehandlung erleichtert nicht nur das folgende Schneiden
              Ihres Notenhefts, was sich wiederum in der Genauigkeit
              widerspiegelt, sondern wertet Ihre Broschüre optisch enorm auf.
              Zudem sorgt der quadratische Rücken für ein noch besseres
              Aufschlagverhalten Ihrer Partitur.
            </p>
            <p class="thick m-0 mb-3">Kleiner Schritt – große Wirkung!</p>
          </div>
        </div>
      </div>
    </section>
    <!--Sektion mit Karten und Text unten-->
    <section>
      <div class="container justify-center">
        <div class="row mt-5">
          <div class="col-12 col-md-6 p-4 pink customBorder">
            <img src="@/assets/svg/content_cut.svg" style="margin-bottom: 25px" alt="Avatar" />
            <h2>Maßarbeit für Stimmen</h2>
            <div class="row" style="padding-top: 100px">
              <h2>3–5 mm</h2>
              <p class="thick">
                Frontanschnitt für exakt passende Stimmeneinleger
              </p>
            </div>
          </div>
          <div class="col-12 col-md-6 align-self-end">
            <p class="thick m-0">
              Instrumentalstimmen werden kleiner geschnitten
            </p>
            Tagtäglich werden bei uns unzählige Instrumentalstimmen in
            Notenhefte beigelegt; bspw. für Kammermusik ist dies gebräuchliche
            Praxis.
            <p>
              Um zu gewährleisten, dass alle Stimmenbeileger auch ins Heft
              passen (und kein übermäßiger Überstand entsteht), werden diese an
              der Öffnungsseite ca. 3–5 mm kleiner als die Partitur geschnitten.
            </p>
            <p class="thick">
              Bitte beachten Sie dies bei der Anlage der Stimmenauszüge!
            </p>
            <p class="m-0 mb-3">
              Und noch etwas: Gar nicht so selten kommt es vor, dass Stimmen so
              umfangreich oder zahlreich sind, dass sie selbst kleiner
              geschnitten nicht mehr ins Heft passen. Dann legen wir sie der
              Partitur bei und banderolieren das gesamte Set mit einer
              Papierbanderole.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!--Sektion mit Karten und Text unten-->
    <section>
      <div class="container justify-center">
        <div class="row mt-5">
          <div class="col-12 col-md-6 p-4 green customBorder">
            <img src="@/assets/svg/surgical.svg" style="margin-bottom: 25px" alt="Avatar" />

            <h2>
              Sitzt, passt, <br />
              wackelt? Passt.
            </h2>

            <div class="row" style="padding-top: 120px">
              <h2>3 mm</h2>
              <p class="thick">Rundumbeschnitt für ein sauberes Ergebnis</p>
            </div>
          </div>
          <div class="col-12 col-md-6 align-self-end">
            <p class="thick m-0">Beschnitt und Toleranzen</p>
            Wir produzieren Ihre Noten mit modernen Maschinen, die ein Höchstmaß
            an Präzision und Registerhaltigkeit ermöglichen. Dennoch sind
            Toleranzbereiche beim Druck unvermeidbar; dies gilt sowohl für die
            Ränder als auch für die Passgenauigkeit von Vorder- zu Rückseite.
            <p>
              Um ganz sicherzugehen, dass wichtige Elemente nicht abgeschnitten
              werden, legen Sie diese bitte mit mindestens 5 mm Abstand von
              jedem Rand (oben, unten, innen, außen) an!
            </p>
            <p>
              Falls Sie Ihr Notenheft in einem Grafikprogramm wie Adobe
              InDesign, Quark Express oder CorelDraw anlegen, fügen Sie bitte 3
              mm umlaufenden Beschnitt hinzu, und lassen Sie Grafiken über den
              Rand hinauslaufen.
            </p>
          </div>

          <div class="w-100"></div>
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
