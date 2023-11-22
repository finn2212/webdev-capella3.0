<template>
    <div>
      <h1>Confirm Registration</h1>
      <div v-if="message">{{ message }}</div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { confirmAccountRegistration } from "@shopware-pwa/api-client"; // Ensure this path is correct
  import { useShopwareContext } from "@shopware-pwa/composables-next"; // Adjust based on your setup
  
  const router = useRouter();
  const message = ref('');
  const { apiInstance } = useShopwareContext();
  
  onMounted(async () => {
    try {
      const { em, hash } = router.currentRoute.value.query;
      if (!em || !hash) {
        message.value = 'Invalid confirmation data.';
        return;
      }
      // Pass the apiInstance as part of the call
      const response = await confirmAccountRegistration({ em, hash }, apiInstance);
      message.value = 'Registration confirmed successfully.';
    } catch (error) {
      message.value = `Failed to confirm registration. Error: ${error.message}`;
    }
  });
  </script>
  