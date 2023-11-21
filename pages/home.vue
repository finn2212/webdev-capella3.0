<script setup lang="ts">
const { push } = useRouter();
const { logout, isLoggedIn } = useUser();

const redirectAfterLogin = (path = "/account") => push(path);
const localePath = useLocalePath();
const { formatLink } = useInternationalization(localePath);

onBeforeMount(async () => {
  if (process.client && isLoggedIn.value) {
    // redirect to account page if user is logged in
    navigateTo({ path: "/account" });
  } else {
    await logout(); // if you do a hard reload on the login page, you will be logged out
  }
});

useBreadcrumbs([
  {
    name: "Home",
    path: "/home",
  },
]);
</script>
    
<script lang="ts">
export default {
  name: "HomePage",
};
</script>
    
<template>

</template>
    