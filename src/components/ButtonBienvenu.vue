<template>
  <button
    class="bg-yellow-cream text-pink-cream tracking-widest hover:opacity-50 duration-300 text-xl rounded-ice py-1.5 px-4 mx-2"
    style="
      font-weight: 900;
      height: 100px;
      width: 200px;
    "
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonBienvenu",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
