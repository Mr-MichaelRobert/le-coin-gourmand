<template>
    <header>
        <NavbarTop/>
    </header>

<div class="h-screen" style="background-color:#F3F0BF;">

<div class="flex justify-around items-center text-center  m-auto h-screen" style="width:50%;">
            <form action="sign_up.php" method="post" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="mail">
                        Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mail" type="mail" placeholder="mail">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                    <p class="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div class="flex items-center justify-center">
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Sign Up
                    </button>
                </div>
                <div class="mb-1 mt-4">
                    <a class="inline-block align-baseline font-bold text-md text-blue-500 hover:text-blue-800" href="connexion">
                        You have an account's ?
                    </a>
                </div>
            </form>
        </div>

</div>
</template>

<script>

import NavbarTop from '@/components/NavbarTop.vue'

export default {
  name: 'InscriptionView',
  components: {
    NavbarTop,
  }
  
}

</script>
<style></style>