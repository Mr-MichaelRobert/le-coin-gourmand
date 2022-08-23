<template>
  <Bienvenu_Background class="h-screen absolute"/>

  <a href="accueil2">
    <div class="pt-40 md:pt-0">
      <Bienvenu_Logo />
      <Bienvenu_Button>ENTRER</Bienvenu_Button>
    </div>
  </a>
</template>

<script>
import Bienvenu_Background from "@/components/backgrounds/Bienvenu_Background.vue";
import Bienvenu_Logo from "@/components/logos/Bienvenu_Logo.vue";
import Bienvenu_Button from "@/components/buttons/Bienvenu_Button.vue";

export default {
  name: "BienvenuView",
  components: { Bienvenu_Background, Bienvenu_Logo, Bienvenu_Button },
};
</script>
