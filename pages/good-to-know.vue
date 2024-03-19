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
    <section class="mt-20">
      <div class="flex flex- md:flex-">
        <div class="md:w-6/9 w-full border-12 border-white">
          <!-- Replace with your image -->
          <img src="@/assets/images/pic11.png" alt="Avatar" class="w-full h-full object-cover">
        </div>
        <div class="flex flex-col md:w-3/9 w-full red p-5 border-12 border-white">
          <div class="flex">
            <img src="@/assets/svg/help.svg" alt="Avatar" class="max-w-15" />
            <h2 class="mt-1 ml-3 font-bold">
              Wissenswertes
            </h2>
          </div>

          <p class="mt-3">
            Bitte beachten Sie unbedingt unsere Druckdatenvorgaben, die Sie
            hier herunterladen können.
          </p>
          <p>
            In Ihrem capella-Notensatzprogramm finden Sie zusätzlich
            Mustervorlagen, mit denen beim Duck nichts mehr schiefgehen kann.
          </p>
          <p class="mb-3">
            Bei Nichtbeachtung kann keine Gewähr für Fehldrucke übernommen
            werden!
          </p>
          <div class="mt-auto">
            <button type="button"
              class="bg-black text-white rounded-full border border-black py-2 px-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex items-center justify-center w-full">
              <img src="@/assets/svg/download.svg" alt="Download" style="height: 19px; margin-right: 10px;">
              <p>Maßvorgaben (PDF)</p>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-20">
      <div class="flex flex- md:flex-">
        <div class="md:w-1/3 w-full border-12 border-white grey p-6">
          <!-- Replace with your image -->
          <img src="@/assets/svg/history_edu.svg" style="margin-bottom: 25px" alt="Avatar" />
          <h2 class="mt-3 font-bold">Unser</h2>
          <h2 class="font-bold">Notenpapier</h2>

          <div class="mt-20 flex">
            <div class="">
              <h2 class="font-bold">90g/m&#178;</h2>
              <p class="mt-3 font-bold">Inhaltspapier</p>
            </div>
            <div class="ml-20">
              <h2 class="font-bold">260g/m&#178;</h2>
              <p class="mt-3 font-bold">Umschlagkarton</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-end md:w-2/3 w-full border-12 border-white">
          <div class="mt-auto">
            <p class="text-black font-bold">Notenpapier für Partitur & Stimmen</p>
            <p class="text-black">
              Bei AURIOPRINT legen wir Wert auf erprobte, klassische
              Notenpapiere mit leicht gelblicher Färbung, wie man sie aus der
              Musikverlagswelt kennt. Unser Notenpapier hat ein Flächengewicht
              von 90g/m&#178; und ist raschelarm beim Umblättern. Zudem blendet
              es nicht im Bühnenlicht und ist somit ein hervorragendes
              »Arbeitspferd« für zigtausende Notenausgaben, die jährlich
              gefertigt werden.
            </p>
            <p class="text-black font-bold mt-3">Umschlagkarton</p>
            <p class="text-black m-0">
              Ursprünglich für die Luxus-Kosmetikindustrie entwickelt (und dort
              noch immer eingesetzt), gibt der von uns verwendete hochweiße
              Umschlagkarton Farben brillant wieder und besitzt ein
              hervorragendes Aufschlagverhalten. Mit einem Flächengewicht von
              260g/m&#178; verleiht er auch umfangreichen Partituren Stabilität.
              Die einseitig matte Oberfläche lässt sich hervorragend bedrucken
              und bricht auch bei starker Beanspruchung nicht auf.
            </p>
            <p class="text-black mt-3 font-bold">
              Kurz: Der beste Karton, den Sie für Ihre Partituren bekommen
              können.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-10">
      <div class="flex flex- md:flex-">
        <div class="md:w-1/3 w-full border-12 border-white darkblue p-6">
          <!-- Replace with your image -->
          <img src="@/assets/svg/print.svg" style="margin-bottom: 25px" alt="Avatar" />
          <h2 class="mt-3 font-bold">Unser</h2>
          <h2 class="font-bold">Druckverfahren</h2>

          <div class="mt-20 flex">
            <div>
              <h2 class="font-bold">100+&#178;</h2>
              <p class="mt-3 font-bold">Druckseiten in Vollfarbe pro Minute</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-end md:w-2/3 w-full border-12 border-white">
          <div class="mt-auto">
            <p class="text-black font-bold">Schnell, effizient, erstklassig</p>
            <p class="text-black">
              Mit diesen Worten kann man die Maschinen beschreiben, auf denen Ihre Partituren entstehen werden: Wir
              produzieren auf hoch leistungsfähigen Tonerfarbmaschinen der Canon-Produktionsklasse, die mit
              Druckgeschgwindigkeiten von über 100 Seiten pro Minute auch bei hohen Auflagen oder zeitkritischen
              Bestellungen nicht ansatzweise nervös werden.
            </p>
            <p class="text-black m-0">
              Ein integriertes Spektralphotometer misst unermüdlich die ausgegebenen Farbwerte und justiert ggf.
              automatisch nach, sodass Sie auch bei hohen Auflagen stets konsistent hohe Qualität erhalten.
            </p>
            <p class="text-black mt-3">
              Der exzellente Consistently-Vivid-Toner lässt die Druckfarben dabei leuchtend zur Geltung kommen.
            </p>
          </div>
        </div>

      </div>
    </section>
    <section class="mt-10">
      <div class="flex flex- md:flex-">
        <div class="md:w-1/3 w-full border-12 border-white yellow p-6">
          <!-- Replace with your image -->
          <img src="@/assets/svg/iron.svg" style="margin-bottom: 25px" alt="Avatar" />
          <h2 class="mt-3 font-bold">Das</h2>
          <h2 class="font-bold">i-Tüpfelchen
          </h2>

          <div class="mt-20 flex">
            <div class="">
              <h2 class="font-bold">700 kg</h2>
              <p class="mt-3 font-bold">Pressdruck für den perfekten Buchrücken
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-end md:w-2/3 w-full border-12 border-white">
          <div class="mt-auto">
            <p class="text-black font-bold">Ein rechteckiger Buchrücken für Ihre Notenhefte</p>
            <p class="text-black">
              Die Weiterverarbeitung, die vollständig bei uns im Haus stattfindet, ist ausgelegt auf Effizienz und
              Qualität. Hierbei darf eine ganz besondere Maschine nicht fehlen: Eine sogenannte Squarefoldpresse. Diese
              presst den nach dem Heften leicht v-förmigen Heftfalz zu einem quadratischen, dem Aussehen eines normalen
              Buchrücken nahekommenden Falz zusammen.
            </p>
            <p class="text-black m-0">
              Diese Nachbehandlung erleichtert nicht nur das folgende Schneiden Ihres Notenhefts, was sich wiederum in
              der
              Genauigkeit widerspiegelt, sondern wertet Ihre Broschüre optisch enorm auf. Zudem sorgt der quadratische
              Rücken für ein noch besseres Aufschlagverhalten Ihrer Partitur.
            </p>
            <p class="text-black mt-3 font-bold">
              Kleiner Schritt – große Wirkung!
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-10">
      <div class="flex flex- md:flex-">
        <div class="md:w-1/3 w-full border-12 border-white pink p-6">
          <!-- Replace with your image -->
          <img src="@/assets/svg/content_cut.svg" style="margin-bottom: 25px" alt="Avatar" />
          <h2 class="mt-3 font-bold">Maßarbeit für </h2>
          <h2 class="font-bold">Stimmen</h2>

          <div class="mt-20 flex flex-col">

            <h2 class="font-bold">3–5 mm</h2>
            <p class="mt-3 font-bold">Frontanschnitt für exakt passende Stimmeneinleger</p>

          </div>
        </div>
        <div class="flex flex-col justify-end md:w-2/3 w-full border-12 border-white">
          <div class="mt-auto">
            <p class="text-black font-bold">Instrumentalstimmen werden kleiner geschnitten</p>
            <p class="text-black">
              Tagtäglich werden bei uns unzählige Instrumentalstimmen in Notenhefte beigelegt; bspw. für Kammermusik ist
              dies gebräuchliche Praxis.
              Um zu gewährleisten, dass alle Stimmenbeileger auch ins Heft passen (und kein übermäßiger Überstand
              entsteht), werden diese an der Öffnungsseite ca. 3–5 mm kleiner als die Partitur geschnitten.
            </p>
            <p class="text-black font-bold mt-3">Bitte beachten Sie dies bei der Anlage der Stimmenauszüge!</p>
            <p class="text-black mt-3">
              Und noch etwas: Gar nicht so selten kommt es vor, dass Stimmen so umfangreich oder zahlreich sind, dass
              sie
              selbst kleiner geschnitten nicht mehr ins Heft passen. Dann legen wir sie der Partitur bei und
              banderolieren
              das gesamte Set mit einer Papierbanderole.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-10">
      <div class="flex flex- md:flex-">
        <div class="md:w-1/3 w-full border-12 border-white green p-6">
          <!-- Replace with your image -->
          <img src="@/assets/svg/surgical.svg" style="margin-bottom: 25px" alt="Avatar" />
          <h2 class="mt-3 font-bold">Sitzt, passt,
          </h2>
          <h2 class="font-bold">wackelt? Passt.</h2>

          <div class="mt-20 flex">
            <div class="">
              <h2 class="font-bold">3 mm</h2>
              <p class="mt-3 font-bold">Rundumbeschnitt für ein sauberes Ergebnis</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-end md:w-2/3 w-full border-12 border-white">
          <div class="mt-auto">
            <p class="text-black font-bold">Beschnitt und Toleranzen</p>
            <p class="text-black">
              Wir produzieren Ihre Noten mit modernen Maschinen, die ein Höchstmaß an Präzision und Registerhaltigkeit
              ermöglichen. Dennoch sind Toleranzbereiche beim Druck unvermeidbar; dies gilt sowohl für die Ränder als
              auch
              für die Passgenauigkeit von Vorder- zu Rückseite.
              Um ganz sicherzugehen, dass wichtige Elemente nicht abgeschnitten werden, legen Sie diese bitte mit
              mindestens 5 mm Abstand von jedem Rand (oben, unten, innen, außen) an!
            </p>
            <p class="text-black m-0">
              Falls Sie Ihr Notenheft in einem Grafikprogramm wie Adobe InDesign, Quark Express oder CorelDraw anlegen,
              fügen Sie bitte 3 mm umlaufenden Beschnitt hinzu, und lassen Sie Grafiken über den Rand hinauslaufen.
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
</style>
