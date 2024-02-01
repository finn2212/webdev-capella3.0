<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const props = withDefaults(
  defineProps<{
    controller: ReturnType<typeof useModal>;
    side: "left" | "right";
  }>(),
  {
    side: "right",
  },
);

const { controller } = toRefs(props);
const { isOpen, close } = controller.value;

const sidebarContentElement = ref();
onClickOutside(sidebarContentElement, () => close());

const activeRoute = ref('');
const route = useRoute();
watch(route, (newRoute) => {
  activeRoute.value = newRoute.path;
});

</script>

<template>
  <Teleport to="body">
    <Transition enter-active-class="transition ease-out duration-200 transform" enter-from-class="opacity-0"
      enter-to-class="opacity-100" leave-active-class="transition ease-in duration-300 transform"
      leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-show="isOpen" class="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-50">
        <div class="flex items-start justify-center min-h-screen pt-24 text-center">
          <Transition enter-active-class="transition ease-out duration-500 transform" :enter-from-class="side === 'left' ? '-translate-x-full' : 'translate-x-full'
            " :enter-to-class="side === 'left' ? '-translate-x-0' : 'translate-x-0'
    " leave-active-class="transition ease-in duration-300 transform" :leave-from-class="side === 'left' ? '-translate-x-0' : 'translate-x-0'
    " :leave-to-class="side === 'left' ? '-translate-x-full' : 'translate-x-full'
    ">
            <div v-if="isOpen" class="pointer-events-none fixed inset-y-0 flex max-w-full"
              :data-testid="`sidebar-${side}`" :class="{
                'left-0': side === 'left',
                'right-0': side === 'right',
              }">
              <div ref="sidebarContentElement" class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col bg-white shadow-xl">
                  <slot></slot>
                  <div class="flex h-full flex-col justify-start text-left space-y-4 ml-10">
                    <!-- Navigation Links -->
                    <NuxtLink class="justify-start"
                      :class="{ 'text-brand-primary': activeRoute === '/konfigurator', 'text-gray-600 hover:text-brand-primary': activeRoute !== '/konfigurator' }"
                      to="/konfigurator" @click="close">
                      Notenheft konfigurieren
                    </NuxtLink>
                    <NuxtLink
                      :class="{ 'text-brand-primary': activeRoute === '/klammerheftung', 'text-gray-600 hover:text-brand-primary': activeRoute !== '/klammerheftung' }"
                      to="/klammerheftung" @click="close">
                      Noten mit Klammerheftung
                    </NuxtLink>
                    <NuxtLink
                      :class="{ 'text-brand-primary': activeRoute === '/spiralbindung', 'text-gray-600 hover:text-brand-primary': activeRoute !== '/spiralbindung' }"
                      to="/spiralbindung" @click="close">
                      Noten mit Spiralbindung
                    </NuxtLink>
                    <NuxtLink
                      :class="{ 'text-brand-primary': activeRoute === '/good-to-know', 'text-gray-600 hover:text-brand-primary': activeRoute !== '/good-to-know' }"
                      to="/good-to-know" @click="close">
                      Wissenswertes
                    </NuxtLink>
                    <NuxtLink
                      :class="{ 'text-brand-primary': activeRoute === '/contact', 'text-gray-600 hover:text-brand-primary': activeRoute !== '/contact' }"
                      to="/contact" @click="close">
                      Kontakt
                    </NuxtLink>
                  </div>
                </div>

              </div>

            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
