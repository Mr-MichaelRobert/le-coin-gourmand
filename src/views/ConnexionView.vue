<template>
    <header>
        <NavbarTop/>
    </header>


<div class="h-screen" style="background-color:#F3F0BF;">
    <div class="bg-white" v-for="test in Tests" v-bind:key="test.name">
        <h1>{{test.name}}</h1>
    </div>


    <div class="flex justify-around items-center text-center  m-auto h-screen" style="width:50%;">
            <form action="src/php/login.php" method="post" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                    <p class="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div class="flex items-center justify-between">
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Sign In
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
                <div class="mb-1 mt-4">
                    <a class="inline-block align-baseline font-bold text-md text-blue-500 hover:text-blue-800" href="inscription">
                        You don't have an account's ?
                    </a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

import NavbarTop from '@/components/NavbarTop.vue'

export default {
  name: 'ConnexionView',
  components: {
    NavbarTop,
  },

  Data() {

    let Tests = [
      { name: "1", link: "accueil" },
      { name: "2", link: "dgsh" },
    ];
        return { Tests };
},
};
</script>
<style></style>