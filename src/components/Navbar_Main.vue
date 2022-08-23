<template>
  <nav
    class="bg-pink-cream text-yellow-cream font-black font-Modak py-3.5 px-6 shadow-lg flex justify-between"
  >


    <Logoname_Navbar class="lg:self-start"/>

    <div
      @click="MenuOuvrir()"
      class="  grayscale hover:grayscale-0 absolute lg:hidden right-6 top-4 cursor-pointer text-6xl"
    >
      <i :class="[ouvrir ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </div>

    <ul
      class="lg:flex lg:item-center md:px-0 px-10 lg:pb-0 pb-10 lg:static absolute bg-pink-cream opacity-75 lg:w-auto w-full top-20 duration-700 ease-in items-center align-center"
      :class="[ouvrir ? 'left-0' : 'left-[-100%]']"
    >
      <li
        class="lg:mx-3 lg:my-0 my-6"
        v-for="lien in Liens"
        v-bind:key="lien.name"
      >
        <a
          :href="lien.link"
          class="text-xl hover:text-purple-cream align-middle"
          >{{ lien.name }}</a
        >
      </li>
    <Button_Navbar>Commander</Button_Navbar>
    </ul>

  </nav>
</template>

<script>
import { ref } from "@vue/reactivity";

import Logoname_Navbar from "./logos/logo_navbar/Logoname_Navbar.vue";
import Button_Navbar from "./buttons/Button_Navbar.vue";

export default {
  components: { Logoname_Navbar, Button_Navbar },
  setup() {
    let ouvrir = ref(false);
    let Liens = [
      { name: "BIENVENU", link: "/" },
      { name: "ACCUEIL", link: "/accueil" },
      { name: "SAVEURS", link: "/nosgouts" },
      { name: "CONTACT", link: "/a_propos" },
    ];
    function MenuOuvrir() {
      ouvrir.value = !ouvrir.value;
    }
    return { Liens, ouvrir, MenuOuvrir };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
