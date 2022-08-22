<template>
  <button
    class="bg-regal-blue tracking-widest hover:opacity-50 duration-300 text-white text-xl rounded py-1.5 px-4 mx-2"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonNavbar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
