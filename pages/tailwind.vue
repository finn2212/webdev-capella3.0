<script setup lang="ts">
// import VHeader from '@/components/layout/VHeader.vue';
//import VForm from '~/components/layout/VFORM.vue';
// import VPrices from '~/components/layout/VPrices.vue';
import VAbout from "~/components/layout/VAbout.vue";
import VSideBar from "~/components/layout/VSideBar.vue";

useBreadcrumbs([
  {
    name: "tailwind",
    path: "/tailwind",
  },
]);
</script>

<script lang="ts">
export default {
  name: "Tailwind",
};
</script>

<template>
  <!-- <VSideBar /> -->
  <VAbout />
</template>
