<template>
    <header>
        <NavbarTop/>
    </header>


<div class="h-screen" style="background-color:#F3F0BF;">
    <div class="flex justify-around items-center text-center p-5 pt-2 bg-white m-auto h-screen" style="width:50%;">
        <div class="">  <!-- IMAGE -->
            <img src="../assets/img/image_login.jpeg" alt="" style="height:20rem; width:20rem;" class="object-cover" >
        </div>
        <div class="items-center" >
            <h2>connexion :</h2>
            <p>username</p>
        </div>

    </div>
</div>




</template>

<script>

import NavbarTop from '@/components/NavbarTop.vue'

export default {
  name: 'ConnexionView',
  components: {

    NavbarTop,
  }
}
</script>
<style></style>