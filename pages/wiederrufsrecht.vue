<script lang="ts">
export default {
  name: "PageResolver",
  data() {
    return {
      // AGB sections content will be defined here
      wiederrufsrechtSections: [
        {
          id: 1,
          title: "",
          content: `
                    <p>Verbraucher haben ein vierzehntägiges Widerrufsrecht. Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können (§ 13 BGB).
                         </p>
                         <p>Das Widerrufsrecht besteht nicht bei (Fernabsatz-)Verträgen</p>
                    <ol>
                        <li>
                            <p>zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind,
                                </p>
                        </li>
                        <li>
                            <p>zur Lieferung von Waren, die schnell verderben können oder deren Vertallsdatum schnell überschritten würde,
                                </p>
                        </li>
                        <li>
                            <p>zur Lieferung von Ton- oder Videoaufnahmen oder Computersoftware in einer versiegelten Packung, wenn die Versiegelung nach der Lieferung entfernt wurde
                                </p>
                        </li>
                        <li>
                            <p>zur Lieferung von Zeitungen, Zeitschriften oder Illustrierten mit Ausnahme von Abonnement-Verträgen.
                                </p>
                        </li>
                    </ol>`,
        },
        {
          id: 2,
          title: "Widerrufsbelehrung",
          content: `
                    <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die letzte Ware in Besitz genommen haben bzw. hat.
                    </p>
                    <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (AURIO GmbH, Augsburger Straße 9, 86497 Horgau / Tel. 08294 8601888 / office@aurioprint.com) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.
                    </p>`,
        },
        {
          id: 3,
          title: "Folgen des Widerrufs",
          content: `
                    <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt ha-ben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurück-zuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmit-tel, das Sie bei der ursprünglichen Trans aktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet. Wir können die Rückzahlung verweigern, bis wir die Waren wieder zurückerhalten haben oder bis Sie den Nachweis erbracht haben, dass Sie die Waren zurückgesandt haben, je nachdem, welches der frühere Zeitpunkt ist.
                    </p>
                    <p>Sie haben die Waren unverzüglich und in jedem Fall spätestens binnen vierzehn Tagen ab dem Tag, an dem Sie uns über den Widerruf dieses Vertrags unterrichten, an uns zurückzusenden oder zu übergeben. Die Frist ist gewahrt, wenn Sie die Waren vor Ablauf der Frist von vierzehn Tagen absenden. Sie tragen die unmittelbaren Kosten der Rücksendung der Waren.
                    </p>
                    <p>Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.
                    </p>`,
        },
      ],
    };
  },
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
    <h1>AURIOPRINT Widerrufsrecht</h1>
    <p>Stand: 01.01.2023</p>

    <!-- AGB Sections -->
    <section v-for="section in wiederrufsrechtSections" :key="section.id" class="pt-5">
      <h5>{{ section.title }}</h5>
      <div v-html="section.content"></div>
    </section>
  </div>
</template>
<style></style>
