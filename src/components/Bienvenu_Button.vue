<template>
<div class="flex ">
  <button
    class="Bienvenu_Button bg-yellow-cream text-pink-cream tracking-widest hover:opacity-50 duration-300 text-xl rounded-ice py-6 px-16 m-auto"
  >
    <slot></slot>
  </button>
</div>
</template>

<script>
export default {
  name: "Bienvenu_Button",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.Bienvenu_Button {
  font-weight: 900;
}
</style>
