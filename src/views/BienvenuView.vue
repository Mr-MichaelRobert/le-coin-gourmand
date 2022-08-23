<template>
  <Bienvenu_Background />

  <a href="accueil">
    <div class="pt-40 md:pt-0">
      <Bienvenu_Logo />
      <Bienvenu_Button>ENTRER</Bienvenu_Button>
    </div>
  </a>
</template>

<script>
import Bienvenu_Background from "@/components/Bienvenu_Background.vue";
import Bienvenu_Logo from "@/components/Bienvenu_Logo.vue";
import Bienvenu_Button from "@/components/Bienvenu_Button.vue";

export default {
  name: "BienvenuView",
  components: { Bienvenu_Background, Bienvenu_Logo, Bienvenu_Button },
};
</script>
