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
  <div class="agb-container container top">
    <h1>Datenschutzerkl&auml;rung</h1>

    <h2>1) Einleitung und Kontaktdaten des Verantwortlichen</h2>

    <p>
      <b>1.1</b>&nbsp;Wir freuen uns, dass Sie unsere Website besuchen und
      bedanken uns f&uuml;r Ihr Interesse. Im Folgenden informieren wir Sie
      &uuml;ber den Umgang mit Ihren personenbezogenen Daten bei der Nutzung
      unserer Website. Personenbezogene Daten sind hierbei alle Daten, mit denen
      Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
    </p>

    <p>
      <b>1.2</b>&nbsp;Verantwortlicher f&uuml;r die Datenverarbeitung auf dieser
      Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist AURIO GmbH,
      Augsburger Stra&szlig;e 9, 86497 Horgau, Deutschland, Tel.: 08294 /
      8604974, E-Mail: office@aurioprint.com. Der f&uuml;r die Verarbeitung von
      personenbezogenen Daten Verantwortliche ist diejenige nat&uuml;rliche oder
      juristische Person, die allein oder gemeinsam mit anderen &uuml;ber die
      Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
      entscheidet.
    </p>

    <h2>2) Datenerfassung beim Besuch unserer Website</h2>

    <p>
      <b>2.1</b>&nbsp;Bei der blo&szlig; informatorischen Nutzung unserer
      Website, also wenn Sie sich nicht registrieren oder uns anderweitig
      Informationen &uuml;bermitteln, erheben wir nur solche Daten, die Ihr
      Browser an den Seitenserver &uuml;bermittelt (sog.
      &bdquo;Server-Logfiles&#8220;). Wenn Sie unsere Website aufrufen, erheben
      wir die folgenden Daten, die f&uuml;r uns technisch erforderlich sind, um
      Ihnen die Website anzuzeigen:
    </p>

    <ul>
      <li>Unsere besuchte Website</li>
      <li>Datum und Uhrzeit zum Zeitpunkt des Zugriffes</li>
      <li>Menge der gesendeten Daten in Byte</li>
      <li>Quelle/Verweis, von welchem Sie auf die Seite gelangten</li>
      <li>Verwendeter Browser</li>
      <li>Verwendetes Betriebssystem</li>
      <li>Verwendete IP-Adresse (ggf.: in anonymisierter Form)</li>
    </ul>

    <p>
      Die Verarbeitung erfolgt gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO auf
      Basis unseres berechtigten Interesses an der Verbesserung der
      Stabilit&auml;t und Funktionalit&auml;t unserer Website. Eine Weitergabe
      oder anderweitige Verwendung der Daten findet nicht statt. Wir behalten
      uns allerdings vor, die Server-Logfiles nachtr&auml;glich zu
      &uuml;berpr&uuml;fen, sollten konkrete Anhaltspunkte auf eine
      rechtswidrige Nutzung hinweisen.
    </p>

    <p>
      <b>2.2</b>&nbsp;Diese Website nutzt aus Sicherheitsgr&uuml;nden und zum
      Schutz der &Uuml;bertragung personenbezogener Daten und anderer
      vertraulicher Inhalte (z.B. Bestellungen oder Anfragen an den
      Verantwortlichen) eine SSL-bzw. TLS-Verschl&uuml;sselung. Sie k&ouml;nnen
      eine verschl&uuml;sselte Verbindung an der Zeichenfolge
      &bdquo;https://&#8220; und dem Schloss-Symbol in Ihrer Browserzeile
      erkennen.
    </p>

    <h2>3) Hosting &amp; Content-Delivery-Network</h2>

    <p>Creoline</p>

    <p>
      Wir nutzen ein Content Delivery Network des folgenden Anbieters: Creoline
      GmbH, Bergstra&szlig;e 9a, 48341 Altenberge, Deutschland
    </p>

    <p>
      Dieser Dienst erm&ouml;glicht uns, gro&szlig;e Mediendateien wie Grafiken,
      Seiteninhalte oder Skripte &uuml;ber ein Netz regional verteilter Server
      schneller auszuliefern. Die Verarbeitung erfolgt zur Wahrung unseres
      berechtigten Interesses an der Verbesserung der Stabilit&auml;t und
      Funktionalit&auml;t unserer Website gem. Art. 6 Abs. 1 lit. f DSGVO.
    </p>

    <p>
      Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen,
      der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine
      unberechtigte Weitergabe an Dritte untersagt.
    </p>

    <h2>4) Cookies</h2>

    <p>
      Um den Besuch unserer Website attraktiv zu gestalten und die Nutzung
      bestimmter Funktionen zu erm&ouml;glichen, verwenden wir Cookies, also
      kleine Textdateien, die auf Ihrem Endger&auml;t abgelegt werden. Teilweise
      werden diese Cookies nach Schlie&szlig;en des Browsers automatisch wieder
      gel&ouml;scht (sog. &bdquo;Session-Cookies&#8220;), teilweise verbleiben
      diese Cookies l&auml;nger auf Ihrem Endger&auml;t und erm&ouml;glichen das
      Speichern von Seiteneinstellungen (sog. &bdquo;persistente
      Cookies&#8220;). Im letzteren Fall k&ouml;nnen Sie die Speicherdauer der
      &Uuml;bersicht zu den Cookie-Einstellungen Ihres Webbrowsers entnehmen.
    </p>

    <p>
      Sofern durch einzelne von uns eingesetzte Cookies auch personenbezogene
      Daten verarbeitet werden, erfolgt die Verarbeitung gem&auml;&szlig; Art. 6
      Abs. 1 lit. b DSGVO entweder zur Durchf&uuml;hrung des Vertrages,
      gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO im Falle einer erteilten
      Einwilligung oder gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO zur Wahrung
      unserer berechtigten Interessen an der bestm&ouml;glichen
      Funktionalit&auml;t der Website sowie einer kundenfreundlichen und
      effektiven Ausgestaltung des Seitenbesuchs.
    </p>

    <p>
      Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber das Setzen
      von Cookies informiert werden und einzeln &uuml;ber deren Annahme
      entscheiden oder die Annahme von Cookies f&uuml;r bestimmte F&auml;lle
      oder generell ausschlie&szlig;en k&ouml;nnen.
    </p>

    <p>
      Bitte beachten Sie, dass bei Nichtannahme von Cookies die
      Funktionalit&auml;t unserer Website eingeschr&auml;nkt sein kann.
    </p>

    <h2>5) Kontaktaufnahme</h2>

    <p>
      Im Rahmen der Kontaktaufnahme mit uns (z.B. per Kontaktformular oder
      E-Mail) werden &ndash; ausschlie&szlig;lich zum Zweck der Bearbeitung und
      Beantwortung Ihres Anliegens und nur im daf&uuml;r erforderlichen Umfang
      &ndash; personenbezogene Daten verarbeitet.
    </p>

    <p>
      Rechtsgrundlage f&uuml;r die Verarbeitung dieser Daten ist unser
      berechtigtes Interesse an der Beantwortung Ihres Anliegens
      gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO. Zielt Ihre Kontaktierung auf
      einen Vertrag ab, so ist zus&auml;tzliche Rechtsgrundlage f&uuml;r die
      Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden gel&ouml;scht,
      wenn sich aus den Umst&auml;nden entnehmen l&auml;sst, dass der betroffene
      Sachverhalt abschlie&szlig;end gekl&auml;rt ist und sofern keine
      gesetzlichen Aufbewahrungspflichten entgegenstehen.
    </p>

    <h2>6) Datenverarbeitung bei Er&ouml;ffnung eines Kundenkontos</h2>

    <p>
      Gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO werden personenbezogene Daten
      im jeweils erforderlichen Umfang weiterhin erhoben und verarbeitet, wenn
      Sie uns diese bei der Er&ouml;ffnung eines Kundenkontos mitteilen. Welche
      Daten f&uuml;r die Kontoer&ouml;ffnung erforderlich sind, entnehmen Sie
      der Eingabemaske des entsprechenden Formulars auf unserer Website.
    </p>

    <p>
      Eine L&ouml;schung Ihres Kundenkontos ist jederzeit m&ouml;glich und kann
      durch eine Nachricht an die o.g. Adresse des Verantwortlichen erfolgen.
      Nach L&ouml;schung Ihres Kundenkontos werden Ihre Daten gel&ouml;scht,
      sofern alle dar&uuml;ber geschlossenen Vertr&auml;ge vollst&auml;ndig
      abgewickelt sind, keine gesetzlichen Aufbewahrungsfristen entgegenstehen
      und unsererseits kein berechtigtes Interesse an der Weiterspeicherung
      fortbesteht.
    </p>

    <h2>7) Nutzung von Kundendaten zur Direktwerbung</h2>

    <p><b>7.1</b>&nbsp;Anmeldung zu unserem E-Mail-Newsletter</p>

    <p>
      Wenn Sie sich zu unserem E-Mail Newsletter anmelden, &uuml;bersenden wir
      Ihnen regelm&auml;&szlig;ig Informationen zu unseren Angeboten.
      Pflichtangabe f&uuml;r die &Uuml;bersendung des Newsletters ist allein
      Ihre E-Mailadresse. Die Angabe weiterer Daten ist freiwillig und wird
      verwendet, um Sie pers&ouml;nlich ansprechen zu k&ouml;nnen. F&uuml;r den
      Newsletter-Versand verwenden wir das sog. Double Opt-in Verfahren, mit dem
      sichergestellt wird, dass Sie Newsletter erst erhalten, wenn Sie uns durch
      Bet&auml;tigung eines an die angegebene Mailadresse versandten
      Verifizierungslinks ausdr&uuml;cklich Ihre Einwilligung in den
      Newsletterempfang best&auml;tigt haben
    </p>

    <p>
      Mit der Aktivierung des Best&auml;tigungslinks erteilen Sie uns Ihre
      Einwilligung f&uuml;r die Nutzung Ihrer personenbezogenen Daten
      gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO. Hierbei speichern wir Ihre
      vom Internet Service-Provider (ISP) eingetragene IP-Adresse sowie das
      Datum und die Uhrzeit der Anmeldung, um einen m&ouml;glichen Missbrauch
      Ihrer E-Mail- Adresse zu einem sp&auml;teren Zeitpunkt nachvollziehen zu
      k&ouml;nnen. Die von uns bei der Anmeldung zum Newsletter erhobenen Daten
      werden streng zweckgebunden verwendet.
    </p>

    <p>
      Sie k&ouml;nnen den Newsletter jederzeit &uuml;ber den daf&uuml;r
      vorgesehenen Link im Newsletter oder durch entsprechende Nachricht an den
      eingangs genannten Verantwortlichen abbestellen. Nach erfolgter Abmeldung
      wird Ihre E-Mailadresse unverz&uuml;glich in unserem Newsletter-Verteiler
      gel&ouml;scht, soweit Sie nicht ausdr&uuml;cklich in eine weitere Nutzung
      Ihrer Daten eingewilligt haben oder wir uns eine dar&uuml;berhinausgehende
      Datenverwendung vorbehalten, die gesetzlich erlaubt ist und &uuml;ber die
      wir Sie in dieser Erkl&auml;rung informieren.
    </p>

    <p><b>7.2</b>&nbsp;Versand des E-Mail-Newsletters an Bestandskunden</p>

    <p>
      Wenn Sie uns Ihre E-Mailadresse beim Kauf von Waren bzw. Dienstleistungen
      zur Verf&uuml;gung gestellt haben, behalten wir uns vor, Ihnen
      regelm&auml;&szlig;ig Angebote zu &auml;hnlichen Waren bzw.
      Dienstleistungen, wie den bereits gekauften, aus unserem Sortiment per
      E-Mail zuzusenden. Hierf&uuml;r m&uuml;ssen wir gem&auml;&szlig; &sect; 7
      Abs. 3 UWG keine gesonderte Einwilligung von Ihnen einholen. Die
      Datenverarbeitung erfolgt insoweit allein auf Basis unseres berechtigten
      Interesses an personalisierter Direktwerbung gem&auml;&szlig; Art. 6 Abs.
      1 lit. f DSGVO. Haben Sie der Nutzung Ihrer E-Mailadresse zu diesem Zweck
      anf&auml;nglich widersprochen, findet ein Mailversand unsererseits nicht
      statt.
    </p>

    <p>
      Sie sind berechtigt, der Nutzung Ihrer E-Mailadresse zu dem
      vorbezeichneten Werbezweck jederzeit mit Wirkung f&uuml;r die Zukunft
      durch eine Mitteilung an den zu Beginn genannten Verantwortlichen zu
      widersprechen. Hierf&uuml;r fallen f&uuml;r Sie lediglich
      &Uuml;bermittlungskosten nach den Basistarifen an. Nach Eingang Ihres
      Widerspruchs wird die Nutzung Ihrer E-Mailadresse zu Werbezwecken
      unverz&uuml;glich eingestellt.
    </p>

    <h2>8) Datenverarbeitung zur Bestellabwicklung</h2>

    <p>
      <b>8.1</b>&nbsp;Soweit f&uuml;r die Vertragsabwicklung zu Liefer- und
      Zahlungszwecken erforderlich, werden die von uns erhobenen
      personenbezogenen Daten gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO an das
      beauftragte Transportunternehmen und das beauftragte Kreditinstitut
      weitergegeben.
    </p>

    <p>
      Sofern wir Ihnen auf Grundlage eines entsprechenden Vertrages
      Aktualisierungen f&uuml;r Waren mit digitalen Elementen oder f&uuml;r
      digitale Produkte schulden, verarbeiten wir die von Ihnen bei der
      Bestellung &uuml;bermittelten Kontaktdaten (Name, Anschrift, Mailadresse),
      um Sie im Rahmen unserer gesetzlichen Informationspflichten
      gem&auml;&szlig; Art. 6 Abs. 1 lit. c DSGVO auf geeignetem
      Kommunikationsweg (etwa postalisch oder per Mail) &uuml;ber anstehende
      Aktualisierungen im gesetzlich vorgesehenen Zeitraum pers&ouml;nlich zu
      informieren. Ihre Kontaktdaten werden hierbei streng zweckgebunden
      f&uuml;r Mitteilungen &uuml;ber von uns geschuldete Aktualisierungen
      verwendet und zu diesem Zweck durch uns nur insoweit verarbeitet, wie dies
      f&uuml;r die jeweilige Information erforderlich ist.
    </p>

    <p>
      Zur Abwicklung Ihrer Bestellung arbeiten wir ferner mit dem / den
      nachstehenden Dienstleister(n) zusammen, die uns ganz oder teilweise bei
      der Durchf&uuml;hrung geschlossener Vertr&auml;ge unterst&uuml;tzen. An
      diese Dienstleister werden nach Ma&szlig;gabe der folgenden Informationen
      gewisse personenbezogene Daten &uuml;bermittelt.
    </p>

    <p>
      <b>8.2</b>&nbsp;Weitergabe personenbezogener Daten an Versanddienstleister
    </p>

    <p>- Deutsche Post</p>

    <p>
      Als Transportdienstleister nutzen wir den nachstehenden Anbieter: Deutsche
      Post AG, Charles-de-Gaulle-Stra&szlig;e 20, 53113 Bonn, Deutschland
    </p>

    <p>
      Wir geben Ihre E-Mail-Adresse und/oder Telefonnummer gem&auml;&szlig; Art.
      6 Abs. 1 lit. a DSGVO vor der Zustellung der Ware zum Zweck der Abstimmung
      eines Liefertermins bzw. zur Lieferank&uuml;ndigung an den Anbieter
      weiter, sofern Sie hierf&uuml;r im Bestellprozess Ihre ausdr&uuml;ckliche
      Einwilligung erteilt haben. Anderenfalls geben wir zum Zwecke der
      Zustellung gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO nur den Namen des
      Empf&auml;ngers und die Lieferadresse an den Anbieter weiter. Die
      Weitergabe erfolgt nur, soweit dies f&uuml;r die Warenlieferung
      erforderlich ist. In diesem Fall ist eine vorherige Abstimmung des
      Liefertermins mit dem Anbieter bzw. die Lieferank&uuml;ndigung nicht
      m&ouml;glich.
    </p>

    <p>
      Die Einwilligung kann jederzeit mit Wirkung f&uuml;r die Zukunft
      gegen&uuml;ber dem oben bezeichneten Verantwortlichen oder gegen&uuml;ber
      dem Anbieter widerrufen werden.<br />
      - DHL
    </p>

    <p>
      Als Transportdienstleister nutzen wir den nachstehenden Anbieter: DHL
      Paket GmbH, Str&auml;&szlig;chensweg 10, 53113 Bonn, Deutschland
    </p>

    <p>
      Wir geben Ihre E-Mail-Adresse und/oder Telefonnummer gem&auml;&szlig; Art.
      6 Abs. 1 lit. a DSGVO vor der Zustellung der Ware zum Zweck der Abstimmung
      eines Liefertermins bzw. zur Lieferank&uuml;ndigung an den Anbieter
      weiter, sofern Sie hierf&uuml;r im Bestellprozess Ihre ausdr&uuml;ckliche
      Einwilligung erteilt haben. Anderenfalls geben wir zum Zwecke der
      Zustellung gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO nur den Namen des
      Empf&auml;ngers und die Lieferadresse an den Anbieter weiter. Die
      Weitergabe erfolgt nur, soweit dies f&uuml;r die Warenlieferung
      erforderlich ist. In diesem Fall ist eine vorherige Abstimmung des
      Liefertermins mit dem Anbieter bzw. die Lieferank&uuml;ndigung nicht
      m&ouml;glich.
    </p>

    <p>
      Die Einwilligung kann jederzeit mit Wirkung f&uuml;r die Zukunft
      gegen&uuml;ber dem oben bezeichneten Verantwortlichen oder gegen&uuml;ber
      dem Anbieter widerrufen werden.
    </p>

    <p>
      <b>8.3</b>&nbsp;Verwendung von Paymentdienstleistern (Zahlungsdiensten)
    </p>

    <p>- Apple Pay</p>

    <p>
      Wenn Sie sich f&uuml;r die Zahlungsart &bdquo;Apple Pay&#8220; der Apple
      Distribution International (Apple), Hollyhill Industrial Estate,
      Hollyhill, Cork, Irland, entscheiden, erfolgt die Zahlungsabwicklung
      &uuml;ber die &bdquo;Apple Pay&#8220;-Funktion Ihres mit iOS, watchOS oder
      macOS betriebenen Endger&auml;tes durch die Belastung einer bei
      &bdquo;Apple Pay&#8220; hinterlegten Zahlungskarte. Apple Pay verwendet
      hierbei Sicherheitsfunktionen, die in die Hardware und Software Ihres
      Ger&auml;ts integriert sind, um Ihre Transaktionen zu sch&uuml;tzen.
      F&uuml;r die Freigabe einer Zahlung ist somit die Eingabe eines zuvor
      durch Sie festgelegten Codes sowie die Verifizierung mittels der
      &bdquo;Face ID&#8220;- oder &bdquo;Touch ID&#8220; &ndash; Funktion ihres
      Endger&auml;tes erforderlich.
    </p>

    <p>
      Zum Zwecke der Zahlungsabwicklung werden Ihre im Rahmen des
      Bestellvorgangs mitgeteilten Informationen nebst den Informationen
      &uuml;ber Ihre Bestellung in verschl&uuml;sselter Form an Apple
      weitergegeben. Apple verschl&uuml;sselt diese Daten sodann erneut mit
      einem entwicklerspezifischen Schl&uuml;ssel, bevor die Daten zur
      Durchf&uuml;hrung der Zahlung an den Zahlungsdienstleister der in Apple
      Pay hinterlegten Zahlungskarte &uuml;bermittelt werden. Die
      Verschl&uuml;sselung sorgt daf&uuml;r, dass nur die Website, &uuml;ber die
      der Einkauf get&auml;tigt wurde, auf die Zahlungsdaten zugreifen kann.
      Nachdem die Zahlung get&auml;tigt wurde, sendet Apple zur Best&auml;tigung
      des Zahlungserfolges Ihre Ger&auml;teaccountnummer sowie einen
      transaktionsspezifischen, dynamischen Sicherheitscode an die
      Ausgangswebsite.
    </p>

    <p>
      Sofern bei den beschriebenen &Uuml;bermittlungen personenbezogene Daten
      verarbeitet werden, erfolgt die Verarbeitung ausschlie&szlig;lich zum
      Zwecke der Zahlungsabwicklung gem&auml;&szlig; Art. 6 Abs. 1 lit. b DSGVO.
    </p>

    <p>
      Apple bewahrt anonymisierte Transaktionsdaten auf, darunter der
      ungef&auml;hre Kaufbetrag, das ungef&auml;hre Datum und die ungef&auml;hre
      Uhrzeit sowie die Angabe, ob die Transaktion erfolgreich abgeschlossen
      wurde. Durch die Anonymisierung wird ein Personenbezug vollst&auml;ndig
      ausgeschlossen. Apple nutzt die anonymisierten Daten zur Verbesserung von
      &bdquo;Apple Pay&#8220; und anderen Apple-Produkten und Diensten.
    </p>

    <p>
      Wenn Sie Apple Pay auf dem iPhone oder der Apple Watch zum Abschluss eines
      Kaufs verwenden, den Sie &uuml;ber Safari auf dem Mac get&auml;tigt haben,
      kommunizieren der Mac und das Autorisierungsger&auml;t &uuml;ber einen
      verschl&uuml;sselten Kanal auf den Apple-Servern. Apple verarbeitet oder
      speichert keine dieser Informationen in einem Format, mit dem Ihre Person
      identifiziert werden kann. Sie k&ouml;nnen die M&ouml;glichkeit zur
      Verwendung von Apple Pay auf Ihrem Mac in den Einstellungen Ihres iPhone
      deaktivieren. Gehen Sie zu &quot;Wallet &amp; Apple Pay&quot;, und
      deaktivieren Sie &quot;Zahlungen auf Mac erlauben&quot;.
    </p>

    <p>
      Weitere Hinweise zum Datenschutz bei Apple Pay finden Sie unter der
      nachstehenden Internetadresse:
      <a href="https://support.apple.com/de-de/HT203027" target="_blank"
        >https://support.apple.com<wbr />/de-de<wbr />/HT203027</a
      ><br />
      - Klarna
    </p>

    <p>
      Auf dieser Website stehen eine oder mehrere Online-Zahlungsarten des
      folgenden Anbieters zur Verf&uuml;gung: Klarna Bank AB, Sveav&auml;gen 46,
      111 34 Stockholm, Schweden
    </p>

    <p>
      Bei Auswahl einer Zahlungsart des Anbieters, bei der Sie in Vorleistung
      gehen (etwa Kreditkartenzahlung), werden an diesen Ihre im Rahmen des
      Bestellvorgangs mitgeteilten Zahlungsdaten (darunter Name, Anschrift,
      Bank- und Zahlkarteninformationen, W&auml;hrung und Transaktionsnummer)
      sowie Informationen &uuml;ber den Inhalt Ihrer Bestellung gem&auml;&szlig;
      Art. 6 Abs. 1 lit. b DSGVO weitergegeben. Die Weitergabe Ihrer Daten
      erfolgt in diesem Falle ausschlie&szlig;lich zum Zweck der
      Zahlungsabwicklung mit dem Anbieter und nur insoweit, als sie hierf&uuml;r
      erforderlich ist.
    </p>

    <p>
      Bei Auswahl einer Zahlungsart, bei der der Anbieter in Vorleistung geht
      (etwa Rechnungs- oder Ratenkauf bzw. Lastschrift), werden Sie im
      Bestellablauf auch aufgefordert, bestimmte pers&ouml;nliche Daten (Vor-
      und Nachname, Stra&szlig;e, Hausnummer, Postleitzahl, Ort, Geburtsdatum,
      E-Mail-Adresse, Telefonnummer, ggf. Daten zu einem alternativen
      Zahlungsmittel) anzugeben.
    </p>

    <p>
      Um unser berechtigtes Interesse an der Feststellung der
      Zahlungsf&auml;higkeit unserer Kunden zu wahren, werden diese Daten von
      uns gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO zum Zweck einer
      Bonit&auml;tspr&uuml;fung an den Anbieter weitergeleitet. Der Anbieter
      pr&uuml;ft auf Basis der von Ihnen angegebenen pers&ouml;nlichen Daten
      sowie weiterer Daten (wie etwa Warenkorb, Rechnungsbetrag,
      Bestellhistorie, Zahlungserfahrungen), ob die von Ihnen ausgew&auml;hlte
      Zahlungsm&ouml;glichkeit im Hinblick auf Zahlungs- und/oder
      Forderungsausfallrisiken gew&auml;hrt werden kann.
    </p>

    <p>
      Zur Entscheidung im Rahmen der Antragspr&uuml;fung k&ouml;nnen neben
      anbieterinternen Kriterien gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO
      auch Identit&auml;ts- und Bonit&auml;tsinformationen von folgenden
      Auskunfteien einbezogen werden:
    </p>

    <p>
      <a
        href="https://cdn.klarna.com/1.0/shared/content/legal/terms/0/de_de/credit_rating_agencies"
        target="_blank"
        >https://cdn.klarna.com<wbr />/1.0<wbr />/shared<wbr />/content<wbr />/legal<wbr />/terms<wbr />/0<wbr />/de_de<wbr />/credit_rating_agencies</a
      >
    </p>

    <p>
      Die Bonit&auml;tsauskunft kann Wahrscheinlichkeitswerte enthalten (sog.
      Score-Werte). Soweit Score-Werte in das Ergebnis der Bonit&auml;tsauskunft
      einflie&szlig;en, haben sie ihre Grundlage in einem wissenschaftlich
      anerkannten mathematisch-statistischen Verfahren. In die Berechnung der
      Score-Werte flie&szlig;en unter anderem, aber nicht ausschlie&szlig;lich,
      Anschriftendaten ein.
    </p>

    <p>
      Sie k&ouml;nnen dieser Verarbeitung Ihrer Daten jederzeit durch eine
      Nachricht an uns oder gegen&uuml;ber dem Anbieter widersprechen. Jedoch
      bleibt der Anbieter ggf. weiterhin berechtigt, Ihre personenbezogenen
      Daten zu verarbeiten, sofern dies zur vertragsgem&auml;&szlig;en
      Zahlungsabwicklung erforderlich ist.<br />
      - Mollie
    </p>

    <p>
      Auf dieser Website stehen eine oder mehrere Online-Zahlungsarten des
      folgenden Anbieters zur Verf&uuml;gung: Mollie B.V., Keizersgracht 313,
      1016 EE Amsterdam, Niederlande
    </p>

    <p>
      Bei Auswahl einer Zahlungsart des Anbieters, bei der Sie in Vorleistung
      gehen (etwa Kreditkartenzahlung), werden an diesen Ihre im Rahmen des
      Bestellvorgangs mitgeteilten Zahlungsdaten (darunter Name, Anschrift,
      Bank- und Zahlkarteninformationen, W&auml;hrung und Transaktionsnummer)
      sowie Informationen &uuml;ber den Inhalt Ihrer Bestellung gem&auml;&szlig;
      Art. 6 Abs. 1 lit. b DSGVO weitergegeben. Die Weitergabe Ihrer Daten
      erfolgt in diesem Falle ausschlie&szlig;lich zum Zweck der
      Zahlungsabwicklung mit dem Anbieter und nur insoweit, als sie hierf&uuml;r
      erforderlich ist.<br />
      - Paypal
    </p>

    <p>
      Auf dieser Website stehen eine oder mehrere Online-Zahlungsarten des
      folgenden Anbieters zur Verf&uuml;gung: PayPal (Europe) S.a.r.l. et Cie,
      S.C.A., 22-24 Boulevard Royal, L-2449 Luxemburg
    </p>

    <p>
      Bei Auswahl einer Zahlungsart des Anbieters, bei der Sie in Vorleistung
      gehen, werden an diesen Ihre im Rahmen des Bestellvorgangs mitgeteilten
      Zahlungsdaten (darunter Name, Anschrift, Bank- und
      Zahlkarteninformationen, W&auml;hrung und Transaktionsnummer) sowie
      Informationen &uuml;ber den Inhalt Ihrer Bestellung gem&auml;&szlig; Art.
      6 Abs. 1 lit. b DSGVO weitergegeben. Die Weitergabe Ihrer Daten erfolgt in
      diesem Falle ausschlie&szlig;lich zum Zweck der Zahlungsabwicklung mit dem
      Anbieter und nur insoweit, als sie hierf&uuml;r erforderlich ist.
    </p>

    <p>
      Bei Auswahl einer Zahlungsart, bei der wir in Vorleistung gehen, werden
      Sie im Bestellablauf auch aufgefordert, bestimmte pers&ouml;nliche Daten
      (Vor- und Nachname, Stra&szlig;e, Hausnummer, Postleitzahl, Ort,
      Geburtsdatum, E-Mail-Adresse, Telefonnummer, ggf. Daten zu einem
      alternativen Zahlungsmittel) anzugeben.
    </p>

    <p>
      Um in solchen F&auml;llen unser berechtigtes Interesse an der Feststellung
      Ihrer Zahlungsf&auml;higkeit zu wahren, werden diese Daten von uns
      gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO zum Zwecke einer
      Bonit&auml;tspr&uuml;fung an den Anbieter weitergeleitet. Der Anbieter
      pr&uuml;ft auf Basis der von Ihnen angegebenen pers&ouml;nlichen Daten
      sowie weiterer Daten (wie etwa Warenkorb, Rechnungsbetrag,
      Bestellhistorie, Zahlungserfahrungen), ob die von Ihnen ausgew&auml;hlte
      Zahlungsm&ouml;glichkeit im Hinblick auf Zahlungs- und/oder
      Forderungsausfallrisiken gew&auml;hrt werden kann.
    </p>

    <p>
      Die Bonit&auml;tsauskunft kann Wahrscheinlichkeitswerte enthalten (sog.
      Score-Werte). Soweit Score-Werte in das Ergebnis der Bonit&auml;tsauskunft
      einflie&szlig;en, haben sie ihre Grundlage in einem wissenschaftlich
      anerkannten mathematisch-statistischen Verfahren. In die Berechnung der
      Score-Werte flie&szlig;en unter anderem, aber nicht ausschlie&szlig;lich,
      Anschriftendaten ein.
    </p>

    <p>
      Sie k&ouml;nnen dieser Verarbeitung Ihrer Daten jederzeit durch eine
      Nachricht an uns oder gegen&uuml;ber dem Anbieter widersprechen. Jedoch
      bleibt der Anbieter ggf. weiterhin berechtigt, Ihre personenbezogenen
      Daten zu verarbeiten, sofern dies zur vertragsgem&auml;&szlig;en
      Zahlungsabwicklung erforderlich ist.<br />
      - SOFORT
    </p>

    <p>
      Auf dieser Website stehen eine oder mehrere Online-Zahlungsarten des
      folgenden Anbieters zur Verf&uuml;gung: SOFORT GmbH, Theresienh&ouml;he
      12, 80339 M&uuml;nchen, Deutschland
    </p>

    <p>
      Bei Auswahl einer Zahlungsart des Anbieters, bei der Sie in Vorleistung
      gehen (etwa Kreditkartenzahlung), werden an diesen Ihre im Rahmen des
      Bestellvorgangs mitgeteilten Zahlungsdaten (darunter Name, Anschrift,
      Bank- und Zahlkarteninformationen, W&auml;hrung und Transaktionsnummer)
      sowie Informationen &uuml;ber den Inhalt Ihrer Bestellung gem&auml;&szlig;
      Art. 6 Abs. 1 lit. b DSGVO weitergegeben. Die Weitergabe Ihrer Daten
      erfolgt in diesem Falle ausschlie&szlig;lich zum Zweck der
      Zahlungsabwicklung mit dem Anbieter und nur insoweit, als sie hierf&uuml;r
      erforderlich ist.
    </p>

    <h2>9) Webanalysedienste</h2>

    <p>Google Tag Manager</p>

    <p>
      Diese Website nutzt den &bdquo;Google Tag Manager&#8220;, einen Dienst des
      folgenden Anbieters: Google Ireland Limited, Gordon House, Barrow Street,
      Dublin 4, Irland (nachfolgend: &bdquo;Google&#8220;).
    </p>

    <p>
      Der Google Tag Manager bietet eine technische Grundlage daf&uuml;r,
      diverse Webanwendungen, darunter auch Tracking- und Analysedienste, zu
      b&uuml;ndeln und &uuml;ber eine einheitliche Benutzeroberfl&auml;che
      kalibrieren, steuern und an Bedingungen kn&uuml;pfen zu k&ouml;nnen. Der
      Google Tag Manager selbst speichert keine Informationen auf
      Nutzerendger&auml;ten oder liest diese aus. Auch nimmt der Dienst keine
      eigenst&auml;ndigen Datenanalysen vor. Allerdings wird durch den Google
      Tag Manager bei Seitenaufruf Ihre IP-Adresse an Google &uuml;bertragen und
      dort gegebenenfalls gespeichert. Auch eine &Uuml;bermittlung an Server von
      Google LLC. In den USA ist m&ouml;glich.
    </p>

    <p>
      Diese Verarbeitung wird nur dann vollzogen, wenn Sie uns gem&auml;&szlig;
      Art. 6 Abs. 1 lit. a DSGVO dazu Ihre ausdr&uuml;ckliche Einwilligung
      erteilt haben. Ohne diese Einwilligungserteilung unterbleibt der Einsatz
      von Google Tag Manager w&auml;hrend Ihres Seitenbesuchs. Sie k&ouml;nnen
      Ihre erteilte Einwilligung jederzeit mit Wirkung f&uuml;r die Zukunft
      widerrufen. Um Ihren Widerruf auszu&uuml;ben, deaktivieren Sie diesen
      Dienst bitte in dem auf der Webseite bereitgestellten
      &bdquo;Cookie-Consent-Tool&#8220;.
    </p>

    <p>
      Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag geschlossen,
      der den Schutz der Daten unserer Seitenbesucher sicherstellt und eine
      unberechtigte Weitergabe an Dritte untersagt.
    </p>

    <p>
      F&uuml;r Daten&uuml;bermittlungen in die USA hat sich der Anbieter dem
      EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das
      auf Basis eines Angemessenheitsbeschlusses der Europ&auml;ischen
      Kommission die Einhaltung des europ&auml;ischen
      Datenschutzniveaus&nbsp;sicherstellt.
    </p>

    <h2>10) Seitenfunktionalit&auml;ten</h2>

    <p><b>10.1</b>&nbsp;Google Web Fonts</p>

    <p>
      Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
      sogenannte Web Fonts des folgenden Anbieters: Google Ireland Limited,
      Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland
    </p>

    <p>
      Beim Aufruf einer Seite l&auml;dt Ihr Browser die ben&ouml;tigten Web
      Fonts in ihren Browser-Cache, um Texte und Schriftarten korrekt anzuzeigen
      und stellt eine direkte Verbindung zu den Servern des Anbieters her.
      Hierbei werden bestimmte Browserinformationen, einschlie&szlig;lich Ihrer
      IP-Adresse, an den Anbieter &uuml;bermittelt.
    </p>

    <p>Daten k&ouml;nnen zudem &uuml;bermittelt werden an: Google LLC, USA</p>

    <p>
      Die Verarbeitung von personenbezogenen Daten im Zuge der
      Verbindungsaufnahme mit dem Anbieter der Schriftarten wird nur dann
      vollzogen, wenn Sie uns gem&auml;&szlig; Art. 6 Abs. 1 lit. a DSGVO dazu
      Ihre ausdr&uuml;ckliche Einwilligung erteilt haben. Sie k&ouml;nnen Ihre
      erteilte Einwilligung jederzeit mit Wirkung f&uuml;r die Zukunft
      widerrufen, indem Sie diesen Dienst &uuml;ber das auf der Webseite
      bereitgestellte &bdquo;Cookie-Consent-Tool&#8220; deaktivieren. Falls Ihr
      Browser keine Web Fonts unterst&uuml;tzt, wird eine Standardschrift von
      Ihrem Computer genutzt.
    </p>

    <p>
      F&uuml;r Daten&uuml;bermittlungen in die USA hat sich der Anbieter dem
      EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das
      auf Basis eines Angemessenheitsbeschlusses der Europ&auml;ischen
      Kommission die Einhaltung des europ&auml;ischen
      Datenschutzniveaus&nbsp;sicherstellt.
    </p>

    <p><b>10.2</b>&nbsp;Google reCAPTCHA</p>

    <p>
      Auf dieser Website verwenden wir den CAPTCHA-Dienst des folgenden
      Anbieters: Google Ireland Limited, Gordon House, 4 Barrow St, Dublin, D04
      E5W5, Irland
    </p>

    <p>
      Daten k&ouml;nnen zudem &uuml;bermittelt werden an: Google LLC, USA.
      F&uuml;r die optische Gestaltung des Captcha-Fensters werden vom Anbieter
      &bdquo;Google Fonts&quot;, also von Google aus dem Internet geladene
      Schriftarten, verwendet. Zu einer Verarbeitung weiterer Informationen als
      den oben genannten, die bereits &uuml;ber die Funktionalit&auml;t von
      ReCaptcha an Google &uuml;bertragen werden, kommt es hierbei nicht.
    </p>

    <p>
      Der Dienst pr&uuml;ft, ob eine Eingabe durch eine nat&uuml;rliche Person
      oder missbr&auml;uchlich durch maschinelle und automatisierte Verarbeitung
      erfolgt, und blockiert Spam, DDoS-Attacken sowie &auml;hnliche
      automatisierte Schadzugriffe. Um sicherzustellen, dass eine Handlung von
      einem Menschen und nicht von einem automatisierten Bot vorgenommen wird,
      erhebt der Anbieter die IP-Adresse des verwendeten Endger&auml;ts,
      Erkennungsdaten des verwendeten Browser- und Betriebssystem-Typ sowie
      Datum und Dauer des Besuchs und &uuml;bermittelt diese zur Auswertung an
      Server des Anbieters.
    </p>

    <p>
      Rechtsgrundlage ist unser berechtigtes Interesse an der Feststellung der
      individuellen Eigenverantwortung im Internet und der Vermeidung von
      Missbrauch und Spam gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO.
    </p>

    <p>
      Wir haben mit dem Anbieter einen Auftragsverarbeitungsvertrag
      abgeschlossen, der den Schutz der Daten unserer Seitenbesucher
      sicherstellt und eine unberechtigte Weitergabe an Dritte untersagt.
    </p>

    <p>
      F&uuml;r Daten&uuml;bermittlungen in die USA hat sich der Anbieter dem
      EU-US-Datenschutzrahmen (EU-US Data Privacy Framework) angeschlossen, das
      auf Basis eines Angemessenheitsbeschlusses der Europ&auml;ischen
      Kommission die Einhaltung des europ&auml;ischen
      Datenschutzniveaus&nbsp;sicherstellt.
    </p>

    <h2>11) Tools und Sonstiges</h2>

    <p><b>11.1</b>&nbsp;- sevDesk</p>

    <p>
      F&uuml;r die Erledigung der Buchhaltung nutzen wir den Service der
      cloudbasierten Buchhaltungssoftware des folgenden Anbieters: sevDesk GmbH,
      Hauptstra&szlig;e 115, 77652 Offenburg, Deutschland
    </p>

    <p>
      Der Anbieter verarbeitet Eingangs- und Ausgangsrechnungen sowie ggf. auch
      die Bankbewegungen unseres Unternehmens, um Rechnungen automatisch zu
      erfassen, zu den Transaktionen zu matchen und hieraus in einem
      teilautomatisierten Prozess die Finanzbuchhaltung zu erstellen.
    </p>

    <p>
      Sofern hierbei auch personenbezogene Daten verarbeitet werden, erfolgt die
      Verarbeitung gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres
      berechtigten Interesses an einer effizienten Organisation und
      Dokumentation unserer Gesch&auml;ftsvorg&auml;nge.
    </p>

    <p><b>11.2</b>&nbsp;Cookie-Consent-Tool</p>

    <p>
      Diese Website nutzt zur Einholung wirksamer Nutzereinwilligungen f&uuml;r
      einwilligungspflichtige Cookies und cookie-basierte Anwendungen ein sog.
      &bdquo;Cookie-Consent-Tool&#8220;. Das &bdquo;Cookie-Consent-Tool&#8220;
      wird Nutzern bei Seitenaufruf in Form einer interaktive
      Benutzeroberfl&auml;che angezeigt, auf welcher sich per
      H&auml;kchensetzung Einwilligungen f&uuml;r bestimmte Cookies und/oder
      cookie-basierte Anwendungen erteilen lassen. Hierbei werden durch den
      Einsatz des Tools alle einwilligungspflichtigen Cookies/Dienste nur dann
      geladen, wenn der jeweilige Nutzer entsprechende Einwilligungen per
      H&auml;kchensetzung erteilt. So wird sichergestellt, dass nur im Falle
      einer erteilten Einwilligung derartige Cookies auf dem jeweiligen
      Endger&auml;t des Nutzers gesetzt werden.
    </p>

    <p>
      Das Tool setzt technisch notwendige Cookies, um Ihre
      Cookie-Pr&auml;ferenzen zu speichern. Personenbezogene Nutzerdaten werden
      hierbei grunds&auml;tzlich nicht verarbeitet.
    </p>

    <p>
      Kommt es im Einzelfall zum Zwecke der Speicherung, Zuordnung oder
      Protokollierung von Cookie-Einstellungen doch zur Verarbeitung
      personenbezogener Daten (wie etwa der IP-Adresse), erfolgt diese
      gem&auml;&szlig; Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten
      Interesses an einem rechtskonformen, nutzerspezifischen und
      nutzerfreundlichen Einwilligungsmanagement f&uuml;r Cookies und mithin an
      einer rechtskonformen Ausgestaltung unseres Internetauftritts.
    </p>

    <p>
      Weitere Rechtsgrundlage f&uuml;r die Verarbeitung ist ferner Art. 6 Abs. 1
      lit. c DSGVO. Wir unterliegen als Verantwortliche der rechtlichen
      Verpflichtung, den Einsatz technisch nicht notwendiger Cookies von der
      jeweiligen Nutzereinwilligung abh&auml;ngig zu machen.
    </p>

    <p>
      Soweit erforderlich, haben wir mit dem Anbieter einen
      Auftragsverarbeitungsvertrag geschlossen, der den Schutz der Daten unserer
      Seitenbesucher sicherstellt und eine unberechtigte Weitergabe an Dritte
      untersagt.
    </p>

    <p>
      Weitere Informationen zum Betreiber und den Einstellungsm&ouml;glichkeiten
      des Cookie-Consent-Tools finden Sie direkt in der entsprechenden
      Benutzeroberfl&auml;che auf unserer Website.
    </p>

    <h2>12) Rechte des Betroffenen</h2>

    <p>
      <b>12.1</b>&nbsp;Das geltende Datenschutzrecht gew&auml;hrt Ihnen
      gegen&uuml;ber dem Verantwortlichen hinsichtlich der Verarbeitung Ihrer
      personenbezogenen Daten die nachstehenden Betroffenenrechte (Auskunfts-
      und Interventionsrechte), wobei f&uuml;r die jeweiligen
      Aus&uuml;bungsvoraussetzungen auf die angef&uuml;hrte Rechtsgrundlage
      verwiesen wird:
    </p>

    <ul>
      <li>Auskunftsrecht gem&auml;&szlig; Art. 15 DSGVO;</li>
      <li>Recht auf Berichtigung gem&auml;&szlig; Art. 16 DSGVO;</li>
      <li>Recht auf L&ouml;schung gem&auml;&szlig; Art. 17 DSGVO;</li>
      <li>
        Recht auf Einschr&auml;nkung der Verarbeitung gem&auml;&szlig; Art. 18
        DSGVO;
      </li>
      <li>Recht auf Unterrichtung gem&auml;&szlig; Art. 19 DSGVO;</li>
      <li>
        Recht auf Daten&uuml;bertragbarkeit gem&auml;&szlig; Art. 20 DSGVO;
      </li>
      <li>
        Recht auf Widerruf erteilter Einwilligungen gem&auml;&szlig; Art. 7 Abs.
        3 DSGVO;
      </li>
      <li>Recht auf Beschwerde gem&auml;&szlig; Art. 77 DSGVO.</li>
    </ul>

    <p><b>12.2</b>&nbsp;WIDERSPRUCHSRECHT</p>

    <p>
      WENN WIR IM RAHMEN EINER INTERESSENABW&Auml;GUNG IHRE PERSONENBEZOGENEN
      DATEN AUFGRUND UNSERES &Uuml;BERWIEGENDEN BERECHTIGTEN INTERESSES
      VERARBEITEN, HABEN SIE DAS JEDERZEITIGE RECHT, AUS GR&Uuml;NDEN, DIE SICH
      AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIESE VERARBEITUNG
      WIDERSPRUCH MIT WIRKUNG F&Uuml;R DIE ZUKUNFT EINZULEGEN.
    </p>

    <p>
      MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE
      VERARBEITUNG DER BETROFFENEN DATEN. EINE WEITERVERARBEITUNG BLEIBT ABER
      VORBEHALTEN, WENN WIR ZWINGENDE SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R
      DIE VERARBEITUNG NACHWEISEN K&Ouml;NNEN, DIE IHRE INTERESSEN, GRUNDRECHTE
      UND GRUNDFREIHEITEN &Uuml;BERWIEGEN, ODER WENN DIE VERARBEITUNG DER
      GELTENDMACHUNG, AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN
      DIENT.
    </p>

    <p>
      WERDEN IHRE PERSONENBEZOGENEN DATEN VON UNS VERARBEITET, UM DIREKTWERBUNG
      ZU BETREIBEN, HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
      VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE
      DERARTIGER WERBUNG EINZULEGEN. SIE K&Ouml;NNEN DEN WIDERSPRUCH WIE OBEN
      BESCHRIEBEN AUS&Uuml;BEN.
    </p>

    <p>
      MACHEN SIE VON IHREM WIDERSPRUCHSRECHT GEBRAUCH, BEENDEN WIR DIE
      VERARBEITUNG DER BETROFFENEN DATEN ZU DIREKTWERBEZWECKEN.
    </p>

    <h2>13) Dauer der Speicherung personenbezogener Daten</h2>

    <p>
      Die Dauer der Speicherung von personenbezogenen Daten bemisst sich anhand
      der jeweiligen Rechtsgrundlage, am Verarbeitungszweck und &ndash; sofern
      einschl&auml;gig &ndash; zus&auml;tzlich anhand der jeweiligen
      gesetzlichen Aufbewahrungsfrist (z.B. handels- und steuerrechtliche
      Aufbewahrungsfristen).
    </p>

    <p>
      Bei der Verarbeitung von personenbezogenen Daten auf Grundlage einer
      ausdr&uuml;cklichen Einwilligung gem&auml;&szlig; Art. 6 Abs. 1 lit. a
      DSGVO werden die betroffenen Daten so lange gespeichert, bis Sie Ihre
      Einwilligung widerrufen.
    </p>

    <p>
      Existieren gesetzliche Aufbewahrungsfristen f&uuml;r Daten, die im Rahmen
      rechtsgesch&auml;ftlicher bzw. rechtsgesch&auml;fts&auml;hnlicher
      Verpflichtungen auf der Grundlage von Art. 6 Abs. 1 lit. b DSGVO
      verarbeitet werden, werden diese Daten nach Ablauf der
      Aufbewahrungsfristen routinem&auml;&szlig;ig gel&ouml;scht, sofern sie
      nicht mehr zur Vertragserf&uuml;llung oder Vertragsanbahnung erforderlich
      sind und/oder unsererseits kein berechtigtes Interesse an der
      Weiterspeicherung fortbesteht.
    </p>

    <p>
      Bei der Verarbeitung von personenbezogenen Daten auf Grundlage von Art. 6
      Abs. 1 lit. f DSGVO werden diese Daten so lange gespeichert, bis Sie Ihr
      Widerspruchsrecht nach Art. 21 Abs. 1 DSGVO aus&uuml;ben, es sei denn, wir
      k&ouml;nnen zwingende schutzw&uuml;rdige Gr&uuml;nde f&uuml;r die
      Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten
      &uuml;berwiegen, oder die Verarbeitung dient der Geltendmachung,
      Aus&uuml;bung oder Verteidigung von Rechtsanspr&uuml;chen.
    </p>

    <p>
      Bei der Verarbeitung von personenbezogenen Daten zum Zwecke der
      Direktwerbung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO werden diese
      Daten so lange gespeichert, bis Sie Ihr Widerspruchsrecht nach Art. 21
      Abs. 2 DSGVO aus&uuml;ben.
    </p>

    <p>
      Sofern sich aus den sonstigen Informationen dieser Erkl&auml;rung
      &uuml;ber spezifische Verarbeitungssituationen nichts anderes ergibt,
      werden gespeicherte personenbezogene Daten im &Uuml;brigen dann
      gel&ouml;scht, wenn sie f&uuml;r die Zwecke, f&uuml;r die sie erhoben oder
      auf sonstige Weise verarbeitet wurden, nicht mehr notwendig sind.
    </p>
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
