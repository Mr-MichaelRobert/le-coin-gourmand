<template>
  <nav
    class="bg-ice-pink text-gray-100 py-3.5 px-6 shadow md:flex justify-between items-center"
  >
    <div class="flex items-center">
      
      <span class="mr-5 rounded-full	p-1 hover:rotate-12 bg-white ">
       <img src="../assets/img/glace.png" alt="" style="width:35px; height:40px;" object-cover >
      </span>
      <h1 class="text-3xl">Le Coin Gourmand</h1>
    </div>

    <span @click="MenuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
      <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </span>

    <ul
      class="md:flex md:item-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute bg-ice-pink md:w-auto w-full top-14 duration-700 ease-in items-center align-center"
      :class="[open ? 'left-0' : 'left-[-100%]']"
    >
      <li
        class="md:mx-4 md:my-0 my-6"
        v-for="link in Links"
        v-bind:key="link.name"
      >
        <a :href="link.link" class="text-xl hover:text-sky-300 align-middle">{{
          link.name
        }}</a>
      </li>
      <ButtonNavbar><a href="connexion">Connexion</a></ButtonNavbar>
      <ButtonNavbar>Panier</ButtonNavbar>
    </ul>
  </nav>
  
</template>

<script>
import { ref } from "@vue/reactivity";
import ButtonNavbar from "./ButtonNavbar.vue";

export default {
  components: {
    ButtonNavbar,
  },

  setup() {
    let open = ref(false);

    let Links = [
      { name: "Bienvenu", link: "/" },
      { name: "Accueil", link: "/accueil" },
      { name: "Nos Goûts", link: "/nosgouts" },
      { name: "A propos", link: "/a_propos" },
      { name: "Inscription", link: "/inscription" },
      { name: "Connexion", link: "/connexion" },
    ];

    function MenuOpen() {
      open.value = !open.value;
    }

    return { Links, open, MenuOpen };
  },

};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
