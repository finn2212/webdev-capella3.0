<script setup lang="ts">
import VHeader from '@/components/layout/VHeader.vue';


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
  <LayoutBreadcrumbs />
 <VHeader />
</template>
