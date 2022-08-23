<template>
  <button
    class="Button_Navbar bg-yellow-cream text-pink-cream tracking-widest hover:bg-purple-cream hover:text-blue-cream duration-300 text-xl rounded-ice py-3 px-8 m-auto"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button_Navbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
