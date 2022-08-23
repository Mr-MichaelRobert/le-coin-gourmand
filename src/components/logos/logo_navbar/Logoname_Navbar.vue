<template>
<div class="flex justify-between hover:scale-105">
<div class="Logo_Navbar">
    <div class="m-auto flex items-center">
      <div
        class="rounded-full hover:rotate-12 bg-yellow-cream p-1.5 flex justify-around border-purple-cream border-2"
        style="width: 60px; height: 60px"
      >
        <img
          src="../../../assets/img/logo-navbar/logo-navbar.png"
          alt=""
          style="height: 45px"
        />
      </div>
    </div>
  </div>
  <div class="Logoname_Navbar">
    <div class="mt-2">
      <img
        class="md:hidden"
        src="../../../assets/img/logo-navbar/logoname-navbar-sm.png"
        alt=""
        style="height: 50px ; max-width: 400px;"
      />

      <img
        class="hidden md:flex"
        src="../../../assets/img/logo-navbar/logoname-navbar-md.png"
        alt=""
        style="height: 40px ; max-width: 400px;"
      />
      
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Logoname_Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.Logoname_Navbar {
}
</style>
