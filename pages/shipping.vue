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
    <section>
      <div class="flex flex-col md:flex-row">
        <div class="sm:w-1/2 flex flex-col border-12 border-white">
          <div>
            <h2 class="mt-3">Informationen zum Versand</h2>
            <p class="mt-3">
              Wir versenden weltweit ausschließlich mit Deutsche Post und DHL.
            </p>
            <div class="flex mt-3">
              <div>
                <img src="@/assets/images/post.svg" alt="Avatar" class="mr-3" />
              </div>
              <div>
                <img src="@/assets/images/dhl.svg" alt="Avatar" />
              </div>
            </div>
          </div>

        </div>
        <div class="flex flex-col xl:flex-row md:w-6/9 w-full grey p-5 border-12 border-white">
          <div class="sm:w-1/2 w-full">
            <div>
              <img src="@/assets/svg/forklift.svg" alt="Avatar" />
            </div>
            <div>
              <h2>Standardversand Deutschland</h2>
              <p>inkl. deutscher Inseln</p>
            </div>
            <div>
              <p>Versand per DHL–Warenpost oder DHL Paket</p>

              <p>Warenwert bis 19,99 €: 4,99 €</p>
              <p>Warenwert bis 49,99 €: 6,99 €</p>
              <p>Ab 50 € Warenwert kostenfrei</p>
            </div>
          </div>
          <div class="sm:w-1/2 flex flex-col">
            <div>
              <img src="@/assets/svg/captive_portal.svg" alt="Avatar" />
            </div>
            <div>
              <h2>Internationaler Versand</h2>
            </div>
            <div>
              <p>
                Als Verbraucher im Ausland zahlen Sie Versandkosten abhängig
                vom Auftragswert. Auch international versenden wir
                ausschließlich mit Deutscher Post und DHL.
              </p>

              <p>Europa & Welt</p>
              <p>Warenwert bis 49,99 €: 14,99 €</p>
              <p>Warenwert bis 249,99 €: 33,99 €</p>
              <p>Warenwert bis 499,99 €: 49,99 €</p>
              <p>Warenwert ab 500 €: 69,99 €</p>

              <p>
                Stand: 01.05.2023. Irrtümer und Preisänderungen vorbehalten.
                Preise ggf. zzgl. gesetzl. Mehrwertsteuer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <section>

  </section>
  <div class="container justify-center top">
    <!--Sektion mit 3 Karten und Bider-->
    <section>
      <div>
        <div>

          <div class="">


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
