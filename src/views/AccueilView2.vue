<template>
  <Navbar_Main />
  <Bienvenu_Background />
  <Ice_Background />
</template>

<script>
import Navbar_Main from "@/components/Navbar_Main.vue";
import Bienvenu_Background from "@/components/backgrounds/Bienvenu_Background.vue";
import Ice_Background from "@/components/backgrounds/Ice_Background.vue";

export default {
  name: "HomeView2",
  components: {
    Navbar_Main,
    Bienvenu_Background,
    Ice_Background,
  },    
 };
</script>

<style>
</style>
