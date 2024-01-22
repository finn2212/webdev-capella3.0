<script lang="ts">
export default {
  name: "PageResolver",
  data() {
    return {
      // AGB sections content will be defined here
      agbSections: [
        {
          id: 1,
          title: "§ 1 Geltungsbereich und Vertragspartner",
          content: `
                    <ol>
                        <li>
                            <p>Für den Vertrag gelten ausschließlich diese Allgemeinen Geschäftsbedingungen (nachfolgend: AGB). Entgegenstehende, abweichende oder ergänzende Geschäftsbedingungen werden nicht Vertragsbestandteil, auch wenn wir ihnen nicht ausdrücklich widersprechen. Individuelle Vertragsabreden haben Vorrang.</p>
                        </li>
                        <li>
                            <p>Der Vertrag kommt zustande zwischen dem Besteller (nachfolgend: Auftraggeber) und der AURIO GmbH / AURIOPRINT, vertreten durch ihren Geschäftsführer Sebastian Gabriel, Augsburger Straße 9, D-86497 Horgau (nachfolgend: Auftragnehmer).</p>
                        </li>
                        <li>
                            <p>Der Auftraggeber ist Verbraucher, wenn er den Vertrag zu Zwecken abschließt, die überwiegend weder seiner gewerblichen noch seiner selbständigen beruflichen Tätigkeit zugerechnet werden können. Der Auftraggeber ist Unternehmer, wenn er bei Abschluss des Vertrages in Ausübung seiner gewerblichen oder selbständigen beruflichen Tätigkeit handelt.</p>
                        </li>
                    </ol>`,
        },
        {
          id: 2,
          title: "§ 2 Angebot und Vertragsschluss",
          content: `
                    <ol>
                        <li>
                            <p>Die Abbildung bzw. Beschreibung von Waren und Leistungen auf der Website des Auftragnehmers stellt noch kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Abgabe von Angeboten dar. Ein bindendes Angebot (§ 145 BGB) ist erst die Bestellung der Ware oder Leistung durch den Auftraggeber, welche durch Anklicken des Buttons »JETZT KAUFEN« ausgelöst wird.</p>
                        </li>
                        <li>
                            <p>Der Auftragnehmer kann das Angebot innerhalb von zwei Werktagen durch den Versand einer Auftragsbestätigung per E-Mail annehmen.</p>
                        </li>
                        <li>
                            <p>Die unmittelbar nach der Bestellung automatisch per E-Mail versandte Bestätigung des Zugangs der Bestellung stellt noch keine Vertragsannahme dar.</p>
                        </li>
                    </ol>`,
        },
        {
          id: 3,
          title: "§ 3 Lieferung",
          content: `
                    <ol>
                        <li>
                            <p>Sofern nichts anderes vereinbart ist, liefert der Auftragnehmer an die vom Auftraggeber angegebene Lieferadresse.</p>
                        </li>
                        <li>
                            <p>Die Lieferfristen hängen von der einzelnen Bestellung ab und ergeben sich aus den jeweiligen Waren- und Leistungsbeschreibungen.</p>
                        </li>
                    </ol>`,
        },
        {
          id: 4,
          title: "§ 4 Preise; Versandkosten; Zollgebühren",
          content: `
                    <ol>
                        <li>
                            <p>Bestellungen werden zu dem in der Waren- und Leistungsbeschreibung angegebenen Preis ausgeführt. Sämtliche Preise verstehen sich in Euro und enthalten die gesetzliche Umsatzsteuer und sonstige Preisbestandteile. Nicht enthalten sind die Kosten des Versands; diese trägt der Auftraggeber. Eine Information zu Versandkosten erfolgt in der Waren- bzw. Leistungsbeschreibung. Die konkret anfallenden Versandkosten werden bei Aufruf des Warenkorbs und unmittelbar vor Abgabe der Bestellung angezeigt und auf der Rechnung gesondert ausgewiesen.</p>
                        </li>
                    <li>
                            <p>Fallen Zollgebühren an, trägt diese der Auftraggeber.</p>
                        </li>
                    </ol>`,
        },
        {
          id: 5,
          title: "§ 5 Eigentumsvorbehalt",
          content: `
                    <ol>
                        <li>
                            <p>Bestellungen werden zu dem in der Waren- und Leistungsbeschreibung angegebenen Preis ausgeführt. Sämtliche Preise verstehen sich in Euro und enthalten die gesetzliche Umsatzsteuer und sonstige Preisbestandteile. Nicht enthalten sind die Kosten des Versands; diese trägt der Auftraggeber. Eine Information zu Versandkosten erfolgt in der Waren- bzw. Leistungsbeschreibung. Die konkret anfallenden Versandkosten werden bei Aufruf des Warenkorbs und unmittelbar vor Abgabe der Bestellung angezeigt und auf der Rechnung gesondert ausgewiesen.</p>
                        </li>
                    </ol>`,
        },
        {
          id: 6,
          title: "§ 6 Zahlung",
          content: `
                    <ol>
                        <li>
                            <p>Die Zahlung erfolgt nach Wahl des Auftraggebers mittels eines bei Beginn des Bestellvorgangs
angezeigten Zahlungsmittels. </p>
                        </li>
                    </ol>`,
        },
        {
          id: 7,
          title: "§ 7 Zurückbehaltung",
          content: `
                    <ol>
                        <li>
                            <p>Zur Ausübung eines Zurückbehaltungsrechts ist der Auftraggeber nur berechtigt, sofern sein
fälliger Gegenanspruch auf demselben Vertragsverhältnis beruht. </p>
                        </li>
                    </ol>`,
        },
        {
          id: 8,
          title: "§ 8 Gewährleistung; Zulieferungen",
          content: `
                    <ol>
                        <li>
                            <p>Z(1) Ist die Leistung bzw. die gelieferte Ware mangelhaft, gelten die gesetzlichen Gewährleistungsvorschriften. </p>
                        </li>
                        <li>
                            <p>(2) Zulieferungen (insbesondere Datenträger, übertragene Daten) durch den Auftraggeber oder
durch einen von ihm eingeschalteten Dritten unterliegen, sofern nicht ausdrücklich anders
vereinbart, keiner Prüfungspflicht seitens des Auftragnehmers. Dies gilt nicht für die technische
Eignung von Zulieferungen zur ordnungsgemäßen Erfüllung des Auftrags, soweit die
mangelnde Eignung einem sorgfältig handelnden Auftragnehmer erkennbar werden muss.</p>
                        </li>
                    </ol>`,
        },
        {
          id: 9,
          title: "§ 9 Virenschutz; Datensicherung",
          content: `
                    <ol>
                        <li>
                            <p>(1) Bei Datenübertragungen hat der Auftraggeber vor Übersendung jeweils dem neuesten
technischen Stand entsprechende Schutzprogramme für Computerviren einzusetzen.</p>
                        </li>
                        <li>
                            <p>(2) Die Datensicherung obliegt allein dem Auftraggeber. Der Auftragnehmer ist berechtigt,
eine Kopie anzufertigen.</p>
                        </li>
                    </ol>`,
        },
        {
          id: 10,
          title: "§ 10 Datenlöschung; Archivierung; Versicherung",
          content: `
                    <ol>
                        <li>
                            <p>(1) Soweit einer Löschung nicht gesetzliche Aufbewahrungsfristen entgegenstehen, werden die
dem Auftragnehmer zur Durchführung des Auftrags übermittelten und beim Auftragnehmer
gespeicherten Daten des Auftraggebers nach Vertragserfüllung gelöscht, es sei denn, der
Auftraggeber vereinbart mit dem Auftragnehmer ihre Archivierung gem. Abs. 2.</p>
                        </li>
                        <li>
                            <p>(2) Die übermittelten Daten, Datenträger und ähnlichen Materialien sowie Zwischenerzeugnisse
werden, soweit sie keiner gesetzlichen Aufbewahrungsfrist unterliegen, vom Auftragnehmer nur
nach ausdrücklicher Vereinbarung und gegen besondere Vergütung über den Zeitpunkt der
Übergabe des Endprodukts an den Auftraggeber oder seinen Erfüllungsgehilfen hinaus
archiviert. Sollen die vorbezeichneten Materialien versichert werden, so hat dies bei fehlender
gesonderter Vereinbarung der Auftraggeber selbst zu besorgen.</p>
                        </li>
                    </ol>`,
        },
        {
          id: 11,
          title: "§ 11 Rechte Dritter",
          content: `
                    <ol>
                        <li>
                            <p>(1) Der Auftraggeber versichert, dass durch seine Auftragsvorgaben, insbesondere durch von
ihm gelieferte Vorlagen, keine Rechte Dritter, insbesondere Urheber-, Kennzeichen-,
Persönlichkeitsrechte oder sonstigen Schutzrechte Dritter verletzt werden und/oder gegen
geltendes Recht verstoßen.</p>
                        </li>
                        <li>
                            <p>(2) Der Auftraggeber stellt insoweit den Auftragnehmer von sämtlichen Ansprüchen Dritter
einschließlich der erforderlichen Kosten der Rechtsverteidigung und/oder Rechtsverfolgung
vollumfänglich frei, es sei denn, der Auftraggeber weist nach, dass ihm ein Verschulden nicht
zur Last fällt und er allen ihm obliegenden Sorgfalts- und Prüfpflichten nachgekommen ist.</p>
                        </li>
                    </ol>`,
        },
        {
          id: 12,
          title: "§ 12 Erfüllungsort; Gerichtsstand",
          content: `
                    <ol>
                        <li>
                            <p>Ist der Auftraggeber Unternehmer im Sinne von § 14 BGB, juristische Person des öffentlichen
Rechts oder öffentlich-rechtliches Sondervermögen, ist Erfüllungsort und ausschließlicher
Gerichtsstand für alle sich aus dem Vertragsverhältnis ergebenden Streitigkeiten der Sitz des
Auftragnehmers.</p>
                        </li>
                    </ol>`,
        },
        {
          id: 13,
          title:
            "§ 13 Alternative Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO und § 36 VSBG",
          content: `
                    <ol>
                        <li>
                            <p>(1) Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die
Sie unter http://ec.europa.eu/consumers/odr/ finden.</p>
                        </li>
                        <li>
                            <p>(2) Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle ist
der Auftragnehmer nicht verpflichtet und grundsätzlich nicht bereit.</p>
                        </li>
                    </ol>`,
        },
        // More sections go here
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
  <div class="agb-container container top">
    <h1>Online-AGB www.capellaprint.com</h1>
    <p>Stand: 2. Mai 2023</p>
    <h3>Allgemeine Geschäftsbedingungen (AGB)</h3>

    <!-- AGB Sections -->
    <section v-for="section in agbSections" :key="section.id" class="pt-5">
      <h5>{{ section.title }}</h5>
      <div v-html="section.content"></div>
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
