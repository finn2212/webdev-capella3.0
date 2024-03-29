<script setup lang="ts">
import { getSmallestThumbnailUrl } from "@shopware-pwa/helpers-next";
import { LineItem } from "@shopware-pwa/types";
import propertyMappings from '../../objects/propertyMappings'
import { watchEffect } from 'vue';


const props = withDefaults(
  defineProps<{
    cartItem: LineItem;
    maxQty?: number;
  }>(),
  {
    maxQty: 100,
  },
);

const { cartItem } = toRefs(props);
const propertieStrings: any = ref([]);
const isLoading = ref(false);
const { codeErrorsNotification } = useCartNotification();

const {
  itemOptions,
  removeItem,
  itemTotalPrice,
  itemQuantity,
  isPromotion,
  changeItemQuantity,
} = useCartItem(cartItem);
const getIds = () => {
  const payload: any = cartItem.value.payload
  const propertyIds = payload.propertyIds

  if (propertyIds) {
    propertieStrings.value = [];
    Object.values(propertyIds).forEach((id: any) => {
      // Search through each mapping to find the property
      Object.values(propertyMappings).forEach((mapping: any) => {
        Object.values(mapping).forEach((property: any) => {
          if (property.id === id) {
            propertieStrings.value.push({ "id": property.category, "name": property.name });
          }
        });
      });
    });
  }
};
onMounted(() => {
  getIds();
})
watchEffect(() => {
  getIds();
});


const quantity = ref();
syncRefs(itemQuantity, quantity);

const updateQuantity = async (quantity: number | undefined) => {
  if (quantity === itemQuantity.value) return;

  isLoading.value = true;

  await changeItemQuantity(Number(quantity));
  codeErrorsNotification();

  isLoading.value = false;
};
const debounceUpdate = useDebounceFn(updateQuantity, 800);

watch(quantity, () => debounceUpdate(quantity.value));

const removeCartItem = async () => {
  isLoading.value = true;
  await removeItem();
  isLoading.value = false;
};
</script>

<template>
  <div v-if="!isPromotion" class="mr-4 h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
    <img :src="getSmallestThumbnailUrl(cartItem.cover)"
      :alt="`${cartItem.label || cartItem.payload.name || ''} cart item`" class="h-full w-full object-cover object-center"
      data-testid="cart-product-image" />
  </div>

  <div class="flex flex-1 flex-col">
    <div>
      <div class="flex flex-col lg:flex-row justify-between text-base font-medium text-gray-900">
        <h3 class="text-base" data-testid="cart-product-name">
          <strong class="mr-1">ProjektTitel: </strong> {{ cartItem.label }}
          <span v-if="isPromotion"
            class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Promotion</span>
        </h3>
        <SharedPrice v-if="itemTotalPrice" :value="itemTotalPrice" data-testid="cart-product-price" />
      </div>
      <div v-if="propertieStrings" class="flex flex-col items-start">
        <p v-for="(property, index) in propertieStrings" :key="index" class="flex items-center text-left mt-1">
          <strong class="mr-1">{{ property.id }}: </strong> <span>{{ property.name }}</span>
        </p>
      </div>
      <p v-if="itemOptions" class="mt-1 text-sm text-gray-500" data-testid="cart-product-options">
        <span v-for="option in itemOptions" :key="option.group" class="mr-2">
          {{ option.group }}: {{ option.option }}
        </span>
      </p>
    </div>
    <div v-if="!isPromotion" class="flex flex-1 items-end justify-end text-sm">
      <!-- <input
        v-model="quantity"
        type="number"
        :disabled="isLoading"
        :min="cartItem.quantityInformation?.minPurchase || 1"
        :max="cartItem.quantityInformation?.maxPurchase || maxQty"
        :step="cartItem.quantityInformation?.purchaseSteps || 1"
        data-testid="cart-product-qty-select"
        name="quantity"
        aria-label="Cart item quantity"
        class="w-18 mt-1 inline-block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      /> -->
      <div class="flex">
        <button v-if="!isPromotion" type="button" class="font-medium text-brand-dark bg-transparent"
          :class="{ 'text-gray-500': isLoading }" data-testid="product-remove-button" @click="removeCartItem">
          {{ $t("checkout.items.removeButton") }}
        </button>
      </div>
    </div>
  </div>
</template>
